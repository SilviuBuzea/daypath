"use client";

import { useState, type ReactNode } from "react";
import { formatSavedAt, legKm, placeLine, roleLabel, walkLabel } from "@/lib/format";
import { dayRouteMapsUrl, placeMapsUrl } from "@/lib/maps";
import { summarizeAdvanced } from "@/lib/preferences";
import { deleteSavedTrip, listSavedTrips, saveTrip, type SavedTrip } from "@/lib/storage";
import type { DayPlan, Itinerary, Place, Preferences } from "@/lib/types";

const PACE_LABEL = { relaxed: "Relaxed", balanced: "Balanced", packed: "Packed" };
const BUDGET_LABEL = { budget: "Budget", mid: "Mid-range", comfortable: "Comfortable" };

export default function ItineraryView({
  trip,
  onSwapActivity,
  onSwapMeal,
  onSwapLodging,
  onReset,
  onLoadTrip,
}: {
  trip: Itinerary;
  onSwapActivity: (dayIndex: number, oldId: string, newId: string) => void;
  onSwapMeal: (dayIndex: number, role: "lunch" | "dinner" | "evening", newId: string) => void;
  onSwapLodging: (newId: string) => void;
  onReset: () => void;
  onLoadTrip: (trip: Itinerary) => void;
}) {
  const [dayIndex, setDayIndex] = useState(0);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [lodgingOpen, setLodgingOpen] = useState(false);
  const [savedTrips, setSavedTrips] = useState<SavedTrip[]>(() => listSavedTrips());
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const day = trip.days[Math.min(dayIndex, trip.days.length - 1)];
  const dayMapsUrl = dayRouteMapsUrl(trip, day);

  function savePdf() {
    const previousTitle = document.title;
    const safeName = trip.destination.replace(/[^\w\s-]+/g, "").trim().replace(/\s+/g, "-");
    document.title = `Daypath-${safeName || "itinerary"}`;
    window.print();
    window.setTimeout(() => {
      document.title = previousTitle;
    }, 500);
  }

  function handleSaveTrip() {
    const next = saveTrip(trip);
    setSavedTrips(next);
    setSaveMessage("Trip saved on this device.");
    window.setTimeout(() => setSaveMessage(null), 2500);
  }

  return (
    <>
      <div className="screen-only mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6 sm:px-6">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-accent">Daypath</p>
            <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">{trip.destination}</h1>
            <p className="mt-2 text-muted">
              {trip.days.length} {trip.days.length === 1 ? "day" : "days"} · {PACE_LABEL[trip.prefs.pace]} ·{" "}
              {BUDGET_LABEL[trip.prefs.budget]}
            </p>
            <AdvancedSummary prefs={trip.prefs} className="mt-1 max-w-xl text-sm text-muted" />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleSaveTrip}
              className="rounded-full border border-line bg-card px-4 py-2 text-sm font-medium"
            >
              Save trip
            </button>
            <button
              type="button"
              onClick={savePdf}
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white"
            >
              Save as PDF
            </button>
            <button
              type="button"
              onClick={onReset}
              className="rounded-full border border-line bg-card px-4 py-2 text-sm font-medium"
            >
              Go back
            </button>
          </div>
        </header>
        {saveMessage ? <p className="text-sm text-forest">{saveMessage}</p> : null}

        {trip.cityTip ? (
          <p className="rounded-2xl border border-line bg-card px-4 py-3 text-sm">
            <span className="font-semibold">City tip. </span>
            {trip.cityTip}
          </p>
        ) : null}

        {trip.note ? (
          <p className="rounded-2xl border border-line bg-card px-4 py-3 text-sm text-muted">{trip.note}</p>
        ) : null}

        <section className="rounded-3xl border border-line bg-card p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted uppercase">Your stay</p>
              <h2 className="mt-1 font-serif text-2xl">{trip.lodging.name}</h2>
              <p className="mt-1 text-sm text-muted">{placeLine(trip.lodging)}</p>
              <p className="mt-2 max-w-xl text-sm">{trip.lodging.why}</p>
              {trip.lodging.tip ? <p className="mt-2 text-sm text-muted">{trip.lodging.tip}</p> : null}
              <a
                href={placeMapsUrl(trip.lodging, trip.destination)}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-full border border-line px-3 py-1.5 text-sm font-medium"
              >
                Open in Maps
              </a>
            </div>
            {trip.lodgingAlternatives.length > 0 ? (
              <button
                type="button"
                onClick={() => setLodgingOpen((open) => !open)}
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-card"
              >
                {lodgingOpen ? "Close" : "Other places to sleep"}
              </button>
            ) : null}
          </div>
          {lodgingOpen ? (
            <AlternativeList
              places={trip.lodgingAlternatives}
              cityName={trip.destination}
              onPick={(place) => {
                onSwapLodging(place.id);
                setLodgingOpen(false);
              }}
            />
          ) : null}
        </section>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex gap-2 overflow-x-auto">
            {trip.days.map((item, index) => (
              <button
                key={item.day}
                type="button"
                onClick={() => {
                  setDayIndex(index);
                  setOpenKey(null);
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  index === dayIndex ? "bg-accent text-white" : "bg-card text-ink border border-line"
                }`}
              >
                Day {item.day}
              </button>
            ))}
          </div>
          <a
            href={dayMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line bg-card px-4 py-2 text-sm font-medium"
          >
            Open this day in Maps
          </a>
        </div>

        <DaySection trip={trip} day={day} interactive>
          {(stop, index, key) => {
            const previous = index === 0 ? trip.lodging : day.stops[index - 1].place;
            return (
              <li key={key} className="relative pl-12">
                <span className="absolute left-0 top-4 grid h-8 w-8 place-items-center rounded-full bg-card text-sm font-semibold ring-2 ring-line">
                  {index + 1}
                </span>
                <article className="rounded-3xl border border-line bg-card p-4">
                  <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                    {roleLabel(stop, index, day.stops)}
                  </p>
                  <p className="mt-1 text-xs font-medium tracking-wide text-muted uppercase">
                    {walkLabel(legKm(previous, stop.place))}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl">{stop.place.name}</h3>
                  <p className="mt-1 text-sm text-muted">{placeLine(stop.place)}</p>
                  <p className="mt-2 text-sm">{stop.place.why}</p>
                  {stop.place.tip ? <p className="mt-2 text-sm text-muted">{stop.place.tip}</p> : null}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={placeMapsUrl(stop.place, trip.destination)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-line px-3 py-1.5 text-sm font-medium"
                    >
                      Open in Maps
                    </a>
                    <button
                      type="button"
                      onClick={() => setOpenKey(openKey === key ? null : key)}
                      className="rounded-full bg-paper px-3 py-1.5 text-sm font-medium"
                    >
                      {openKey === key ? "Close" : "Change this"}
                    </button>
                  </div>
                  {openKey === key ? (
                    stop.alternatives.length > 0 ? (
                      <AlternativeList
                        places={stop.alternatives}
                        cityName={trip.destination}
                        onPick={(place) => {
                          if (stop.role === "activity") {
                            onSwapActivity(dayIndex, stop.place.id, place.id);
                          } else {
                            onSwapMeal(dayIndex, stop.role, place.id);
                          }
                          setOpenKey(null);
                        }}
                      />
                    ) : (
                      <p className="mt-3 text-sm text-muted">No alternatives nearby for this stop.</p>
                    )
                  ) : null}
                </article>
              </li>
            );
          }}
        </DaySection>

        {savedTrips.length > 0 ? (
          <section className="rounded-3xl border border-line bg-card p-5">
            <h2 className="font-serif text-2xl">Saved on this device</h2>
            <p className="mt-1 text-sm text-muted">Reload a trip you saved earlier in this browser.</p>
            <ul className="mt-4 grid gap-2">
              {savedTrips.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-line bg-paper px-3 py-3"
                >
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted">{formatSavedAt(item.savedAt)}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onLoadTrip(item.itinerary);
                        setDayIndex(0);
                        setOpenKey(null);
                      }}
                      className="rounded-full bg-ink px-3 py-1.5 text-sm font-medium text-card"
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      onClick={() => setSavedTrips(deleteSavedTrip(item.id))}
                      className="rounded-full border border-line px-3 py-1.5 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <div className="print-only">
        <PrintableItinerary trip={trip} />
      </div>
    </>
  );
}

function PrintableItinerary({ trip }: { trip: Itinerary }) {
  return (
    <article className="print-sheet mx-auto max-w-3xl px-8 py-8 text-ink">
      <header className="print-hero border-b border-line pb-5">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase">Daypath itinerary</p>
        <h1 className="mt-2 font-serif text-4xl leading-tight">{trip.destination}</h1>
        <p className="mt-2 text-sm">
          {trip.days.length} {trip.days.length === 1 ? "day" : "days"} · {PACE_LABEL[trip.prefs.pace]} ·{" "}
          {BUDGET_LABEL[trip.prefs.budget]}
        </p>
        <AdvancedSummary prefs={trip.prefs} className="mt-1 text-sm" />
        {trip.cityTip ? <p className="mt-3 text-sm leading-relaxed">{trip.cityTip}</p> : null}
        {trip.note ? <p className="mt-2 text-sm leading-relaxed">{trip.note}</p> : null}
      </header>

      <section className="mt-6 break-inside-avoid">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase">Your stay</p>
        <h2 className="mt-1 font-serif text-2xl">{trip.lodging.name}</h2>
        <p className="mt-1 text-sm">{placeLine(trip.lodging)}</p>
        <p className="mt-2 text-sm leading-relaxed">{trip.lodging.why}</p>
      </section>

      {trip.days.map((day) => (
        <section key={day.day} className="print-day mt-8 break-before-page border-t border-line pt-5">
          <h2 className="font-serif text-3xl leading-tight">
            Day {day.day}: {day.title}
          </h2>
          <p className="mt-1 text-sm">{day.area}</p>
          <p className="mt-2 text-sm leading-relaxed">{day.routeNote}</p>
          <ol className="mt-5">
            {day.stops.map((stop, index) => {
              const previous = index === 0 ? trip.lodging : day.stops[index - 1].place;
              return (
                <li key={`${day.day}-${stop.place.id}-${index}`} className="print-stop mt-4 break-inside-avoid">
                  <p className="text-xs font-semibold uppercase tracking-wide">
                    {roleLabel(stop, index, day.stops)}
                  </p>
                  <p className="mt-0.5 text-xs">
                    {index + 1}. {walkLabel(legKm(previous, stop.place))}
                  </p>
                  <h3 className="mt-1 font-serif text-xl">{stop.place.name}</h3>
                  <p className="text-sm">{placeLine(stop.place)}</p>
                  <p className="mt-1 text-sm leading-relaxed">{stop.place.why}</p>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-sm">
            Back to your stay · {walkLabel(legKm(day.stops.at(-1)?.place ?? trip.lodging, trip.lodging))}
          </p>
        </section>
      ))}

      <p className="mt-10 border-t border-line pt-4 text-sm">
        Support: silviupetrisor96@gmail.com
      </p>
    </article>
  );
}

function DaySection({
  trip,
  day,
  interactive,
  children,
}: {
  trip: Itinerary;
  day: DayPlan;
  interactive: boolean;
  children: (stop: DayPlan["stops"][number], index: number, key: string) => ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-3xl">
        Day {day.day}: {day.title}
      </h2>
      <p className="mt-1 text-sm text-muted">{day.area}</p>
      <p className="mt-3 text-sm">{day.routeNote}</p>
      <ol className={interactive ? "timeline mt-6 space-y-4" : "mt-4"}>
        {day.stops.map((stop, index) =>
          children(stop, index, `${day.day}-${stop.role}-${stop.place.id}`),
        )}
      </ol>
      <p className={`text-sm text-muted ${interactive ? "mt-4 pl-12" : "mt-3"}`}>
        Back to your stay · {walkLabel(legKm(day.stops.at(-1)?.place ?? trip.lodging, trip.lodging))}
      </p>
    </section>
  );
}

function AlternativeList({
  places,
  cityName,
  onPick,
}: {
  places: Place[];
  cityName: string;
  onPick: (place: Place) => void;
}) {
  return (
    <ul className="mt-4 grid gap-2">
      {places.map((place) => (
        <li key={place.id}>
          <div className="rounded-2xl border border-line bg-paper px-3 py-3">
            <button type="button" onClick={() => onPick(place)} className="w-full text-left hover:opacity-90">
              <span className="block font-medium">{place.name}</span>
              <span className="mt-0.5 block text-sm text-muted">{placeLine(place)}</span>
              <span className="mt-1 block text-sm">{place.why}</span>
            </button>
            <a
              href={placeMapsUrl(place, cityName)}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-sm font-medium underline-offset-2 hover:underline"
            >
              Open in Maps
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

function AdvancedSummary({ prefs, className }: { prefs: Preferences; className?: string }) {
  const summary = summarizeAdvanced(prefs);
  if (!summary) return null;
  return <p className={className}>{summary}</p>;
}
