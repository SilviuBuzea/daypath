import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const johorbahru: CityCatalog = {
  id: "johorbahru",
  name: "Johor Bahru, Malaysia",
  aliases: ["johor bahru", "jb", "johor"],
  center: { lat: 1.4927, lon: 103.7414 },
  places: [
    // ——— City Center / Heritage ———
    place("jb-sultan-abu", "Sultan Abu Bakar Mosque", 1.4585, 103.7615, "sight", "Monument", "City Center", 9, "White-and-blue riverside mosque — dress modestly for visits."),
    place("jb-palace", "Istana Besar / Royal Abu Bakar Museum", 1.4565, 103.7618, "museum", "Museum", "City Center", 8, "Former palace museum of Johor royalty by the strait."),
    place("jb-chinese-heritage", "JB Chinese Heritage Museum", 1.4625, 103.7635, "museum", "Museum", "City Center", 7, "Peranakan and Chinese migrant stories in a restored shophouse."),
    place("jb-old-chinese-temple", "Old Chinese Temple (Johor Bahru)", 1.4615, 103.7625, "sight", "Monument", "City Center", 6, "Historic temple courtyard in the old town grid."),
    place("jb-church", "Church of the Immaculate Conception", 1.4635, 103.7615, "sight", "Monument", "City Center", 5, "Gothic-revival parish church near the heritage core."),
    place("jb-railway", "Old JB Railway Station", 1.4655, 103.7645, "sight", "Monument", "City Center", 6, "Colonial station facade — photo stop near the causeway."),
    place("jb-causeway", "Johor–Singapore Causeway view", 1.4655, 103.7695, "sight", "Viewpoint", "City Center", 6, "Watch the border traffic and strait from the JB side."),
    place("jb-bungaran", "Bukit Bunga Raya viewpoint", 1.4685, 103.7455, "sight", "Viewpoint", "City Center", 5, "Hillock lookout over older JB neighborhoods."),
    place("jb-wong-ah-fook", "Jalan Wong Ah Fook stroll", 1.4615, 103.7638, "shopping", "Market", "City Center", 7, "Main downtown spine of banks, malls, and street life."),
    place("jb-trader", "KOMTAR JBCC", 1.4635, 103.7645, "shopping", "Mall", "City Center", 7, "Central mall linked to the CIQ and bus hub."),
    place("jb-city-square", "JB City Square", 1.4625, 103.7628, "shopping", "Mall", "City Center", 6, "Downtown mall with a busy food basement."),
    place("jb-holiday-plaza", "Holiday Plaza", 1.4755, 103.7655, "shopping", "Mall", "Taman Jubilee", 5, "Older mall stretch north of the center."),

    // ——— JB Sentral / Waterfront ———
    place("jb-sentral", "JB Sentral", 1.4635, 103.7648, "sight", "Attraction", "JB Sentral", 7, "Rail and CIQ hub for Singapore crossings and KTM trains."),
    place("jb-ciq", "Sultan Iskandar Building (CIQ)", 1.4645, 103.7685, "sight", "Attraction", "JB Sentral", 5, "Immigration complex — allow buffer time for crossings."),
    place("jb-waterfront", "Johor Bahru Waterfront City", 1.4565, 103.7585, "sight", "Attraction", "Waterfront", 7, "Promenade and dining facing the Strait of Johor."),
    place("jb-riverside", "Riverside dining strip", 1.4575, 103.7595, "food", "Restaurant", "Waterfront", 6, "Seafood and cafe terraces along the refurbished quay.", { cuisine: "seafood malaysian" }),
    place("jb-ferry", "JB Ferry / maritime view point", 1.4555, 103.7555, "sight", "Attraction", "Waterfront", 5, "Harbor activity and Singapore skyline on clear days."),

    // ——— Danga Bay ———
    place("jb-danga", "Danga Bay waterfront", 1.4785, 103.7235, "sight", "Attraction", "Danga Bay", 8, "Bay promenade with sculptures, bikes, and sunset crowds."),
    place("jb-danga-park", "Danga Bay Park lawns", 1.4795, 103.7225, "nature", "Park", "Danga Bay", 6, "Open grass and playgrounds beside the bay."),
    place("jb-merdeka", "Dataran Bandaraya Johor Bahru", 1.4785, 103.7285, "sight", "Monument", "Danga Bay", 6, "City square and ceremonial padang near the bay."),
    place("jb-danga-night", "Danga Bay night market evenings", 1.4775, 103.7245, "shopping", "Market", "Danga Bay", 6, "Weekend stalls and snack crawls when operating."),

    // ——— Puteri Harbour / Iskandar Puteri ———
    place("jb-puteri", "Puteri Harbour", 1.4165, 103.6565, "sight", "Attraction", "Puteri Harbour", 8, "Marina promenade of cafes, ferries, and yacht views."),
    place("jb-puteri-mall", "Mall of Medini", 1.4185, 103.6355, "shopping", "Mall", "Medini", 5, "Shopping base near Legoland and Medini hotels."),
    place("jb-legoland", "LEGOLAND Malaysia", 1.4075, 103.6315, "sight", "Attraction", "Medini", 9, "Theme park and water park — book combo tickets online.", { flags: ["ticket", "touristy"] }),
    place("jb-legoland-water", "LEGOLAND Water Park", 1.4065, 103.6305, "sight", "Attraction", "Medini", 7, "Slides and splash zones beside the main park."),
    place("jb-sea-life", "SEA LIFE Malaysia", 1.4078, 103.6325, "museum", "Museum", "Medini", 6, "Aquarium next to LEGOLAND for a cooler indoor hour."),
    place("jb-hello-kitty", "Hello Kitty Town / Thomas Town area", 1.4095, 103.6285, "sight", "Attraction", "Medini", 5, "Family character parks near the Legoland cluster."),
    place("jb-sanrio", "Sanrio Hello Kitty Town remnant stroll", 1.41, 103.6295, "sight", "Attraction", "Medini", 4, "Check current openings — family zone shifts often."),
    place("jb-ferry-harbour", "Puteri Harbour International Ferry Terminal", 1.4155, 103.6575, "sight", "Attraction", "Puteri Harbour", 6, "Ferries toward Batam and harbour photo walks."),
    place("jb-kopitown", "KSI / education city fringe cafes", 1.4255, 103.6455, "cafe", "Cafe", "EduCity", 5, "Campus-edge coffee if you're already in Iskandar Puteri.", { cuisine: "coffee" }),

    // ——— Shopping ———
    place("jb-paradigm", "Paradigm Mall Johor Bahru", 1.5155, 103.6815, "shopping", "Mall", "Skudai", 7, "Large suburban mall with ice rink and cinema."),
    place("jb-aeon-bukit", "AEON Bukit Indah", 1.4805, 103.6575, "shopping", "Mall", "Bukit Indah", 6, "Everyday mall shopping west of the city."),
    place("jb-aeon-tebrau", "AEON Mall Tebrau City", 1.5485, 103.7955, "shopping", "Mall", "Tebrau", 6, "Northeast mall for practical retail and food courts."),
    place("jb-midvalley", "Mid Valley Southkey", 1.5015, 103.7755, "shopping", "Mall", "Tebrau", 7, "Big mall with Uniqlo, cinema, and dining."),
    place("jb-toppen", "Toppen Shopping Centre", 1.5455, 103.7955, "shopping", "Mall", "Tebrau", 6, "IKEA-adjacent mall for homeware and casual meals."),
    place("jb-ikea", "IKEA Tebrau", 1.5465, 103.7965, "shopping", "Mall", "Tebrau", 5, "Swedish homeware stop paired with Toppen."),
    place("jb-johor-premium", "Johor Premium Outlets", 1.6055, 103.5515, "shopping", "Mall", "Kulai", 8, "Designer outlet village northwest toward Kulai.", { flags: ["touristy"] }),
    place("jb-ksl", "KSL City Mall", 1.4955, 103.7255, "shopping", "Mall", "Wong Ah Fook North", 6, "Mall with theme-park rides upstairs."),
    place("jb-permas", "Permas Jaya shopping strip", 1.4955, 103.8155, "shopping", "Market", "Permas Jaya", 5, "Local neighborhood retail east of the center."),

    // ——— Nature / day trips ———
    place("jb-hutan-bandar", "Hutan Bandar Johor Bahru", 1.4855, 103.7155, "nature", "Park", "City Center", 6, "Urban forest park with lake and walking paths."),
    place("jb-jubilee-park", "Taman Jubilee Park", 1.4725, 103.7555, "nature", "Park", "Taman Jubilee", 5, "Central green pocket for an easy walk."),
    place("jb-sungai-skudai", "Sungai Skudai riverside path", 1.5255, 103.6755, "nature", "Park", "Skudai", 4, "Local river edge for joggers away from malls."),
    place("jb-desaru", "Desaru Coast day trip", 1.5455, 104.2655, "nature", "Park", "Desaru", 7, "East-coast beaches and resorts — full-day outing."),
    place("jb-desaru-adventure", "Desaru Adventure Waterpark", 1.5485, 104.2685, "sight", "Attraction", "Desaru", 6, "Waterpark add-on if you're already at Desaru."),
    place("jb-endau", "Endau-Rompin gateway tip", 2.1455, 103.3555, "nature", "Park", "Endau-Rompin", 5, "Rainforest park far north — overnight trip territory."),
    place("jb-kukup", "Kukup fishing village day trip", 1.3255, 103.4455, "sight", "Attraction", "Kukup", 6, "Seafood stilts village southwest toward Pontian."),
    place("jb-pulau-layang", "Pulau Layang-Layang / strait islets view", 1.3555, 103.5955, "nature", "Park", "Straits", 4, "Boat day possibilities from western Johor coasts."),

    // ——— Temples / culture ———
    place("jb-aranachala", "Arulmigu Sri Rajakaliamman Glass Temple", 1.4855, 103.7055, "sight", "Monument", "Tampoi", 8, "Fully glass-clad Hindu temple — unique photo stop."),
    place("jb-hong-san-si", "Hong San Si Temple", 1.4628, 103.7615, "sight", "Monument", "City Center", 5, "Taoist temple near the old town lanes."),
    place("jb-indian-temple", "Sri Thandayuthapani Temple", 1.4685, 103.7585, "sight", "Monument", "City Center", 5, "South Indian temple architecture in central JB."),
    place("jb-islamic-complex", "Islamic Complex / state mosque grounds stroll", 1.4588, 103.7612, "sight", "Attraction", "City Center", 5, "Gardens and waterfront approach to the grand mosque."),

    // ——— Cafes ———
    place("jb-zheng-qing", "Zheng Qing Cafe heritage kopi", 1.4618, 103.7622, "cafe", "Cafe", "City Center", 6, "Old-school kopi and toast near Wong Ah Fook.", { cuisine: "coffee toast" }),
    place("jb-coffee-tailor", "Harty Hart Coffee", 1.4785, 103.7255, "cafe", "Cafe", "Danga Bay", 6, "Specialty coffee near the bay promenade.", { cuisine: "coffee" }),
    place("jb-zus", "ZUS Coffee downtown", 1.4625, 103.7632, "cafe", "Cafe", "City Center", 5, "Quick Malaysian chain coffee between mall hops.", { cuisine: "coffee" }),
    place("jb-nadi", "Nadi Kopi", 1.4955, 103.7255, "cafe", "Cafe", "Wong Ah Fook North", 6, "Local specialty cups near KSL.", { cuisine: "coffee" }),
    place("jb-bake", "Haji Abu Bakar bakery sweets", 1.4615, 103.7618, "cafe", "Cafe", "City Center", 5, "Traditional kuih and bakery snacks.", { cuisine: "pastry" }),
    place("jb-ice", "Chill Out dessert cafe", 1.4635, 103.7642, "cafe", "Cafe", "JB Sentral", 5, "Air-conditioned dessert break by the transit hub.", { cuisine: "ice_cream dessert" }),

    // ——— Food ———
    place("jb-sedap", "Restoran Hua Mui", 1.4625, 103.7615, "food", "Restaurant", "City Center", 7, "Hainanese classics and curry chicken in old JB.", { cuisine: "hainanese malaysian" }),
    place("jb-laksa", "Johor laksa stall crawl", 1.4655, 103.7555, "food", "Quick meal", "City Center", 8, "Spaghetti-like laksa Johor — try a few hawker versions.", { cuisine: "malaysian laksa" }),
    place("jb-mee-rebus", "Mee Rebus Warong", 1.4685, 103.7585, "food", "Quick meal", "City Center", 7, "Thick gravy noodle specialty of Johor.", { cuisine: "malaysian noodles" }),
    place("jb-otak", "Otak-otak grilled parcels", 1.4575, 103.7585, "food", "Quick meal", "Waterfront", 6, "Grilled fish paste in banana leaf — street snack.", { cuisine: "street_food malaysian" }),
    place("jb-seafood-danga", "Danga Bay seafood restaurant", 1.4785, 103.7238, "food", "Restaurant", "Danga Bay", 7, "Chili crab and steamed fish with bay breeze.", { cuisine: "seafood chinese" }),
    place("jb-puteri-food", "Puteri Harbour dining terrace", 1.4168, 103.6568, "food", "Restaurant", "Puteri Harbour", 6, "Marina restaurants for a slower dinner.", { cuisine: "international seafood" }),
    place("jb-night-market", "Taman Sentosa / local pasar malam", 1.4855, 103.7455, "food", "Quick meal", "Taman Sentosa", 6, "Night-market satay, goreng pisang, and kueh.", { cuisine: "street_food malaysian" }),
    place("jb-banana-leaf", "Banana leaf rice house", 1.4725, 103.7625, "food", "Restaurant", "City Center", 6, "South Indian banana-leaf lunch thali style.", { cuisine: "indian" }),
    place("jb-nasi-padang", "Nasi Padang counter", 1.4635, 103.7625, "food", "Quick meal", "City Center", 6, "Rendang and sayur plates by weight.", { cuisine: "indonesian malaysian" }),
    place("jb-dimsum", "Weekend dim sum hall", 1.4755, 103.7655, "food", "Restaurant", "Taman Jubilee", 6, "Cart-service dumplings for a late breakfast.", { cuisine: "cantonese dim_sum" }),
    place("jb-satay", "Satay Warisan", 1.4585, 103.7595, "food", "Quick meal", "Waterfront", 7, "Charcoal satay with peanut sauce near the strait.", { cuisine: "malaysian satay" }),
    place("jb-vegetarian", "Vegetarian court in City Square", 1.4625, 103.7628, "food", "Quick meal", "City Center", 5, "Plant-based hawker options in the mall basement.", { cuisine: "vegetarian chinese" }),
    place("jb-korean", "Korean BBQ Tebrau", 1.5485, 103.7955, "food", "Restaurant", "Tebrau", 5, "Casual grill after AEON or Mid Valley shopping.", { cuisine: "korean" }),

    // ——— Nightlife ———
    place("jb-danga-bars", "Danga Bay evening promenade", 1.4785, 103.7235, "nightlife", "Bar", "Danga Bay", 7, "Sunset drinks and lights along the bay."),
    place("jb-puteri-night", "Puteri Harbour night walk", 1.4165, 103.6565, "nightlife", "Bar", "Puteri Harbour", 6, "Marina bars and dessert after LEGOLAND days."),
    place("jb-wong-night", "Wong Ah Fook late cafes", 1.4615, 103.7638, "nightlife", "Bar", "City Center", 5, "Late coffee and dessert rather than heavy clubbing."),
    place("jb-hotel-lounge", "Riverside hotel lounge", 1.4565, 103.7585, "nightlife", "Bar", "Waterfront", 6, "Calm cocktails with Singapore skyline views."),
    place("jb-karaoke", "KSL karaoke & entertainment", 1.4955, 103.7255, "nightlife", "Bar", "Wong Ah Fook North", 5, "Mall entertainment floors for a loud night out."),

    // ——— Stays ———
    place("jb-stay-thistle", "Thistle Johor Bahru", 1.4585, 103.76, "stay", "Hotel", "City Center", 8, "Hilltop hotel with strait views near the mosque."),
    place("jb-stay-doubletree", "DoubleTree by Hilton Johor Bahru", 1.4635, 103.7635, "stay", "Hotel", "City Center", 8, "Central tower hotel above downtown shopping."),
    place("jb-stay-ksl", "KSL Hotel & Resort", 1.4955, 103.7258, "stay", "Hotel", "Wong Ah Fook North", 7, "Resort-style rooms attached to KSL City Mall."),
    place("jb-stay-puteri", "Puteri Pacific / harbour hotels", 1.4175, 103.6555, "stay", "Hotel", "Puteri Harbour", 7, "Marina base for LEGOLAND and ferry mornings."),
    place("jb-stay-legoland", "LEGOLAND Hotel", 1.4085, 103.6315, "stay", "Hotel", "Medini", 8, "Theme rooms next to the park gates."),
    place("jb-stay-hyatt", "Hyatt Regency Johor Bahru", 1.4565, 103.7575, "stay", "Hotel", "Waterfront", 8, "Waterfront luxury facing the strait."),
    place("jb-stay-midvalley", "Hotel near Mid Valley Southkey", 1.5015, 103.7755, "stay", "Hotel", "Tebrau", 6, "Mall-adjacent rooms for shopping-focused trips."),
    place("jb-stay-paradigm", "Movenpick / Paradigm area hotel", 1.5155, 103.6815, "stay", "Hotel", "Skudai", 6, "Suburban comfort beside Paradigm Mall."),
    place("jb-stay-hostel", "JB Sentral backpacker hostel", 1.4635, 103.7645, "stay", "Hostel", "JB Sentral", 5, "Budget beds for early Singapore crossings."),
    place("jb-stay-danga", "Danga Bay apartment", 1.4795, 103.7235, "stay", "Apartment", "Danga Bay", 6, "Self-catering with promenade mornings."),
    place("jb-stay-desaru", "Desaru Coast resort", 1.5455, 104.2665, "stay", "Hotel", "Desaru", 6, "Beach resort base for an east-coast extension."),
    place("jb-stay-boutique", "Old town boutique hotel", 1.4625, 103.7625, "stay", "Hotel", "City Center", 6, "Small rooms in shophouse streets near heritage sights."),
  ],
};
