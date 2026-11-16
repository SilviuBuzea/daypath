import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const phuket: CityCatalog = {
  id: "phuket",
  name: "Phuket, Thailand",
  aliases: ["phuket"],
  center: { lat: 7.8804, lon: 98.3923 },
  places: [
    // ——— Phuket Town ———
    place("pkt-old-town", "Phuket Old Town", 7.8845, 98.3895, "sight", "Attraction", "Phuket Town", 9, "Sino-Portuguese shophouses and café lanes."),
    place("pkt-thalang-rd", "Thalang Road", 7.8855, 98.3905, "sight", "Attraction", "Phuket Town", 8, "Colorful heritage façades and boutiques."),
    place("pkt-dibuk", "Dibuk Road", 7.8835, 98.3885, "sight", "Attraction", "Phuket Town", 7, "Quiet heritage street with restored mansions."),
    place("pkt-clock-tower", "Suriyadej Clock Tower", 7.8875, 98.3915, "sight", "Monument", "Phuket Town", 6, "Roundabout landmark north of old town."),
    place("pkt-big-buddha", "Big Buddha (Phuket)", 7.8275, 98.3125, "sight", "Monument", "Chalong", 10, "Hilltop marble Buddha with island panoramas.", { flags: ["free"] }),
    place("pkt-chalong", "Wat Chalong", 7.8465, 98.3385, "sight", "Monument", "Chalong", 8, "Island's most important temple complex."),
    place("pkt-rang-hill", "Khao Rang viewpoint", 7.8925, 98.3755, "nature", "Viewpoint", "Phuket Town", 8, "Sunset hill above town with café decks."),
    place("pkt-museum", "Thalang National Museum", 8.035, 98.335, "museum", "Museum", "Thalang", 6, "Island history near Heroines Monument."),
    place("pkt-heroines", "Heroines Monument", 8.028, 98.337, "sight", "Monument", "Thalang", 7, "Twin statues of the Thep Kasattri sisters."),
    place("pkt-chinpracha", "Chinpracha House", 7.883, 98.3875, "museum", "Museum", "Phuket Town", 6, "Period mansion often used as a film set."),
    place("pkt-peranakan", "Phuket Thaihua Museum", 7.8848, 98.389, "museum", "Museum", "Phuket Town", 7, "Peranakan culture in a former school."),
    place("pkt-sunday-market", "Lard Yai Sunday Market", 7.885, 98.39, "shopping", "Market", "Phuket Town", 8, "Walking street market on Thalang Road."),

    // ——— Patong ———
    place("pkt-patong-beach", "Patong Beach", 7.8965, 98.2965, "nature", "Beach", "Patong", 9, "Main tourist beach — busy, swim-friendly mid-bay."),
    place("pkt-bangla", "Bangla Road", 7.8935, 98.2985, "nightlife", "Bar", "Patong", 8, "Neon party strip — intense after dark."),
    place("pkt-jungceylon", "Jungceylon", 7.8915, 98.3015, "shopping", "Mall", "Patong", 7, "Central Patong mall and cinema."),
    place("pkt-viewpoint-patong", "Patong Viewpoint", 7.915, 98.305, "nature", "Viewpoint", "Patong", 8, "Classic bay overlook from the north road."),
    place("pkt-paradise", "Paradise Beach", 7.875, 98.275, "nature", "Beach", "Patong", 7, "Boat-access cove south of Patong."),
    place("pkt-simon-cabaret", "Simon Cabaret", 7.885, 98.295, "nightlife", "Bar", "Patong", 6, "Long-running cabaret show venue.", { flags: ["ticket", "touristy"] }),

    // ——— Kata / Karon ———
    place("pkt-kata-beach", "Kata Beach", 7.8215, 98.2975, "nature", "Beach", "Kata", 9, "Family-friendly sand with gentle surf season."),
    place("pkt-kata-noi", "Kata Noi Beach", 7.8115, 98.2965, "nature", "Beach", "Kata", 8, "Quieter southern twin of Kata."),
    place("pkt-karon-beach", "Karon Beach", 7.8455, 98.2945, "nature", "Beach", "Karon", 9, "Long open beach between Patong and Kata."),
    place("pkt-karon-viewpoint", "Karon Viewpoint", 7.83, 98.295, "nature", "Viewpoint", "Karon", 9, "Three-bay postcard view — classic photo stop."),
    place("pkt-kata-temple", "Wat Kata", 7.825, 98.302, "sight", "Monument", "Kata", 5, "Small neighborhood temple near the hills."),
    place("pkt-dino-park", "Dino Park Mini Golf", 7.822, 98.2985, "sight", "Attraction", "Kata", 5, "Kitschy evening mini-golf and dining.", { flags: ["touristy"] }),

    // ——— West / northwest beaches ———
    place("pkt-kamala", "Kamala Beach", 7.955, 98.285, "nature", "Beach", "Kamala", 8, "Quieter village beach north of Patong."),
    place("pkt-surin", "Surin Beach", 7.978, 98.278, "nature", "Beach", "Surin", 8, "Upscale sand with beach clubs."),
    place("pkt-bang-tao", "Bang Tao Beach", 7.995, 98.282, "nature", "Beach", "Bang Tao", 9, "Long lagoon-shore beach and resort strip."),
    place("pkt-laguna", "Laguna Phuket", 8.0, 98.295, "sight", "Attraction", "Bang Tao", 7, "Resort lagoon complex with bikes and boats."),
    place("pkt-natai", "Natai Beach", 8.085, 98.295, "nature", "Beach", "Natai", 7, "Mainland-side sand north of the island bridge."),
    place("pkt-nai-yang", "Nai Yang Beach", 8.085, 98.2955, "nature", "Beach", "Nai Yang", 8, "National-park beach near the airport."),
    place("pkt-mai-khao", "Mai Khao Beach", 8.14, 98.3, "nature", "Beach", "Mai Khao", 8, "Long northern wild beach — turtle nesting area."),
    place("pkt-nai-harn", "Nai Harn Beach", 7.775, 98.305, "nature", "Beach", "Nai Harn", 9, "Southern favorite with clear water."),
    place("pkt-promthep", "Promthep Cape", 7.7625, 98.3055, "nature", "Viewpoint", "Rawai", 10, "Island's famous sunset cape.", { flags: ["free"] }),
    place("pkt-rawai", "Rawai Beach", 7.78, 98.325, "nature", "Beach", "Rawai", 6, "Local fishing pier and seafood stalls."),
    place("pkt-friendship", "Friendship Beach", 7.79, 98.33, "nature", "Beach", "Rawai", 5, "Quiet east-facing sand near Rawai."),

    // ——— East / islands day trips ———
    place("pkt-phi-phi", "Phi Phi pier departures", 7.823, 98.345, "sight", "Attraction", "Chalong", 8, "Day-trip boats to Phi Phi from Chalong."),
    place("pkt-james-bond", "James Bond Island tours", 7.88, 98.4, "sight", "Attraction", "Phang Nga", 8, "Karst bay day trips from Phuket piers.", { flags: ["ticket", "touristy"] }),
    place("pkt-coral-island", "Coral Island (Koh Hae)", 7.775, 98.355, "nature", "Beach", "Offshore", 7, "Snorkel day island off the southeast."),
    place("pkt-racha", "Racha Islands", 7.6, 98.37, "nature", "Beach", "Offshore", 8, "Clear-water dive/snorkel destination south."),
    place("pkt-similan", "Similan pier / tour hub", 7.89, 98.39, "sight", "Attraction", "Phuket Town", 7, "Seasonal tour desk for Similan national park."),

    // ——— Nature & parks ———
    place("pkt-sirinat", "Sirinat National Park", 8.09, 98.3, "nature", "Park", "Nai Yang", 8, "Airport-adjacent beaches and casuarina shade."),
    place("pkt-khao-phra", "Khao Phra Thaeo National Park", 8.03, 98.37, "nature", "Park", "Thalang", 8, "Rainforest trails and Bang Pae waterfall."),
    place("pkt-bang-pae", "Bang Pae Waterfall", 8.035, 98.385, "nature", "Park", "Thalang", 7, "Easy waterfall stop inside the park."),
    place("pkt-ton-sai", "Ton Sai Waterfall", 8.025, 98.365, "nature", "Park", "Thalang", 6, "Shorter cascade walk in Phra Thaeo."),
    place("pkt-elephant", "Ethical elephant sanctuaries (north)", 8.05, 98.35, "nature", "Park", "Thalang", 6, "Choose no-ride sanctuaries — research operators."),

    // ——— Museums / culture extras ———
    place("pkt-saphan-hin", "Saphan Hin Park", 7.875, 98.405, "nature", "Park", "Phuket Town", 6, "Seafront park and Tin Mining Monument."),
    place("pkt-mining-museum", "Phuket Mining Museum", 7.88, 98.4, "museum", "Museum", "Phuket Town", 5, "Tin-mining heritage near the east shore."),
    place("pkt-aquarium", "Phuket Aquarium", 7.825, 98.365, "museum", "Museum", "Cape Panwa", 6, "Small research aquarium on Panwa."),
    place("pkt-panwa", "Cape Panwa", 7.81, 98.41, "nature", "Viewpoint", "Panwa", 7, "Quiet cape with hotels and sea views."),
    place("pkt-fanta", "Phuket FantaSea", 7.96, 98.28, "sight", "Attraction", "Kamala", 6, "Cultural theme show and buffet complex.", { flags: ["ticket", "touristy"] }),
    place("pkt-tiger-kingdom", "Avoid tiger attractions", 7.95, 98.3, "sight", "Attraction", "Kamala", 3, "Listed only as a skip tip — choose wildlife-friendly options."),

    // ——— Shopping ———
    place("pkt-central-festival", "Central Festival Phuket", 7.892, 98.368, "shopping", "Mall", "Phuket Town", 8, "Main island mall with cinema and dining."),
    place("pkt-porto", "Porto de Phuket", 7.99, 98.295, "shopping", "Mall", "Bang Tao", 7, "Lagoon-side lifestyle plaza."),
    place("pkt-robinson", "Robinson Lifestyle Phuket", 7.89, 98.37, "shopping", "Mall", "Phuket Town", 6, "Everyday retail near Central."),
    place("pkt-night-market-nalkerd", "Naka Weekend Market", 7.91, 98.375, "shopping", "Market", "Phuket Town", 8, "Huge weekend food and goods market."),
    place("pkt-chilva", "Chilva Market", 7.886, 98.392, "shopping", "Market", "Phuket Town", 6, "Indie craft market nights in town."),
    place("pkt-patong-night", "Patong Night Market", 7.895, 98.299, "shopping", "Market", "Patong", 7, "Souvenir and street-food stalls by the beach."),
    place("pkt-rawai-seafood", "Rawai seafood market", 7.779, 98.328, "shopping", "Market", "Rawai", 7, "Buy fish and grill at nearby restaurants."),

    // ——— Cafes ———
    place("pkt-kopitiam", "Kopitiam Old Town", 7.8842, 98.3898, "cafe", "Cafe", "Phuket Town", 7, "Hainanese coffee and toast.", { cuisine: "coffee thai" }),
    place("pkt-gallery-cafe", "Gallery Café Thalang", 7.8852, 98.3902, "cafe", "Cafe", "Phuket Town", 7, "Heritage-house specialty coffee.", { cuisine: "coffee" }),
    place("pkt-bookhemian", "Bookhemian", 7.884, 98.3888, "cafe", "Cafe", "Phuket Town", 8, "Bookstore café on a quiet lane.", { cuisine: "coffee books" }),
    place("pkt-amazon", "Café Amazon Kata", 7.822, 98.299, "cafe", "Cafe", "Kata", 5, "Ubiquitous Thai chain for iced coffee.", { cuisine: "coffee" }),
    place("pkt-roast", "Roast Phuket Bang Tao", 7.992, 98.29, "cafe", "Cafe", "Bang Tao", 7, "Beach-area specialty roaster.", { cuisine: "coffee" }),
    place("pkt-surf-cafe", "Kata surf cafés", 7.821, 98.298, "cafe", "Cafe", "Kata", 6, "Smoothies and brunch near the break.", { cuisine: "cafe brunch" }),
    place("pkt-karon-cafe", "Karon beach cafés", 7.846, 98.295, "cafe", "Cafe", "Karon", 6, "Promenade iced drinks after swims.", { cuisine: "coffee juice" }),
    place("pkt-rang-cafe", "Khao Rang café decks", 7.892, 98.376, "cafe", "Cafe", "Phuket Town", 7, "Viewpoint coffee at dusk.", { cuisine: "coffee" }),

    // ——— Food ———
    place("pkt-krab", "One Chun Café & Restaurant", 7.8846, 98.3892, "food", "Restaurant", "Phuket Town", 8, "Phuket crab curry and local recipes.", { cuisine: "southern_thai" }),
    place("pkt-mee-hoa", "Mee Hokkien stalls", 7.885, 98.391, "food", "Quick meal", "Phuket Town", 7, "Hokkien noodles — Phuket breakfast classic.", { cuisine: "peranakan thai" }),
    place("pkt-lobster", "Patong lobster restaurants", 7.897, 98.297, "food", "Restaurant", "Patong", 6, "Touristy seafood tanks on the beach road.", { cuisine: "seafood", flags: ["touristy"] }),
    place("pkt-som-tum", "Som tum carts Kata", 7.823, 98.3, "food", "Quick meal", "Kata", 7, "Papaya salad and grilled chicken.", { cuisine: "thai isaaan" }),
    place("pkt-muslim", "Rawai Muslim food stalls", 7.78, 98.327, "food", "Quick meal", "Rawai", 7, "Roti and curries near the pier.", { cuisine: "thai muslim" }),
    place("pkt-brunch", "Catch Beach Club dining", 7.977, 98.277, "food", "Restaurant", "Surin", 7, "Beach-club lunch on Surin sand.", { cuisine: "international seafood" }),
    place("pkt-night-food", "Naka Market food courts", 7.91, 98.3755, "food", "Quick meal", "Phuket Town", 8, "Weekend grilled seafood and desserts.", { cuisine: "thai street_food" }),
    place("pkt-dimsum", "Wilai restaurant", 7.8844, 98.3896, "food", "Restaurant", "Phuket Town", 7, "Old-town Thai favorites in a shophouse.", { cuisine: "thai" }),
    place("pkt-indian", "Indian strip Patong", 7.894, 98.299, "food", "Restaurant", "Patong", 6, "Curries for beach-town nights.", { cuisine: "indian" }),
    place("pkt-vegan", "Vegan cafés Old Town", 7.8838, 98.389, "food", "Restaurant", "Phuket Town", 6, "Plant-based bowls in heritage lanes.", { cuisine: "vegan" }),
    place("pkt-bbq", "Kata night BBQ", 7.8225, 98.2985, "food", "Quick meal", "Kata", 6, "Beach-road grilled seafood dinners.", { cuisine: "seafood thai" }),
    place("pkt-pad-thai", "Pad Thai shops Karon", 7.845, 98.296, "food", "Quick meal", "Karon", 5, "Tourist-friendly wok noodles.", { cuisine: "thai" }),
    place("pkt-fine", "PRU / resort fine dining", 7.995, 98.285, "food", "Restaurant", "Bang Tao", 8, "Farm-driven tasting menus in the lagoon area.", { cuisine: "thai fine_dining" }),
    place("pkt-coffee-dessert", "Kanom Thai dessert carts", 7.8855, 98.39, "food", "Quick meal", "Phuket Town", 6, "Coconut sweets and mango sticky rice.", { cuisine: "thai dessert" }),
    place("pkt-ramen", "Japanese strip Kalim", 7.905, 98.295, "food", "Restaurant", "Patong", 6, "Ramen and izakaya north of Patong.", { cuisine: "japanese" }),

    // ——— Nightlife ———
    place("pkt-bangla-clubs", "Bangla Road clubs", 7.8938, 98.2988, "nightlife", "Club", "Patong", 8, "Main dance and party corridor."),
    place("pkt-beach-clubs-surin", "Surin beach clubs", 7.9785, 98.2785, "nightlife", "Bar", "Surin", 7, "Sunset DJ sets on the sand."),
    place("pkt-kata-bars", "Kata Beach bars", 7.8218, 98.2978, "nightlife", "Bar", "Kata", 6, "Lower-key beachfront drinks."),
    place("pkt-old-town-bars", "Old Town wine bars", 7.8847, 98.3893, "nightlife", "Bar", "Phuket Town", 7, "Heritage-house cocktails and wine."),
    place("pkt-kamala-night", "Kamala night scene", 7.954, 98.286, "nightlife", "Bar", "Kamala", 5, "Smaller bar strip than Patong."),
    place("pkt-after-beach", "After Beach Bar", 7.828, 98.295, "nightlife", "Bar", "Karon", 7, "Viewpoint reggae bar above Kata."),

    // ——— Stays ———
    place("pkt-stay-sri-panwa", "Sri Panwa", 7.805, 98.41, "stay", "Hotel", "Panwa", 10, "Clifftop villa resort on Cape Panwa."),
    place("pkt-stay-trisara", "Trisara", 8.02, 98.28, "stay", "Hotel", "North Phuket", 10, "Ultra-luxe private-bay resort."),
    place("pkt-stay-amanpuri", "Amanpuri", 7.985, 98.275, "stay", "Hotel", "Pansea", 10, "Iconic pavilion resort above Pansea."),
    place("pkt-stay-katathani", "Kata Thani", 7.812, 98.297, "stay", "Hotel", "Kata Noi", 8, "Beachfront resort on Kata Noi."),
    place("pkt-stay-marriott-old", "Courtyard / town hotels", 7.886, 98.391, "stay", "Hotel", "Phuket Town", 7, "Heritage-area base for café hopping."),
    place("pkt-stay-holiday", "Holiday Inn Resort Patong", 7.898, 98.297, "stay", "Hotel", "Patong", 7, "Central Patong beach access."),
    place("pkt-stay-laguna", "Laguna resort cluster", 8.001, 98.296, "stay", "Hotel", "Bang Tao", 8, "Shared facilities across Bang Tao resorts."),
    place("pkt-stay-keemala", "Keemala", 7.955, 98.295, "stay", "Hotel", "Kamala", 9, "Design villas in the Kamala hills."),
    place("pkt-stay-the-naka", "The Naka Phuket", 7.97, 98.28, "stay", "Hotel", "Kamala", 9, "Pool villas above Kamala bay."),
    place("pkt-stay-rawai", "Rawai boutique stays", 7.781, 98.326, "stay", "Hotel", "Rawai", 6, "Value bases near the southern cape."),
  ],
};
