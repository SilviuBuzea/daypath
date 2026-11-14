"use client";

import {
  ACCESS_LABEL,
  ALCOHOL_LABEL,
  DAYSTART_LABEL,
  DIET_LABEL,
  FREE_LABEL,
  GLUTEN_LABEL,
  HOSTEL_LABEL,
  KIDS_LABEL,
  LATE_LABEL,
  MEAL_LABEL,
  PARTY_LABEL,
  PETS_LABEL,
  RAIN_LABEL,
  SETTING_LABEL,
  TRANSPORT_LABEL,
  VIBE_LABEL,
  WALKING_LABEL,
  YESNO_DOWN,
  YESNO_MUSIC,
  YESNO_PHOTO,
  YESNO_ROMANTIC,
  YESNO_SHOP,
  YESNO_TRAPS,
  defaultTravelers,
} from "@/lib/preferences";
import type {
  AccessibilityPref,
  AlcoholPref,
  DayStartPref,
  DietPref,
  FreeFriendlyPref,
  GlutenFreePref,
  HostelPref,
  KidsFocusPref,
  LateNightsPref,
  MealPref,
  Party,
  PetsPref,
  Preferences,
  RainPlanPref,
  SettingPref,
  TransportPref,
  VibePref,
  WalkingPref,
  YesNoPref,
} from "@/lib/types";

export default function AdvancedOptions({
  prefs,
  onChange,
}: {
  prefs: Preferences;
  onChange: (patch: Partial<Preferences>) => void;
}) {
  return (
    <div className="mt-5 grid gap-6">
      <ChoiceGroup
        legend="Who's traveling?"
        value={prefs.party}
        options={(Object.keys(PARTY_LABEL) as Party[]).map((id) => ({
          id,
          title: PARTY_LABEL[id],
          text:
            id === "any"
              ? "Don't factor this in"
              : id === "solo"
                ? "Just you"
                : id === "couple"
                  ? "Two people"
                  : id === "family"
                    ? "Kids or relatives"
                    : "A small group",
        }))}
        onChange={(party) => onChange({ party, travelers: defaultTravelers(party) })}
      />

      <fieldset>
        <legend className="text-sm font-semibold">How many people?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={prefs.travelers === value}
              onClick={() => onChange({ travelers: value })}
              className={`h-11 min-w-11 rounded-full px-2 font-medium ${
                prefs.travelers === value ? "bg-accent text-white" : "bg-paper text-ink"
              }`}
            >
              {value === 0 ? "Any" : value}
            </button>
          ))}
        </div>
      </fieldset>

      <ChoiceGroup
        legend="Hostels?"
        value={prefs.hostel}
        options={(Object.keys(HOSTEL_LABEL) as HostelPref[]).map((id) => ({
          id,
          title: HOSTEL_LABEL[id],
          text:
            id === "any"
              ? "Don't factor this in"
              : id === "open"
                ? "Hotels or hostels are both OK"
                : id === "no"
                  ? "Please avoid hostels"
                  : "Lean toward hostel stays",
        }))}
        onChange={(hostel) => onChange({ hostel })}
      />

      <ChoiceGroup
        legend="Walking comfort"
        value={prefs.walking}
        options={(Object.keys(WALKING_LABEL) as WalkingPref[]).map((id) => ({
          id,
          title: WALKING_LABEL[id],
          text:
            id === "any"
              ? "Don't factor this in"
              : id === "easy"
                ? "Shorter hops between stops"
                : id === "normal"
                  ? "Typical city walking"
                  : "Longer walks are fine",
        }))}
        onChange={(walking) => onChange({ walking })}
      />

      <ChoiceGroup
        legend="Getting around"
        value={prefs.transport}
        options={(Object.keys(TRANSPORT_LABEL) as TransportPref[]).map((id) => ({
          id,
          title: TRANSPORT_LABEL[id],
          text:
            id === "any"
              ? "Don't factor this in"
              : id === "taxis"
                ? "Short rides between pockets are fine"
                : "Prefer walking and transit",
        }))}
        onChange={(transport) => onChange({ transport })}
      />

      <ChoiceGroup
        legend="Meals"
        value={prefs.meals}
        options={(Object.keys(MEAL_LABEL) as MealPref[]).map((id) => ({
          id,
          title: MEAL_LABEL[id],
          text:
            id === "any"
              ? "Don't factor this in"
              : id === "quick"
                ? "Cafes and quick food"
                : id === "sitdown"
                  ? "Proper restaurants"
                  : id === "skip"
                    ? "Only sights, lodging, and evenings — no lunch or dinner stops"
                    : "A bit of both",
        }))}
        onChange={(meals) => onChange({ meals })}
      />

      <ChoiceGroup
        legend="Diet"
        value={prefs.diet}
        options={(Object.keys(DIET_LABEL) as DietPref[]).map((id) => ({
          id,
          title: DIET_LABEL[id],
          text: id === "any" ? "Don't factor this in" : "Best-effort from the city shortlist",
        }))}
        onChange={(diet) => onChange({ diet })}
      />

      <ChoiceGroup
        legend="Gluten-free"
        value={prefs.glutenFree}
        options={(Object.keys(GLUTEN_LABEL) as GlutenFreePref[]).map((id) => ({
          id,
          title: GLUTEN_LABEL[id],
          text:
            id === "yes"
              ? "Avoid pastry/pizza-heavy picks when possible"
              : id === "no"
                ? "No special gluten filter"
                : "Don't factor this in",
        }))}
        onChange={(glutenFree) => onChange({ glutenFree })}
      />

      <ChoiceGroup
        legend="Late nights"
        value={prefs.lateNights}
        options={(Object.keys(LATE_LABEL) as LateNightsPref[]).map((id) => ({
          id,
          title: LATE_LABEL[id],
          text:
            id === "any"
              ? "Don't factor this in"
              : id === "auto"
                ? "Add evenings if nightlife is selected"
                : id === "yes"
                  ? "Include an evening stop"
                  : "Keep evenings quiet",
        }))}
        onChange={(lateNights) => onChange({ lateNights })}
      />

      <ChoiceGroup
        legend="Day start"
        value={prefs.dayStart}
        options={(Object.keys(DAYSTART_LABEL) as DayStartPref[]).map((id) => ({
          id,
          title: DAYSTART_LABEL[id],
          text:
            id === "any"
              ? "Don't factor this in"
              : id === "early"
                ? "More of the strong stops before lunch"
                : id === "late"
                  ? "A lighter morning"
                  : "A normal split",
        }))}
        onChange={(dayStart) => onChange({ dayStart })}
      />

      <fieldset>
        <legend className="text-sm font-semibold">Max museums per day</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {[6, 0, 1, 2, 3, 4].map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={prefs.maxMuseums === value}
              onClick={() => onChange({ maxMuseums: value })}
              className={`h-11 min-w-11 rounded-full px-3 font-medium ${
                prefs.maxMuseums === value ? "bg-accent text-white" : "bg-paper text-ink"
              }`}
            >
              {value === 6 ? "Any" : value}
            </button>
          ))}
        </div>
      </fieldset>

      <ChoiceGroup
        legend="Vibe"
        value={prefs.vibe}
        options={(Object.keys(VIBE_LABEL) as VibePref[]).map((id) => ({
          id,
          title: VIBE_LABEL[id],
          text:
            id === "any"
              ? "Don't factor this in"
              : id === "famous"
                ? "Big-name sights first"
                : id === "hidden"
                  ? "Quieter, less obvious stops"
                  : "Famous and quieter mixed",
        }))}
        onChange={(vibe) => onChange({ vibe })}
      />

      <ChoiceGroup
        legend="Pets"
        value={prefs.pets}
        options={(Object.keys(PETS_LABEL) as PetsPref[]).map((id) => ({
          id,
          title: PETS_LABEL[id],
          text:
            id === "yes"
              ? "Favor parks and outdoor stops"
              : id === "no"
                ? "No special pet needs"
                : "Don't factor this in",
        }))}
        onChange={(pets) => onChange({ pets })}
      />

      <ChoiceGroup
        legend="Kids"
        value={prefs.kidsFocus}
        options={(Object.keys(KIDS_LABEL) as KidsFocusPref[]).map((id) => ({
          id,
          title: KIDS_LABEL[id],
          text:
            id === "yes"
              ? "Parks, zoos, aquariums, and easier days"
              : id === "no"
                ? "No special kid focus"
                : "Don't factor this in",
        }))}
        onChange={(kidsFocus) => onChange({ kidsFocus })}
      />

      <ChoiceGroup
        legend="Indoor / outdoor"
        value={prefs.setting}
        options={(Object.keys(SETTING_LABEL) as SettingPref[]).map((id) => ({
          id,
          title: SETTING_LABEL[id],
          text:
            id === "any"
              ? "Don't factor this in"
              : id === "indoor"
                ? "More museums and indoor sights"
                : id === "outdoor"
                  ? "More parks, views, and open-air stops"
                  : "A normal mix",
        }))}
        onChange={(setting) => onChange({ setting })}
      />

      <ChoiceGroup
        legend="Rainy-day plan"
        value={prefs.rainPlan}
        options={(Object.keys(RAIN_LABEL) as RainPlanPref[]).map((id) => ({
          id,
          title: RAIN_LABEL[id],
          text:
            id === "yes"
              ? "Lean hard toward indoor stops"
              : id === "no"
                ? "Normal balance"
                : "Don't factor this in",
        }))}
        onChange={(rainPlan) => onChange({ rainPlan })}
      />

      <ChoiceGroup
        legend="Free / low-cost"
        value={prefs.freeFriendly}
        options={(Object.keys(FREE_LABEL) as FreeFriendlyPref[]).map((id) => ({
          id,
          title: FREE_LABEL[id],
          text:
            id === "yes"
              ? "Favor parks, markets, and viewpoints"
              : id === "no"
                ? "Ticketed attractions are OK"
                : "Don't factor this in",
        }))}
        onChange={(freeFriendly) => onChange({ freeFriendly })}
      />

      <ChoiceGroup
        legend="Accessibility"
        value={prefs.accessibility}
        options={(Object.keys(ACCESS_LABEL) as AccessibilityPref[]).map((id) => ({
          id,
          title: ACCESS_LABEL[id],
          text:
            id === "yes"
              ? "Avoid steep castles/viewpoints when possible"
              : id === "no"
                ? "No special filter"
                : "Don't factor this in",
        }))}
        onChange={(accessibility) => onChange({ accessibility })}
      />

      <ChoiceGroup
        legend="Alcohol"
        value={prefs.alcohol}
        options={(Object.keys(ALCOHOL_LABEL) as AlcoholPref[]).map((id) => ({
          id,
          title: ALCOHOL_LABEL[id],
          text:
            id === "avoid"
              ? "Skip bar-heavy evenings"
              : id === "ok"
                ? "Bars and nightlife are fine"
                : "Don't factor this in",
        }))}
        onChange={(alcohol) => onChange({ alcohol })}
      />

      <ChoiceGroup
        legend="Photo focus"
        value={prefs.photoFocus}
        options={(Object.keys(YESNO_PHOTO) as YesNoPref[]).map((id) => ({
          id,
          title: YESNO_PHOTO[id],
          text:
            id === "yes"
              ? "Boost viewpoints and photogenic sights"
              : id === "no"
                ? "No special focus"
                : "Don't factor this in",
        }))}
        onChange={(photoFocus) => onChange({ photoFocus })}
      />

      <ChoiceGroup
        legend="Tourist traps"
        value={prefs.avoidTraps}
        options={(Object.keys(YESNO_TRAPS) as YesNoPref[]).map((id) => ({
          id,
          title: YESNO_TRAPS[id],
          text:
            id === "yes"
              ? "Tone down the ultra-famous stops"
              : id === "no"
                ? "Big highlights are welcome"
                : "Don't factor this in",
        }))}
        onChange={(avoidTraps) => onChange({ avoidTraps })}
      />

      <ChoiceGroup
        legend="Romantic"
        value={prefs.romantic}
        options={(Object.keys(YESNO_ROMANTIC) as YesNoPref[]).map((id) => ({
          id,
          title: YESNO_ROMANTIC[id],
          text:
            id === "yes"
              ? "Views, gardens, and nicer dinners"
              : id === "no"
                ? "No romantic focus"
                : "Don't factor this in",
        }))}
        onChange={(romantic) => onChange({ romantic })}
      />

      <ChoiceGroup
        legend="Live music"
        value={prefs.liveMusic}
        options={(Object.keys(YESNO_MUSIC) as YesNoPref[]).map((id) => ({
          id,
          title: YESNO_MUSIC[id],
          text:
            id === "yes"
              ? "Favor nightlife with music energy"
              : id === "no"
                ? "No live-music focus"
                : "Don't factor this in",
        }))}
        onChange={(liveMusic) => onChange({ liveMusic })}
      />

      <ChoiceGroup
        legend="Shopping time"
        value={prefs.shoppingTime}
        options={(Object.keys(YESNO_SHOP) as YesNoPref[]).map((id) => ({
          id,
          title: YESNO_SHOP[id],
          text:
            id === "yes"
              ? "Work a market or shopping stop into the days"
              : id === "no"
                ? "No shopping block"
                : "Don't factor this in",
        }))}
        onChange={(shoppingTime) => onChange({ shoppingTime })}
      />

      <ChoiceGroup
        legend="Downtime"
        value={prefs.downtime}
        options={(Object.keys(YESNO_DOWN) as YesNoPref[]).map((id) => ({
          id,
          title: YESNO_DOWN[id],
          text:
            id === "yes"
              ? "Fewer stops so there's room to rest"
              : id === "no"
                ? "Keep a fuller day"
                : "Don't factor this in",
        }))}
        onChange={(downtime) => onChange({ downtime })}
      />

      <label className="block">
        <span className="text-sm font-semibold">Must-see places</span>
        <span className="mt-1 block text-sm text-muted">
          Optional. Comma-separated names, like “Sagrada Família, Park Güell”.
        </span>
        <input
          value={prefs.mustSee}
          onChange={(event) => onChange({ mustSee: event.target.value })}
          onKeyDown={(event) => {
            if (event.key === "Enter") event.preventDefault();
          }}
          placeholder="Leave blank if none"
          className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-base"
        />
      </label>
    </div>
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
