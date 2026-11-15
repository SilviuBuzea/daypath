import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const helsinki: CityCatalog = {
  id: "helsinki",
  name: "Helsinki, Finland",
  aliases: ["helsinki", "helsingfors"],
  center: { lat: 60.1699, lon: 24.9384 },
  places: [
    // ——— Senate Square / Kruununhaka ———
    place("hel-cathedral", "Helsinki Cathedral", 60.1704, 24.9522, "sight", "Monument", "Kruununhaka", 10, "White neoclassical dome above Senate Square — the city's symbol."),
    place("hel-senate", "Senate Square", 60.1698, 24.9522, "sight", "Attraction", "Kruununhaka", 9, "Engel-designed plaza with cathedral, university, and government."),
    place("hel-gov", "Government Palace", 60.1695, 24.9535, "sight", "Monument", "Kruununhaka", 6, "Empire-style ministries framing Senate Square."),
    place("hel-university", "University of Helsinki main building", 60.1695, 24.9505, "sight", "Monument", "Kruununhaka", 6, "Classical facade opposite the cathedral steps."),
    place("hel-sederholm", "Sederholm House", 60.1688, 24.9535, "museum", "Museum", "Kruununhaka", 5, "Oldest stone house in Helsinki on the square edge."),
    place("hel-tuomiokirkko-crypt", "Cathedral crypt exhibitions", 60.1702, 24.9518, "museum", "Museum", "Kruununhaka", 5, "Occasional shows beneath the cathedral."),

    // ——— Market Square / Harbour ———
    place("hel-kauppatori", "Market Square (Kauppatori)", 60.1674, 24.9527, "shopping", "Market", "Kauppatori", 8, "Harbour stalls for berries, salmon soup, and ferry tickets."),
    place("hel-oldmarket", "Old Market Hall", 60.1662, 24.9535, "shopping", "Market", "Kauppatori", 8, "Indoor hall of cheese, reindeer, and coffee by the harbour."),
    place("hel-uss", "Uspenski Cathedral", 60.1685, 24.9615, "sight", "Monument", "Katajanokka", 8, "Red-brick Orthodox cathedral with golden cupolas."),
    place("hel-katajanokka", "Katajanokka Jugend houses", 60.1675, 24.9655, "sight", "Attraction", "Katajanokka", 6, "Art Nouveau apartment blocks on the eastern peninsula."),
    place("hel-icebreakers", "Katajanokka icebreaker quay", 60.1655, 24.9685, "sight", "Attraction", "Katajanokka", 5, "Docked icebreakers visible from the harbour walk."),
    place("hel-olympic", "Olympic Terminal / ferry docks", 60.1625, 24.9585, "sight", "Attraction", "Kauppatori", 5, "Tallinn and Stockholm ferry gateway."),

    // ——— Esplanadi / Kluuvi ———
    place("hel-esplanadi", "Esplanadi Park", 60.1675, 24.9475, "nature", "Park", "Center", 8, "Tree-lined promenade between shopping streets and the harbour."),
    place("hel-ateneum", "Ateneum Art Museum", 60.1702, 24.944, "museum", "Museum", "Kluuvi", 8, "Finnish Golden Age painting beside the Central Station."),
    place("hel-kiasma", "Kiasma Contemporary Art Museum", 60.1715, 24.9365, "museum", "Museum", "Töölönlahti", 7, "Contemporary art in Steven Holl's curved museum."),
    place("hel-station", "Helsinki Central Station", 60.172, 24.9415, "sight", "Monument", "Kluuvi", 7, "Saarinen's granite station with the famous stone men."),
    place("hel-stockmann", "Stockmann department store", 60.1685, 24.9425, "shopping", "Market", "Kluuvi", 6, "Flagship Finnish department store on Aleksanterinkatu."),
    place("hel-aleksi", "Aleksanterinkatu", 60.1688, 24.9485, "shopping", "Market", "Kluuvi", 6, "Main shopping street between Senate Square and Kamppi."),
    place("hel-national", "National Museum of Finland", 60.1748, 24.9295, "museum", "Museum", "Töölö", 8, "Finnish history under a National Romantic tower."),
    place("hel-finlandia", "Finlandia Hall", 60.1765, 24.9335, "sight", "Monument", "Töölönlahti", 7, "Aalto's white marble concert and congress hall."),
    place("hel-oot", "Oodi Central Library", 60.174, 24.938, "sight", "Attraction", "Töölönlahti", 8, "Wooden public library with city views and maker spaces."),
    place("hel-musictalo", "Helsinki Music Centre", 60.1745, 24.9355, "sight", "Attraction", "Töölönlahti", 6, "Concert halls between Oodi and Finlandia."),

    // ——— Design District / Punavuori ———
    place("hel-design", "Design Museum", 60.1628, 24.9465, "museum", "Museum", "Kaartinkaupunki", 7, "Finnish design from Aalto to Marimekko."),
    place("hel-arch", "Museum of Finnish Architecture", 60.1632, 24.9468, "museum", "Museum", "Kaartinkaupunki", 6, "Architecture exhibitions opposite the Design Museum."),
    place("hel-design-district", "Design District lanes", 60.1635, 24.9415, "shopping", "Market", "Punavuori", 8, "Studios, concept shops, and cafés south of Esplanadi."),
    place("hel-vanha", "Vanha kauppahalli edge / Eteläesplanadi", 60.1665, 24.9485, "shopping", "Market", "Center", 5, "Southern Esplanadi boutiques and terraces."),
    place("hel-johan", "Johanneksenkirkko", 60.1615, 24.9455, "sight", "Monument", "Punavuori", 6, "Red-brick neo-Gothic church towering over Punavuori."),
    place("hel-kaivopuisto", "Kaivopuisto Park", 60.1565, 24.9565, "nature", "Park", "Kaivopuisto", 8, "Seaside park with cafés and island views."),
    place("hel-observatory", "Helsinki Observatory hill", 60.1605, 24.9505, "sight", "Viewpoint", "Ullanlinna", 6, "Hilltop paths above the southern neighbourhoods."),
    place("hel-urho", "Ursa Observatory", 60.1608, 24.9508, "sight", "Attraction", "Ullanlinna", 5, "Small public observatory on Tähtitorninmäki."),

    // ——— Töölö / Sibelius ———
    place("hel-tempel", "Temppeliaukio Rock Church", 60.1728, 24.925, "sight", "Monument", "Töölö", 9, "Church blasted into bedrock with a copper dome."),
    place("hel-sibelius", "Sibelius Monument", 60.182, 24.9135, "sight", "Monument", "Töölö", 7, "Steel-pipe sculpture honouring the composer."),
    place("hel-sibelius-park", "Sibelius Park", 60.1825, 24.9125, "nature", "Park", "Töölö", 6, "Seaside pines around the monument."),
    place("hel-olympic-stad", "Olympic Stadium", 60.1865, 24.9255, "sight", "Attraction", "Töölö", 7, "1930s stadium tower with city panorama."),
    place("hel-stadium-museum", "Sports Museum of Finland", 60.1868, 24.9265, "museum", "Museum", "Töölö", 5, "Olympic and Finnish sports history at the stadium."),
    place("hel-toolonlahti", "Töölönlahti bay walk", 60.1785, 24.9335, "nature", "Park", "Töölönlahti", 7, "Loop path past Oodi, Finlandia, and the opera."),
    place("hel-opera", "Finnish National Opera", 60.1815, 24.9295, "sight", "Attraction", "Töölö", 6, "Opera house on the Töölönlahti shore."),
    place("hel-hietaniemi", "Hietaniemi beach", 60.1745, 24.9085, "nature", "Park", "Töölö", 7, "City beach and cemetery pines on the west shore."),
    place("hel-cemetery", "Hietaniemi Cemetery", 60.1685, 24.9125, "nature", "Park", "Töölö", 6, "Quiet wooded burial park with artists' graves."),

    // ——— Suomenlinna ———
    place("hel-suomenlinna", "Suomenlinna fortress", 60.145, 24.988, "sight", "Castle", "Suomenlinna", 10, "UNESCO sea fortress — treat as a half-day ferry trip."),
    place("hel-suomen-museum", "Suomenlinna Museum", 60.1465, 24.9865, "museum", "Museum", "Suomenlinna", 7, "Fortress history at the visitor centre."),
    place("hel-suomen-sub", "Vesikko submarine", 60.1435, 24.9915, "museum", "Museum", "Suomenlinna", 6, "WWII submarine open in summer."),
    place("hel-suomen-church", "Suomenlinna Church", 60.1475, 24.986, "sight", "Monument", "Suomenlinna", 6, "Lighthouse church on the fortress island."),
    place("hel-suomen-ferry", "Suomenlinna ferry pier (Kauppatori)", 60.1672, 24.9545, "sight", "Attraction", "Kauppatori", 6, "HSL ferry departure for the island."),

    // ——— Kallio / North ———
    place("hel-kallio", "Kallio Church", 60.1845, 24.9525, "sight", "Monument", "Kallio", 7, "Granite church overlooking the working-class district."),
    place("hel-hakaniemi", "Hakaniemi Market Hall", 60.1785, 24.9515, "shopping", "Market", "Kallio", 7, "Fresh produce and lunch counters north of the centre."),
    place("hel-vallila", "Vallila wooden houses", 60.1955, 24.9585, "sight", "Attraction", "Vallila", 6, "Colourful timber residential streets."),
    place("hel-alppipuisto", "Alppipuisto / Linnanmäki edge", 60.1885, 24.9385, "nature", "Park", "Alppila", 6, "Hill park beside the amusement park."),
    place("hel-linnanmaki", "Linnanmäki amusement park", 60.1882, 24.9405, "sight", "Attraction", "Alppila", 6, "Classic roller coasters with city views."),
    place("hel-sea-life", "SEA LIFE Helsinki", 60.188, 24.9415, "museum", "Museum", "Alppila", 5, "Aquarium next to Linnanmäki."),

    // ——— West Harbour / Ruoholahti ———
    place("hel-kamppi", "Kamppi Chapel of Silence", 60.1695, 24.9355, "sight", "Monument", "Kamppi", 7, "Wooden quiet chapel on Narinkkatori square."),
    place("hel-kamppi-center", "Kamppi shopping centre", 60.1692, 24.9335, "shopping", "Market", "Kamppi", 5, "Bus terminal mall and lunch courts."),
    place("hel-tennispalatsi", "Tennispalatsi / Helsinki Art Museum HAM", 60.1705, 24.9305, "museum", "Museum", "Kamppi", 6, "City art museum with Tove Jansson murals."),
    place("hel-ruoholahti", "Ruoholahti canal", 60.1635, 24.9155, "sight", "Attraction", "Ruoholahti", 5, "Modern harbour district west of Kamppi."),
    place("hel-west-terminal", "West Harbour terminal", 60.1545, 24.9185, "sight", "Attraction", "Jätkäsaari", 5, "Tallinn fast-ferry terminal in Jätkäsaari."),

    // ——— Seurasaari / Outer ———
    place("hel-seurasaari", "Seurasaari Open-Air Museum", 60.1835, 24.8835, "museum", "Museum", "Seurasaari", 8, "Historic wooden buildings on a forested island."),
    place("hel-meilahti", "Meilahti villa parks", 60.1885, 24.8955, "nature", "Park", "Meilahti", 6, "Shore paths and museum villas west of Töölö."),
    place("hel-arabianranta", "Arabianranta design district", 60.2105, 24.9755, "sight", "Attraction", "Arabianranta", 5, "Art-filled residential quarter by the old Arabia factory."),

    // ——— More museums ———
    place("hel-amos", "Amos Rex", 60.1705, 24.9365, "museum", "Museum", "Kamppi", 8, "Underground contemporary museum under Lasipalatsi domes."),
    place("hel-sinebrychoff", "Sinebrychoff Art Museum", 60.1625, 24.9325, "museum", "Museum", "Punavuori", 6, "Old European masters in a park villa."),
    place("hel-photo", "Finnish Museum of Photography", 60.1615, 24.9175, "museum", "Museum", "Ruoholahti", 5, "Photography exhibitions in Kaapelitehdas."),
    place("hel-kaapeli", "Kaapelitehdas (Cable Factory)", 60.1618, 24.9165, "sight", "Attraction", "Ruoholahti", 6, "Cultural complex with museums, theatres, and events."),

    // ——— Cafes ———
    place("hel-cafe-regatta", "Cafe Regatta", 60.181, 24.912, "cafe", "Cafe", "Töölö", 8, "Red hut by the water for cinnamon buns near Sibelius.", { cuisine: "coffee pastry" }),
    place("hel-cafe-karkki", "Kaffecentralen", 60.1645, 24.9415, "cafe", "Cafe", "Punavuori", 7, "Specialty coffee in the Design District.", { cuisine: "coffee" }),
    place("hel-cafe-good", "Good Life Coffee", 60.1855, 24.9545, "cafe", "Cafe", "Kallio", 7, "Kallio third-wave espresso bar.", { cuisine: "coffee" }),
    place("hel-cafe-ekberg", "Café Ekberg", 60.1655, 24.9415, "cafe", "Cafe", "Punavuori", 7, "Helsinki's oldest café — classic korvapuusti.", { cuisine: "bakery coffee" }),
    place("hel-cafe-karl", "Karl Fazer Café", 60.1685, 24.9475, "cafe", "Cafe", "Kluuvi", 7, "Chocolate and pastry flagship on Kluuvikatu.", { cuisine: "chocolate pastry" }),
    place("hel-cafe-torikortteli", "Torikorttelit cafés", 60.1692, 24.9538, "cafe", "Cafe", "Kruununhaka", 6, "Courtyard coffee behind Senate Square.", { cuisine: "coffee" }),

    // ——— Food ———
    place("hel-food-market", "Market Square salmon soup", 60.1675, 24.953, "food", "Quick meal", "Kauppatori", 7, "Harbour stall classic — lohikeitto by the boats.", { cuisine: "finnish seafood" }),
    place("hel-food-oldhall", "Old Market Hall lunch", 60.1663, 24.9538, "food", "Quick meal", "Kauppatori", 7, "Reindeer sandwiches and fresh fish counters.", { cuisine: "finnish market" }),
    place("hel-food-savoy", "Savoy", 60.1678, 24.9485, "food", "Restaurant", "Center", 8, "Aalto-designed fine dining above Esplanadi.", { cuisine: "finnish nordic" }),
    place("hel-food-demo", "Restaurant Demo", 60.1635, 24.9425, "food", "Restaurant", "Punavuori", 8, "Creative Finnish tasting menus in Design District.", { cuisine: "finnish" }),
    place("hel-food-sea", "Sea Horse (Silvoplee)", 60.1615, 24.9445, "food", "Restaurant", "Punavuori", 7, "Classic Finnish comfort plates since 1934.", { cuisine: "finnish" }),
    place("hel-food-passio", "Passio Restaurant", 60.1645, 24.9385, "food", "Restaurant", "Punavuori", 7, "Modern Finnish near the Design Museum.", { cuisine: "finnish nordic" }),
    place("hel-food-jayes", "Juttutupa / Kallio pubs food", 60.1835, 24.9515, "food", "Restaurant", "Kallio", 6, "Traditional Finnish tavern plates.", { cuisine: "finnish" }),
    place("hel-food-sushibar", "Sushibar + Wine", 60.1685, 24.9395, "food", "Restaurant", "Kamppi", 6, "Reliable sushi near Kamppi.", { cuisine: "japanese" }),
    place("hel-food-finnjungle", "Finnjävel", 60.1655, 24.9355, "food", "Restaurant", "Ruoholahti", 8, "Elevated traditional Finnish flavours.", { cuisine: "finnish" }),
    place("hel-food-vegan", "Yes Yes Yes", 60.1638, 24.9405, "food", "Restaurant", "Punavuori", 6, "Plant-based dining in Design District.", { cuisine: "vegan vegetarian" }),
    place("hel-food-nati", "Nati / street food Kallio", 60.1845, 24.9555, "food", "Quick meal", "Kallio", 5, "Casual bites on the Kallio strip.", { cuisine: "street_food" }),
    place("hel-food-story", "Story / Oodi café dining", 60.1738, 24.9382, "food", "Restaurant", "Töölönlahti", 6, "Library-adjacent lunch with park views.", { cuisine: "finnish european" }),
    place("hel-food-suomen", "Suomenlinna brewery lunch", 60.1455, 24.9875, "food", "Restaurant", "Suomenlinna", 6, "Island brewery and cafeteria after the walls.", { cuisine: "finnish beer" }),

    // ——— Nightlife ———
    place("hel-night-kallio", "Kallio bars", 60.1855, 24.9535, "nightlife", "Bar", "Kallio", 8, "Dive bars and terraces on Helsinki's nightlife hill."),
    place("hel-night-punavuori", "Punavuori bars", 60.1635, 24.9395, "nightlife", "Bar", "Punavuori", 7, "Wine bars and late cafés in Design District."),
    place("hel-night-kaisla", "Bar Magellan / harbour", 60.1675, 24.9545, "nightlife", "Bar", "Kauppatori", 5, "Harbour-side drinks near the market."),
    place("hel-night-steam", "Steam Hellsinki / club nights", 60.1685, 24.9345, "nightlife", "Bar", "Kamppi", 6, "Central club circuit around Kamppi."),
    place("hel-night-kaapeli", "Kaapelitehdas events", 60.1615, 24.9168, "nightlife", "Bar", "Ruoholahti", 6, "Concerts and parties in the cable factory."),
    place("hel-night-siltanen", "Siltanen", 60.1848, 24.9505, "nightlife", "Bar", "Kallio", 6, "Live music bar in Kallio."),
    place("hel-night-libert", "Liberty or Death", 60.1642, 24.9388, "nightlife", "Bar", "Punavuori", 6, "Cocktail bar in the southern centre."),
    place("hel-night-terrace", "Allas Sea Pool evening", 60.1665, 24.9555, "nightlife", "Bar", "Kauppatori", 6, "Harbour sauna-pool complex with a bar terrace."),

    // ——— Stays ———
    place("hel-stay-kmp", "Hotel Kämp", 60.1685, 24.9488, "stay", "Hotel", "Kluuvi", 9, "Historic luxury on Esplanadi."),
    place("hel-stay-klaus", "Klaus K Hotel", 60.1665, 24.9455, "stay", "Hotel", "Center", 8, "Design hotel steps from Esplanadi."),
    place("hel-stay-stenchy", "St. George Helsinki", 60.1675, 24.9355, "stay", "Hotel", "Kamppi", 8, "Art-filled luxury near the Chapel of Silence."),
    place("hel-stay-lilla", "Hotel Lilla Roberts", 60.1635, 24.9475, "stay", "Hotel", "Kaartinkaupunki", 7, "Boutique stay in the Design District."),
    place("hel-stay-scandic", "Scandic Grand Central", 60.1715, 24.9395, "stay", "Hotel", "Kluuvi", 7, "Converted railway offices by the station."),
    place("hel-stay-solo", "Solo Sokos Hotel Torni", 60.1685, 24.9385, "stay", "Hotel", "Kamppi", 7, "Historic tower hotel with a sky bar."),
    place("hel-stay-cheap", "Hostel Domus Academica", 60.1725, 24.9255, "stay", "Hostel", "Töölö", 5, "Summer student hostel near Temppeliaukio."),
    place("hel-stay-cheap2", "The Yard Hostel", 60.1695, 24.9338, "stay", "Hostel", "Kamppi", 6, "Design hostel above Kamppi."),
    place("hel-stay-kata", "Hotel Katajanokka", 60.1665, 24.9685, "stay", "Hotel", "Katajanokka", 7, "Prison-converted hotel on Katajanokka."),
  ],
};
