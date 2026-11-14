import { parsePreferences } from "./preferences";
import type { Itinerary, Preferences } from "./types";

const PREFS_KEY = "daypath.prefs.v2";
const TRIPS_KEY = "daypath.trips.v1";
const MAX_TRIPS = 12;

export type SavedTrip = {
  id: string;
  savedAt: string;
  label: string;
  itinerary: Itinerary;
};

export function loadPreferences(): Preferences | null {
  try {
    const raw = localStorage.getItem(PREFS_KEY) ?? localStorage.getItem("daypath.prefs.v1");
    if (!raw) return null;
    const parsed = parsePreferences(JSON.parse(raw));
    return "prefs" in parsed ? parsed.prefs : null;
  } catch {
    return null;
  }
}

export function savePreferences(prefs: Preferences): void {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    // Ignore quota / private mode failures.
  }
}

export function listSavedTrips(): SavedTrip[] {
  try {
    const raw = localStorage.getItem(TRIPS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedTrip[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => item && item.itinerary && Array.isArray(item.itinerary.days));
  } catch {
    return [];
  }
}

export function saveTrip(itinerary: Itinerary): SavedTrip[] {
  const trips = listSavedTrips().filter(
    (item) =>
      !(
        item.itinerary.destination === itinerary.destination &&
        item.itinerary.prefs.days === itinerary.prefs.days &&
        JSON.stringify(item.itinerary.days) === JSON.stringify(itinerary.days)
      ),
  );

  const entry: SavedTrip = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    savedAt: new Date().toISOString(),
    label: `${itinerary.destination} · ${itinerary.days.length} day${itinerary.days.length === 1 ? "" : "s"}`,
    itinerary,
  };

  const next = [entry, ...trips].slice(0, MAX_TRIPS);
  try {
    localStorage.setItem(TRIPS_KEY, JSON.stringify(next));
  } catch {
    // Ignore quota / private mode failures.
  }
  return next;
}

export function deleteSavedTrip(id: string): SavedTrip[] {
  const next = listSavedTrips().filter((item) => item.id !== id);
  try {
    localStorage.setItem(TRIPS_KEY, JSON.stringify(next));
  } catch {
    // Ignore.
  }
  return next;
}
