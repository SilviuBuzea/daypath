import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const sanmarino: CityCatalog = {
  id: "sanmarino",
  name: "San Marino",
  aliases: ["san marino", "sanmarino", "republic of san marino"],
  center: { lat: 43.9424, lon: 12.4578 },
  places: [
    // ——— Three Towers / Monte Titano ———
    place("sm-guaita", "Guaita Tower (First Tower)", 43.9365, 12.4465, "sight", "Castle", "Monte Titano", 10, "Oldest tower — classic postcard view over the Adriatic plain."),
    place("sm-cesta", "Cesta Tower (Second Tower)", 43.9335, 12.452, "sight", "Castle", "Monte Titano", 9, "Museum of ancient arms inside the middle tower."),
    place("sm-montale", "Montale Tower (Third Tower)", 43.932, 12.4505, "sight", "Castle", "Monte Titano", 8, "Smallest tower — viewpoint stop on the ridge walk."),
    place("sm-passaggio", "Passaggio delle Streghe", 43.935, 12.4485, "sight", "Viewpoint", "Monte Titano", 8, "Cliff path linking Guaita and Cesta with dramatic drops."),
    place("sm-titano-view", "Monte Titano panoramic terraces", 43.9345, 12.4485, "sight", "Viewpoint", "Monte Titano", 8, "Wide views toward Rimini and the coast on clear days."),
    place("sm-cable-car", "Funivia San Marino", 43.9415, 12.4495, "sight", "Attraction", "Borgo Maggiore", 9, "Cable car from Borgo Maggiore up to the historic centre."),
    place("sm-cable-upper", "Cable car upper station terrace", 43.9368, 12.4478, "sight", "Viewpoint", "City Center", 7, "Arrive by gondola and step onto the old-town ridge."),

    // ——— Historic centre ———
    place("sm-palace", "Palazzo Pubblico", 43.9355, 12.446, "sight", "Attraction", "City Center", 9, "Neo-Gothic seat of government on Piazza della Libertà."),
    place("sm-piazza-liberta", "Piazza della Libertà", 43.9356, 12.4462, "sight", "Attraction", "City Center", 8, "Statue of Liberty square and changing of the guard."),
    place("sm-basilica", "Basilica of San Marino", 43.936, 12.447, "sight", "Monument", "City Center", 8, "Neoclassical basilica dedicated to the republic's founder."),
    place("sm-piazza-domus", "Piazza Domus Plebis", 43.9358, 12.4469, "sight", "Attraction", "City Center", 6, "Church square above the basilica steps."),
    place("sm-porta-san-francesco", "Porta San Francesco", 43.9348, 12.4455, "sight", "Monument", "City Center", 6, "Historic gate into the walled old town."),
    place("sm-cava-dei-balestrieri", "Cava dei Balestrieri", 43.9352, 12.4458, "sight", "Attraction", "City Center", 6, "Crossbow tournament quarry below the walls."),
    place("sm-contrada-omonelli", "Contrada Omerelli", 43.9354, 12.4465, "shopping", "Market", "City Center", 6, "Main souvenir and stamp-shop street."),
    place("sm-via-basilicius", "Via Basilicius stroll", 43.9359, 12.4472, "sight", "Attraction", "City Center", 5, "Quiet lane linking towers walk to the basilica."),
    place("sm-statue-garibaldi", "Garibaldi monument area", 43.9362, 12.448, "sight", "Monument", "City Center", 5, "Small memorial stop on the upper streets."),

    // ——— Museums ———
    place("sm-state-museum", "Museo di Stato", 43.9358, 12.4468, "museum", "Museum", "City Center", 7, "State museum covering San Marino history and art."),
    place("sm-arms-museum", "Museum of Ancient Arms (Cesta)", 43.9336, 12.4521, "museum", "Museum", "Monte Titano", 7, "Weaponry collection inside the Second Tower."),
    place("sm-torture", "Museum of Torture", 43.9353, 12.4466, "museum", "Museum", "City Center", 5, "Tourist museum of historical instruments — skip if squeamish."),
    place("sm-wax", "Wax Museum", 43.9351, 12.4464, "museum", "Museum", "City Center", 5, "Celebrity and historical figures in wax."),
    place("sm-vampire", "Museum of Curiosities / Vampire Museum", 43.935, 12.447, "museum", "Museum", "City Center", 4, "Oddity stop on the souvenir strip."),
    place("sm-philately", "Museum of Philately and Numismatics", 43.9357, 12.4475, "museum", "Museum", "City Center", 6, "Stamps and coins — San Marino is famous for both."),
    place("sm-modern-contemporary", "Gallery of Modern and Contemporary Art", 43.9361, 12.4478, "museum", "Museum", "City Center", 5, "Small rotating contemporary shows."),
    place("sm-sacred-art", "Museum of Sacred Art", 43.936, 12.4471, "museum", "Museum", "City Center", 5, "Religious art near the basilica complex."),

    // ——— Borgo Maggiore / edges ———
    place("sm-borgo-square", "Piazza Grande Borgo Maggiore", 43.9412, 12.4488, "sight", "Attraction", "Borgo Maggiore", 6, "Market town square below the cable-car base."),
    place("sm-mercato-borgo", "Borgo Maggiore market", 43.941, 12.449, "shopping", "Market", "Borgo Maggiore", 6, "Weekly market energy at the foot of Titano."),
    place("sm-santuario-cuore", "Santuario del Cuore Immacolato", 43.9385, 12.45, "sight", "Monument", "Borgo Maggiore", 5, "Modern sanctuary on the hillside approach."),
    place("sm-montegiardino", "Montegiardino village", 43.9095, 12.4845, "sight", "Attraction", "Montegiardino", 5, "Quiet castello village for a slower half-day."),
    place("sm-faetano", "Faetano countryside", 43.925, 12.498, "nature", "Park", "Faetano", 5, "Rural lanes and vineyard views in the east."),
    place("sm-acquaviva", "Acquaviva viewpoint", 43.946, 12.419, "sight", "Viewpoint", "Acquaviva", 5, "Western castello overlook toward the hills."),
    place("sm-serravalle", "Serravalle / Dogana area", 43.9685, 12.4785, "sight", "Attraction", "Serravalle", 6, "Shopping and stadium zone near the Italian border."),
    place("sm-olympia", "San Marino Stadium area", 43.9695, 12.4795, "sight", "Attraction", "Serravalle", 5, "National football ground at Serravalle."),

    // ——— Nature / viewpoints ———
    place("sm-parco-naturale", "Parco Naturale del Monte Titano", 43.933, 12.449, "nature", "Park", "Monte Titano", 7, "Trail sections between the towers and cliff edges."),
    place("sm-montelupo", "Mount view toward Rimini", 43.9348, 12.4495, "sight", "Viewpoint", "Monte Titano", 7, "Coastline spotting from the eastern terraces."),
    place("sm-sunset-wall", "Western wall sunset spot", 43.9355, 12.4452, "sight", "Viewpoint", "City Center", 7, "Golden-hour light over the Italian plain."),

    // ——— Shopping ———
    place("sm-duty-free", "Duty-free and electronics lanes", 43.9352, 12.4468, "shopping", "Market", "City Center", 6, "Tax-free cameras, perfume, and alcohol shops."),
    place("sm-stamp-shops", "Stamp and coin dealers", 43.9355, 12.4467, "shopping", "Market", "City Center", 6, "Collectors' stalls near Piazza della Libertà."),
    place("sm-ceramics", "Ceramics and craft stalls", 43.9353, 12.4472, "shopping", "Market", "City Center", 5, "Local pottery among the souvenir rows."),
    place("sm-serravalle-outlet", "Serravalle shopping streets", 43.968, 12.478, "shopping", "Mall", "Serravalle", 6, "Practical retail near the border crossing."),

    // ——— Cafes ———
    place("sm-cafe-liberta", "Caffè Piazza della Libertà", 43.9357, 12.4465, "cafe", "Cafe", "City Center", 7, "Terrace coffee facing the Palazzo Pubblico.", { cuisine: "coffee" }),
    place("sm-cafe-titano", "Caffè Titano terrace", 43.935, 12.4458, "cafe", "Cafe", "Monte Titano", 6, "View coffee near the First Tower approach.", { cuisine: "coffee" }),
    place("sm-gelato", "Gelateria on Contrada Omerelli", 43.9354, 12.4466, "cafe", "Cafe", "City Center", 6, "Gelato break on the main shopping street.", { cuisine: "gelato" }),
    place("sm-borgo-cafe", "Borgo Maggiore cafe", 43.9413, 12.4492, "cafe", "Cafe", "Borgo Maggiore", 5, "Coffee before or after the cable car.", { cuisine: "coffee" }),
    place("sm-pasticceria", "Pasticceria Caffe San Marino", 43.9356, 12.447, "cafe", "Cafe", "City Center", 6, "Pastries and espresso for a mid-walk pause.", { cuisine: "pastry coffee" }),
    place("sm-tower-cafe", "Second Tower snack bar", 43.9337, 12.4518, "cafe", "Cafe", "Monte Titano", 5, "Simple drinks after the ridge walk.", { cuisine: "coffee" }),

    // ——— Food ———
    place("sm-ristorante-righi", "Ristorante Righi", 43.9356, 12.4463, "food", "Restaurant", "City Center", 8, "Fine dining overlooking Piazza della Libertà.", { cuisine: "italian" }),
    place("sm-bolognese", "La Taverna", 43.9352, 12.447, "food", "Restaurant", "City Center", 7, "Hearty Romagna-leaning plates in the old town.", { cuisine: "italian" }),
    place("sm-piada", "Piadina stand", 43.9355, 12.4469, "food", "Quick meal", "City Center", 7, "Flatbread wraps — the classic quick San Marino bite.", { cuisine: "street_food italian" }),
    place("sm-cannella", "Ristorante Bolognese", 43.9348, 12.4465, "food", "Restaurant", "City Center", 6, "Pasta and grill near the walls.", { cuisine: "italian" }),
    place("sm-titano-dinner", "Hotel Titano restaurant", 43.935, 12.4455, "food", "Restaurant", "Monte Titano", 7, "Panoramic dinner with ridge views.", { cuisine: "italian" }),
    place("sm-borgo-trattoria", "Trattoria Borgo Maggiore", 43.941, 12.4495, "food", "Restaurant", "Borgo Maggiore", 6, "Local lunch before riding up the funivia.", { cuisine: "italian" }),
    place("sm-pizza", "Pizzeria centro storico", 43.9353, 12.4475, "food", "Quick meal", "City Center", 6, "Casual pizza for a budget meal on the rock.", { cuisine: "pizza italian" }),
    place("sm-cibo", "Osteria del Castello", 43.9349, 12.4462, "food", "Restaurant", "City Center", 6, "Stone-room osteria near Porta San Francesco.", { cuisine: "italian" }),
    place("sm-panino", "Panino and porchetta window", 43.9357, 12.4473, "food", "Quick meal", "City Center", 5, "Grab-and-go sandwich between museum hops.", { cuisine: "street_food" }),
    place("sm-adriatic", "Seafood day-trip lunch vibe", 43.9358, 12.448, "food", "Restaurant", "City Center", 5, "Fish plates when you want a break from meat sauces.", { cuisine: "seafood" }),
    place("sm-vegetarian", "Vegetarian-friendly trattoria", 43.9351, 12.4472, "food", "Restaurant", "City Center", 5, "Pasta and salads without the heavy tourist traps.", { cuisine: "vegetarian italian" }),
    place("sm-wine-bar-food", "Wine bar plates", 43.9354, 12.446, "food", "Restaurant", "City Center", 6, "Cheese, salumi, and local wine by the glass.", { cuisine: "italian wine" }),

    // ——— Nightlife ———
    place("sm-bar-liberta", "Bar Piazza della Libertà", 43.9355, 12.4464, "nightlife", "Bar", "City Center", 6, "Aperitivo facing the Public Palace."),
    place("sm-titano-lounge", "Titano sunset lounge", 43.9348, 12.4455, "nightlife", "Bar", "Monte Titano", 6, "Drinks timed for the western wall sunset."),
    place("sm-disco", "Caffè Retro / late bars", 43.9352, 12.4468, "nightlife", "Bar", "City Center", 5, "Small late spots — nightlife is modest here."),
    place("sm-borgo-night", "Borgo Maggiore evening bar", 43.9412, 12.449, "nightlife", "Bar", "Borgo Maggiore", 5, "Quieter drinks below the cable car after day-trippers leave."),
    place("sm-hotel-bar", "Grand Hotel San Marino bar", 43.9365, 12.4485, "nightlife", "Bar", "City Center", 5, "Hotel lounge nightcap with valley views."),

    // ——— Stays ———
    place("sm-hotel-titano", "Hotel Titano", 43.935, 12.4455, "stay", "Hotel", "Monte Titano", 8, "Classic old-town hotel with terrace views."),
    place("sm-grand-hotel", "Grand Hotel San Marino", 43.9365, 12.4485, "stay", "Hotel", "City Center", 8, "Larger upscale base near the cable-car top."),
    place("sm-hotel-centro", "Hotel Centro Storico", 43.9358, 12.4472, "stay", "Hotel", "City Center", 7, "Walk-everywhere rooms inside the walls."),
    place("sm-hotel-joli", "Hotel Joli", 43.9345, 12.446, "stay", "Hotel", "City Center", 6, "Simple mid-range near Porta San Francesco."),
    place("sm-hotel-rosa", "Hotel Rosa", 43.9352, 12.4478, "stay", "Hotel", "City Center", 6, "Family-run stay on the upper lanes."),
    place("sm-borgo-hotel", "Hotel in Borgo Maggiore", 43.9415, 12.4498, "stay", "Hotel", "Borgo Maggiore", 6, "Sleep below and ride the funivia each morning."),
    place("sm-guesthouse", "Old Town guest house", 43.9348, 12.447, "stay", "Guest house", "City Center", 6, "Rooms in historic buildings near the towers path."),
    place("sm-apartment", "Titano apartment", 43.9355, 12.4475, "stay", "Apartment", "City Center", 6, "Self-catering flat for multi-night stays."),
    place("sm-hostel", "San Marino hostel-style", 43.937, 12.449, "stay", "Hostel", "City Center", 5, "Budget beds on the approach to the historic centre."),
    place("sm-agriturismo", "Countryside agriturismo", 43.92, 12.46, "stay", "Guest house", "Countryside", 6, "Farm stay with valley quiet outside the tourist core."),
    place("sm-serravalle-stay", "Serravalle hotel", 43.9685, 12.4788, "stay", "Hotel", "Serravalle", 5, "Border-area base if driving in from Rimini."),
    place("sm-boutique", "Boutique stay near Piazza", 43.9357, 12.4466, "stay", "Hotel", "City Center", 7, "Small design rooms steps from the Palazzo Pubblico."),
  ],
};
