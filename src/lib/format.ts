import { distanceKm } from "./geo";
import type { Place, Point, Stop } from "./types";

export function placeLine(place: Place): string {
  const parts = [place.label, place.area];
  if (place.cuisine) parts.push(prettyList(place.cuisine));
  return parts.join(" · ");
}

export function walkLabel(km: number): string {
  const minutes = Math.max(1, Math.round((km / 4.5) * 60));
  if (km < 0.25) return "A couple of minutes on foot";
  if (km <= 1.6) return `${minutes} min walk`;
  if (km <= 5) return `${minutes} min on foot, or a short ride`;
  return `About ${km.toFixed(1)} km — better as a short ride`;
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
