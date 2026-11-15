import { INTERESTS, type Interest, type Preferences } from "./types";

export const DEFAULT_PREFERENCES: Preferences = {
  destination: "",
  days: 3,
  pace: "balanced",
  budget: "mid",
  interests: ["history", "food"],
  party: "any",
  travelers: 0,
  hostel: "any",
  walking: "any",
  meals: "any",
  lateNights: "any",
  vibe: "any",
  diet: "any",
  pets: "any",
  kidsFocus: "any",
  setting: "any",
  freeFriendly: "any",
  alcohol: "any",
  glutenFree: "any",
  accessibility: "any",
  dayStart: "any",
  maxMuseums: 6,
  rainPlan: "any",
  transport: "any",
  photoFocus: "any",
  avoidTraps: "any",
  romantic: "any",
  liveMusic: "any",
  shoppingTime: "any",
  downtime: "any",
  mustSee: "",
};

function oneOf<T extends string>(value: unknown, allowed: readonly T[], fallback: T): T {
  return typeof value === "string" && (allowed as readonly string[]).includes(value)
    ? (value as T)
    : fallback;
}

export function parsePreferences(body: unknown): { prefs: Preferences } | { error: string } {
  if (!body || typeof body !== "object") return { error: "Tell me where you want to go." };
  const record = body as Record<string, unknown>;

  const destination = typeof record.destination === "string" ? record.destination.trim() : "";
  if (destination.length < 2 || destination.length > 80) {
    return { error: "Enter a city name." };
  }

  const days = Number(record.days);
  if (!Number.isInteger(days) || days < 1 || days > 7) {
    return { error: "Pick between 1 and 7 days." };
  }

  const pace = oneOf(record.pace, ["relaxed", "balanced", "packed"] as const, DEFAULT_PREFERENCES.pace);
  const budget = oneOf(
    record.budget,
    ["budget", "mid", "comfortable"] as const,
    DEFAULT_PREFERENCES.budget,
  );

  const interests = Array.isArray(record.interests)
    ? record.interests.filter(
        (item): item is Interest =>
          typeof item === "string" && (INTERESTS as readonly string[]).includes(item),
      )
    : [];

  const party = oneOf(
    record.party,
    ["any", "solo", "couple", "family", "friends"] as const,
    DEFAULT_PREFERENCES.party,
  );

  let travelers = Number(record.travelers);
  if (!Number.isInteger(travelers) || travelers < 0 || travelers > 12) {
    travelers = defaultTravelers(party);
  }

  let maxMuseums = Number(record.maxMuseums);
  if (!Number.isInteger(maxMuseums) || maxMuseums < 0 || maxMuseums > 6) {
    maxMuseums = DEFAULT_PREFERENCES.maxMuseums;
  }

  const mustSee =
    typeof record.mustSee === "string" ? record.mustSee.trim().slice(0, 160) : "";

  const yesNoAny = ["any", "no", "yes"] as const;

  return {
    prefs: {
      destination,
      days,
      pace,
      budget,
      interests,
      party,
      travelers,
      hostel: oneOf(
        record.hostel,
        ["any", "open", "no", "prefer"] as const,
        DEFAULT_PREFERENCES.hostel,
      ),
      walking: oneOf(
        record.walking,
        ["any", "easy", "normal", "long"] as const,
        DEFAULT_PREFERENCES.walking,
      ),
      meals: oneOf(
        record.meals,
        ["any", "quick", "sitdown", "mix", "skip"] as const,
        DEFAULT_PREFERENCES.meals,
      ),
      lateNights: oneOf(
        record.lateNights,
        ["any", "auto", "yes", "no"] as const,
        DEFAULT_PREFERENCES.lateNights,
      ),
      vibe: oneOf(
        record.vibe,
        ["any", "famous", "mix", "hidden"] as const,
        DEFAULT_PREFERENCES.vibe,
      ),
      diet: oneOf(
        record.diet,
        ["any", "vegetarian", "vegan", "halal", "kosher"] as const,
        DEFAULT_PREFERENCES.diet,
      ),
      pets: oneOf(record.pets, yesNoAny, DEFAULT_PREFERENCES.pets),
      kidsFocus: oneOf(record.kidsFocus, yesNoAny, DEFAULT_PREFERENCES.kidsFocus),
      setting: oneOf(
        record.setting,
        ["any", "mix", "indoor", "outdoor"] as const,
        DEFAULT_PREFERENCES.setting,
      ),
      freeFriendly: oneOf(record.freeFriendly, yesNoAny, DEFAULT_PREFERENCES.freeFriendly),
      alcohol: oneOf(
        record.alcohol,
        ["any", "ok", "avoid"] as const,
        DEFAULT_PREFERENCES.alcohol,
      ),
      glutenFree: oneOf(record.glutenFree, yesNoAny, DEFAULT_PREFERENCES.glutenFree),
      accessibility: oneOf(record.accessibility, yesNoAny, DEFAULT_PREFERENCES.accessibility),
      dayStart: oneOf(
        record.dayStart,
        ["any", "early", "normal", "late"] as const,
        DEFAULT_PREFERENCES.dayStart,
      ),
      maxMuseums,
      rainPlan: oneOf(record.rainPlan, yesNoAny, DEFAULT_PREFERENCES.rainPlan),
      transport: oneOf(
        record.transport,
        ["any", "transit", "taxis"] as const,
        DEFAULT_PREFERENCES.transport,
      ),
      photoFocus: oneOf(record.photoFocus, yesNoAny, DEFAULT_PREFERENCES.photoFocus),
      avoidTraps: oneOf(record.avoidTraps, yesNoAny, DEFAULT_PREFERENCES.avoidTraps),
      romantic: oneOf(record.romantic, yesNoAny, DEFAULT_PREFERENCES.romantic),
      liveMusic: oneOf(record.liveMusic, yesNoAny, DEFAULT_PREFERENCES.liveMusic),
      shoppingTime: oneOf(record.shoppingTime, yesNoAny, DEFAULT_PREFERENCES.shoppingTime),
      downtime: oneOf(record.downtime, yesNoAny, DEFAULT_PREFERENCES.downtime),
      mustSee,
    },
  };
}

export function defaultTravelers(party: Preferences["party"]): number {
  if (party === "any") return 0;
  if (party === "solo") return 1;
  if (party === "couple") return 2;
  if (party === "family") return 4;
  return 3;
}

export const PARTY_LABEL = {
  any: "No preference",
  solo: "Solo",
  couple: "Couple",
  family: "Family",
  friends: "Friends",
} as const;

export const HOSTEL_LABEL = {
  any: "No preference",
  open: "Hostels are fine",
  no: "No hostels",
  prefer: "Prefer a hostel",
} as const;

export const WALKING_LABEL = {
  any: "No preference",
  easy: "Keep walks short",
  normal: "Normal walking",
  long: "Happy to walk more",
} as const;

export const MEAL_LABEL = {
  any: "No preference",
  quick: "Quick bites",
  sitdown: "Sit-down meals",
  mix: "A mix",
  skip: "Skip meals",
} as const;

export const LATE_LABEL = {
  any: "No preference",
  auto: "Match my interests",
  yes: "Yes, late nights",
  no: "No late nights",
} as const;

export const VIBE_LABEL = {
  any: "No preference",
  famous: "Famous highlights",
  mix: "A balanced mix",
  hidden: "Quieter / lesser-known",
} as const;

export const DIET_LABEL = {
  any: "No preference",
  vegetarian: "Vegetarian-friendly",
  vegan: "Vegan-friendly",
  halal: "Halal-friendly",
  kosher: "Kosher-friendly",
} as const;

export const PETS_LABEL = {
  any: "No preference",
  no: "No pets",
  yes: "Traveling with pets",
} as const;

export const KIDS_LABEL = {
  any: "No preference",
  no: "No kid focus",
  yes: "Prioritize kid activities",
} as const;

export const SETTING_LABEL = {
  any: "No preference",
  mix: "Indoor and outdoor mix",
  indoor: "Prefer indoor stops",
  outdoor: "Prefer outdoor stops",
} as const;

export const FREE_LABEL = {
  any: "No preference",
  no: "Paid sights are fine",
  yes: "Prefer free / low-cost",
} as const;

export const ALCOHOL_LABEL = {
  any: "No preference",
  ok: "Alcohol is fine",
  avoid: "Prefer alcohol-free evenings",
} as const;

export const GLUTEN_LABEL = {
  any: "No preference",
  no: "No gluten filter",
  yes: "Gluten-free friendly",
} as const;

export const ACCESS_LABEL = {
  any: "No preference",
  no: "No accessibility filter",
  yes: "Fewer stairs / easier access",
} as const;

export const DAYSTART_LABEL = {
  any: "No preference",
  early: "Early start",
  normal: "Normal start",
  late: "Late start",
} as const;

export const RAIN_LABEL = {
  any: "No preference",
  no: "Normal weather plan",
  yes: "Rainy-day friendly",
} as const;

export const TRANSPORT_LABEL = {
  any: "No preference",
  transit: "Walk + transit",
  taxis: "Taxis / rides OK",
} as const;

export const YESNO_PHOTO = {
  any: "No preference",
  no: "No photo focus",
  yes: "Photo / viewpoint focus",
} as const;
export const YESNO_TRAPS = {
  any: "No preference",
  no: "Tourist highlights OK",
  yes: "Avoid tourist traps",
} as const;
export const YESNO_ROMANTIC = {
  any: "No preference",
  no: "No romantic focus",
  yes: "Romantic evenings",
} as const;
export const YESNO_MUSIC = {
  any: "No preference",
  no: "No live-music focus",
  yes: "Prefer live music",
} as const;
export const YESNO_SHOP = {
  any: "No preference",
  no: "No shopping block",
  yes: "Include shopping time",
} as const;
export const YESNO_DOWN = {
  any: "No preference",
  no: "No downtime block",
  yes: "Leave downtime / nap space",
} as const;

export function ensurePreferences(prefs: Preferences): Preferences {
  const parsed = parsePreferences(prefs);
  return "prefs" in parsed ? parsed.prefs : { ...DEFAULT_PREFERENCES, ...prefs };
}

export function summarizeAdvanced(prefs: Preferences): string {
  const safe = ensurePreferences(prefs);
  const parts: string[] = [];

  if (safe.party !== "any") {
    parts.push(
      safe.travelers > 0
        ? `${PARTY_LABEL[safe.party]} · ${safe.travelers} traveler${safe.travelers === 1 ? "" : "s"}`
        : PARTY_LABEL[safe.party],
    );
  } else if (safe.travelers > 0) {
    parts.push(`${safe.travelers} traveler${safe.travelers === 1 ? "" : "s"}`);
  }

  if (safe.hostel !== "any") parts.push(HOSTEL_LABEL[safe.hostel]);
  if (safe.walking !== "any") parts.push(WALKING_LABEL[safe.walking]);
  if (safe.transport !== "any") parts.push(TRANSPORT_LABEL[safe.transport]);
  if (safe.meals !== "any") parts.push(MEAL_LABEL[safe.meals]);
  if (safe.lateNights !== "any") parts.push(LATE_LABEL[safe.lateNights]);
  if (safe.dayStart !== "any") parts.push(DAYSTART_LABEL[safe.dayStart]);
  if (safe.maxMuseums < 6) {
    parts.push(`Max ${safe.maxMuseums} museum${safe.maxMuseums === 1 ? "" : "s"}/day`);
  }
  if (safe.vibe !== "any") parts.push(VIBE_LABEL[safe.vibe]);
  if (safe.diet !== "any") parts.push(DIET_LABEL[safe.diet]);
  if (safe.glutenFree !== "any") parts.push(GLUTEN_LABEL[safe.glutenFree]);
  if (safe.pets !== "any") parts.push(PETS_LABEL[safe.pets]);
  if (safe.kidsFocus !== "any") parts.push(KIDS_LABEL[safe.kidsFocus]);
  if (safe.setting !== "any") parts.push(SETTING_LABEL[safe.setting]);
  if (safe.freeFriendly !== "any") parts.push(FREE_LABEL[safe.freeFriendly]);
  if (safe.alcohol !== "any") parts.push(ALCOHOL_LABEL[safe.alcohol]);
  if (safe.accessibility !== "any") parts.push(ACCESS_LABEL[safe.accessibility]);
  if (safe.rainPlan !== "any") parts.push(RAIN_LABEL[safe.rainPlan]);
  if (safe.photoFocus !== "any") parts.push(YESNO_PHOTO[safe.photoFocus]);
  if (safe.avoidTraps !== "any") parts.push(YESNO_TRAPS[safe.avoidTraps]);
  if (safe.romantic !== "any") parts.push(YESNO_ROMANTIC[safe.romantic]);
  if (safe.liveMusic !== "any") parts.push(YESNO_MUSIC[safe.liveMusic]);
  if (safe.shoppingTime !== "any") parts.push(YESNO_SHOP[safe.shoppingTime]);
  if (safe.downtime !== "any") parts.push(YESNO_DOWN[safe.downtime]);
  if (safe.mustSee) parts.push(`Must see: ${safe.mustSee}`);
  return parts.join(" · ");
}
