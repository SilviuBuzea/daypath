import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const chisinau: CityCatalog = {
  id: "chisinau",
  name: "Chișinău, Moldova",
  aliases: ["chisinau", "chișinău", "kishinev", "chisinau moldova"],
  center: { lat: 47.0105, lon: 28.8638 },
  places: [
    // ——— Center / Ștefan cel Mare ———
    place("ch-stefan-park", "Ștefan cel Mare Central Park", 47.025, 28.8325, "nature", "Park", "Center", 9, "Tree-lined central park with the Stephen the Great statue."),
    place("ch-stefan-statue", "Stephen the Great Monument", 47.0248, 28.8322, "sight", "Monument", "Center", 8, "National hero statue at the park's main axis."),
    place("ch-arc", "Triumphal Arch", 47.026, 28.8328, "sight", "Monument", "Center", 8, "Neoclassical arch facing the Nativity Cathedral."),
    place("ch-nativity", "Nativity Cathedral", 47.0265, 28.8335, "sight", "Monument", "Center", 9, "White Orthodox cathedral on the central square."),
    place("ch-belfry", "Cathedral Bell Tower", 47.0263, 28.8332, "sight", "Monument", "Center", 7, "Rebuilt belfry beside the Nativity Cathedral."),
    place("ch-gov", "Government House facade", 47.0255, 28.8345, "sight", "Monument", "Center", 6, "Soviet-era civic facade on the main square."),
    place("ch-stefan-blvd", "Ștefan cel Mare Boulevard", 47.024, 28.84, "sight", "Attraction", "Center", 7, "Main boulevard of shops, theaters, and museums."),
    place("ch-organ-hall", "Organ Hall (Sala cu Orgă)", 47.0235, 28.8355, "sight", "Attraction", "Center", 7, "Concert hall known for organ recitals."),
    place("ch-national-theater", "Mihai Eminescu National Theater", 47.0228, 28.8368, "sight", "Attraction", "Center", 6, "Landmark theater on the boulevard."),
    place("ch-opera", "National Opera and Ballet", 47.0285, 28.8355, "sight", "Attraction", "Center", 7, "Opera house for evening performances."),
    place("ch-city-hall", "Chișinău City Hall", 47.0245, 28.8365, "sight", "Monument", "Center", 5, "Civic building on the central boulevard."),
    place("ch-water-tower", "Water Tower Museum", 47.0215, 28.8315, "museum", "Museum", "Center", 6, "Historic water tower with city views and small exhibits."),

    // ——— Museums ———
    place("ch-history", "National Museum of History of Moldova", 47.022, 28.835, "museum", "Museum", "Center", 8, "Archaeology and national history on the boulevard."),
    place("ch-art", "National Museum of Fine Arts", 47.0235, 28.8365, "museum", "Museum", "Center", 7, "Moldovan and European art collections."),
    place("ch-ethnography", "National Museum of Ethnography and Natural History", 47.021, 28.8285, "museum", "Museum", "Center", 7, "Dinosaur hall and ethnographic displays."),
    place("ch-literature", "Literature Museum / Pushkin House", 47.0275, 28.8285, "museum", "Museum", "Center", 6, "Literary history and Pushkin's Chișinău years."),
    place("ch-archaeology", "Archaeology exhibits / history complex", 47.0225, 28.8345, "museum", "Museum", "Center", 6, "Prehistoric and medieval finds in the history museum orbit."),
    place("ch-zemstva", "Zemstva Museum building", 47.0258, 28.8295, "museum", "Museum", "Center", 5, "Historic zemstvo building with cultural displays."),

    // ——— Parks & nature ———
    place("ch-valea-morilor", "Valea Morilor Park", 47.0185, 28.81, "nature", "Park", "Valea Morilor", 9, "Lake park west of the center — jogging paths and terraces."),
    place("ch-valea-lake", "Valea Morilor lake loop", 47.019, 28.8085, "nature", "Park", "Valea Morilor", 8, "Full loop around the artificial lake."),
    place("ch-dendrarium", "Chișinău Dendrarium", 47.0355, 28.8255, "nature", "Garden", "North", 7, "Arboretum with shaded paths north of the center."),
    place("ch-rose-valley", "Rose Valley (Valea Trandafirilor)", 47.0055, 28.8555, "nature", "Park", "South", 7, "Park with lakes and rose plantings."),
    place("ch-cathedral-park", "Cathedral Park benches", 47.0262, 28.833, "nature", "Park", "Center", 6, "Quiet green around the cathedral and arch."),
    place("ch-riscani-park", "Râșcani Park", 47.045, 28.865, "nature", "Park", "Râșcani", 6, "Neighborhood park in the northern district."),
    place("ch-botanical", "Botanical Garden of Moldova", 46.9755, 28.8755, "nature", "Garden", "South", 7, "Large botanical garden south of the city."),
    place("ch-circus-park", "Circus area green", 47.0325, 28.8455, "nature", "Park", "North Center", 5, "Green pocket near the landmark circus building."),

    // ——— Neighborhoods & sights ———
    place("ch-train", "Central Railway Station facade", 47.0125, 28.8575, "sight", "Attraction", "Station", 5, "Arrival landmark and Soviet-era station architecture."),
    place("ch-circus", "Chișinău Circus", 47.033, 28.845, "sight", "Attraction", "North Center", 6, "Distinctive circus building — check show schedules."),
    place("ch-memorial", "Eternity Memorial Complex", 47.0355, 28.8555, "sight", "Monument", "North", 7, "WWII memorial complex with eternal flame."),
    place("ch-capriana-gate", "Gateway toward Căpriana / monastery day trips", 47.01, 28.85, "sight", "Attraction", "West Edge", 5, "Jumping-off feel for monastery excursions outside town."),
    place("ch-jewish", "Jewish Cemetery / heritage walk context", 47.018, 28.82, "sight", "Monument", "West", 5, "Important heritage site — visit respectfully."),
    place("ch-armeneasca", "Armenească Street lanes", 47.023, 28.8385, "sight", "Attraction", "Center", 6, "Central streets with cafes and small shops."),
    place("ch-benderska", "Mitropolit Varlaam / old street fabric", 47.02, 28.842, "sight", "Attraction", "Center", 5, "Older street grid south of the boulevard."),
    place("ch-scuar", "Scuarul Catedralei evening lights", 47.026, 28.8338, "sight", "Attraction", "Center", 7, "Illuminated square after dark between arch and cathedral."),
    place("ch-presidency", "Presidential Palace exterior", 47.0275, 28.8385, "sight", "Monument", "Center", 5, "Admire the facade from the boulevard side."),
    place("ch-academy", "Academy of Sciences area", 47.0185, 28.8255, "sight", "Attraction", "Center West", 5, "Institutional buildings toward Valea Morilor."),
    place("ch-alunelul", "Alunelul Park", 47.015, 28.835, "nature", "Park", "Center South", 6, "Neighborhood park south of the boulevard."),
    place("ch-milan", "Milan Garden / small greens", 47.028, 28.845, "nature", "Park", "East Center", 5, "Pocket green for a short reset."),
    place("ch-radio", "National Radio building facade", 47.027, 28.831, "sight", "Monument", "Center", 4, "Soviet-era media architecture near the park."),
    place("ch-post", "Main Post Office facade", 47.0248, 28.8348, "sight", "Monument", "Center", 4, "Civic landmark on the central axis."),
    place("ch-eminescu", "Mihai Eminescu bust / literary corners", 47.023, 28.834, "sight", "Monument", "Center", 5, "Literary memorials around the theater district."),
    place("ch-buiucani", "Buiucani district stroll", 47.03, 28.81, "sight", "Attraction", "Buiucani", 5, "Residential northwest district with local cafes."),
    place("ch-ciocana", "Ciocana market edge", 47.04, 28.88, "shopping", "Market", "Ciocana", 4, "Eastern district market energy if you're staying out."),
    place("ch-food-placinte2", "Valea Morilor picnic snacks", 47.0195, 28.8095, "food", "Quick meal", "Valea Morilor", 5, "Grab pastries and sit by the lake.", { cuisine: "moldovan" }),
    place("ch-cafe-buiucani", "Buiucani neighborhood cafe", 47.0295, 28.812, "cafe", "Cafe", "Buiucani", 5, "Local coffee off the tourist path."),

    // ——— Shopping ———
    place("ch-central-market", "Central Market (Piața Centrală)", 47.018, 28.845, "shopping", "Market", "Center", 8, "Busy produce and household market — local atmosphere."),
    place("ch-mall-dova", "MallDova", 47.0155, 28.8625, "shopping", "Mall", "East", 6, "Large shopping mall east of the center."),
    place("ch-shopping-mall", "Shopping MallDova / Atrium orbit", 47.0165, 28.861, "shopping", "Mall", "East", 5, "Retail cluster for rainy-day shopping."),
    place("ch-unic", "UNIC department store", 47.0238, 28.838, "shopping", "Mall", "Center", 6, "Classic downtown department store."),
    place("ch-souvenir", "Boulevard souvenir shops", 47.0242, 28.8375, "shopping", "Market", "Center", 5, "Wine, crafts, and Moldova gifts on Ștefan cel Mare."),
    place("ch-wine-shop", "Wine boutique / Cricova tasting shop", 47.025, 28.8395, "shopping", "Shop", "Center", 7, "Stock up on Moldovan wines before cellar day trips."),

    // ——— Cafes ———
    place("ch-cafe-center", "Center specialty cafe", 47.0245, 28.8355, "cafe", "Cafe", "Center", 7, "Third-wave coffee near the boulevard museums."),
    place("ch-cafe-park", "Park-edge cafe", 47.0252, 28.8315, "cafe", "Cafe", "Center", 7, "Coffee facing Ștefan cel Mare Park."),
    place("ch-cafe-valea", "Valea Morilor terrace cafe", 47.0195, 28.8115, "cafe", "Cafe", "Valea Morilor", 6, "Lake-view coffee after a park loop."),
    place("ch-cafe-armen", "Armenească cafe street", 47.0232, 28.8388, "cafe", "Cafe", "Center", 6, "Neighborhood cafe hop off the main boulevard."),
    place("ch-cafe-book", "Bookstore cafe", 47.024, 28.8362, "cafe", "Cafe", "Center", 6, "Quiet reading cafe downtown."),
    place("ch-cafe-market", "Market-morning coffee", 47.0185, 28.8445, "cafe", "Cafe", "Center", 5, "Quick espresso before Central Market shopping."),
    place("ch-patisserie", "Center patisserie", 47.0255, 28.837, "cafe", "Cafe", "Center", 6, "Pastries and tea on the boulevard."),

    // ——— Food ———
    place("ch-food-moldovan", "Traditional Moldovan lunch", 47.023, 28.837, "food", "Restaurant", "Center", 8, "Mămăligă, sarmale, and house wine downtown.", { cuisine: "moldovan" }),
    place("ch-food-la-taifas", "La Taifas-style Moldovan dinner", 47.0255, 28.841, "food", "Restaurant", "Center", 8, "Courtyard Moldovan classics — book on weekends.", { cuisine: "moldovan" }),
    place("ch-food-placinte", "Plăcintă bakery lunch", 47.0225, 28.8395, "food", "Quick meal", "Center", 7, "Flaky stuffed pies — essential local cheap eat.", { cuisine: "moldovan" }),
    place("ch-food-market", "Central Market bites", 47.0185, 28.846, "food", "Quick meal", "Center", 6, "Fresh produce snacks and hot counters.", { cuisine: "market" }),
    place("ch-food-georgian", "Georgian restaurant", 47.024, 28.8415, "food", "Restaurant", "Center", 6, "Khachapuri and Georgian wines popular locally.", { cuisine: "georgian" }),
    place("ch-food-italian", "Italian trattoria center", 47.0235, 28.8385, "food", "Restaurant", "Center", 5, "Pizza and pasta when you need a break from mămăligă.", { cuisine: "italian" }),
    place("ch-food-valea", "Valea Morilor dinner terrace", 47.0188, 28.812, "food", "Restaurant", "Valea Morilor", 6, "Park-edge dinner after sunset walks.", { cuisine: "european" }),
    place("ch-food-steak", "Boulevard grill dinner", 47.026, 28.8425, "food", "Restaurant", "Center", 6, "Meat-forward dinner on Ștefan cel Mare.", { cuisine: "grill" }),
    place("ch-food-wine", "Wine bar dinner pairing", 47.0248, 28.8368, "food", "Restaurant", "Center", 7, "Moldovan wine flights with small plates.", { cuisine: "moldovan wine" }),
    place("ch-food-vegetarian", "Vegetarian cafe lunch", 47.022, 28.836, "food", "Restaurant", "Center", 5, "Plant-forward bowls near the museums.", { cuisine: "vegetarian" }),

    // ——— Nightlife ———
    place("ch-night-center", "Center cocktail bars", 47.0248, 28.838, "nightlife", "Bar", "Center", 7, "Downtown bars along and just off the boulevard."),
    place("ch-night-park", "Park evening drinks", 47.0252, 28.831, "nightlife", "Bar", "Center", 6, "Terrace drinks near Ștefan cel Mare Park."),
    place("ch-night-club", "Chișinău club night", 47.0215, 28.84, "nightlife", "Club", "Center", 6, "Check weekly electronic and pop lineups."),
    place("ch-night-wine", "Wine bar late tasting", 47.0238, 28.8375, "nightlife", "Bar", "Center", 7, "Late Moldovan wine flights downtown."),
    place("ch-night-live", "Live music bar", 47.0225, 28.841, "nightlife", "Bar", "Center", 6, "Local bands and acoustic sets."),
    place("ch-night-valea", "Valea Morilor lakeside evening", 47.0192, 28.8105, "nightlife", "Bar", "Valea Morilor", 5, "Quieter lakeside drinks after dark."),
    place("ch-night-rooftop", "Center rooftop bar", 47.0245, 28.839, "nightlife", "Bar", "Center", 6, "City lights over the boulevard."),

    // ——— Stays ———
    place("ch-stay-center", "Center Hotel Chișinău", 47.024, 28.836, "stay", "Hotel", "Center", 8, "Walkable to park, cathedral, and museums."),
    place("ch-stay-boulevard", "Boulevard business hotel", 47.026, 28.842, "stay", "Hotel", "Center", 7, "On Ștefan cel Mare for easy dining."),
    place("ch-stay-jazz", "Jazz Hotel / music-area stay", 47.0215, 28.8335, "stay", "Hotel", "Center", 7, "Popular mid-range base near the center."),
    place("ch-stay-valea", "Valea Morilor hotel", 47.02, 28.814, "stay", "Hotel", "Valea Morilor", 6, "Quieter park-side stay with lake walks."),
    place("ch-stay-hostel", "Chișinău Hostel", 47.021, 28.84, "stay", "Hostel", "Center", 5, "Budget dorms and private rooms downtown."),
    place("ch-stay-guest", "Park Guest House", 47.0225, 28.83, "stay", "Guest house", "Center", 6, "Small guesthouse near central parks."),
    place("ch-stay-apartment", "Center aparthotel", 47.0235, 28.8415, "stay", "Hotel", "Center", 6, "Kitchenette stay for longer visits."),
    place("ch-stay-east", "East mall-area hotel", 47.016, 28.86, "stay", "Hotel", "East", 5, "Practical if arriving via eastern roads and malls."),
    place("ch-stay-boutique", "Boutique courtyard hotel", 47.0255, 28.8355, "stay", "Hotel", "Center", 7, "Character stay a short walk from the Triumphal Arch."),
  ],
};
