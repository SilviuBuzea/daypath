import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const antalya: CityCatalog = {
  id: "antalya",
  name: "Antalya, Turkey",
  aliases: ["antalya"],
  center: { lat: 36.8969, lon: 30.7133 },
  places: [
    // ——— Kaleiçi / Old Town ———
    place("ant-hadrian", "Hadrian's Gate", 36.8852, 30.7055, "sight", "Monument", "Kaleiçi", 9, "Roman triple arch — start your old town wander here."),
    place("ant-clock-tower", "Clock Tower", 36.886, 30.7045, "sight", "Monument", "Kaleiçi", 7, "Ottoman tower marking the old city entrance."),
    place("ant-kaleici", "Kaleiçi lanes", 36.8855, 30.704, "sight", "Attraction", "Kaleiçi", 9, "Ottoman houses, bougainvillea, and harbor glimpses."),
    place("ant-hidirlik", "Hıdırlık Tower", 36.8815, 30.7045, "sight", "Monument", "Kaleiçi", 7, "Roman harbor tower with sunset sea views."),
    place("ant-yivli", "Yivli Minare Mosque", 36.8865, 30.7035, "sight", "Monument", "Kaleiçi", 8, "Fluted Seljuk minaret above the old town."),
    place("ant-karatay", "Karatay Medrese", 36.8868, 30.7032, "museum", "Museum", "Kaleiçi", 6, "Tile-lined Seljuk seminary courtyard."),
    place("ant-sun-gate", "Sun Gate & marina", 36.8835, 30.7025, "sight", "Attraction", "Kaleiçi", 7, "Harbor mouth walk to Roman walls."),
    place("ant-kesik", "Kesik Minaret", 36.8858, 30.7042, "sight", "Monument", "Kaleiçi", 6, "Ruined minaret of a Byzantine church-mosque."),
    place("ant-mermerli", "Mermerli Beach", 36.8828, 30.7028, "nature", "Beach", "Kaleiçi", 7, "Tiny old-town cove below the cliffs."),
    place("ant-old-harbor", "Old Harbor", 36.884, 30.703, "sight", "Attraction", "Kaleiçi", 8, "Gulets and cliffside restaurants around the marina."),

    // ——— City museums ———
    place("ant-archaeology", "Antalya Archaeological Museum", 36.8915, 30.6785, "museum", "Museum", "Konyaaltı", 10, "One of Turkey's best — statues and Lycian tombs."),
    place("ant-suna-inan", "Suna & İnan Kıraç Kaleiçi Museum", 36.8856, 30.7048, "museum", "Museum", "Kaleiçi", 6, "Ottoman house life in a restored mansion."),
    place("ant-ataturk-house", "Atatürk House Museum", 36.887, 30.7095, "museum", "Museum", "Cumhuriyet", 6, "Mustafa Kemal's brief Antalya stay memorial."),
    place("ant-ethnography", "Ethnography Museum", 36.8862, 30.7038, "museum", "Museum", "Kaleiçi", 6, "Folk crafts beside Yivli complex."),

    // ——— Konyaaltı coast ———
    place("ant-konyaalti-beach", "Konyaaltı Beach", 36.8965, 30.668, "nature", "Beach", "Konyaaltı", 9, "Long pebble beach with Beydağları backdrop."),
    place("ant-beachpark", "Beachpark", 36.894, 30.672, "shopping", "Mall", "Konyaaltı", 7, "Seaside mall and promenade cafés."),
    place("ant-aquarium", "Antalya Aquarium", 36.891, 30.666, "sight", "Attraction", "Konyaaltı", 8, "Tunnel tank and family afternoon on the west shore."),
    place("ant-duden-upper", "Upper Düden Waterfalls", 36.943, 30.783, "nature", "Park", "Upper Düden", 8, "Park with falls you can walk behind."),
    place("ant-duden-lower", "Lower Düden Falls", 36.8625, 30.784, "nature", "Viewpoint", "Lara", 8, "Cliff drop into the sea — boat tours pass close."),
    place("ant-kursunlu", "Kurşunlu Waterfall", 37.003, 30.786, "nature", "Park", "Kurşunlu", 7, "Forest picnic and cascades northeast of the city."),

    // ——— Lara / East ———
    place("ant-lara-beach", "Lara Beach", 36.852, 30.845, "nature", "Beach", "Lara", 8, "Wide sand strip lined with resort hotels."),
    place("ant-sandland", "Sandland", 36.855, 30.848, "sight", "Attraction", "Lara", 6, "Seasonal sand sculpture exhibit on the promenade."),
    place("ant-toy-museum", "Antalya Toy Museum", 36.8845, 30.7038, "museum", "Museum", "Kaleiçi", 6, "Nostalgic toys in a harbor-side mansion."),

    // ——— Termessos / Perge day trips ———
    place("ant-termessos", "Termessos", 36.982, 30.465, "sight", "Monument", "Termessos", 9, "Mountain Pisidian ruins in the Taurus — half-day with transport."),
    place("ant-perge", "Perge", 36.961, 30.854, "sight", "Monument", "Perge", 9, "Roman stadium and colonnaded streets east of town."),
    place("ant-aspendos", "Aspendos Theatre", 36.939, 31.172, "sight", "Monument", "Aspendos", 10, "Near-intact Roman arena — still hosts performances."),

    // ——— Parks ———
    place("ant-karaalioglu", "Karaalioğlu Park", 36.8818, 30.7065, "nature", "Park", "Kaleiçi", 8, "Clifftop lawns above the old harbor."),
    place("ant-ataturk-park", "Atatürk Park", 36.88, 30.708, "nature", "Park", "Kaleiçi", 6, "Shade and sea breeze south of the walls."),
    place("ant-gogebakan", "Göğebakan Park", 36.888, 30.72, "nature", "Park", "Muratpaşa", 5, "Local green pocket in the modern center."),

    place("ant-tunektepe", "Tünektepe Teleferik", 36.885, 30.615, "sight", "Viewpoint", "Konyaaltı", 8, "Cable car to panoramic Beydağları views."),
    place("ant-olympos-cable", "Olympos Teleferik area", 36.396, 30.475, "sight", "Attraction", "Tahtalı", 7, "Tahtalı mountain cable car — day trip from Antalya."),
    place("ant-phaselis", "Phaselis", 36.524, 30.552, "sight", "Monument", "Phaselis", 8, "Ruined Lycian port with beaches between coves."),
    place("ant-koprulu", "Köprülü Canyon", 37.191, 31.185, "nature", "Park", "Köprülü", 8, "Rafting gorge in the national park — book a shuttle."),
    place("ant-olympos-chimaera", "Chimera flames", 36.44, 30.47, "sight", "Attraction", "Çıralı", 7, "Eternal mountain flames above Olympos beach."),
    place("ant-land-of-legends", "The Land of Legends", 36.876, 30.848, "sight", "Attraction", "Belek", 7, "Theme park resort strip north of Lara."),
    place("ant-muratpasa-tram", "Nostalgic tram line", 36.886, 30.7055, "sight", "Attraction", "Muratpaşa", 6, "Heritage tram from Muratpaşa to the museum."),
    place("ant-fluted-museum", "Fluted Minaret complex", 36.8865, 30.7035, "museum", "Museum", "Kaleiçi", 7, "Combined ticket for Yivli and surrounding madrasas."),
    place("ant-boat-trip", "Kaleiçi boat trip", 36.884, 30.703, "sight", "Attraction", "Kaleiçi", 7, "Hour harbor loops and waterfalls cruises."),
    place("ant-mediterranean-univ", "Akdeniz University botanic", 36.896, 30.645, "nature", "Garden", "Konyaaltı", 5, "Campus botanical collection west of center."),
    place("ant-selcuk-museum", "Sun & Sea Museum", 36.8848, 30.7038, "museum", "Museum", "Kaleiçi", 5, "Maritime artifacts in a harbor konak."),
    place("ant-glass-pyramid", "Glass Pyramid Expo", 36.892, 30.692, "sight", "Attraction", "Muratpaşa", 5, "Convention hall landmark near the archaeological museum."),
    place("ant-expo-2016", "Expo 2016 area", 36.915, 30.758, "nature", "Park", "Aksu", 6, "Former expo grounds with flower displays."),

    // ——— Shopping ———
    place("ant-markantalya", "MarkAntalya", 36.8985, 30.7135, "shopping", "Mall", "Muratpaşa", 7, "Central mall by Muratpaşa tram."),
    place("ant-terra", "TerraCity", 36.871, 30.738, "shopping", "Mall", "Lara", 7, "Large mall on the airport road."),
    place("ant-migros", "Migros Shopping Center", 36.893, 30.698, "shopping", "Mall", "Muratpaşa", 6, "Everyday retail near the old town hill."),
    place("ant-kaleici-shops", "Kaleiçi artisan shops", 36.8853, 30.7045, "shopping", "Market", "Kaleiçi", 7, "Carpets, lamps, and Turkish delight in Ottoman houses."),
    place("ant-farmers", "Saturday Muratpaşa market", 36.895, 30.715, "shopping", "Market", "Muratpaşa", 6, "Produce and cheese morning market."),

    // ——— Cafes ———
    place("ant-kahve-dunyasi", "Kahve Dünyası Kaleiçi", 36.8854, 30.7043, "cafe", "Cafe", "Kaleiçi", 6, "Turkish coffee and desserts in the old town.", { cuisine: "coffee turkish" }),
    place("ant-biepit", "Bi'épit", 36.8858, 30.704, "cafe", "Cafe", "Kaleiçi", 7, "Specialty roaster on a Kaleiçi terrace.", { cuisine: "coffee" }),
    place("ant-7go", "7 Go Kaleiçi", 36.8848, 30.7038, "cafe", "Cafe", "Kaleiçi", 6, "Brunch bowls with harbor glimpses.", { cuisine: "coffee brunch" }),
    place("ant-malibu", "Malibu Coffee", 36.896, 30.712, "cafe", "Cafe", "Muratpaşa", 5, "Chain café near the tram line.", { cuisine: "coffee" }),
    place("ant-filika", "Filika Café", 36.8825, 30.7025, "cafe", "Cafe", "Kaleiçi", 6, "Old harbor terrace iced drinks.", { cuisine: "coffee tea" }),
    place("ant-green", "Green Orange", 36.8935, 30.67, "cafe", "Cafe", "Konyaaltı", 5, "Beach walk smoothie stops.", { cuisine: "juice coffee" }),
    place("ant-starbucks-konyaalti", "Konyaaltı beach cafés", 36.8955, 30.669, "cafe", "Cafe", "Konyaaltı", 5, "Promenade coffee between swims.", { cuisine: "coffee" }),

    // ——— Food ———
    place("ant-seraser", "Seraser Fine Dining", 36.885, 30.7042, "food", "Restaurant", "Kaleiçi", 8, "Courtyard fine dining in a restored konak.", { cuisine: "turkish mediterranean" }),
    place("ant-7mehmet", "7 Mehmet", 36.8945, 30.6685, "food", "Restaurant", "Konyaaltı", 8, "Legendary kebap house by the beach.", { cuisine: "turkish kebab" }),
    place("ant-vanilla", "Vanilla Lounge", 36.8845, 30.7035, "food", "Restaurant", "Kaleiçi", 7, "Harbor-view dinner on the marina.", { cuisine: "turkish international" }),
    place("ant-arma", "Arma Restaurant", 36.8838, 30.7032, "food", "Restaurant", "Kaleiçi", 8, "Cliff terrace seafood above the old port.", { cuisine: "seafood turkish" }),
    place("ant-ouz", "Öz Kan Restaurant", 36.8862, 30.7035, "food", "Restaurant", "Kaleiçi", 6, "Lahmacun and pide near Yivli.", { cuisine: "turkish" }),
    place("ant-siske", "Şişkö", 36.8865, 30.7038, "food", "Quick meal", "Kaleiçi", 7, "Charcoal chicken and köfte in the lanes.", { cuisine: "turkish grill" }),
    place("ant-big-yellow", "Big Yellow Hotel breakfast", 36.8855, 30.705, "food", "Restaurant", "Kaleiçi", 6, "Roof terrace Turkish breakfast spread.", { cuisine: "turkish breakfast" }),
    place("ant-mahmut", "Mahmut's Pide", 36.897, 30.714, "food", "Quick meal", "Muratpaşa", 6, "Cheap pide lunches downtown.", { cuisine: "turkish pide" }),
    place("ant-migros-food", "Migros food court", 36.893, 30.698, "food", "Quick meal", "Muratpaşa", 5, "Fast options before museum afternoon.", { cuisine: "international" }),
    place("ant-sultan", "Sultan Sofrası", 36.8842, 30.704, "food", "Restaurant", "Kaleiçi", 7, "Ottoman-style meze and kebabs.", { cuisine: "turkish" }),
    place("ant-ciğer", "Ciğerci Ahmet", 36.898, 30.716, "food", "Quick meal", "Muratpaşa", 6, "Liver skewers — local late snack.", { cuisine: "turkish offal" }),
    place("ant-fish-harbor", "Old Harbor fish grills", 36.8842, 30.703, "food", "Restaurant", "Kaleiçi", 7, "Pick your fish at the marina counters.", { cuisine: "seafood turkish" }),
    place("ant-kasap", "Kasap Döner", 36.8955, 30.712, "food", "Quick meal", "Muratpaşa", 5, "Street döner wraps by the tram.", { cuisine: "turkish" }),
    place("ant-meat-inn", "Meat Inn Steakhouse", 36.872, 30.735, "food", "Restaurant", "Lara", 6, "Steak night on the Lara strip.", { cuisine: "steak international" }),
    place("ant-akdeniz", "Akdeniz Balıkçısı", 36.862, 30.785, "food", "Restaurant", "Lara", 7, "Seafood below the lower Düden cliffs.", { cuisine: "seafood" }),
    place("ant-mantı", "Antalya mantı house", 36.8875, 30.708, "food", "Restaurant", "Kaleiçi", 6, "Turkish dumplings with garlic yogurt.", { cuisine: "turkish" }),
    place("ant-vegan", "Vegan community kitchen", 36.8965, 30.711, "food", "Restaurant", "Muratpaşa", 5, "Plant-based bowls near the center.", { cuisine: "vegan vegetarian" }),
    place("ant-borek", "Börekçi Tevfik", 36.8985, 30.713, "food", "Quick meal", "Muratpaşa", 6, "Spinach and cheese börek to go.", { cuisine: "turkish pastry" }),

    // ——— Nightlife ———
    place("ant-club-arena", "Club Arena", 36.889, 30.71, "nightlife", "Club", "Muratpaşa", 7, "Mainstream dance club by the marina road."),
    place("ant-aura", "Aura Club Kemer yöresi", 36.872, 30.74, "nightlife", "Club", "Lara", 6, "Seasonal mega-clubs on the resort strip."),
    place("ant-terra-roof", "TerraCity rooftop bars", 36.871, 30.738, "nightlife", "Bar", "Lara", 6, "Mall rooftop cocktails before Lara nights."),
    place("ant-kaleici-wine", "Kaleiçi wine bars", 36.8855, 30.7045, "nightlife", "Bar", "Kaleiçi", 7, "Stone courtyard wine in the old town."),
    place("ant-istanbul-bar", "Pub İstanbul", 36.8975, 30.7145, "nightlife", "Bar", "Muratpaşa", 6, "Sports bar pours near Atatürk Boulevard."),
    place("ant-jolly", "Jolly Joker Live", 36.892, 30.705, "nightlife", "Bar", "Muratpaşa", 7, "Turkish live-music venue nights."),
    place("ant-beach-bar", "Konyaaltı beach bars", 36.895, 30.669, "nightlife", "Bar", "Konyaaltı", 6, "Sunset drinks on the pebble shore."),
    place("ant-irish", "Irish pubs Lara", 36.856, 30.846, "nightlife", "Bar", "Lara", 5, "Resort-strip pub crawl option."),

    // ——— Stays ———
    place("ant-stay-tuvana", "Tuvana Hotel", 36.8855, 30.7045, "stay", "Hotel", "Kaleiçi", 9, "Boutique konak in the old town core."),
    place("ant-stay-alp-pasa", "Alp Pasa Hotel", 36.8858, 30.7048, "stay", "Hotel", "Kaleiçi", 9, "Ottoman courtyard stay by Hadrian's Gate."),
    place("ant-stay-castle", "Castle Boutique Hotel", 36.8848, 30.7035, "stay", "Hotel", "Kaleiçi", 8, "Harbor-view rooms in restored stone."),
    place("ant-stay-sheraton", "Sheraton Voyager", 36.893, 30.6695, "stay", "Hotel", "Konyaaltı", 8, "Beachfront tower on Konyaaltı."),
    place("ant-stay-rixos", "Rixos Downtown", 36.892, 30.667, "stay", "Hotel", "Konyaaltı", 8, "All-inclusive option on the west shore."),
    place("ant-stay-akra", "Akra Hotel", 36.864, 30.639, "stay", "Hotel", "Konyaaltı", 9, "Design hotel with pier on the far west bay."),
    place("ant-stay-ramada", "Ramada Plaza", 36.871, 30.737, "stay", "Hotel", "Lara", 7, "Convention hotel on the Lara corridor."),
    place("ant-stay-delphin", "Delphin Imperial", 36.854, 30.848, "stay", "Hotel", "Lara", 8, "Large resort with beach and pools."),
    place("ant-stay-titanic", "Titanic Beach Lara", 36.851, 30.852, "stay", "Hotel", "Lara", 8, "Family resort on Lara sands."),
    place("ant-stay-hillside", "Hillside Su Hotel", 36.868, 30.645, "stay", "Hotel", "Konyaaltı", 8, "Architect-designed beach retreat west of center."),
    place("ant-stay-puding", "Puding Marina Residence", 36.8845, 30.703, "stay", "Hotel", "Kaleiçi", 7, "Small marina-side boutique."),
    place("ant-stay-white-garden", "White Garden Hotel", 36.8852, 30.7042, "stay", "Hotel", "Kaleiçi", 7, "Pool courtyard inside the walls."),
    place("ant-stay-sabah", "Sabah Pansiyon", 36.885, 30.704, "stay", "Guest house", "Kaleiçi", 6, "Budget pensions in wooden houses."),
    place("ant-stay-kaleici-guest", "Kaleiçi guesthouse", 36.8856, 30.7046, "stay", "Guest house", "Kaleiçi", 6, "Family-run rooms on quiet lanes."),
    place("ant-stay-hw", "Antalya Hostel Abad", 36.8865, 30.7055, "stay", "Hostel", "Kaleiçi", 5, "Dorms uphill from the marina."),
    place("ant-stay-mehtap", "Mehtap's Hostel", 36.8862, 30.705, "stay", "Hostel", "Kaleiçi", 5, "Social budget beds near Hadrian's Gate."),
    place("ant-stay-apt-kaleici", "Kaleiçi apartment", 36.8848, 30.704, "stay", "Apartment", "Kaleiçi", 7, "Self-catering in a stone house."),
    place("ant-stay-apt-konyaalti", "Konyaaltı apartment", 36.8945, 30.671, "stay", "Apartment", "Konyaaltı", 6, "Beach-week flats on the tram line."),
    place("ant-stay-apt-murat", "Muratpaşa apartment", 36.897, 30.713, "stay", "Apartment", "Muratpaşa", 6, "City flats near MarkAntalya."),
    place("ant-stay-barut", "Barut Lara", 36.853, 30.846, "stay", "Hotel", "Lara", 8, "Upscale Lara resort with spa."),
  ],
};