import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const oslo: CityCatalog = {
  id: "oslo",
  name: "Oslo, Norway",
  aliases: ["oslo"],
  center: { lat: 59.9139, lon: 10.7522 },
  places: [
    // ——— Bjørvika / Opera ———
    place("osl-opera", "Oslo Opera House", 59.9075, 10.753, "sight", "Attraction", "Bjørvika", 10, "Walk the marble roof for fjord and skyline views."),
    place("osl-munch", "MUNCH Museum", 59.9055, 10.7555, "museum", "Museum", "Bjørvika", 9, "Towering waterfront home of The Scream and Munch's oeuvre."),
    place("osl-baren", "Barcode skyline walk", 59.9085, 10.7585, "sight", "Attraction", "Bjørvika", 7, "Modern high-rise strip along the eastern harbour."),
    place("osl-deichman", "Deichman Bjørvika library", 59.9082, 10.7525, "sight", "Attraction", "Bjørvika", 7, "Striking public library with reading terraces over the fjord."),
    place("osl-sornenga", "Sørenga seawater pool", 59.9025, 10.7555, "nature", "Park", "Bjørvika", 7, "Harbour swimming and boardwalk south of the Opera."),
    place("osl-lambert", "Lambertseter / Ekeberg edge views", 59.8985, 10.7625, "sight", "Viewpoint", "Ekeberg", 6, "Hillside paths looking back over Bjørvika."),

    // ——— Centre / Karl Johan ———
    place("osl-karl", "Karl Johans gate", 59.9135, 10.7385, "sight", "Attraction", "Center", 8, "Main parade street from the station to the Royal Palace."),
    place("osl-palace", "Royal Palace", 59.9169, 10.7276, "sight", "Monument", "Center", 8, "Neoclassical palace with changing of the guard and park."),
    place("osl-slottsparken", "Slottsparken", 59.9175, 10.7265, "nature", "Park", "Center", 7, "Palace gardens open to strollers and picnics."),
    place("osl-storting", "Stortinget", 59.9133, 10.7405, "sight", "Monument", "Center", 6, "Norwegian parliament building on Karl Johan."),
    place("osl-cathedral", "Oslo Cathedral", 59.9125, 10.7465, "sight", "Monument", "Center", 6, "Baroque cathedral on Stortorvet market square."),
    place("osl-stortorvet", "Stortorvet", 59.9128, 10.7455, "shopping", "Market", "Center", 6, "Flower and produce market square by the cathedral."),
    place("osl-cityhall", "Oslo City Hall", 59.9116, 10.7338, "sight", "Attraction", "Center", 7, "Nobel Peace Prize venue with monumental murals inside."),
    place("osl-nobel", "Nobel Peace Center", 59.9112, 10.7295, "museum", "Museum", "Aker Brygge", 7, "Peace Prize exhibitions on the harbour plaza."),
    place("osl-parliament-park", "Eidsvolls plass", 59.9145, 10.7375, "nature", "Park", "Center", 5, "Lawn and statues mid-Karl Johan."),

    // ——— Akershus / Harbour ———
    place("osl-akershus", "Akershus Fortress", 59.907, 10.736, "sight", "Castle", "Center", 8, "Medieval fortress guarding the harbour — free grounds."),
    place("osl-akershus-museum", "Norway's Resistance Museum", 59.9065, 10.7365, "museum", "Museum", "Center", 7, "WWII occupation history inside the fortress."),
    place("osl-harbour", "Rådhusplassen harbour", 59.911, 10.7325, "sight", "Attraction", "Center", 7, "Ferry docks, statues, and fjord breeze by City Hall."),
    place("osl-tjuvholmen", "Tjuvholmen sculpture park", 59.9075, 10.7215, "nature", "Park", "Aker Brygge", 7, "Astrup Fearnley sculpture garden on the pier."),
    place("osl-astrup", "Astrup Fearnley Museum", 59.9072, 10.7205, "museum", "Museum", "Aker Brygge", 8, "Contemporary art in Renzo Piano's waterfront building."),
    place("osl-aker", "Aker Brygge boardwalk", 59.91, 10.727, "sight", "Attraction", "Aker Brygge", 8, "Shops, restaurants, and boat-watching on the west harbour."),
    place("osl-national", "National Museum", 59.9115, 10.7245, "museum", "Museum", "Aker Brygge", 9, "Norway's new national museum — Munch, design, and Old Masters."),

    // ——— Bygdøy ———
    place("osl-viking", "Viking Ship Museum / Museum of the Viking Age", 59.9045, 10.6845, "museum", "Museum", "Bygdøy", 9, "Oseberg and Gokstad ships — check reopening status."),
    place("osl-frammuseum", "Fram Museum", 59.9035, 10.6995, "museum", "Museum", "Bygdøy", 9, "Polar exploration ship Fram in a dramatic A-frame hall."),
    place("osl-kon-tiki", "Kon-Tiki Museum", 59.9038, 10.6985, "museum", "Museum", "Bygdøy", 8, "Thor Heyerdahl's rafts and Pacific expedition stories."),
    place("osl-folk", "Norwegian Folk Museum", 59.9075, 10.6855, "museum", "Museum", "Bygdøy", 8, "Open-air stave church and historic farm buildings."),
    place("osl-maritime", "Norwegian Maritime Museum", 59.9025, 10.6988, "museum", "Museum", "Bygdøy", 6, "Ship models and coastal history beside the Fram."),
    place("osl-bygdoy-beach", "Huk beach", 59.8985, 10.6755, "nature", "Park", "Bygdøy", 6, "Summer swimming beach on the Bygdøy tip."),
    place("osl-bygdoy-ferry", "Bygdøy ferry pier", 59.9085, 10.7055, "sight", "Attraction", "Bygdøy", 6, "Seasonal ferry link from City Hall to the museum peninsula."),

    // ——— Frogner / Vigeland ———
    place("osl-vigeland", "Vigeland Park (Frogner Park)", 59.927, 10.7005, "nature", "Park", "Frogner", 10, "Gustav Vigeland's sculpture park — Oslo's free outdoor gallery."),
    place("osl-vigeland-museum", "Vigeland Museum", 59.9225, 10.7005, "museum", "Museum", "Frogner", 7, "Studio museum of the park's sculptor next door."),
    place("osl-frognerbadet", "Frognerbadet", 59.9265, 10.7055, "nature", "Park", "Frogner", 6, "Outdoor pools beside the sculpture park in summer."),
    place("osl-frogner-manor", "Frogner Manor / City Museum", 59.9245, 10.7035, "museum", "Museum", "Frogner", 6, "Oslo city history in the old manor house."),
    place("osl-bogstad", "Bogstad Manor area", 59.9665, 10.6455, "nature", "Park", "Outer west", 5, "Historic estate and trails northwest of Frogner."),

    // ——— Grünerløkka / Vulkan ———
    place("osl-gruner", "Grünerløkka lanes", 59.9235, 10.758, "sight", "Attraction", "Grünerløkka", 8, "Vintage shops, cafés, and parks in the east-side hip quarter."),
    place("osl-mathallen", "Mathallen Oslo", 59.922, 10.752, "shopping", "Market", "Vulkan", 8, "Food hall under the old industrial sheds by the Akerselva."),
    place("osl-akerselva", "Akerselva river walk", 59.9255, 10.7555, "nature", "Park", "Grünerløkka", 8, "Waterfall path from Maridalsvannet down through Vulkan."),
    place("osl-birkelunden", "Birkelunden", 59.9265, 10.7615, "nature", "Park", "Grünerløkka", 6, "Neighbourhood park and weekend flea market."),
    place("osl-botanisk", "University Botanical Garden", 59.9185, 10.7715, "nature", "Garden", "Tøyen", 7, "Free greenhouses and outdoor gardens by Munch's old site."),
    place("osl-natural", "Natural History Museum", 59.9195, 10.7725, "museum", "Museum", "Tøyen", 6, "Dinosaurs and geology beside the botanical garden."),
    place("osl-toyenbadet", "Tøyenbadet / Tøyen park", 59.9165, 10.7755, "nature", "Park", "Tøyen", 5, "East-side recreation and pool complex."),

    // ——— Holmenkollen / Nordmarka ———
    place("osl-holmen", "Holmenkollen Ski Jump", 59.9635, 10.6675, "sight", "Viewpoint", "Holmenkollen", 9, "Iconic jump tower with city and fjord panorama."),
    place("osl-ski-museum", "Ski Museum Holmenkollen", 59.9638, 10.6672, "museum", "Museum", "Holmenkollen", 7, "Skiing history inside the jump complex."),
    place("osl-frognerseteren", "Frognerseteren", 59.9785, 10.6825, "nature", "Park", "Nordmarka", 7, "End-of-line café and forest trails above the city."),
    place("osl-nordmarka", "Nordmarka trailhead", 59.98, 10.68, "nature", "Park", "Nordmarka", 8, "Vast forest for hiking and cross-country skiing."),
    place("osl-vettakollen", "Vettakollen viewpoint", 59.9555, 10.6855, "sight", "Viewpoint", "Holmenkollen", 7, "Hike-up lookout over Oslofjord."),

    // ——— Ekeberg / East ———
    place("osl-ekeberg", "Ekebergparken sculpture park", 59.8985, 10.7855, "nature", "Park", "Ekeberg", 8, "Dalí, Rodin, and Oslo views on the eastern hill."),
    place("osl-ekeberg-rest", "Ekebergrestauranten viewpoint", 59.8975, 10.7825, "sight", "Viewpoint", "Ekeberg", 7, "Classic restaurant terrace overlooking the fjord."),
    place("osl-kampen", "Kampen neighbourhood", 59.9135, 10.7815, "sight", "Attraction", "Kampen", 6, "Wooden houses and quiet streets above the centre."),

    // ——— Islands / fjord ———
    place("osl-hovedoya", "Hovedøya island", 59.8955, 10.7315, "nature", "Park", "Oslofjord", 7, "Monastery ruins and swimming — short ferry from City Hall."),
    place("osl-gressholmen", "Gressholmen / Langøyene", 59.8825, 10.7155, "nature", "Park", "Oslofjord", 6, "Summer island beaches via local ferry."),
    place("osl-opera-ferry", "Harbour ferry circuit", 59.9105, 10.7335, "sight", "Attraction", "Center", 6, "Public ferries stitch Bygdøy, islands, and the Opera quay."),

    // ——— More sights ———
    place("osl-ibsen", "Ibsen Museum", 59.9155, 10.7255, "museum", "Museum", "Center", 6, "Playwright's apartment near the palace."),
    place("osl-contemporary", "Kunstnernes Hus", 59.9185, 10.7285, "museum", "Museum", "Center", 5, "Artist-run contemporary exhibitions by the palace."),
    place("osl-stenersen", "Former Stenersen / city galleries", 59.9125, 10.7355, "museum", "Museum", "Center", 5, "Rotating city art shows near City Hall."),
    place("osl-opera-plaza", "Operatunnelen plaza / fjord path", 59.9088, 10.7505, "sight", "Attraction", "Bjørvika", 6, "Waterfront promenade linking Opera to Sørenga."),

    // ——— Cafes ———
    place("osl-cafe-tim", "Tim Wendelboe", 59.9238, 10.7585, "cafe", "Cafe", "Grünerløkka", 8, "World-class espresso bar on the Løkka strip.", { cuisine: "coffee" }),
    place("osl-cafe-fuglen", "Fuglen", 59.9145, 10.7415, "cafe", "Cafe", "Center", 7, "Mid-century café by day, cocktail bar by night.", { cuisine: "coffee cocktails" }),
    place("osl-cafe-stock", "Stockfleths", 59.9125, 10.7425, "cafe", "Cafe", "Center", 6, "Historic Oslo coffee brand on Karl Johan.", { cuisine: "coffee" }),
    place("osl-cafe-java", "Java Espressobar", 59.9245, 10.7595, "cafe", "Cafe", "Grünerløkka", 7, "Neighbourhood espresso institution in Løkka.", { cuisine: "coffee" }),
    place("osl-cafe-amund", "Åpent Bakeri", 59.9165, 10.7285, "cafe", "Cafe", "Center", 6, "Sourdough and cinnamon buns near the palace.", { cuisine: "bakery coffee" }),
    place("osl-cafe-frogn", "Frognerseteren café", 59.9788, 10.6828, "cafe", "Cafe", "Nordmarka", 7, "Waffles with cloudberry cream after the forest walk.", { cuisine: "norwegian pastry" }),

    // ——— Food ———
    place("osl-food-maaemo", "Maaemo area / fine dining Bjørvika", 59.9085, 10.7565, "food", "Restaurant", "Bjørvika", 9, "New Nordic tasting destination near the Opera.", { cuisine: "nordic" }),
    place("osl-food-kontrast", "Kontrast", 59.9215, 10.7515, "food", "Restaurant", "Vulkan", 8, "Modern Nordic near Mathallen.", { cuisine: "nordic" }),
    place("osl-food-mathallen", "Mathallen stalls", 59.9222, 10.7522, "food", "Quick meal", "Vulkan", 7, "Cheese, seafood, and street bites in the food hall.", { cuisine: "market nordic" }),
    place("osl-food-fisk", "Fiskeriet / fish soup", 59.9115, 10.7355, "food", "Restaurant", "Center", 7, "Classic Norwegian fish soup near the harbour.", { cuisine: "seafood norwegian" }),
    place("osl-food-grand", "Grand Café", 59.9138, 10.7395, "food", "Restaurant", "Center", 7, "Ibsen's old haunt on Karl Johan.", { cuisine: "norwegian european" }),
    place("osl-food-vippa", "Vippa food court", 59.9045, 10.7385, "food", "Quick meal", "Center", 7, "Harbour hangar with global street-food stalls.", { cuisine: "street_food" }),
    place("osl-food-lokka", "Bass Oslo / Løkka dinner", 59.924, 10.7575, "food", "Restaurant", "Grünerløkka", 7, "Neighbourhood natural-wine and small plates.", { cuisine: "nordic european" }),
    place("osl-food-reffen", "NorgesPorten / Aker Brygge seafood", 59.9102, 10.7275, "food", "Restaurant", "Aker Brygge", 6, "Seafood terraces on the boardwalk.", { cuisine: "seafood" }),
    place("osl-food-hot", "Hot Shop / Asian Løkka", 59.9232, 10.7592, "food", "Quick meal", "Grünerløkka", 6, "Casual Asian bowls in Grünerløkka.", { cuisine: "asian" }),
    place("osl-food-baker", "Baker Hansen cinnamon buns", 59.9128, 10.7445, "food", "Quick meal", "Center", 6, "Classic Oslo bakery treats.", { cuisine: "bakery norwegian" }),
    place("osl-food-tofu", "Punjab Tandoori", 59.9155, 10.7655, "food", "Restaurant", "Grønland", 6, "Beloved budget Indian near Grønland.", { cuisine: "indian" }),
    place("osl-food-tjuv", "Tjuvholmen dining", 59.9075, 10.7225, "food", "Restaurant", "Aker Brygge", 7, "Waterfront restaurants by the sculpture park.", { cuisine: "nordic seafood" }),
    place("osl-food-ekan", "Ekebergrestauranten", 59.8978, 10.7828, "food", "Restaurant", "Ekeberg", 7, "Classic hillside dining with panoramic views.", { cuisine: "norwegian" }),

    // ——— Nightlife ———
    place("osl-night-lokka", "Grünerløkka bars", 59.9242, 10.7585, "nightlife", "Bar", "Grünerløkka", 8, "Crowded terrace pubs along Thorvald Meyers gate."),
    place("osl-night-vulkan", "Vulkan / Blå", 59.9225, 10.7515, "nightlife", "Bar", "Vulkan", 7, "Live music and riverside bars by Mathallen."),
    place("osl-night-aker", "Aker Brygge evening", 59.9098, 10.7265, "nightlife", "Bar", "Aker Brygge", 6, "Harbour cocktails and summer terraces."),
    place("osl-night-fuglen", "Fuglen after dark", 59.9145, 10.7418, "nightlife", "Bar", "Center", 7, "Vinyl and cocktails in the mid-century café."),
    place("osl-night-himkok", "Himkok", 59.9155, 10.7485, "nightlife", "Bar", "Center", 7, "Award-winning cocktail bar in the centre."),
    place("osl-night-skole", "Villa / club nights", 59.9135, 10.7355, "nightlife", "Bar", "Center", 6, "Central club circuit near City Hall."),
    place("osl-night-gronland", "Grønland nightlife", 59.9125, 10.7625, "nightlife", "Bar", "Grønland", 6, "Multicultural bars east of the station."),
    place("osl-night-opera", "Opera roof sunset drinks", 59.9075, 10.7525, "nightlife", "Bar", "Bjørvika", 6, "Informal dusk gathering on the Opera plaza."),

    // ——— Stays ———
    place("osl-stay-grand", "Grand Hotel Oslo", 59.9138, 10.7388, "stay", "Hotel", "Center", 9, "Historic Karl Johan landmark — Nobel banquet neighbour."),
    place("osl-stay-thon", "Thon Hotel Opera", 59.9085, 10.7545, "stay", "Hotel", "Bjørvika", 8, "Rooms facing the Opera House."),
    place("osl-stay-continental", "Hotel Continental", 59.9132, 10.7345, "stay", "Hotel", "Center", 9, "Classic luxury opposite the National Theatre."),
    place("osl-stay-the", "The Hub", 59.9115, 10.7485, "stay", "Hotel", "Center", 8, "Modern design hotel by Oslo S station."),
    place("osl-stay-scandic", "Scandic Holmenkollen Park", 59.9625, 10.6685, "stay", "Hotel", "Holmenkollen", 7, "Hilltop stay near the ski jump."),
    place("osl-stay-amerikalinjen", "Amerikalinjen", 59.9105, 10.7515, "stay", "Hotel", "Bjørvika", 8, "Harbour hotel in the former shipping-line HQ."),
    place("osl-stay-comfort", "Comfort Hotel Xpress", 59.9145, 10.7525, "stay", "Hotel", "Center", 6, "Compact modern rooms near the station."),
    place("osl-stay-anker", "Anker Hostel", 59.9185, 10.7585, "stay", "Hostel", "Grünerløkka", 6, "Large hostel bridging centre and Løkka."),
    place("osl-stay-cochs", "Cochs Pensjonat", 59.9185, 10.7255, "stay", "Guest house", "Center", 6, "Old-school pension near the palace."),
    place("osl-stay-generator", "Generator Oslo", 59.9125, 10.7555, "stay", "Hostel", "Center", 6, "Social hostel east of Oslo S."),
    place("osl-stay-lokka", "Grünerløkka boutique hotel", 59.9235, 10.7575, "stay", "Hotel", "Grünerløkka", 7, "Indie rooms in the café district."),
    place("osl-stay-apt-bry", "Aker Brygge apartment", 59.9105, 10.7285, "stay", "Apartment", "Aker Brygge", 7, "Harbour-view self-catering."),
    place("osl-stay-apt-lok", "Løkka apartment", 59.9245, 10.7588, "stay", "Apartment", "Grünerløkka", 7, "Residential base above the vintage shops."),
    place("osl-stay-frogner", "Frogner guest house", 59.9255, 10.7055, "stay", "Guest house", "Frogner", 6, "Quiet stay near Vigeland Park."),
    place("osl-stay-citybox", "Citybox Oslo", 59.9135, 10.7495, "stay", "Hotel", "Center", 6, "Budget design rooms near the cathedral."),
  ],
};
