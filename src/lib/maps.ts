import type { DayPlan, Itinerary, Place } from "./types";

/** Free Google Maps search link for a place. No API key needed. */
export function placeMapsUrl(place: Place, cityName: string): string {
  const query = `${place.name}, ${place.area}, ${cityName}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Walking directions for one day: stay → stops → stay. */
export function dayRouteMapsUrl(trip: Itinerary, day: DayPlan): string {
  const stops = day.stops.map((stop) => stop.place);
  const origin = coord(trip.lodging);
  const destination = coord(trip.lodging);
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination,
    travelmode: "walking",
  });
  if (stops.length === 1) {
    params.set("waypoints", coord(stops[0]));
  } else if (stops.length > 1) {
    params.set("waypoints", stops.map(coord).join("|"));
  }
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function coord(place: Place): string {
  return `${place.lat},${place.lon}`;
}
