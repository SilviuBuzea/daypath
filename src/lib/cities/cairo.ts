import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const cairo: CityCatalog = {
  id: "cairo",
  name: "Cairo, Egypt",
  aliases: ["cairo", "al qahira"],
  center: { lat: 30.0444, lon: 31.2357 },
  places: [
    // ——— Giza ———
    place("ca-pyramids", "Great Pyramid of Khufu", 29.9792, 31.1342, "sight", "Monument", "Giza", 10, "Core Giza plateau — go early and consider a guide for context.", { flags: ["ticket", "early", "touristy"] }),
    place("ca-khafre", "Pyramid of Khafre", 29.9759, 31.1308, "sight", "Monument", "Giza", 9, "Middle pyramid that still keeps its capstone casing."),
    place("ca-menkaure", "Pyramid of Menkaure", 29.9725, 31.1283, "sight", "Monument", "Giza", 7, "Smallest of the three main pyramids on the plateau."),
    place("ca-sphinx", "Great Sphinx", 29.9753, 31.1376, "sight", "Monument", "Giza", 10, "Guardian statue below the plateau — best light late afternoon.", { flags: ["touristy"] }),
    place("ca-panorama", "Giza Panorama Point", 29.9765, 31.1315, "sight", "Viewpoint", "Giza", 8, "Classic three-pyramid photo angle on the desert ridge."),
    place("ca-solar-boat", "Solar Boat Museum (Khufu Ship)", 29.9785, 31.1348, "museum", "Museum", "Giza", 7, "Reassembled cedar solar barge beside Khufu's pyramid."),
    place("ca-sound-light", "Sound & Light show plaza", 29.9745, 31.1385, "sight", "Attraction", "Giza", 5, "Evening show seating facing the Sphinx."),
    place("ca-camel", "Giza camel viewpoint loop", 29.9775, 31.1295, "sight", "Attraction", "Giza", 5, "Optional desert ride — negotiate firmly or skip for walking."),

    // ——— Islamic Cairo ———
    place("ca-khan", "Khan el-Khalili", 30.0475, 31.2625, "shopping", "Market", "Islamic Cairo", 9, "Labyrinth bazaar of spices, lamps, and souvenirs.", { flags: ["touristy"] }),
    place("ca-al-azhar", "Al-Azhar Mosque", 30.0458, 31.2627, "sight", "Monument", "Islamic Cairo", 8, "Historic teaching mosque — dress modestly and remove shoes."),
    place("ca-hussein", "Sayyidna Hussein Mosque", 30.0478, 31.2635, "sight", "Monument", "Islamic Cairo", 7, "Shrine square at the edge of Khan el-Khalili."),
    place("ca-muizz", "Al-Muizz Street", 30.0505, 31.2615, "sight", "Attraction", "Islamic Cairo", 9, "Restored medieval spine of mosques, sabils, and merchants."),
    place("ca-qalawun", "Qalawun Complex", 30.0502, 31.2612, "sight", "Monument", "Islamic Cairo", 7, "Mamluk madrasa-hospital facade on Al-Muizz."),
    place("ca-barquq", "Sultan Barquq Mosque", 30.0515, 31.261, "sight", "Monument", "Islamic Cairo", 6, "Courtyard mosque further north on Al-Muizz."),
    place("ca-bab-zuweila", "Bab Zuweila", 30.0428, 31.2575, "sight", "Monument", "Islamic Cairo", 8, "Climb the Fatimid gate towers for rooftop views."),
    place("ca-bab-futuh", "Bab al-Futuh", 30.0545, 31.2635, "sight", "Monument", "Islamic Cairo", 6, "Northern Fatimid gate bookending Al-Muizz."),
    place("ca-bab-nasr", "Bab al-Nasr", 30.0542, 31.2655, "sight", "Monument", "Islamic Cairo", 5, "Victory gate near Bab al-Futuh."),
    place("ca-sultan-hassan", "Mosque-Madrassa of Sultan Hassan", 30.0325, 31.2565, "sight", "Monument", "Islamic Cairo", 9, "Monumental Mamluk courtyard beside the Citadel approach."),
    place("ca-rifai", "Al-Rifa'i Mosque", 30.0322, 31.2568, "sight", "Monument", "Islamic Cairo", 7, "Royal tombs mosque paired with Sultan Hassan."),
    place("ca-citadel", "Cairo Citadel", 30.029, 31.261, "sight", "Castle", "Citadel", 9, "Hill fortress with Muhammad Ali Mosque and city views.", { flags: ["ticket"] }),
    place("ca-muhammad-ali", "Muhammad Ali Mosque", 30.0288, 31.2598, "sight", "Monument", "Citadel", 9, "Alabaster mosque dome dominating the Citadel skyline."),
    place("ca-military-museum", "National Military Museum", 30.0295, 31.2615, "museum", "Museum", "Citadel", 5, "Military history halls inside Citadel walls."),
    place("ca-al-azhar-park", "Al-Azhar Park", 30.0405, 31.2645, "nature", "Park", "Islamic Cairo", 8, "Landscaped hill park with Citadel views and cafes."),
    place("ca-blue-mosque", "Aqsunqur Blue Mosque", 30.0365, 31.2595, "sight", "Monument", "Islamic Cairo", 6, "Ottoman blue tiles on Bab al-Wazir street."),
    place("ca-wikala", "Wikala of al-Ghuri", 30.0455, 31.2605, "sight", "Monument", "Islamic Cairo", 6, "Caravanserai courtyard hosting cultural shows."),

    // ——— Coptic / Old Cairo ———
    place("ca-hanging", "Hanging Church (Saint Virgin Mary)", 30.0055, 31.2302, "sight", "Monument", "Coptic Cairo", 9, "Suspended basilica over Roman fortress gatehouses."),
    place("ca-coptic-museum", "Coptic Museum", 30.0058, 31.2295, "museum", "Museum", "Coptic Cairo", 8, "Icons, textiles, and manuscripts of Egypt's Christians."),
    place("ca-ben-ezra", "Ben Ezra Synagogue", 30.0052, 31.2308, "sight", "Monument", "Coptic Cairo", 7, "Historic synagogue in the religious compound."),
    place("ca-saint-sergius", "Church of Saints Sergius and Bacchus", 30.005, 31.2305, "sight", "Monument", "Coptic Cairo", 7, "Crypt tradition of the Holy Family's sojourn."),
    place("ca-babylon", "Babylon Fortress walls", 30.006, 31.2298, "sight", "Ruins", "Coptic Cairo", 6, "Roman towers framing the Coptic enclave."),
    place("ca-amr", "Amr Ibn al-As Mosque", 30.0105, 31.2335, "sight", "Monument", "Old Cairo", 7, "Egypt's first mosque — simple courtyard calm."),
    place("ca-nilometer", "Nilometer on Roda Island", 30.0065, 31.2255, "sight", "Monument", "Roda", 6, "Medieval gauge for Nile flood levels."),

    // ——— Downtown / Tahrir ———
    place("ca-egyptian-museum", "Egyptian Museum (Tahrir)", 30.0478, 31.2336, "museum", "Museum", "Downtown", 9, "Classic antiquities haul — still essential beside GEM.", { flags: ["ticket", "touristy"] }),
    place("ca-tahrir", "Tahrir Square", 30.0444, 31.2357, "sight", "Attraction", "Downtown", 6, "Historic square and metro hub for downtown walks."),
    place("ca-gem", "Grand Egyptian Museum", 29.9945, 31.1285, "museum", "Museum", "Giza", 10, "New mega-museum near the pyramids — book timed entry.", { flags: ["ticket", "early"] }),
    place("ca-abdeen", "Abdeen Palace Museum", 30.0415, 31.2475, "museum", "Museum", "Downtown", 6, "Royal palace museums east of downtown."),
    place("ca-opera", "Cairo Opera House", 30.0425, 31.2235, "sight", "Monument", "Gezira", 6, "Arts complex on Gezira Island."),
    place("ca-downtown-passage", "Downtown arcade walk", 30.0485, 31.2395, "shopping", "Market", "Downtown", 6, "Belle Époque passages and bookshops around Talaat Harb."),
    place("ca-talaat", "Talaat Harb Square", 30.0505, 31.2385, "sight", "Attraction", "Downtown", 5, "Busy downtown crossroads for cafes and cinemas."),
    place("ca-groppi", "Groppi heritage cafe exterior", 30.0495, 31.2398, "cafe", "Cafe", "Downtown", 5, "Historic cafe landmark on Talaat Harb.", { cuisine: "coffee pastry" }),

    // ——— Zamalek / Gezira / Nile ———
    place("ca-tower", "Cairo Tower", 30.0459, 31.2243, "sight", "Viewpoint", "Gezira", 8, "360° Nile and city views from Gezira Island."),
    place("ca-zamalek", "Zamalek neighborhood stroll", 30.0615, 31.2195, "sight", "Attraction", "Zamalek", 7, "Leafy island streets of galleries, cafes, and embassies."),
    place("ca-museum-modern", "Museum of Modern Egyptian Art", 30.0435, 31.2235, "museum", "Museum", "Gezira", 6, "20th-century Egyptian art near the Opera House."),
    place("ca-aquarium-grotto", "Fish Garden (Aquarium Grotto)", 30.0585, 31.2205, "nature", "Park", "Zamalek", 5, "Shady grotto park on the island."),
    place("ca-nile-felucca", "Nile felucca sail", 30.0455, 31.2285, "sight", "Attraction", "Gezira", 8, "Late-afternoon sail between Gezira and downtown banks."),
    place("ca-andalus", "Andalus Garden", 30.0445, 31.2265, "nature", "Garden", "Gezira", 5, "Formal gardens at the foot of Cairo Tower."),

    // ——— Other museums / sights ———
    place("ca-museum-civilization", "National Museum of Egyptian Civilization", 30.0085, 31.2485, "museum", "Museum", "Fustat", 8, "Royal mummies hall in a modern Fustat museum."),
    place("ca-gayer", "Gayer-Anderson Museum", 30.0265, 31.2505, "museum", "Museum", "Islamic Cairo", 7, "Furnished Ottoman houses beside Ibn Tulun."),
    place("ca-ibn-tulun", "Ibn Tulun Mosque", 30.0288, 31.2495, "sight", "Monument", "Islamic Cairo", 8, "Vast Abbasid courtyard and unique spiral minaret."),
    place("ca-manial", "Manial Palace Museum", 30.0225, 31.2275, "museum", "Museum", "Roda", 7, "Royal residence museum with gardens on Roda Island."),
    place("ca-sakakini", "Sakakini Palace", 30.0655, 31.2585, "sight", "Monument", "Downtown", 5, "Ornate Rococo palace in a residential district."),
    place("ca-city-dead", "City of the Dead overview", 30.0355, 31.2755, "sight", "Attraction", "Islamic Cairo", 5, "Historic necropolis quarters east of the medieval walls."),
    place("ca-mokattam", "Mokattam / Cave Church viewpoint", 30.0205, 31.2785, "sight", "Viewpoint", "Mokattam", 6, "Hill views and the Monastery of St. Simon complex."),

    // ——— Cafes ———
    place("ca-el-fishawi", "El Fishawy Cafe", 30.0472, 31.2622, "cafe", "Cafe", "Islamic Cairo", 7, "Centuries-old cafe deep in Khan el-Khalili.", { cuisine: "tea coffee" }),
    place("ca-cilantro", "Zamalek garden cafe", 30.0625, 31.2185, "cafe", "Cafe", "Zamalek", 6, "Relaxed island coffee between gallery hops.", { cuisine: "coffee" }),
    place("ca-mandarine", "Mandarine Koueider", 30.0605, 31.2205, "cafe", "Cafe", "Zamalek", 7, "Egyptian ice cream and oriental sweets.", { cuisine: "ice_cream pastry" }),
    place("ca-beano", "Downtown espresso stop", 30.0485, 31.2375, "cafe", "Cafe", "Downtown", 5, "Quick coffee between museum and square walks.", { cuisine: "coffee" }),
    place("ca-nile-cafe", "Nile-side ahwa", 30.0465, 31.2315, "cafe", "Cafe", "Downtown", 6, "Simple tea with felucca views on the corniche.", { cuisine: "tea" }),

    // ——— Food ———
    place("ca-koshary-abou", "Abou Tarek Koshary", 30.0505, 31.2405, "food", "Quick meal", "Downtown", 8, "Famous multi-floor koshary temple downtown.", { cuisine: "egyptian street_food" }),
    place("ca-felfela", "Felfela", 30.0495, 31.2365, "food", "Restaurant", "Downtown", 7, "Classic Egyptian staples near Tahrir.", { cuisine: "egyptian" }),
    place("ca-kadoura", "Kazaz", 30.0475, 31.2615, "food", "Quick meal", "Islamic Cairo", 6, "Grills and ful near the bazaar lanes.", { cuisine: "egyptian street_food" }),
    place("ca-zooba", "Zooba", 30.0615, 31.2175, "food", "Quick meal", "Zamalek", 7, "Modern Egyptian street classics in Zamalek.", { cuisine: "egyptian street_food" }),
    place("ca-abou-el-sid", "Abou El Sid", 30.0605, 31.2195, "food", "Restaurant", "Zamalek", 8, "Orientalist interiors and traditional Egyptian dishes.", { cuisine: "egyptian" }),
    place("ca-naguib", "Naguib Mahfouz Cafe restaurant", 30.0475, 31.2628, "food", "Restaurant", "Islamic Cairo", 6, "Tourist-friendly plates inside Khan el-Khalili.", { cuisine: "egyptian" }),
    place("ca-kebda", "Liver sandwich cart stretch", 30.0525, 31.2455, "food", "Quick meal", "Downtown", 5, "Late-night kebda and hawawshi culture.", { cuisine: "street_food egyptian" }),
    place("ca-sequoia", "Sequoia", 30.0755, 31.2185, "food", "Restaurant", "Zamalek", 7, "Nile-tip terrace dining on northern Zamalek.", { cuisine: "mediterranean egyptian" }),
    place("ca-osmanly", "Osmanly Restaurant", 30.0425, 31.2325, "food", "Restaurant", "Downtown", 7, "Ottoman-Egyptian fine dining at the Kempinski.", { cuisine: "egyptian fine_dining" }),
    place("ca-falafel", "Falafel & fuul breakfast", 30.0465, 31.2385, "food", "Quick meal", "Downtown", 6, "Morning taameya sandwiches from a busy downtown stall.", { cuisine: "street_food egyptian" }),
    place("ca-fish", "Samakmak", 30.0585, 31.2225, "food", "Restaurant", "Zamalek", 6, "Alexandrian-style seafood inland.", { cuisine: "seafood egyptian" }),
    place("ca-veg", "Left Bank Cafe meals", 30.0625, 31.2215, "food", "Restaurant", "Zamalek", 5, "Casual international and vegetarian-friendly plates.", { cuisine: "vegetarian mediterranean" }),

    // ——— Nightlife ———
    place("ca-nile-cruise-night", "Dinner Nile cruise dock", 30.0485, 31.2295, "nightlife", "Bar", "Downtown", 6, "Touristy floating dinners with folk shows — pick carefully."),
    place("ca-zamalek-bars", "Zamalek evening bars", 30.0615, 31.2188, "nightlife", "Bar", "Zamalek", 7, "Island bars and live-music rooms after dinner."),
    place("ca-cairo-jazz", "Cairo Jazz Club", 30.0685, 31.2155, "nightlife", "Bar", "Mohandessin", 7, "Live sets across the river in Mohandessin."),
    place("ca-after-eight", "After Eight", 30.0495, 31.2375, "nightlife", "Bar", "Downtown", 6, "Downtown club nights near Talaat Harb."),
    place("ca-ahwa-night", "Islamic Cairo evening ahwa", 30.0475, 31.262, "nightlife", "Bar", "Islamic Cairo", 6, "Shisha and tea spill into Muizz lanes after dark."),

    // ——— Stays ———
    place("ca-stay-nile-ritz", "The Nile Ritz-Carlton", 30.0455, 31.2335, "stay", "Hotel", "Downtown", 9, "Museum-adjacent luxury on the Nile corniche."),
    place("ca-stay-four-seasons", "Four Seasons Nile Plaza", 30.0385, 31.2295, "stay", "Hotel", "Garden City", 9, "Garden City tower with broad Nile views."),
    place("ca-stay-marriott", "Cairo Marriott Zamalek", 30.0575, 31.2225, "stay", "Hotel", "Zamalek", 8, "Palace-wing hotel in the heart of Zamalek."),
    place("ca-stay-kempinski", "Kempinski Nile Hotel", 30.0425, 31.2315, "stay", "Hotel", "Garden City", 8, "Corniche luxury near downtown museums."),
    place("ca-stay-stewarts", "Steigenberger Hotel El Tahrir", 30.0465, 31.2355, "stay", "Hotel", "Downtown", 7, "Practical Tahrir base for the Egyptian Museum."),
    place("ca-stay-giza", "Marriott Mena House", 29.9835, 31.1345, "stay", "Hotel", "Giza", 9, "Pyramid-view historic hotel beside the plateau."),
    place("ca-stay-pyramids", "Le Méridien Pyramids", 29.9775, 31.1455, "stay", "Hotel", "Giza", 7, "Resort-style base for early plateau mornings."),
    place("ca-stay-downtown", "Downtown Cairo Hotel", 30.0485, 31.2415, "stay", "Hotel", "Downtown", 6, "Budget-friendly rooms near bazaar and museums."),
    place("ca-stay-hostel", "Hostel near Tahrir", 30.0465, 31.2365, "stay", "Hostel", "Downtown", 5, "Backpacker beds for museum-first itineraries."),
    place("ca-stay-zamalek-bb", "Zamalek House B&B", 30.0625, 31.2195, "stay", "Guest house", "Zamalek", 7, "Quiet island rooms among embassies and cafes."),
    place("ca-stay-islamic", "Islamic Cairo boutique", 30.0455, 31.2615, "stay", "Hotel", "Islamic Cairo", 6, "Small stay steps from Khan el-Khalili."),
    place("ca-stay-apartment", "Zamalek apartment", 30.0595, 31.2205, "stay", "Apartment", "Zamalek", 6, "Self-catering on the island for longer stays."),
  ],
};
