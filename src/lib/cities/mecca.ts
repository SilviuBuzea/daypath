import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const mecca: CityCatalog = {
  id: "mecca",
  name: "Mecca, Saudi Arabia",
  aliases: ["mecca", "makkah"],
  center: { lat: 21.3891, lon: 39.8579 },
  places: [
    // ——— Masjid al-Haram ———
    place("mec-haram", "Masjid al-Haram", 21.4225, 39.8262, "sight", "Monument", "Haram", 10, "The holiest mosque — plan around prayer times and crowd flow."),
    place("mec-kaaba", "Kaaba & Mataaf", 21.4225, 39.8262, "sight", "Monument", "Haram", 10, "Center of tawaf — follow official guidance for rites and access."),
    place("mec-safa-marwah", "Safa and Marwah", 21.4232, 39.8275, "sight", "Monument", "Haram", 9, "Sa'i walkway between the two hills inside the sanctuary."),
    place("mec-zamzam", "Zamzam Well pavilion", 21.4228, 39.8265, "sight", "Monument", "Haram", 8, "Zamzam distribution area after tawaf — refill bottles respectfully."),
    place("mec-hijr", "Hijr Ismail", 21.4227, 39.826, "sight", "Monument", "Haram", 7, "Semi-circular section of the Kaaba precinct — know its status in rituals."),
    place("mec-multazam", "Multazam", 21.4226, 39.8261, "sight", "Monument", "Haram", 7, "Prayer space between the Kaaba door and Yemen corner."),
    place("mec-factory", "Kiswah Factory", 21.408, 39.765, "museum", "Museum", "Aziziyah", 6, "How the Kaaba cloth is woven — book official visits ahead."),
    place("mec-haram-museum", "Haram Museum", 21.421, 39.8285, "museum", "Museum", "Haram", 7, "Islamic artifacts and sanctuary history near the complex."),
    place("mec-clock-tower", "Abraj Al Bait & Clock Tower", 21.4185, 39.8258, "sight", "Viewpoint", "Haram", 8, "Mall and observation decks overlooking the mosque — not during prayer if you prefer quiet."),
    place("mec-jamarat-bridge", "Jamarat area (seasonal)", 21.385, 39.878, "sight", "Attraction", "Mina", 7, "Hajj rites precinct east of the city — access rules apply by season."),

    // ——— Historic Mecca ———
    place("mec-jabal-nour", "Jabal al-Nour & Hira Cave", 21.4585, 39.8595, "sight", "Monument", "Jabal al-Nour", 9, "Steep hike to the revelation cave — go early with water."),
    place("mec-jabal-thawr", "Jabal Thawr", 21.365, 39.838, "sight", "Monument", "Thawr", 7, "Mountain of the migration cave — longer desert-edge hike."),
    place("mec-maala", "Ma'ala cemetery", 21.437, 39.818, "sight", "Monument", "Maala", 6, "Historic burial ground — visit with quiet respect."),
    place("mec-muala-palace", "Ajyad area heritage", 21.4195, 39.8245, "sight", "Attraction", "Ajyad", 5, "Orientation zone south of the Haram precinct."),
    place("mec-bakkah", "Bakkah district lanes", 21.424, 39.828, "sight", "Attraction", "Haram", 5, "Dense old quarter streets around the sanctuary."),

    // ——— Jeddah Highway / sites ———
    place("mec-hudaybiyyah", "Hudaybiyyah area", 21.441, 39.602, "sight", "Monument", "Hudaybiyyah", 6, "Treaty site west toward Jeddah — day trip with a guide."),
    place("mec-bir-thuwa", "Bir Tuwa Well", 21.415, 39.785, "sight", "Monument", "Tuwa", 6, "Well linked to the Prophet's entry — small stop with context."),
    place("mec-exhibition", "Makkah Exhibition & Convention Centre", 21.395, 39.865, "museum", "Museum", "Rusaima", 6, "Rotating Islamic heritage exhibits off the main ring road."),

    // ——— Arafat / Mina (pilgrimage geography) ———
    place("mec-arafat", "Plain of Arafat", 21.354, 39.984, "sight", "Monument", "Arafat", 9, "Standing day landscape — integral to Hajj, seasonal access."),
    place("mec-namirah", "Nimrah Mosque", 21.355, 39.982, "sight", "Monument", "Arafat", 8, "Arafat sermon mosque — busiest at Hajj."),
    place("mec-mozdalifa", "Muzdalifah", 21.375, 39.935, "sight", "Monument", "Muzdalifah", 7, "Open valley between Arafat and Mina."),
    place("mec-mina", "Mina tent city", 21.409, 39.893, "sight", "Attraction", "Mina", 7, "Pilgrim camp valley — calm off-season."),
    place("mec-jamarat", "Jamarat Bridge", 21.405, 39.888, "sight", "Monument", "Mina", 7, "Stoning pillars complex — engineered for crowd safety at Hajj."),

    // ——— Museums ———
    place("mec-turath", "King Abdulaziz Complex for Holy Mosque Architecture", 21.41, 39.84, "museum", "Museum", "Shisha", 7, "Models and history of Haram expansions."),
    place("mec-quran-print", "King Fahd Quran Printing Complex", 21.352, 39.928, "museum", "Museum", "Musharrafah", 6, "How the standard Quran is produced — guided tours."),
    place("mec-islamic-museum", "Makkah Museum for Antiquities", 21.428, 39.815, "museum", "Museum", "Maala", 6, "Regional archaeology and pilgrimage memorabilia."),

    // ——— Nature / viewpoints ———
    place("mec-alasha", "Al Shara Mountains overlook", 21.448, 39.87, "nature", "Viewpoint", "North Mecca", 6, "City and Haram glimpse from higher suburbs."),
    place("mec-wadi", "Wadi Ibrahim", 21.395, 39.845, "nature", "Park", "Rusaima", 5, "Seasonal green wadi walks south of center."),
    place("mec-al-hada", "Al Hada escarpment", 21.368, 39.945, "nature", "Viewpoint", "Taif Road", 6, "Highway viewpoint toward Taif — cooler air on the climb."),

    // ——— Shopping ———
    place("mec-clock-mall", "Clock Towers shopping", 21.4185, 39.826, "shopping", "Mall", "Haram", 8, "Towers mall with prayer rooms and direct Haram access."),
    place("mec-souk-ouleya", "Souk Al Oleya", 21.415, 39.812, "shopping", "Market", "Al Oleya", 7, "Gold, textiles, and dates in traditional arcades."),
    place("mec-corniche-mall", "Al Rashid Mall", 21.395, 39.858, "shopping", "Mall", "Al Rawdah", 6, "Mid-size mall for everyday goods south of Haram."),
    place("mec-alijada", "Aljada Walk", 21.402, 39.85, "shopping", "Market", "Aziziyah", 6, "Street retail near the Haramain rail station."),
    place("mec-date-market", "Ajwa date market", 21.41, 39.835, "shopping", "Market", "Al Awali", 7, "Bulk Ajwa and packed souvenir dates."),
    place("mec-station-mall", "Haramain Station retail", 21.4035, 39.852, "shopping", "Mall", "Rusaima", 6, "Transit mall at the high-speed rail terminus."),
    place("mec-bakkah-mall", "Bakkah Mall", 21.398, 39.862, "shopping", "Mall", "Al Aziziyah", 5, "Neighborhood mall for families off the ring road."),

    // ——— Cafes ———
    place("mec-barns", "Barn's Café Haram", 21.418, 39.8255, "cafe", "Cafe", "Haram", 7, "Saudi coffee chain near the towers.", { cuisine: "coffee arabic" }),
    place("mec-half-million", "Half Million Coffee", 21.404, 39.855, "cafe", "Cafe", "Al Rawdah", 6, "Specialty coffee popular with young locals.", { cuisine: "coffee" }),
    place("mec-segafredo", "Segafredo Clock Tower", 21.4182, 39.8252, "cafe", "Cafe", "Haram", 6, "Espresso breaks between prayers in the mall.", { cuisine: "coffee" }),
    place("mec-dunkin", "Dunkin' Rusaima", 21.4045, 39.853, "cafe", "Cafe", "Rusaima", 5, "Quick donuts and iced drinks by the station.", { cuisine: "coffee pastry" }),
    place("mec-caribou", "Caribou Coffee", 21.396, 39.86, "cafe", "Cafe", "Al Aziziyah", 5, "Reliable chain for travelers.", { cuisine: "coffee" }),
    place("mec-cost", "Costa Coffee Haram", 21.419, 39.8265, "cafe", "Cafe", "Haram", 6, "Mall seating overlooking the sanctuary approach.", { cuisine: "coffee" }),
    place("mec-ajwah", "Ajwah tea house", 21.412, 39.838, "cafe", "Cafe", "Al Awali", 6, "Arabic tea and dates after market browsing.", { cuisine: "tea arabic" }),
    place("mec-tamimi", "Tamimi café corner", 21.401, 39.848, "cafe", "Cafe", "Aziziyah", 5, "Supermarket café for quiet non-alcoholic stops.", { cuisine: "coffee" }),

    // ——— Food ———
    place("mec-al-baik-haram", "Al Baik near Haram", 21.4175, 39.824, "food", "Quick meal", "Haram", 8, "Famous broasted chicken — expect queues.", { cuisine: "saudi fast_food halal" }),
    place("mec-albaik-aziz", "Al Baik Aziziyah", 21.402, 39.851, "food", "Quick meal", "Aziziyah", 7, "Second famous branch with shorter lines off-peak.", { cuisine: "saudi fast_food halal" }),
    place("mec-mataam", "Mataam Al Sharq", 21.416, 39.821, "food", "Restaurant", "Haram", 7, "Rice and roasted meats for groups.", { cuisine: "arabic halal" }),
    place("mec-al-tazaj", "Al Tazaj", 21.414, 39.818, "food", "Quick meal", "Haram", 7, "Rotisserie chicken chain — reliable halal.", { cuisine: "arabic halal" }),
    place("mec-harajuku", "Herfy", 21.405, 39.856, "food", "Quick meal", "Al Rawdah", 6, "Burgers and broasted meals.", { cuisine: "fast_food halal" }),
    place("mec-kudu", "Kudu", 21.408, 39.848, "food", "Quick meal", "Aziziyah", 6, "Saudi fast-food breakfasts and sandwiches.", { cuisine: "saudi halal" }),
    place("mec-shawarma-house", "Shawarma House", 21.413, 39.815, "food", "Quick meal", "Al Oleya", 7, "Late-night shawarma wraps.", { cuisine: "middle_eastern halal" }),
    place("mec-mafgufa", "Al Mateam Al Hijazi", 21.419, 39.827, "food", "Restaurant", "Haram", 7, "Hejazi rice and lamb platters.", { cuisine: "saudi halal" }),
    place("mec-mandi", "Mandi House", 21.400, 39.862, "food", "Restaurant", "Al Aziziyah", 8, "Slow-cooked mandi rice — share platters.", { cuisine: "yemeni arabic halal" }),
    place("mec-kabsa", "Kabsa Express", 21.411, 39.842, "food", "Quick meal", "Al Awali", 7, "Quick kabsa bowls for pilgrims.", { cuisine: "saudi halal" }),
    place("mec-falafel", "Falafel Al Quds", 21.415, 39.813, "food", "Quick meal", "Al Oleya", 6, "Falafel and foul for light lunches.", { cuisine: "middle_eastern vegetarian halal" }),
    place("mec-haraj", "Haraj bin Shihab food court", 21.4188, 39.8258, "food", "Quick meal", "Haram", 6, "Mall court with several halal counters.", { cuisine: "international halal" }),
    place("mec-seafood", "Sayad Seafood", 21.397, 39.858, "food", "Restaurant", "Jeddah Road", 6, "Grilled fish platters on the Jeddah highway.", { cuisine: "seafood arabic halal" }),
    place("mec-indian", "Hyderabad House", 21.406, 39.855, "food", "Restaurant", "Rusaima", 6, "Biryani for South Asian pilgrims.", { cuisine: "indian halal" }),
    place("mec-pakistani", "Salt n Pepper", 21.404, 39.854, "food", "Restaurant", "Rusaima", 6, "Karahi and naan for families.", { cuisine: "pakistani halal" }),
    place("mec-indonesian", "Nasi Padang Suramadu", 21.4145, 39.8195, "food", "Restaurant", "Haram", 6, "Southeast Asian rice trays near hotels.", { cuisine: "indonesian halal" }),
    place("mec-turkish", "Istanbul Restaurant", 21.4125, 39.816, "food", "Restaurant", "Al Oleya", 6, "Kebabs and grilled meats.", { cuisine: "turkish halal" }),
    place("mec-date-soup", "Al Mersal date & soup stalls", 21.409, 39.837, "food", "Quick meal", "Al Awali", 6, "Simple lentil soup and date snacks.", { cuisine: "saudi halal" }),
    place("mec-lettuce", "Lettuce & Co", 21.403, 39.853, "food", "Restaurant", "Rusaima", 5, "Salad bowls if you want lighter meals.", { cuisine: "healthy halal" }),
    place("mec-biryani", "Biryani Pot", 21.401, 39.857, "food", "Quick meal", "Al Rawdah", 6, "Takeaway biryani by the ring road.", { cuisine: "indian halal" }),
    place("mec-sweet", "Muhallabiya sweets", 21.4165, 39.822, "food", "Quick meal", "Haram", 6, "Arabic desserts and kunafa slices.", { cuisine: "dessert arabic halal" }),
    place("mec-iftar", "Hotel iftar buffets", 21.4195, 39.826, "food", "Restaurant", "Haram", 7, "Ramadan spreads in tower hotels — book early.", { cuisine: "arabic halal buffet" }),

    place("mec-library", "King Abdulaziz Public Library", 21.4075, 39.845, "museum", "Museum", "Al Awali", 5, "Islamic manuscripts and reading rooms."),
    place("mec-quba", "Quba Mosque replica area", 21.39, 39.865, "sight", "Monument", "Center", 5, "Education exhibits on Madinah's first mosque."),
    place("mec-ring-road", "Third Ring Road viewpoint", 21.392, 39.87, "nature", "Viewpoint", "Center", 5, "Evening drive for city lights away from the Haram crowds."),
    place("mec-masjid-jinn", "Masjid al-Jinn", 21.435, 39.812, "sight", "Monument", "Maala", 6, "Small mosque tied to Quranic narrative — quiet visit."),
    place("mec-bilal", "Bilal Mosque", 21.42, 39.829, "sight", "Monument", "Haram", 6, "Historic neighborhood mosque near the precinct."),
    place("mec-hospital", "Ajyad Emergency Hospital area", 21.4195, 39.824, "sight", "Attraction", "Ajyad", 4, "Orientation landmark on the southern approaches."),
    place("mec-hajj-terminal", "Hajj Terminal complex", 21.428, 39.792, "sight", "Attraction", "King Abdulaziz Airport Road", 6, "Seasonal pilgrim processing halls west of the city."),
    place("mec-haramain", "Haramain High Speed Railway", 21.4035, 39.852, "sight", "Attraction", "Rusaima", 8, "25-minute Jeddah link — book tickets early in peak Umrah."),
    place("mec-factory-water", "Zamzam bottling plant visit", 21.395, 39.84, "museum", "Museum", "Al Awali", 5, "See how Zamzam is sealed — official tours only."),
    place("mec-sheikhs", "Museum of the Two Holy Mosques Architecture", 21.4095, 39.839, "museum", "Museum", "Shisha", 6, "Companion museum to the architecture complex."),
    place("mec-gardens", "King Fahd Garden", 21.401, 39.865, "nature", "Park", "Al Rawdah", 5, "Shaded paths for an evening walk with children."),
    place("mec-taneem", "Masjid Aisha (Tan'eem)", 21.456, 39.785, "sight", "Monument", "Tan'eem", 8, "Miqat mosque north of Mecca — important for Umrah ihram."),
    place("mec-jaaranah", "Ja'ranah Mosque", 21.385, 39.72, "sight", "Monument", "Ja'ranah", 6, "Miqat west toward Jeddah — stop when entering ihram."),
    place("mec-hudaibiya-road", "Makkah–Jeddah Old Road layover", 21.42, 39.75, "sight", "Attraction", "Highway", 4, "Historic caravan route markers with a guide."),
    place("mec-wheelchair", "Haram accessibility services", 21.423, 39.8268, "sight", "Attraction", "Haram", 6, "Electric scooter and wheelchair hire at designated gates."),
    place("mec-sheep-market", "Al Khadra Livestock Market", 21.435, 39.85, "shopping", "Market", "North Mecca", 5, "Seasonal livestock trading before Eid."),
    place("mec-perfume", "Oud souk near Haram", 21.417, 39.823, "shopping", "Market", "Haram", 6, "Attar and oud shops for gifts."),
    place("mec-abaya", "Abaya market Ajyad", 21.4185, 39.8235, "shopping", "Market", "Ajyad", 6, "Tailors and ready-made pilgrimage dress."),

    // ——— Evening lounges (quiet) ———
    place("mec-lobby-lounge", "Clock Tower lobby lounge", 21.4183, 39.8255, "nightlife", "Bar", "Haram", 5, "Non-alcoholic evening seating with Haram views."),
    place("mec-tea-terrace", "Raffles tea terrace", 21.4188, 39.8262, "nightlife", "Bar", "Haram", 5, "Quiet post-isha tea rather than loud nightlife."),

    // ——— Stays ———
    place("mec-stay-fairmont", "Fairmont Makkah Clock Royal", 21.4185, 39.8258, "stay", "Hotel", "Haram", 10, "Closest luxury to Masjid al-Haram."),
    place("mec-stay-swiss", "Swissôtel Makkah", 21.4188, 39.826, "stay", "Hotel", "Haram", 9, "Tower rooms with direct Haram pedestrian links."),
    place("mec-stay-pullman", "Pullman Zamzam", 21.4192, 39.8255, "stay", "Hotel", "Haram", 9, "Modern tower opposite the King Fahd gate."),
    place("mec-stay-movenpick", "Mövenpick Hotel Hajar Tower", 21.4195, 39.8252, "stay", "Hotel", "Haram", 9, "Large pilgrim hotel in the Abraj complex."),
    place("mec-stay-hilton", "Hilton Suites Makkah", 21.4178, 39.8248, "stay", "Hotel", "Haram", 8, "Suite-style rooms for families near the mall."),
    place("mec-stay-conrad", "Conrad Makkah", 21.418, 39.8265, "stay", "Hotel", "Haram", 9, "Premium floors with sanctuary vistas."),
    place("mec-stay-marriott", "Makkah Marriott", 21.4175, 39.824, "stay", "Hotel", "Haram", 8, "Towers wing with mall connectors."),
    place("mec-stay-hyatt", "Hyatt Regency Makkah", 21.4172, 39.8235, "stay", "Hotel", "Haram", 8, "South Haram frontage."),
    place("mec-stay-intercon", "InterContinental Dar Al Tawhid", 21.422, 39.8278, "stay", "Hotel", "Haram", 9, "Classic pilgrim hotel on the mosque's north side."),
    place("mec-stay-anjum", "Anjum Hotel Makkah", 21.4215, 39.828, "stay", "Hotel", "Haram", 8, "North-side rooms walking distance to Safa."),
    place("mec-stay-mena", "Mena Concorde", 21.416, 39.822, "stay", "Hotel", "Haram", 7, "Mid-range south approach to the Haram."),
    place("mec-stay-park-inn", "Park Inn by Radisson", 21.405, 39.855, "stay", "Hotel", "Rusaima", 7, "Rail station area for high-speed Jeddah links."),
    place("mec-stay-voco", "voco Makkah", 21.404, 39.854, "stay", "Hotel", "Rusaima", 7, "Newer hotel near Haramain station."),
    place("mec-stay-ihg", "Holiday Inn Makkah Aziziyah", 21.402, 39.852, "stay", "Hotel", "Aziziyah", 7, "Shuttle-friendly base south of the Haram."),
    place("mec-stay-millennium", "Millennium Makkah Al Naseem", 21.398, 39.863, "stay", "Hotel", "Al Rawdah", 7, "Quieter ringside rooms with bus to Haram."),
    place("mec-stay-guest", "Al Oleya guest house", 21.4145, 39.814, "stay", "Guest house", "Al Oleya", 6, "Small licensed lodgings in the old souk quarter."),
    place("mec-stay-apartment", "Aziziyah serviced apartments", 21.401, 39.851, "stay", "Apartment", "Aziziyah", 6, "Kitchenettes for longer Umrah stays."),
    place("mec-stay-apt-rawdah", "Al Rawdah apartment", 21.396, 39.859, "stay", "Apartment", "Al Rawdah", 6, "Family flats on the southern ring."),
    place("mec-stay-hostel", "Licensed pilgrim hostel", 21.413, 39.816, "stay", "Hostel", "Al Oleya", 5, "Budget beds — verify Hajj/Umrah permits."),
    place("mec-stay-ewaa", "Ewa'a shelters info", 21.407, 39.85, "stay", "Guest house", "Aziziyah", 5, "Official support lodging reference point — inquire locally."),
  ],
};