import type { Point } from "./types";

export function distanceKm(a: Point, b: Point): number {
  const earth = 6371;
  const dLat = radians(b.lat - a.lat);
  const dLon = radians(b.lon - a.lon);
  const sinLat = Math.sin(dLat / 2);
  const sinLon = Math.sin(dLon / 2);
  const h =
    sinLat * sinLat +
    Math.cos(radians(a.lat)) * Math.cos(radians(b.lat)) * sinLon * sinLon;
  return 2 * earth * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function centroid(points: Point[]): Point {
  const lat = points.reduce((sum, point) => sum + point.lat, 0) / points.length;
  const lon = points.reduce((sum, point) => sum + point.lon, 0) / points.length;
  return { lat, lon };
}

export function compass(from: Point, to: Point): string {
  const y = to.lat - from.lat;
  const x = (to.lon - from.lon) * Math.cos(radians(from.lat));
  const degrees = (Math.atan2(x, y) * 180) / Math.PI;
  const names = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];
  const index = Math.round((((degrees + 360) % 360) / 45) % 8);
  return names[index] ?? "Nearby";
}

function radians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
