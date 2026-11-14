import { PlannerError } from "../errors";
import type { CityCatalog } from "../types";
import { barcelona } from "./barcelona";
import { bucharest } from "./bucharest";
import { EUROPEAN_CAPITALS } from "./europe";
import { lisbon } from "./lisbon";
import { london } from "./london";
import { paris } from "./paris";
import { rome } from "./rome";

/** Hand-curated catalogs win over the compact EUROPEAN_CAPITALS stubs. */
const CURATED_CITIES: CityCatalog[] = [lisbon, rome, paris, barcelona, bucharest, london];
const CURATED_IDS = new Set(CURATED_CITIES.map((city) => city.id));

export const CITIES: CityCatalog[] = [
  ...CURATED_CITIES,
  ...EUROPEAN_CAPITALS.filter((city) => !CURATED_IDS.has(city.id)),
].sort((a, b) => a.name.localeCompare(b.name));

/** Short names shown in the city field dropdown. */
export const CITY_OPTIONS: string[] = CITIES.map((city) => shortName(city)).sort((a, b) =>
  a.localeCompare(b),
);

export function listCityNames(): string[] {
  return CITIES.map((city) => city.name);
}

export function matchCityCatalog(destination: string): CityCatalog | null {
  const needle = normalize(destination);
  if (!needle) return null;

  const exact = CITIES.find((city) => cityMatchesExact(city, needle));
  if (exact) return exact;

  return CITIES.find((city) => cityMatchesLoose(city, needle)) ?? null;
}

export function unsupportedCityMessage(destination: string): string {
  const typed = destination.trim() || "That city";
  return `${typed} is not supported yet. Try a European capital from the list.`;
}

export function findCityCatalog(destination: string): CityCatalog {
  const match = matchCityCatalog(destination);
  if (!match) {
    throw new PlannerError(unsupportedCityMessage(destination));
  }
  return match;
}

function shortName(city: CityCatalog): string {
  return city.name.split(",")[0]?.trim() || city.name;
}

function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function cityMatchesExact(city: CityCatalog, needle: string): boolean {
  const name = normalize(city.name);
  const short = normalize(shortName(city));
  if (needle === name || needle === short) return true;
  return city.aliases.some((alias) => normalize(alias) === needle);
}

function cityMatchesLoose(city: CityCatalog, needle: string): boolean {
  const name = normalize(city.name);
  const short = normalize(shortName(city));

  if (name.startsWith(needle + ",") || name.startsWith(needle + " ")) return true;
  if (short.startsWith(needle) && needle.length >= 3) return true;

  return city.aliases.some((alias) => {
    const value = normalize(alias);
    if (needle.startsWith(value + ",") || needle.startsWith(value + " ")) return true;
    // Avoid "rome" matching "romania": short aliases need a clean boundary.
    if (value.length <= 4) {
      return needle === value || needle.startsWith(value + " ") || needle.startsWith(value + ",");
    }
    return needle.includes(value) || value.includes(needle);
  });
}
