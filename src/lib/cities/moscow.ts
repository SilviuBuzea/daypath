import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const moscow: CityCatalog = {
  id: "moscow",
  name: "Moscow, Russia",
  aliases: ["moscow", "moskva"],
  center: { lat: 55.7558, lon: 37.6173 },
  places: [
    // ——— Red Square / Kremlin ———
    place("mo-red-square", "Red Square", 55.7539, 37.6208, "sight", "Attraction", "Red Square", 10, "Core ceremonial square — visit early for photos without crowds.", { flags: ["early", "touristy"] }),
    place("mo-st-basil", "St. Basil's Cathedral", 55.7525, 37.6231, "sight", "Monument", "Red Square", 10, "Onion-dome icon — interior chapels are worth the ticket.", { flags: ["ticket", "touristy"] }),
    place("mo-lenin", "Lenin's Mausoleum", 55.7537, 37.6199, "sight", "Monument", "Red Square", 6, "Brief queue visit when open — check current hours."),
    place("mo-gum", "GUM", 55.7546, 37.6215, "shopping", "Mall", "Red Square", 8, "Historic arcade of shops and ice-cream stands on Red Square."),
    place("mo-kremlin", "Moscow Kremlin", 55.752, 37.6175, "sight", "Castle", "Kremlin", 10, "Fortress grounds, cathedrals, and Armoury — book timed tickets.", { flags: ["ticket", "early"] }),
    place("mo-armoury", "Armoury Chamber", 55.7498, 37.6135, "museum", "Museum", "Kremlin", 9, "Imperial crowns, Fabergé, and coronation regalia."),
    place("mo-diamond", "Diamond Fund", 55.7495, 37.6132, "museum", "Museum", "Kremlin", 8, "State jewels in a separate Kremlin ticketed hall."),
    place("mo-cathedral-square", "Cathedral Square", 55.7505, 37.6178, "sight", "Monument", "Kremlin", 9, "Cluster of Kremlin cathedrals around the central square."),
    place("mo-ivan", "Ivan the Great Bell Tower", 55.7508, 37.6185, "sight", "Viewpoint", "Kremlin", 7, "Tallest Kremlin tower when climbing is available."),
    place("mo-tsar-bell", "Tsar Bell & Tsar Cannon", 55.7508, 37.6182, "sight", "Monument", "Kremlin", 6, "Giant never-rung bell and ceremonial cannon photo stops."),
    place("mo-alexander", "Alexander Garden", 55.7525, 37.6135, "nature", "Park", "Kremlin", 7, "Eternal Flame and fortress walls west of Red Square."),
    place("mo-tomb", "Tomb of the Unknown Soldier", 55.7528, 37.6138, "sight", "Monument", "Kremlin", 7, "Honor guard at the Eternal Flame in Alexander Garden."),
    place("mo-historical", "State Historical Museum", 55.7553, 37.6177, "museum", "Museum", "Red Square", 8, "Red-brick museum anchoring the north end of the square."),
    place("mo-kazan", "Kazansky Cathedral (Red Square)", 55.7552, 37.6188, "sight", "Monument", "Red Square", 6, "Rebuilt church at the northeast corner of the square."),

    // ——— Kitay-gorod / Zaryadye ———
    place("mo-zaryadye", "Zaryadye Park", 55.7512, 37.6285, "nature", "Park", "Kitay-gorod", 9, "Floating bridge and climate zones beside the Kremlin."),
    place("mo-floating", "Zaryadye floating bridge", 55.7495, 37.6285, "sight", "Viewpoint", "Kitay-gorod", 8, "Cantilever walkway over the Moskva River."),
    place("mo-varvarka", "Varvarka Street churches", 55.7525, 37.6275, "sight", "Monument", "Kitay-gorod", 6, "Compact strip of restored churches near Zaryadye."),
    place("mo-kitay", "Kitay-gorod lanes", 55.7535, 37.6285, "sight", "Attraction", "Kitay-gorod", 5, "Historic streets east of Red Square between metro exits."),

    // ——— Bolshoi / Theatre ———
    place("mo-bolshoi", "Bolshoi Theatre", 55.7596, 37.6186, "sight", "Monument", "Theatre Square", 9, "Ballet and opera temple — facade photos or evening tickets."),
    place("mo-theatre-square", "Theatre Square", 55.7595, 37.6185, "sight", "Attraction", "Theatre Square", 6, "Fountain plaza between Bolshoi and Metropol."),
    place("mo-metropol", "Hotel Metropol exterior", 55.7585, 37.6215, "sight", "Monument", "Theatre Square", 5, "Art Nouveau landmark facing the Bolshoi."),
    place("mo-tsum", "TSUM", 55.7605, 37.6215, "shopping", "Mall", "Theatre Square", 6, "Luxury department store behind the Bolshoi."),

    // ——— Arbat ———
    place("mo-arbat", "Old Arbat Street", 55.752, 37.5915, "shopping", "Market", "Arbat", 8, "Pedestrian street of souvenirs, buskers, and cafes."),
    place("mo-new-arbat", "New Arbat Avenue", 55.7525, 37.5855, "shopping", "Market", "Arbat", 5, "Soviet-modern boulevard of shops west of the old street."),
    place("mo-pushkin-arbat", "Pushkin Memorial Flat", 55.7495, 37.5935, "museum", "Museum", "Arbat", 6, "Poet's apartment museum just off Arbat."),
    place("mo-wall", "Viktor Tsoi Wall", 55.7498, 37.5905, "sight", "Attraction", "Arbat", 6, "Graffiti memorial wall on Krivoarbatsky Lane."),
    place("mo-ministry", "Ministry of Foreign Affairs Stalin high-rise", 55.7455, 37.5845, "sight", "Monument", "Arbat", 6, "One of the Seven Sisters towers near Smolenskaya."),

    // ——— Patriarch Ponds / Tverskaya ———
    place("mo-patriarch", "Patriarch Ponds", 55.7635, 37.5925, "nature", "Park", "Patriarch Ponds", 7, "Bulgakov's pond neighborhood of cafes and quiet paths."),
    place("mo-bulgakov", "Bulgakov House Museum", 55.7665, 37.5935, "museum", "Museum", "Patriarch Ponds", 6, "Master and Margarita lore in a courtyard museum."),
    place("mo-tverskaya", "Tverskaya Street stroll", 55.7585, 37.6055, "shopping", "Market", "Tverskaya", 7, "Main artery from the Kremlin toward Pushkin Square."),
    place("mo-pushkin-square", "Pushkin Square", 55.7655, 37.6055, "sight", "Attraction", "Tverskaya", 6, "Busy square with statue and underpasses."),
    place("mo-moscow-museum", "Museum of Moscow", 55.7355, 37.5935, "museum", "Museum", "Zamoskvorechye", 5, "City history collections south of the river."),

    // ——— VDNH / North ———
    place("mo-vdnh", "VDNKh exhibition grounds", 55.8295, 37.6315, "sight", "Attraction", "VDNKh", 9, "Vast Soviet pavilions, fountains, and weekend crowds."),
    place("mo-worker", "Worker and Kolkhoz Woman", 55.8285, 37.6455, "sight", "Monument", "VDNKh", 7, "Iconic stainless-steel sculpture near the VDNKh entrance."),
    place("mo-cosmos", "Museum of Cosmonautics", 55.8225, 37.6395, "museum", "Museum", "VDNKh", 8, "Space race museum under the titanium rocket monument."),
    place("mo-ostankino", "Ostankino Tower viewpoint", 55.8195, 37.6115, "sight", "Viewpoint", "VDNKh", 7, "Tall TV tower observation when open to visitors."),
    place("mo-botanical", "Moscow Botanical Garden", 55.8385, 37.6015, "nature", "Garden", "VDNKh", 6, "Large gardens north of VDNKh for a green half-day."),

    // ——— Zamoskvorechye / Tretyakov ———
    place("mo-tretyakov", "Tretyakov Gallery", 55.7415, 37.6208, "museum", "Museum", "Zamoskvorechye", 10, "Best Russian art from icons to Repin — flagship collection."),
    place("mo-tretyakov-new", "New Tretyakov / Krymsky Val", 55.7345, 37.6055, "museum", "Museum", "Muzeon", 8, "20th-century Russian art beside Muzeon Park."),
    place("mo-muzeon", "Muzeon Park of Arts", 55.7345, 37.6065, "nature", "Park", "Muzeon", 7, "Outdoor sculpture park along the river."),
    place("mo-gorky", "Gorky Park", 55.7312, 37.6015, "nature", "Park", "Gorky Park", 8, "Riverside park with bikes, food, and winter ice rink."),
    place("mo-krymsky", "Krymsky Bridge walk", 55.734, 37.6085, "sight", "Attraction", "Muzeon", 6, "Pedestrian crossing between Muzeon and Park Kultury."),
    place("mo-zamoskvorechye", "Zamoskvorechye lanes", 55.7395, 37.6255, "sight", "Attraction", "Zamoskvorechye", 6, "Quiet merchant streets and churches south of the Kremlin."),

    // ——— Metro / other sights ———
    place("mo-metro-komsomol", "Komsomolskaya metro hall", 55.7745, 37.6545, "sight", "Monument", "Komsomolskaya", 8, "Baroque-palace metro station under three rail terminals."),
    place("mo-metro-mayak", "Mayakovskaya metro", 55.7695, 37.5955, "sight", "Monument", "Tverskaya", 7, "Art Deco mosaics in a classic Stalin-era station."),
    place("mo-metro-novoslob", "Novoslobodskaya metro", 55.7795, 37.6015, "sight", "Monument", "Novoslobodskaya", 6, "Stained-glass panels in the circular station hall."),
    place("mo-christ", "Cathedral of Christ the Saviour", 55.7445, 37.6055, "sight", "Monument", "Kropotkinskaya", 8, "Rebuilt riverside cathedral with dome viewpoints."),
    place("mo-puskinsky", "Pushkin Museum of Fine Arts", 55.7472, 37.6052, "museum", "Museum", "Kropotkinskaya", 8, "European masters opposite Christ the Saviour."),
    place("mo-garage", "Garage Museum of Contemporary Art", 55.7295, 37.6015, "museum", "Museum", "Gorky Park", 7, "Contemporary art in Gorky Park's hex pavilion."),
    place("mo-jewish", "Jewish Museum & Tolerance Center", 55.7865, 37.6085, "museum", "Museum", "Prospekt Mira", 7, "Interactive Jewish history museum north of the center."),
    place("mo-bunker", "Bunker-42 Cold War Museum", 55.7285, 37.6455, "museum", "Museum", "Taganka", 6, "Underground Cold War bunker tours by appointment."),
    place("mo-kolomenskoye", "Kolomenskoye Estate", 55.6675, 37.6715, "nature", "Park", "Kolomenskoye", 7, "UNESCO wooden church and riverside estate park south."),
    place("mo-tsaritsyno", "Tsaritsyno Park", 55.6155, 37.6825, "nature", "Park", "Tsaritsyno", 7, "Grand palace park with bridges and lakes further south."),
    place("mo-novodevichy", "Novodevichy Convent", 55.7262, 37.5565, "sight", "Monument", "Novodevichy", 8, "UNESCO convent walls, cemetery, and pond views."),
    place("mo-sparrow", "Sparrow Hills viewpoint", 55.7095, 37.5425, "sight", "Viewpoint", "Sparrow Hills", 8, "City panorama above Luzhniki and the river bend."),
    place("mo-moscow-city", "Moscow City skyline", 55.7495, 37.5375, "sight", "Viewpoint", "Moscow City", 7, "Glass towers of the business district from the embankment."),
    place("mo-vystavka", "Observation Deck PANORAMA 360", 55.7498, 37.5372, "sight", "Viewpoint", "Moscow City", 7, "Indoor deck high in Federation Tower."),
    place("mo-winzavod", "Winzavod & Artplay", 55.7585, 37.6655, "museum", "Museum", "Kurskaya", 6, "Former industrial art cluster east of the center."),

    // ——— Cafes ———
    place("mo-coffee-bean", "Coffee Bean Arbat", 55.7515, 37.5925, "cafe", "Cafe", "Arbat", 6, "Long-running cafe stop mid-Arbat stroll.", { cuisine: "coffee" }),
    place("mo-pushechny", "Coffee Shop Company / Kuznetsky", 55.7615, 37.6215, "cafe", "Cafe", "Theatre Square", 5, "Quick espresso between Bolshoi and Lubyanka.", { cuisine: "coffee" }),
    place("mo-varenichnaya", "Varenichnaya No.1", 55.7518, 37.5935, "cafe", "Cafe", "Arbat", 6, "Dumpling cafe atmosphere with tea and syrniki.", { cuisine: "russian pastry" }),
    place("mo-muraveynik", "Muraveynik pastry", 55.7635, 37.6055, "cafe", "Cafe", "Tverskaya", 5, "Soviet-nostalgia sweets near Pushkin Square.", { cuisine: "pastry coffee" }),
    place("mo-gelato", "GUM ice cream kiosk", 55.7545, 37.6212, "cafe", "Cafe", "Red Square", 6, "Classic waffle-cup ice cream inside GUM.", { cuisine: "ice_cream" }),

    // ——— Food ———
    place("mo-cafe-pushkin", "Café Pushkin", 55.7625, 37.6045, "food", "Restaurant", "Tverskaya", 8, "Imperial-library dining for Russian classics.", { cuisine: "russian fine_dining" }),
    place("mo-dr-zhivago", "Dr. Zhivago", 55.7575, 37.6145, "food", "Restaurant", "Tverskaya", 8, "Red-and-white Soviet chic near Red Square.", { cuisine: "russian" }),
    place("mo-selfedge", "Selfie / riverside modern", 55.7485, 37.6085, "food", "Restaurant", "Kropotkinskaya", 6, "Contemporary rooms with Kremlin-side views.", { cuisine: "european russian" }),
    place("mo-stolovaya", "Stolovaya 57 (GUM)", 55.7548, 37.6218, "food", "Quick meal", "Red Square", 7, "Retro canteen upstairs in GUM for pelmeni and salads.", { cuisine: "russian canteen" }),
    place("mo-pelmeni", "Pelmeniya", 55.7525, 37.5925, "food", "Quick meal", "Arbat", 6, "Fast dumplings during an Arbat walk.", { cuisine: "russian dumplings" }),
    place("mo-khachapuri", "Khachapuri bakery", 55.7615, 37.6015, "food", "Quick meal", "Tverskaya", 6, "Georgian cheese bread for a hearty lunch.", { cuisine: "georgian" }),
    place("mo-georgian", "Cafe Khachapuri / Genatsvale strip", 55.7505, 37.5915, "food", "Restaurant", "Arbat", 7, "Lively Georgian feasts near Old Arbat.", { cuisine: "georgian" }),
    place("mo-uzbek", "Uzbekistan Restaurant", 55.7655, 37.6215, "food", "Restaurant", "Theatre Square", 7, "Plov and lagman in an ornate Central Asian room.", { cuisine: "uzbek central_asian" }),
    place("mo-white-rabbit", "White Rabbit", 55.7475, 37.5685, "food", "Restaurant", "Smolenskaya", 8, "Rooftop fine dining with panoramic city views.", { cuisine: "russian fine_dining" }),
    place("mo-syrovarnya", "Syrovarnya", 55.7345, 37.6015, "food", "Restaurant", "Gorky Park", 6, "Cheese-focused casual dining near Gorky Park.", { cuisine: "european cheese" }),
    place("mo-market", "Danilovsky Market food hall", 55.7115, 37.6215, "food", "Quick meal", "Danilovsky", 7, "Renovated market stalls for a varied lunch crawl.", { cuisine: "market russian" }),
    place("mo-veg", "Jagannath", 55.7635, 37.6155, "food", "Restaurant", "Kitay-gorod", 5, "Vegetarian Indian-leaning plates near the center.", { cuisine: "vegetarian indian" }),

    // ——— Nightlife ———
    place("mo-strelka", "Strelka Bar", 55.7415, 37.6095, "nightlife", "Bar", "Muzeon", 7, "Institute rooftop and bar energy by the river."),
    place("mo-time-out", "Time Out Rooftop Bar", 55.7585, 37.6155, "nightlife", "Bar", "Tverskaya", 7, "City views and cocktails near the Kremlin axis."),
    place("mo-chinese-pilot", "Chinese Pilot Jao Da", 55.7615, 37.6355, "nightlife", "Bar", "Kitay-gorod", 6, "Long-running alternative club nights."),
    place("mo-gipsy", "Gipsy", 55.7445, 37.5755, "nightlife", "Bar", "Moscow City", 6, "Boat club parties on the river embankment."),
    place("mo-arbat-jazz", "Arbat jazz / live rooms", 55.7515, 37.5918, "nightlife", "Bar", "Arbat", 6, "Small live-music bars off the pedestrian street."),
    place("mo-patriarch-night", "Patriarch Ponds evening bars", 55.7635, 37.5928, "nightlife", "Bar", "Patriarch Ponds", 7, "Cafe terraces circling the pond after dark."),

    // ——— Stays ———
    place("mo-stay-metropol", "Hotel Metropol Moscow", 55.7585, 37.6215, "stay", "Hotel", "Theatre Square", 9, "Art Nouveau grande dame facing the Bolshoi."),
    place("mo-stay-national", "Hotel National", 55.7565, 37.6135, "stay", "Hotel", "Tverskaya", 9, "Historic rooms with Kremlin views."),
    place("mo-stay-ritz", "The Ritz-Carlton Moscow", 55.7575, 37.6145, "stay", "Hotel", "Tverskaya", 9, "Luxury base steps from Red Square."),
    place("mo-stay-st-regis", "The St. Regis Moscow Nikolskaya", 55.7575, 37.6235, "stay", "Hotel", "Kitay-gorod", 8, "Nikolskaya Street luxury near GUM."),
    place("mo-stay-arbat", "Arbat Hotel", 55.7515, 37.5885, "stay", "Hotel", "Arbat", 7, "Practical mid-range on the New Arbat axis."),
    place("mo-stay-garden", "Hotel Garden Ring", 55.7655, 37.6455, "stay", "Hotel", "Garden Ring", 6, "Business hotel on the ring for metro access."),
    place("mo-stay-hostel", "Godzillas Hostel", 55.7695, 37.6015, "stay", "Hostel", "Tverskaya", 6, "Long-running hostel near Mayakovskaya."),
    place("mo-stay-hi", "Hi Moscow Hostel", 55.7555, 37.6255, "stay", "Hostel", "Kitay-gorod", 5, "Budget beds within walking reach of Red Square."),
    place("mo-stay-patriarch", "Patriarch Ponds boutique", 55.7638, 37.5915, "stay", "Hotel", "Patriarch Ponds", 7, "Quiet boutique nights by the ponds."),
    place("mo-stay-gorky", "Gorky Park apartment", 55.7325, 37.6015, "stay", "Apartment", "Gorky Park", 6, "Self-catering for park and Tretyakov days."),
    place("mo-stay-city", "Moscow City hotel", 55.7485, 37.5365, "stay", "Hotel", "Moscow City", 6, "Tower hotel for skyline mornings."),
    place("mo-stay-vdnh", "Cosmos Hotel", 55.8225, 37.6455, "stay", "Hotel", "VDNKh", 5, "Large Soviet-era hotel beside VDNKh and Cosmonautics."),
  ],
};
