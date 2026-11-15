import { distanceKm } from "./geo";
import type { Place, PlaceFlag, Point, Stop } from "./types";

const FLAG_LABEL: Record<PlaceFlag, string> = {
  ticket: "Book / ticket",
  early: "Go early",
  free: "Free",
  touristy: "Touristy",
};

export function placeLine(place: Place): string {
  const parts = [place.label, place.area];
  if (place.cuisine) parts.push(prettyList(place.cuisine));
  return parts.join(" · ");
}

export function walkLabel(km: number): string {
  const minutes = Math.max(1, Math.round((km / 4.5) * 60));
  const kmText = km < 0.1 ? "<0.1 km" : `${km.toFixed(km < 1 ? 1 : 1)} km`;
  if (km < 0.25) return `${kmText} · a couple of minutes on foot`;
  if (km <= 1.6) return `${kmText} · ~${minutes} min walk`;
  if (km <= 5) return `${kmText} · ~${minutes} min walk, or a short ride`;
  return `${kmText} · better as a short ride (~${minutes} min walk)`;
}

/** Merge explicit catalog flags with light inference from copy. */
export function placeFlags(place: Place): PlaceFlag[] {
  const found = new Set<PlaceFlag>(place.flags ?? []);
  const text = `${place.why} ${place.tip ?? ""} ${place.label}`.toLowerCase();

  if (/book timed|book ahead|timed entry|tickets?|reserve|skip[- ]the[- ]line/.test(text)) {
    found.add("ticket");
  }
  if (/go early|before (the )?crowds|early for|morning for fewer/.test(text)) {
    found.add("early");
  }
  if (
    /free entry|free museum|free rooftop|no ticket|without (a )?ticket|open park|no admission/.test(
      text,
    ) ||
    (place.category === "nature" && /park|garden|viewpoint|beach/.test(place.label.toLowerCase()))
  ) {
    found.add("free");
  }
  if (/touristy|crowded|postcard|classic photo|queue/.test(text) || place.score >= 10) {
    if (place.category === "sight" || place.category === "museum") found.add("touristy");
  }

  return (["ticket", "early", "free", "touristy"] as PlaceFlag[]).filter((flag) => found.has(flag));
}

export function flagLabel(flag: PlaceFlag): string {
  return FLAG_LABEL[flag];
}

export function legKm(from: Point, to: Point): number {
  return distanceKm(from, to);
}

export function roleLabel(stop: Stop, index: number, stops: Stop[]): string {
  if (stop.role === "lunch") return "Lunch";
  if (stop.role === "dinner") return "Dinner";
  if (stop.role === "evening") return "Evening";

  const activityIndexes = stops
    .map((item, itemIndex) => (item.role === "activity" ? itemIndex : -1))
    .filter((itemIndex) => itemIndex >= 0);
  const order = activityIndexes.indexOf(index) + 1;
  const total = activityIndexes.length;
  if (total <= 1) return "Morning";
  if (order <= Math.ceil(total / 2)) {
    return total === 2 ? "Morning" : `Morning · stop ${order}`;
  }
  const afternoonOrder = order - Math.ceil(total / 2);
  return total === 2 ? "Afternoon" : `Afternoon · stop ${afternoonOrder}`;
}

export function formatSavedAt(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function prettyList(value: string): string {
  return value
    .split(/[;|]/)
    .map((part) => part.trim().replaceAll("_", " "))
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(", ");
}
