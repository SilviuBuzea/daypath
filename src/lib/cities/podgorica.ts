import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const podgorica: CityCatalog = {
  id: "podgorica",
  name: "Podgorica, Montenegro",
  aliases: ["podgorica", "podgorica montenegro", "titograd"],
  center: { lat: 42.4304, lon: 19.2594 },
  places: [
    // ——— Stara Varoš / Old Town ———
    place("pg-stara", "Stara Varoš", 42.4385, 19.2585, "sight", "Attraction", "Stara Varoš", 9, "Ottoman old town of narrow lanes, mosques, and the clock tower."),
    place("pg-clock", "Sahat Kula (Clock Tower)", 42.439, 19.259, "sight", "Monument", "Stara Varoš", 8, "17th-century clock tower landmark of the old town."),
    place("pg-osmanagic", "Osmanagić Mosque", 42.4388, 19.2582, "sight", "Monument", "Stara Varoš", 7, "Historic mosque in the old town fabric."),
    place("pg-starodoganjska", "Starodoganjska Mosque", 42.4392, 19.2575, "sight", "Monument", "Stara Varoš", 6, "Another Ottoman mosque on old-town lanes."),
    place("pg-ribnica-bridge", "Adži-paša's Bridge / Ribnica", 42.438, 19.26, "sight", "Monument", "Stara Varoš", 7, "Stone bridge over the Ribnica at the old town edge."),
    place("pg-ribnica-confluence", "Morača–Ribnica confluence", 42.4375, 19.2615, "nature", "Park", "River", 7, "Rivers meet below the old town — photogenic rocks and paths."),
    place("pg-old-lanes", "Stara Varoš lane wander", 42.4386, 19.2588, "sight", "Attraction", "Stara Varoš", 7, "Quiet residential Ottoman streetscape."),
    place("pg-turkish", "Turkish library / old town heritage", 42.439, 19.2585, "sight", "Monument", "Stara Varoš", 5, "Small heritage corners in the old quarter."),

    // ——— Center / Nova Varoš ———
    place("pg-republic", "Republic Square / Trg Republike", 42.4415, 19.2625, "sight", "Attraction", "Center", 8, "Main modern square with cafes and the palace of Nikola."),
    place("pg-nikola", "Palace of King Nikola", 42.4418, 19.2628, "museum", "Museum", "Center", 7, "Former royal palace with museum displays."),
    place("pg-millennium", "Millennium Bridge", 42.446, 19.258, "sight", "Attraction", "River", 9, "Cable-stayed bridge — Podgorica's modern icon."),
    place("pg-moscow", "Moscow Bridge", 42.4435, 19.2555, "sight", "Attraction", "River", 7, "Pedestrian bridge with lovers' locks over the Morača."),
    place("pg-independence", "Independence Square area", 42.4425, 19.264, "sight", "Attraction", "Center", 6, "Civic square and shopping streets."),
    place("pg-hercegovacka", "Hercegovačka Street stroll", 42.441, 19.2635, "sight", "Attraction", "Center", 7, "Main pedestrian shopping and cafe street."),
    place("pg-njegos", "Njegoševa Street", 42.4405, 19.2615, "sight", "Attraction", "Center", 6, "Central axis toward parks and museums."),
    place("pg-city-hall", "City Hall facade", 42.442, 19.2645, "sight", "Monument", "Center", 5, "Civic building on the modern center."),
    place("pg-euro", "Trg Božane Vučinić / center plazas", 42.4412, 19.2618, "sight", "Attraction", "Center", 5, "Linked plazas for evening walks."),

    // ——— Museums & culture ———
    place("pg-museums", "Museums and Galleries of Podgorica", 42.441, 19.263, "museum", "Museum", "Center", 7, "City collections of art and archaeology."),
    place("pg-natural", "Natural History Museum of Montenegro", 42.44, 19.265, "museum", "Museum", "Center", 6, "Flora and fauna of Montenegro."),
    place("pg-modern-art", "Centre of Contemporary Art / Petrović Castle", 42.4485, 19.2455, "museum", "Museum", "Kruševac", 7, "Art center in the Petrović castle grounds."),
    place("pg-petrovic-park", "Petrović Castle park", 42.448, 19.246, "nature", "Park", "Kruševac", 7, "Green grounds around the contemporary art center."),
    place("pg-duklja", "Duklja (Doclea) archaeological site", 42.468, 19.27, "sight", "Ruins", "Duklja", 7, "Roman ruins north of the city — short trip."),
    place("pg-cathedral", "Cathedral of the Resurrection of Christ", 42.4455, 19.2455, "sight", "Monument", "Center West", 8, "Monumental Orthodox cathedral with frescoed interior."),
    place("pg-catholic", "Catholic Church of St. Anthony / Džordža Vašingtona", 42.4425, 19.26, "sight", "Monument", "Center", 5, "Catholic parish in the modern center."),
    place("pg-orthodox-old", "Old Orthodox Church of St. George", 42.437, 19.255, "sight", "Monument", "Gorica", 6, "Historic church on Gorica hill approaches."),

    // ——— Parks & nature ———
    place("pg-njegos-park", "Njegošev Park", 42.4415, 19.262, "nature", "Park", "Center", 7, "Central park beside museums and cafes."),
    place("pg-gorica", "Gorica Hill Park", 42.435, 19.25, "nature", "Park", "Gorica", 8, "Hill park with city views and walking trails."),
    place("pg-gorica-view", "Gorica viewpoint", 42.4345, 19.249, "sight", "Viewpoint", "Gorica", 7, "Panorama over Podgorica and the rivers."),
    place("pg-moraca", "Morača river walk", 42.444, 19.255, "nature", "Park", "River", 8, "Shaded embankment paths under the bridges."),
    place("pg-cypress", "Cypress Park / riverside pines", 42.4455, 19.254, "nature", "Park", "River", 6, "Green strip along the Morača."),
    place("pg-lake", "Lake Krupac day area", 42.41, 19.2, "nature", "Park", "West", 6, "Local swimming lake west of town in summer."),
    place("pg-mareza", "Mareza springs area", 42.455, 19.22, "nature", "Park", "Northwest", 5, "Spring and green escape on the edge of town."),
    place("pg-hmf", "Hillside pine paths above Ribnica", 42.436, 19.257, "nature", "Park", "Stara Varoš", 5, "Short climbs above the old town."),

    // ——— Shopping ———
    place("pg-green-market", "Green Market (Zelena pijaca)", 42.437, 19.265, "shopping", "Market", "Center", 8, "Produce, cheese, and local honey."),
    place("pg-mall", "Delta City Mall", 42.423, 19.26, "shopping", "Mall", "South", 6, "Large modern mall south of the center."),
    place("pg-mall-of", "Mall of Montenegro", 42.43, 19.27, "shopping", "Mall", "East", 5, "Another retail complex east of center."),
    place("pg-hercegovacka-shops", "Hercegovačka boutiques", 42.4412, 19.2638, "shopping", "Shop", "Center", 6, "Clothes and souvenirs on the pedestrian street."),
    place("pg-souvenir", "Center souvenir shops", 42.4415, 19.2622, "shopping", "Shop", "Center", 5, "Wine, rakija, and Montenegro crafts."),
    place("pg-wine-shop", "Montenegrin wine boutique", 42.442, 19.2615, "shopping", "Shop", "Center", 6, "Vranac and local bottles to take home."),

    // ——— More sights ———
    place("pg-stadium", "City Stadium area", 42.4355, 19.268, "sight", "Attraction", "East", 4, "Sports landmark on the east side."),
    place("pg-university", "University of Montenegro campus edge", 42.445, 19.24, "sight", "Attraction", "West", 5, "Campus area near the cathedral side."),
    place("pg-airport-road", "City arrival boulevard feel", 42.42, 19.255, "sight", "Attraction", "South", 3, "Orientation stop if arriving from the south."),
    place("pg-bloc", "Blok 5 / modernist housing walk", 42.435, 19.27, "sight", "Attraction", "East", 4, "Yugoslav modernist residential architecture."),
    place("pg-vezirov", "Vezirov Bridge area", 42.44, 19.255, "sight", "Attraction", "River", 6, "Older bridge crossing near downtown."),
    place("pg-monument", "Partisan monument / memorial sites", 42.443, 19.25, "sight", "Monument", "Gorica", 5, "WWII memorials on hillside approaches."),
    place("pg-delta-city-walk", "South boulevard evening stroll", 42.428, 19.258, "sight", "Attraction", "South", 4, "Modern commercial strip if staying near Delta City."),
    place("pg-ribnica-path", "Ribnica stream path", 42.4382, 19.261, "nature", "Park", "Stara Varoš", 6, "Short waterside walk under old-town bridges."),
    place("pg-food-priganice", "Priganice breakfast", 42.4412, 19.2625, "food", "Quick meal", "Center", 6, "Fried dough with cheese or honey — local breakfast.", { cuisine: "montenegrin" }),
    place("pg-cafe-delta", "South mall cafe", 42.4232, 19.26, "cafe", "Cafe", "South", 4, "Coffee stop if shopping at Delta City."),
    place("pg-night-gorica", "Gorica sunset drinks", 42.4348, 19.2495, "nightlife", "Bar", "Gorica", 5, "Take a bottle to the viewpoint — informal evening."),

    // ——— Cafes ———
    place("pg-cafe-hercegovacka", "Hercegovačka cafe terrace", 42.441, 19.2632, "cafe", "Cafe", "Center", 8, "Prime people-watching on the pedestrian street."),
    place("pg-cafe-square", "Republic Square cafe", 42.4416, 19.2623, "cafe", "Cafe", "Center", 7, "Coffee on the main plaza."),
    place("pg-cafe-old", "Stara Varoš courtyard cafe", 42.4387, 19.2586, "cafe", "Cafe", "Stara Varoš", 6, "Quiet coffee in old-town lanes."),
    place("pg-cafe-river", "Morača riverside cafe", 42.4445, 19.256, "cafe", "Cafe", "River", 7, "Coffee with bridge views."),
    place("pg-cafe-njegos", "Njegošev Park cafe", 42.4418, 19.2618, "cafe", "Cafe", "Center", 6, "Park-edge espresso."),
    place("pg-cafe-specialty", "Specialty coffee Podgorica", 42.4408, 19.2625, "cafe", "Cafe", "Center", 7, "Third-wave beans downtown."),
    place("pg-patisserie", "Center patisserie", 42.4413, 19.2642, "cafe", "Cafe", "Center", 5, "Pastries and tea on shopping streets."),

    // ——— Food ———
    place("pg-food-njegusi", "Njeguški steak & Montenegrin lunch", 42.4388, 19.2588, "food", "Restaurant", "Stara Varoš", 8, "Prosciutto, cheese, and grilled meats in the old town.", { cuisine: "montenegrin" }),
    place("pg-food-center", "Center dinner terrace", 42.443, 19.261, "food", "Restaurant", "Center", 7, "Modern Balkan plates on Hercegovačka.", { cuisine: "montenegrin european" }),
    place("pg-food-fish", "River fish dinner", 42.4445, 19.2565, "food", "Restaurant", "River", 7, "Freshwater and Adriatic fish near the Morača.", { cuisine: "seafood" }),
    place("pg-food-burek", "Burek bakery breakfast", 42.4405, 19.263, "food", "Quick meal", "Center", 7, "Cheese or meat burek to start the day.", { cuisine: "balkan" }),
    place("pg-food-market", "Green Market lunch bites", 42.4372, 19.2652, "food", "Quick meal", "Center", 6, "Olives, cheese, and hot stands.", { cuisine: "market" }),
    place("pg-food-italian", "Italian trattoria center", 42.4415, 19.2612, "food", "Restaurant", "Center", 6, "Pizza and pasta downtown.", { cuisine: "italian" }),
    place("pg-food-grill", "Skara grill courtyard", 42.4395, 19.2595, "food", "Restaurant", "Stara Varoš", 7, "Open-fire grilling near the clock tower.", { cuisine: "grill" }),
    place("pg-food-wine", "Wine bar dinner", 42.4422, 19.262, "food", "Restaurant", "Center", 7, "Vranac pairings with small plates.", { cuisine: "montenegrin wine" }),
    place("pg-food-vegetarian", "Vegetarian cafe lunch", 42.441, 19.2628, "food", "Restaurant", "Center", 5, "Plant-forward bowls downtown.", { cuisine: "vegetarian" }),
    place("pg-food-mall", "Delta City casual dinner", 42.4235, 19.2605, "food", "Restaurant", "South", 4, "Mall food court and casual restaurants.", { cuisine: "international" }),

    // ——— Nightlife ———
    place("pg-night-center", "Center bars Hercegovačka", 42.4425, 19.2595, "nightlife", "Bar", "Center", 8, "Main evening bar strip."),
    place("pg-night-old", "Stara Varoš evening", 42.4392, 19.2582, "nightlife", "Bar", "Stara Varoš", 6, "Quiet drinks in old-town courtyards."),
    place("pg-night-club", "Podgorica club night", 42.442, 19.265, "nightlife", "Club", "Center", 6, "Check weekend lineups."),
    place("pg-night-river", "Riverside evening drinks", 42.4448, 19.2558, "nightlife", "Bar", "River", 7, "Terrace bars under Millennium Bridge lights."),
    place("pg-night-live", "Live music bar", 42.4418, 19.2635, "nightlife", "Bar", "Center", 6, "Local bands downtown."),
    place("pg-night-wine", "Wine bar late", 42.4412, 19.2615, "nightlife", "Bar", "Center", 7, "Montenegrin wines by the glass."),
    place("pg-night-beer", "Craft beer taproom", 42.4405, 19.2625, "nightlife", "Bar", "Center", 6, "Local and regional craft pours."),

    // ——— Stays ———
    place("pg-stay-center", "Center Hotel Podgorica", 42.442, 19.262, "stay", "Hotel", "Center", 8, "Walkable to square, parks, and Hercegovačka."),
    place("pg-stay-river", "River / Millennium Bridge hotel", 42.445, 19.257, "stay", "Hotel", "River", 8, "Views of the signature bridge."),
    place("pg-stay-old", "Stara Varoš guest house", 42.438, 19.2595, "stay", "Guest house", "Stara Varoš", 7, "Character stay in the old town."),
    place("pg-stay-hilton", "Business hotel Podgorica", 42.4435, 19.26, "stay", "Hotel", "Center", 7, "Modern business base downtown."),
    place("pg-stay-hostel", "Podgorica Hostel", 42.44, 19.26, "stay", "Hostel", "Center", 5, "Budget dorms near the center."),
    place("pg-stay-guest", "Center guest house", 42.4415, 19.2645, "stay", "Guest house", "Center", 6, "Small stay near Independence Square."),
    place("pg-stay-south", "South / mall-area hotel", 42.424, 19.259, "stay", "Hotel", "South", 5, "Practical if driving and shopping at Delta City."),
    place("pg-stay-apartment", "Center aparthotel", 42.4425, 19.2615, "stay", "Hotel", "Center", 6, "Kitchenette stay for longer visits."),
    place("pg-stay-gorica", "Gorica hillside stay", 42.434, 19.251, "stay", "Guest house", "Gorica", 5, "Quiet hill base with park access."),
  ],
};
