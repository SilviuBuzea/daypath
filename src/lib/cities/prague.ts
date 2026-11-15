import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const prague: CityCatalog = {
  id: "prague",
  name: "Prague, Czechia",
  aliases: ["prague", "praha"],
  center: { lat: 50.0755, lon: 14.4378 },
  places: [
    // ——— Hradčany / Castle ———
    place("pr-castle", "Prague Castle", 50.091, 14.401, "sight", "Castle", "Hradčany", 10, "Castle complex above the Vltava — allow half a day."),
    place("pr-st-vitus", "St. Vitus Cathedral", 50.0909, 14.4005, "sight", "Monument", "Hradčany", 10, "Gothic spires and stained glass inside the castle."),
    place("pr-golden-lane", "Golden Lane", 50.0915, 14.4035, "sight", "Attraction", "Hradčany", 7, "Tiny colorful houses along the castle walls."),
    place("pr-lobster", "Lobkowicz Palace", 50.0915, 14.4055, "museum", "Museum", "Hradčany", 7, "Private palace museum with concert hall views."),
    place("pr-strahov", "Strahov Monastery", 50.0865, 14.3895, "sight", "Monument", "Hradčany", 8, "Baroque library halls above Petřín."),
    place("pr-loreta", "Loreta", 50.0895, 14.3915, "sight", "Monument", "Hradčany", 7, "Pilgrimage shrine with famous carillon."),
    place("pr-schwarz", "Schwarzenberg Palace", 50.0905, 14.3995, "museum", "Museum", "Hradčany", 6, "Military history museum by the castle square."),

    // ——— Malá Strana ———
    place("pr-charles", "Charles Bridge", 50.0865, 14.4114, "sight", "Attraction", "Malá Strana", 10, "Statue-lined bridge — go early for photos."),
    place("pr-john-nepomuk", "St. John of Nepomuk statue", 50.0865, 14.4118, "sight", "Monument", "Malá Strana", 6, "Lucky touch point mid-bridge."),
    place("pr-st-nicholas-ms", "St. Nicholas Church (Malá Strana)", 50.088, 14.4035, "sight", "Monument", "Malá Strana", 8, "Baroque dome dominating Lesser Town."),
    place("pr-wallenstein", "Wallenstein Garden", 50.0905, 14.4065, "nature", "Garden", "Malá Strana", 7, "Palace garden with peacocks and grotto."),
    place("pr-kampa", "Kampa Island", 50.0855, 14.4085, "nature", "Park", "Malá Strana", 8, "River park and mills below Charles Bridge."),
    place("pr-lennon", "John Lennon Wall", 50.0862, 14.4068, "sight", "Attraction", "Malá Strana", 7, "Graffiti peace wall near Kampa."),
    place("pr-petrin", "Petřín Hill", 50.0836, 14.395, "nature", "Park", "Malá Strana", 8, "Rose gardens and funicular above Malá Strana."),
    place("pr-petrin-tower", "Petřín Lookout Tower", 50.0835, 14.3955, "sight", "Viewpoint", "Malá Strana", 7, "Mini Eiffel with city panoramas."),
    place("pr-mirror", "Mirror Maze", 50.0838, 14.3965, "sight", "Attraction", "Malá Strana", 5, "Funhouse mirrors beside Petřín tower."),
    place("pr-franz-kafka-museum", "Franz Kafka Museum", 50.0885, 14.4105, "museum", "Museum", "Malá Strana", 6, "Kafka exhibits by the Vltava."),

    // ——— Old Town / Josefov ———
    place("pr-old-square", "Old Town Square", 50.0875, 14.421, "sight", "Attraction", "Old Town", 10, "Astronomical Clock, Týn, and café terraces."),
    place("pr-clock", "Astronomical Clock", 50.087, 14.4207, "sight", "Monument", "Old Town", 9, "Hourly apostles show on the Old Town Hall."),
    place("pr-tyn", "Church of Our Lady before Týn", 50.0875, 14.4225, "sight", "Monument", "Old Town", 8, "Twin Gothic spires behind the square."),
    place("pr-powder", "Powder Tower", 50.0872, 14.4278, "sight", "Monument", "Old Town", 7, "Gothic gate to climb toward Municipal House."),
    place("pr-municipal", "Municipal House", 50.0875, 14.4285, "sight", "Monument", "Old Town", 8, "Art Nouveau concert halls and cafés."),
    place("pr-jewish", "Jewish Quarter (Josefov)", 50.09, 14.4185, "sight", "Attraction", "Josefov", 9, "Synagogues and Old Jewish Cemetery circuit."),
    place("pr-old-cemetery", "Old Jewish Cemetery", 50.0905, 14.4175, "sight", "Monument", "Josefov", 8, "Layered gravestones in Josefov."),
    place("pr-spanish-syn", "Spanish Synagogue", 50.0905, 14.4205, "sight", "Monument", "Josefov", 7, "Moorish Revival interior in Josefov."),
    place("pr-havel-market", "Havelské Market", 50.0855, 14.4215, "shopping", "Market", "Old Town", 6, "Souvenir and produce stalls near Old Town."),
    place("pr-celetna", "Celetná Street", 50.087, 14.4245, "shopping", "Market", "Old Town", 6, "Royal Route shops toward Powder Tower."),
    place("pr-wenceslas", "Wenceslas Square", 50.0815, 14.4275, "sight", "Attraction", "New Town", 7, "Boulevard from National Museum to Na Příkopě."),
    place("pr-national-museum", "National Museum", 50.0795, 14.431, "museum", "Museum", "New Town", 8, "Dome landmark atop Wenceslas Square."),
    place("pr-national-theatre", "National Theatre", 50.081, 14.4135, "sight", "Monument", "New Town", 7, "Golden-roofed opera house on the river."),
    place("pr-dancing-house", "Dancing House", 50.0755, 14.414, "sight", "Attraction", "New Town", 7, "Gehry-Milunić 'Fred and Ginger' building."),
    place("pr-mucha", "Mucha Museum", 50.0815, 14.4265, "museum", "Museum", "New Town", 7, "Art Nouveau posters near Wenceslas."),
    place("pr-speculum", "Speculum Alchemiae", 50.0905, 14.4215, "museum", "Museum", "Josefov", 5, "Alchemy lab tour under Josefov."),

    // ——— Vyšehrad / Vinohrady / Žižkov ———
    place("pr-vysehrad", "Vyšehrad", 50.064, 14.42, "sight", "Castle", "Vyšehrad", 8, "Quieter fortress with cemetery and river views."),
    place("pr-vysehrad-basilica", "Basilica of St. Peter and Paul", 50.0645, 14.4185, "sight", "Monument", "Vyšehrad", 7, "Neo-Gothic twin towers inside Vyšehrad."),
    place("pr-vinohrady", "Vinohrady parks", 50.0755, 14.445, "nature", "Park", "Vinohrady", 6, "Riegrovy sady sunset lawns over the city."),
    place("pr-zitkov", "Žižkov Television Tower", 50.081, 14.451, "sight", "Viewpoint", "Žižkov", 7, "Babies-on-tower landmark with observation deck."),
    place("pr-letna", "Letná Park", 50.0955, 14.4155, "nature", "Park", "Letná", 8, "Metronome hill with beer garden skyline views."),
    place("pr-stromovka", "Stromovka", 50.1055, 14.42, "nature", "Park", "Holešovice", 7, "Large park and Výstaviště exhibition grounds."),
    place("pr-doox", "DOX Centre for Contemporary Art", 50.1075, 14.4485, "museum", "Museum", "Holešovice", 7, "Contemporary art and Gulliver airship."),
    place("pr-naplavka", "Náplavka embankment", 50.07, 14.415, "nature", "Park", "New Town", 7, "Farmers' market Saturdays and summer bars."),
    place("pr-vltava-boat", "Vltava boat pier", 50.086, 14.4135, "sight", "Attraction", "Old Town", 6, "Short river cruises under Charles Bridge."),
    place("pr-cross-club", "Cross Club exterior", 50.107, 14.447, "sight", "Attraction", "Holešovice", 5, "Steampunk scrap-metal club façade."),

    // ——— Cafes ———
    place("pr-cafe-louvre", "Café Louvre", 50.0815, 14.4195, "cafe", "Cafe", "New Town", 8, "Historic café where Einstein and Kafka sat.", { cuisine: "coffee pastry" }),
    place("pr-cafe-slavia", "Café Slavia", 50.0815, 14.4138, "cafe", "Cafe", "New Town", 7, "River-view literary café by National Theatre.", { cuisine: "coffee czech" }),
    place("pr-cafe-municipal", "Grand Café Orient", 50.0875, 14.4265, "cafe", "Cafe", "Old Town", 7, "Cubist café in the House of the Black Madonna.", { cuisine: "coffee pastry" }),
    place("pr-cafe-ema", "EMA espresso bar", 50.0755, 14.4325, "cafe", "Cafe", "New Town", 7, "Specialty coffee near Karlovo náměstí.", { cuisine: "coffee" }),
    place("pr-cafe-mistral", "Café Mistral", 50.0885, 14.4055, "cafe", "Cafe", "Malá Strana", 6, "Quiet Malá Strana coffee stop.", { cuisine: "coffee" }),
    place("pr-cafe-mamacoffee", "Mama Coffee", 50.0755, 14.4375, "cafe", "Cafe", "Vinohrady", 6, "Fair-trade café in Vinohrady.", { cuisine: "coffee" }),
    place("pr-cafe-ventolino", "Ventolino Café", 50.0915, 14.4015, "cafe", "Cafe", "Hradčany", 6, "Castle-area coffee between courtyards.", { cuisine: "coffee" }),
    place("pr-cafe-coffee", "The Miners' Club Coffee", 50.075, 14.44, "cafe", "Cafe", "Vinohrady", 6, "Third-wave roast near Náměstí Míru.", { cuisine: "coffee" }),

    // ——— Food ———
    place("pr-food-locale", "Lokál Dlouhááá", 50.0915, 14.4275, "food", "Restaurant", "Old Town", 8, "Fresh tap beer and Czech classics.", { cuisine: "czech beer" }),
    place("pr-food-field", "Field", 50.0905, 14.4185, "food", "Restaurant", "Josefov", 9, "Michelin Czech tasting near Josefov.", { cuisine: "czech" }),
    place("pr-food-mlyniec", "Mlýnec", 50.0865, 14.4125, "food", "Restaurant", "Old Town", 8, "Fine dining with Charles Bridge views.", { cuisine: "czech european" }),
    place("pr-food-svata", "Svatá Klára", 50.0885, 14.405, "food", "Restaurant", "Malá Strana", 7, "Czech plates in Lesser Town lanes.", { cuisine: "czech" }),
    place("pr-food-kantyna", "Kantýna", 50.08, 14.4255, "food", "Restaurant", "New Town", 7, "Butcher-shop restaurant with steaks.", { cuisine: "czech meat" }),
    place("pr-food-u-fleku", "U Fleků", 50.0785, 14.4185, "food", "Restaurant", "New Town", 7, "Historic brewery tavern since 1499.", { cuisine: "czech beer" }),
    place("pr-food-naplavka", "Náplavka food stalls", 50.07, 14.4155, "food", "Quick meal", "New Town", 6, "Saturday farmers' market bites by the river.", { cuisine: "market czech" }),
    place("pr-food-trdelnik", "Trdelník stall Old Town", 50.087, 14.4205, "food", "Quick meal", "Old Town", 5, "Tourist chimney cake — tasty but not Czech-traditional.", { cuisine: "pastry" }),
    place("pr-food-pork", "Pork knuckle beer hall", 50.0865, 14.4195, "food", "Restaurant", "Old Town", 6, "Pečené koleno with mustard and horseradish.", { cuisine: "czech" }),
    place("pr-food-pizza", "Pizza Nuova", 50.0915, 14.4285, "food", "Restaurant", "Old Town", 6, "All-you-can-eat Italian near Dlouhá.", { cuisine: "italian" }),
    place("pr-food-vegetarian", "Lehká Hlava", 50.0855, 14.4155, "food", "Restaurant", "Old Town", 7, "Vegetarian restaurant near Charles Bridge.", { cuisine: "vegetarian" }),
    place("pr-food-bistro", "Bistro 8", 50.0755, 14.437, "food", "Restaurant", "Vinohrady", 6, "Neighborhood bistro plates in Vinohrady.", { cuisine: "european" }),
    place("pr-food-goulash", "Goulash and dumplings cellar", 50.0875, 14.42, "food", "Restaurant", "Old Town", 6, "Hearty guláš near Old Town Square.", { cuisine: "czech" }),
    place("pr-food-sushi", "Sushi Time / Asian escape", 50.075, 14.435, "food", "Restaurant", "New Town", 5, "Non-Czech break near Václavské náměstí.", { cuisine: "japanese" }),

    // ——— Nightlife ———
    place("pr-night-karlovy", "Karlovy Lázně", 50.086, 14.413, "nightlife", "Club", "Old Town", 6, "Multi-floor club by Charles Bridge."),
    place("pr-night-anonymous", "Anonymous Bar", 50.0885, 14.4195, "nightlife", "Bar", "Old Town", 7, "Mask-themed cocktail bar."),
    place("pr-night-hemingway", "Hemingway Bar", 50.0855, 14.4185, "nightlife", "Bar", "Old Town", 7, "Absinthe and rum cocktails."),
    place("pr-night-cross", "Cross Club", 50.107, 14.4475, "nightlife", "Club", "Holešovice", 8, "Industrial steampunk dance floors."),
    place("pr-night-zizkov", "Žižkov pub crawl strip", 50.0835, 14.45, "nightlife", "Bar", "Žižkov", 7, "Dense cheap pubs below the TV tower."),
    place("pr-night-beer", "Beer Geek Bar", 50.0755, 14.4455, "nightlife", "Bar", "Vinohrady", 7, "Craft beer taps in Vinohrady."),
    place("pr-night-roof", "Cloud 9 Sky Bar", 50.0715, 14.4375, "nightlife", "Bar", "New Town", 6, "Hilton rooftop cocktails with views."),

    // ——— Stays ———
    place("pr-stay-aria", "Aria Hotel Prague", 50.0865, 14.4055, "stay", "Hotel", "Malá Strana", 9, "Music-themed boutique below the castle."),
    place("pr-stay-augustine", "Augustine Hotel", 50.0885, 14.405, "stay", "Hotel", "Malá Strana", 9, "Monastery luxury in Malá Strana."),
    place("pr-stay-icon", "Hotel Icon", 50.0785, 14.4285, "stay", "Hotel", "New Town", 7, "Design hotel near Wenceslas Square."),
    place("pr-stay-mosaic", "Mosaic House", 50.0755, 14.4185, "stay", "Hotel", "New Town", 7, "Eco hotel-hostel hybrid by the river."),
    place("pr-stay-czech", "Czech Inn", 50.07, 14.445, "stay", "Hostel", "Vinohrady", 6, "Popular hostel-bar in Vinohrady."),
    place("pr-stay-sirius", "Sir Toby's Hostel", 50.1055, 14.445, "stay", "Hostel", "Holešovice", 6, "Social hostel near DOX and Cross Club."),
    place("pr-stay-old", "Old Town boutique hotel", 50.087, 14.42, "stay", "Hotel", "Old Town", 8, "Walk-everywhere base by the Astronomical Clock."),
    place("pr-stay-apt", "Vinohrady apartment", 50.0755, 14.44, "stay", "Apartment", "Vinohrady", 7, "Residential stay near parks and cafés."),

    // ——— Extra sights ———
    place("pr-rudolfinum", "Rudolfinum", 50.09, 14.4155, "sight", "Monument", "Old Town", 7, "Neo-Renaissance concert hall by the river."),
    place("pr-klementinum", "Klementinum", 50.0865, 14.4165, "sight", "Attraction", "Old Town", 7, "Astronomical tower and baroque library tour."),
    place("pr-metronome", "Letná Metronome", 50.0955, 14.4165, "sight", "Monument", "Letná", 6, "Giant metronome where Stalin's statue stood."),
    place("pr-franz-statue", "Franz Kafka rotating head", 50.0905, 14.4205, "sight", "Attraction", "Josefov", 5, "Mirrored kinetic sculpture near Národní třída."),
    place("pr-slavie", "Slavia Island / Štvanice area", 50.0955, 14.44, "nature", "Park", "Holešovice", 5, "River island paths north of the center."),
    place("pr-vinohrady-theatre", "Náměstí Míru", 50.0755, 14.4375, "sight", "Attraction", "Vinohrady", 6, "Neo-Gothic church square in Vinohrady."),
  ],
};
