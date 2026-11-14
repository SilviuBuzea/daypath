import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const kualalumpur: CityCatalog = {
  id: "kualalumpur",
  name: "Kuala Lumpur, Malaysia",
  aliases: ["kuala lumpur", "kl"],
  center: { lat: 3.139, lon: 101.6869 },
  places: [
    // ——— KLCC / Bukit Bintang ———
    place("kl-petronas", "Petronas Twin Towers", 3.1578, 101.7119, "sight", "Monument", "KLCC", 10, "Skybridge and observation deck — book slots online."),
    place("kl-klcc-park", "KLCC Park", 3.1545, 101.7135, "nature", "Park", "KLCC", 9, "Fountain shows and tower views from the lawn."),
    place("kl-suria", "Suria KLCC", 3.1572, 101.7116, "shopping", "Mall", "KLCC", 8, "Mall under the towers with food court and galleries."),
    place("kl-aquaria", "Aquaria KLCC", 3.1538, 101.7128, "sight", "Attraction", "KLCC", 8, "Tunnel tank beneath the convention centre."),
    place("kl-klcc-mosque", "Asy-Syakirin Mosque", 3.1555, 101.7142, "sight", "Monument", "KLCC", 6, "Modern mosque beside the park."),
    place("kl-pavilion", "Pavilion Kuala Lumpur", 3.149, 101.7128, "shopping", "Mall", "Bukit Bintang", 8, "Flagship mall on the main shopping spine."),
    place("kl-bukit-bintang", "Bukit Bintang crossing", 3.147, 101.7105, "sight", "Attraction", "Bukit Bintang", 7, "Busy retail and monorail hub."),
    place("kl-berjaya", "Berjaya Times Square", 3.1425, 101.7098, "shopping", "Mall", "Bukit Bintang", 6, "Huge mall with indoor theme park."),
    place("kl-lot10", "Lot 10 & Bukit Bintang galleria", 3.1465, 101.7115, "shopping", "Mall", "Bukit Bintang", 6, "Japanese basement food street and boutiques."),

    // ——— Merdeka / Chinatown ———
    place("kl-merdeka-118", "Merdeka 118", 3.1415, 101.7, "sight", "Viewpoint", "Merdeka", 8, "Tallest tower in Malaysia — observation deck."),
    place("kl-merdeka-square", "Dataran Merdeka", 3.1485, 101.6935, "sight", "Monument", "Merdeka", 8, "Colonial admin buildings and independence history."),
    place("kl-sultan-abdul", "Sultan Abdul Samad Building", 3.1488, 101.6938, "sight", "Monument", "Merdeka", 8, "Copper-domed landmark on the square."),
    place("kl-national-textile", "National Textile Museum", 3.1475, 101.6938, "museum", "Museum", "Merdeka", 6, "Fabrics and batik beside Merdeka Square."),
    place("kl-panggung", "Panggung Bandaraya", 3.1482, 101.694, "sight", "Monument", "Merdeka", 6, "Victorian theatre facade on the padang."),
    place("kl-chinatown", "Petaling Street Chinatown", 3.1435, 101.6975, "shopping", "Market", "Chinatown", 8, "Night market lanes and counterfeit bargaining."),
    place("kl-central-market", "Central Market", 3.1455, 101.6958, "shopping", "Market", "Chinatown", 8, "Art deco hall of crafts and snacks."),
    place("kl-sinan", "Sin Sze Si Ya Temple", 3.1448, 101.6965, "sight", "Monument", "Chinatown", 7, "Oldest Taoist temple in the city."),
    place("kl-kwai-chai", "Kwai Chai Hong mural lane", 3.1442, 101.697, "sight", "Attraction", "Chinatown", 7, "Instagram alley murals off Petaling."),
    place("kl-sri-maha", "Sri Mahamariamman Temple", 3.1438, 101.6978, "sight", "Monument", "Chinatown", 7, "Dravidian gopuram at Chinatown's edge."),

    // ——— Museums ———
    place("kl-national-museum", "National Museum", 3.1385, 101.687, "museum", "Museum", "Museum Quarter", 8, "Malaysian history from prehistory to independence."),
    place("kl-islamic-arts", "Islamic Arts Museum", 3.1418, 101.6905, "museum", "Museum", "Lake Gardens", 9, "One of Southeast Asia's best Islamic collections."),
    place("kl-orchid", "Orchid & Hibiscus Garden", 3.141, 101.6885, "nature", "Garden", "Lake Gardens", 6, "Botanical walk near the museums."),
    place("kl-planetarium", "National Planetarium", 3.1395, 101.6902, "museum", "Museum", "Lake Gardens", 6, "Space exhibits on the Lake Gardens hill."),
    place("kl-royal-selangor", "Royal Selangor Visitor Centre", 3.195, 101.698, "museum", "Museum", "Setapak", 7, "Pewter craft demos north of the center."),
    place("kl-iamm", "Bank Negara Museum", 3.156, 101.692, "museum", "Museum", "KL Sentral", 6, "Money and economy museum at the central bank."),

    // ——— Batu Caves / North ———
    place("kl-batu-caves", "Batu Caves", 3.2379, 101.684, "sight", "Monument", "Batu Caves", 10, "Rainbow stairs to limestone cave temples — early morning best."),
    place("kl-dark-cave", "Dark Cave Conservation", 3.2382, 101.6838, "sight", "Attraction", "Batu Caves", 7, "Guided eco tour beside the main temple cave."),
    place("kl-thaipusam", "Batu Caves Thaipusam grounds", 3.2375, 101.6842, "sight", "Attraction", "Batu Caves", 6, "Festival scale outside peak dates."),
    place("kl-templer", "Templer Park", 3.295, 101.683, "nature", "Park", "Rawang", 6, "Jungle waterfall day trip north of KL."),

    // ——— Thean Hou / Brickfields ———
    place("kl-thean-hou", "Thean Hou Temple", 3.1215, 101.6878, "sight", "Monument", "Robson Heights", 8, "Six-tier Chinese temple with city views."),
    place("kl-little-india", "Little India Brickfields", 3.1285, 101.685, "shopping", "Market", "Brickfields", 7, "Sari shops and banana leaf lunch strip."),
    place("kl-kl-sentral", "KL Sentral", 3.134, 101.686, "sight", "Attraction", "Brickfields", 7, "Rail hub linking airport, Batu Caves, and monorail."),
    place("kl-nu-sentral", "Nu Sentral mall", 3.1335, 101.6865, "shopping", "Mall", "Brickfields", 6, "Mall glued to KL Sentral."),

    // ——— Bangsar / Damansara ———
    place("kl-bangsar", "Bangsar Village", 3.128, 101.6705, "shopping", "Mall", "Bangsar", 7, "Upscale neighborhood mall and café row."),
    place("kl-lake-club", "Perdana Botanical Garden", 3.142, 101.6895, "nature", "Park", "Lake Gardens", 8, "Lake Gardens loop with bird park nearby."),
    place("kl-bird-park", "KL Bird Park", 3.1415, 101.6888, "nature", "Park", "Lake Gardens", 7, "Walk-through aviary in the Lake Gardens."),
    place("kl-deer-park", "Deer Park KL", 3.1412, 101.688, "nature", "Park", "Lake Gardens", 5, "Small free park beside the bird park."),

    // ——— More sights ———
    place("kl-masjid-jamek", "Masjid Jamek", 3.1492, 101.6968, "sight", "Monument", "Merdeka", 7, "Moorish mosque at two river confluence."),
    place("kl-river-of-life", "River of Life waterfront", 3.148, 101.6955, "sight", "Attraction", "Merdeka", 7, "LED-lit river walk after dark."),
    place("kl-muzium-diraja", "Royal Museum (Old Istana)", 3.1398, 101.6965, "museum", "Museum", "Lake Gardens", 6, "Former royal residence exhibits."),
    place("kl-tugu", "National Monument", 3.1495, 101.6835, "sight", "Monument", "Lake Gardens", 6, "Bronze sculpture for fallen soldiers."),
    place("kl-menara-kl", "Menara Kuala Lumpur", 3.1528, 101.7038, "sight", "Viewpoint", "Bukit Nanas", 8, "Communications tower skyline view."),
    place("kl-forest-eco", "KL Forest Eco Park", 3.152, 101.7045, "nature", "Park", "Bukit Nanas", 6, "Canopy walk at the foot of the tower."),

    place("kl-midvalley", "Mid Valley Megamall", 3.118, 101.6775, "shopping", "Mall", "Bangsar South", 8, "Huge mall linked to The Gardens."),
    place("kl-sunway", "Sunway Pyramid", 3.073, 101.607, "shopping", "Mall", "Petaling Jaya", 7, "Pyramid mall — day trip on LRT."),
    place("kl-masjid-negara", "Masjid Negara", 3.1418, 101.6915, "sight", "Monument", "Lake Gardens", 8, "National mosque star roof near the gardens."),
    place("kl-publika", "Publika Solaris", 3.171, 101.665, "shopping", "Mall", "Mont Kiara", 6, "Expat-friendly mall north of center."),
    place("kl-ttdi", "Taman Tugu forest", 3.155, 101.682, "nature", "Park", "Lake Gardens", 6, "New urban rainforest trail."),
    place("kl-wet-market", "Chow Kit wet market", 3.166, 101.698, "shopping", "Market", "Chow Kit", 6, "Morning produce chaos north of Kampung Baru."),
    place("kl-atom", "Atomyze / The LINC", 3.159, 101.721, "shopping", "Mall", "KLCC", 6, "Boutique mall on Jalan Tun Razak."),
    place("kl-ramps", "Publika street art", 3.1715, 101.6655, "sight", "Attraction", "Mont Kiara", 5, "Murals and weekend markets."),
    place("kl-coffee-chow", "Chow Kit kopitiam row", 3.1655, 101.6975, "cafe", "Cafe", "Chow Kit", 5, "Old-school coffee shops.", { cuisine: "coffee malaysian" }),
    place("kl-sago", "Sago House", 3.1442, 101.697, "cafe", "Cafe", "Chinatown", 6, "Tiny specialty pour-overs.", { cuisine: "coffee" }),

    // ——— Cafes ———
    place("kl-vcr", "VCR Café", 3.1495, 101.7085, "cafe", "Cafe", "Bukit Bintang", 8, "Specialty coffee pioneer in a shophouse.", { cuisine: "coffee" }),
    place("kl-artisan", "Artisan Brew Café", 3.1285, 101.6708, "cafe", "Cafe", "Bangsar", 7, "Third-wave roasts in Bangsar.", { cuisine: "coffee" }),
    place("kl-malas", "Malaysian coffee at Old Town", 3.147, 101.711, "cafe", "Cafe", "Bukit Bintang", 6, "Kopi tarik chain for quick breaks.", { cuisine: "coffee malaysian" }),
    place("kl-wizards", "Wizards at Tribeca", 3.146, 101.7105, "cafe", "Cafe", "Bukit Bintang", 7, "Tall lattes in a glass house.", { cuisine: "coffee" }),
    place("kl-feo-feo", "Feeka Coffee Roasters", 3.129, 101.6705, "cafe", "Cafe", "Bangsar", 7, "Brunch staple on Bangsar lanes.", { cuisine: "coffee brunch" }),
    place("kl-pokok", "Pokok KL", 3.1585, 101.705, "cafe", "Cafe", "Damansara Heights", 6, "Leafy café with cakes.", { cuisine: "coffee pastry" }),
    place("kl-merchants", "Merchants Lane", 3.1445, 101.697, "cafe", "Cafe", "Chinatown", 7, "Restored shophouse coffee upstairs.", { cuisine: "coffee" }),

    // ——— Food ———
    place("kl-jalan-alor", "Jalan Alor night food", 3.1458, 101.7085, "food", "Quick meal", "Bukit Bintang", 9, "Open-air seafood and satay after dark.", { cuisine: "malaysian chinese street_food" }),
    place("kl-village-park", "Village Park Restaurant", 3.137, 101.6705, "food", "Restaurant", "Bangsar", 8, "Famous nasi lemak breakfast.", { cuisine: "malaysian" }),
    place("kl-nasi-kandar", "Nasi Kandar Pelita", 3.1475, 101.708, "food", "Quick meal", "Bukit Bintang", 7, "24h Mamak rice and curries.", { cuisine: "indian malaysian halal" }),
    place("kl-hameediyah", "Hameediyah Restaurant", 3.144, 101.6972, "food", "Restaurant", "Chinatown", 7, "Since-1900 murtabak and nasi kandar.", { cuisine: "indian malaysian halal" }),
    place("kl-lai", "Lai Foong Lala Noodles", 3.1438, 101.6975, "food", "Quick meal", "Chinatown", 7, "Lala soup in wet market lanes.", { cuisine: "chinese malaysian" }),
    place("kl-wong", "Wong Ah Wah chicken wings", 3.1455, 101.7088, "food", "Quick meal", "Bukit Bintang", 7, "Post-Jalan Alor wings and beer.", { cuisine: "chinese malaysian" }),
    place("kl-bijan", "Bijan Bar & Restaurant", 3.1475, 101.718, "food", "Restaurant", "Kampung Baru", 8, "Upscale Malay tasting menu.", { cuisine: "malaysian halal" }),
    place("kl-nasi-lemak", "Nasi Lemak Tanglin", 3.143, 101.687, "food", "Quick meal", "Lake Gardens", 7, "Coconut rice packs near the museums.", { cuisine: "malaysian halal" }),
    place("kl-roti-canai", "Mamak Maju JI Bukit Bintang", 3.1465, 101.711, "food", "Quick meal", "Bukit Bintang", 6, "Roti canai and teh tarik round the clock.", { cuisine: "indian malaysian halal" }),
    place("kl-yut-kee", "Yut Kee Restaurant", 3.1385, 101.691, "food", "Restaurant", "Chow Kit", 7, "Retro Hainanese kopitiam since 1928.", { cuisine: "chinese malaysian" }),
    place("kl-ichiban", "Ichiban Boshi Pavilion", 3.1492, 101.7125, "food", "Restaurant", "Bukit Bintang", 6, "Reliable ramen in the mall.", { cuisine: "japanese" }),
    place("kl-opium", "Opium KL", 3.1448, 101.6972, "food", "Restaurant", "Chinatown", 7, "Stylish Chinese plates in a shophouse.", { cuisine: "chinese" }),
    place("kl-enak", "Enak KL", 3.1575, 101.7185, "food", "Restaurant", "KLCC", 8, "Modern Malay in a bungalow.", { cuisine: "malaysian halal" }),
    place("kl-food-republic", "Food Republic Pavilion", 3.149, 101.7128, "food", "Quick meal", "Bukit Bintang", 6, "Hawker-style stalls indoors.", { cuisine: "malaysian chinese" }),
    place("kl-banana-leaf", "Banana leaf Apollo", 3.1288, 101.6852, "food", "Restaurant", "Brickfields", 7, "South Indian leaf lunches.", { cuisine: "indian vegetarian halal" }),
    place("kl-songket", "Songket Restaurant", 3.157, 101.718, "food", "Restaurant", "KLCC", 8, "Traditional Malay dinner with dance.", { cuisine: "malaysian halal" }),
    place("kl-bazaar-ramadan", "Kampung Baru night market", 3.165, 101.71, "food", "Quick meal", "Kampung Baru", 7, "Seasonal Ramadan bazaar — legendary skewers.", { cuisine: "malaysian street_food halal" }),
    place("kl-vegan", "Din Harmony vegan", 3.146, 101.71, "food", "Restaurant", "Bukit Bintang", 5, "Plant-based Malaysian plates.", { cuisine: "vegan vegetarian" }),

    // ——— Nightlife ———
    place("kl-heli", "Heli Lounge Bar", 3.1535, 101.7105, "nightlife", "Bar", "KLCC", 8, "Helipad cocktails with tower views."),
    place("kl-marini", "Marini's on 57", 3.1575, 101.7115, "nightlife", "Bar", "KLCC", 9, "Dress-up sky bar beside Petronas."),
    place("kl-skybar", "SkyBar Traders Hotel", 3.1538, 101.7135, "nightlife", "Bar", "KLCC", 8, "Pool-edge skyline drinks."),
    place("kl-changkat", "Changkat Bukit Bintang", 3.1485, 101.7088, "nightlife", "Bar", "Bukit Bintang", 8, "Bar crawl lane behind Jalan Alor."),
    place("kl-beach-club", "Beach Club Café", 3.1488, 101.709, "nightlife", "Club", "Bukit Bintang", 7, "Long-running dance club on Changkat."),
    place("kl-zouk", "Zouk KL", 3.1385, 101.712, "nightlife", "Club", "TREC", 8, "Major EDM club in the TREC zone."),
    place("kl-iron-fairies", "The Iron Fairies", 3.1482, 101.7092, "nightlife", "Bar", "Bukit Bintang", 7, "Whimsical cocktail den on Changkat."),
    place("kl-ps150", "PS150", 3.1445, 101.6968, "nightlife", "Bar", "Chinatown", 7, "Hidden pre-war bar behind a toy shop."),

    // ——— Stays ———
    place("kl-stay-mandarin", "Mandarin Oriental KL", 3.1548, 101.7135, "stay", "Hotel", "KLCC", 10, "Park-facing luxury under the towers."),
    place("kl-stay-petronas", "Traders Hotel KL", 3.1535, 101.713, "stay", "Hotel", "KLCC", 9, "SkyBar hotel with direct KLCC access."),
    place("kl-stay-four-seasons", "Four Seasons KL", 3.158, 101.712, "stay", "Hotel", "KLCC", 10, "Newer tower hotel linked to Pavilion."),
    place("kl-stay-banyan", "Banyan Tree KL", 3.1585, 101.7125, "stay", "Hotel", "KLCC", 9, "High-floor suites near the towers."),
    place("kl-stay-grand-hyatt", "Grand Hyatt KL", 3.1525, 101.7108, "stay", "Hotel", "KLCC", 9, "Hyatt on Jalan Pinang."),
    place("kl-stay-shangri", "Shangri-La Kuala Lumpur", 3.153, 101.7065, "stay", "Hotel", "KLCC", 9, "Garden wing escape near Bukit Nanas."),
    place("kl-stay-konrad", "Conrad Kuala Lumpur", 3.168, 101.652, "stay", "Hotel", "Intermark", 8, "PETRONAS views from the Trade Centre area."),
    place("kl-stay-muji", "Hotel Stripes KL", 3.156, 101.704, "stay", "Hotel", "Chow Kit", 7, "Design hotel with rooftop pool."),
    place("kl-stay-mo", "Motel One Pearl Point", 3.14, 101.705, "stay", "Hotel", "Bukit Bintang", 6, "Compact rooms near monorail."),
    place("kl-stay-oasis", "The Mesui Hotel", 3.147, 101.7085, "stay", "Hotel", "Bukit Bintang", 7, "Boutique off Jalan Nagasari."),
    place("kl-stay-chamber", "Chamber Hotel", 3.144, 101.697, "stay", "Hotel", "Chinatown", 6, "Budget boutique in Petaling pocket."),
    place("kl-stay-backhome", "BackHome Hostel", 3.1445, 101.6965, "stay", "Hostel", "Chinatown", 7, "Stylish dorms near Central Market."),
    place("kl-stay-reggae", "Reggae Mansion", 3.1442, 101.6972, "stay", "Hostel", "Chinatown", 6, "Social hostel on Petaling edge."),
    place("kl-stay-madras", "Madras Lane hostel", 3.145, 101.6978, "stay", "Hostel", "Chinatown", 5, "Budget beds in the market lanes."),
    place("kl-stay-guest-bangsar", "Bangsar guesthouse", 3.1285, 101.671, "stay", "Guest house", "Bangsar", 6, "Quiet rooms in a villa suburb."),
    place("kl-stay-guest-klcc", "KLCC homestay", 3.155, 101.714, "stay", "Guest house", "KLCC", 6, "Apartment-style guest rooms by the park."),
    place("kl-stay-apt-klcc", "KLCC serviced apartment", 3.156, 101.715, "stay", "Apartment", "KLCC", 8, "Kitchen and pool in a condo tower."),
    place("kl-stay-apt-bangsar", "Bangsar apartment", 3.129, 101.671, "stay", "Apartment", "Bangsar", 7, "Self-catering near Village Park."),
    place("kl-stay-apt-sentul", "Sentul apartment", 3.185, 101.692, "stay", "Apartment", "Sentul", 5, "Value flats north with LRT access."),
    place("kl-stay-element", "Element Kuala Lumpur", 3.157, 101.712, "stay", "Hotel", "KLCC", 8, "Extended-stay rooms in Ilham Tower."),
  ],
};