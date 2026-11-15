import type { Metadata } from "next";
import Link from "next/link";
import { cityCountry, cityShortName, citySlug, listDeepCities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Cities · Daypath",
  description:
    "Neighborhood-aware day plans for the world’s most-visited cities — free, no account needed.",
  openGraph: {
    title: "Cities · Daypath",
    description:
      "Neighborhood-aware day plans for the world’s most-visited cities — free, no account needed.",
  },
};

export default function CitiesPage() {
  const cities = listDeepCities();

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-accent uppercase">
        <Link href="/" className="hover:underline">
          Daypath
        </Link>
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">Cities with deep plans</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Hand-curated catalogs with sights, meals, and stays — ordered so each day stays in one part of
        town.
      </p>

      <ul className="mt-10 grid gap-2 sm:grid-cols-2">
        {cities.map((city) => {
          const name = cityShortName(city);
          const country = cityCountry(city);
          const sights = city.places.filter((place) => place.category !== "stay").length;
          return (
            <li key={city.id}>
              <Link
                href={`/cities/${citySlug(city)}`}
                className="flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-line bg-card px-4 py-3 transition hover:border-accent/40"
              >
                <span>
                  <span className="font-medium">{name}</span>
                  {country ? <span className="mt-0.5 block text-sm text-muted">{country}</span> : null}
                </span>
                <span className="shrink-0 text-sm text-muted">{sights} places</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="mt-10 text-sm text-muted">
        Looking for another destination?{" "}
        <Link href="/" className="text-ink underline-offset-2 hover:underline">
          Open the planner
        </Link>{" "}
        — European capitals are supported too.
      </p>
    </main>
  );
}
