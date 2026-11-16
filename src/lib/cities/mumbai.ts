import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const mumbai: CityCatalog = {
  id: "mumbai",
  name: "Mumbai, India",
  aliases: ["mumbai", "bombay"],
  center: { lat: 19.076, lon: 72.8777 },
  places: [
    // ——— Colaba & Apollo Bunder ———
    place("mb-gateway", "Gateway of India", 18.922, 72.8347, "sight", "Monument", "Colaba", 10, "Harbour arch facing the Arabian Sea — go at dawn for thinner crowds.", { flags: ["free", "touristy"] }),
    place("mb-taj-palace", "Taj Mahal Palace Hotel exterior", 18.9216, 72.8331, "sight", "Attraction", "Colaba", 8, "Iconic dome and arcade beside the Gateway — photo stop from the promenade."),
    place("mb-elephanta-ferry", "Elephanta Caves ferry pier", 18.9218, 72.8349, "sight", "Attraction", "Colaba", 9, "Boats to Elephanta Island cave temples — morning departures only.", { tip: "Buy tickets at the Gateway booth; last boats mid-afternoon.", flags: ["ticket"] }),
    place("mb-colaba-causeway", "Colaba Causeway stroll", 18.9146, 72.8278, "shopping", "Market", "Colaba", 8, "Souvenirs, street fashion, and juice stalls between Regal and Sassoon Dock."),
    place("mb-leopold", "Leopold Cafe", 18.9226, 72.8318, "food", "Restaurant", "Colaba", 7, "Colonial-era cafe with multi-cuisine plates and cold beer.", { cuisine: "multi-cuisine", flags: ["touristy"] }),
    place("mb-bagel-shop", "The Bagel Shop Colaba", 18.9155, 72.8285, "cafe", "Cafe", "Colaba", 6, "Brunch stop with bagels and iced coffee off the Causeway."),
    place("mb-cusrow", "Cusrow Baug Parsi colony walk", 18.9178, 72.8305, "sight", "Attraction", "Colaba", 5, "Quiet Parsi residential lanes behind the Causeway buzz."),
    place("mb-sassoon", "Sassoon Dock fish market", 18.9105, 72.8262, "shopping", "Market", "Colaba", 7, "Dawn fish auction and Koli fishing community — go early with a guide if possible.", { tip: "Best before 8am; photography sometimes restricted." }),
    place("mb-radio-club", "Radio Club seafront", 18.9195, 72.8338, "sight", "Attraction", "Colaba", 5, "Quiet stretch of harbour wall near the Yacht Club."),

    // ——— Fort & Kala Ghoda ———
    place("mb-cst", "Chhatrapati Shivaji Terminus", 18.9398, 72.8355, "sight", "Monument", "Fort", 10, "UNESCO Victorian-Gothic station façade — best lit at dusk.", { flags: ["free", "touristy"] }),
    place("mb-bmc", "BMC headquarters building", 18.9392, 72.835, "sight", "Monument", "Fort", 7, "Gothic civic palace opposite CST — exterior photo stop."),
    place("mb-horniman", "Horniman Circle Gardens", 18.9328, 72.8345, "nature", "Park", "Fort", 7, "Shaded colonial circle beside the Town Hall and Asiatic Society."),
    place("mb-asiatic", "Asiatic Society Town Hall steps", 18.9318, 72.8352, "sight", "Monument", "Fort", 7, "Neoclassical steps and reading rooms facing Horniman Circle."),
    place("mb-kala-ghoda", "Kala Ghoda art district", 18.9288, 72.8315, "sight", "Attraction", "Kala Ghoda", 9, "Galleries, street art, and cafe hops in the Fort art precinct."),
    place("mb-jehangir", "Jehangir Art Gallery", 18.9275, 72.8318, "museum", "Museum", "Kala Ghoda", 8, "Flagship contemporary and modern Indian art shows.", { flags: ["free"] }),
    place("mb-csmvs", "Chhatrapati Shivaji Vastu Sangrahalaya", 18.9269, 72.8327, "museum", "Museum", "Kala Ghoda", 9, "Indo-Saracenic museum with sculpture, miniature paintings, and natural history.", { flags: ["ticket"] }),
    place("mb-nataraj", "National Gallery of Modern Art Mumbai", 18.9258, 72.8312, "museum", "Museum", "Kala Ghoda", 7, "Modern Indian masters in a compact Fort gallery.", { flags: ["ticket"] }),
    place("mb-cafe-mondegar", "Cafe Mondegar", 18.9228, 72.8322, "cafe", "Cafe", "Colaba", 7, "Mario Miranda mural walls and cold coffee near Regal Cinema.", { cuisine: "cafe" }),
    place("mb-sterling", "Sterling Theatre area stroll", 18.9385, 72.8338, "sight", "Attraction", "Fort", 5, "Cinema and office lanes linking CST to Flora Fountain."),
    place("mb-flora", "Flora Fountain", 18.9308, 72.8312, "sight", "Monument", "Fort", 7, "Victorian fountain at the Fort traffic hub — evening lights."),
    place("mb-st-thomas", "St. Thomas Cathedral", 18.9315, 72.8342, "sight", "Monument", "Fort", 6, "Mumbai's oldest Anglican church beside Horniman Circle."),

    // ——— Marine Drive & Churchgate ———
    place("mb-marine-drive", "Marine Drive promenade", 18.9432, 72.8235, "sight", "Attraction", "Marine Drive", 10, "Queen's Necklace seafront — sunset and night neon arc.", { flags: ["free", "touristy"] }),
    place("mb-chowpatty", "Girgaon Chowpatty Beach", 18.9545, 72.8128, "nature", "Beach", "Chowpatty", 8, "Bhel puri carts and sunset crowds on the north Marine Drive curve.", { cuisine: "street food" }),
    place("mb-ncp", "National Centre for the Performing Arts", 18.9255, 72.8198, "sight", "Attraction", "Nariman Point", 7, "Concert halls and gallery foyer at the tip of Marine Drive."),
    place("mb-nariman", "Nariman Point skyline walk", 18.925, 72.8215, "sight", "Viewpoint", "Nariman Point", 7, "Business-district towers meeting the bay — evening stroll."),
    place("mb-oval", "Oval Maidan cricket lawns", 18.9295, 72.8295, "nature", "Park", "Churchgate", 6, "Colonial cricket green framed by Art Deco buildings."),
    place("mb-cross", "Cross Maidan green", 18.938, 72.8285, "nature", "Park", "Churchgate", 5, "Open maidan between Churchgate and CST for a breather."),
    place("mb-wankhede", "Wankhede Stadium exterior", 18.9388, 72.8258, "sight", "Attraction", "Churchgate", 7, "Iconic cricket ground — match days need tickets far ahead.", { flags: ["ticket"] }),
    place("mb-art-deco", "Marine Drive Art Deco walk", 18.9445, 72.8225, "sight", "Attraction", "Marine Drive", 8, "UNESCO-listed apartment façades along the bay."),
    place("mb-eros", "Eros Cinema façade", 18.9322, 72.8275, "sight", "Monument", "Churchgate", 6, "Streamline Art Deco cinema at Churchgate Junction."),

    // ——— Malabar Hill & Walkeshwar ———
    place("mb-hanging", "Hanging Gardens (Pherozeshah Mehta)", 18.9565, 72.8055, "nature", "Garden", "Malabar Hill", 8, "Topiary park with Arabian Sea views above Chowpatty."),
    place("mb-kamala-nehru", "Kamala Nehru Park", 18.9558, 72.8048, "nature", "Park", "Malabar Hill", 7, "Old Woman's Shoe playground and bay lookouts."),
    place("mb-banganga", "Banganga Tank", 18.9475, 72.8042, "sight", "Monument", "Walkeshwar", 8, "Sacred stepped tank and temple cluster on Malabar Hill."),
    place("mb-walkeshwar", "Walkeshwar Temple", 18.9478, 72.8038, "sight", "Monument", "Walkeshwar", 7, "Ancient Shiva shrine above Banganga — dress modestly."),
    place("mb-priyadarshini", "Priyadarshini Park seafront", 18.9595, 72.8025, "nature", "Park", "Nepean Sea Road", 6, "Jogging track and rocks facing the open sea."),
    place("mb-manimala", "Mani Bhavan Gandhi Museum", 18.9598, 72.8115, "museum", "Museum", "Gamdevi", 8, "Gandhi's Mumbai residence with letters and spinning wheel.", { flags: ["ticket"] }),

    // ——— Byculla, Mazgaon & Central ———
    place("mb-bhau", "Bhau Daji Lad Museum", 18.9785, 72.8348, "museum", "Museum", "Byculla", 8, "Restored Victorian museum of city history beside the zoo.", { flags: ["ticket"] }),
    place("mb-zoo", "Veermata Jijabai Bhosale Udyan Zoo", 18.978, 72.8355, "nature", "Park", "Byculla", 7, "Historic zoo and botanical gardens — family half-day.", { flags: ["ticket"] }),
    place("mb-gloria", "Gloria Church", 18.9755, 72.8335, "sight", "Monument", "Byculla", 6, "Gothic church façade on Byculla's heritage stretch."),
    place("mb-dockyard", "Mazgaon dockyard viewpoint", 18.9685, 72.8475, "sight", "Viewpoint", "Mazgaon", 5, "Working harbour glimpses from public roads — industrial Mumbai."),

    // ——— Worli & Lower Parel ———
    place("mb-sealink", "Bandra-Worli Sea Link viewpoint", 19.0225, 72.8175, "sight", "Viewpoint", "Worli", 9, "Cable-stayed bridge photos from Worli seaface at sunset.", { flags: ["free", "touristy"] }),
    place("mb-worli-fort", "Worli Fort", 19.0238, 72.8168, "sight", "Monument", "Worli", 7, "Portuguese-era fort stump with Sea Link and sunset views."),
    place("mb-worli-seaface", "Worli Sea Face promenade", 19.0185, 72.8162, "nature", "Park", "Worli", 7, "Jogging path and monsoon waves along the bay."),
    place("mb-mahalaxmi", "Mahalaxmi Temple", 18.9825, 72.8095, "sight", "Monument", "Mahalaxmi", 8, "Hilltop goddess temple overlooking the racecourse — busy Tuesdays."),
    place("mb-racecourse", "Mahalaxmi Racecourse grounds", 18.982, 72.8195, "nature", "Park", "Mahalaxmi", 6, "Open green bowl — race days need tickets."),
    place("mb-dhobi", "Mahalaxmi Dhobi Ghat viewpoint", 18.9865, 72.8275, "sight", "Attraction", "Mahalaxmi", 8, "Open-air laundry amphitheatre seen from the rail overpass.", { flags: ["touristy"] }),
    place("mb-haji-ali", "Haji Ali Dargah", 18.9827, 72.8089, "sight", "Monument", "Worli", 9, "Causeway shrine in the sea — check tide and dress code.", { tip: "Causeway can flood at high tide; cover shoulders and knees." }),
    place("mb-phoenix", "Phoenix Palladium mall", 18.9945, 72.8245, "shopping", "Market", "Lower Parel", 7, "Flagship mall dining and cinema in the mill-district towers."),
    place("mb-high-street", "High Street Phoenix / Palladium outdoor", 18.994, 72.8252, "shopping", "Market", "Lower Parel", 6, "Open plaza shops linking mill compounds."),
    place("mb-todi", "Todi Mill Social courtyard", 18.9955, 72.8268, "nightlife", "Bar", "Lower Parel", 7, "Rooftop and courtyard drinks in a converted mill."),

    // ——— Bandra ———
    place("mb-bandra-fort", "Bandra Fort (Castella de Aguada)", 19.0422, 72.8185, "sight", "Monument", "Bandra West", 9, "Portuguese fort ruins facing the Sea Link — golden hour favourite.", { flags: ["free"] }),
    place("mb-bandstand", "Bandra Bandstand promenade", 19.0435, 72.8198, "nature", "Park", "Bandra West", 8, "Sea walk with celebrity bungalows and monsoon spray."),
    place("mb-carter", "Carter Road promenade", 19.0635, 72.8235, "nature", "Park", "Bandra West", 8, "Palm-lined jogging path and cafe strip at sunset."),
    place("mb-mount-mary", "Mount Mary Basilica", 19.0465, 72.8228, "sight", "Monument", "Bandra West", 8, "Hilltop Marian basilica with September feast crowds."),
    place("mb-linking", "Linking Road shopping", 19.0595, 72.8345, "shopping", "Market", "Bandra West", 7, "Street fashion and shoe stalls between Bandra and Khar."),
    place("mb-hill-road", "Hill Road boutiques", 19.0545, 72.8295, "shopping", "Market", "Bandra West", 7, "Trendy labels, street stalls, and cafe pit stops."),
    place("mb-pali", "Pali Village cafe hop", 19.0648, 72.8298, "cafe", "Cafe", "Bandra West", 8, "Indie cafes and brunch spots in leafy Pali lanes."),
    place("mb-elco", "Elco Market pani puri", 19.0555, 72.8315, "food", "Restaurant", "Bandra West", 8, "Famous pani puri and chaat counter — queue for a reason.", { cuisine: "street food" }),
    place("mb-candies", "Candies cafe", 19.0515, 72.8278, "cafe", "Cafe", "Bandra West", 7, "Institutional pasta-and-pastry cafe near St. Andrew's."),
    place("mb-bande-ra", "Bandra railway station hub", 19.0548, 72.8405, "sight", "Attraction", "Bandra East", 5, "Transit node linking Western Line and BKC."),
    place("mb-bkc", "Bandra Kurla Complex skyline", 19.0665, 72.8695, "sight", "Viewpoint", "BKC", 6, "Glass towers and weekend market events in the business district."),
    place("mb-jio", "Jio World Drive / Garden", 19.0615, 72.8675, "shopping", "Market", "BKC", 7, "Mall and landscaped garden complex in BKC."),

    // ——— Juhu, Versova & Andheri ———
    place("mb-juhu", "Juhu Beach", 19.0988, 72.8265, "nature", "Beach", "Juhu", 9, "Wide sand, kite flyers, and evening snack stalls.", { flags: ["free", "touristy"] }),
    place("mb-iskcon", "ISKCON Juhu Temple", 19.1132, 72.8268, "sight", "Monument", "Juhu", 8, "Marble Krishna temple with prasadam cafe — evening aarti is lively."),
    place("mb-prithvi", "Prithvi Theatre", 19.1075, 72.8262, "sight", "Attraction", "Juhu", 7, "Intimate theatre cafe — check the evening play bill."),
    place("mb-versova", "Versova Beach & fishing village", 19.1345, 72.8135, "nature", "Beach", "Versova", 7, "Quieter than Juhu with Koli boats and cleanup-volunteer history."),
    place("mb-lokhandwala", "Lokhandwala market strip", 19.1415, 72.8295, "shopping", "Market", "Andheri West", 6, "Street shopping and late restaurants in Andheri West."),
    place("mb-infiniti", "Infiniti Mall Malad", 19.1845, 72.8345, "shopping", "Market", "Malad", 5, "Suburban mall option if based in the north-west."),

    // ——— Dadar, Matunga & North-Central ———
    place("mb-shivaji-park", "Shivaji Park", 19.0275, 72.8385, "nature", "Park", "Dadar", 7, "Cricket nursery maidan and evening walking track."),
    place("mb-siddhivinayak", "Siddhivinayak Temple", 19.0169, 72.8303, "sight", "Monument", "Dadar", 9, "Beloved Ganesha temple — go early to avoid long queues.", { tip: "Tuesdays are busiest; use the special entry if available." }),
    place("mb-matunga", "Matungan South Indian breakfast", 19.0278, 72.8555, "food", "Restaurant", "Matunga", 8, "Filter coffee and dosa temples around Matunga station.", { cuisine: "south indian" }),
    place("mb-five-gardens", "Five Gardens (Dadar Parsi Colony)", 19.0215, 72.8485, "nature", "Park", "Dadar", 7, "Heritage garden circles in the Parsi Colony grid."),
    place("mb-plaza", "Plaza Cinema Dadar area", 19.0185, 72.8425, "sight", "Attraction", "Dadar", 5, "Local cinema hub and street-food lanes."),

    // ——— Elephanta & Harbour day ———
    place("mb-elephanta", "Elephanta Caves", 18.9633, 72.9315, "sight", "Monument", "Elephanta Island", 10, "UNESCO rock-cut Shiva caves — half-day ferry trip from Gateway.", { tip: "Closed Mondays. Wear shoes you can climb steps in.", flags: ["ticket", "touristy"] }),
    place("mb-elephanta-cannon", "Elephanta hilltop cannons", 18.9645, 72.9335, "sight", "Viewpoint", "Elephanta Island", 6, "Portuguese cannon mounts above the caves with harbour views."),

    // ——— Powai, Film City fringe & Thane day pockets ———
    place("mb-powai", "Powai Lake promenade", 19.1195, 72.9055, "nature", "Park", "Powai", 7, "Lakeside walk near IIT and Hiranandani gardens."),
    place("mb-kanheri", "Kanheri Caves", 19.2095, 72.9065, "sight", "Monument", "Sanjay Gandhi NP", 9, "Buddhist cave complex inside the national park — morning entry.", { flags: ["ticket"] }),
    place("mb-sgnp", "Sanjay Gandhi National Park trails", 19.2145, 72.9105, "nature", "Park", "Borivali", 8, "Forest trails and lion safari booking inside city limits.", { flags: ["ticket"] }),
    place("mb-global-vipassana", "Global Vipassana Pagoda", 19.2285, 72.8055, "sight", "Monument", "Gorai", 8, "Vast golden pagoda west of Borivali — serene half-day.", { tip: "Combine with Gorai beach; check meditation-hall entry rules." }),
    place("mb-essels", "EsselWorld / Water Kingdom fringe", 19.2295, 72.8025, "sight", "Attraction", "Gorai", 5, "Amusement park option near the pagoda ferry."),

    // ——— Food & nightlife anchors ———
    place("mb-bademiya", "Bademiya seekh kebabs", 18.9225, 72.8328, "food", "Restaurant", "Colaba", 8, "Late-night kebab rolls behind the Taj — classic Colaba ritual.", { cuisine: "mughlai" }),
    place("mb-trishna", "Trishna seafood", 18.9285, 72.8325, "food", "Restaurant", "Kala Ghoda", 8, "Butter-garlic crab institution in Fort — book ahead.", { cuisine: "seafood" }),
    place("mb-britannia", "Britannia & Co.", 18.9325, 72.8425, "food", "Restaurant", "Ballard Estate", 8, "Irani cafe berry pulao — weekday lunch classic.", { cuisine: "parsi", tip: "Often closed Sundays; go for lunch." }),
    place("mb-kyani", "Kyani & Co. Irani cafe", 18.9445, 72.8285, "cafe", "Cafe", "Marine Lines", 7, "Bun maska and chai in a time-capsule Irani cafe.", { cuisine: "irani cafe" }),
    place("mb-swati", "Swati Snacks", 18.9585, 72.8115, "food", "Restaurant", "Tardeo", 8, "Gujarati snacks and thali near Nana Chowk.", { cuisine: "gujarati" }),
    place("mb-theobroma", "Theobroma cake shop (Colaba)", 18.9185, 72.8295, "cafe", "Cafe", "Colaba", 6, "Brownies and bun maska for a sweet Causeway break."),
    place("mb-aer", "Aer bar Four Seasons", 18.9948, 72.8205, "nightlife", "Bar", "Worli", 8, "Sky-high cocktails with Sea Link views — dress code evening."),
    place("mb-blue-frog", "Blue Frog / Mill Estate nightlife pocket", 18.9958, 72.8258, "nightlife", "Club", "Lower Parel", 6, "Live-music and club energy in the mill district cluster."),
    place("mb-olive", "Olive Bar & Kitchen", 19.0455, 72.8215, "nightlife", "Bar", "Bandra West", 7, "Mediterranean courtyard dining near Bandstand.", { cuisine: "mediterranean" }),
    place("mb-highway-gulnar", "Highway Gulnar kebab night", 19.1655, 72.8555, "food", "Restaurant", "Western Express Highway", 6, "Late-night highway kebab stop north of Andheri.", { cuisine: "mughlai" }),

    // ——— Stays ———
    place("mb-stay-colaba", "Colaba harbour hotels cluster", 18.9215, 72.8325, "stay", "Hotel", "Colaba", 8, "Sleep steps from Gateway for ferry mornings and Fort walks."),
    place("mb-stay-fort", "Fort / Churchgate business hotels", 18.9355, 72.8275, "stay", "Hotel", "Churchgate", 7, "Central base for Marine Drive and CST without Colaba prices."),
    place("mb-stay-bandra", "Bandra West boutique stays", 19.0555, 72.8285, "stay", "Hotel", "Bandra West", 8, "Cafe culture and Sea Link sunsets — best for west-suburb energy."),
    place("mb-stay-juhu", "Juhu beach hotels", 19.1025, 72.8255, "stay", "Hotel", "Juhu", 7, "Beachfront sleeps near the airport corridor and Prithvi."),
    place("mb-stay-parel", "Lower Parel design hotels", 18.9965, 72.8248, "stay", "Hotel", "Lower Parel", 6, "Mill-district towers handy for dining and nightlife."),
  ],
};
