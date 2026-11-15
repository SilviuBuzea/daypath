import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const tallinn: CityCatalog = {
  id: "tallinn",
  name: "Tallinn, Estonia",
  aliases: ["tallinn"],
  center: { lat: 59.437, lon: 24.7536 },
  places: [
    // ——— Old Town / Vanalinn ———
    place("ta-townhall", "Tallinn Town Hall", 59.437, 24.745, "sight", "Monument", "Old Town", 9, "Gothic town hall on Raekoja plats."),
    place("ta-raekoja", "Raekoja plats", 59.4372, 24.7452, "sight", "Attraction", "Old Town", 9, "Medieval square lined with cafe terraces."),
    place("ta-st-nicholas", "St. Nicholas Church", 59.4358, 24.7422, "sight", "Monument", "Old Town", 8, "Restored Gothic church with art museum and organ concerts."),
    place("ta-st-olav", "St. Olaf's Church", 59.4412, 24.7475, "sight", "Monument", "Old Town", 8, "Once the world's tallest building — climb for Old Town views."),
    place("ta-holy-spirit", "Church of the Holy Spirit", 59.4382, 24.7458, "sight", "Monument", "Old Town", 7, "Painted clock and wooden interior off Pikk street."),
    place("ta-city-wall", "Tallinn City Wall walk", 59.4388, 24.7442, "sight", "Attraction", "Old Town", 8, "Climb Nunne and Hellemann towers along the medieval wall."),
    place("ta-fat-margaret", "Fat Margaret Tower", 59.4425, 24.7495, "sight", "Monument", "Old Town", 7, "Harbor-gate tower housing the Estonian Maritime Museum."),
    place("ta-viru-gate", "Viru Gate", 59.4365, 24.7505, "sight", "Attraction", "Old Town", 7, "Twin towers marking the main tourist entrance to Old Town."),
    place("ta-katariina", "Katariina käik", 59.4378, 24.7478, "sight", "Attraction", "Old Town", 6, "Crafts passage with ateliers and medieval stone arches."),
    place("ta-danish-king", "Danish King's Garden", 59.4355, 24.7415, "sight", "Attraction", "Toompea", 7, "Legend spot of the Dannebrog flag falling from the sky."),
    place("ta-kohtuotsa", "Kohtuotsa viewpoint", 59.4375, 24.7405, "sight", "Viewpoint", "Toompea", 9, "Classic red-roof panorama over Lower Town and the bay."),
    place("ta-patkuli", "Patkuli viewpoint", 59.4385, 24.7395, "sight", "Viewpoint", "Toompea", 8, "Northwest view toward the harbor and city wall."),
    place("ta-toompea", "Toompea Castle", 59.4355, 24.7395, "sight", "Castle", "Toompea", 8, "Pink parliament building on the ancient fortress hill."),
    place("ta-alexander", "Alexander Nevsky Cathedral", 59.4358, 24.7397, "sight", "Monument", "Toompea", 8, "Onion-domed Orthodox cathedral opposite the parliament."),
    place("ta-dome", "St. Mary's Cathedral (Dome Church)", 59.4368, 24.7392, "sight", "Monument", "Toompea", 7, "Lutheran cathedral with carved tombs of Baltic nobility."),
    place("ta-pikk-street", "Pikk street walk", 59.4395, 24.7465, "sight", "Attraction", "Old Town", 7, "Guild houses and merchant façades from harbor to square."),
    place("ta-great-guild", "Great Guild Hall", 59.4385, 24.7455, "sight", "Monument", "Old Town", 6, "Medieval merchant guild now part of the history museum."),
    place("ta-blackheads", "House of the Brotherhood of Blackheads", 59.4388, 24.7462, "sight", "Monument", "Old Town", 7, "Renaissance façade of the bachelor merchants' brotherhood."),
    place("ta-freedom", "Freedom Square", 59.4335, 24.7445, "sight", "Attraction", "Center", 6, "Open plaza with the Victory Column and bus links."),
    place("ta-rotermann", "Rotermann Quarter", 59.4395, 24.7545, "sight", "Attraction", "Rotermann", 7, "Converted industrial warehouses with shops and restaurants."),

    // ——— Kadriorg / Pirita ———
    place("ta-kadriorg-palace", "Kadriorg Palace", 59.4385, 24.7915, "sight", "Monument", "Kadriorg", 9, "Petrine baroque palace built for Catherine I."),
    place("ta-kadriorg-park", "Kadriorg Park", 59.4385, 24.791, "nature", "Park", "Kadriorg", 8, "Formal gardens, swan pond, and leafy paths."),
    place("ta-presidential", "Presidential Palace grounds", 59.4375, 24.7935, "sight", "Attraction", "Kadriorg", 6, "Guarded residence beside the Japanese garden."),
    place("ta-japanese", "Japanese Garden Kadriorg", 59.4368, 24.7945, "nature", "Garden", "Kadriorg", 6, "Quiet rock garden on the park's south edge."),
    place("ta-song-festival", "Song Festival Grounds", 59.4435, 24.8085, "sight", "Attraction", "Kadriorg", 7, "Vast amphitheatre for Estonia's song festivals."),
    place("ta-pirita", "Pirita beach & convent", 59.4685, 24.8255, "nature", "Beach", "Pirita", 7, "Bay beach and St. Bridget's convent ruins."),
    place("ta-tv-tower", "Tallinn TV Tower", 59.4712, 24.8875, "sight", "Viewpoint", "Pirita", 7, "Observation deck with Gulf of Finland views."),
    place("ta-botanical", "Tallinn Botanic Garden", 59.4685, 24.8785, "nature", "Garden", "Pirita", 6, "Greenhouses and outdoor collections near the TV tower."),

    // ——— Telliskivi / Kalamaja / Harbor ———
    place("ta-telliskivi", "Telliskivi Creative City", 59.4415, 24.7285, "sight", "Attraction", "Telliskivi", 9, "Creative campus of ateliers, food halls, and weekend market."),
    place("ta-balti-jaam", "Baltic Station Market", 59.44, 24.737, "shopping", "Market", "Telliskivi", 8, "Renovated market halls for produce, street food, and antiques."),
    place("ta-kalamaja", "Kalamaja wooden streets", 59.4455, 24.7325, "sight", "Attraction", "Kalamaja", 7, "Colourful wooden houses in the former fishing quarter."),
    place("ta-seaplane", "Seaplane Harbour", 59.4515, 24.7385, "museum", "Museum", "Harbor", 9, "Maritime museum with a submarine you can board."),
    place("ta-linnahall", "Linnahall", 59.4465, 24.7535, "sight", "Attraction", "Harbor", 6, "Brutalist concert hall ruin with harbor rooftop views."),
    place("ta-cruise-port", "Old City Harbour promenade", 59.4445, 24.7585, "sight", "Attraction", "Harbor", 6, "Ferry arrival edge with cruise ships and cafes."),
    place("ta-noblessner", "Noblessner port", 59.4545, 24.7325, "sight", "Attraction", "Kalamaja", 7, "Former shipyard with galleries, marina, and restaurants."),
    place("ta-proto", "PROTO Invention Factory", 59.4525, 24.7335, "museum", "Museum", "Noblessner", 7, "VR and invention playground in a historic foundry."),
    place("ta-kultuurikatel", "Culture Hub (Kultuurikatel)", 59.4435, 24.7515, "sight", "Attraction", "Harbor", 6, "Creative events space in a former power plant."),

    // ——— Museums ———
    place("ta-kumu", "Kumu Art Museum", 59.4365, 24.7965, "museum", "Museum", "Kadriorg", 9, "Estonia's flagship modern and contemporary art museum."),
    place("ta-kadriorg-art", "Kadriorg Art Museum", 59.4385, 24.7918, "museum", "Museum", "Kadriorg", 7, "Foreign art collection inside the palace."),
    place("ta-niguliste", "Niguliste Museum", 59.4358, 24.7425, "museum", "Museum", "Old Town", 8, "Medieval church art including Danse Macabre."),
    place("ta-history", "Estonian History Museum — Maarjamäe", 59.4555, 24.8125, "museum", "Museum", "Pirita", 7, "Palace park museum covering Estonian independence eras."),
    place("ta-vabamu", "Vabamu Museum of Occupations", 59.4325, 24.7395, "museum", "Museum", "Center", 8, "Stories of Soviet and Nazi occupation."),
    place("ta-kiek", "Kiek in de Kök & bastion tunnels", 59.4345, 24.7415, "museum", "Museum", "Toompea", 8, "Cannon tower museum with underground bastion passages."),
    place("ta-photo", "Museum of Photography", 59.4365, 24.7445, "museum", "Museum", "Old Town", 6, "Historic photo collection behind Town Hall."),
    place("ta-architecture", "Museum of Estonian Architecture", 59.4398, 24.7548, "museum", "Museum", "Rotermann", 6, "Rotermann salt storage building with design shows."),
    place("ta-energy", "Estonian Museum of Energy", 59.4285, 24.7515, "museum", "Museum", "Center", 5, "Industrial heritage near the city centre."),
    place("ta-applied", "Applied Art & Design Museum", 59.4362, 24.7435, "museum", "Museum", "Old Town", 6, "Estonian design objects in a medieval granary."),

    // ——— Nature ———
    place("ta-toit", "Toompark", 59.4365, 24.7375, "nature", "Park", "Toompea", 6, "Green slopes below the city wall."),
    place("ta-hirvepark", "Hirvepark", 59.4335, 24.7385, "nature", "Park", "Center", 5, "Deer-themed park below Freedom Square."),
    place("ta-snelli", "Snelli Pond", 59.4355, 24.7355, "nature", "Park", "Center", 5, "Pond park west of Toompea."),
    place("ta-paljassaare", "Paljassaare peninsula", 59.4755, 24.7155, "nature", "Park", "Paljassaare", 6, "Birdwatching wetlands north of Kalamaja."),

    // ——— Shopping ———
    place("ta-viru-keskus", "Viru Keskus", 59.4365, 24.7555, "shopping", "Market", "Center", 6, "Central mall linking Old Town and modern Tallinn."),
    place("ta-stockmann", "Stockmann Tallinn", 59.4345, 24.7525, "shopping", "Market", "Center", 6, "Department store on the edge of Old Town."),
    place("ta-sola", "Solaris Centre", 59.4325, 24.7385, "shopping", "Market", "Center", 5, "Mall with cinema and concert hall."),
    place("ta-telliskivi-market", "Telliskivi Flea Market", 59.4418, 24.7295, "shopping", "Market", "Telliskivi", 7, "Weekend outdoor flea market of vintage and crafts."),

    // ——— Cafes ———
    place("ta-cafe-maiasmokk", "Maiasmokk Café", 59.4385, 24.7448, "cafe", "Cafe", "Old Town", 8, "Tallinn's oldest cafe — marzipan and pastries.", { cuisine: "pastry coffee" }),
    place("ta-cafe-nop", "NOP Café & Shop", 59.4375, 24.7885, "cafe", "Cafe", "Kadriorg", 7, "Organic brunch cafe near Kadriorg Park.", { cuisine: "brunch coffee" }),
    place("ta-cafe-boheem", "Kohvik Boheem", 59.4445, 24.7315, "cafe", "Cafe", "Kalamaja", 7, "Bohemian neighbourhood cafe in wooden-house Kalamaja.", { cuisine: "coffee" }),
    place("ta-cafe-røst", "Røst Bakery", 59.4412, 24.7298, "cafe", "Cafe", "Telliskivi", 7, "Sourdough and coffee in Telliskivi.", { cuisine: "pastry coffee" }),
    place("ta-cafe-kehrwieder", "Kehrwieder", 59.4375, 24.7455, "cafe", "Cafe", "Old Town", 7, "Cosy cellar cafe off Raekoja plats.", { cuisine: "coffee" }),
    place("ta-cafe-pierre", "Pierre Chocolaterie", 59.4378, 24.7465, "cafe", "Cafe", "Old Town", 6, "Chocolate and coffee on Vene street.", { cuisine: "pastry chocolate" }),
    place("ta-cafe-must", "Must Puudel", 59.4368, 24.7475, "cafe", "Cafe", "Old Town", 6, "Black Poodle cafe popular with locals.", { cuisine: "coffee brunch" }),
    place("ta-cafe-spritz", "Spritz Coffee", 59.4395, 24.7542, "cafe", "Cafe", "Rotermann", 6, "Specialty coffee in Rotermann.", { cuisine: "coffee" }),

    // ——— Food ———
    place("ta-food-farm", "Farm Restaurant", 59.4415, 24.7288, "food", "Restaurant", "Telliskivi", 8, "Modern Estonian tasting in Telliskivi.", { cuisine: "estonian" }),
    place("ta-food-leichner", "Leib Resto ja Aed", 59.4415, 24.7485, "food", "Restaurant", "Old Town", 8, "Garden restaurant with Estonian classics.", { cuisine: "estonian" }),
    place("ta-food-mee", "Meeleolu", 59.4372, 24.7468, "food", "Restaurant", "Old Town", 7, "Seasonal Estonian plates in Old Town.", { cuisine: "estonian" }),
    place("ta-food-rataskaevu", "Rataskaevu 16", 59.4365, 24.7425, "food", "Restaurant", "Old Town", 8, "Beloved Estonian home cooking — book ahead.", { cuisine: "estonian" }),
    place("ta-food- Lore", "Lore Bistroo", 59.4525, 24.7328, "food", "Restaurant", "Noblessner", 7, "Harbor bistro in Noblessner.", { cuisine: "european" }),
    place("ta-food-f-hoone", "F-hoone", 59.4418, 24.7282, "food", "Restaurant", "Telliskivi", 7, "Industrial-chic canteen in Telliskivi.", { cuisine: "european" }),
    place("ta-food-moon", "Moon", 59.4455, 24.7318, "food", "Restaurant", "Kalamaja", 8, "Russian-Estonian comfort food in Kalamaja.", { cuisine: "russian estonian" }),
    place("ta-food-põrgu", "Põrgu", 59.4368, 24.7448, "food", "Restaurant", "Old Town", 7, "Beer cellar with Estonian meats and ales.", { cuisine: "estonian" }),
    place("ta-food-vegan", "Vegan Restoran V", 59.4365, 24.7485, "food", "Restaurant", "Old Town", 6, "Plant-based Estonian twists.", { cuisine: "vegan" }),
    place("ta-food-sibul", "Sibulaküla lunch", 59.4335, 24.7525, "food", "Restaurant", "Center", 6, "Business-district lunch near Viru.", { cuisine: "european" }),
    place("ta-food-fish", "Fish & Wine", 59.4412, 24.7495, "food", "Restaurant", "Old Town", 7, "Seafood near Fat Margaret.", { cuisine: "seafood" }),
    place("ta-food-peatus", "Peatus Food Court", 59.4398, 24.7365, "food", "Quick meal", "Telliskivi", 6, "Station-area food hall near Balti Jaam.", { cuisine: "street_food" }),
    place("ta-food-kompott", "Kompott", 59.4375, 24.7472, "food", "Restaurant", "Old Town", 6, "Casual soups and salads in Old Town.", { cuisine: "european vegetarian" }),
    place("ta-food-kaks", "Kaks Kokka", 59.4368, 24.7438, "food", "Restaurant", "Old Town", 7, "Two Chefs modern Estonian.", { cuisine: "estonian" }),

    // ——— Nightlife ———
    place("ta-night-hellhunt", "Hell Hunt", 59.4385, 24.7468, "nightlife", "Bar", "Old Town", 7, "Friendly Old Town pub with Estonian craft beer."),
    place("ta-night-speak", "Speak Easy", 59.4372, 24.7445, "nightlife", "Bar", "Old Town", 7, "Hidden cocktail bar off the main square."),
    place("ta-night-club", "Club Hollywood", 59.4355, 24.7455, "nightlife", "Bar", "Old Town", 6, "Long-running Old Town dance club."),
    place("ta-night-sveta", "Sveta Baar", 59.4418, 24.7285, "nightlife", "Bar", "Telliskivi", 8, "Live music and DJ nights in Telliskivi."),
    place("ta-night-põhjala", "Põhjala Tap Room", 59.4525, 24.7185, "nightlife", "Bar", "Kalamaja", 8, "Flagship craft brewery taproom."),
    place("ta-night-frank", "Frank", 59.4378, 24.7485, "nightlife", "Bar", "Old Town", 6, "Cocktail bar on Vene street."),
    place("ta-night-loom", "Loom", 59.4415, 24.7292, "nightlife", "Bar", "Telliskivi", 6, "Relaxed Telliskivi beer garden."),
    place("ta-night-venus", "Venus Club", 59.4365, 24.7515, "nightlife", "Bar", "Center", 5, "Late club near Viru."),

    // ——— Stays ———
    place("ta-stay-telegraaf", "Hotel Telegraaf", 59.4375, 24.7465, "stay", "Hotel", "Old Town", 9, "Luxury stay in a former telegraph building."),
    place("ta-stay-schlössle", "Schlössle Hotel", 59.4385, 24.7445, "stay", "Hotel", "Old Town", 9, "Boutique manor hotel in Upper Old Town."),
    place("ta-stay-three", "Three Sisters Hotel", 59.4405, 24.7475, "stay", "Hotel", "Old Town", 8, "Merged medieval merchant houses."),
    place("ta-stay-swissotel", "Swissôtel Tallinn", 59.4335, 24.7615, "stay", "Hotel", "Center", 8, "High-rise rooms with bay views."),
    place("ta-stay-radisson", "Radisson Blu Hotel Olümpia", 59.4285, 24.7555, "stay", "Hotel", "Center", 7, "Classic business hotel south of Old Town."),
    place("ta-stay-merchant", "Merchant's House Hotel", 59.4378, 24.7458, "stay", "Hotel", "Old Town", 7, "Intimate Old Town boutique."),
    place("ta-stay-tab", "TAB Creative Hub Hotel", 59.4412, 24.7295, "stay", "Hotel", "Telliskivi", 7, "Design stay beside Telliskivi."),
    place("ta-stay-von", "Von Stackelberg Hotel", 59.4345, 24.7385, "stay", "Hotel", "Center", 7, "Historic hotel near Toompea."),
    place("ta-stay-hostel-old", "Old Town Boutique Hostel", 59.4365, 24.7475, "stay", "Hostel", "Old Town", 6, "Budget beds inside the walls."),
    place("ta-stay-hostel-kal", "Kalamaja Hostel", 59.4445, 24.7335, "stay", "Hostel", "Kalamaja", 5, "Neighbourhood hostel near Telliskivi."),
    place("ta-stay-guest", "Kadriorg Guest House", 59.4375, 24.7895, "stay", "Guest house", "Kadriorg", 6, "Quiet B&B near the palace park."),
    place("ta-stay-apt", "Old Town apartment", 59.4382, 24.7462, "stay", "Apartment", "Old Town", 7, "Self-catering flat above cobbled lanes."),
  ],
};
