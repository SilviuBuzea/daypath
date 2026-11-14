export const INTERESTS = [
  "food",
  "museums",
  "history",
  "nature",
  "viewpoints",
  "nightlife",
  "shopping",
  "family",
] as const;

export type Interest = (typeof INTERESTS)[number];
export type Pace = "relaxed" | "balanced" | "packed";
export type Budget = "budget" | "mid" | "comfortable";
export type Party = "any" | "solo" | "couple" | "family" | "friends";
export type HostelPref = "any" | "open" | "no" | "prefer";
export type WalkingPref = "any" | "easy" | "normal" | "long";
export type MealPref = "any" | "quick" | "sitdown" | "mix";
export type LateNightsPref = "any" | "auto" | "yes" | "no";
export type VibePref = "any" | "famous" | "mix" | "hidden";
export type DietPref = "any" | "vegetarian" | "vegan" | "halal" | "kosher";
export type PetsPref = "any" | "no" | "yes";
export type KidsFocusPref = "any" | "no" | "yes";
export type SettingPref = "any" | "mix" | "indoor" | "outdoor";
export type FreeFriendlyPref = "any" | "no" | "yes";
export type AlcoholPref = "any" | "ok" | "avoid";
export type GlutenFreePref = "any" | "no" | "yes";
export type AccessibilityPref = "any" | "no" | "yes";
export type DayStartPref = "any" | "early" | "normal" | "late";
export type RainPlanPref = "any" | "no" | "yes";
export type TransportPref = "any" | "transit" | "taxis";
export type YesNoPref = "any" | "no" | "yes";

export type Category =
  | "sight"
  | "museum"
  | "nature"
  | "shopping"
  | "food"
  | "cafe"
  | "nightlife"
  | "stay";

export type Place = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  category: Category;
  label: string;
  score: number;
  area: string;
  why: string;
  tip?: string;
  cuisine?: string;
};

export type Preferences = {
  destination: string;
  days: number;
  pace: Pace;
  interests: Interest[];
  budget: Budget;
  party: Party;
  travelers: number;
  hostel: HostelPref;
  walking: WalkingPref;
  meals: MealPref;
  lateNights: LateNightsPref;
  vibe: VibePref;
  diet: DietPref;
  pets: PetsPref;
  kidsFocus: KidsFocusPref;
  setting: SettingPref;
  freeFriendly: FreeFriendlyPref;
  alcohol: AlcoholPref;
  glutenFree: GlutenFreePref;
  accessibility: AccessibilityPref;
  dayStart: DayStartPref;
  maxMuseums: number;
  rainPlan: RainPlanPref;
  transport: TransportPref;
  photoFocus: YesNoPref;
  avoidTraps: YesNoPref;
  romantic: YesNoPref;
  liveMusic: YesNoPref;
  shoppingTime: YesNoPref;
  downtime: YesNoPref;
  mustSee: string;
};

export type StopRole = "activity" | "lunch" | "dinner" | "evening";

export type Stop = {
  role: StopRole;
  place: Place;
  alternatives: Place[];
};

export type MealLocks = {
  lunch: boolean;
  dinner: boolean;
  evening: boolean;
};

export type DayPlan = {
  day: number;
  title: string;
  area: string;
  routeNote: string;
  stops: Stop[];
  mealLocks: MealLocks;
  pinnedActivityIds: string[];
};

export type Catalog = {
  activities: Place[];
  food: Place[];
  nightlife: Place[];
  stays: Place[];
};

export type Itinerary = {
  destination: string;
  prefs: Preferences;
  lodging: Place;
  lodgingAlternatives: Place[];
  days: DayPlan[];
  note?: string;
  cityTip?: string;
  catalog: Catalog;
};

export type Point = { lat: number; lon: number };

export type CityCatalog = {
  id: string;
  name: string;
  aliases: string[];
  center: Point;
  places: Place[];
};
