"use client";

import { useEffect, useId, useRef, useState } from "react";
import AdvancedOptions from "@/components/AdvancedOptions";
import ItineraryView from "@/components/ItineraryView";
import { CITY_OPTIONS, matchCityCatalog, unsupportedCityMessage } from "@/lib/cities";
import { formatSavedAt } from "@/lib/format";
import { swapActivity, swapLodging, swapMeal } from "@/lib/plan";
import { DEFAULT_PREFERENCES } from "@/lib/preferences";
import {
  deleteSavedTrip,
  listSavedTrips,
  loadPreferences,
  savePreferences,
  type SavedTrip,
} from "@/lib/storage";
import {
  INTERESTS,
  type Budget,
  type Interest,
  type Itinerary,
  type Pace,
  type Preferences,
} from "@/lib/types";

const INTEREST_LABELS: Record<Interest, string> = {
  food: "Food",
  museums: "Museums",
  history: "History",
  nature: "Nature",
  viewpoints: "Viewpoints",
  nightlife: "Nightlife",
  shopping: "Shopping",
  family: "Family",
};

const PACE_OPTIONS: { id: Pace; title: string; text: string }[] = [
  { id: "relaxed", title: "Relaxed", text: "Two stops, with time to wander" },
  { id: "balanced", title: "Balanced", text: "A full day without rushing" },
  { id: "packed", title: "Packed", text: "See as much as you reasonably can" },
];

const BUDGET_OPTIONS: { id: Budget; title: string; text: string }[] = [
  { id: "budget", title: "Budget", text: "Hostels and simpler meals" },
  { id: "mid", title: "Mid-range", text: "A comfortable mix" },
  { id: "comfortable", title: "Comfortable", text: "Hotels and sit-down meals" },
];

export default function Planner() {
  const [prefs, setPrefs] = useState<Preferences>({ ...DEFAULT_PREFERENCES });
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [prefsReady, setPrefsReady] = useState(false);
  const [trip, setTrip] = useState<Itinerary | null>(null);
  const [savedTrips, setSavedTrips] = useState<SavedTrip[]>([]);
  const [cityError, setCityError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const cityBoxRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  function patchPrefs(patch: Partial<Preferences>) {
    setPrefs((current) => ({ ...current, ...patch }));
  }

  useEffect(() => {
    const stored = loadPreferences();
    if (stored) setPrefs({ ...DEFAULT_PREFERENCES, ...stored });
    setSavedTrips(listSavedTrips());
    setPrefsReady(true);
  }, []);

  useEffect(() => {
    if (!prefsReady) return;
    savePreferences(prefs);
  }, [prefsReady, prefs]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!cityBoxRef.current?.contains(event.target as Node)) {
        setCityOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const filteredCities = CITY_OPTIONS.filter((city) =>
    city.toLowerCase().includes(prefs.destination.trim().toLowerCase()),
  );
  const citiesToShow = filteredCities.length > 0 ? filteredCities : [...CITY_OPTIONS];

  function applyTrip(next: Itinerary) {
    const nextPrefs = {
      ...DEFAULT_PREFERENCES,
      ...next.prefs,
      destination: next.prefs.destination || next.destination,
    };
    const normalized = { ...next, prefs: nextPrefs };
    setTrip(normalized);
    setPrefs(nextPrefs);
  }

  async function build(next?: Preferences) {
    const payload = next ?? prefs;
    setError(null);
    setCityError(null);
    setCityOpen(false);

    if (!matchCityCatalog(payload.destination)) {
      setCityError(unsupportedCityMessage(payload.destination));
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as Itinerary | { error?: string };
      if (!response.ok || !("days" in data)) {
        const message =
          "error" in data && data.error ? data.error : "I couldn't build that trip.";
        if (/not supported yet/i.test(message)) {
          setCityError(message);
        } else {
          setError(message);
        }
        return;
      }
      applyTrip(data);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "I couldn't build that trip.");
    } finally {
      setLoading(false);
    }
  }

  if (trip) {
    return (
      <ItineraryView
        trip={trip}
        onReset={() => {
          setTrip(null);
          setSavedTrips(listSavedTrips());
        }}
        onLoadTrip={applyTrip}
        onSwapActivity={(dayIndex, oldId, newId) => setTrip(swapActivity(trip, dayIndex, oldId, newId))}
        onSwapMeal={(dayIndex, role, newId) => setTrip(swapMeal(trip, dayIndex, role, newId))}
        onSwapLodging={(newId) => setTrip(swapLodging(trip, newId))}
      />
    );
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 py-10 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-accent uppercase">Daypath</p>
      <h1 className="mt-3 max-w-xl font-serif text-5xl leading-tight tracking-tight">
        A trip that moves through the city in one direction.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Answer a few questions. Daypath builds a day-by-day plan with sights, meals, a place to sleep,
        and alternatives for every stop — ordered so you don't cross town and then come back.
      </p>

      <form
        className="mt-8 rounded-3xl border border-line bg-card p-5 sm:p-7"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label className="block text-sm font-semibold" htmlFor="destination">
          Where are you going?
        </label>
        <div className="relative mt-2" ref={cityBoxRef}>
          <div className="flex overflow-hidden rounded-2xl border border-line bg-paper">
            <input
              id="destination"
              value={prefs.destination}
              onChange={(event) => {
                patchPrefs({ destination: event.target.value });
                setCityError(null);
                setCityOpen(true);
              }}
              onFocus={() => setCityOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  return;
                }
                if (event.key === "Escape") setCityOpen(false);
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setCityOpen(true);
                }
              }}
              placeholder="Type a city or pick one"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-lg outline-none"
              required
              autoComplete="off"
              role="combobox"
              aria-expanded={cityOpen}
              aria-controls={listId}
              aria-autocomplete="list"
            />
            <button
              type="button"
              aria-label={cityOpen ? "Close city list" : "Open city list"}
              onClick={() => setCityOpen((open) => !open)}
              className="border-l border-line px-3 text-muted"
            >
              <span aria-hidden="true" className="block text-lg leading-none">
                {cityOpen ? "▴" : "▾"}
              </span>
            </button>
          </div>
          {cityOpen ? (
            <ul
              id={listId}
              role="listbox"
              className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-2xl border border-line bg-card p-1 shadow-lg"
            >
              {citiesToShow.map((city) => (
                <li key={city} role="option" aria-selected={prefs.destination === city}>
                  <button
                    type="button"
                    className={`w-full rounded-xl px-3 py-2.5 text-left text-base ${
                      prefs.destination === city ? "bg-paper font-medium" : "hover:bg-paper"
                    }`}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      patchPrefs({ destination: city });
                      setCityError(null);
                      setCityOpen(false);
                    }}
                  >
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {cityError ? (
          <p className="mt-2 text-sm text-accent-dark">{cityError}</p>
        ) : (
          <p className="mt-2 text-sm text-muted">
            Type any city, or open the list. European capitals are supported, plus Barcelona.
          </p>
        )}

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold">How many days?</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={prefs.days === value}
                onClick={() => patchPrefs({ days: value })}
                className={`h-11 w-11 rounded-full font-medium ${
                  prefs.days === value ? "bg-accent text-white" : "bg-paper text-ink"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-6">
          <ChoiceGroup
            legend="What pace?"
            value={prefs.pace}
            options={PACE_OPTIONS}
            onChange={(pace) => patchPrefs({ pace })}
          />
        </div>
        <div className="mt-6">
          <ChoiceGroup
            legend="What budget?"
            value={prefs.budget}
            options={BUDGET_OPTIONS}
            onChange={(budget) => patchPrefs({ budget })}
          />
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold">What do you care about?</legend>
          <p className="mt-1 text-sm text-muted">Pick any. Leave them as they are for history and food.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {INTERESTS.map((interest) => {
              const selected = prefs.interests.includes(interest);
              return (
                <button
                  key={interest}
                  type="button"
                  aria-pressed={selected}
                  onClick={() =>
                    patchPrefs({
                      interests: prefs.interests.includes(interest)
                        ? prefs.interests.filter((item) => item !== interest)
                        : [...prefs.interests, interest],
                    })
                  }
                  className={`rounded-full px-3 py-2 text-sm font-medium ${
                    selected ? "bg-ink text-card" : "bg-paper text-ink"
                  }`}
                >
                  {INTEREST_LABELS[interest]}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-8 border-t border-line pt-6">
          <button
            type="button"
            onClick={() => setAdvancedOpen((open) => !open)}
            className="flex w-full items-center justify-between gap-3 text-left"
            aria-expanded={advancedOpen}
          >
            <span>
              <span className="block text-sm font-semibold">Advanced options</span>
              <span className="mt-1 block text-sm text-muted">
                Optional. Only the choices you make change the plan.
              </span>
            </span>
            <span className="text-lg text-muted" aria-hidden="true">
              {advancedOpen ? "▴" : "▾"}
            </span>
          </button>

          {advancedOpen ? <AdvancedOptions prefs={prefs} onChange={patchPrefs} /> : null}
        </div>

        {error ? <p className="mt-5 text-sm text-accent-dark">{error}</p> : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={loading}
            onClick={() => void build()}
            className="rounded-full bg-accent px-5 py-3 font-medium text-white disabled:opacity-60"
          >
            {loading ? "Lining up the days…" : "Build my days"}
          </button>
        </div>
      </form>

      {savedTrips.length > 0 ? (
        <section className="mt-8 rounded-3xl border border-line bg-card p-5 sm:p-7">
          <h2 className="font-serif text-2xl">Saved trips</h2>
          <p className="mt-1 text-sm text-muted">Stored only in this browser — free, no account.</p>
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
                    onClick={() => applyTrip(item.itinerary)}
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
    </main>
  );
}

function ChoiceGroup<T extends string>({
  legend,
  value,
  options,
  onChange,
}: {
  legend: string;
  value: T;
  options: { id: T; title: string; text: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold">{legend}</legend>
      <div className={`mt-2 grid gap-2 ${options.length > 3 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={value === option.id}
            onClick={() => onChange(option.id)}
            className={`rounded-2xl border px-3 py-3 text-left ${
              value === option.id ? "border-accent bg-paper" : "border-line bg-card"
            }`}
          >
            <span className="block font-medium">{option.title}</span>
            <span className="mt-1 block text-sm text-muted">{option.text}</span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}
