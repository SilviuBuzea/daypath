import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const budapest: CityCatalog = {
  id: "budapest",
  name: "Budapest, Hungary",
  aliases: ["budapest"],
  center: { lat: 47.4979, lon: 19.0402 },
  places: [
    // ——— Castle Hill / Buda ———
    place("bp-castle", "Buda Castle", 47.4962, 19.0396, "sight", "Castle", "Castle Hill", 10, "Palace complex above the Danube — funicular or bus 16."),
    place("bp-mathias", "Matthias Church", 47.5019, 19.0342, "sight", "Monument", "Castle Hill", 9, "Colorful tiled roof church on Castle Hill."),
    place("bp-fishermen", "Fisherman's Bastion", 47.502, 19.0348, "sight", "Viewpoint", "Castle Hill", 9, "Turreted lookout over Parliament and Pest."),
    place("bp-labyrinth", "Hospital in the Rock", 47.5015, 19.0335, "museum", "Museum", "Castle Hill", 7, "WWII/Cold War hospital caves under the hill."),
    place("bp-national-gallery", "Hungarian National Gallery", 47.4965, 19.0395, "museum", "Museum", "Castle Hill", 7, "Hungarian art in the palace wings."),
    place("bp-history-museum", "Budapest History Museum", 47.4955, 19.04, "museum", "Museum", "Castle Hill", 6, "Castle excavations and city history."),
    place("bp-gellert-hill", "Gellért Hill", 47.4875, 19.0465, "nature", "Park", "Gellért", 8, "Citadella and Liberty Statue views."),
    place("bp-citadella", "Citadella", 47.487, 19.046, "sight", "Monument", "Gellért", 7, "Fortress walk with panorama."),
    place("bp-cave-church", "Gellért Cave Church", 47.4855, 19.052, "sight", "Monument", "Gellért", 6, "Rock chapel by the Gellért Baths."),
    place("bp-gellert-bath", "Gellért Thermal Bath", 47.4838, 19.052, "sight", "Attraction", "Gellért", 8, "Art Nouveau thermal baths with wave pool."),

    // ——— Pest center ———
    place("bp-parliament", "Hungarian Parliament", 47.5071, 19.0457, "sight", "Monument", "Pest", 10, "Gothic Revival riverside icon — book interior tours."),
    place("bp-basilica", "St. Stephen's Basilica", 47.5009, 19.054, "sight", "Monument", "Pest", 9, "Dome climb and St. Stephen's relic."),
    place("bp-chain-bridge", "Chain Bridge", 47.4989, 19.0437, "sight", "Attraction", "Pest", 9, "Lion bridge linking Buda and Pest."),
    place("bp-shoes", "Shoes on the Danube Bank", 47.5095, 19.0448, "sight", "Monument", "Pest", 8, "Holocaust memorial by the river."),
    place("bp-opera", "Hungarian State Opera", 47.5028, 19.0582, "sight", "Monument", "Pest", 8, "Neo-Renaissance opera — tours or evening shows."),
    place("bp-andrássy", "Andrássy Avenue", 47.5055, 19.0655, "sight", "Attraction", "Pest", 7, "UNESCO boulevard toward Heroes' Square."),
    place("bp-terror", "House of Terror", 47.507, 19.065, "museum", "Museum", "Pest", 8, "Arrow Cross and ÁVH secret police museum."),
    place("bp-great-synagogue", "Great Synagogue", 47.4955, 19.0605, "sight", "Monument", "Jewish Quarter", 9, "Europe's largest synagogue complex."),
    place("bp-jewish-museum", "Hungarian Jewish Museum", 47.4958, 19.0608, "museum", "Museum", "Jewish Quarter", 7, "Museum and garden memorial beside the synagogue."),
    place("bp-market", "Great Market Hall", 47.4867, 19.0587, "shopping", "Market", "Pest", 9, "Paprika, lángos, and souvenir stalls."),
    place("bp-vajdahunyad", "Vajdahunyad Castle", 47.5155, 19.0825, "sight", "Castle", "City Park", 7, "Fairytale castle pastiche in City Park."),
    place("bp-heroes", "Heroes' Square", 47.5149, 19.0778, "sight", "Attraction", "City Park", 8, "Millennium monument and museum flanks."),
    place("bp-szechenyi", "Széchenyi Thermal Bath", 47.5186, 19.082, "sight", "Attraction", "City Park", 10, "Outdoor thermal pools in yellow neo-Baroque."),
    place("bp-museum-fine", "Museum of Fine Arts", 47.516, 19.0765, "museum", "Museum", "City Park", 8, "European masters on Heroes' Square."),
    place("bp-kunsthalle", "Kunsthalle (Műcsarnok)", 47.5145, 19.0785, "museum", "Museum", "City Park", 6, "Contemporary exhibitions opposite Fine Arts."),
    place("bp-city-park", "City Park (Városliget)", 47.5145, 19.085, "nature", "Park", "City Park", 7, "Boating lake, zoo edge, and weekend lawns."),
    place("bp-zoo", "Budapest Zoo", 47.5195, 19.0785, "nature", "Park", "City Park", 6, "Historic zoo next to Széchenyi."),
    place("bp-margaret", "Margaret Island", 47.527, 19.047, "nature", "Park", "Danube", 8, "Car-free island of parks, ruins, and pools."),
    place("bp-liberty-bridge", "Liberty Bridge", 47.4855, 19.055, "sight", "Attraction", "Pest", 6, "Green iron bridge to Gellért."),
    place("bp-rudas", "Rudas Baths", 47.4885, 19.0475, "sight", "Attraction", "Gellért", 7, "Ottoman-era thermal with rooftop hot tub."),
    place("bp-lukacs", "Lukács Baths", 47.518, 19.0365, "sight", "Attraction", "Buda", 6, "Local thermal complex north of Castle."),

    // ——— Jewish Quarter / District VII ———
    place("bp-ruin-street", "Kazinczy Street", 47.4975, 19.0635, "sight", "Attraction", "Jewish Quarter", 7, "Ruin-bar spine of District VII."),
    place("bp-ghetto-wall", "Ghetto memorial wall", 47.4965, 19.0615, "sight", "Monument", "Jewish Quarter", 6, "WWII ghetto boundary markers."),
    place("bp-printa", "Printa / design shops", 47.4985, 19.0625, "shopping", "Market", "Jewish Quarter", 6, "Local design and print studios."),
    place("bp-falk", "Falk Miksa antiques row", 47.5085, 19.05, "shopping", "Market", "Pest", 5, "Antique shops near Parliament."),

    // ——— More museums / sights ———
    place("bp-ludwig", "Ludwig Museum", 47.47, 19.07, "museum", "Museum", "South Buda", 6, "Contemporary art at Müpa."),
    place("bp-mupa", "Müpa Budapest", 47.4695, 19.0705, "sight", "Attraction", "South Buda", 6, "Palace of Arts concert complex."),
    place("bp-pinball", "Pinball Museum", 47.5125, 19.0555, "museum", "Museum", "Pest", 5, "Playable vintage pinball machines."),
    place("bp-hospital", "Invisible Exhibition", 47.5, 19.055, "museum", "Museum", "Pest", 5, "Blindness experience museum near Basilica."),
    place("bp-danube-cruise", "Danube cruise pier", 47.4975, 19.0455, "sight", "Attraction", "Pest", 7, "Evening lights cruise under the bridges."),
    place("bp-buda-hills", "Normafa / Buda Hills", 47.505, 18.98, "nature", "Park", "Buda Hills", 6, "Forest walks and sledding above the city."),
    place("bp-childrens-railway", "Children's Railway", 47.5055, 18.975, "sight", "Attraction", "Buda Hills", 6, "Kids-run heritage railway in the hills."),
    place("bp-elizabeth", "Elizabeth Lookout", 47.518, 18.96, "sight", "Viewpoint", "Buda Hills", 6, "Tower views west of the city."),

    // ——— Cafes ———
    place("bp-cafe-newyork", "New York Café", 47.4985, 19.0705, "cafe", "Cafe", "Pest", 8, "Over-the-top 'most beautiful café' — go for coffee not a full meal.", { cuisine: "coffee pastry" }),
    place("bp-cafe-gerbeaud", "Café Gerbeaud", 47.497, 19.0525, "cafe", "Cafe", "Pest", 7, "Historic pastry café on Vörösmarty Square.", { cuisine: "pastry coffee" }),
    place("bp-cafe-central", "Centrál Kávéház", 47.4925, 19.0565, "cafe", "Cafe", "Pest", 7, "Literary coffeehouse near the university.", { cuisine: "coffee hungarian" }),
    place("bp-cafe-espionage", "Espresso Embassy", 47.5015, 19.0535, "cafe", "Cafe", "Pest", 7, "Specialty coffee near Basilica.", { cuisine: "coffee" }),
    place("bp-cafe-mylittle", "My Little Melbourne", 47.4985, 19.0625, "cafe", "Cafe", "Jewish Quarter", 7, "Aussie-style flat whites in VII.", { cuisine: "coffee brunch" }),
    place("bp-cafe-massolit", "Massolit Books & Café", 47.498, 19.0615, "cafe", "Cafe", "Jewish Quarter", 6, "Book café in the Jewish Quarter.", { cuisine: "coffee" }),
    place("bp-cafe-bukowski", "Bukowski Grill café side", 47.4995, 19.0645, "cafe", "Cafe", "Jewish Quarter", 5, "Daytime coffee before night mode.", { cuisine: "coffee" }),
    place("bp-cafe-flower", "Flower coffee / Madal", 47.5015, 19.055, "cafe", "Cafe", "Pest", 6, "Third-wave Madal Café near Basilica.", { cuisine: "coffee" }),

    // ——— Food ———
    place("bp-food-langos", "Great Market lángos", 47.4867, 19.0585, "food", "Quick meal", "Pest", 8, "Fried dough with sour cream and cheese upstairs.", { cuisine: "hungarian street_food" }),
    place("bp-food-hungarikum", "Hungarikum Bisztró", 47.5015, 19.0525, "food", "Restaurant", "Pest", 8, "Home-style goulash and paprika chicken.", { cuisine: "hungarian" }),
    place("bp-food-borkonyha", "Borkonyha", 47.501, 19.0535, "food", "Restaurant", "Pest", 9, "Michelin Hungarian near Basilica.", { cuisine: "hungarian" }),
    place("bp-food-costes", "Costes Downtown", 47.4985, 19.052, "food", "Restaurant", "Pest", 8, "Fine dining tasting menus.", { cuisine: "hungarian european" }),
    place("bp-food-kispiac", "Kispiac", 47.5025, 19.0555, "food", "Restaurant", "Pest", 7, "Farm-to-table Hungarian near Opera.", { cuisine: "hungarian" }),
    place("bp-food-karavan", "Karaván Street Food", 47.4975, 19.0638, "food", "Quick meal", "Jewish Quarter", 7, "Food trucks beside Szimpla.", { cuisine: "street_food" }),
    place("bp-food-belvarosi", "Belvárosi Disznótoros", 47.4945, 19.0555, "food", "Quick meal", "Pest", 7, "Sausage and stewed meats counter.", { cuisine: "hungarian" }),
    place("bp-food-gettó", "Gettó Gulyás", 47.497, 19.062, "food", "Restaurant", "Jewish Quarter", 7, "Goulash and dumplings in VII.", { cuisine: "hungarian" }),
    place("bp-food-pasta", "Pasta e Pasta / Italian", 47.5, 19.0545, "food", "Restaurant", "Pest", 5, "Italian break near Basilica.", { cuisine: "italian" }),
    place("bp-food-ramen", "Ramen Kaasan", 47.4985, 19.064, "food", "Restaurant", "Jewish Quarter", 6, "Ramen escape in the ruin-bar zone.", { cuisine: "japanese ramen" }),
    place("bp-food-vegan", "Napfényes", 47.5075, 19.0625, "food", "Restaurant", "Pest", 6, "Vegetarian/vegan Hungarian plates.", { cuisine: "vegetarian vegan" }),
    place("bp-food-fish", "Halászbástya Restaurant", 47.502, 19.0345, "food", "Restaurant", "Castle Hill", 6, "Tourist-priced Castle Hill dining with views.", { cuisine: "hungarian" }),
    place("bp-food-ruin", "Szimpla Sunday farmers' market", 47.497, 19.0635, "food", "Quick meal", "Jewish Quarter", 6, "Farm produce and bites inside Szimpla.", { cuisine: "market" }),
    place("bp-food-chimney", "Kurtoskalacs stall", 47.4975, 19.0525, "food", "Quick meal", "Pest", 5, "Chimney cake near Vörösmarty.", { cuisine: "pastry" }),

    // ——— Nightlife ———
    place("bp-night-szimpla", "Szimpla Kert", 47.497, 19.0635, "nightlife", "Bar", "Jewish Quarter", 10, "Original ruin bar — labyrinth of courtyards."),
    place("bp-night-instant", "Instant-Fogas", 47.4975, 19.0655, "nightlife", "Club", "Jewish Quarter", 8, "Multi-room ruin club complex."),
    place("bp-night-elliot", "Ellátó / Kazinczy bars", 47.4978, 19.063, "nightlife", "Bar", "Jewish Quarter", 7, "Bar hop along Kazinczy."),
    place("bp-night-a42", "A38 Ship", 47.4765, 19.0625, "nightlife", "Club", "Danube", 7, "Concert club on a Danube ship."),
    place("bp-night-morrison", "Morrison's 2", 47.4985, 19.055, "nightlife", "Club", "Pest", 5, "Mainstream club near the center."),
    place("bp-night-tuk", "TukTuk Bar", 47.498, 19.0645, "nightlife", "Bar", "Jewish Quarter", 6, "Thai-themed cocktails in VII."),
    place("bp-night-high", "High Note SkyBar", 47.501, 19.0545, "nightlife", "Bar", "Pest", 7, "Rooftop drinks by Basilica."),

    // ——— Stays ———
    place("bp-stay-four", "Four Seasons Gresham Palace", 47.4995, 19.0485, "stay", "Hotel", "Pest", 10, "Art Nouveau luxury facing Chain Bridge."),
    place("bp-stay-aria", "Aria Hotel Budapest", 47.5015, 19.053, "stay", "Hotel", "Pest", 9, "Music-themed boutique by Basilica."),
    place("bp-stay-brody", "Brody House", 47.4925, 19.0655, "stay", "Hotel", "Pest", 7, "Artsy rooms near the National Museum."),
    place("bp-stay-rum", "Rum Hotel", 47.4975, 19.062, "stay", "Hotel", "Jewish Quarter", 7, "Design stay in the ruin-bar district."),
    place("bp-stay-maverick", "Maverick City Lodge", 47.497, 19.0615, "stay", "Hostel", "Jewish Quarter", 6, "Central hostel near Great Synagogue."),
    place("bp-stay-wombats", "Wombat's Budapest", 47.4975, 19.055, "stay", "Hostel", "Pest", 6, "Social hostel near Deák Square."),
    place("bp-stay-castle", "Castle Hill boutique", 47.501, 19.035, "stay", "Hotel", "Castle Hill", 8, "Quiet nights above the Danube."),
    place("bp-stay-apt", "District VII apartment", 47.4985, 19.064, "stay", "Apartment", "Jewish Quarter", 7, "Self-catering in the nightlife zone."),

    // ——— Extra sights ———
    place("bp-funicular", "Castle Hill Funicular", 47.4975, 19.0435, "sight", "Attraction", "Castle Hill", 7, "Historic funicular from Chain Bridge to the palace."),
    place("bp-zero", "Zero Kilometre Stone", 47.4985, 19.0435, "sight", "Monument", "Pest", 4, "All Hungarian roads measured from here."),
    place("bp-elisabeth-look", "Gellért Hill Cave chapel walk", 47.4865, 19.05, "sight", "Attraction", "Gellért", 5, "Paths between Citadella and Cave Church."),
    place("bp-andrássy-opera", "Opera House exterior", 47.5028, 19.0585, "sight", "Monument", "Pest", 7, "Andrássy Avenue landmark even without a ticket."),
    place("bp-central-market-up", "Great Market upstairs paprika", 47.4868, 19.059, "shopping", "Market", "Pest", 6, "Souvenir and paprika stalls above the produce."),
    place("bp-raf", "Raoul Wallenberg memorials area", 47.5085, 19.05, "sight", "Monument", "Pest", 5, "Holocaust rescue memorials near the embassies."),
  ],
};
