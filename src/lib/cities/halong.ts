import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const halong: CityCatalog = {
  id: "halong",
  name: "Ha Long, Vietnam",
  aliases: ["ha long", "halong", "ha long bay"],
  center: { lat: 20.9101, lon: 107.1839 },
  places: [
    // ——— Bai Chay / Ha Long city ———
    place("hl-bai-chay", "Bai Chay beach promenade", 20.9505, 107.0445, "nature", "Park", "Bai Chay", 8, "City beach strip of hotels, dusk walks, and seafood."),
    place("hl-bai-chay-bridge", "Bai Chay Bridge", 20.9515, 107.0555, "sight", "Monument", "Bai Chay", 7, "Cable-stayed bridge linking Bai Chay to Hon Gai."),
    place("hl-sun-world", "Sun World Ha Long Complex", 20.9605, 107.0435, "sight", "Attraction", "Bai Chay", 8, "Hill complex with cable car, wheel, and games.", { flags: ["ticket", "touristy"] }),
    place("hl-queen-cable", "Queen Cable Car", 20.9585, 107.0425, "sight", "Viewpoint", "Bai Chay", 8, "Cable car up Ba Deo hill for bay and city views."),
    place("hl-sun-wheel", "Sun Wheel Ha Long", 20.9615, 107.0445, "sight", "Viewpoint", "Bai Chay", 7, "Ferris wheel panoramas after the cable-car ride."),
    place("hl-tyco", "Ty Co Palace / French villa remains", 20.9595, 107.0415, "sight", "Monument", "Bai Chay", 5, "Colonial hill villa within the Sun World grounds."),
    place("hl-night-market", "Bai Chay Night Market", 20.9535, 107.0485, "shopping", "Market", "Bai Chay", 7, "Souvenirs, grilled seafood, and evening snacks."),
    place("hl-ha-long-mall", "Vincom Plaza Ha Long", 20.9515, 107.0465, "shopping", "Mall", "Bai Chay", 5, "Air-conditioned mall break from heat and rain."),
    place("hl-tuan-chau-road", "Bai Chay to Tuan Chau coastal road", 20.9355, 106.9955, "sight", "Attraction", "Bai Chay", 6, "Scenic taxi or bike hop toward the marina island."),

    // ——— Hon Gai / downtown Ha Long ———
    place("hl-hon-gai", "Hon Gai waterfront", 20.9515, 107.0725, "sight", "Attraction", "Hon Gai", 6, "Working port side of the city across Bai Chay Bridge."),
    place("hl-museum", "Quang Ninh Museum", 20.9595, 107.0785, "museum", "Museum", "Hon Gai", 7, "Provincial museum with bay geology and cultural exhibits."),
    place("hl-bach-dang", "Bach Dang Street stroll", 20.9525, 107.0755, "shopping", "Market", "Hon Gai", 5, "Local shopping street away from resort Bai Chay."),
    place("hl-long-tien", "Long Tien Pagoda", 20.9555, 107.0815, "sight", "Monument", "Hon Gai", 5, "City pagoda courtyard for a quiet cultural pause."),
    place("hl-cai-dam", "Cai Dam Market", 20.9485, 107.0855, "shopping", "Market", "Hon Gai", 6, "Local wet market energy and breakfast soups."),

    // ——— Tuan Chau ———
    place("hl-tuan-chau", "Tuan Chau Marina", 20.9285, 106.9885, "sight", "Attraction", "Tuan Chau", 8, "Marina gateway for many overnight bay cruises."),
    place("hl-tuan-beach", "Tuan Chau Beach", 20.9265, 106.9855, "nature", "Park", "Tuan Chau", 6, "Artificial beach and evening fountain shows nearby."),
    place("hl-tuan-square", "Tuan Chau Island square", 20.9275, 106.9875, "sight", "Attraction", "Tuan Chau", 5, "Resort plaza between marina hotels and the beach."),
    place("hl-cruise-harbor", "Overnight cruise boarding docks", 20.9295, 106.9895, "sight", "Attraction", "Tuan Chau", 9, "Check-in point for classic Ha Long / Lan Ha overnight boats.", { flags: ["ticket", "touristy"] }),

    // ——— Ha Long Bay cruises / core bay ———
    place("hl-bay", "Ha Long Bay limestone karsts", 20.9101, 107.1839, "nature", "Park", "Ha Long Bay", 10, "UNESCO karst seascape — best experienced by boat.", { flags: ["ticket", "touristy"] }),
    place("hl-surprise", "Sung Sot (Surprise) Cave", 20.8485, 107.0855, "sight", "Attraction", "Ha Long Bay", 9, "Largest show cave on standard day-cruise routes.", { flags: ["ticket"] }),
    place("hl-dau-go", "Dau Go Cave", 20.8755, 107.0655, "sight", "Attraction", "Ha Long Bay", 7, "Wooden-stakes legend cave near the classic circuit."),
    place("hl-thien-cung", "Thien Cung Cave", 20.8745, 107.0665, "sight", "Attraction", "Ha Long Bay", 7, "Illuminated 'Heavenly Palace' cave beside Dau Go."),
    place("hl-fighting-cocks", "Fighting Cocks Islet (Ga Choi)", 20.8685, 107.0825, "sight", "Monument", "Ha Long Bay", 8, "Twin karst rocks — iconic bay postcard shot."),
    place("hl-incense", "Incense Burner Islet (Lu Huong)", 20.8655, 107.0955, "sight", "Monument", "Ha Long Bay", 6, "Stone 'incense burner' formation on cruise routes."),
    place("hl-titov", "Titov Island beach & steps", 20.8555, 107.1055, "nature", "Park", "Ha Long Bay", 7, "Short beach swim and summit steps on day cruises."),
    place("hl-trinh-nu", "Virgin Grotto (Trinh Nu)", 20.8455, 107.1155, "sight", "Attraction", "Ha Long Bay", 5, "Legend cave sometimes paired with Surprise Cave."),
    place("hl-kayak", "Bay kayaking among karsts", 20.88, 107.12, "nature", "Park", "Ha Long Bay", 8, "Paddle into lagoons — often included on overnight boats."),
    place("hl-squid", "Night squid fishing on cruises", 20.89, 107.15, "sight", "Attraction", "Ha Long Bay", 6, "Simple lines after dinner on overnight junks."),
    place("hl-floating-village", "Cua Van floating cultural center", 20.8355, 107.0455, "sight", "Attraction", "Ha Long Bay", 7, "Floating village museum and kayak channels."),
    place("hl-vung-ha", "Vung Ha dark lagoon kayak", 20.8255, 107.1355, "nature", "Park", "Ha Long Bay", 6, "Quiet lagoon paddling on less crowded boat routes."),
    place("hl-cong-tay", "Cong Tay island lagoon", 20.8155, 107.1555, "nature", "Park", "Lan Ha Bay", 6, "Pearl-farm and lagoon stop on Lan Ha itineraries."),

    // ——— Lan Ha / Cat Ba approaches ———
    place("hl-lan-ha", "Lan Ha Bay", 20.7255, 107.0555, "nature", "Park", "Lan Ha Bay", 9, "Quieter sister bay south of Ha Long — often better swimming."),
    place("hl-monkey", "Monkey Island / Lan Ha islets", 20.7355, 107.0655, "sight", "Attraction", "Lan Ha Bay", 5, "Day-stop beaches on some Cat Ba boat loops."),
    place("hl-viet-hai", "Viet Hai village trek", 20.7455, 107.0155, "nature", "Park", "Cat Ba", 6, "Bike or walk to a quiet valley village inland."),

    // ——— Cat Ba Island ———
    place("hl-cat-ba-town", "Cat Ba Town harbour", 20.7275, 107.0485, "sight", "Attraction", "Cat Ba", 8, "Island hub of boats, hotels, and seafood terraces."),
    place("hl-cat-ba-national", "Cat Ba National Park", 20.7955, 106.9955, "nature", "Park", "Cat Ba", 9, "Jungle trails and endangered langurs — hire a park guide."),
    place("hl-nang-tien", "Ngu Lam Peak viewpoint", 20.8015, 106.9985, "sight", "Viewpoint", "Cat Ba", 7, "National-park summit steps for island canopy views."),
    place("hl-hospital-cave", "Hospital Cave", 20.7555, 107.0155, "sight", "Attraction", "Cat Ba", 7, "Wartime hospital carved into the limestone."),
    place("hl-cannon-fort", "Cannon Fort (Fort Cannon)", 20.7215, 107.0555, "sight", "Viewpoint", "Cat Ba", 8, "Hill fort with 360° views over Cat Ba Town and the bay."),
    place("hl-cat-co", "Cat Co 1 / 2 / 3 beaches", 20.7155, 107.0585, "nature", "Park", "Cat Ba", 8, "Linked beaches south of town — Co 3 usually quieter."),
    place("hl-cat-ba-market", "Cat Ba morning market", 20.7285, 107.0475, "shopping", "Market", "Cat Ba", 6, "Fruit, coffee, and ferry snacks before boat days."),
    place("hl-ben-beo", "Ben Beo pier", 20.7185, 107.0425, "sight", "Attraction", "Cat Ba", 6, "Local pier for Lan Ha kayak and island-hop boats."),
    place("hl-frog-island", "Frog Island viewpoint trail", 20.7055, 107.0655, "sight", "Viewpoint", "Cat Ba", 5, "Short coastal hike with bay photo angles."),
    place("hl-gia-luan", "Gia Luan harbour", 20.8255, 106.9755, "sight", "Attraction", "Cat Ba", 6, "North Cat Ba pier for transfers toward Ha Long routes."),
    place("hl-cat-ba-aquaculture", "Floating seafood farms visit", 20.7355, 107.0355, "sight", "Attraction", "Lan Ha Bay", 5, "Boat stops at working mussel and fish farms."),

    // ——— Cafes ———
    place("hl-cafe-bai-chay", "Bai Chay lake cafe", 20.9525, 107.0455, "cafe", "Cafe", "Bai Chay", 6, "Iced coffee overlooking the resort lake.", { cuisine: "coffee" }),
    place("hl-cong-caphe", "Vietnamese coffee terrace Cat Ba", 20.7275, 107.0495, "cafe", "Cafe", "Cat Ba", 6, "Coconut coffee facing the harbour.", { cuisine: "coffee" }),
    place("hl-smoothie", "Cat Co beach smoothie shack", 20.7165, 107.0585, "cafe", "Cafe", "Cat Ba", 5, "Fruit shakes after a swim.", { cuisine: "juice" }),
    place("hl-bakery", "Bai Chay bakery breakfast", 20.9515, 107.0475, "cafe", "Cafe", "Bai Chay", 5, "Banh mi and pastry before cruise check-in.", { cuisine: "bakery coffee" }),
    place("hl-gelato", "Promenade dessert cup", 20.9505, 107.0455, "cafe", "Cafe", "Bai Chay", 5, "Ice cream walk along Bai Chay at dusk.", { cuisine: "ice_cream" }),

    // ——— Food ———
    place("hl-seafood-bai", "Bai Chay seafood restaurant row", 20.9535, 107.0495, "food", "Restaurant", "Bai Chay", 8, "Pick live seafood by weight — confirm prices first.", { cuisine: "seafood vietnamese" }),
    place("hl-cha-muc", "Cha muc Ha Long (squid cakes)", 20.9525, 107.0725, "food", "Quick meal", "Hon Gai", 8, "Local fried minced-squid specialty of the bay.", { cuisine: "vietnamese seafood" }),
    place("hl-banh-cuon", "Banh cuon breakfast stall", 20.9515, 107.0745, "food", "Quick meal", "Hon Gai", 6, "Steamed rice rolls for an early local breakfast.", { cuisine: "vietnamese breakfast" }),
    place("hl-cat-ba-seafood", "Cat Ba harbour seafood", 20.7278, 107.0488, "food", "Restaurant", "Cat Ba", 8, "Fresh catch grilled along the harbour wall.", { cuisine: "seafood vietnamese" }),
    place("hl-oc", "Oc (snail) evening plates", 20.7285, 107.0495, "food", "Quick meal", "Cat Ba", 6, "Peppery snails and beer on island nights.", { cuisine: "seafood street_food" }),
    place("hl-cruise-meals", "Onboard cruise dining", 20.9, 107.15, "food", "Restaurant", "Ha Long Bay", 7, "Set menus on overnight junks — dietary notes when booking.", { cuisine: "vietnamese seafood" }),
    place("hl-bun-cha", "Bun cha & noodles Cat Ba", 20.7275, 107.0475, "food", "Quick meal", "Cat Ba", 6, "Reliable noodle bowls between boat transfers.", { cuisine: "vietnamese noodles" }),
    place("hl-hotpot", "Seafood hotpot dinner", 20.9545, 107.0485, "food", "Restaurant", "Bai Chay", 7, "Group hotpot after Sun World evenings.", { cuisine: "seafood vietnamese" }),
    place("hl-vegetarian", "Temple-style vegetarian tray", 20.9555, 107.0815, "food", "Quick meal", "Hon Gai", 5, "Simple plant-based plates near Long Tien Pagoda.", { cuisine: "vegetarian vietnamese" }),
    place("hl-tuan-food", "Tuan Chau marina restaurants", 20.9285, 106.9888, "food", "Restaurant", "Tuan Chau", 6, "Pre-cruise dinner with marina lights.", { cuisine: "seafood vietnamese" }),

    // ——— Nightlife ———
    place("hl-bai-chay-night", "Bai Chay beach night walk", 20.9505, 107.0445, "nightlife", "Bar", "Bai Chay", 7, "Lights, snacks, and soft drinks along the promenade."),
    place("hl-sun-night", "Sun World evening lights", 20.9605, 107.0435, "nightlife", "Bar", "Bai Chay", 6, "Ferris wheel and hill complex after dark."),
    place("hl-cat-ba-bars", "Cat Ba harbour bars", 20.7275, 107.0485, "nightlife", "Bar", "Cat Ba", 7, "Backpacker bars and beer halls by the boats."),
    place("hl-flight", "Flight of the Flyers / adventure night shows check", 20.9615, 107.0455, "nightlife", "Bar", "Bai Chay", 5, "Seasonal entertainment inside Sun World — verify showtimes."),
    place("hl-cruise-deck", "Overnight cruise sundeck", 20.9, 107.14, "nightlife", "Bar", "Ha Long Bay", 8, "Sunset drinks among karsts — the bay's best 'nightlife'."),

    // ——— Stays ———
    place("hl-stay-marriott", "Ha Long Marriott / Bai Chay luxury", 20.9515, 107.0435, "stay", "Hotel", "Bai Chay", 8, "Resort rooms on the beach strip for city+cruise trips."),
    place("hl-stay-novotel", "Novotel Ha Long Bay", 20.9525, 107.0455, "stay", "Hotel", "Bai Chay", 8, "Reliable international hotel facing the promenade."),
    place("hl-stay-vinpearl", "Vinpearl Resort Ha Long", 20.9585, 107.04, "stay", "Hotel", "Bai Chay", 8, "Hillside resort beside Sun World."),
    place("hl-stay-tuan", "Tuan Chau harbour hotel", 20.9285, 106.9875, "stay", "Hotel", "Tuan Chau", 7, "Marina overnight before early cruise boarding."),
    place("hl-stay-cruise", "Overnight bay cruise cabin", 20.91, 107.18, "stay", "Hotel", "Ha Long Bay", 10, "Sleep among the karsts — book a reputable operator."),
    place("hl-stay-catba-harbour", "Cat Ba harbour hotel", 20.7275, 107.0485, "stay", "Hotel", "Cat Ba", 7, "Waterfront rooms for Lan Ha and park days."),
    place("hl-stay-catba-hostel", "Cat Ba backpacker hostel", 20.7285, 107.0475, "stay", "Hostel", "Cat Ba", 6, "Social dorms steps from boats and bars."),
    place("hl-stay-cat-co", "Cat Co beach bungalow", 20.7155, 107.0585, "stay", "Guest house", "Cat Ba", 6, "Simple stays above the linked beaches."),
    place("hl-stay-hon-gai", "Hon Gai city hotel", 20.9525, 107.0735, "stay", "Hotel", "Hon Gai", 5, "Local-side rooms near markets and the museum."),
    place("hl-stay-apartment", "Bai Chay apartment", 20.9515, 107.0465, "stay", "Apartment", "Bai Chay", 6, "Self-catering for longer bay-base stays."),
  ],
};
