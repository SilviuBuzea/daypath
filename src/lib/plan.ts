import { cityTipFor } from "./cities/tips";
import { centroid, compass, distanceKm } from "./geo";
import type {
  Catalog,
  CityCatalog,
  DayPlan,
  Itinerary,
  MealLocks,
  Place,
  Preferences,
  Stop,
  StopRole,
} from "./types";

const PER_DAY = { relaxed: 2, balanced: 4, packed: 6 } as const;
const MAX_LEG_KM = { relaxed: 2.4, balanced: 3.4, packed: 4.4 } as const;
const WALKING_LEG_BONUS = { any: 0, easy: -0.7, normal: 0, long: 0.8 } as const;
const EMPTY_LOCKS: MealLocks = { lunch: false, dinner: false, evening: false };

export function createItinerary(city: CityCatalog, prefs: Preferences): Itinerary {
  const scored = city.places.map((place) => ({
    ...place,
    score:
      place.score +
      interestBoost(place, prefs) +
      vibeBoost(place, prefs) +
      lifestyleBoost(place, prefs) +
      mustSeeBoost(place, prefs.mustSee),
  }));

  const catalog = toCatalog(scored, prefs);
  if (catalog.activities.length === 0) {
    throw new Error("No activities found for those interests.");
  }

  let perDay: number = PER_DAY[prefs.pace];
  if (prefs.downtime === "yes") perDay = Math.max(2, perDay - 1);
  if (prefs.kidsFocus === "yes") perDay = Math.max(2, perDay - 1);

  const clusters = planDays(catalog.activities, prefs.days, perDay, 8);
  const chosen = clusters.flat();
  const stayCenter = centroid(chosen.length > 0 ? chosen : [city.center]);
  const lodging = chooseLodging(catalog.stays, stayCenter, prefs);

  const draft: Itinerary = {
    destination: city.name,
    prefs,
    lodging,
    lodgingAlternatives: stayAlternatives(lodging, catalog.stays, prefs),
    days: [],
    cityTip: cityTipFor(city.id, city.name),
    catalog,
  };

  const rankedClusters = clusters
    .map((activities) => ({
      activities,
      score: activities.reduce((sum, place) => sum + place.score, 0),
    }))
    .sort((a, b) => b.score - a.score);

  // Build days one by one so later days can avoid places already used.
  draft.days = [];
  rankedClusters.forEach((cluster, index) => {
    draft.days.push(
      assembleDay(index + 1, cluster.activities, undefined, draft, index, city.center),
    );
  });

  const notes: string[] = [];
  if (clusters.length < prefs.days) {
    const count = clusters.length;
    notes.push(
      `I found enough solid places for ${count} day${count === 1 ? "" : "s"}, so the trip is shorter than you asked.`,
    );
  }
  if (
    prefs.diet !== "any" ||
    prefs.glutenFree === "yes" ||
    prefs.pets === "yes" ||
    prefs.accessibility === "yes"
  ) {
    notes.push(
      "Diet, accessibility, and pet-friendly picks are best-effort from our city shortlist — double-check before you go.",
    );
  }
  if (prefs.mustSee.trim()) {
    const matched = catalog.activities.filter((place) => mustSeeBoost(place, prefs.mustSee) > 0);
    if (matched.length > 0) {
      notes.push(`Worked in your must-see list where possible: ${matched.map((place) => place.name).slice(0, 4).join(", ")}.`);
    } else {
      notes.push(`Couldn't match “${prefs.mustSee}” to the city shortlist, so it stays as a note for you.`);
    }
  }
  if (notes.length > 0) draft.note = notes.join(" ");

  return refreshAlternatives(draft);
}

export function rebuildSharedItinerary(
  city: CityCatalog,
  prefs: Preferences,
  snapshot: {
    lodgingId: string;
    days: {
      activityIds: string[];
      lunchId?: string;
      dinnerId?: string;
      eveningId?: string;
      pinnedActivityIds: string[];
      mealLocks: MealLocks;
    }[];
  },
): Itinerary {
  const base = createItinerary(city, prefs);
  const byId = new Map<string, Place>();
  for (const place of city.places) byId.set(place.id, place);
  for (const place of [
    ...base.catalog.activities,
    ...base.catalog.food,
    ...base.catalog.nightlife,
    ...base.catalog.stays,
  ]) {
    byId.set(place.id, place);
  }

  const lodging = byId.get(snapshot.lodgingId) ?? base.lodging;
  const draft: Itinerary = {
    ...base,
    lodging,
    lodgingAlternatives: stayAlternatives(lodging, base.catalog.stays, prefs),
    days: [],
  };

  draft.days = snapshot.days.map((day, index) => {
    const activities = day.activityIds
      .map((id) => byId.get(id))
      .filter((place): place is Place => Boolean(place));
    const fallback =
      activities.length > 0
        ? activities
        : base.days[index]?.stops.filter((stop) => stop.role === "activity").map((stop) => stop.place) ??
          [];

    const previousStops: Stop[] = [];
    const lunch = day.lunchId ? byId.get(day.lunchId) : undefined;
    const dinner = day.dinnerId ? byId.get(day.dinnerId) : undefined;
    const evening = day.eveningId ? byId.get(day.eveningId) : undefined;
    if (lunch) previousStops.push({ role: "lunch", place: lunch, alternatives: [] });
    if (dinner) previousStops.push({ role: "dinner", place: dinner, alternatives: [] });
    if (evening) previousStops.push({ role: "evening", place: evening, alternatives: [] });

    return assembleDay(
      index + 1,
      fallback,
      {
        day: index + 1,
        title: "",
        area: "",
        routeNote: "",
        stops: previousStops,
        mealLocks: day.mealLocks,
        pinnedActivityIds: day.pinnedActivityIds,
      },
      draft,
      index,
      draft.lodging,
    );
  });

  return refreshAlternatives(draft);
}

export function regenerateDay(itinerary: Itinerary, dayIndex: number): Itinerary {
  const day = itinerary.days[dayIndex];
  if (!day) return itinerary;

  const activityCount = Math.max(
    2,
    day.stops.filter((stop) => stop.role === "activity").length,
  );
  const blocked = usedByOtherDays(itinerary, dayIndex);
  const currentIds = new Set(
    day.stops.filter((stop) => stop.role === "activity").map((stop) => stop.place.id),
  );
  const ranked = itinerary.catalog.activities
    .filter((place) => !blocked.has(place.id))
    .sort((a, b) => {
      const aBoost = a.area === day.area ? 4 : 0;
      const bBoost = b.area === day.area ? 4 : 0;
      return b.score + bBoost - (a.score + aBoost);
    });
  const fresh = ranked.filter((place) => !currentIds.has(place.id));
  const pool = fresh.length >= activityCount ? fresh : ranked;

  if (pool.length === 0) return itinerary;

  const rotated = [...pool];
  const offset = Math.floor(Math.random() * rotated.length);
  const ordered = [...rotated.slice(offset), ...rotated.slice(0, offset)];
  const picked = ordered.slice(0, Math.min(activityCount, ordered.length));

  const nextDay = assembleDay(
    day.day,
    picked,
    {
      ...day,
      pinnedActivityIds: [],
      mealLocks: { ...EMPTY_LOCKS },
    },
    itinerary,
    dayIndex,
    itinerary.lodging,
  );
  return replaceDay(itinerary, dayIndex, nextDay);
}

export function swapActivity(
  itinerary: Itinerary,
  dayIndex: number,
  oldId: string,
  newId: string,
): Itinerary {
  const day = itinerary.days[dayIndex];
  const replacement =
    itinerary.catalog.activities.find((place) => place.id === newId) ??
    day?.stops.flatMap((stop) => stop.alternatives).find((place) => place.id === newId);
  if (!day || !replacement) return itinerary;

  const activities = day.stops
    .filter((stop) => stop.role === "activity")
    .map((stop) => (stop.place.id === oldId ? replacement : stop.place));

  const pinned = new Set(day.pinnedActivityIds.filter((id) => id !== oldId));
  pinned.add(newId);
  const nextDay = assembleDay(
    day.day,
    activities,
    { ...day, pinnedActivityIds: [...pinned] },
    itinerary,
    dayIndex,
    itinerary.lodging,
  );
  return replaceDay(itinerary, dayIndex, nextDay);
}

export function swapMeal(
  itinerary: Itinerary,
  dayIndex: number,
  role: Extract<StopRole, "lunch" | "dinner" | "evening">,
  newId: string,
): Itinerary {
  const day = itinerary.days[dayIndex];
  const pool = role === "evening" ? itinerary.catalog.nightlife : itinerary.catalog.food;
  const replacement =
    pool.find((place) => place.id === newId) ??
    day?.stops.flatMap((stop) => stop.alternatives).find((place) => place.id === newId);
  if (!day || !replacement) return itinerary;

  const stops = day.stops.map((stop) =>
    stop.role === role ? { ...stop, place: replacement } : stop,
  );
  const mealLocks = { ...day.mealLocks, [role]: true };
  return replaceDay(itinerary, dayIndex, { ...day, stops, mealLocks });
}

export function swapLodging(itinerary: Itinerary, newId: string): Itinerary {
  const lodging =
    itinerary.catalog.stays.find((place) => place.id === newId) ??
    itinerary.lodgingAlternatives.find((place) => place.id === newId);
  if (!lodging) return itinerary;

  const next: Itinerary = {
    ...itinerary,
    lodging,
    lodgingAlternatives: stayAlternatives(lodging, itinerary.catalog.stays, itinerary.prefs),
    days: [],
  };
  next.days = itinerary.days.map((day, index) => {
    const activities = day.stops
      .filter((stop) => stop.role === "activity")
      .map((stop) => stop.place);
    return assembleDay(day.day, activities, day, next, index, next.lodging);
  });
  return refreshAlternatives(next);
}

function replaceDay(itinerary: Itinerary, dayIndex: number, day: DayPlan): Itinerary {
  const days = itinerary.days.slice();
  days[dayIndex] = day;
  return refreshAlternatives({ ...itinerary, days });
}

function refreshAlternatives(itinerary: Itinerary): Itinerary {
  const days = itinerary.days.map((day, dayIndex) => ({
    ...day,
    stops: day.stops.map((stop) => ({
      ...stop,
      alternatives: alternativesFor(stop, itinerary, dayIndex),
    })),
  }));
  return { ...itinerary, days };
}

function assembleDay(
  dayNumber: number,
  activityPlaces: Place[],
  previous: DayPlan | undefined,
  itinerary: Itinerary,
  dayIndex: number,
  cityCenter: { lat: number; lon: number },
): DayPlan {
  const prefs = itinerary.prefs;
  const pinned = new Set(previous?.pinnedActivityIds ?? []);
  const blocked = usedByOtherDays(itinerary, dayIndex);
  let maxLeg = MAX_LEG_KM[prefs.pace] + WALKING_LEG_BONUS[prefs.walking];
  if (prefs.transport === "taxis") maxLeg += 1.4;
  if (prefs.accessibility === "yes") maxLeg -= 0.6;

  let perDay: number = PER_DAY[prefs.pace];
  if (prefs.downtime === "yes") perDay = Math.max(2, perDay - 1);
  if (prefs.kidsFocus === "yes") perDay = Math.max(2, perDay - 1);

  const available = uniquePlaces(activityPlaces).filter((place) => !blocked.has(place.id));
  const seed =
    available.length > 0
      ? available
      : itinerary.catalog.activities
          .filter((place) => !blocked.has(place.id))
          .sort((a, b) => b.score - a.score)
          .slice(0, perDay);

  // Walk inside the day's neighborhood. The ride from lodging is allowed to be longer.
  const localStart = seed.sort((a, b) => b.score - a.score)[0] ?? itinerary.lodging;
  let ordered = orderFrom(localStart, seed.filter((place) => place.id !== localStart.id));
  if (localStart.id !== itinerary.lodging.id) ordered = [localStart, ...ordered];
  ordered = tighten(ordered, itinerary.catalog.activities, blocked, pinned, localStart, maxLeg);
  ordered = orderFrom(localStart, ordered.filter((place) => place.id !== localStart.id));
  if (!ordered.some((place) => place.id === localStart.id)) ordered = [localStart, ...ordered];
  ordered = limitMuseums(
    ordered,
    prefs.maxMuseums,
    itinerary.catalog.activities,
    blocked,
    pinned,
    localStart,
    maxLeg,
  );

  const used = new Set(blocked);
  used.add(itinerary.lodging.id);
  for (const place of ordered) used.add(place.id);

  let splitAt = Math.ceil(ordered.length / 2);
  if (prefs.dayStart === "late") splitAt = Math.min(1, ordered.length);
  if (prefs.dayStart === "early") {
    splitAt = Math.min(ordered.length, Math.max(splitAt, Math.ceil(ordered.length * 0.7)));
  }
  const morning = ordered.slice(0, splitAt);
  const afternoon = ordered.slice(splitAt);
  const lunchAnchor = morning[morning.length - 1] ?? itinerary.lodging;
  const dinnerAnchor = ordered[ordered.length - 1] ?? lunchAnchor;
  const locks = previous?.mealLocks ?? EMPTY_LOCKS;

  const activityIds = new Set(ordered.map((place) => place.id));
  const previousLunch = previous?.stops.find((stop) => stop.role === "lunch")?.place;
  const previousDinner = previous?.stops.find((stop) => stop.role === "dinner")?.place;
  const previousEvening = previous?.stops.find((stop) => stop.role === "evening")?.place;

  const skipMeals = prefs.meals === "skip";
  const lunch = skipMeals
    ? undefined
    : locks.lunch && previousLunch && !activityIds.has(previousLunch.id)
      ? previousLunch
      : pickMeal(itinerary, "lunch", lunchAnchor, used);
  if (lunch) used.add(lunch.id);

  const dinner = skipMeals
    ? undefined
    : locks.dinner && previousDinner && !activityIds.has(previousDinner.id)
      ? previousDinner
      : pickMeal(itinerary, "dinner", dinnerAnchor, used);
  if (dinner) used.add(dinner.id);

  let evening: Place | undefined;
  if (wantsEvening(itinerary.prefs)) {
    evening =
      locks.evening && previousEvening && !used.has(previousEvening.id)
        ? previousEvening
        : pickNear(itinerary.catalog.nightlife, dinner ?? dinnerAnchor, used, 0.9, 2.2);
    if (evening) used.add(evening.id);
  }

  const stops: Stop[] = [];
  for (const place of morning) stops.push(bareStop("activity", place));
  if (lunch) stops.push(bareStop("lunch", lunch));
  for (const place of afternoon) stops.push(bareStop("activity", place));
  if (dinner) stops.push(bareStop("dinner", dinner));
  if (evening) stops.push(bareStop("evening", evening));

  const anchor = [...ordered].sort((a, b) => b.score - a.score)[0];
  const area = commonArea(ordered) || anchor?.area || "City center";
  return {
    day: dayNumber,
    title: dayTitle(area, anchor, cityCenter),
    area,
    routeNote: routeNoteFor(area, itinerary.prefs, ordered, itinerary.lodging),
    stops,
    mealLocks: locks,
    pinnedActivityIds: [...pinned],
  };
}

function bareStop(role: StopRole, place: Place): Stop {
  return { role, place, alternatives: [] };
}

function planDays(activities: Place[], requestedDays: number, perDay: number, radiusKm: number): Place[][] {
  const sorted = [...activities].sort((a, b) => b.score - a.score);
  const dayCount = Math.min(requestedDays, sorted.length);
  const minSep = Math.min(2.5, Math.max(0.7, radiusKm / (dayCount + 1)));
  const anchors: Place[] = [];

  for (const place of sorted) {
    if (anchors.length >= dayCount) break;
    if (anchors.every((anchor) => distanceKm(anchor, place) >= minSep)) anchors.push(place);
  }
  for (const place of sorted) {
    if (anchors.length >= dayCount) break;
    if (!anchors.some((anchor) => anchor.id === place.id)) anchors.push(place);
  }

  const clusters = anchors.map((anchor) => [anchor]);
  const assigned = new Set(anchors.map((anchor) => anchor.id));
  const cap = Math.max(minSep * 1.6, 1.6);

  const ranked = sorted
    .filter((place) => !assigned.has(place.id))
    .map((place) => {
      let best = 0;
      let bestDistance = Infinity;
      anchors.forEach((anchor, index) => {
        const gap = distanceKm(anchor, place);
        if (gap < bestDistance) {
          bestDistance = gap;
          best = index;
        }
      });
      return { place, best, bestDistance };
    })
    .sort((a, b) => b.place.score - a.place.score);

  for (const item of ranked) {
    const options = anchors
      .map((anchor, index) => ({ index, gap: distanceKm(anchor, item.place) }))
      .filter((option) => clusters[option.index].length < perDay && option.gap <= cap)
      .sort((a, b) => a.gap - b.gap || clusters[a.index].length - clusters[b.index].length);
    const fallback =
      item.bestDistance <= cap && clusters[item.best].length < perDay
        ? item.best
        : options[0]?.index;
    if (fallback === undefined) continue;
    clusters[fallback].push(item.place);
    assigned.add(item.place.id);
  }

  const unused = sorted.filter((place) => !assigned.has(place.id));
  for (const cluster of clusters) {
    while (cluster.length < Math.min(perDay, 3) && unused.length > 0) {
      let bestIndex = 0;
      let bestDistance = Infinity;
      unused.forEach((place, index) => {
        const gap = distanceKm(cluster[0], place);
        if (gap < bestDistance) {
          bestDistance = gap;
          bestIndex = index;
        }
      });
      if (bestDistance > 8) break;
      const [next] = unused.splice(bestIndex, 1);
      cluster.push(next);
    }
  }

  return clusters.filter((cluster) => cluster.length > 0);
}

function orderFrom(start: { lat: number; lon: number }, places: Place[]): Place[] {
  const left = [...places];
  const ordered: Place[] = [];
  let current = start;
  while (left.length > 0) {
    let best = 0;
    let bestDistance = Infinity;
    left.forEach((place, index) => {
      const gap = distanceKm(current, place);
      if (gap < bestDistance) {
        bestDistance = gap;
        best = index;
      }
    });
    const [next] = left.splice(best, 1);
    ordered.push(next);
    current = next;
  }
  return ordered;
}

function tighten(
  ordered: Place[],
  sparePool: Place[],
  blocked: Set<string>,
  pinned: Set<string>,
  start: { lat: number; lon: number },
  maxLeg: number,
): Place[] {
  const result = [...ordered];
  const spare = sparePool.filter(
    (place) => !blocked.has(place.id) && !result.some((kept) => kept.id === place.id),
  );

  for (let pass = 0; pass < 6; pass += 1) {
    let previous = start;
    let changed = false;
    for (let index = 0; index < result.length; index += 1) {
      const gap = distanceKm(previous, result[index]);
      if (gap > maxLeg && !pinned.has(result[index].id)) {
        const closer = spare
          .filter((place) => distanceKm(previous, place) <= maxLeg)
          .sort(
            (a, b) =>
              distanceKm(previous, a) - distanceKm(previous, b) || b.score - a.score,
          )[0];
        if (closer) {
          const spareIndex = spare.findIndex((place) => place.id === closer.id);
          spare.splice(spareIndex, 1, result[index]);
          result[index] = closer;
          changed = true;
        }
      }
      previous = result[index];
    }
    if (!changed) break;
  }

  return result;
}

function pickMeal(
  itinerary: Itinerary,
  kind: "lunch" | "dinner",
  anchor: { lat: number; lon: number },
  used: Set<string>,
): Place | undefined {
  const ranked = itinerary.catalog.food
    .filter((place) => !used.has(place.id))
    .map((place) => ({
      place,
      gap: distanceKm(place, anchor),
      score: mealScore(place, kind, itinerary.prefs),
    }))
    .sort((a, b) => a.gap - b.gap);

  const near = ranked.filter((item) => item.gap <= 1.1);
  const pool = (near.length > 0 ? near : ranked.filter((item) => item.gap <= 2.4)).sort(
    (a, b) => b.score - a.score || a.gap - b.gap,
  );
  return pool[0]?.place;
}

function pickNear(
  places: Place[],
  anchor: { lat: number; lon: number },
  used: Set<string>,
  nearKm: number,
  farKm: number,
): Place | undefined {
  const available = places.filter((place) => !used.has(place.id));
  const near = available.filter((place) => distanceKm(place, anchor) <= nearKm);
  const pool = near.length > 0 ? near : available.filter((place) => distanceKm(place, anchor) <= farKm);
  return [...pool].sort(
    (a, b) => b.score - a.score || distanceKm(a, anchor) - distanceKm(b, anchor),
  )[0];
}

function alternativesFor(stop: Stop, itinerary: Itinerary, dayIndex: number): Place[] {
  const used = new Set<string>([itinerary.lodging.id, stop.place.id]);
  itinerary.days.forEach((day, index) => {
    if (index === dayIndex) return;
    for (const other of day.stops) used.add(other.place.id);
  });
  for (const other of itinerary.days[dayIndex]?.stops ?? []) used.add(other.place.id);

  const pool =
    stop.role === "activity"
      ? itinerary.catalog.activities
      : stop.role === "evening"
        ? itinerary.catalog.nightlife
        : itinerary.catalog.food;
  const nearKm = stop.role === "activity" ? 2 : 1.3;
  const farKm = stop.role === "activity" ? 3.5 : 2.2;
  const sameKind = pool.filter(
    (place) => !used.has(place.id) && place.category === stop.place.category,
  );
  const source = sameKind.length >= 2 ? sameKind : pool.filter((place) => !used.has(place.id));
  const near = source.filter((place) => distanceKm(place, stop.place) <= nearKm);
  const choices = near.length >= 2 ? near : source.filter((place) => distanceKm(place, stop.place) <= farKm);
  return choices
    .sort(
      (a, b) => distanceKm(a, stop.place) - distanceKm(b, stop.place) || b.score - a.score,
    )
    .slice(0, 4);
}

function chooseLodging(
  stays: Place[],
  center: { lat: number; lon: number },
  prefs: Preferences,
): Place {
  const pool =
    prefs.hostel === "no"
      ? stays.filter((place) => !place.label.toLowerCase().includes("hostel"))
      : stays;
  const options = pool.length > 0 ? pool : stays;

  if (options.length === 0) {
    return {
      id: "area-base",
      name: "Base yourself around here",
      lat: center.lat,
      lon: center.lon,
      category: "stay",
      label: "Area to stay",
      score: 0,
      area: "City center",
      why: "Stay near the middle of the places you'll visit.",
    };
  }

  return [...options].sort(
    (a, b) => stayRank(b, center, prefs) - stayRank(a, center, prefs),
  )[0];
}

function stayRank(place: Place, center: { lat: number; lon: number }, prefs: Preferences): number {
  const gap = distanceKm(place, center);
  const label = place.label.toLowerCase();
  let type = 1;

  if (prefs.hostel === "prefer") {
    if (label.includes("hostel")) type = 8;
    else if (label.includes("guest")) type = 4;
    else if (label.includes("hotel")) type = 2;
  } else if (prefs.hostel === "no") {
    if (label.includes("hostel")) type = 0;
    else if (label.includes("hotel")) type = 5;
    else if (label.includes("apartment")) type = 5;
    else if (label.includes("guest")) type = 4;
  } else if (prefs.budget === "budget") {
    if (label.includes("hostel")) type = 5;
    else if (label.includes("guest")) type = 4;
    else if (label.includes("hotel")) type = 2;
  } else if (prefs.budget === "comfortable") {
    if (label.includes("hotel")) type = 5;
    else if (label.includes("apartment")) type = 4;
    else if (label.includes("hostel")) type = 1;
  } else if (label.includes("guest") || label.includes("hotel")) {
    type = 4;
  }

  if (prefs.party === "family" && label.includes("hostel")) type -= 3;
  if (prefs.party === "solo" && label.includes("hostel")) type += 1;
  if (prefs.travelers >= 4 && (label.includes("apartment") || label.includes("hotel"))) type += 1;

  return type * 3 + place.score - gap * 1.6;
}

function stayAlternatives(current: Place, stays: Place[], prefs?: Preferences): Place[] {
  if (current.id === "area-base") return [];
  const pool =
    prefs?.hostel === "no"
      ? stays.filter((place) => !place.label.toLowerCase().includes("hostel"))
      : stays;
  return pool
    .filter((place) => place.id !== current.id && distanceKm(place, current) <= 4)
    .sort((a, b) => distanceKm(a, current) - distanceKm(b, current) || b.score - a.score)
    .slice(0, 4);
}

function usedByOtherDays(itinerary: Itinerary, dayIndex: number): Set<string> {
  const used = new Set<string>();
  itinerary.days.forEach((day, index) => {
    if (index === dayIndex) return;
    for (const stop of day.stops) used.add(stop.place.id);
  });
  return used;
}

function toCatalog(places: Place[], prefs: Preferences): Catalog {
  return {
    activities: places.filter((place) => isActivity(place, prefs)),
    food: places.filter((place) => place.category === "food" || place.category === "cafe"),
    nightlife: places.filter((place) => place.category === "nightlife"),
    stays: places.filter((place) => place.category === "stay"),
  };
}

function isActivity(place: Place, prefs: Preferences): boolean {
  if (place.category === "museum" || place.category === "sight" || place.category === "nature") {
    return true;
  }
  if (place.category === "shopping") {
    return (
      prefs.shoppingTime === "yes" ||
      prefs.interests.includes("shopping") ||
      prefs.interests.length === 0
    );
  }
  return false;
}

function interestBoost(place: Place, prefs: Preferences): number {
  const interests = prefs.interests;
  if (interests.length === 0) {
    if (place.category === "sight" || place.category === "museum" || place.category === "nature") {
      return 3;
    }
    return 0;
  }

  let boost = 0;
  if (interests.includes("museums") && place.category === "museum") boost += 5;
  if (interests.includes("history") && (place.category === "sight" || place.category === "museum")) {
    boost += 3;
  }
  if (interests.includes("nature") && place.category === "nature") boost += 5;
  if (interests.includes("viewpoints") && place.label === "Viewpoint") boost += 6;
  if (interests.includes("shopping") && place.category === "shopping") boost += 5;
  if (interests.includes("food") && (place.category === "food" || place.category === "cafe")) {
    boost += 2;
  }
  if (interests.includes("nightlife") && place.category === "nightlife") boost += 4;
  if (
    (interests.includes("family") || prefs.party === "family") &&
    (place.category === "nature" ||
      ["Zoo", "Aquarium", "Theme park", "Park", "Garden"].includes(place.label))
  ) {
    boost += 5;
  }
  if (prefs.party === "family" && place.category === "nightlife") boost -= 4;
  if (prefs.party === "solo" && place.label === "Viewpoint") boost += 1;
  return boost;
}

function vibeBoost(place: Place, prefs: Preferences): number {
  const famous =
    place.score >= 8 ||
    ["Monument", "Castle", "Attraction", "Museum"].includes(place.label);
  if (prefs.vibe === "famous") return famous ? 3 : -1;
  if (prefs.vibe === "hidden") return famous ? -2 : 3;
  return 0;
}

function lifestyleBoost(place: Place, prefs: Preferences): number {
  let boost = 0;
  const kidPlace = ["Zoo", "Aquarium", "Theme park", "Park", "Garden"].includes(place.label);
  const outdoor =
    place.category === "nature" ||
    place.label === "Viewpoint" ||
    place.label === "Park" ||
    place.label === "Garden";
  const indoor = place.category === "museum" || place.label === "Monument";
  const freeish =
    place.category === "nature" ||
    place.label === "Viewpoint" ||
    place.label === "Park" ||
    place.label === "Garden" ||
    place.label === "Market";
  const steepish =
    place.label === "Castle" || place.label === "Viewpoint" || place.label === "Ruins";

  if (prefs.kidsFocus === "yes") {
    if (kidPlace || place.category === "nature") boost += 6;
    if (place.category === "nightlife") boost -= 5;
    if (place.category === "museum" && place.score < 8) boost -= 1;
  }

  if (prefs.pets === "yes") {
    if (outdoor) boost += 5;
    if (place.category === "museum") boost -= 3;
    if (place.label.toLowerCase().includes("hostel")) boost -= 1;
    if (place.label.toLowerCase().includes("apartment")) boost += 2;
  }

  if (prefs.setting === "outdoor") {
    if (outdoor) boost += 4;
    if (indoor) boost -= 2;
  } else if (prefs.setting === "indoor") {
    if (indoor) boost += 4;
    if (outdoor && place.label === "Viewpoint") boost -= 1;
  }

  if (prefs.rainPlan === "yes") {
    if (indoor || place.category === "museum" || place.category === "shopping") boost += 5;
    if (outdoor) boost -= 4;
  }

  if (prefs.freeFriendly === "yes" && freeish) boost += 4;
  if (prefs.freeFriendly === "yes" && place.category === "museum" && place.score >= 9) boost -= 1;

  if (prefs.alcohol === "avoid" && place.category === "nightlife") boost -= 6;

  if (prefs.accessibility === "yes") {
    if (steepish) boost -= 4;
    if (place.category === "museum" || place.label === "Park") boost += 2;
  }

  if (prefs.photoFocus === "yes") {
    if (place.label === "Viewpoint" || place.label === "Monument" || place.label === "Attraction") {
      boost += 5;
    }
  }

  if (prefs.avoidTraps === "yes") {
    if (place.score >= 9) boost -= 3;
    if (place.score <= 6) boost += 3;
  }

  if (prefs.romantic === "yes") {
    if (place.label === "Viewpoint" || place.label === "Garden" || place.label === "Park") boost += 4;
    if (place.label.toLowerCase().includes("hostel")) boost -= 3;
  }

  if (prefs.liveMusic === "yes" && place.category === "nightlife") boost += 5;

  if (prefs.shoppingTime === "yes" && place.category === "shopping") boost += 6;

  if (prefs.diet === "vegetarian" || prefs.diet === "vegan") {
    const cuisine = (place.cuisine || "").toLowerCase();
    if (place.category === "cafe") boost += 2;
    if (/seafood|steak|burger|meat|bbq|grill/.test(cuisine)) boost -= 4;
    if (/vegetarian|vegan|salad|vegetable/.test(cuisine)) boost += 5;
    if (prefs.diet === "vegan" && /cheese|pizza|pastry|ice_cream|coffee/.test(cuisine)) boost -= 1;
  }

  return boost;
}

function mealScore(place: Place, kind: "lunch" | "dinner", prefs: Preferences): number {
  let score = place.score;
  if (kind === "dinner" && place.category === "food") score += 2;
  if (kind === "lunch" && place.category === "cafe") score += 1;
  if (place.cuisine) score += 1;
  if (prefs.budget === "comfortable" && place.label === "Quick meal") score -= 5;
  if (prefs.budget === "budget" && place.label === "Quick meal") score += 2;
  if (prefs.meals === "quick") {
    if (place.label === "Quick meal" || place.category === "cafe") score += 4;
    if (place.category === "food") score -= 1;
  } else if (prefs.meals === "sitdown") {
    if (place.category === "food" && place.label !== "Quick meal") score += 4;
    if (place.label === "Quick meal") score -= 4;
  }
  if (prefs.party === "family" && place.label === "Quick meal") score += 1;
  if (prefs.travelers >= 5 && place.category === "food") score += 1;
  if (prefs.romantic === "yes" && kind === "dinner" && place.category === "food") score += 3;

  const cuisine = (place.cuisine || "").toLowerCase();
  if (prefs.diet === "vegetarian" || prefs.diet === "vegan") {
    if (place.category === "cafe") score += 3;
    if (/seafood|steak|burger|meat|bbq|grill/.test(cuisine)) score -= 6;
    if (/vegetarian|vegan|salad|vegetable/.test(cuisine)) score += 6;
    if (prefs.diet === "vegan") {
      if (/pastry|ice_cream|cheese|pizza/.test(cuisine)) score -= 2;
      if (place.category === "cafe") score += 1;
    }
  }
  if (prefs.diet === "halal" || prefs.diet === "kosher") {
    if (/pork|bacon|ham|wine|beer|seafood|shellfish/.test(cuisine)) score -= 5;
    if (/falafel|kebab|mediterranean|middle_eastern|israeli|lebanese|turkish/.test(cuisine)) {
      score += 5;
    }
    if (place.category === "cafe") score += 1;
  }
  if (prefs.glutenFree === "yes") {
    if (/pastry|pizza|pasta|bread|bakery/.test(cuisine)) score -= 5;
    if (/salad|grill|seafood|rice/.test(cuisine)) score += 3;
    if (place.category === "cafe") score += 1;
  }
  return score;
}

function wantsEvening(prefs: Preferences): boolean {
  if (prefs.lateNights === "no" || prefs.alcohol === "avoid") return false;
  if (prefs.kidsFocus === "yes" || prefs.downtime === "yes") return false;
  if (prefs.liveMusic === "yes" || prefs.romantic === "yes") return true;
  if (prefs.lateNights === "yes") return true;
  if (prefs.party === "family") return false;
  return prefs.interests.includes("nightlife");
}

function routeNoteFor(
  area: string,
  prefs: Preferences,
  ordered: Place[],
  lodging: Place,
): string {
  const pathKm = pathLengthKm(ordered);
  const fromStay =
    ordered.length > 0 ? distanceKm(lodging, ordered[0]) : 0;
  const bits = [
    `Today stays in ${area} — one pocket of the city, so you are not zigzagging across town.`,
  ];
  if (ordered.length > 1) {
    bits.push(
      `About ${pathKm.toFixed(1)} km walking between stops` +
        (fromStay > 0.8
          ? `, plus ~${fromStay.toFixed(1)} km from your stay to the first stop.`
          : "."),
    );
  } else if (fromStay > 0.8) {
    bits.push(`Your stay is about ${fromStay.toFixed(1)} km from this pocket.`);
  }
  if (prefs.walking === "easy" || prefs.accessibility === "yes") {
    bits.push("Walks are kept shorter where possible.");
  } else if (prefs.walking === "long" || prefs.transport === "taxis") {
    bits.push("Longer hops are OK if needed.");
  }
  if (prefs.dayStart === "late") bits.push("It starts gently for a later morning.");
  if (prefs.dayStart === "early") bits.push("More of the strong stops sit in the morning.");
  if (prefs.downtime === "yes") bits.push("There's breathing room for a break or nap.");
  if (prefs.rainPlan === "yes") bits.push("Indoor-friendly stops are favored.");
  if (prefs.shoppingTime === "yes") bits.push("Shopping time is worked into the mix.");
  if (prefs.meals === "skip") bits.push("Meals are left open for you to choose.");
  return bits.join(" ");
}

function pathLengthKm(places: Place[]): number {
  let total = 0;
  for (let i = 1; i < places.length; i += 1) {
    total += distanceKm(places[i - 1], places[i]);
  }
  return total;
}

function foldText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
}

function mustSeeBoost(place: Place, mustSee: string): number {
  const tokens = foldText(mustSee)
    .split(/[,;/]+/)
    .map((token) => token.trim())
    .filter((token) => token.length >= 3);
  if (tokens.length === 0) return 0;
  const name = foldText(place.name);
  const area = foldText(place.area);
  return tokens.some((token) => name.includes(token) || area.includes(token) || token.includes(name))
    ? 14
    : 0;
}

function limitMuseums(
  ordered: Place[],
  maxMuseums: number,
  sparePool: Place[],
  blocked: Set<string>,
  pinned: Set<string>,
  start: { lat: number; lon: number },
  maxLeg: number,
): Place[] {
  if (maxMuseums >= 6) return ordered;
  const result = [...ordered];
  const spare = sparePool.filter(
    (place) =>
      place.category !== "museum" &&
      !blocked.has(place.id) &&
      !result.some((kept) => kept.id === place.id),
  );

  while (result.filter((place) => place.category === "museum").length > maxMuseums) {
    const index = [...result]
      .map((place, placeIndex) => ({ place, placeIndex }))
      .filter((item) => item.place.category === "museum" && !pinned.has(item.place.id))
      .sort((a, b) => a.place.score - b.place.score)[0]?.placeIndex;
    if (index === undefined) break;

    const previous = index === 0 ? start : result[index - 1];
    const replacement = spare
      .filter((place) => distanceKm(previous, place) <= maxLeg + 0.8)
      .sort(
        (a, b) => distanceKm(previous, a) - distanceKm(previous, b) || b.score - a.score,
      )[0];
    if (!replacement) {
      result.splice(index, 1);
      continue;
    }
    const spareIndex = spare.findIndex((place) => place.id === replacement.id);
    spare.splice(spareIndex, 1, result[index]);
    result[index] = replacement;
  }

  return result;
}

function dayTitle(
  area: string,
  anchor: Place | undefined,
  center: { lat: number; lon: number },
): string {
  if (!anchor) return `A day in ${area}`;
  if (distanceKm(center, anchor) < 0.45) {
    return `City center day · anchored at ${anchor.name}`;
  }
  return `${area} day · ${compass(center, anchor)}`;
}

function commonArea(places: Place[]): string | undefined {
  if (places.length === 0) return undefined;
  const counts = new Map<string, number>();
  for (const place of places) counts.set(place.area, (counts.get(place.area) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
}

function uniquePlaces(places: Place[]): Place[] {
  const seen = new Set<string>();
  return places.filter((place) => {
    if (seen.has(place.id)) return false;
    seen.add(place.id);
    return true;
  });
}
