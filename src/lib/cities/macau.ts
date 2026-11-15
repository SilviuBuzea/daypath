import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const macau: CityCatalog = {
  id: "macau",
  name: "Macau, China",
  aliases: ["macau", "macao", "macau china"],
  center: { lat: 22.1987, lon: 113.5439 },
  places: [
    // ——— Historic Centre / Senado ———
    place("mac-ruins-paul", "Ruins of St Paul's", 22.1978, 113.5408, "sight", "Monument", "Historic Centre", 10, "Iconic stone facade — climb the steps for the classic photo."),
    place("mac-senado", "Senado Square", 22.1942, 113.5415, "sight", "Attraction", "Historic Centre", 9, "Wavy mosaic plaza and the heart of the UNESCO old town."),
    place("mac-st-dominic", "St Dominic's Church", 22.1945, 113.5412, "sight", "Monument", "Historic Centre", 7, "Yellow baroque church on the square."),
    place("mac-holy-house", "Holy House of Mercy", 22.194, 113.5418, "museum", "Museum", "Historic Centre", 6, "Macau's oldest charity — small heritage museum inside."),
    place("mac-leal-senado", "Leal Senado Building", 22.1938, 113.5409, "sight", "Monument", "Historic Centre", 7, "Portuguese civic architecture at the square's south end."),
    place("mac-st-augustine", "St Augustine's Square cluster", 22.1948, 113.5405, "sight", "Attraction", "Historic Centre", 6, "Quiet stone square linking museum row to the Ruins."),
    place("mac-st-lawrence", "St Lawrence's Church", 22.1915, 113.5385, "sight", "Monument", "Historic Centre", 6, "Neoclassical church on the slope toward Nam Van."),
    place("mac-camoes", "Camões Garden & Grotto", 22.1972, 113.5425, "nature", "Garden", "Historic Centre", 7, "Shaded hill garden behind the Ruins."),
    place("mac-fortress", "Mount Fortress", 22.1975, 113.5432, "sight", "Monument", "Historic Centre", 8, "Cannon ramparts and city views beside the museum."),
    place("mac-museum-macau", "Macau Museum", 22.1973, 113.543, "museum", "Museum", "Historic Centre", 8, "Macau story inside the fortress — good context before wandering lanes."),

    // ——— Inner Harbour / A-Ma ———
    place("mac-ama", "A-Ma Temple", 22.1867, 113.5315, "sight", "Monument", "Barra", 9, "Macau's oldest temple — incense and rock niches by the water."),
    place("mac-maritime", "Maritime Museum", 22.1872, 113.5318, "museum", "Museum", "Barra", 7, "Fishing boats and harbour history beside A-Ma."),
    place("mac-moorish-barracks", "Moorish Barracks", 22.188, 113.5325, "sight", "Monument", "Barra", 6, "Distinctive striped arches facing the inner harbour."),
    place("mac-lilau", "Lilau Square", 22.1895, 113.536, "sight", "Attraction", "Barra", 6, "Fountain square where Portuguese settlers first lived."),
    place("mac-mandarin-house", "Mandarin's House", 22.189, 113.5365, "museum", "Museum", "Barra", 7, "Restored scholar's mansion near Lilau."),
    place("mac-barra-pier", "Barra Pier walk", 22.186, 113.5308, "nature", "Viewpoint", "Barra", 6, "Sea breeze and sampan views at Macau's southern tip."),

    // ——— Nam Van / Grand Prix ———
    place("mac-macau-tower", "Macau Tower", 22.1798, 113.5365, "sight", "Attraction", "Nam Van", 9, "City panorama — observation deck or bungy if you're bold."),
    place("mac-grand-lisboa", "Grand Lisboa skyline", 22.1898, 113.5435, "sight", "Attraction", "Grand Lisboa", 7, "Lotus-shaped tower defining the peninsula skyline."),
    place("mac-grand-prix", "Guia Circuit & Grand Prix Museum", 22.1978, 113.5512, "museum", "Museum", "Guia", 7, "Racing history below the lighthouse hill."),
    place("mac-guia", "Guia Fortress & Chapel", 22.1985, 113.5525, "sight", "Monument", "Guia", 8, "Lighthouse, chapel frescoes, and harbour views."),
    place("mac-lou-lim-icheoc", "Lou Lim Ieoc Garden", 22.2012, 113.552, "nature", "Garden", "Guia", 7, "Suzhou-style pocket garden in the northern peninsula."),
    place("mac-nam-van-lake", "Nam Van Lake promenade", 22.1885, 113.542, "nature", "Park", "Nam Van", 7, "Evening stroll with light shows on the artificial lakes."),
    place("mac-sai-van", "Sai Van Lake bridge walk", 22.1835, 113.5385, "nature", "Park", "Nam Van", 6, "Connects tower area to the historic hillside."),

    // ——— Cotai Strip ———
    place("mac-venetian", "The Venetian Macao", 22.1485, 113.5595, "sight", "Attraction", "Cotai", 9, "Canal shoppes and gondola rides on the strip."),
    place("mac-londoner", "The Londoner Macao", 22.1478, 113.5588, "sight", "Attraction", "Cotai", 8, "Big Ben facade and covered retail on Cotai."),
    place("mac-parisian", "The Parisian Macao", 22.1465, 113.5575, "sight", "Attraction", "Cotai", 8, "Eiffel Tower replica and mall beside City of Dreams."),
    place("mac-city-dreams", "City of Dreams", 22.146, 113.5568, "sight", "Attraction", "Cotai", 7, "Entertainment complex between Parisian and Venetian."),
    place("mac-galaxy", "Galaxy Macau", 22.1495, 113.5535, "shopping", "Mall", "Cotai", 8, "Massive mall and wave pool deck on the west strip."),
    place("mac-studio-city", "Studio City Macau", 22.152, 113.561, "sight", "Attraction", "Cotai", 7, "Golden Reel ferris wheel between towers."),
    place("mac-wynn-palace", "Wynn Palace & Performance Lake", 22.1472, 113.5605, "sight", "Attraction", "Cotai", 8, "Cable car and fountain show on the north Cotai front."),
    place("mac-sands", "The Sands Macao", 22.1925, 113.551, "sight", "Attraction", "Cotai Gateway", 6, "Original strip casino linking peninsula to Cotai."),

    // ——— Taipa ———
    place("mac-taipa-village", "Taipa Village", 22.1578, 113.5585, "sight", "Attraction", "Taipa", 8, "Pastel houses, church square, and alley food."),
    place("mac-taipa-houses", "Taipa Houses-Museum", 22.1582, 113.5578, "museum", "Museum", "Taipa", 7, "Green colonial bungalows on the waterfront lawn."),
    place("mac-carmo", "Chapel of Our Lady of Carmel", 22.1575, 113.559, "sight", "Monument", "Taipa", 6, "Hilltop church above Taipa village."),
    place("mac-pou-tai", "Pou Tai Un Temple", 22.1595, 113.5605, "sight", "Monument", "Taipa", 6, "Buddhist temple complex on Taipa hill."),
    place("mac-museum-taipa", "Museum of Taipa and Coloane History", 22.157, 113.558, "museum", "Museum", "Taipa", 6, "Quick read on the islands before beach time."),

    // ——— Coloane ———
    place("mac-coloane-village", "Coloane Village", 22.1265, 113.5655, "sight", "Attraction", "Coloane", 8, "Fishing lanes, chapel square, and slower island pace."),
    place("mac-st-francis", "Chapel of St Francis Xavier", 22.1268, 113.5658, "sight", "Monument", "Coloane", 6, "Baroque chapel facing the village square."),
    place("mac-coloane-pier", "Coloane Pier", 22.1258, 113.5662, "nature", "Viewpoint", "Coloane", 6, "Quiet waterfront at the island's east end."),
    place("mac-hac-sa", "Hac Sa Beach", 22.1235, 113.571, "nature", "Beach", "Coloane", 8, "Black-sand beach on the south shore — bus or taxi from Cotai."),
    place("mac-coloane-trail", "Coloane hiking trails", 22.128, 113.568, "nature", "Park", "Coloane", 6, "Short forest walks above the village."),

    // ——— Shopping ———
    place("mac-one-central", "One Central", 22.191, 113.543, "shopping", "Mall", "Peninsula", 7, "Retail under the Grand Lisboa hotels."),
    place("mac-mgm-cotai", "MGM Cotai shops", 22.1498, 113.5545, "shopping", "Mall", "Cotai", 6, "Art-heavy mall beside the lion statue atrium."),
    place("mac-ferry-terminal", "Outer Harbour Ferry Terminal", 22.197, 113.5495, "sight", "Attraction", "Peninsula", 6, "Gateway views and quick Hong Kong ferry hop."),
    place("mac-red-market", "Red Market", 22.2025, 113.5505, "shopping", "Market", "Peninsula", 6, "Local wet market for morning produce browsing."),
    place("mac-three-lamps", "Three Lamps District", 22.1995, 113.5455, "shopping", "Market", "Peninsula", 6, "Burma/Myanmar groceries and eateries in the north."),
    place("mac-tap-seac", "Tap Seac Square", 22.1988, 113.5465, "sight", "Attraction", "Peninsula", 6, "Neo-classical square and cultural centre precinct."),
    place("mac-pawnshop", "Pawnshop Museum", 22.1975, 113.5422, "museum", "Museum", "Historic Centre", 5, "Tiny display on old lending shops near the Ruins."),
    place("mac-wine-museum", "Grand Prix Wine Museum", 22.1976, 113.551, "museum", "Museum", "Guia", 5, "Portuguese wine heritage beside the circuit museum."),
    place("mac-ka-ho", "Ka Ho Beach", 22.131, 113.562, "nature", "Beach", "Coloane", 5, "Small cove on Coloane's north shore."),
    place("mac-our-lady", "Penha Church", 22.1892, 113.5375, "sight", "Monument", "Barra", 6, "Hill church with views over the inner harbour."),
    place("mac-kun-iam", "Kun Iam Statue", 22.1925, 113.5485, "sight", "Monument", "Peninsula", 7, "Bronze goddess on a lotus in the outer harbour."),
    place("mac-handover", "Handover Gifts Museum", 22.1985, 113.5475, "museum", "Museum", "Peninsula", 5, "Presents from provinces after the 1999 handover."),

    // ——— Cafes ———
    place("mac-lord-stow", "Lord Stow's Bakery Taipa", 22.1576, 113.5592, "cafe", "Cafe", "Taipa", 8, "Original egg tart stop in the village.", { cuisine: "pastry coffee" }),
    place("mac-almond-blossom", "Almond Blossoms Cafe", 22.1943, 113.5414, "cafe", "Cafe", "Historic Centre", 6, "Coffee break steps from Senado Square.", { cuisine: "coffee" }),
    place("mac-coffeetime", "Coffee Time", 22.192, 113.545, "cafe", "Cafe", "Peninsula", 6, "Local chain for milk tea and snacks.", { cuisine: "coffee tea" }),
    place("mac-koi-kei", "Koi Kei Bakery", 22.1574, 113.5588, "cafe", "Cafe", "Taipa", 7, "Almond cookies and jerkies — souvenir and snack.", { cuisine: "pastry" }),
    place("mac-feliz", "Feliz Café", 22.158, 113.5595, "cafe", "Cafe", "Taipa", 5, "Casual brunch tables in the village lanes.", { cuisine: "coffee" }),
    place("mac-octagon", "Octagon Café", 22.1488, 113.5598, "cafe", "Cafe", "Cotai", 5, "Strip coffee between shopping blocks.", { cuisine: "coffee" }),
    place("mac-aristo", "Aristocrat Pastry", 22.1965, 113.5405, "cafe", "Cafe", "Historic Centre", 6, "Macanese pastries near the Ruins.", { cuisine: "pastry" }),

    // ——— Food ———
    place("mac-antonio", "António Restaurant", 22.1948, 113.5408, "food", "Restaurant", "Historic Centre", 8, "Classic Macanese plates — book for weekend nights.", { cuisine: "macanese portuguese" }),
    place("mac-litoral", "Restaurante Litoral", 22.1952, 113.541, "food", "Restaurant", "Historic Centre", 8, "Family-run Macanese in lane near the Ruins.", { cuisine: "macanese" }),
    place("mac-fernao", "Fernando's Restaurant", 22.1245, 113.5665, "food", "Restaurant", "Coloane", 8, "Open-air Portuguese seafood by Hac Sa — cash-friendly.", { cuisine: "portuguese seafood" }),
    place("mac-abela", "Abela Bakery", 22.1572, 113.559, "food", "Quick meal", "Taipa", 6, "Pork chop buns at the village entrance.", { cuisine: "chinese bakery" }),
    place("mac-tai-lei", "Tai Lei Loi Kei pork chop bun", 22.1578, 113.5595, "food", "Quick meal", "Taipa", 7, "Crispy bun queue worth the wait.", { cuisine: "chinese" }),
    place("mac-ricardo", "Restaurante Ricardo", 22.1895, 113.537, "food", "Restaurant", "Barra", 7, "Portuguese grilled fish near Lilau.", { cuisine: "portuguese" }),
    place("mac-robuchon", "Robuchon au Dôme", 22.1896, 113.5432, "food", "Restaurant", "Grand Lisboa", 9, "Fine dining with skyline views — dress up.", { cuisine: "french" }),
    place("mac-li-fung", "Lei Feng Teahouse", 22.1935, 113.5415, "food", "Quick meal", "Historic Centre", 6, "Dim sum in a timeworn teahouse.", { cuisine: "cantonese dim_sum" }),
    place("mac-francisco", "Restaurante Francisco", 22.1945, 113.5405, "food", "Restaurant", "Historic Centre", 7, "Portuguese wine and seafood platters.", { cuisine: "portuguese seafood" }),
    place("mac-par-mun", "Par Mun Chan", 22.1575, 113.5593, "food", "Restaurant", "Taipa", 7, "Claypot rice specialist in the village.", { cuisine: "cantonese" }),
    place("mac-long-wa", "Long Wa", 22.1585, 113.5602, "food", "Restaurant", "Taipa", 6, "Late-night claypot and stir-fry tables.", { cuisine: "cantonese" }),
    place("mac-crystal", "Crystal Jade", 22.1485, 113.5585, "food", "Restaurant", "Cotai", 6, "Reliable dim sum inside the strip malls.", { cuisine: "cantonese" }),
    place("mac-cityfood", "Food street Taipa Rua do Cunha", 22.1577, 113.5587, "food", "Quick meal", "Taipa", 8, "Snack lane — beef jerky, durian ice cream, noodles.", { cuisine: "street_food chinese" }),
    place("mac-ichiban", "Ichiban Sushi", 22.1925, 113.544, "food", "Restaurant", "Peninsula", 5, "Casual Japanese if you need a break from fusion.", { cuisine: "japanese" }),
    place("mac-noodle", "Noodle & Congee corner", 22.1955, 113.5418, "food", "Quick meal", "Historic Centre", 6, "Midnight congee after Ruins walk.", { cuisine: "cantonese" }),
    place("mac-regency-lunch", "Harbourview Hotel Portuguese lunch", 22.1915, 113.5445, "food", "Restaurant", "Peninsula", 6, "Buffet with Macanese corner near waterfront.", { cuisine: "macanese portuguese" }),
    place("mac-siam", "Siam Thai", 22.149, 113.556, "food", "Restaurant", "Cotai", 5, "Strip mall Thai after casino floor.", { cuisine: "thai" }),
    place("mac-veggie", "Vegetarian options Senado", 22.194, 113.5416, "food", "Quick meal", "Historic Centre", 5, "Buddhist vegetarian lunch near the square.", { cuisine: "vegetarian chinese" }),

    // ——— Nightlife ———
    place("mac-club-cubic", "Club Cubic", 22.1488, 113.559, "nightlife", "Club", "Cotai", 7, "Mainland headliners on the strip — dress code weekends."),
    place("mac-liquid", "Liquid Lounge", 22.1895, 113.5428, "nightlife", "Bar", "Peninsula", 6, "Peninsula rooftop cocktails above Nam Van."),
    place("mac-red", "Red Bar", 22.1495, 113.554, "nightlife", "Bar", "Cotai", 6, "Late drinks between Galaxy and Venetian."),
    place("mac-lady-l", "Lady L lounge", 22.1475, 113.5602, "nightlife", "Bar", "Cotai", 7, "Art-deco cocktail room at Wynn Palace."),
    place("mac-pub-street", "Knockout Alley pubs", 22.1582, 113.5595, "nightlife", "Bar", "Taipa", 6, "Small pub row behind Taipa village."),
    place("mac-lisboa-bar", "Grand Lisboa bar floor", 22.1897, 113.5433, "nightlife", "Bar", "Grand Lisboa", 6, "High-limit lounge energy near the lobby."),
    place("mac-pacha", "Pacha Macau area", 22.1468, 113.5578, "nightlife", "Club", "Cotai", 6, "Dance nights at City of Dreams complex."),
    place("mac-moon", "Moon Terrace", 22.1975, 113.549, "nightlife", "Bar", "Peninsula", 5, "Harbour-view nightcap near ferry terminal."),

    // ——— Stays ———
    place("mac-stay-mgm", "MGM Macau", 22.1892, 113.5425, "stay", "Hotel", "Peninsula", 8, "Lion atrium base for peninsula sightseeing."),
    place("mac-stay-grandlisboa", "Grand Lisboa Hotel", 22.1896, 113.543, "stay", "Hotel", "Grand Lisboa", 8, "Central tower rooms — walk to Senado."),
    place("mac-stay-wynn", "Wynn Macau", 22.1885, 113.5465, "stay", "Hotel", "Peninsula", 9, "Performance Lake and fine dining on Nam Van."),
    place("mac-stay-venetian", "The Venetian Macao stay", 22.1485, 113.5595, "stay", "Hotel", "Cotai", 9, "Massive suite-style rooms on the strip."),
    place("mac-stay-parisian", "The Parisian Macao", 22.1465, 113.5575, "stay", "Hotel", "Cotai", 8, "Eiffel-view rooms between resorts."),
    place("mac-stay-galaxy", "Galaxy Hotel", 22.1495, 113.5535, "stay", "Hotel", "Cotai", 8, "Pool deck and mall access on west Cotai."),
    place("mac-stay-four-seasons", "Four Seasons Macao", 22.1478, 113.5608, "stay", "Hotel", "Cotai", 9, "Quieter luxury between Venetian and Cotai Central."),
    place("mac-stay-ritz", "The Ritz-Carlton Macau", 22.148, 113.5612, "stay", "Hotel", "Cotai", 9, "High-floor harbour views from Galaxy podium."),
    place("mac-stay-mandarin", "Mandarin Oriental Macau", 22.1928, 113.545, "stay", "Hotel", "Peninsula", 8, "Waterfront calm away from casino floors."),
    place("mac-stay-metropole", "Hotel Metropole", 22.1935, 113.542, "stay", "Hotel", "Historic Centre", 7, "Budget-friendly walk to Ruins and Senado."),
    place("mac-stay-ka-ou", "Ka Ou Guest House", 22.1945, 113.5415, "stay", "Guest house", "Historic Centre", 6, "Pension above the lanes near the square."),
    place("mac-stay-taipa", "Taipa Square stay", 22.1576, 113.559, "stay", "Guest house", "Taipa", 6, "Village guesthouses steps from food street."),
    place("mac-stay-ole", "Ole London Hotel", 22.195, 113.541, "stay", "Hotel", "Historic Centre", 6, "Mid-range near Ruins of St Paul's."),
    place("mac-stay-sushine", "Sunshine Hostel", 22.1922, 113.5448, "stay", "Hostel", "Peninsula", 5, "Dorm beds near waterfront buses."),
    place("mac-stay-mad", "Mad Monkey Hostel area", 22.1938, 113.5435, "stay", "Hostel", "Peninsula", 5, "Social beds walking distance to historic core."),
    place("mac-stay-colane", "Pousada de Coloane", 22.1262, 113.5658, "stay", "Hotel", "Coloane", 7, "Resort quiet on the island away from strip noise."),
    place("mac-stay-apt-taipa", "Taipa serviced apartment", 22.1585, 113.5605, "stay", "Apartment", "Taipa", 6, "Kitchenette base for longer food-hall stays."),
    place("mac-stay-apt-cotai", "Cotai studio apartment", 22.1492, 113.5555, "stay", "Apartment", "Cotai", 6, "Self-catering between Galaxy and Venetian."),
    place("mac-stay-apt-pen", "Peninsula apartment", 22.1918, 113.544, "stay", "Apartment", "Peninsula", 6, "City flat for families near bus routes."),
    place("mac-stay-sheraton", "Sheraton Grand Macao", 22.1472, 113.558, "stay", "Hotel", "Cotai", 8, "Convention-friendly giant at Cotai Central."),
  ],
};