import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const andorralavella: CityCatalog = {
  id: "andorralavella",
  name: "Andorra la Vella, Andorra",
  aliases: ["andorra", "andorra la vella", "andorralavella", "andorra capital"],
  center: { lat: 42.5063, lon: 1.5218 },
  places: [
    // ——— Old town / centre ———
    place("ad-casa-vall", "Casa de la Vall", 42.507, 1.5215, "sight", "Attraction", "Old Town", 9, "Historic parliament house in the stone old town."),
    place("ad-sant-esteve", "Església de Sant Esteve", 42.5072, 1.5219, "sight", "Monument", "Old Town", 8, "Romanesque parish church at the heart of the barri antic."),
    place("ad-barri-antic", "Barri Antic lanes", 42.5071, 1.5216, "sight", "Attraction", "Old Town", 8, "Cobble lanes, stone houses, and the original capital core."),
    place("ad-placa-princep", "Plaça del Poble / rooftop square", 42.5068, 1.5212, "sight", "Viewpoint", "Old Town", 7, "Elevated public square with mountain views."),
    place("ad-casa-rdane", "Casa Rull area / heritage houses", 42.5074, 1.5208, "sight", "Monument", "Old Town", 5, "Traditional Andorran stone architecture."),
    place("ad-pont-paris", "Pont de Paris views", 42.5065, 1.5235, "sight", "Attraction", "Center", 5, "Bridge crossing over the Valira with town views."),
    place("ad-govern", "Government buildings", 42.5065, 1.5225, "sight", "Attraction", "Center", 5, "Modern administrative quarter beside the shopping avenues."),

    // ——— Shopping avenues ———
    place("ad-meritxell", "Avinguda Meritxell", 42.5075, 1.5245, "shopping", "Market", "Center", 9, "Main duty-free shopping avenue of the capital."),
    place("ad-carlemany", "Avinguda Carlemany", 42.5095, 1.532, "shopping", "Market", "Escaldes", 8, "Escaldes shopping strip linking toward Caldea."),
    place("ad-illa", "Illla Carlemany mall", 42.51, 1.5335, "shopping", "Mall", "Escaldes", 7, "Covered mall with brands and food court."),
    place("ad-pyrenees", "Centre Comercial Pyrénées", 42.5078, 1.5255, "shopping", "Mall", "Center", 7, "Department-store shopping on Meritxell."),
    place("ad-perfume", "Perfume and electronics row", 42.5076, 1.5248, "shopping", "Market", "Center", 6, "Classic Andorra duty-free categories."),
    place("ad-fleurs", "Craft and souvenir stalls", 42.507, 1.522, "shopping", "Market", "Old Town", 5, "Small gift shops in the barri antic."),

    // ——— Caldea / Escaldes ———
    place("ad-caldea", "Caldea spa", 42.5115, 1.536, "sight", "Attraction", "Escaldes", 10, "Glass spa tower — thermal lagoons and mountain views."),
    place("ad-innon", "Inúu wellness (Caldea complex)", 42.5116, 1.5362, "sight", "Attraction", "Escaldes", 8, "Adults-only premium spa wing beside Caldea."),
    place("ad-escaldes-church", "Sant Pere Màrtir", 42.51, 1.5345, "sight", "Monument", "Escaldes", 6, "Modern parish church in Escaldes-Engordany."),
    place("ad-perfume-museum", "Perfume Museum Escaldes", 42.5105, 1.534, "museum", "Museum", "Escaldes", 5, "Fragrance history stop near the shopping strip."),
    place("ad-thermal", "Escaldes thermal springs heritage", 42.511, 1.5355, "sight", "Attraction", "Escaldes", 6, "Town named for hot waters feeding Caldea."),

    // ——— Museums ———
    place("ad-tobacco", "Museum of Tobacco (Museu del Tabac)", 42.51, 1.53, "museum", "Museum", "Center", 7, "Former factory explaining Andorra's tobacco history."),
    place("ad-carmen-thyssen", "Espai Columba / Romanesque art", 42.5073, 1.5214, "museum", "Museum", "Old Town", 7, "Romanesque mural fragments and sacred art."),
    place("ad-casa-areny", "Casa Areny-Plandolit Museum", 42.556, 1.533, "museum", "Museum", "Ordino", 7, "Noble house museum — short drive/bus to Ordino."),
    place("ad-postal", "Postal Museum", 42.5075, 1.5228, "museum", "Museum", "Center", 5, "Andorran stamps and postal history."),
    place("ad-electric", "Electricity Museum / FWAT", 42.5125, 1.5405, "museum", "Museum", "Escaldes", 5, "Hydroelectric heritage in the valley."),
    place("ad-mirador-roc", "Mirador Roc del Quer area museums link", 42.58, 1.59, "sight", "Viewpoint", "Canillo", 7, "Glass viewpoint platform — popular day trip north."),

    // ——— Nature / viewpoints / mountains ———
    place("ad-central-park", "Parc Central", 42.5055, 1.519, "nature", "Park", "Center", 7, "Riverside park for a break from shopping streets."),
    place("ad-valira", "Valira river walk", 42.5068, 1.523, "nature", "Park", "Center", 7, "Promenade along the river through town."),
    place("ad-recreatiu", "Parc de la Mola / hillside paths", 42.5045, 1.518, "nature", "Park", "Center", 5, "Short uphill paths above the capital."),
    place("ad-comella", "La Comella viewpoint", 42.495, 1.515, "sight", "Viewpoint", "South", 7, "Lookout over Andorra la Vella valley."),
    place("ad-cortals", "Camí de les Pardines / forest walks", 42.515, 1.545, "nature", "Park", "Escaldes", 6, "Wooded walks above Escaldes."),
    place("ad-madriu", "Madriu-Perafita-Claror Valley", 42.49, 1.55, "nature", "Park", "Madriu", 8, "UNESCO glacial valley — hiking day from the capital edge."),
    place("ad-engolasters", "Estany d'Engolasters", 42.52, 1.57, "nature", "Park", "Engolasters", 7, "Mountain lake and picnic spot above Escaldes."),
    place("ad-cable-engolasters", "Cable / road to Engolasters", 42.518, 1.555, "sight", "Attraction", "Escaldes", 6, "Access route up to the lake and viewpoints."),
    place("ad-grandvala", "Grandvalira ski sector day-trip", 42.575, 1.665, "nature", "Park", "Grandvalira", 8, "Linked ski domain — winter day from the capital."),
    place("ad-vallnord", "Vallnord / Pal-Arinsal", 42.545, 1.48, "nature", "Park", "Pal-Arinsal", 7, "Western ski and bike mountains."),
    place("ad-casamanya", "Pic de Casamanya views", 42.58, 1.57, "sight", "Viewpoint", "North", 6, "High peak day-hike with 360° Andorra views."),
    place("ad-sant-joan", "Sant Joan de Caselles", 42.57, 1.595, "sight", "Monument", "Canillo", 6, "Romanesque church with painted altar — north valley."),
    place("ad-meritxell-sanctuary", "Our Lady of Meritxell Sanctuary", 42.554, 1.59, "sight", "Monument", "Meritxell", 7, "National shrine — modern and old sanctuaries side by side."),

    // ——— Nearby villages ———
    place("ad-ordino", "Ordino village", 42.5565, 1.5335, "sight", "Attraction", "Ordino", 7, "Elegant northern parish village."),
    place("ad-la-massana", "La Massana centre", 42.545, 1.5145, "sight", "Attraction", "La Massana", 6, "Gateway town for Pal-Arinsal slopes."),
    place("ad-encamp", "Encamp town", 42.536, 1.582, "sight", "Attraction", "Encamp", 5, "Valley town toward Grandvalira."),
    place("ad-funicamp", "Funicamp cable car", 42.5365, 1.583, "sight", "Attraction", "Encamp", 7, "Long cable car into the Grandvalira ski area."),

    // ——— Cafes ———
    place("ad-cafe-meritxell", "Café on Avinguda Meritxell", 42.507, 1.5235, "cafe", "Cafe", "Center", 6, "Shopping-break coffee on the main avenue.", { cuisine: "coffee" }),
    place("ad-old-town-cafe", "Barri Antic café", 42.5071, 1.5217, "cafe", "Cafe", "Old Town", 7, "Stone-lane coffee near Casa de la Vall.", { cuisine: "coffee" }),
    place("ad-caldea-cafe", "Caldea café terrace", 42.5112, 1.5355, "cafe", "Cafe", "Escaldes", 6, "Post-spa coffee with glass-tower views.", { cuisine: "coffee" }),
    place("ad-pastry", "Pâtisserie Andorra", 42.5074, 1.524, "cafe", "Cafe", "Center", 6, "Pastries and hot chocolate after mountain air.", { cuisine: "pastry coffee" }),
    place("ad-chocolate", "Hot chocolate stop Escaldes", 42.51, 1.533, "cafe", "Cafe", "Escaldes", 5, "Sweet break on Carlemany.", { cuisine: "chocolate coffee" }),
    place("ad-park-cafe", "Parc Central kiosk", 42.5058, 1.5195, "cafe", "Cafe", "Center", 5, "Simple drinks by the river park.", { cuisine: "coffee" }),

    // ——— Food ———
    place("ad-borda", "Borda restaurant (mountain stew)", 42.5085, 1.528, "food", "Restaurant", "Center", 8, "Andorran borda cooking — meats and trinxat.", { cuisine: "andorran alpine" }),
    place("ad-celler", "Celler d'en Toni / local celler", 42.5072, 1.5225, "food", "Restaurant", "Center", 7, "Wine-focused Andorran and Catalan plates.", { cuisine: "catalan andorran" }),
    place("ad-old-town-lunch", "Old Town lunch", 42.5071, 1.5217, "food", "Restaurant", "Old Town", 7, "Traditional plates steps from Casa de la Vall.", { cuisine: "andorran" }),
    place("ad-meritxell-dinner", "Meritxell avenue dinner", 42.5076, 1.525, "food", "Restaurant", "Center", 6, "International menus on the shopping strip.", { cuisine: "european" }),
    place("ad-escaldes-bites", "Escaldes casual dinner", 42.511, 1.535, "food", "Restaurant", "Escaldes", 6, "Post-Caldea meal on Carlemany.", { cuisine: "mediterranean" }),
    place("ad-tapas", "Tapas & grilled meats", 42.5073, 1.5238, "food", "Restaurant", "Center", 6, "Spanish-Catalan sharing plates.", { cuisine: "tapas spanish" }),
    place("ad-pizza", "Pizza / quick meal centre", 42.5068, 1.5232, "food", "Quick meal", "Center", 5, "Budget-friendly after shopping.", { cuisine: "pizza" }),
    place("ad-market-lunch", "Market-style lunch counters", 42.5075, 1.5242, "food", "Quick meal", "Center", 5, "Fast bites between duty-free stores.", { cuisine: "quick" }),
    place("ad-fondue", "Raclette / fondue night", 42.508, 1.526, "food", "Restaurant", "Center", 6, "Alpine cheese dinner for cool evenings.", { cuisine: "fondue alpine" }),
    place("ad-indian", "International kitchen Andorra", 42.509, 1.531, "food", "Restaurant", "Escaldes", 5, "Global menus serving the shopping crowd.", { cuisine: "international" }),
    place("ad-vegetarian", "Vegetarian-friendly Escaldes", 42.5105, 1.5348, "food", "Restaurant", "Escaldes", 5, "Lighter plates near Caldea.", { cuisine: "vegetarian" }),
    place("ad-high-end", "Fine dining Andorra la Vella", 42.5065, 1.522, "food", "Restaurant", "Center", 8, "Upscale tasting menus in the capital.", { cuisine: "contemporary" }),
    place("ad-cannelloni", "Casa Isabella / Catalan classics", 42.507, 1.5228, "food", "Restaurant", "Center", 6, "Cannelloni and Catalan comfort food.", { cuisine: "catalan" }),

    // ——— Nightlife ———
    place("ad-center-bars", "Centre cocktail bars", 42.5074, 1.524, "nightlife", "Bar", "Center", 6, "Aperitif bars along Meritxell after shops close."),
    place("ad-escaldes-night", "Escaldes evening bars", 42.5112, 1.5355, "nightlife", "Bar", "Escaldes", 6, "Nightcaps near Caldea and Carlemany."),
    place("ad-club", "Late club Andorra", 42.5085, 1.527, "nightlife", "Club", "Center", 5, "Small capital nightlife — weekends busier."),
    place("ad-wine-bar", "Wine bar old town", 42.507, 1.5218, "nightlife", "Bar", "Old Town", 6, "Quiet wine in stone surroundings."),
    place("ad-hotel-lounge", "Hotel sky lounge", 42.508, 1.5255, "nightlife", "Bar", "Center", 5, "Hotel bar with valley lights."),

    // ——— Stays ———
    place("ad-stay-center", "Hotel Andorra Center", 42.5073, 1.5238, "stay", "Hotel", "Center", 8, "Walk-to-everything base on the shopping avenues."),
    place("ad-stay-escaldes", "Hotel near Caldea", 42.5118, 1.5365, "stay", "Hotel", "Escaldes", 8, "Spa-trip base beside the glass tower."),
    place("ad-stay-spa", "Spa hotel Escaldes", 42.5115, 1.537, "stay", "Hotel", "Escaldes", 9, "Thermal hotels with in-house wellness."),
    place("ad-stay-old", "Old Town boutique hotel", 42.5072, 1.5215, "stay", "Hotel", "Old Town", 7, "Stone-lane boutique near Casa de la Vall."),
    place("ad-stay-meritxell", "Meritxell avenue hotel", 42.5076, 1.5252, "stay", "Hotel", "Center", 7, "Mid-range shopping-street hotel."),
    place("ad-stay-hostel", "Andorra hostel", 42.506, 1.522, "stay", "Hostel", "Center", 5, "Budget beds for ski and shop trips."),
    place("ad-stay-guest", "Guest house Andorra", 42.508, 1.521, "stay", "Guest house", "Old Town", 6, "Family pension in or near the barri antic."),
    place("ad-stay-apt", "Apartment Andorra la Vella", 42.5065, 1.524, "stay", "Apartment", "Center", 6, "Self-catering for longer mountain stays."),
    place("ad-stay-ordino", "Ordino valley hotel", 42.556, 1.534, "stay", "Hotel", "Ordino", 7, "Quieter parish overnight north of the capital."),
    place("ad-stay-massana", "La Massana ski hotel", 42.5455, 1.515, "stay", "Hotel", "La Massana", 7, "Base for Pal-Arinsal slopes."),
    place("ad-stay-encamp", "Encamp / Funicamp hotel", 42.536, 1.5825, "stay", "Hotel", "Encamp", 6, "Ski-access stay toward Grandvalira."),
    place("ad-stay-luxury", "Luxury mountain resort Andorra", 42.512, 1.538, "stay", "Hotel", "Escaldes", 9, "High-end spa resort energy near Caldea."),
  ],
};
