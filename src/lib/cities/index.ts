import { PlannerError } from "../errors";
import type { CityCatalog } from "../types";
import { agra } from "./agra";
import { amsterdam } from "./amsterdam";
import { andorralavella } from "./andorralavella";
import { antalya } from "./antalya";
import { athens } from "./athens";
import { bangkok } from "./bangkok";
import { barcelona } from "./barcelona";
import { belgrade } from "./belgrade";
import { berlin } from "./berlin";
import { bern } from "./bern";
import { bratislava } from "./bratislava";
import { brussels } from "./brussels";
import { bucharest } from "./bucharest";
import { budapest } from "./budapest";
import { cairo } from "./cairo";
import { cancun } from "./cancun";
import { chennai } from "./chennai";
import { chisinau } from "./chisinau";
import { copenhagen } from "./copenhagen";
import { delhi } from "./delhi";
import { denpasar } from "./denpasar";
import { dubai } from "./dubai";
import { dublin } from "./dublin";
import { EUROPEAN_CAPITALS } from "./europe";
import { guangzhou } from "./guangzhou";
import { halong } from "./halong";
import { helsinki } from "./helsinki";
import { hochiminh } from "./hochiminh";
import { hongkong } from "./hongkong";
import { iasi } from "./iasi";
import { istanbul } from "./istanbul";
import { jaipur } from "./jaipur";
import { johorbahru } from "./johorbahru";
import { kualalumpur } from "./kualalumpur";
import { kyiv } from "./kyiv";
import { lasvegas } from "./lasvegas";
import { lisbon } from "./lisbon";
import { ljubljana } from "./ljubljana";
import { london } from "./london";
import { losangeles } from "./losangeles";
import { luxembourg } from "./luxembourg";
import { macau } from "./macau";
import { madrid } from "./madrid";
import { mecca } from "./mecca";
import { medina } from "./medina";
import { miami } from "./miami";
import { milan } from "./milan";
import { minsk } from "./minsk";
import { monaco } from "./monaco";
import { moscow } from "./moscow";
import { mumbai } from "./mumbai";
import { newyork } from "./newyork";
import { nicosia } from "./nicosia";
import { orlando } from "./orlando";
import { osaka } from "./osaka";
import { oslo } from "./oslo";
import { paris } from "./paris";
import { pattaya } from "./pattaya";
import { phuket } from "./phuket";
import { podgorica } from "./podgorica";
import { prague } from "./prague";
import { pristina } from "./pristina";
import { reykjavik } from "./reykjavik";
import { riga } from "./riga";
import { riyadh } from "./riyadh";
import { rome } from "./rome";
import { sanmarino } from "./sanmarino";
import { sarajevo } from "./sarajevo";
import { seoul } from "./seoul";
import { shanghai } from "./shanghai";
import { shenzhen } from "./shenzhen";
import { singapore } from "./singapore";
import { skopje } from "./skopje";
import { sofia } from "./sofia";
import { stockholm } from "./stockholm";
import { taipei } from "./taipei";
import { tallinn } from "./tallinn";
import { tirana } from "./tirana";
import { tokyo } from "./tokyo";
import { vaduz } from "./vaduz";
import { valletta } from "./valletta";
import { vatican } from "./vatican";
import { venice } from "./venice";
import { vienna } from "./vienna";
import { vilnius } from "./vilnius";
import { warsaw } from "./warsaw";
import { zagreb } from "./zagreb";

/** Hand-curated deep catalogs win over any EUROPEAN_CAPITALS stubs. */
const CURATED_CITIES: CityCatalog[] = [
  agra,
  amsterdam,
  andorralavella,
  antalya,
  athens,
  bangkok,
  barcelona,
  belgrade,
  berlin,
  bern,
  bratislava,
  brussels,
  bucharest,
  budapest,
  cairo,
  cancun,
  chennai,
  chisinau,
  copenhagen,
  delhi,
  denpasar,
  dubai,
  dublin,
  guangzhou,
  halong,
  helsinki,
  hochiminh,
  hongkong,
  iasi,
  istanbul,
  jaipur,
  johorbahru,
  kualalumpur,
  kyiv,
  lasvegas,
  lisbon,
  ljubljana,
  london,
  losangeles,
  luxembourg,
  macau,
  madrid,
  mecca,
  medina,
  miami,
  milan,
  minsk,
  monaco,
  moscow,
  mumbai,
  newyork,
  nicosia,
  orlando,
  osaka,
  oslo,
  paris,
  pattaya,
  phuket,
  podgorica,
  prague,
  pristina,
  reykjavik,
  riga,
  riyadh,
  rome,
  sanmarino,
  sarajevo,
  seoul,
  shanghai,
  shenzhen,
  singapore,
  skopje,
  sofia,
  stockholm,
  taipei,
  tallinn,
  tirana,
  tokyo,
  vaduz,
  valletta,
  vatican,
  venice,
  vienna,
  vilnius,
  warsaw,
  zagreb,
];
const CURATED_IDS = new Set(CURATED_CITIES.map((city) => city.id));

export const CITIES: CityCatalog[] = [
  ...CURATED_CITIES,
  ...EUROPEAN_CAPITALS.filter((city) => !CURATED_IDS.has(city.id)),
].sort((a, b) => a.name.localeCompare(b.name));

/** Labels shown in the city field dropdown — "City, Country". */
export const CITY_OPTIONS: string[] = CITIES.map((city) => city.name).sort((a, b) =>
  shortNameFromLabel(a).localeCompare(shortNameFromLabel(b)),
);

/** Deep, hand-curated catalogs (London-level detail). */
export const DEEP_CITIES: CityCatalog[] = [...CURATED_CITIES].sort((a, b) =>
  shortName(a).localeCompare(shortName(b)),
);

export function listCityNames(): string[] {
  return CITIES.map((city) => city.name);
}

export function listDeepCities(): CityCatalog[] {
  return DEEP_CITIES;
}

/** Every city the planner supports (same set as the city dropdown). */
export function listAllCities(): CityCatalog[] {
  return CITIES;
}

export function getCityBySlug(slug: string): CityCatalog | null {
  const cleaned = slug.trim().toLowerCase();
  const needle = normalize(cleaned.replace(/-/g, " "));
  return (
    CITIES.find((city) => city.id === cleaned) ??
    CITIES.find((city) => normalize(shortName(city)) === needle) ??
    null
  );
}

export function citySlug(city: CityCatalog): string {
  return city.id;
}

export function cityShortName(city: CityCatalog): string {
  return shortName(city);
}

/** Full planner label, e.g. "Bucharest, Romania". */
export function cityLabel(city: CityCatalog): string {
  return city.name;
}

/** Country/region after the comma, or null for city-states. */
export function cityCountry(city: CityCatalog): string | null {
  const parts = city.name.split(",");
  if (parts.length < 2) return null;
  return parts.slice(1).join(",").trim() || null;
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
  return `${typed} is not supported. Pick a city from the list — for example London, Paris, Tokyo, New York, Bucharest, or Iași.`;
}

export function findCityCatalog(destination: string): CityCatalog {
  const match = matchCityCatalog(destination);
  if (!match) {
    throw new PlannerError(unsupportedCityMessage(destination));
  }
  return match;
}

function shortName(city: CityCatalog): string {
  return shortNameFromLabel(city.name);
}

function shortNameFromLabel(label: string): string {
  return label.split(",")[0]?.trim() || label;
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
