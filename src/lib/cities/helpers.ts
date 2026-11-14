import type { Category, Place } from "../types";

export function place(
  id: string,
  name: string,
  lat: number,
  lon: number,
  category: Category,
  label: string,
  area: string,
  score: number,
  why: string,
  extra: Partial<Place> = {},
): Place {
  return {
    id,
    name,
    lat,
    lon,
    category,
    label,
    area,
    score,
    why,
    ...extra,
  };
}
