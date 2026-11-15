import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const valletta: CityCatalog = {
  id: "valletta",
  name: "Valletta, Malta",
  aliases: ["valletta", "malta", "valletta malta"],
  center: { lat: 35.8989, lon: 14.5146 },
  places: [
    // ——— Valletta core ———
    place("vl-cocathedral", "St John's Co-Cathedral", 35.8977, 14.5126, "sight", "Monument", "Valletta", 10, "Baroque interior and Caravaggio's Beheading of St John."),
    place("vl-grandmasters", "Grandmaster's Palace", 35.899, 14.5138, "sight", "Attraction", "Valletta", 9, "Armoury and state rooms on Palace Square."),
    place("vl-upper-barrakka", "Upper Barrakka Gardens", 35.8955, 14.512, "nature", "Garden", "Valletta", 10, "Saluting battery and classic Three Cities harbour view."),
    place("vl-lower-barrakka", "Lower Barrakka Gardens", 35.897, 14.517, "nature", "Garden", "Valletta", 8, "Siege Bell and quieter Grand Harbour lookout."),
    place("vl-siege-bell", "Siege Bell Memorial", 35.8972, 14.5172, "sight", "Monument", "Valletta", 7, "Memorial bell above the lower gardens."),
    place("vl-fort-st-elmo", "Fort St Elmo / National War Museum", 35.902, 14.5185, "museum", "Museum", "Valletta", 9, "Tip-of-peninsula fort with WWII and Great Siege stories."),
    place("vl-republic", "Republic Street", 35.8985, 14.513, "shopping", "Market", "Valletta", 7, "Main spine from City Gate to Fort St Elmo."),
    place("vl-city-gate", "City Gate & Pjazza Teatru Rjal", 35.8958, 14.5098, "sight", "Attraction", "Valletta", 8, "Renzo Piano gate, parliament, and open-air opera ruins."),
    place("vl-parliament", "Parliament House", 35.8959, 14.5102, "sight", "Attraction", "Valletta", 7, "Piano-designed parliament by City Gate."),
    place("vl-saluting", "Saluting Battery", 35.8953, 14.5122, "sight", "Attraction", "Valletta", 8, "Noon cannon below Upper Barrakka — time your visit."),
    place("vl-manoel", "Teatru Manoel", 35.8995, 14.5122, "sight", "Attraction", "Valletta", 7, "One of Europe's oldest working theatres."),
    place("vl-our-lady-victories", "Church of Our Lady of Victory", 35.8965, 14.5105, "sight", "Monument", "Valletta", 6, "First building of Valletta after the Great Siege."),
    place("vl-st-paul-shipwreck", "Collegiate Church of St Paul's Shipwreck", 35.8982, 14.5145, "sight", "Monument", "Valletta", 7, "Relics and ornate interior dedicated to St Paul's wreck."),
    place("vl-carmelite", "Basilica of Our Lady of Mount Carmel", 35.8998, 14.5128, "sight", "Monument", "Valletta", 7, "Distinctive dome on the Valletta skyline."),
    place("vl-mercantile", "Mercantile / Spinola palazzi lanes", 35.8988, 14.514, "sight", "Attraction", "Valletta", 6, "Knights-era palaces on side streets off Republic."),
    place("vl-hastings", "Hastings Gardens", 35.8962, 14.5085, "nature", "Garden", "Valletta", 6, "West-facing gardens toward Marsamxett Harbour."),
    place("vl-triton", "Triton Fountain", 35.8955, 14.5088, "sight", "Monument", "Valletta", 6, "Landmark fountain outside City Gate."),
    place("vl-harbour-view", "Grand Harbour viewpoints", 35.896, 14.5145, "sight", "Viewpoint", "Valletta", 9, "Multiple bastion edges looking to Birgu and Senglea."),
    place("vl-marsamxett", "Marsamxett Harbour edge", 35.8995, 14.5095, "sight", "Viewpoint", "Valletta", 7, "Western harbour toward Sliema and Manoel Island."),

    // ——— Museums ———
    place("vl-archaeology", "National Museum of Archaeology", 35.8972, 14.5115, "museum", "Museum", "Valletta", 8, "Temple-period artefacts including the Sleeping Lady."),
    place("vl-fine-arts", "MUŻA / National Museum of Art", 35.8968, 14.511, "museum", "Museum", "Valletta", 7, "Fine arts in the Auberge d'Italie."),
    place("vl-lascaris", "Lascaris War Rooms", 35.8952, 14.5135, "museum", "Museum", "Valletta", 8, "Underground WWII operations rooms beneath the bastions."),
    place("vl-malta-experience", "The Malta Experience", 35.8965, 14.5165, "museum", "Museum", "Valletta", 5, "Audio-visual history show near Lower Barrakka."),
    place("vl-toy", "Malta Toy Museum area exhibits", 35.898, 14.5125, "museum", "Museum", "Valletta", 4, "Small niche museum stop for families."),
    place("vl-st-elmo-wwii", "WWII exhibits at Fort St Elmo", 35.9018, 14.5182, "museum", "Museum", "Valletta", 7, "Detailed war galleries inside the fort."),

    // ——— Three Cities ———
    place("vl-birgu", "Birgu (Vittoriosa) waterfront", 35.8885, 14.5225, "sight", "Attraction", "Three Cities", 9, "Ferry across for Collachio lanes and marina views back to Valletta."),
    place("vl-fort-st-angelo", "Fort St Angelo", 35.8915, 14.521, "sight", "Castle", "Three Cities", 8, "Knights' fort dominating Birgu's tip."),
    place("vl-inquisitor", "Inquisitor's Palace", 35.8878, 14.5228, "museum", "Museum", "Three Cities", 7, "Rare inquisitor's residence museum in Birgu."),
    place("vl-senglea", "Senglea Gardjola Gardens", 35.8865, 14.5165, "sight", "Viewpoint", "Three Cities", 8, "Stone eye-and-ear sentry with Valletta panorama."),
    place("vl-cospicua", "Cospicua (Bormla) dockyards area", 35.8825, 14.5215, "sight", "Attraction", "Three Cities", 6, "Dockyard city completing the Three Cities trio."),
    place("vl-ferry", "Valletta–Three Cities ferry", 35.895, 14.5148, "sight", "Attraction", "Valletta", 8, "Short harbour ferry — best approach to Birgu."),

    // ——— Harbours / Sliema / Gzira edge ———
    place("vl-sliema-ferry", "Sliema ferry landing", 35.9075, 14.5085, "sight", "Attraction", "Sliema", 7, "Cross Marsamxett for promenade and hotel strip."),
    place("vl-sliema-front", "Sliema seafront promenade", 35.912, 14.504, "nature", "Park", "Sliema", 7, "Evening stroll and rocky swim spots."),
    place("vl-manoel-island", "Manoel Island views", 35.9035, 14.5055, "sight", "Viewpoint", "Gzira", 5, "Fort Manoel island in Marsamxett Harbour."),

    // ——— Mdina / Rabat day-trip ———
    place("vl-mdina", "Mdina Silent City", 35.8865, 14.403, "sight", "Attraction", "Mdina", 10, "Walled former capital — golden limestone lanes and bastion views."),
    place("vl-mdina-cathedral", "Mdina Cathedral", 35.8868, 14.4038, "sight", "Monument", "Mdina", 8, "Baroque cathedral on Mdina's main square."),
    place("vl-mdina-walls", "Mdina bastion viewpoints", 35.8855, 14.4025, "sight", "Viewpoint", "Mdina", 9, "Island panoramas from the silent city's walls."),
    place("vl-rabat", "Rabat streets & catacombs", 35.8815, 14.3985, "sight", "Attraction", "Rabat", 7, "Suburb of Mdina with St Paul's Catacombs."),
    place("vl-catacombs", "St Paul's Catacombs", 35.8805, 14.3975, "museum", "Museum", "Rabat", 7, "Early Christian burial complex underground."),
    place("vl-dingli", "Dingli Cliffs", 35.8515, 14.381, "nature", "Viewpoint", "Dingli", 8, "Island's highest cliffs — sunset day-trip from Valletta."),

    // ——— Shopping ———
    place("vl-merchants", "Merchant Street market energy", 35.898, 14.5135, "shopping", "Market", "Valletta", 6, "Shops and cafes parallel to Republic Street."),
    place("vl-is-suq", "Is-Suq Tal-Belt", 35.8975, 14.512, "shopping", "Market", "Valletta", 7, "Covered food market hall with local stalls."),
    place("vl-handmade", "Crafts on St Lucy / side streets", 35.8985, 14.5125, "shopping", "Market", "Valletta", 5, "Maltese crafts and lace souvenirs."),
    place("vl-sliema-malls", "Sliema shopping streets", 35.9115, 14.5025, "shopping", "Mall", "Sliema", 6, "Modern retail across the harbour."),

    // ——— Cafes ———
    place("vl-cafe-cordina", "Café Cordina", 35.898, 14.5135, "cafe", "Cafe", "Valletta", 8, "Institutional cafe on Republic Square.", { cuisine: "coffee pastry" }),
    place("vl-lot sixty", "Lot Sixty One Coffee Roasters", 35.8985, 14.5118, "cafe", "Cafe", "Valletta", 7, "Specialty coffee in the peninsula lanes.", { cuisine: "coffee" }),
    place("vl-zero", "Zero Coupe / modern cafe", 35.8978, 14.5128, "cafe", "Cafe", "Valletta", 6, "Contemporary coffee stop near museums.", { cuisine: "coffee" }),
    place("vl-barrakka-cafe", "Upper Barrakka kiosk", 35.8956, 14.5121, "cafe", "Cafe", "Valletta", 6, "Drink with the Three Cities view.", { cuisine: "coffee" }),
    place("vl-pastizzi", "Pastizzi shop Valletta", 35.8982, 14.5125, "cafe", "Cafe", "Valletta", 8, "Flaky ricotta or pea pastries — essential Maltese snack.", { cuisine: "pastry" }),
    place("vl-mdina-cafe", "Fontanella Tea Garden", 35.8862, 14.4028, "cafe", "Cafe", "Mdina", 7, "Cake terrace on Mdina's walls.", { cuisine: "pastry coffee" }),
    place("vl-sliema-cafe", "Sliema seafront cafe", 35.911, 14.5035, "cafe", "Cafe", "Sliema", 5, "Promenade coffee across Marsamxett.", { cuisine: "coffee" }),

    // ——— Food ———
    place("vl-noni", "Noni", 35.8988, 14.5132, "food", "Restaurant", "Valletta", 8, "Modern Maltese tasting in a historic townhouse.", { cuisine: "maltese contemporary" }),
    place("vl-legligin", "Legligin", 35.8982, 14.5122, "food", "Restaurant", "Valletta", 7, "Wine bar plates and Maltese sharing dishes.", { cuisine: "maltese wine" }),
    place("vl-guze", "Guzé", 35.8975, 14.5118, "food", "Restaurant", "Valletta", 7, "Cellar dining in a Valletta basement.", { cuisine: "mediterranean" }),
    place("vl-harbor-dinner", "Harbour-view dinner Valletta", 35.8965, 14.514, "food", "Restaurant", "Valletta", 7, "Bastion restaurants overlooking Grand Harbour.", { cuisine: "mediterranean seafood" }),
    place("vl-rabbit", "Fenek (rabbit) traditional", 35.898, 14.513, "food", "Restaurant", "Valletta", 7, "Malta's national dish in a traditional kitchen.", { cuisine: "maltese" }),
    place("vl-ftira", "Ftira & street bites", 35.8992, 14.5132, "food", "Quick meal", "Valletta", 7, "Ring bread sandwiches and pastizzi on the go.", { cuisine: "street_food maltese" }),
    place("vl-suq-lunch", "Is-Suq food counters", 35.8975, 14.5121, "food", "Quick meal", "Valletta", 7, "Market-hall lunch under one roof.", { cuisine: "market maltese" }),
    place("vl-birgu-seafood", "Birgu marina seafood", 35.8888, 14.522, "food", "Restaurant", "Three Cities", 8, "Fresh fish with Valletta skyline across the water.", { cuisine: "seafood" }),
    place("vl-sliema-dinner", "Sliema waterfront dinner", 35.9105, 14.5045, "food", "Restaurant", "Sliema", 6, "Promenade restaurants after the ferry.", { cuisine: "mediterranean" }),
    place("vl-mdina-dinner", "Mdina evening restaurant", 35.8865, 14.4035, "food", "Restaurant", "Mdina", 7, "Candlelit lanes inside the silent city.", { cuisine: "maltese mediterranean" }),
    place("vl-vegetarian", "Vegetarian Valletta", 35.8985, 14.512, "food", "Restaurant", "Valletta", 5, "Plant-forward plates in the peninsula.", { cuisine: "vegetarian" }),
    place("vl-italian", "Italian trattoria Valletta", 35.8978, 14.5135, "food", "Restaurant", "Valletta", 6, "Pasta nights when you want a break from fenek.", { cuisine: "italian" }),
    place("vl-aljotta", "Aljotta fish soup lunch", 35.898, 14.514, "food", "Restaurant", "Valletta", 6, "Traditional Maltese fish soup.", { cuisine: "maltese seafood" }),

    // ——— Nightlife ———
    place("vl-strait-street", "Strait Street bars", 35.8988, 14.5122, "nightlife", "Bar", "Valletta", 8, "Historic entertainment street revived with bars and music."),
    place("vl-harbor-evening", "Harbour bastion evening drinks", 35.8968, 14.515, "nightlife", "Bar", "Valletta", 7, "Sunset drinks facing the Three Cities."),
    place("vl-bridge-bar", "The Bridge Bar", 35.8975, 14.5115, "nightlife", "Bar", "Valletta", 7, "Jazz nights on outdoor steps in season."),
    place("vl-sliema-night", "Sliema / Paceville nightlife", 35.922, 14.4895, "nightlife", "Club", "Paceville", 6, "Busier club strip a short ride from Valletta."),
    place("vl-wine-bar", "Valletta wine bar", 35.8982, 14.5128, "nightlife", "Bar", "Valletta", 6, "Maltese wines by the glass."),
    place("vl-birgu-night", "Birgu waterfront evening", 35.8885, 14.5222, "nightlife", "Bar", "Three Cities", 6, "Quiet marina drinks after day-trippers leave."),

    // ——— Stays ———
    place("vl-stay-valletta", "Valletta boutique hotel", 35.8986, 14.5136, "stay", "Hotel", "Valletta", 9, "Stay inside the walls for dawn streets without crowds."),
    place("vl-stay-harbour", "Grand Harbour hotel Valletta", 35.8975, 14.5155, "stay", "Hotel", "Valletta", 8, "Rooms facing the Three Cities."),
    place("vl-stay-inx", "Iniala / design hotel Valletta", 35.899, 14.5125, "stay", "Hotel", "Valletta", 8, "Design stays in restored townhouses."),
    place("vl-stay-hostel", "Valletta hostel", 35.8995, 14.5118, "stay", "Hostel", "Valletta", 6, "Budget beds on the peninsula."),
    place("vl-stay-guest", "Valletta guest house", 35.897, 14.5125, "stay", "Guest house", "Valletta", 6, "Family-run rooms near Barrakka."),
    place("vl-stay-apt", "Valletta apartment", 35.8982, 14.5138, "stay", "Apartment", "Valletta", 7, "Self-catering in a limestone townhouse."),
    place("vl-stay-sliema", "Sliema seafront hotel", 35.9115, 14.503, "stay", "Hotel", "Sliema", 7, "Modern hotels with ferry access to Valletta."),
    place("vl-stay-birgu", "Birgu boutique stay", 35.888, 14.5225, "stay", "Hotel", "Three Cities", 7, "Sleep across the harbour for quieter nights."),
    place("vl-stay-mdina", "Mdina / Rabat hotel", 35.885, 14.401, "stay", "Hotel", "Mdina", 7, "Overnight in or beside the silent city."),
    place("vl-stay-luxury", "Luxury Valletta palace hotel", 35.8988, 14.5142, "stay", "Hotel", "Valletta", 9, "High-end stay in a converted auberge or palazzo."),
    place("vl-stay-gzira", "Gzira / Manoel Island area hotel", 35.9055, 14.4945, "stay", "Hotel", "Gzira", 5, "Value base between Sliema and Valletta ferry links."),
    place("vl-stay-three", "Senglea guest house", 35.886, 14.517, "stay", "Guest house", "Three Cities", 6, "Gardjola-view rooms in Senglea."),
  ],
};
