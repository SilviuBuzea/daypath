import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const berlin: CityCatalog = {
  id: "berlin",
  name: "Berlin, Germany",
  aliases: ["berlin"],
  center: { lat: 52.52, lon: 13.405 },
  places: [
    // ——— Mitte ———
    place("be-gate", "Brandenburg Gate", 52.5163, 13.3777, "sight", "Monument", "Mitte", 10, "Iconic neoclassical gate — start your Mitte day here."),
    place("be-reichstag", "Reichstag", 52.5186, 13.3761, "sight", "Attraction", "Mitte", 9, "Glass dome over the Bundestag — book free timed entry."),
    place("be-holocaust", "Memorial to the Murdered Jews of Europe", 52.5139, 13.3787, "sight", "Monument", "Mitte", 8, "Concrete stelae field south of Brandenburg Gate."),
    place("be-museum-island", "Museum Island", 52.5169, 13.3978, "museum", "Museum", "Mitte", 10, "UNESCO cluster — Pergamon, Neues, Altes, Bode."),
    place("be-pergamon", "Pergamonmuseum", 52.5211, 13.3969, "museum", "Museum", "Mitte", 9, "Ishtar Gate and Pergamon altar (check renovation access)."),
    place("be-neues", "Neues Museum", 52.5202, 13.3977, "museum", "Museum", "Mitte", 9, "Nefertiti bust and Egyptian collection."),
    place("be-altes", "Altes Museum", 52.5195, 13.3985, "museum", "Museum", "Mitte", 8, "Classical antiquities facing Lustgarten."),
    place("be-bode", "Bode-Museum", 52.5219, 13.3947, "museum", "Museum", "Mitte", 7, "Sculpture and Byzantine art on the island tip."),
    place("be-dom", "Berlin Cathedral", 52.5191, 13.4011, "sight", "Monument", "Mitte", 8, "Dome climb above Museum Island."),
    place("be-unter-den-linden", "Unter den Linden", 52.5168, 13.3889, "sight", "Attraction", "Mitte", 7, "Linden avenue from Gate to the island."),
    place("be-checkpoint", "Checkpoint Charlie", 52.5075, 13.3904, "sight", "Attraction", "Mitte", 6, "Cold War crossing — photo stop, skip the kitsch museum queues."),
    place("be-gendarmenmarkt", "Gendarmenmarkt", 52.5136, 13.3927, "sight", "Attraction", "Mitte", 8, "Twin churches and Konzerthaus square."),
    place("be-hackescher", "Hackesche Höfe", 52.5241, 13.4022, "sight", "Attraction", "Mitte", 7, "Art Nouveau courtyards and indie shops."),
    place("be-nikolaiviertel", "Nikolaiviertel", 52.5167, 13.4075, "sight", "Attraction", "Mitte", 6, "Rebuilt medieval quarter by the Spree."),
    place("be-tv-tower", "TV Tower", 52.5208, 13.4094, "sight", "Viewpoint", "Alexanderplatz", 8, "Sphere panorama over Alexanderplatz."),
    place("be-alex", "Alexanderplatz", 52.5219, 13.4132, "sight", "Attraction", "Alexanderplatz", 6, "Transit hub with World Clock and malls."),
    place("be-neue-wache", "Neue Wache", 52.5176, 13.3955, "sight", "Monument", "Mitte", 6, "Käthe Kollwitz Pietà war memorial."),
    place("be-humboldt-forum", "Humboldt Forum", 52.5174, 13.4025, "museum", "Museum", "Mitte", 8, "Rebuilt palace with ethnology collections and rooftop."),

    // ——— Tiergarten / Potsdamer ———
    place("be-tiergarten", "Tiergarten", 52.5145, 13.35, "nature", "Park", "Tiergarten", 8, "Central park — bike or walk between Gate and Zoo."),
    place("be-victory", "Victory Column", 52.5145, 13.3501, "sight", "Monument", "Tiergarten", 7, "Golden Angel of Victory — climb for park views."),
    place("be-potsdamer", "Potsdamer Platz", 52.5096, 13.376, "sight", "Attraction", "Potsdamer Platz", 6, "Glass towers on the former death strip."),
    place("be-topographie", "Topography of Terror", 52.5065, 13.3838, "museum", "Museum", "Mitte", 9, "Gestapo/SS site museum along remaining Wall strip."),
    place("be-kulturforum", "Kulturforum", 52.5082, 13.3675, "museum", "Museum", "Tiergarten", 8, "Gemäldegalerie and Philharmonie cluster."),
    place("be-gemaldegalerie", "Gemäldegalerie", 52.5084, 13.3672, "museum", "Museum", "Tiergarten", 9, "European Old Masters west of Potsdamer."),
    place("be-jewish-museum", "Jewish Museum Berlin", 52.5022, 13.3955, "museum", "Museum", "Kreuzberg", 9, "Libeskind zinc building and Jewish history."),
    place("be-zoo", "Berlin Zoo", 52.5079, 13.3377, "nature", "Park", "Charlottenburg", 7, "Historic zoo beside Bahnhof Zoo."),

    // ——— Charlottenburg ———
    place("be-charlottenburg", "Charlottenburg Palace", 52.5205, 13.2957, "sight", "Castle", "Charlottenburg", 8, "Baroque palace and gardens in the west."),
    place("be-kurfurstendamm", "Kurfürstendamm", 52.5035, 13.3325, "shopping", "Market", "Charlottenburg", 7, "West Berlin boulevard shopping."),
    place("be-kadewe", "KaDeWe", 52.5018, 13.3407, "shopping", "Mall", "Schöneberg", 8, "Legendary department store food halls."),
    place("be-kaufhaus", "Bikini Berlin", 52.5055, 13.3375, "shopping", "Mall", "Charlottenburg", 6, "Concept mall overlooking the zoo."),

    // ——— Kreuzberg / Friedrichshain ———
    place("be-east-side", "East Side Gallery", 52.505, 13.4397, "sight", "Attraction", "Friedrichshain", 8, "Longest open-air Wall mural stretch."),
    place("be-oberbaum", "Oberbaum Bridge", 52.5018, 13.4456, "sight", "Attraction", "Friedrichshain", 7, "Brick twin towers linking Kreuzberg and F'hain."),
    place("be-markthalle-neun", "Markthalle Neun", 52.5022, 13.4315, "shopping", "Market", "Kreuzberg", 8, "Street Food Thursday and produce hall."),
    place("be-bergmann", "Bergmannstraße", 52.4895, 13.3915, "shopping", "Market", "Kreuzberg", 7, "Cafés, bookshops, and Marheineke Markthalle."),
    place("be-victoria-park", "Viktoriapark", 52.4892, 13.3815, "nature", "Park", "Kreuzberg", 7, "Artificial waterfall and Kreuzberg hill views."),
    place("be-tempelhofer", "Tempelhofer Feld", 52.473, 13.4035, "nature", "Park", "Neukölln", 9, "Former airport runways for bikes and picnics."),
    place("be-raw", "RAW Gelände", 52.5085, 13.4535, "sight", "Attraction", "Friedrichshain", 7, "Street art yards, climbing, and bars."),
    place("be-boxhagener", "Boxhagener Platz", 52.5125, 13.4585, "shopping", "Market", "Friedrichshain", 6, "Sunday flea market and weekday stalls."),

    // ——— Prenzlauer Berg / Wedding ———
    place("be-mauerpark", "Mauerpark", 52.5435, 13.4025, "nature", "Park", "Prenzlauer Berg", 8, "Sunday flea market and karaoke amphitheatre."),
    place("be-kulturbrauerei", "Kulturbrauerei", 52.5395, 13.4135, "sight", "Attraction", "Prenzlauer Berg", 7, "Former brewery culture complex."),
    place("be-bernauer", "Berlin Wall Memorial", 52.535, 13.39, "sight", "Monument", "Mitte", 9, "Authentic Wall strip on Bernauer Straße."),
    place("be-volkspark", "Volkspark Friedrichshain", 52.5265, 13.44, "nature", "Park", "Friedrichshain", 6, "Märchenbrunnen and hillside lawns."),
    place("be-naturkundemuseum", "Natural History Museum", 52.5305, 13.3795, "museum", "Museum", "Mitte", 8, "Dinosaur hall north of Hauptbahnhof."),
    place("be-hamburger-bahnhof", "Hamburger Bahnhof", 52.5285, 13.3725, "museum", "Museum", "Mitte", 7, "Contemporary art in a former station."),
    place("be-boros", "Boros Collection", 52.5235, 13.3845, "museum", "Museum", "Mitte", 7, "Bunker contemporary art — book tours."),

    // ——— More sights ———
    place("be-spree-boat", "Spree river cruise pier", 52.5165, 13.3855, "sight", "Attraction", "Mitte", 6, "Sightseeing boats from near Museum Island."),
    place("be-olympiastadion", "Olympiastadion", 52.5145, 13.2395, "sight", "Attraction", "Charlottenburg", 6, "1936 stadium — football and athletics tours."),
    place("be-tegel-forest", "Tegeler Forst edge", 52.58, 13.27, "nature", "Park", "Reinickendorf", 5, "Forest walks northwest if you want green escape."),

    // ——— Cafes ———
    place("be-cafe-einstein", "Café Einstein Stammhaus", 52.5025, 13.3515, "cafe", "Cafe", "Tiergarten", 7, "Viennese-style coffeehouse near Tiergarten.", { cuisine: "coffee viennese" }),
    place("be-cafe-bonanza", "Bonanza Coffee Heroes", 52.5395, 13.4125, "cafe", "Cafe", "Prenzlauer Berg", 7, "Specialty roast in Prenzlauer Berg.", { cuisine: "coffee" }),
    place("be-cafe-five", "Five Elephant", 52.4945, 13.4285, "cafe", "Cafe", "Kreuzberg", 7, "Cheesecake and espresso in Kreuzberg.", { cuisine: "coffee pastry" }),
    place("be-cafe-chapter", "The Barn", 52.5285, 13.4015, "cafe", "Cafe", "Mitte", 7, "Third-wave coffee near Rosenthaler Platz.", { cuisine: "coffee" }),
    place("be-cafe-house", "House of Small Wonder", 52.5245, 13.3985, "cafe", "Cafe", "Mitte", 6, "Japanese-inspired brunch near Hackescher.", { cuisine: "brunch japanese" }),
    place("be-cafe-sister", "Sister Heart", 52.5015, 13.4255, "cafe", "Cafe", "Kreuzberg", 6, "Kreuzberg all-day brunch café.", { cuisine: "brunch coffee" }),
    place("be-cafe-father", "Father Carpenter", 52.5248, 13.4055, "cafe", "Cafe", "Mitte", 6, "Courtyard coffee off Hackescher Markt.", { cuisine: "coffee brunch" }),
    place("be-cafe-zeit", "Café am Neuen See", 52.5105, 13.3425, "cafe", "Cafe", "Tiergarten", 7, "Beer garden and coffee by the Tiergarten lake.", { cuisine: "coffee beer" }),

    // ——— Food ———
    place("be-food-mustafa", "Mustafa's Gemüse Kebap", 52.5055, 13.3915, "food", "Quick meal", "Kreuzberg", 8, "Legendary vegetable döner queue on Mehringdamm.", { cuisine: "turkish kebab" }),
    place("be-food-konnopke", "Konnopke's Imbiss", 52.5405, 13.4125, "food", "Quick meal", "Prenzlauer Berg", 7, "Classic currywurst under the U-Bahn tracks.", { cuisine: "german street_food" }),
    place("be-food-nobelhart", "Nobelhart & Schmutzig", 52.4985, 13.3915, "food", "Restaurant", "Kreuzberg", 9, "Locavore tasting menu — book ahead.", { cuisine: "german" }),
    place("be-food-tim", "Tim Raue", 52.5065, 13.3915, "food", "Restaurant", "Kreuzberg", 9, "Asian-German fine dining near Checkpoint.", { cuisine: "asian german" }),
    place("be-food-markthalle", "Markthalle Neun counters", 52.5022, 13.4318, "food", "Quick meal", "Kreuzberg", 7, "Pasta, pizza, and natural wine in the hall.", { cuisine: "market european" }),
    place("be-food-zur", "Zur letzten Instanz", 52.5175, 13.4185, "food", "Restaurant", "Mitte", 7, "Berlin's oldest inn — Eisbein and beer.", { cuisine: "german" }),
    place("be-food-cookies", "Cookies Cream", 52.5155, 13.3885, "food", "Restaurant", "Mitte", 8, "Hidden vegetarian fine dining near Unter den Linden.", { cuisine: "vegetarian" }),
    place("be-food-hasir", "Hasir Kreuzberg", 52.4995, 13.4225, "food", "Restaurant", "Kreuzberg", 7, "Classic Turkish meze and kebabs.", { cuisine: "turkish" }),
    place("be-food-cocolo", "Cocolo Ramen", 52.5015, 13.42, "food", "Restaurant", "Kreuzberg", 7, "Tiny ramen counter in Kreuzberg.", { cuisine: "japanese ramen" }),
    place("be-food-stdier", "Standard Serious Pizza", 52.5285, 13.401, "food", "Restaurant", "Mitte", 6, "Neapolitan pizza near Rosenthaler.", { cuisine: "italian pizza" }),
    place("be-food-burgermeister", "Burgermeister", 52.5005, 13.4445, "food", "Quick meal", "Kreuzberg", 7, "Burgers under the U1 at Schlesisches Tor.", { cuisine: "burgers" }),
    place("be-food-local", "Lokal", 52.5245, 13.405, "food", "Restaurant", "Mitte", 7, "Seasonal German near Hackescher Höfe.", { cuisine: "german" }),
    place("be-food-prater", "Prater Garten", 52.5395, 13.41, "food", "Restaurant", "Prenzlauer Berg", 7, "Berlin's oldest beer garden with schnitzel.", { cuisine: "german beer" }),
    place("be-food-house", "House of Food / Boxi", 52.5125, 13.459, "food", "Quick meal", "Friedrichshain", 6, "Market bites around Boxhagener Platz.", { cuisine: "market street_food" }),

    // ——— Nightlife ———
    place("be-night-berghain", "Berghain area", 52.511, 13.443, "nightlife", "Club", "Friedrichshain", 9, "World-famous techno temple — no guarantees at the door."),
    place("be-night-watergate", "Watergate", 52.5005, 13.4455, "nightlife", "Club", "Kreuzberg", 7, "Spree-view electronic club by Oberbaum."),
    place("be-night-kitkat", "KitKatClub", 52.5055, 13.4515, "nightlife", "Club", "Friedrichshain", 6, "Fetish-friendly techno — dress code applies."),
    place("be-night-soho", "Soho House Berlin bar", 52.5275, 13.41, "nightlife", "Bar", "Mitte", 6, "Rooftop and lobby drinks if you have access."),
    place("be-night-buck", "Buck and Breck", 52.5285, 13.4018, "nightlife", "Bar", "Mitte", 7, "Speakeasy cocktails near Rosenthaler."),
    place("be-night-klunker", "Klunkerkranich", 52.4825, 13.4335, "nightlife", "Bar", "Neukölln", 8, "Rooftop bar on a Neukölln parking garage."),
    place("be-night-birgit", "Birgit&Bier", 52.4985, 13.4495, "nightlife", "Bar", "Kreuzberg", 6, "Beer garden and late parties by the Spree."),

    // ——— Stays ———
    place("be-stay-adlon", "Hotel Adlon Kempinski", 52.5162, 13.3802, "stay", "Hotel", "Mitte", 10, "Landmark luxury beside Brandenburg Gate."),
    place("be-stay-soho", "Soho House Berlin", 52.5275, 13.4105, "stay", "Hotel", "Mitte", 8, "Members' club hotel in a Mitte factory."),
    place("be-stay-25hours", "25hours Bikini Berlin", 52.5055, 13.3378, "stay", "Hotel", "Charlottenburg", 8, "Zoo-view rooms above Bikini Berlin."),
    place("be-stay-michelberger", "Michelberger Hotel", 52.5045, 13.4485, "stay", "Hotel", "Friedrichshain", 8, "Creative Spree-side stay by East Side Gallery."),
    place("be-stay-nh", "NH Collection Berlin Mitte", 52.5115, 13.3905, "stay", "Hotel", "Mitte", 7, "Solid Mitte base near Checkpoint Charlie."),
    place("be-stay-generator", "Generator Berlin Mitte", 52.5265, 13.4185, "stay", "Hostel", "Mitte", 6, "Large design hostel near Oranienburger."),
    place("be-stay-plus", "Plus Berlin", 52.5015, 13.445, "stay", "Hostel", "Friedrichshain", 6, "Pool hostel by Oberbaum Bridge."),
    place("be-stay-apt", "Prenzlauer Berg apartment", 52.5385, 13.412, "stay", "Apartment", "Prenzlauer Berg", 7, "Residential base near Mauerpark and cafés."),
  ],
};
