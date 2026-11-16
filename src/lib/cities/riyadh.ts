import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const riyadh: CityCatalog = {
  id: "riyadh",
  name: "Riyadh, Saudi Arabia",
  aliases: ["riyadh"],
  center: { lat: 24.7136, lon: 46.6753 },
  places: [
    // ——— Diriyah / At-Turaif ———
    place("ruh-turaif", "At-Turaif District", 24.7335, 46.5725, "sight", "Monument", "Diriyah", 10, "UNESCO mud-brick capital of the First Saudi State."),
    place("ruh-diriyah-gate", "Diriyah Gate development", 24.7355, 46.5755, "sight", "Attraction", "Diriyah", 9, "Heritage and dining quarter around historic Diriyah."),
    place("ruh-bujairi", "Bujairi Terrace", 24.7345, 46.5745, "shopping", "Market", "Diriyah", 8, "Restored terrace dining overlooking At-Turaif."),
    place("ruh-salwa", "Salwa Palace area", 24.7338, 46.5728, "sight", "Monument", "Diriyah", 8, "Palace ruins within the At-Turaif complex."),
    place("ruh-diriyah-museum", "Diriyah Museums", 24.734, 46.5735, "museum", "Museum", "Diriyah", 8, "Interpretive museums on Najdi history."),
    place("ruh-wadi-hanifah-diriyah", "Wadi Hanifah at Diriyah", 24.73, 46.57, "nature", "Park", "Diriyah", 7, "Valley walks beside the heritage district."),

    // ——— National Museum / Murabba ———
    place("ruh-national-museum", "National Museum of Saudi Arabia", 24.6475, 46.7105, "museum", "Museum", "Murabba", 10, "Kingdom history from pre-Islamic to modern eras."),
    place("ruh-murabba-palace", "Murabba Palace", 24.6485, 46.7095, "sight", "Monument", "Murabba", 8, "King Abdulaziz palace beside the museum park."),
    place("ruh-king-abdulaziz-park", "King Abdulaziz Historical Center", 24.647, 46.711, "nature", "Park", "Murabba", 8, "Palm avenues linking museum and palace."),
    place("ruh-dara", "Dara Exhibition halls", 24.6465, 46.7105, "museum", "Museum", "Murabba", 6, "Rotating cultural exhibitions on the campus."),
    place("ruh-water-tower", "Riyadh Water Tower area", 24.6555, 46.7085, "sight", "Monument", "Olaya edge", 6, "Classic skyline landmark near older districts."),

    // ——— Olaya / Kingdom / Boulevard ———
    place("ruh-kingdom-centre", "Kingdom Centre Tower", 24.7115, 46.6745, "sight", "Viewpoint", "Olaya", 9, "Sky Bridge observation deck over northern Riyadh."),
    place("ruh-kingdom-mall", "Kingdom Centre Mall", 24.7112, 46.6742, "shopping", "Mall", "Olaya", 7, "Luxury mall inside the tower complex."),
    place("ruh-al-faisaliah", "Al Faisaliah Tower", 24.6905, 46.6855, "sight", "Monument", "Olaya", 8, "Globe-topped tower with viewing options."),
    place("ruh-boulevard", "Boulevard Riyadh City", 24.7655, 46.6555, "sight", "Attraction", "Boulevard", 9, "Seasonal entertainment city — check event calendar."),
    place("ruh-boulevard-walk", "Boulevard Riyadh walkways", 24.7665, 46.6565, "shopping", "Market", "Boulevard", 8, "Themed streets, screens, and retail during season."),
    place("ruh-boulevard-world", "Boulevard World", 24.7685, 46.6585, "sight", "Attraction", "Boulevard", 8, "Global pavilion district when the season runs."),
    place("ruh-via-riyadh", "Via Riyadh", 24.69, 46.68, "shopping", "Mall", "Olaya", 7, "Upscale dining and retail destination."),
    place("ruh-centria", "Centria Mall", 24.6955, 46.6825, "shopping", "Mall", "Olaya", 6, "Central Olaya shopping atrium."),
    place("ruh-nakheel", "Al Nakheel Mall", 24.7455, 46.6555, "shopping", "Mall", "North Riyadh", 6, "Large family mall north of Olaya."),
    place("ruh-hayat", "Hayat Mall", 24.75, 46.65, "shopping", "Mall", "North Riyadh", 5, "Neighborhood mall for everyday needs."),
    place("ruh-olaya-street", "Olaya Street stroll", 24.7, 46.68, "sight", "Attraction", "Olaya", 6, "Business spine with cafes and towers."),

    // ——— Diplomatic Quarter / west ———
    place("ruh-dq", "Diplomatic Quarter gardens", 24.68, 46.62, "nature", "Park", "Diplomatic Quarter", 8, "Landscaped wadi parks in the DQ."),
    place("ruh-dq-walls", "DQ walls & art walk", 24.6825, 46.6225, "sight", "Attraction", "Diplomatic Quarter", 7, "Murals and quiet residential streets."),
    place("ruh-wadi-hanifah", "Wadi Hanifah Trail", 24.65, 46.6, "nature", "Park", "Wadi Hanifah", 8, "Rehabilitated valley trail through the city."),
    place("ruh-salam-park", "Salam Park", 24.6455, 46.7155, "nature", "Park", "Central", 7, "Palm-lined lake park near historic Qasr Al-Hukm."),
    place("ruh-kingdom-arena", "Kingdom Arena area", 24.78, 46.65, "sight", "Attraction", "North Riyadh", 5, "Entertainment venue district north."),

    // ——— Historic downtown ———
    place("ruh-masmak", "Masmak Fortress", 24.6315, 46.7135, "museum", "Museum", "Qasr Al-Hukm", 9, "Clay fort of the 1902 recapture — core Najdi story."),
    place("ruh-qasr-hukm", "Qasr Al-Hukm District", 24.6305, 46.7125, "sight", "Attraction", "Qasr Al-Hukm", 8, "Imam Turki bin Abdullah Mosque and plazas."),
    place("ruh-deira", "Deira Souq / Souq Al Zel", 24.6295, 46.7145, "shopping", "Market", "Qasr Al-Hukm", 8, "Traditional carpets, incense, and spices."),
    place("ruh-thumairi", "Thumairi Street", 24.6308, 46.7138, "shopping", "Market", "Qasr Al-Hukm", 7, "Historic commercial lane by the fort."),
    place("ruh-imam-turki", "Imam Turki bin Abdullah Mosque", 24.6302, 46.7128, "sight", "Monument", "Qasr Al-Hukm", 7, "Grand mosque anchoring the civic square."),
    place("ruh-al-hukm-palace", "Al Hukm Palace exterior", 24.630, 46.712, "sight", "Monument", "Qasr Al-Hukm", 6, "Governorate palace facing the old square."),

    // ——— Museums & culture ———
    place("ruh-royal-commission", "Royal Commission exhibition spaces", 24.735, 46.574, "museum", "Museum", "Diriyah", 6, "Diriyah development storytelling."),
    place("ruh-saab", "Saab Vintage Cars / classic collections", 24.7, 46.69, "museum", "Museum", "Olaya", 5, "Rotating classic-car displays when open."),
    place("ruh-planetarium", "Riyadh Planetarium / science halls", 24.72, 46.67, "museum", "Museum", "North", 6, "Astronomy shows for families."),
    place("ruh-jarir-lit", "Literary cafes near Jarir", 24.69, 46.685, "museum", "Museum", "Olaya", 5, "Bookshop culture stops in Olaya."),
    place("ruh-edge-of-world", "Edge of the World (Jebel Fihrayn)", 24.95, 45.95, "nature", "Viewpoint", "Edge of the World", 10, "Cliff escarpment day trip — 4x4 or guided tour."),
    place("ruh-thumamah", "Thumamah Nature Park", 25.2, 46.55, "nature", "Park", "Thumamah", 7, "Desert park and dunes north of the city."),
    place("ruh-rawdat", "Rawdat Khuraim (seasonal)", 25.4, 47.2, "nature", "Park", "East Riyadh", 7, "Spring wildflower depression after rains."),
    place("ruh-heyt", "Heet Cave area", 24.55, 46.9, "nature", "Park", "South Riyadh", 6, "Day-trip cave sinkhole — go with a guide."),

    // ——— Parks & modern ———
    place("ruh-king-abdullah-park", "King Abdullah Park", 24.7355, 46.7055, "nature", "Park", "Malaz", 8, "Large city park with fountain shows."),
    place("ruh-peace-park", "Peace Park", 24.68, 46.7, "nature", "Park", "Central", 5, "Neighborhood green space."),
    place("ruh-riyadh-front", "Riyadh Front", 24.78, 46.62, "shopping", "Mall", "Airport Road", 7, "Open-air retail and dining destination."),
    place("ruh-riyadh-gallery", "Riyadh Gallery Mall", 24.745, 46.66, "shopping", "Mall", "North", 6, "Major mall with cinema and dining."),
    place("ruh-panorama", "Panorama Mall", 24.7, 46.7, "shopping", "Mall", "Olaya", 6, "Central mall near business hotels."),
    place("ruh-sky", "Sky Towers / financial district views", 24.76, 46.64, "sight", "Viewpoint", "King Abdullah Financial District", 7, "Modern skyline of KAFD."),
    place("ruh-kafd", "King Abdullah Financial District walk", 24.7625, 46.6425, "sight", "Attraction", "KAFD", 7, "Contemporary architecture precinct."),
    place("ruh-metro", "Riyadh Metro Olaya stations", 24.7, 46.68, "sight", "Attraction", "Olaya", 6, "New metro architecture as urban landmarks."),

    // ——— More sights ———
    place("ruh-clock", "Al Rajhi Grand Mosque area", 24.64, 46.72, "sight", "Monument", "East", 6, "Large mosque complex east of center."),
    place("ruh-king-fahd", "King Fahd International Stadium exterior", 24.79, 46.7, "sight", "Attraction", "North", 5, "National stadium landmark."),
    place("ruh-camel", "Janadriyah cultural grounds (seasonal)", 25.05, 46.4, "sight", "Attraction", "Janadriyah", 8, "Heritage festival site north — seasonal access."),
    place("ruh-nai", "Al Nafel districts murals", 24.75, 46.68, "sight", "Attraction", "North", 5, "Residential art walks in newer districts."),
    place("ruh-qurtoba", "Qurtoba parks", 24.8, 46.7, "nature", "Park", "Northeast", 5, "Suburban green spaces."),

    // ——— Cafes ———
    place("ruh-barns", "Barn's Café Olaya", 24.7055, 46.6785, "cafe", "Cafe", "Olaya", 7, "Popular Saudi coffee chain stop.", { cuisine: "coffee arabic" }),
    place("ruh-half-million", "Half Million", 24.71, 46.67, "cafe", "Cafe", "Olaya", 7, "Specialty coffee favorite with young locals.", { cuisine: "coffee" }),
    place("ruh-camel-step", "Camel Step Coffee", 24.7, 46.685, "cafe", "Cafe", "Olaya", 7, "Local specialty roastery cafe.", { cuisine: "coffee" }),
    place("ruh-dose", "Dose Cafe", 24.715, 46.67, "cafe", "Cafe", "Olaya", 6, "Modern cafe culture in north Olaya.", { cuisine: "coffee" }),
    place("ruh-arabica", "% Arabica Riyadh", 24.712, 46.675, "cafe", "Cafe", "Olaya", 6, "Kyoto-born espresso near Kingdom Centre.", { cuisine: "coffee" }),
    place("ruh-urth", "Urth Caffé", 24.69, 46.68, "cafe", "Cafe", "Olaya", 6, "Organic cafe for longer sits.", { cuisine: "coffee brunch" }),
    place("ruh-diriyah-cafe", "Bujairi coffee terraces", 24.7345, 46.5748, "cafe", "Cafe", "Diriyah", 7, "Arabic coffee overlooking heritage mud walls.", { cuisine: "coffee arabic" }),
    place("ruh-dq-cafe", "Diplomatic Quarter cafes", 24.6815, 46.6215, "cafe", "Cafe", "Diplomatic Quarter", 6, "Quiet garden cafes in the DQ.", { cuisine: "coffee" }),

    // ——— Food ———
    place("ruh-najd", "Najd Village Restaurant", 24.68, 46.7, "food", "Restaurant", "Central", 8, "Traditional Najdi architecture and kebsa.", { cuisine: "saudi najdi halal" }),
    place("ruh-alorjouan", "Al Orjouan", 24.69, 46.68, "food", "Restaurant", "Olaya", 8, "Upscale Saudi and Levantine dining.", { cuisine: "arabic halal" }),
    place("ruh-takya", "Takya", 24.71, 46.67, "food", "Restaurant", "Olaya", 8, "Contemporary Saudi tasting menus.", { cuisine: "saudi modern halal" }),
    place("ruh-albaik", "Al Baik Riyadh", 24.7, 46.69, "food", "Quick meal", "Olaya", 7, "Famous broasted chicken — expect queues.", { cuisine: "saudi fast_food halal" }),
    place("ruh-mandi", "Mandi House", 24.65, 46.72, "food", "Restaurant", "Central", 8, "Rice and slow-cooked lamb platters.", { cuisine: "yemeni arabic halal" }),
    place("ruh-shawarma", "Shawarmer", 24.705, 46.68, "food", "Quick meal", "Olaya", 6, "Reliable shawarma chain stops.", { cuisine: "middle_eastern halal" }),
    place("ruh-lutece", "Lutece / fine French halls", 24.71, 46.675, "food", "Restaurant", "Olaya", 7, "Hotel fine dining for special nights.", { cuisine: "french halal_options" }),
    place("ruh-sushi", "Nobu Riyadh area", 24.69, 46.68, "food", "Restaurant", "Olaya", 7, "Upscale Japanese in the luxury belt.", { cuisine: "japanese" }),
    place("ruh-lebanon", "Lebanese Village", 24.7, 46.685, "food", "Restaurant", "Olaya", 7, "Mezze and grills.", { cuisine: "lebanese halal" }),
    place("ruh-kabsa", "Alfaisaliah kabsa counters", 24.6905, 46.6852, "food", "Quick meal", "Olaya", 6, "Quick kabsa near the tower.", { cuisine: "saudi halal" }),
    place("ruh-bujairi-food", "Bujairi Terrace restaurants", 24.7348, 46.5742, "food", "Restaurant", "Diriyah", 8, "Heritage-side dining row.", { cuisine: "saudi international halal" }),
    place("ruh-indian", "Asha's / Indian kitchens", 24.7, 46.67, "food", "Restaurant", "Olaya", 6, "Indian curries popular with families.", { cuisine: "indian halal" }),
    place("ruh-dates", "Date & coffee tasting shops", 24.63, 46.714, "food", "Quick meal", "Qasr Al-Hukm", 6, "Ajwa and Arabic coffee near the souq.", { cuisine: "saudi dessert" }),
    place("ruh-herfy", "Herfy", 24.72, 46.67, "food", "Quick meal", "North", 5, "Local fast-food burgers and broasted.", { cuisine: "fast_food halal" }),
    place("ruh-steak", "The Meat Co / steak houses", 24.71, 46.674, "food", "Restaurant", "Olaya", 7, "Steakhouse nights in the tower district.", { cuisine: "steakhouse" }),

    // ——— Evening / limited nightlife (respectful) ———
    place("ruh-boulevard-evening", "Boulevard evening shows", 24.7655, 46.6558, "nightlife", "Bar", "Boulevard", 8, "Seasonal light shows and family entertainment — no alcohol focus."),
    place("ruh-via-evening", "Via Riyadh evening", 24.6905, 46.6805, "nightlife", "Bar", "Olaya", 7, "Late dining terraces and cultural programming."),
    place("ruh-diriyah-night", "Diriyah night illumination", 24.7335, 46.5728, "nightlife", "Bar", "Diriyah", 8, "Lit mud-brick walls after dark — cultural evening."),
    place("ruh-cinema", "VOX / Muvi cinema nights", 24.745, 46.66, "nightlife", "Bar", "North", 6, "Cinema complexes for evening plans."),
    place("ruh-kafd-evening", "KAFD evening walk", 24.7625, 46.6428, "nightlife", "Bar", "KAFD", 6, "Lit modern architecture after work hours."),
    place("ruh-kingdom-sky", "Kingdom Sky Bridge sunset", 24.7115, 46.6748, "nightlife", "Bar", "Olaya", 7, "Sunset observation slot above the city."),
    place("ruh-live", "Seasonal concert venues", 24.766, 46.656, "nightlife", "Bar", "Boulevard", 7, "Check Riyadh Season calendars for live shows."),
    place("ruh-dq-evening", "DQ evening gardens", 24.68, 46.621, "nightlife", "Bar", "Diplomatic Quarter", 6, "Quiet illuminated park walks."),

    // ——— Stays ———
    place("ruh-stay-raffles", "Raffles Riyadh", 24.71, 46.675, "stay", "Hotel", "Olaya", 9, "Luxury Olaya base near Kingdom Centre."),
    place("ruh-stay-four-seasons", "Four Seasons Riyadh", 24.69, 46.685, "stay", "Hotel", "Olaya", 9, "Tower hotel inside Al Faisaliah complex."),
    place("ruh-stay-ritz", "The Ritz-Carlton Riyadh", 24.665, 46.63, "stay", "Hotel", "Diplomatic Quarter", 9, "Palace-scale luxury near the DQ."),
    place("ruh-stay-waldorf", "Waldorf Astoria Riyadh", 24.76, 46.64, "stay", "Hotel", "KAFD", 8, "Financial district modern luxury."),
    place("ruh-stay-diriyah", "Bab Samhan Diriyah", 24.735, 46.575, "stay", "Hotel", "Diriyah", 9, "Heritage-adjacent luxury at Diriyah Gate."),
    place("ruh-stay-narcissus", "Narcissus Hotel & Spa", 24.7, 46.68, "stay", "Hotel", "Olaya", 7, "Central business-district hotel."),
    place("ruh-stay-voco", "voco Riyadh", 24.72, 46.67, "stay", "Hotel", "Olaya", 7, "Practical mid-luxury for tower sightseeing."),
    place("ruh-stay-novotel", "Novotel Suites Riyadh", 24.68, 46.7, "stay", "Hotel", "Central", 6, "Reliable central base near parks and museums."),
  ],
};
