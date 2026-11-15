import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const tirana: CityCatalog = {
  id: "tirana",
  name: "Tirana, Albania",
  aliases: ["tirana", "tirana albania"],
  center: { lat: 41.3275, lon: 19.8187 },
  places: [
    // ——— Skanderbeg / Center ———
    place("ti-skanderbeg", "Skanderbeg Square", 41.3279, 19.8187, "sight", "Attraction", "Skanderbeg Square", 10, "Vast pedestrian square and civic heart of Tirana."),
    place("ti-skanderbeg-statue", "Skanderbeg Monument", 41.328, 19.8185, "sight", "Monument", "Skanderbeg Square", 8, "National hero equestrian statue on the square."),
    place("ti-ethem", "Et'hem Bey Mosque", 41.3282, 19.8195, "sight", "Monument", "Skanderbeg Square", 8, "18th-century mosque with frescoed portico — dress modestly."),
    place("ti-clock", "Clock Tower of Tirana", 41.3283, 19.8198, "sight", "Viewpoint", "Skanderbeg Square", 7, "Climb for square views beside the mosque."),
    place("ti-opera", "National Opera and Theatre of Opera", 41.3285, 19.8175, "sight", "Attraction", "Skanderbeg Square", 6, "Cultural facade on the square's west side."),
    place("ti-national-hist", "National History Museum", 41.329, 19.8175, "museum", "Museum", "Skanderbeg Square", 9, "Albania's story under the mosaic facade."),
    place("ti-mosaic", "National History Museum mosaic", 41.3291, 19.8173, "sight", "Monument", "Skanderbeg Square", 7, "Iconic socialist mosaic above the museum entrance."),
    place("ti-pyramid", "Pyramid of Tirana", 41.323, 19.8215, "sight", "Attraction", "Center", 8, "Reimagined pyramid with steps and cultural spaces."),
    place("ti-peace-bell", "Peace Bell / dictatorship memory markers", 41.3235, 19.821, "sight", "Monument", "Center", 6, "Memorial elements near the Pyramid."),
    place("ti-cloud", "Cloud installation / square art", 41.3275, 19.819, "sight", "Attraction", "Skanderbeg Square", 5, "Contemporary art pieces around the open square."),

    // ——— Blloku ———
    place("ti-blloku", "Blloku neighborhood", 41.3215, 19.8165, "sight", "Attraction", "Blloku", 9, "Once-closed elite block — now cafes, bars, and nightlife."),
    place("ti-ish-bunker", "Blloku bunker relics", 41.322, 19.8158, "sight", "Monument", "Blloku", 6, "Scattered bunkers as street furniture and memory."),
    place("ti-rruga-pabarisia", "Rruga Ibrahim Rugova stroll", 41.3218, 19.8168, "sight", "Attraction", "Blloku", 7, "Main Blloku cafe strip."),
    place("ti-twin", "Twin towers / modern skyline edge", 41.32, 19.82, "sight", "Attraction", "Blloku", 5, "Contemporary towers framing south-center Tirana."),
    place("ti-park-reth", "Rinia Park edge", 41.3245, 19.82, "nature", "Park", "Center", 6, "Central park between square and Blloku."),

    // ——— Museums & bunkers ———
    place("ti-bunkart1", "Bunk'Art 1", 41.3455, 19.8615, "museum", "Museum", "Northeast", 9, "Atomic bunker museum on dictatorship and Cold War."),
    place("ti-bunkart2", "Bunk'Art 2", 41.3295, 19.8195, "museum", "Museum", "Skanderbeg Square", 8, "Central bunker museum on police state history."),
    place("ti-house-leaves", "House of Leaves", 41.3255, 19.8175, "museum", "Museum", "Center", 8, "Museum of Secret Surveillance in a leafy villa."),
    place("ti-national-art", "National Art Gallery", 41.3265, 19.8205, "museum", "Museum", "Center", 7, "Albanian painting and sculpture near the Pyramid."),
    place("ti-archaeology", "National Archaeological Museum", 41.3185, 19.8215, "museum", "Museum", "University", 6, "Archaeology collections by the university."),
    place("ti-bektashi", "Bektashi World Center", 41.335, 19.845, "sight", "Monument", "East", 6, "Headquarters of the Bektashi order — respectful visit."),
    place("ti-fortress", "Tirana Castle (Kalaja)", 41.326, 19.8232, "sight", "Attraction", "Center", 5, "Castle walls and courtyard dining pocket."),
    place("ti-castle-fix", "Kalaja e Tiranës courtyard", 41.3262, 19.8235, "sight", "Attraction", "Center", 6, "Restored fortress walls with bars and shops."),

    // ——— Parks & viewpoints ———
    place("ti-grand-park", "Grand Park of Tirana", 41.3135, 19.8255, "nature", "Park", "Grand Park", 9, "Artificial lake and forest paths south of the center."),
    place("ti-artificial-lake", "Artificial Lake loop", 41.3125, 19.8245, "nature", "Park", "Grand Park", 8, "Jogging and paddle boats around the lake."),
    place("ti-memorial-park", "Mother Teresa / park memorials", 41.3145, 19.8265, "nature", "Park", "Grand Park", 6, "Memorial corners within the Grand Park."),
    place("ti-dajti", "Dajti Cable Car (funikulare)", 41.345, 19.91, "sight", "Viewpoint", "Dajti", 8, "Cable car to Mount Dajti for city panoramas."),
    place("ti-dajti-park", "Dajti Mountain Park", 41.365, 19.92, "nature", "Park", "Dajti", 8, "Forest walks and viewpoints above Tirana."),
    place("ti-zoo", "Tirana Zoo edge (park south)", 41.31, 19.828, "nature", "Park", "Grand Park", 4, "Small zoo corner if visiting the park with kids."),
    place("ti-lakeside", "Lake cafes promenade", 41.314, 19.8235, "nature", "Park", "Grand Park", 7, "Shore path with seasonal terrace cafes."),
    place("ti-kombinat", "Kombinat industrial heritage glance", 41.305, 19.78, "sight", "Attraction", "Southwest", 4, "Former industrial district character."),

    // ——— Markets & shopping ———
    place("ti-pazari", "Pazari i Ri (New Bazaar)", 41.33, 19.825, "shopping", "Market", "New Bazaar", 9, "Colorful market halls for produce, cheese, and lunch."),
    place("ti-pazari-stalls", "New Bazaar food stalls", 41.3305, 19.8255, "shopping", "Market", "New Bazaar", 8, "Olive oil, rakia, and farm goods."),
    place("ti-toptani", "Toptani Shopping Center", 41.3285, 19.8225, "shopping", "Mall", "Center", 6, "Central mall near the castle walls."),
    place("ti-qatar", "QTU / large mall orbit", 41.35, 19.78, "shopping", "Mall", "Northwest", 5, "Big-box shopping if you need it."),
    place("ti-souvenir", "Skanderbeg souvenir stalls", 41.328, 19.8192, "shopping", "Shop", "Skanderbeg Square", 5, "Flags, bunkers miniatures, and crafts."),
    place("ti-blloku-shops", "Blloku fashion streets", 41.3212, 19.8155, "shopping", "Shop", "Blloku", 6, "Boutiques among the cafe terraces."),

    // ——— More sights ———
    place("ti-presidency", "Presidential Office exterior", 41.3225, 19.8195, "sight", "Monument", "Center", 5, "Modern civic architecture south of the square."),
    place("ti-mosque-namaz", "Namazgah / Great Mosque site", 41.3288, 19.8215, "sight", "Monument", "Center", 6, "Large new mosque landmark near the center."),
    place("ti-catholic", "St. Paul's Cathedral", 41.3205, 19.8195, "sight", "Monument", "Center", 6, "Modern Catholic cathedral."),
    place("ti-orthodox", "Orthodox Cathedral of the Resurrection", 41.3268, 19.8155, "sight", "Monument", "Center", 7, "Striking Orthodox cathedral dome."),
    place("ti-kapllan", "Kapllan Pasha Tomb", 41.3285, 19.8205, "sight", "Monument", "Center", 5, "Ottoman tomb near the square."),
    place("ti-bridge", "Tanner's Bridge", 41.3315, 19.8275, "sight", "Monument", "New Bazaar", 6, "Ottoman stone bridge near Pazari i Ri."),
    place("ti-university", "University of Tirana facade", 41.318, 19.821, "sight", "Attraction", "University", 5, "Campus axis south toward the park."),
    place("ti-color-buildings", "Colorful painted apartment blocks", 41.335, 19.83, "sight", "Attraction", "North Center", 6, "Post-communist colorful facades on side streets."),
    place("ti-kavaja", "Rruga e Kavajës stroll", 41.3255, 19.812, "sight", "Attraction", "West Center", 5, "Busy commercial street west of Blloku."),
    place("ti-ishmi", "Former dictatorship sites walk", 41.324, 19.8185, "sight", "Attraction", "Center", 6, "Contextual walk linking House of Leaves and Pyramid."),
    place("ti-artificial-island", "Grand Park island / playgrounds", 41.313, 19.8265, "nature", "Park", "Grand Park", 5, "Family corner of the artificial lake park."),
    place("ti-food-byrek2", "New Bazaar byrek counter", 41.3302, 19.8252, "food", "Quick meal", "New Bazaar", 7, "Fresh byrek among market stalls.", { cuisine: "albanian" }),
    place("ti-cafe-kavaja", "Kavaja Street cafe", 41.325, 19.813, "cafe", "Cafe", "West Center", 5, "Local espresso off the Blloku circuit."),

    // ——— Cafes ———
    place("ti-cafe-blloku", "Blloku specialty cafe", 41.3215, 19.8165, "cafe", "Cafe", "Blloku", 8, "Third-wave coffee on Tirana's social strip."),
    place("ti-cafe-square", "Skanderbeg square cafe", 41.3275, 19.8185, "cafe", "Cafe", "Skanderbeg Square", 6, "People-watching coffee on the square edge."),
    place("ti-cafe-pazari", "New Bazaar cafe", 41.3302, 19.8248, "cafe", "Cafe", "New Bazaar", 7, "Coffee between market stalls."),
    place("ti-cafe-park", "Grand Park lakeside cafe", 41.3138, 19.824, "cafe", "Cafe", "Grand Park", 7, "Green pause after a lake loop."),
    place("ti-cafe-center", "Center espresso bar", 41.3265, 19.8195, "cafe", "Cafe", "Center", 6, "Quick espresso between museums."),
    place("ti-cafe-house", "Courtyard garden cafe", 41.325, 19.818, "cafe", "Cafe", "Center", 6, "Shaded courtyard near House of Leaves."),
    place("ti-cafe-dajti", "Dajti summit cafe", 41.366, 19.921, "cafe", "Cafe", "Dajti", 6, "Coffee with mountain air after the cable car."),

    // ——— Food ———
    place("ti-food-byrek", "Byrek bakery lunch", 41.3285, 19.82, "food", "Quick meal", "Skanderbeg Square", 8, "Flaky spinach or meat pie — essential cheap eat.", { cuisine: "albanian" }),
    place("ti-food-tavina", "Traditional Albanian dinner", 41.321, 19.817, "food", "Restaurant", "Blloku", 8, "Tavë kosi and grilled meats in Blloku.", { cuisine: "albanian" }),
    place("ti-food-pazari", "New Bazaar fresh lunch", 41.3305, 19.8255, "food", "Restaurant", "New Bazaar", 8, "Seafood and farm plates around the market.", { cuisine: "albanian seafood" }),
    place("ti-food-furgon", "Street grill / qofte", 41.3295, 19.824, "food", "Quick meal", "New Bazaar", 7, "Meatballs and bread from market grills.", { cuisine: "albanian" }),
    place("ti-food-italian", "Italian trattoria Blloku", 41.3218, 19.8158, "food", "Restaurant", "Blloku", 6, "Pizza and pasta on the cafe strip.", { cuisine: "italian" }),
    place("ti-food-ottoman", "Ottoman-influenced meze", 41.326, 19.823, "food", "Restaurant", "Center", 7, "Meze and grilled vegetables near the castle.", { cuisine: "balkan" }),
    place("ti-food-seafood", "Seafood dinner center", 41.3225, 19.818, "food", "Restaurant", "Blloku", 7, "Adriatic fish plates inland.", { cuisine: "seafood" }),
    place("ti-food-vegetarian", "Vegetarian cafe lunch", 41.322, 19.8162, "food", "Restaurant", "Blloku", 6, "Plant-forward bowls in Blloku.", { cuisine: "vegetarian" }),
    place("ti-food-park", "Grand Park terrace lunch", 41.3145, 19.825, "food", "Restaurant", "Grand Park", 6, "Lakeside lunch after walking the park.", { cuisine: "european" }),
    place("ti-food-dessert", "Baklava & coffee stop", 41.329, 19.8205, "food", "Quick meal", "Center", 6, "Sweet Ottoman desserts downtown.", { cuisine: "dessert" }),

    // ——— Nightlife ———
    place("ti-night-blloku", "Blloku bars", 41.3218, 19.816, "nightlife", "Bar", "Blloku", 9, "Tirana's densest bar and lounge scene."),
    place("ti-night-club", "Blloku club night", 41.321, 19.8155, "nightlife", "Club", "Blloku", 7, "Late electronic and pop nights — check door policies."),
    place("ti-night-center", "Center evening bars", 41.327, 19.819, "nightlife", "Bar", "Center", 6, "Quieter drinks near the square."),
    place("ti-night-castle", "Castle courtyard nightlife", 41.326, 19.8238, "nightlife", "Bar", "Center", 7, "Bars inside the Kalaja walls."),
    place("ti-night-live", "Live music Blloku", 41.3222, 19.8165, "nightlife", "Bar", "Blloku", 7, "Bands and DJs on weekend nights."),
    place("ti-night-rooftop", "Rooftop bar Tirana", 41.3235, 19.8185, "nightlife", "Bar", "Center", 7, "Skyline views toward Dajti."),
    place("ti-night-pazari", "New Bazaar evening wine", 41.33, 19.8252, "nightlife", "Bar", "New Bazaar", 5, "Casual wine after market hours."),

    // ——— Stays ———
    place("ti-stay-skanderbeg", "Skanderbeg Square hotel", 41.328, 19.818, "stay", "Hotel", "Skanderbeg Square", 8, "Walkable to museums, mosque, and Pyramid."),
    place("ti-stay-blloku", "Blloku boutique hotel", 41.322, 19.8155, "stay", "Hotel", "Blloku", 8, "Best for nightlife and cafe culture."),
    place("ti-stay-rogner", "Park / Rogner-area hotel", 41.3185, 19.8225, "stay", "Hotel", "Grand Park", 7, "Garden hotel feel toward the Grand Park."),
    place("ti-stay-center", "Center business hotel", 41.326, 19.82, "stay", "Hotel", "Center", 7, "Practical mid-range between square and Blloku."),
    place("ti-stay-hostel", "Tirana Hostel", 41.326, 19.822, "stay", "Hostel", "Center", 5, "Budget dorms near the castle and mall."),
    place("ti-stay-guest", "Guest House Tirana", 41.3295, 19.824, "stay", "Guest house", "New Bazaar", 6, "Small stay by Pazari i Ri."),
    place("ti-stay-apartment", "Blloku aparthotel", 41.3215, 19.8175, "stay", "Hotel", "Blloku", 6, "Kitchenette stay in the social district."),
    place("ti-stay-dajti", "Dajti / hillside hotel", 41.34, 19.88, "stay", "Hotel", "Dajti", 5, "Quieter hillside base with mountain air."),
    place("ti-stay-boutique", "Colorful boutique stay", 41.3275, 19.8215, "stay", "Hotel", "Center", 7, "Design-forward rooms near the Pyramid."),
  ],
};
