import type { DayPlan, Itinerary, Place } from "./types";

/** Free Google Maps search link for a place. No API key needed. */
export function placeMapsUrl(place: Place, cityName: string): string {
  const query = `${place.name}, ${place.area}, ${cityName}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Directions link for one day: stay → stops → stay. */
export function dayRouteMapsUrl(trip: Itinerary, day: DayPlan): string {
  const points = [trip.lodging, ...day.stops.map((stop) => stop.place), trip.lodging];
  const path = points.map((place) => `${place.lat},${place.lon}`).join("/");
  return `https://www.google.com/maps/dir/${path}`;
}
