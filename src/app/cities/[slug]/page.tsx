import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  cityShortName,
  citySlug,
  getCityBySlug,
  listDeepCities,
} from "@/lib/cities";
import { cityTipFor } from "@/lib/cities/tips";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listDeepCities().map((city) => ({ slug: citySlug(city) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return { title: "City · Daypath" };
  const name = cityShortName(city);
  const title = `${name} itinerary planner · Daypath`;
  const description = `Build a neighborhood-aware day plan for ${name}. Free, no account — sights, meals, and a place to sleep without zigzagging across town.`;
  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const name = cityShortName(city);
  const tip = cityTipFor(city.id, city.name);
  const activities = city.places
    .filter((place) => !["food", "cafe", "nightlife", "stay"].includes(place.category))
    .slice()
    .sort((a, b) => b.score - a.score);
  const highlights = activities.slice(0, 8);
  const areas = [...new Set(activities.map((place) => place.area).filter(Boolean))].slice(0, 8);
  const stays = city.places.filter((place) => place.category === "stay").length;
  const meals = city.places.filter((place) =>
    ["food", "cafe", "nightlife"].includes(place.category),
  ).length;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-accent uppercase">
        <Link href="/" className="hover:underline">
          Daypath
        </Link>
        {" · "}
        <Link href="/cities" className="hover:underline">
          Cities
        </Link>
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">{name}</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        A free day-by-day plan that keeps each day in one neighborhood — with meals, a stay, and
        alternatives for every stop.
      </p>

      <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted">
        <span className="rounded-full border border-line bg-card px-3 py-1.5">
          {activities.length} sights
        </span>
        <span className="rounded-full border border-line bg-card px-3 py-1.5">{meals} meals</span>
        <span className="rounded-full border border-line bg-card px-3 py-1.5">{stays} stays</span>
      </div>

      <Link
        href={`/?city=${encodeURIComponent(name)}`}
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-medium text-white"
      >
        Plan a trip to {name}
      </Link>

      <section className="mt-10 rounded-3xl border border-line bg-card p-5 sm:p-6">
        <h2 className="font-serif text-2xl">City tip</h2>
        <p className="mt-2 text-muted">{tip}</p>
      </section>

      {areas.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-serif text-2xl">Neighborhoods we plan around</h2>
          <p className="mt-2 text-sm text-muted">Days stay clustered so you are not crossing town twice.</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {areas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-line bg-card px-3 py-1.5 text-sm"
              >
                {area}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="font-serif text-2xl">Sample highlights</h2>
        <p className="mt-2 text-sm text-muted">
          A few places from the catalog — your plan picks based on interests and pace.
        </p>
        <ul className="mt-4 grid gap-3">
          {highlights.map((place) => (
            <li key={place.id} className="rounded-2xl border border-line bg-card px-4 py-3">
              <p className="font-medium">{place.name}</p>
              <p className="mt-0.5 text-sm text-muted">
                {place.area}
                {place.label ? ` · ${place.label}` : ""}
              </p>
              <p className="mt-2 text-sm">{place.why}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm text-muted">
        <Link href="/cities" className="text-ink underline-offset-2 hover:underline">
          All deep cities
        </Link>
        {" · "}
        <Link href="/" className="text-ink underline-offset-2 hover:underline">
          Back to planner
        </Link>
      </p>
    </main>
  );
}
