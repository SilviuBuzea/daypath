import { matchCityCatalog } from "./cities";
import { rebuildSharedItinerary } from "./plan";
import { ensurePreferences, parsePreferences } from "./preferences";
import type { Itinerary, MealLocks, Preferences } from "./types";

export type ShareDay = {
  a: string[];
  l?: string;
  d?: string;
  e?: string;
  p?: string[];
  ml?: Partial<MealLocks>;
};

export type SharePayload = {
  v: 1;
  prefs: Preferences;
  lodging: string;
  days: ShareDay[];
};

export function tripToSharePayload(trip: Itinerary): SharePayload {
  return {
    v: 1,
    prefs: ensurePreferences(trip.prefs),
    lodging: trip.lodging.id,
    days: trip.days.map((day) => {
      const lunch = day.stops.find((stop) => stop.role === "lunch")?.place.id;
      const dinner = day.stops.find((stop) => stop.role === "dinner")?.place.id;
      const evening = day.stops.find((stop) => stop.role === "evening")?.place.id;
      const payload: ShareDay = {
        a: day.stops.filter((stop) => stop.role === "activity").map((stop) => stop.place.id),
        p: day.pinnedActivityIds,
        ml: day.mealLocks,
      };
      if (lunch) payload.l = lunch;
      if (dinner) payload.d = dinner;
      if (evening) payload.e = evening;
      return payload;
    }),
  };
}

export function encodeSharePayload(payload: SharePayload): string {
  return toBase64Url(JSON.stringify(payload));
}

export function decodeSharePayload(token: string): SharePayload | null {
  try {
    const raw = fromBase64Url(token);
    const data = JSON.parse(raw) as SharePayload;
    if (!data || data.v !== 1 || !data.prefs || !data.lodging || !Array.isArray(data.days)) {
      return null;
    }
    const parsed = parsePreferences(data.prefs);
    if ("error" in parsed) return null;
    return {
      v: 1,
      prefs: parsed.prefs,
      lodging: data.lodging,
      days: data.days.filter((day) => day && Array.isArray(day.a)),
    };
  } catch {
    return null;
  }
}

export function hydrateSharePayload(payload: SharePayload): Itinerary | null {
  const city = matchCityCatalog(payload.prefs.destination);
  if (!city) return null;
  try {
    return rebuildSharedItinerary(city, payload.prefs, {
      lodgingId: payload.lodging,
      days: payload.days.map((day) => ({
        activityIds: day.a,
        lunchId: day.l,
        dinnerId: day.d,
        eveningId: day.e,
        pinnedActivityIds: day.p ?? [],
        mealLocks: {
          lunch: Boolean(day.ml?.lunch || day.l),
          dinner: Boolean(day.ml?.dinner || day.d),
          evening: Boolean(day.ml?.evening || day.e),
        },
      })),
    });
  } catch {
    return null;
  }
}

export function readShareTokenFromLocation(search = ""): string | null {
  const params = new URLSearchParams(search.startsWith("?") ? search : `?${search}`);
  const token = params.get("t");
  return token && token.length > 8 ? token : null;
}

export function buildShareUrl(trip: Itinerary, origin?: string): string {
  const token = encodeSharePayload(tripToSharePayload(trip));
  const base =
    origin ??
    (typeof window !== "undefined" ? window.location.origin + window.location.pathname : "");
  return `${base.replace(/\/$/, "")}/?t=${token}`;
}

export function writeShareTokenToUrl(token: string | null) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (token) url.searchParams.set("t", token);
  else url.searchParams.delete("t");
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

function toBase64Url(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(token: string): string {
  const padded = token.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  const binary = atob(padded + pad);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}
