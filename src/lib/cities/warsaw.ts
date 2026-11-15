import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const warsaw: CityCatalog = {
  id: "warsaw",
  name: "Warsaw, Poland",
  aliases: ["warsaw", "warszawa"],
  center: { lat: 52.2297, lon: 21.0122 },
  places: [
    // ——— Old Town / Stare Miasto ———
    place("war-old", "Old Town Market Square", 52.2496, 21.0128, "sight", "Attraction", "Stare Miasto", 10, "Rebuilt colourful square — Warsaw's postcard after WWII."),
    place("war-castle", "Royal Castle", 52.2477, 21.0145, "sight", "Castle", "Stare Miasto", 9, "Reconstructed royal residence on Castle Square."),
    place("war-sigismund", "Sigismund's Column", 52.2475, 21.0135, "sight", "Monument", "Stare Miasto", 7, "Landmark column on Castle Square."),
    place("war-barbican", "Barbican", 52.2515, 21.0115, "sight", "Monument", "Stare Miasto", 7, "Brick fortification linking Old and New Town."),
    place("war-stjohn", "St. John's Archcathedral", 52.2488, 21.0138, "sight", "Monument", "Stare Miasto", 7, "Brick Gothic cathedral on Świętojańska."),
    place("war-newtown", "New Town Market Square", 52.2535, 21.0085, "sight", "Attraction", "Nowe Miasto", 7, "Quieter rebuilt square north of the Barbican."),
    place("war-marie", "Marie Curie Museum", 52.2532, 21.0075, "museum", "Museum", "Nowe Miasto", 6, "Birthplace museum of the Nobel physicist."),
    place("war-walls", "Defensive walls walk", 52.2505, 21.0125, "sight", "Attraction", "Stare Miasto", 6, "Brick ramparts around the Old Town core."),
    place("war-kanonia", "Kanonia Square", 52.2492, 21.0145, "sight", "Attraction", "Stare Miasto", 6, "Tiny square with a legendary cracked bell."),
    place("war-vista", "Old Town Vistula viewpoint", 52.2485, 21.0165, "sight", "Viewpoint", "Stare Miasto", 7, "Lookout over the river from the castle gardens edge."),

    // ——— Royal Route ———
    place("war-krakowskie", "Krakowskie Przedmieście", 52.2415, 21.0165, "sight", "Attraction", "Śródmieście", 8, "Royal Route boulevard of churches, palaces, and cafés."),
    place("war-presidential", "Presidential Palace", 52.2425, 21.0155, "sight", "Monument", "Śródmieście", 6, "Neoclassical seat of the Polish president."),
    place("war-holy-cross", "Holy Cross Church", 52.2395, 21.0175, "sight", "Monument", "Śródmieście", 7, "Chopin's heart rests in a church pillar here."),
    place("war-university", "University of Warsaw campus", 52.2395, 21.0185, "sight", "Attraction", "Śródmieście", 6, "Gates and courtyards on the Royal Route."),
    place("war-nowy", "Nowy Świat street", 52.2345, 21.0195, "shopping", "Market", "Śródmieście", 7, "Cafés and shops continuing the Royal Route south."),
    place("war-copernicus", "Copernicus Science Centre", 52.2418, 21.0285, "museum", "Museum", "Powiśle", 8, "Hands-on science museum on the Vistula."),
    place("war-chopin", "Chopin Museum", 52.2355, 21.0235, "museum", "Museum", "Śródmieście", 8, "Interactive museum in the Ostrogski Palace."),
    place("war-national", "National Museum in Warsaw", 52.2315, 21.0255, "museum", "Museum", "Śródmieście", 8, "Polish and European art on Aleje Jerozolimskie."),
    place("war-zachęta", "Zachęta National Gallery", 52.2395, 21.0115, "museum", "Museum", "Śródmieście", 7, "Contemporary exhibitions near the Saxon Garden."),
    place("war-saxon", "Saxon Garden", 52.2405, 21.0095, "nature", "Park", "Śródmieście", 7, "Baroque park with the Tomb of the Unknown Soldier."),
    place("war-tomb", "Tomb of the Unknown Soldier", 52.2412, 21.0085, "sight", "Monument", "Śródmieście", 7, "Eternal flame under Saxon Palace fragments."),
    place("war-pilsudski", "Piłsudski Square", 52.241, 21.0075, "sight", "Attraction", "Śródmieście", 6, "Vast parade square by the Saxon Garden."),

    // ——— Palace of Culture / Centre ———
    place("war-pkin", "Palace of Culture and Science", 52.2319, 21.0067, "sight", "Attraction", "Center", 8, "Stalinist skyscraper with a 30th-floor viewing terrace."),
    place("war-parade", "Parade Square (Plac Defilad)", 52.2315, 21.0055, "sight", "Attraction", "Center", 5, "Open plaza at the foot of the Palace of Culture."),
    place("war-zlote", "Złote Tarasy", 52.2295, 21.0025, "shopping", "Market", "Center", 5, "Glass mall beside Warszawa Centralna station."),
    place("war-centralna", "Warszawa Centralna station", 52.2288, 21.0032, "sight", "Attraction", "Center", 5, "Main rail hub under the city core."),
    place("war-fotoplastikon", "Fotoplastikon Warszawski", 52.2285, 21.0125, "museum", "Museum", "Śródmieście", 6, "Antique 3D photo viewer showing old Warsaw."),

    // ——— Łazienki / South ———
    place("war-lazienki", "Łazienki Park", 52.215, 21.035, "nature", "Park", "Łazienki", 10, "Palace-on-the-Island park — peacocks and Sunday Chopin concerts."),
    place("war-palace-island", "Palace on the Island", 52.2145, 21.0355, "sight", "Monument", "Łazienki", 9, "Neoclassical palace reflected in the Łazienki lake."),
    place("war-chopin-bench", "Chopin monument Łazienki", 52.2165, 21.0325, "sight", "Monument", "Łazienki", 7, "Iconic willow-and-pianist sculpture."),
    place("war-belweder", "Belweder Palace", 52.2185, 21.0285, "sight", "Monument", "Łazienki", 6, "Presidential residence at the park's edge."),
    place("war-uzazdowski", "Ujazdowski Castle Centre for Contemporary Art", 52.2195, 21.0265, "museum", "Museum", "Łazienki", 6, "Contemporary art in a baroque castle."),
    place("war-botanic", "University Botanical Garden", 52.2165, 21.0285, "nature", "Garden", "Łazienki", 6, "Glasshouses beside Łazienki."),
    place("war-wilanow", "Wilanów Palace", 52.1652, 21.0905, "sight", "Castle", "Wilanów", 9, "Baroque 'Polish Versailles' — allow a half-day trip south."),
    place("war-wilanow-park", "Wilanów Park & gardens", 52.1645, 21.0915, "nature", "Garden", "Wilanów", 8, "Formal gardens and lake around the palace."),
    place("war-wilanow-museum", "Poster Museum Wilanów", 52.1635, 21.0885, "museum", "Museum", "Wilanów", 6, "Polish poster art beside the palace grounds."),

    // ——— Museums of memory ———
    place("war-polin", "POLIN Museum of the History of Polish Jews", 52.2495, 20.993, "museum", "Museum", "Muranów", 10, "Essential museum on the former ghetto site."),
    place("war-uprising", "Warsaw Uprising Museum", 52.2325, 20.981, "museum", "Museum", "Wola", 9, "Immersive 1944 uprising museum — book ahead."),
    place("war-ghetto", "Ghetto Heroes Monument", 52.2505, 20.9945, "sight", "Monument", "Muranów", 7, "Memorial plaza facing POLIN."),
    place("war-umschlagplatz", "Umschlagplatz Monument", 52.2525, 20.9885, "sight", "Monument", "Muranów", 7, "Deportation memorial on the former rail siding."),
    place("war-pniewski", "Pawiak Prison Museum", 52.2465, 20.9885, "museum", "Museum", "Muranów", 6, "Gestapo prison museum remnants."),
    place("war-jewish", "Nożyk Synagogue", 52.2355, 21.0025, "sight", "Monument", "Śródmieście", 6, "Only surviving prewar synagogue in central Warsaw."),
    place("war-neon", "Neon Museum", 52.2475, 21.0555, "museum", "Museum", "Praga", 7, "Communist-era neon signs in a Praga factory."),

    // ——— Powiśle / Vistula ———
    place("war-vistula", "Vistula boulevards", 52.24, 21.03, "nature", "Park", "Powiśle", 8, "River promenade with bars, bikes, and summer beaches."),
    place("war-library", "University of Warsaw Library garden", 52.2425, 21.0255, "nature", "Garden", "Powiśle", 7, "Rooftop garden with city views."),
    place("war-multimedia", "Multimedia Fountain Park", 52.2365, 21.0455, "sight", "Attraction", "Praga", 6, "Evening water-and-light shows across the river."),
    place("war-poniatówka", "Poniatówka beach", 52.2315, 21.0485, "nature", "Park", "Praga", 6, "Sandy Vistula beach with summer bars."),
    place("war-swietokrzyski", "Świętokrzyski Bridge walk", 52.2365, 21.0325, "sight", "Attraction", "Powiśle", 5, "Crossing with skyline views of the centre."),

    // ——— Praga ———
    place("war-praga", "Praga district streets", 52.2505, 21.0455, "sight", "Attraction", "Praga", 7, "Prewar tenements, murals, and indie venues east of the river."),
    place("war-zoo", "Warsaw Zoo", 52.2575, 21.0225, "sight", "Attraction", "Praga", 6, "Historic zoo on the Praga riverbank."),
    place("war-basilica-praga", "St. Florian's Cathedral", 52.2515, 21.0385, "sight", "Monument", "Praga", 6, "Twin-spired neo-Gothic landmark of Praga."),
    place("war-soho", "Soho Factory complex", 52.2478, 21.0558, "sight", "Attraction", "Praga", 6, "Post-industrial arts and the Neon Museum."),
    place("war-rozyckiego", "Różyckiego Bazaar area", 52.2555, 21.0425, "shopping", "Market", "Praga", 5, "Old Praga market lanes."),

    // ——— Mokotów / other parks ———
    place("war-mokotow", "Park Morskie Oko", 52.2055, 21.0255, "nature", "Park", "Mokotów", 6, "Romantic park with a pond in Mokotów."),
    place("war-agronomy", "Agrykola Park", 52.2185, 21.0325, "nature", "Park", "Łazienki", 5, "Green link toward Łazienki and the citadel."),
    place("war-citadel", "Warsaw Citadel / Muzeum Katyńskie area", 52.2645, 21.0055, "museum", "Museum", "Żoliborz", 6, "Fortress museums on the northern edge."),
    place("war-zoliborz", "Żoliborz greens", 52.2685, 20.9955, "nature", "Park", "Żoliborz", 5, "Garden-city residential parks north of the centre."),

    // ——— Shopping ———
    place("war-hale", "Hala Koszyki", 52.2235, 21.0155, "shopping", "Market", "Śródmieście", 7, "Restored market hall of food stalls and design shops."),
    place("war-hale-mirow", "Hale Mirowskie", 52.2385, 20.9985, "shopping", "Market", "Wola", 6, "Historic twin market halls."),
    place("war-nowy-swiat-shops", "Chmielna street shops", 52.2325, 21.0155, "shopping", "Market", "Śródmieście", 6, "Pedestrian shopping parallel to Nowy Świat."),

    // ——— Cafes ———
    place("war-cafe-charlotte", "Café Charlotte", 52.2365, 21.0175, "cafe", "Cafe", "Śródmieście", 7, "Courtyard bakery café on the Royal Route.", { cuisine: "bakery coffee" }),
    place("war-cafe-nowy", "Nowy Świat coffee strip", 52.2348, 21.0192, "cafe", "Cafe", "Śródmieście", 6, "Specialty coffee along Nowy Świat.", { cuisine: "coffee" }),
    place("war-cafe-ministerstwo", "Ministerstwo Kawy", 52.2285, 21.0185, "cafe", "Cafe", "Śródmieście", 7, "Third-wave coffee institution.", { cuisine: "coffee" }),
    place("war-cafe-forum", "Forum Coffee", 52.2335, 21.0125, "cafe", "Cafe", "Center", 6, "Central espresso bar near the Palace.", { cuisine: "coffee" }),
    place("war-cafe-praga", "Praga café courtyards", 52.2515, 21.0445, "cafe", "Cafe", "Praga", 6, "Indie coffee in post-industrial yards.", { cuisine: "coffee" }),
    place("war-cafe-powisle", "Powiśle café by the river", 52.2385, 21.0285, "cafe", "Cafe", "Powiśle", 6, "Laptop-friendly coffee near the boulevards.", { cuisine: "coffee" }),

    // ——— Food ———
    place("war-food-milk", "Bar Mleczny Prasowy", 52.2255, 21.0185, "food", "Quick meal", "Śródmieście", 7, "Classic milk-bar pierogi and schnitzel.", { cuisine: "polish" }),
    place("war-food-zajazd", "Zapiecek pierogi", 52.2485, 21.0125, "food", "Restaurant", "Stare Miasto", 6, "Pierogi chain handy in the Old Town.", { cuisine: "polish" }),
    place("war-food-oberza", "Oberża pod Czerwonym Wieprzem", 52.2355, 21.0085, "food", "Restaurant", "Śródmieście", 7, "Hearty Polish classics with vintage décor.", { cuisine: "polish" }),
    place("war-food-hale", "Hala Koszyki stalls", 52.2238, 21.0158, "food", "Quick meal", "Śródmieście", 7, "Global and Polish bites in the food hall.", { cuisine: "market polish" }),
    place("war-food-bialy", "Biały Kruk / Old Town polish", 52.2495, 21.0135, "food", "Restaurant", "Stare Miasto", 6, "Traditional plates on the market square edge.", { cuisine: "polish" }),
    place("war-food-bez", "Bez Gwiazdek", 52.2325, 21.0225, "food", "Restaurant", "Śródmieście", 7, "Modern Polish near the Chopin Museum.", { cuisine: "polish" }),
    place("war-food-elbe", "El Popo / Mexican Powiśle", 52.2375, 21.0275, "food", "Restaurant", "Powiśle", 5, "Casual riverside dinner option.", { cuisine: "mexican" }),
    place("war-food-bengal", "Bengal / Indian centre", 52.2295, 21.0125, "food", "Restaurant", "Center", 5, "Reliable curry near the Palace of Culture.", { cuisine: "indian" }),
    place("war-food-sukienna", "Stary Dom", 52.2155, 21.0285, "food", "Restaurant", "Łazienki", 7, "Classic Polish near Łazienki Park.", { cuisine: "polish" }),
    place("war-food-praga", "Praga brewery dinner", 52.2525, 21.0485, "food", "Restaurant", "Praga", 6, "Gastropub plates in the east-bank scene.", { cuisine: "polish european" }),
    place("war-food-pastry", "Wedel chocolate lounge", 52.2315, 21.0155, "food", "Quick meal", "Śródmieście", 7, "Historic Polish chocolate and hot cocoa.", { cuisine: "chocolate pastry" }),
    place("war-food-kebab", "Zapiekanka / street snacks", 52.2498, 21.0115, "food", "Quick meal", "Stare Miasto", 5, "Quick Polish street snacks near the square.", { cuisine: "polish street_food" }),
    place("war-food-n31", "Nolita Restaurant", 52.2285, 21.0188, "food", "Restaurant", "Śródmieście", 8, "Refined modern Polish tasting menus.", { cuisine: "polish" }),

    // ——— Nightlife ———
    place("war-night-powisle", "Powiśle boulevard bars", 52.2385, 21.0295, "nightlife", "Bar", "Powiśle", 8, "Summer river bars along the Vistula."),
    place("war-night-praga", "Praga nightlife", 52.2508, 21.0465, "nightlife", "Bar", "Praga", 7, "Clubs and indie bars across the river."),
    place("war-night-pawl", "Pawilony / Nowy Świat pubs", 52.2345, 21.0185, "nightlife", "Bar", "Śródmieście", 7, "Courtyard pub cluster off Nowy Świat."),
    place("war-night-level", "Level 27 / sky bars", 52.2325, 21.0025, "nightlife", "Bar", "Center", 6, "High-rise cocktails near the Palace."),
    place("war-night-smolna", "Smolna / club nights", 52.2315, 21.0225, "nightlife", "Bar", "Śródmieście", 6, "Central club street energy."),
    place("war-night-old", "Old Town evening terraces", 52.2495, 21.0125, "nightlife", "Bar", "Stare Miasto", 5, "Tourist-heavy square bars after dark."),
    place("war-night-hala", "Hala Koszyki evening", 52.2235, 21.0162, "nightlife", "Bar", "Śródmieście", 6, "Wine bars inside the market hall."),
    place("war-night-wg", "WG / live music Praga", 52.2495, 21.0525, "nightlife", "Bar", "Praga", 6, "Live gigs in the Praga warehouse scene."),

    // ——— Stays ———
    place("war-stay-raffles", "Raffles Europejski Warsaw", 52.2425, 21.0148, "stay", "Hotel", "Śródmieście", 9, "Landmark luxury on the Royal Route."),
    place("war-stay-bristol", "Hotel Bristol", 52.2428, 21.0152, "stay", "Hotel", "Śródmieście", 9, "Belle Époque grande dame by the Presidential Palace."),
    place("war-stay-puro", "Puro Warszawa Centrum", 52.2335, 21.0125, "stay", "Hotel", "Center", 7, "Design hotel near the Palace of Culture."),
    place("war-stay-hilton", "Hilton Warsaw City", 52.2285, 20.9855, "stay", "Hotel", "Wola", 7, "Modern tower near the Uprising Museum."),
    place("war-stay-mamaison", "Mamaison Hotel Le Regina", 52.2525, 21.0085, "stay", "Hotel", "Nowe Miasto", 8, "Boutique hotel in the New Town."),
    place("war-stay-inter", "InterContinental Warsaw", 52.2325, 21.0028, "stay", "Hotel", "Center", 8, "High-rise rooms with Palace views."),
    place("war-stay-oeki", "Oki Doki Old Town Hostel", 52.2485, 21.0115, "stay", "Hostel", "Stare Miasto", 6, "Social hostel steps from the Old Town."),
    place("war-stay-dream", "Dream Hostel Warsaw", 52.2365, 21.0155, "stay", "Hostel", "Śródmieście", 6, "Central hostel on the Royal Route edge."),
    place("war-stay-apart", "Old Town apartment", 52.2492, 21.0122, "stay", "Apartment", "Stare Miasto", 7, "Self-catering inside the rebuilt walls."),
    place("war-stay-powisle", "Powiśle boutique hotel", 52.2375, 21.0265, "stay", "Hotel", "Powiśle", 7, "River-district base near the boulevards."),
    place("war-stay-praga", "Praga loft stay", 52.2512, 21.0475, "stay", "Apartment", "Praga", 6, "Industrial-chic flat east of the Vistula."),
  ],
};
