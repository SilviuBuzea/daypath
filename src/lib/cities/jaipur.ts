import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const jaipur: CityCatalog = {
  id: "jaipur",
  name: "Jaipur, India",
  aliases: ["jaipur", "pink city"],
  center: { lat: 26.9124, lon: 75.7873 },
  places: [
    // ——— Amber / Amer ———
    place("jai-amber", "Amber Fort (Amer Fort)", 26.9855, 75.8513, "sight", "Monument", "Amer", 10, "Hill fort with mirror palace and courtyard sequence — go at open.", { tip: "Elephant rides optional; jeep/walk to the gate is fine. Sound-and-light at night.", flags: ["ticket", "early", "touristy"] }),
    place("jai-sheesh", "Sheesh Mahal Amber", 26.9858, 75.8515, "sight", "Monument", "Amer", 9, "Mirror-work hall inside Amber — cameras often restricted."),
    place("jai-diwan-amber", "Diwan-i-Am Amber", 26.9852, 75.851, "sight", "Monument", "Amer", 8, "Public audience courtyard on the fort ascent."),
    place("jai-maota", "Maota Lake viewpoint", 26.9845, 75.8485, "nature", "Park", "Amer", 8, "Classic Amber reflection photos across the lake."),
    place("jai-jaigarh", "Jaigarh Fort", 26.985, 75.8455, "sight", "Monument", "Amer", 9, "Cannon foundry fort above Amber — Jaivana cannon and rampart views.", { flags: ["ticket"] }),
    place("jai-nahargarh", "Nahargarh Fort", 26.9375, 75.8155, "sight", "Monument", "Nahargarh", 9, "Sunset ramparts over the pink city — cafe on the ridge.", { tip: "Best at golden hour; combine with Madhvilas garden.", flags: ["ticket", "touristy"] }),
    place("jai-madhvilas", "Madhvilas Garden Nahargarh", 26.9385, 75.8165, "nature", "Garden", "Nahargarh", 7, "Step gardens below the fort walls."),
    place("jai-panna", "Panna Meena ka Kund", 26.9865, 75.8555, "sight", "Monument", "Amer", 8, "Symmetrical stepwell for geometric photos — mornings quieter.", { flags: ["touristy"] }),
    place("jai-amber-palace", "Anokhi Museum of Hand Printing", 26.9875, 75.8525, "museum", "Museum", "Amer", 7, "Block-print museum in a restored haveli near Amber.", { flags: ["ticket"] }),
    place("jai-amber-village", "Amer village craft stalls", 26.986, 75.85, "shopping", "Market", "Amer", 6, "Textiles and lac bangles on the fort approach."),

    // ——— City Palace & old city ———
    place("jai-city-palace", "City Palace", 26.9258, 75.8236, "sight", "Monument", "Old City", 10, "Royal complex with museums, courtyards, and still-used halls.", { flags: ["ticket", "touristy"] }),
    place("jai-chandra", "Chandra Mahal exterior", 26.9262, 75.8238, "sight", "Monument", "Old City", 8, "Private royal wing — exterior views from palace courts."),
    place("jai-pritam", "Pritam Niwas Chowk doors", 26.9255, 75.8235, "sight", "Monument", "Old City", 8, "Four seasonal painted doorways — iconic Instagram stop."),
    place("jai-mubarak", "Mubarak Mahal textile displays", 26.9257, 75.8232, "museum", "Museum", "Old City", 7, "Costume and textile galleries in the palace."),
    place("jai-armoury", "City Palace armoury", 26.926, 75.824, "museum", "Museum", "Old City", 7, "Weapons and ceremonial arms collection."),
    place("jai-jantar", "Jantar Mantar", 26.9248, 75.8246, "sight", "Monument", "Old City", 10, "UNESCO astronomical instruments — morning light for photos.", { tip: "Guide helps decode the yantras; pair with City Palace.", flags: ["ticket", "touristy"] }),
    place("jai-govind", "Govind Dev Ji Temple", 26.9285, 75.8255, "sight", "Monument", "Old City", 8, "Krishna temple inside the palace precinct — evening aarti."),
    place("jai-hawa", "Hawa Mahal", 26.9239, 75.8267, "sight", "Monument", "Old City", 10, "Palace of Winds façade — best exterior light mid-morning.", { tip: "Enter for courtyard and city views; street photos from the opposite side.", flags: ["ticket", "touristy"] }),
    place("jai-hawa-interior", "Hawa Mahal museum floors", 26.924, 75.8265, "museum", "Museum", "Old City", 7, "Miniatures and lattice windows looking over Johari Bazaar."),
    place("jai-triploia", "Tripolia Gate", 26.9265, 75.8225, "sight", "Monument", "Old City", 6, "Ceremonial triple gate toward the City Palace."),
    place("jai-sireh", "Sireh Deori Bazaar approach", 26.9245, 75.826, "shopping", "Market", "Old City", 7, "Craft shops facing Hawa Mahal."),

    // ——— Bazaars ———
    place("jai-johari", "Johari Bazaar", 26.9225, 75.8255, "shopping", "Market", "Old City", 9, "Jewellery and textile spine of the Pink City."),
    place("jai-bapu", "Bapu Bazaar", 26.9195, 75.8215, "shopping", "Market", "Old City", 8, "Quilts, juttis, and souvenirs under pink façades."),
    place("jai-nehru", "Nehru Bazaar", 26.9185, 75.82, "shopping", "Market", "Old City", 7, "Fabric and household goods near Ajmeri Gate."),
    place("jai-kishanpol", "Kishanpol Bazaar spice colours", 26.9215, 75.8185, "shopping", "Market", "Old City", 7, "Papad, spices, and snack shops."),
    place("jai-triploia-bazaar", "Tripolia Bazaar brassware", 26.9255, 75.8215, "shopping", "Market", "Old City", 7, "Metalwork and temple items near the palace."),
    place("jai-chandpole", "Chandpole Bazaar", 26.9295, 75.8155, "shopping", "Market", "Old City", 6, "Local market toward Chandpole Gate."),
    place("jai-ramganj", "Ramganj Chaupar / havelis", 26.9235, 75.8355, "sight", "Attraction", "Old City", 6, "Chaotic chaupar crossing and painted havelis east."),
    place("jai-manak", "Manak Chowk", 26.925, 75.8245, "sight", "Attraction", "Old City", 6, "Palace-adjacent square for orientation."),

    // ——— Gates & walls ———
    place("jai-ajmeri", "Ajmeri Gate", 26.9155, 75.8155, "sight", "Monument", "Old City", 6, "Southern gate toward MI Road."),
    place("jai-sanganeri", "Sanganeri Gate", 26.9125, 75.8255, "sight", "Monument", "Old City", 6, "Gate named for the block-print town south."),
    place("jai-chandpole-gate", "Chandpole Gate", 26.9315, 75.8125, "sight", "Monument", "Old City", 6, "Western gate with metro station nearby."),
    place("jai-zorawar", "Zorawar Singh Gate fringe", 26.9355, 75.8255, "sight", "Monument", "Old City", 5, "Northern approaches toward Amber Road."),

    // ——— New City / C-Scheme / MI Road ———
    place("jai-albert", "Albert Hall Museum", 26.9115, 75.8195, "museum", "Museum", "Ram Niwas", 9, "Indo-Saracenic museum in Ram Niwas Garden — Egyptian mummy fame.", { flags: ["ticket"] }),
    place("jai-ram-niwas", "Ram Niwas Garden", 26.9105, 75.8185, "nature", "Garden", "Ram Niwas", 7, "Colonial garden surrounding Albert Hall."),
    place("jai-zoo", "Jaipur Zoo (historic grounds)", 26.9095, 75.8175, "nature", "Park", "Ram Niwas", 5, "Check current status — often redeveloped; verify before going."),
    place("jai-mi-road", "MI Road stroll", 26.9155, 75.81, "shopping", "Market", "MI Road", 7, "Colonial-era shopping street with cafes and bookshops."),
    place("jai-niro", "Niro's restaurant landmark", 26.9165, 75.8095, "food", "Restaurant", "MI Road", 6, "Long-running multi-cuisine stop on MI Road.", { cuisine: "multi-cuisine" }),
    place("jai-panch", "Panch Batti / Raj Mandir area", 26.915, 75.8085, "sight", "Attraction", "MI Road", 7, "Neon cinema landmark and central meeting point."),
    place("jai-raj-mandir", "Raj Mandir Cinema", 26.9148, 75.8082, "sight", "Monument", "MI Road", 7, "Art Deco/neon cinema palace — catch any screening for the foyer."),
    place("jai-statue", "Statue Circle", 26.9055, 75.8055, "sight", "Monument", "C-Scheme", 6, "Illuminated Sawai Jai Singh statue roundabout."),
    place("jai-central-park", "Central Park Jaipur", 26.9025, 75.8055, "nature", "Park", "C-Scheme", 7, "Large urban park with morning walkers and weekend markets."),
    place("jai-jawahar", "Jawahar Kala Kendra", 26.8825, 75.8085, "museum", "Museum", "Jawahar Circle", 8, "Charles Correa arts centre with galleries and crafts.", { flags: ["ticket"] }),
    place("jai-jawahar-circle", "Jawahar Circle garden", 26.8785, 75.8055, "nature", "Garden", "Jawahar Circle", 6, "Musical fountain evenings in the southern circle."),
    place("jai-world-trade", "World Trade Park mall", 26.8535, 75.8055, "shopping", "Market", "Malviya Nagar", 6, "Modern mall dining and cinema in south Jaipur."),
    place("jai-gtp", "GT Central / C-Scheme cafes", 26.9085, 75.8025, "cafe", "Cafe", "C-Scheme", 6, "Cafe hop in the planned New City grid."),

    // ——— Temples & sacred ———
    place("jai-birla", "Birla Mandir (Lakshmi Narayan)", 26.8915, 75.8155, "sight", "Monument", "South Jaipur", 8, "White marble temple glowing at dusk."),
    place("jai-galta", "Galta Ji (Monkey Temple)", 26.9215, 75.8585, "sight", "Monument", "Galta", 8, "Hill temples and holy kunds with resident macaques.", { tip: "Secure belongings; combine with sunrise from the ridge.", flags: ["touristy"] }),
    place("jai-galta-sunrise", "Galta ridge sunrise", 26.92, 75.86, "sight", "Viewpoint", "Galta", 7, "City and Aravalli views above the kunds.", { flags: ["early"] }),
    place("jai-moti", "Moti Dungri Temple", 26.8935, 75.8158, "sight", "Monument", "South Jaipur", 6, "Ganesh temple on a small hill beside Birla Mandir."),
    place("jai-govind-evening", "Govind Dev Ji evening aarti crush", 26.9288, 75.8258, "sight", "Attraction", "Old City", 7, "Devotional peak hour inside the palace zone."),
    place("jai-akshardham", "Akshardham Jaipur", 26.9355, 75.7855, "sight", "Monument", "Vaishali Nagar fringe", 6, "Large modern temple complex west of centre."),

    // ——— Jal Mahal & north lakes ———
    place("jai-jal", "Jal Mahal", 26.9535, 75.8465, "sight", "Monument", "Amer Road", 9, "Water palace in Man Sagar Lake — viewpoint from the embankment.", { flags: ["free", "touristy"] }),
    place("jai-mansagar", "Man Sagar Lake promenade", 26.9545, 75.8455, "nature", "Park", "Amer Road", 7, "Birds and sunset reflections with Nahargarh backdrop."),
    place("jai-kanak", "Kanak Vrindavan Garden", 26.9585, 75.8485, "nature", "Garden", "Amer Road", 7, "Garden complex near Jal Mahal for a shade break.", { flags: ["ticket"] }),
    place("jai-khole", "Khole Ke Hanuman Ji", 26.9455, 75.8755, "sight", "Monument", "East Jaipur", 6, "Popular Hanuman temple in the hills east."),

    // ——— Sanganer / Bagru day pockets ———
    place("jai-sanganer", "Sanganer block-print workshops", 26.8255, 75.7755, "shopping", "Market", "Sanganer", 8, "Watch printers stamp textiles — buy direct from workshops."),
    place("jai-sanganer-temple", "Sanganer Jain temples", 26.8285, 75.7785, "sight", "Monument", "Sanganer", 6, "Carved Jain temples in the print town."),
    place("jai-bagru", "Bagru mud-resist print village", 26.8255, 75.5455, "shopping", "Market", "Bagru", 7, "Traditional dabu print village west — half-day craft trip."),
    place("jai-chokhi", "Chokhi Dhani heritage village", 26.7655, 75.8355, "nightlife", "Attraction", "South Jaipur", 8, "Evening Rajasthani dinner, crafts, and folk shows.", { tip: "Go at dusk for the full experience; touristy but fun.", flags: ["ticket", "touristy"] }),

    // ——— Museums & culture ———
    place("jai-src", "SRC Museum of Indology", 26.8955, 75.8055, "museum", "Museum", "C-Scheme", 5, "Eclectic private collection — quirky half-hour."),
    place("jai-dolls", "Dolls Museum / niche galleries", 26.9055, 75.8125, "museum", "Museum", "MI Road", 5, "Small specialised collections near the centre."),
    place("jai-haveli-museum", "City haveli museums (Patrika / similar)", 26.9245, 75.8285, "museum", "Museum", "Old City", 6, "Period rooms in restored merchant havelis."),
    place("jai-museum-of-legacies", "Museum of Legacies", 26.9255, 75.8275, "museum", "Museum", "Old City", 6, "Contemporary take on Jaipur crafts in a heritage shell.", { flags: ["ticket"] }),

    // ——— Food ———
    place("jai-lassi", "Lassiwala MI Road", 26.916, 75.809, "food", "Restaurant", "MI Road", 9, "Folklore clay-cup lassi — confirm the original counter.", { cuisine: "street food", flags: ["touristy"] }),
    place("jai-rawat", "Rawat Misthan Bhandar", 26.9175, 75.8075, "food", "Restaurant", "Station Road", 8, "Pyaaz kachori institution near the railway.", { cuisine: "rajasthani" }),
    place("jai-handi", "Handi / Dal Baati Churma dinners", 26.9125, 75.8055, "food", "Restaurant", "MI Road", 8, "Rajasthani thali staples in tourist-friendly dining rooms.", { cuisine: "rajasthani" }),
    place("jai-tapri", "Tapri Central chai", 26.9055, 75.8025, "cafe", "Cafe", "C-Scheme", 7, "Kettle chai and snacks in a lively courtyard."),
    place("jai-peacock", "Peacock Rooftop Restaurant", 26.924, 75.8255, "food", "Restaurant", "Old City", 8, "Hawa Mahal views with multi-cuisine — book sunset.", { cuisine: "multi-cuisine", flags: ["touristy"] }),
    place("jai-laxmi", "Laxmi Misthan Bhandar (LMB)", 26.922, 75.8245, "food", "Restaurant", "Johari Bazaar", 8, "Sweets and sattvik thalis opposite Johari.", { cuisine: "rajasthani" }),
    place("jai-pandit", "Pandit Kulfi / old-city kulfi", 26.923, 75.825, "food", "Restaurant", "Old City", 7, "Kesar kulfi sticks after bazaar walking.", { cuisine: "sweets" }),
    place("jai-chirmi", "Chirmi / regional Rajasthani", 26.91, 75.8, "food", "Restaurant", "C-Scheme", 7, "Regional dishes beyond the standard thali.", { cuisine: "rajasthani" }),
    place("jai-barista", "Old City cafe rooftops", 26.9235, 75.824, "cafe", "Cafe", "Old City", 7, "Filter views of pink façades with AC breaks."),
    place("jai-al-kafeel", "Al-Kafeel / non-veg kebab pockets", 26.9285, 75.8355, "food", "Restaurant", "Ramganj", 7, "Late Mughlai plates in the eastern old city.", { cuisine: "mughlai" }),
    place("jai-sahu", "Sahu Chat / chaat corners", 26.92, 75.822, "food", "Restaurant", "Old City", 7, "Kachori chaat and aloo tikki stands.", { cuisine: "street food" }),

    // ——— Nightlife ———
    place("jai-nahar-cafe", "Nahargarh fort cafe night", 26.9378, 75.8158, "nightlife", "Bar", "Nahargarh", 8, "City-light panoramas with snacks after sunset."),
    place("jai-1000-lights", "1000 Lights / hotel bars", 26.905, 75.79, "nightlife", "Bar", "Civil Lines", 6, "Upscale hotel bars for a quiet drink."),
    place("jai-stepup", "Stepup / club nights", 26.855, 75.805, "nightlife", "Club", "Malviya Nagar", 5, "South Jaipur club options — check dress codes."),
    place("jai-folk", "Folklore dinner shows (non-Chokhi)", 26.9, 75.8, "nightlife", "Attraction", "C-Scheme", 6, "Hotel cultural programmes with ghoomar and puppetry.", { flags: ["ticket"] }),

    // ——— Day trips ———
    place("jai-samode", "Samode Palace day trip", 27.0355, 75.5255, "sight", "Monument", "Samode", 7, "Ornate palace north-west — half-day heritage escape.", { flags: ["ticket"] }),
    place("jai-bhangarh", "Bhangarh Fort (longer day)", 27.0955, 76.2855, "sight", "Monument", "Bhangarh", 6, "Ruined fort with folklore — long day east; daylight only.", { flags: ["ticket"] }),
    place("jai-abhaneri", "Abhaneri Chand Baori", 27.0075, 76.6055, "sight", "Monument", "Abhaneri", 8, "Spectacular stepwell on the Agra road — combine with a drive day.", { flags: ["ticket"] }),

    // ——— Stays ———
    place("jai-stay-old", "Old City haveli hotels", 26.924, 75.823, "stay", "Hotel", "Old City", 9, "Sleep inside the walls for dawn Jantar / Hawa walks."),
    place("jai-stay-mi", "MI Road / Bani Park hotels", 26.92, 75.8, "stay", "Hotel", "Bani Park", 8, "Classic tourist hotel belt with easy taxi access."),
    place("jai-stay-amber", "Amer Road resorts", 26.97, 75.85, "stay", "Hotel", "Amer Road", 8, "Pool resorts between Jal Mahal and Amber Fort."),
    place("jai-stay-c", "C-Scheme boutique stays", 26.905, 75.8, "stay", "Hotel", "C-Scheme", 7, "Cafe district base away from bazaar noise."),
    place("jai-stay-malviya", "Malviya Nagar modern hotels", 26.855, 75.81, "stay", "Hotel", "Malviya Nagar", 6, "South Jaipur comfort near malls."),
  ],
};
