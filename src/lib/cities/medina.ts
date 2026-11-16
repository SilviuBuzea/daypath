import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const medina: CityCatalog = {
  id: "medina",
  name: "Medina, Saudi Arabia",
  aliases: ["medina", "madinah", "al madinah"],
  center: { lat: 24.5247, lon: 39.5692 },
  places: [
    // ——— Prophet's Mosque ———
    place("med-nabawi", "Al-Masjid an-Nabawi", 24.5532, 39.6111, "sight", "Monument", "Haram", 10, "The Prophet's Mosque — plan around prayer times and crowd flow."),
    place("med-green-dome", "Green Dome area", 24.5534, 39.6113, "sight", "Monument", "Haram", 10, "Historic dome marking the Prophet's chamber — visit with quiet respect."),
    place("med-rawdah", "Rawdah ash-Sharifah", 24.5533, 39.6112, "sight", "Monument", "Haram", 10, "Garden of paradise section — timed entry via Nusuk when required."),
    place("med-qibla", "Qibla plaza & courtyards", 24.5528, 39.6105, "sight", "Monument", "Haram", 8, "Expansive marble courtyards with shade umbrellas."),
    place("med-bab-salam", "Bab as-Salam approach", 24.5538, 39.6105, "sight", "Attraction", "Haram", 7, "Historic gate approach on the western side."),
    place("med-bab-rahmah", "Bab ar-Rahmah area", 24.5535, 39.612, "sight", "Attraction", "Haram", 7, "Eastern gate precinct for orientation."),
    place("med-umbrellas", "Courtyard umbrella canopy", 24.5525, 39.611, "sight", "Attraction", "Haram", 8, "Retractable shade structures — cooler midday walks."),
    place("med-library-nabawi", "Nabawi library wing", 24.554, 39.6115, "museum", "Museum", "Haram", 6, "Islamic manuscripts near the mosque complex."),

    // ——— Historic mosques & sites ———
    place("med-quba", "Quba Mosque", 24.4392, 39.6168, "sight", "Monument", "Quba", 10, "First mosque in Islam — short ride south of the Haram."),
    place("med-qiblatain", "Masjid al-Qiblatain", 24.484, 39.5785, "sight", "Monument", "Qiblatain", 9, "Mosque of the two qiblas — pivotal prayer history."),
    place("med-jumaa", "Masjid al-Jumu'ah", 24.45, 39.61, "sight", "Monument", "Quba Road", 7, "Site linked to the first Friday prayer in Medina."),
    place("med-baqi", "Jannat al-Baqi", 24.5525, 39.6155, "sight", "Monument", "Haram", 8, "Historic cemetery beside the Prophet's Mosque — quiet, respectful visit."),
    place("med-uhud", "Mount Uhud", 24.505, 39.62, "sight", "Monument", "Uhud", 9, "Battlefield mountain north of the city — reflective visit."),
    place("med-uhud-martyrs", "Uhud martyrs cemetery area", 24.508, 39.615, "sight", "Monument", "Uhud", 8, "Memorial landscape at the mountain base."),
    place("med-sayyid-shuhada", "Sayyid ash-Shuhada Mosque", 24.51, 39.612, "sight", "Monument", "Uhud", 7, "Mosque near the Uhud memorial grounds."),
    place("med-khandaq", "Site of the Trench (Khandaq)", 24.48, 39.6, "sight", "Monument", "North Medina", 7, "Battle of the Trench geography — go with a knowledgeable guide."),
    place("med-seven-mosques", "The Seven Mosques area", 24.475, 39.595, "sight", "Monument", "North Medina", 7, "Cluster of small historic mosques on the trench line."),
    place("med-ghamama", "Masjid al-Ghamama", 24.55, 39.605, "sight", "Monument", "Haram", 6, "Historic Eid prayer mosque near the Haram."),
    place("med-ijabah", "Masjid al-Ijabah", 24.47, 39.62, "sight", "Monument", "Quba Road", 6, "Historic neighborhood mosque on the southern approaches."),
    place("med-fath", "Masjid al-Fath", 24.478, 39.592, "sight", "Monument", "North Medina", 6, "One of the Seven Mosques — elevated viewpoint."),

    // ——— Museums & culture ———
    place("med-dar-madinah", "Dar Al Madinah Museum", 24.47, 39.61, "museum", "Museum", "Central", 8, "City history, Hijrah narrative, and urban growth exhibits."),
    place("med-quran", "Qur'an Exhibition / manuscript displays", 24.55, 39.608, "museum", "Museum", "Haram", 7, "Quranic arts near the sanctuary hotels."),
    place("med-hejaz-railway", "Hejaz Railway Museum", 24.48, 39.58, "museum", "Museum", "West Medina", 7, "Ottoman railway station and locomotives."),
    place("med-islamic-history", "Madinah Museum of Islamic History", 24.46, 39.6, "museum", "Museum", "Central", 6, "Regional Islamic heritage collections."),
    place("med-architecture", "Holy Mosque architecture exhibits", 24.552, 39.609, "museum", "Museum", "Haram", 6, "Models of Nabawi expansions over centuries."),
    place("med-art-center", "Madinah Arts Center", 24.45, 39.58, "museum", "Museum", "Knowledge Economic City", 5, "Rotating cultural exhibitions west of center."),

    // ——— Neighborhoods & orientation ———
    place("med-central-area", "Central Area hotels district", 24.552, 39.608, "sight", "Attraction", "Haram", 7, "Dense pilgrim hotel zone ringing the mosque."),
    place("med-abu-bakr", "Abu Bakr street approaches", 24.551, 39.607, "sight", "Attraction", "Haram", 6, "Main pedestrian approaches south of Nabawi."),
    place("med-sitteen", "Sitteen Street corridor", 24.548, 39.61, "sight", "Attraction", "Haram", 6, "Retail and hotel spine near the Haram."),
    place("med-quba-road", "Quba Road", 24.5, 39.615, "sight", "Attraction", "Quba", 7, "Historic road linking Nabawi and Quba."),
    place("med-king-fahd", "King Fahd Road axis", 24.52, 39.58, "sight", "Attraction", "West Medina", 5, "Modern arterial for malls and services."),
    place("med-airport", "Prince Mohammad bin Abdulaziz Airport area", 24.55, 39.7, "sight", "Attraction", "East Medina", 5, "Arrival orientation east of the city."),
    place("med-haramain", "Haramain High Speed Rail station", 24.545, 39.57, "sight", "Attraction", "West Medina", 7, "Train link to Mecca and Jeddah."),

    // ——— Nature / open space ———
    place("med-uhud-trail", "Uhud foothill walks", 24.512, 39.618, "nature", "Park", "Uhud", 7, "Open desert-edge paths below the mountain."),
    place("med-king-abdullah-park", "King Abdullah Parks", 24.5, 39.55, "nature", "Park", "West Medina", 6, "Family green space away from the Haram crowds."),
    place("med-al-aila", "Al Aila / palm oasis edges", 24.44, 39.58, "nature", "Park", "South Medina", 5, "Date-palm landscapes on the city fringe."),
    place("med-jabal", "Jabal Ayr viewpoints", 24.42, 39.55, "nature", "Viewpoint", "South Medina", 5, "Southern hills for quiet city overlooks."),
    place("med-wadi", "Seasonal wadi green belts", 24.49, 39.59, "nature", "Park", "Central", 5, "Cooler evening walks after rain seasons."),

    // ——— Shopping ———
    place("med-noor-mall", "Al Noor Mall", 24.5, 39.57, "shopping", "Mall", "West Medina", 7, "Major mall for clothing and family retail."),
    place("med-rashid-mall", "Al Rashid Mega Mall", 24.48, 39.56, "shopping", "Mall", "West Medina", 7, "Large mall with dining and cinema."),
    place("med-haram-shops", "Haram area souks", 24.5515, 39.6095, "shopping", "Market", "Haram", 8, "Dates, prayer goods, and perfume shops."),
    place("med-ajwa", "Ajwa date markets", 24.545, 39.605, "shopping", "Market", "Haram", 9, "Famous Medina Ajwa dates — buy sealed packs."),
    place("med-gold", "Gold shops near Sitteen", 24.549, 39.609, "shopping", "Market", "Haram", 6, "Jewelry retailers around pilgrim hotels."),
    place("med-station-retail", "Haramain station retail", 24.5455, 39.5705, "shopping", "Mall", "West Medina", 6, "Transit shopping before train departures."),
    place("med-quba-shops", "Quba Road retail", 24.46, 39.615, "shopping", "Market", "Quba", 6, "Neighborhood shops toward Quba Mosque."),
    place("med-perfume", "Perfume & oud stalls Haram", 24.552, 39.61, "shopping", "Market", "Haram", 7, "Oud and attar for gifts after prayers."),

    // ——— Cafes ———
    place("med-barns", "Barn's Café Haram", 24.551, 39.6085, "cafe", "Cafe", "Haram", 7, "Saudi coffee chain near hotel towers.", { cuisine: "coffee arabic" }),
    place("med-half-million", "Half Million Coffee", 24.5, 39.575, "cafe", "Cafe", "West Medina", 6, "Specialty coffee popular with locals.", { cuisine: "coffee" }),
    place("med-doctor-cafe", "Doctor Café / local chains", 24.505, 39.58, "cafe", "Cafe", "West Medina", 5, "Casual non-alcoholic café stops.", { cuisine: "coffee" }),
    place("med-costa", "Costa Coffee malls", 24.5, 39.571, "cafe", "Cafe", "West Medina", 5, "Mall espresso between errands.", { cuisine: "coffee" }),
    place("med-dunkin", "Dunkin' near Haramain", 24.546, 39.572, "cafe", "Cafe", "West Medina", 5, "Quick iced drinks by the station.", { cuisine: "coffee pastry" }),
    place("med-date-cafe", "Date & Arabic coffee corners", 24.55, 39.609, "cafe", "Cafe", "Haram", 7, "Arabic coffee with Ajwa dates after prayer.", { cuisine: "arabic coffee dates" }),
    place("med-tamimi", "Tamimi Markets café", 24.49, 39.58, "cafe", "Cafe", "Central", 5, "Supermarket café for quiet breaks.", { cuisine: "coffee" }),
    place("med-caribou", "Caribou Coffee Al Noor", 24.5005, 39.5705, "cafe", "Cafe", "West Medina", 5, "Familiar chain seating in the mall.", { cuisine: "coffee" }),

    // ——— Food ———
    place("med-albaik", "Al Baik Medina", 24.51, 39.58, "food", "Quick meal", "West Medina", 8, "Famous broasted chicken — expect queues.", { cuisine: "saudi fast_food halal" }),
    place("med-mandi", "Mandi houses Quba Road", 24.47, 39.612, "food", "Restaurant", "Quba", 8, "Slow-cooked rice and lamb platters.", { cuisine: "yemeni arabic halal" }),
    place("med-kabsa", "Kabsa restaurants Haram", 24.55, 39.607, "food", "Restaurant", "Haram", 8, "Saudi rice and spice for groups.", { cuisine: "saudi halal" }),
    place("med-tazaj", "Al Tazaj", 24.548, 39.606, "food", "Quick meal", "Haram", 7, "Rotisserie chicken near hotels.", { cuisine: "arabic halal" }),
    place("med-shawarma", "Shawarma stalls Sitteen", 24.5485, 39.6095, "food", "Quick meal", "Haram", 7, "Late wraps after night prayers.", { cuisine: "middle_eastern halal" }),
    place("med-hejazi", "Hejazi rice kitchens", 24.552, 39.6075, "food", "Restaurant", "Haram", 7, "Local Hejaz flavors for pilgrims.", { cuisine: "saudi halal" }),
    place("med-indian", "Indian restaurants Central Area", 24.551, 39.606, "food", "Restaurant", "Haram", 7, "Biryani for South Asian visitors.", { cuisine: "indian halal" }),
    place("med-pakistani", "Pakistani karahi rooms", 24.55, 39.6055, "food", "Restaurant", "Haram", 6, "Karahi and naan near hotels.", { cuisine: "pakistani halal" }),
    place("med-turkish", "Turkish grill houses", 24.549, 39.607, "food", "Restaurant", "Haram", 6, "Kebabs and pide for variety.", { cuisine: "turkish halal" }),
    place("med-indonesian", "Southeast Asian rice trays", 24.5505, 39.608, "food", "Restaurant", "Haram", 6, "Nasi and sambal for Nusantara guests.", { cuisine: "indonesian halal" }),
    place("med-falafel", "Falafel & foul stalls", 24.547, 39.608, "food", "Quick meal", "Haram", 6, "Light lunches between prayers.", { cuisine: "middle_eastern vegetarian halal" }),
    place("med-hotel-buffet", "Hotel iftar & suhoor buffets", 24.5525, 39.6085, "food", "Restaurant", "Haram", 7, "Ramadan spreads in pilgrim hotels — book early.", { cuisine: "arabic halal buffet" }),
    place("med-sweets", "Kunafa & muhallabia shops", 24.5518, 39.609, "food", "Quick meal", "Haram", 6, "Arabic desserts after Maghrib.", { cuisine: "dessert arabic halal" }),
    place("med-herfy", "Herfy / Kudu quick meals", 24.505, 39.575, "food", "Quick meal", "West Medina", 5, "Saudi fast-food staples by the malls.", { cuisine: "saudi fast_food halal" }),
    place("med-seafood", "Seafood restaurants west", 24.49, 39.565, "food", "Restaurant", "West Medina", 5, "Grilled fish away from the Haram core.", { cuisine: "seafood arabic halal" }),

    // ——— Family / evening leisure (respectful — no nightlife framing) ———
    place("med-mall-evening", "Al Noor evening promenade", 24.5002, 39.5702, "shopping", "Mall", "West Medina", 6, "Family evening shopping and cafés."),
    place("med-hotel-lounges", "Hotel lobby lounges Haram", 24.5522, 39.6082, "cafe", "Cafe", "Haram", 6, "Quiet non-alcoholic seating between prayers.", { cuisine: "arabic tea" }),
    place("med-family-park", "Family park evenings", 24.501, 39.552, "nature", "Park", "West Medina", 5, "Open lawns for cooler night air."),

    // ——— Stays ———
    place("med-stay-oberoi", "The Oberoi Madina", 24.553, 39.6095, "stay", "Hotel", "Haram", 10, "Luxury stay steps from the Prophet's Mosque."),
    place("med-stay-hilton", "Hilton Madinah", 24.5515, 39.6075, "stay", "Hotel", "Haram", 9, "Major pilgrim hotel on the Haram ring."),
    place("med-stay-intercontinental", "InterContinental Dar Al Iman", 24.5528, 39.6105, "stay", "Hotel", "Haram", 9, "Direct mosque-access luxury."),
    place("med-stay-pullman", "Pullman Zamzam Madina", 24.551, 39.609, "stay", "Hotel", "Haram", 8, "Large capacity near the courtyards."),
    place("med-stay-millennium", "Millennium Al Aqeeq", 24.55, 39.6065, "stay", "Hotel", "Haram", 8, "Reliable Central Area base."),
    place("med-stay-anwar", "Anwar Al Madinah Mövenpick", 24.552, 39.607, "stay", "Hotel", "Haram", 8, "Busy pilgrim hotel with dining floors."),
    place("med-stay-shaza", "Shaza Al Madina", 24.5495, 39.605, "stay", "Hotel", "Haram", 8, "Design-forward stay slightly south."),
    place("med-stay-frontel", "Frontel Al Haram", 24.5508, 39.6088, "stay", "Hotel", "Haram", 7, "Value hotel within walking distance."),
    place("med-stay-quba", "Hotels near Quba Mosque", 24.44, 39.617, "stay", "Hotel", "Quba", 6, "Quieter base by Quba for reflection."),
    place("med-stay-noor", "Hotels by Al Noor Mall", 24.499, 39.571, "stay", "Hotel", "West Medina", 6, "West-city stay for malls and rail access."),
  ],
};
