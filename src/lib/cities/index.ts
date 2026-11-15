import { PlannerError } from "../errors";
import type { CityCatalog } from "../types";
import { amsterdam } from "./amsterdam";
import { antalya } from "./antalya";
import { bangkok } from "./bangkok";
import { barcelona } from "./barcelona";
import { bucharest } from "./bucharest";
import { delhi } from "./delhi";
import { dubai } from "./dubai";
import { EUROPEAN_CAPITALS } from "./europe";
import { hongkong } from "./hongkong";
import { istanbul } from "./istanbul";
import { kualalumpur } from "./kualalumpur";
import { lisbon } from "./lisbon";
import { london } from "./london";
import { macau } from "./macau";
import { madrid } from "./madrid";
import { mecca } from "./mecca";
import { newyork } from "./newyork";
import { paris } from "./paris";
import { rome } from "./rome";
import { seoul } from "./seoul";
import { shanghai } from "./shanghai";
import { singapore } from "./singapore";
import { tokyo } from "./tokyo";

/** Hand-curated catalogs win over the compact EUROPEAN_CAPITALS stubs. */
const CURATED_CITIES: CityCatalog[] = [
  amsterdam,
  antalya,
  bangkok,
  barcelona,
  bucharest,
  delhi,
  dubai,
  hongkong,
  istanbul,
  kualalumpur,
  lisbon,
  london,
  macau,
  madrid,
  mecca,
  newyork,
  paris,
  rome,
  seoul,
  shanghai,
  singapore,
  tokyo,
];
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
  const typed = destination.trim();
  if (!typed) return "Enter a city name, or pick one from the list.";
  return `${typed} is not supported. Pick a city from the list — European capitals and top destinations like London, Paris, Tokyo, and New York.`;
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
