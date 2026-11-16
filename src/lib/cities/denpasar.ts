import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const denpasar: CityCatalog = {
  id: "denpasar",
  name: "Denpasar, Indonesia",
  aliases: ["denpasar", "bali", "denpasar bali"],
  center: { lat: -8.6705, lon: 115.2126 },
  places: [
    // ——— Denpasar core ———
    place("dps-bajra", "Bajra Sandhi Monument", -8.6715, 115.2335, "sight", "Monument", "Renon", 8, "Balinese struggle monument in Renon civic park — climb for views.", { flags: ["ticket"] }),
    place("dps-renon", "Renon Puputan Square park", -8.6705, 115.2325, "nature", "Park", "Renon", 7, "Weekend kite flying and jogging around the monument."),
    place("dps-museum-bali", "Museum Bali", -8.6575, 115.2155, "museum", "Museum", "Denpasar", 8, "Island ethnography beside Puputan Badung Square.", { flags: ["ticket"] }),
    place("dps-puputan", "Puputan Badung Square", -8.6565, 115.2165, "sight", "Monument", "Denpasar", 7, "Historic square commemorating the 1906 puputan."),
    place("dps-jagatnatha", "Pura Jagatnatha", -8.6568, 115.2168, "sight", "Monument", "Denpasar", 8, "State temple dedicated to Sang Hyang Widhi — dress code applies."),
    place("dps-pasar-badung", "Pasar Badung market", -8.6585, 115.2145, "shopping", "Market", "Denpasar", 8, "Multi-level wet market for spices, offerings, and textiles."),
    place("dps-pasar-kumbasari", "Pasar Kumbasari arts market", -8.6595, 115.2135, "shopping", "Market", "Denpasar", 7, "Handicrafts across the river from Badung Market."),
    place("dps-tukad-badung", "Tukad Badung river walk fringe", -8.659, 115.214, "nature", "Park", "Denpasar", 5, "Urban river corridor between the twin markets."),
    place("dps-lumintang", "Lumintang Park", -8.6455, 115.2155, "nature", "Park", "Denpasar", 5, "City park north of the centre for an evening stroll."),
    place("dps-sidikampung", "Sidik Jari Museum", -8.6685, 115.2255, "museum", "Museum", "Denpasar", 6, "Fingerprint-motif art museum of I Gusti Nyoman Lempad lineage.", { flags: ["ticket"] }),
    place("dps-werdi", "Taman Werdhi Budaya Art Centre", -8.6655, 115.2355, "sight", "Attraction", "Renon", 7, "Open stages for Balinese dance — check evening performance bills."),
    place("dps-bajra-night", "Renon night food stalls", -8.6725, 115.2315, "food", "Restaurant", "Renon", 6, "Evening warungs around the civic park.", { cuisine: "balinese" }),
    place("dps-cafe-renon", "Renon cafe strip", -8.6735, 115.2285, "cafe", "Cafe", "Renon", 6, "Laptop-friendly cafes in Denpasar's government district."),
    place("dps-sanur-road", "Bypass Ngurah Rai shopping fringe", -8.6855, 115.2255, "shopping", "Market", "Denpasar", 5, "Malls and practical shopping on the Sanur–Denpasar corridor."),
    place("dps-level21", "Level 21 Mall", -8.6685, 115.2125, "shopping", "Market", "Denpasar", 5, "Central mall cinema and AC break."),
    place("dps-airport", "Ngurah Rai Airport arrival hub", -8.7482, 115.1671, "sight", "Attraction", "Tuban", 5, "Island gateway — SIM cards and Grab pickup lore."),

    // ——— Sanur ———
    place("dps-sanur-beach", "Sanur Beach promenade", -8.6785, 115.2635, "nature", "Beach", "Sanur", 9, "Flat cycling path and sunrise beach — calmer than Kuta.", { flags: ["free"] }),
    place("dps-sanur-sunrise", "Sanur sunrise jetty", -8.6765, 115.2645, "sight", "Viewpoint", "Sanur", 8, "Classic east-coast sunrise with boats on the reef flat.", { flags: ["early"] }),
    place("dps-baja", "Bajra / Le Mayeur Museum", -8.6755, 115.2638, "museum", "Museum", "Sanur", 7, "Belgian artist Adrien-Jean Le Mayeur's beach house museum.", { flags: ["ticket"] }),
    place("dps-sindhu", "Sindhu Beach night market", -8.6825, 115.2625, "food", "Restaurant", "Sanur", 7, "Evening seafood and sate stalls on the sand path.", { cuisine: "seafood" }),
    place("dps-sanur-bike", "Sanur beach bike rental loop", -8.69, 115.262, "nature", "Park", "Sanur", 7, "Rent a bike for the full north–south promenade."),
    place("dps-serangan", "Serangan Island turtle conservation", -8.7225, 115.2355, "nature", "Park", "Serangan", 7, "Short hop for turtle release programmes — book ethical operators.", { flags: ["ticket"] }),
    place("dps-mangrove", "Denpasar mangrove forest boardwalk", -8.7255, 115.2055, "nature", "Park", "Suwung", 6, "Boardwalk through city-edge mangroves."),
    place("dps-sanur-temple", "Pura Dalem Renon / Sanur temples", -8.68, 115.2555, "sight", "Monument", "Sanur", 6, "Village temples with morning canang sari offerings."),

    // ——— Kuta & Legian ———
    place("dps-kuta-beach", "Kuta Beach", -8.7185, 115.1685, "nature", "Beach", "Kuta", 9, "Sunset surf beach and backpacker classic — busy but iconic.", { flags: ["free", "touristy"] }),
    place("dps-kuta-sunset", "Kuta sunset crowd point", -8.7175, 115.168, "sight", "Viewpoint", "Kuta", 8, "Drum circles and beer-on-sand evenings."),
    place("dps-poppies", "Poppies Lane shopping", -8.7155, 115.1715, "shopping", "Market", "Kuta", 7, "Souvenir lanes and massage stalls behind the beach."),
    place("dps-beachwalk", "Beachwalk Shopping Center", -8.7165, 115.1695, "shopping", "Market", "Kuta", 6, "Open-air mall right on Kuta Beach Road."),
    place("dps-legian", "Legian Beach stretch", -8.7055, 115.1685, "nature", "Beach", "Legian", 8, "Slightly calmer sand between Kuta and Seminyak."),
    place("dps-kuta-surf", "Kuta beginner surf lessons", -8.7195, 115.1688, "sight", "Attraction", "Kuta", 7, "Soft-sand breaks for first boards — morning glass-offs best."),
    place("dps-waterbom", "Waterbom Bali", -8.7285, 115.1685, "sight", "Attraction", "Kuta", 7, "Big water park for a family downtime day.", { flags: ["ticket"] }),
    place("dps-kuta-art", "Kuta Art Market", -8.7145, 115.1705, "shopping", "Market", "Kuta", 6, "Paintings and souvenirs near the main beach entrance."),
    place("dps-tuban", "Discovery Shopping Mall Tuban", -8.7355, 115.1675, "shopping", "Market", "Tuban", 5, "Airport-adjacent mall and beach path south of Kuta."),

    // ——— Seminyak & Canggu fringe ———
    place("dps-seminyak-beach", "Seminyak Beach", -8.6915, 115.1575, "nature", "Beach", "Seminyak", 9, "Upscale beach clubs and sunset loungers.", { flags: ["touristy"] }),
    place("dps-potato", "Potato Head Beach Club", -8.6855, 115.1555, "nightlife", "Bar", "Seminyak", 8, "Design-forward beach club — daybeds and sunset DJ sets.", { flags: ["ticket"] }),
    place("dps-ku-de-ta", "Ku De Ta", -8.6905, 115.1565, "nightlife", "Bar", "Seminyak", 8, "Classic Seminyak sunset institution."),
    place("dps-oberoi", "Seminyak Oberoi temple / beach path", -8.6935, 115.1585, "sight", "Monument", "Seminyak", 6, "Sea-temple silhouette on the beach walk."),
    place("dps-kayu-aya", "Kayu Aya / Oberoi shopping", -8.6885, 115.1625, "shopping", "Market", "Seminyak", 7, "Boutiques and design stores on the Seminyak strip."),
    place("dps-eat-street", "Seminyak Eat Street (Kayu Aya)", -8.6875, 115.1635, "food", "Restaurant", "Seminyak", 8, "Restaurant row for dinner crawls.", { cuisine: "multi-cuisine" }),
    place("dps-petitenget", "Pura Petitenget", -8.6825, 115.1585, "sight", "Monument", "Petitenget", 7, "Important sea temple between Seminyak and Canggu."),
    place("dps-batu-belig", "Batu Belig Beach", -8.6785, 115.1555, "nature", "Beach", "Batu Belig", 7, "Quieter sand pocket with cafes behind the dunes."),
    place("dps-canggu-echo", "Echo Beach Canggu", -8.6555, 115.1355, "nature", "Beach", "Canggu", 8, "Surf sunset and beach bars — day-trip west of Denpasar.", { flags: ["touristy"] }),
    place("dps-canggu-old", "Old Man's / Canggu beach clubs", -8.6595, 115.1385, "nightlife", "Bar", "Canggu", 7, "Laid-back boards and live music on the sand."),
    place("dps-tanah-lot", "Tanah Lot Temple", -8.6211, 115.0868, "sight", "Monument", "Tanah Lot", 10, "Sea-stack temple at sunset — west coast half-day from Denpasar.", { tip: "Arrive late afternoon; expect crowds and souvenir gauntlet.", flags: ["ticket", "touristy"] }),

    // ——— Ubud day-trip pocket ———
    place("dps-ubud-palace", "Ubud Palace (Puri Saren)", -8.5069, 115.2625, "sight", "Monument", "Ubud", 9, "Royal courtyard and evening dance performances in Ubud centre.", { flags: ["touristy"] }),
    place("dps-ubud-market", "Ubud Art Market", -8.5075, 115.2628, "shopping", "Market", "Ubud", 8, "Baskets, batik, and woodcarving — haggle mornings.", { flags: ["touristy"] }),
    place("dps-saraswati", "Pura Taman Saraswati", -8.5065, 115.2615, "sight", "Monument", "Ubud", 8, "Lotus-pond temple beside Cafe Lotus."),
    place("dps-monkey", "Sacred Monkey Forest Sanctuary", -8.5185, 115.2595, "nature", "Park", "Ubud", 9, "Temple paths with macaques — secure bags and sunglasses.", { tip: "Don't carry food; watch for snatchers.", flags: ["ticket", "touristy"] }),
    place("dps-campuhan", "Campuhan Ridge Walk", -8.5035, 115.2555, "nature", "Park", "Ubud", 9, "Dawn ridge path above the river valleys — coolest before 8am.", { flags: ["early", "free"] }),
    place("dps-tegallalang", "Tegallalang Rice Terraces", -8.4345, 115.2795, "nature", "Park", "Tegallalang", 9, "Iconic stepped paddies north of Ubud — go early.", { flags: ["ticket", "touristy"] }),
    place("dps-tegenungan", "Tegenungan Waterfall", -8.5755, 115.2885, "nature", "Park", "Ubud Fringe", 8, "Accessible waterfall south of Ubud for a swim stop.", { flags: ["ticket"] }),
    place("dps-arjuna", "Goa Gajah (Elephant Cave)", -8.5305, 115.2875, "sight", "Monument", "Bedulu", 8, "Carved cave temple and bathing pools east of Ubud.", { flags: ["ticket"] }),
    place("dps-tirta", "Tirta Empul holy spring", -8.4155, 115.3155, "sight", "Monument", "Tampak Siring", 9, "Purification fountains — bring change of clothes and sash.", { flags: ["ticket", "touristy"] }),
    place("dps-ubud-cafe", "Ubud cafe & smoothie bowl scene", -8.5095, 115.2645, "cafe", "Cafe", "Ubud", 8, "Plant-based bowls and laptop cafes on Jl. Monkey Forest."),
    place("dps-ubud-dance", "Ubud Legong / Kecak evening dance", -8.507, 115.262, "nightlife", "Attraction", "Ubud", 8, "Palace or Pura Dalem stages — book same-day tickets.", { flags: ["ticket"] }),
    place("dps-blanco", "Blanco Renaissance Museum", -8.5055, 115.2545, "museum", "Museum", "Ubud", 7, "Eccentric artist museum above Campuhan.", { flags: ["ticket"] }),
    place("dps-agung-rai", "ARMA Museum", -8.5195, 115.2655, "museum", "Museum", "Ubud", 7, "Balinese art and cultural centre with gardens.", { flags: ["ticket"] }),
    place("dps-nenen", "Neka Art Museum", -8.4985, 115.2535, "museum", "Museum", "Ubud", 7, "Strong collection of Balinese painting traditions.", { flags: ["ticket"] }),

    // ——— East / south day pockets ———
    place("dps-uluwatu", "Uluwatu Temple", -8.8291, 115.0849, "sight", "Monument", "Uluwatu", 10, "Cliff temple and kecak sunset — south peninsula day trip.", { tip: "Secure belongings from monkeys; kecak tickets sold at the site.", flags: ["ticket", "touristy"] }),
    place("dps-padang-padang", "Padang Padang Beach", -8.8115, 115.1035, "nature", "Beach", "Uluwatu", 8, "Slot-canyon beach entry popular with surfers."),
    place("dps-bingin", "Bingin Beach cliffs", -8.8055, 115.1135, "nature", "Beach", "Uluwatu", 7, "Steep stairs to surf breaks and warungs."),
    place("dps-gwkb", "Garuda Wisnu Kencana Cultural Park", -8.8105, 115.1675, "sight", "Monument", "Jimbaran", 8, "Giant Vishnu–Garuda statue and cultural shows.", { flags: ["ticket"] }),
    place("dps-jimbaran", "Jimbaran Bay seafood cafes", -8.7675, 115.1635, "food", "Restaurant", "Jimbaran", 9, "Feet-in-sand grilled seafood at sunset.", { cuisine: "seafood", flags: ["touristy"] }),
    place("dps-pandawa", "Pandawa Beach", -8.8455, 115.1875, "nature", "Beach", "Pandawa", 7, "Clifftunnel beach with limestone walls on the Bukit."),
    place("dps-nusa-dua", "Nusa Dua Water Blow & beach", -8.7855, 115.2285, "nature", "Beach", "Nusa Dua", 7, "Resort enclave with dramatic blowhole rocks."),
    place("dps-bali-collection", "Bali Collection shopping", -8.7875, 115.2255, "shopping", "Market", "Nusa Dua", 5, "Resort mall for a rainy-hour option."),

    // ——— Food & nightlife Denpasar/south ———
    place("dps-babi-guling", "Babi guling warung (central Denpasar)", -8.6655, 115.2185, "food", "Restaurant", "Denpasar", 8, "Suckling-pig rice plates — go for lunch before it sells out.", { cuisine: "balinese" }),
    place("dps-lawar", "Lawar & sate lilit local warung", -8.6625, 115.22, "food", "Restaurant", "Denpasar", 7, "Ceremonial minced salad and minced-fish satay.", { cuisine: "balinese" }),
    place("dps-nasi-campur", "Nasi campur Bali plates", -8.67, 115.2155, "food", "Restaurant", "Denpasar", 7, "Mixed rice with spicy sides — everyday Balinese lunch.", { cuisine: "balinese" }),
    place("dps-sanur-seafood", "Sanur beachfront grilled fish", -8.6845, 115.2628, "food", "Restaurant", "Sanur", 7, "Fresh catch on the promenade after sunrise.", { cuisine: "seafood" }),
    place("dps-seminyak-cafe", "Revolver / specialty coffee Seminyak", -8.6865, 115.1615, "cafe", "Cafe", "Seminyak", 7, "Espresso dens for a non-beach morning."),
    place("dps-motel-mexicola", "Motel Mexicola", -8.6845, 115.1655, "nightlife", "Bar", "Seminyak", 7, "Colourful late-night Mexican-Balinese party venue."),
    place("dps-la-favela", "La Favela", -8.6835, 115.1645, "nightlife", "Club", "Seminyak", 7, "Jungle-maze nightlife complex."),
    place("dps-kuta-bars", "Legian nightlife strip", -8.7025, 115.1705, "nightlife", "Bar", "Legian", 6, "Bars and clubs between Kuta and Seminyak."),

    // ——— Stays ———
    place("dps-stay-sanur", "Sanur beach hotels", -8.68, 115.262, "stay", "Hotel", "Sanur", 9, "Sunrise base with promenade walks — best for families."),
    place("dps-stay-seminyak", "Seminyak boutique villas", -8.689, 115.16, "stay", "Hotel", "Seminyak", 9, "Beach clubs and dining on foot."),
    place("dps-stay-kuta", "Kuta / Legian hostels", -8.715, 115.17, "stay", "Hotel", "Kuta", 7, "Budget surf base near the airport."),
    place("dps-stay-ubud", "Ubud jungle / rice-field stays", -8.51, 115.26, "stay", "Hotel", "Ubud", 9, "Overnight in Ubud if doing terraces and temples without rushing."),
    place("dps-stay-denpasar", "Denpasar city hotels", -8.668, 115.22, "stay", "Hotel", "Denpasar", 6, "Practical overnight near Renon if catching early flights or ferries."),
    place("dps-stay-nusa-dua", "Nusa Dua resort stays", -8.79, 115.23, "stay", "Hotel", "Nusa Dua", 7, "Gated resort calm with beach clubs."),
    place("dps-stay-canggu", "Canggu Casa / villa rentals", -8.65, 115.14, "stay", "Hotel", "Canggu", 8, "Surf-and-cafe lifestyle base west of Seminyak."),
  ],
};
