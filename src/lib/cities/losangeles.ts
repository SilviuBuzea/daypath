import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const losangeles: CityCatalog = {
  id: "losangeles",
  name: "Los Angeles, United States",
  aliases: ["los angeles", "la", "l.a."],
  center: { lat: 34.0522, lon: -118.2437 },
  places: [
    // ——— Hollywood / Griffith ———
    place("la-hollywood", "Hollywood Walk of Fame", 34.1016, -118.3267, "sight", "Attraction", "Hollywood", 7, "Star sidewalks along Hollywood Blvd — fun once, crowded always."),
    place("la-chinese", "TCL Chinese Theatre", 34.102, -118.341, "sight", "Monument", "Hollywood", 7, "Handprint forecourt and classic movie palace facade."),
    place("la-dolby", "Dolby Theatre exterior", 34.1025, -118.3405, "sight", "Attraction", "Hollywood", 6, "Oscars home inside Hollywood & Highland."),
    place("la-sign-view", "Hollywood Sign viewpoint (Griffith)", 34.1184, -118.3004, "sight", "Viewpoint", "Griffith Park", 9, "Classic sign photo from Griffith Observatory lawns."),
    place("la-griffith", "Griffith Observatory", 34.1184, -118.3004, "sight", "Viewpoint", "Griffith Park", 10, "Planetarium and free telescopes with downtown panoramas."),
    place("la-griffith-trails", "Griffith Park trails", 34.1365, -118.2945, "nature", "Park", "Griffith Park", 8, "Hike toward the sign or Mount Hollywood loop."),
    place("la-greek", "Greek Theatre", 34.1195, -118.2965, "sight", "Attraction", "Griffith Park", 6, "Outdoor amphitheater nestled in the park."),
    place("la-runyon", "Runyon Canyon", 34.1055, -118.35, "nature", "Park", "Hollywood Hills", 7, "Steep canyon hike with city views — go early for parking."),
    place("la-lake-hollywood", "Lake Hollywood Park", 34.1255, -118.3315, "nature", "Park", "Hollywood Hills", 7, "Quiet lawn with close Hollywood Sign framing."),
    place("la-universal-citywalk", "Universal CityWalk", 34.1381, -118.3534, "shopping", "Market", "Universal City", 6, "Neon retail strip before studio theme park gates."),

    // ——— Downtown LA ———
    place("la-disney-hall", "Walt Disney Concert Hall", 34.0553, -118.2498, "sight", "Monument", "Downtown", 9, "Gehry stainless curves — walk the exterior garden."),
    place("la-broad", "The Broad", 34.0544, -118.2506, "museum", "Museum", "Downtown", 9, "Free contemporary museum — reserve timed tickets."),
    place("la-moca", "MOCA Grand Avenue", 34.0535, -118.2505, "museum", "Museum", "Downtown", 8, "Modern art across from Disney Hall."),
    place("la-grand-central", "Grand Central Market", 34.0505, -118.2485, "food", "Market", "Downtown", 8, "Historic food hall under Broadway marquees.", { cuisine: "international" }),
    place("la-angels-flight", "Angels Flight Railway", 34.0515, -118.2505, "sight", "Attraction", "Downtown", 7, "Tiny funicular between Hill and California Plaza."),
    place("la-bradbury", "Bradbury Building", 34.0505, -118.2475, "sight", "Monument", "Downtown", 8, "Ornate iron atrium — lobby visits when open."),
    place("la-broadway", "Historic Broadway theaters", 34.0465, -118.2515, "sight", "Attraction", "Downtown", 7, "Movie-palace facades between 3rd and Olympic."),
    place("la-pershing", "Pershing Square", 34.0485, -118.2525, "nature", "Park", "Downtown", 5, "Central plaza for downtown orientation."),
    place("la-little-tokyo", "Little Tokyo stroll", 34.0505, -118.24, "sight", "Attraction", "Little Tokyo", 8, "Temples, plazas, and Japanese bakeries."),
    place("la-japanese-museum", "Japanese American National Museum", 34.0495, -118.2395, "museum", "Museum", "Little Tokyo", 8, "Community history and art in the district core."),
    place("la-arts-district", "Arts District murals", 34.0405, -118.2325, "sight", "Attraction", "Arts District", 7, "Warehouse murals and galleries east of Alameda."),
    place("la-olvera", "Olvera Street", 34.0575, -118.2385, "shopping", "Market", "El Pueblo", 7, "Mexican marketplace at the city's founding plaza."),
    place("la-union-station", "Union Station", 34.0565, -118.2345, "sight", "Monument", "Downtown", 8, "Mission Moderne terminal — grand waiting hall."),
    place("la-city-hall", "Los Angeles City Hall observation", 34.0535, -118.2425, "sight", "Viewpoint", "Downtown", 7, "Free observation deck when open — book ahead."),

    // ——— Santa Monica / Venice ———
    place("la-santa-pier", "Santa Monica Pier", 34.0094, -118.4972, "sight", "Attraction", "Santa Monica", 9, "Ferris wheel and Pacific views at the pier end."),
    place("la-santa-beach", "Santa Monica State Beach", 34.0155, -118.5025, "nature", "Beach", "Santa Monica", 8, "Bike path and wide sand north of the pier."),
    place("la-third-street", "Third Street Promenade", 34.0165, -118.4965, "shopping", "Market", "Santa Monica", 7, "Pedestrian shopping with street performers."),
    place("la-santa-bluffs", "Palisades Park bluffs", 34.0225, -118.5085, "nature", "Viewpoint", "Santa Monica", 8, "Cliff-top palms looking down the coast."),
    place("la-venice-boardwalk", "Venice Boardwalk", 33.9855, -118.4725, "sight", "Attraction", "Venice", 8, "Skate park, vendors, and Muscle Beach energy."),
    place("la-venice-canals", "Venice Canals", 33.9835, -118.4665, "sight", "Attraction", "Venice", 8, "Footbridges over quiet residential canals."),
    place("la-abbott", "Abbot Kinney Boulevard", 33.9895, -118.4635, "shopping", "Market", "Venice", 8, "Indie boutiques and cafes on the main retail strip."),
    place("la-marina-del-rey", "Marina del Rey harbor walk", 33.9725, -118.4485, "nature", "Park", "Marina del Rey", 6, "Boat slips and sunset harbor paths."),

    // ——— Beverly Hills / Westside ———
    place("la-rodeo", "Rodeo Drive", 34.0695, -118.4035, "shopping", "Market", "Beverly Hills", 8, "Luxury storefronts and palm-lined sidewalks."),
    place("la-beverly-gardens", "Beverly Gardens Park", 34.0725, -118.4025, "nature", "Park", "Beverly Hills", 6, "Floral Beverly Hills sign for photos."),
    place("la-getty-center", "Getty Center", 34.078, -118.4741, "museum", "Museum", "Brentwood", 10, "Hilltop art, gardens, and Pacific views — free entry."),
    place("la-getty-villa", "Getty Villa", 34.0455, -118.5655, "museum", "Museum", "Pacific Palisades", 9, "Roman villa museum on the Malibu coast — timed tickets."),
    place("la-lausd", "LACMA", 34.0635, -118.3595, "museum", "Museum", "Miracle Mile", 9, "Encyclopedic museum and Urban Light lamp posts."),
    place("la-laverne", "La Brea Tar Pits", 34.0638, -118.3556, "museum", "Museum", "Miracle Mile", 8, "Ice Age fossils bubbling beside Wilshire."),
    place("la-academy", "Academy Museum of Motion Pictures", 34.0632, -118.3605, "museum", "Museum", "Miracle Mile", 8, "Film history in the sphere beside LACMA."),
    place("la-petersen", "Petersen Automotive Museum", 34.0625, -118.3615, "museum", "Museum", "Miracle Mile", 7, "Car design and Hollywood wheels on Wilshire."),
    place("la-original-farmers", "Original Farmers Market", 34.0725, -118.3605, "shopping", "Market", "Fairfax", 8, "Historic stalls beside The Grove."),
    place("la-grove", "The Grove", 34.0715, -118.3575, "shopping", "Mall", "Fairfax", 7, "Open-air mall with trolley and fountain shows."),
    place("la-melrose", "Melrose Avenue shopping", 34.0835, -118.3615, "shopping", "Market", "Melrose", 7, "Streetwear and vintage between Fairfax and La Brea."),

    // ——— Silver Lake / Los Feliz / Echo Park ———
    place("la-silver-lake", "Silver Lake Reservoir walk", 34.0955, -118.2715, "nature", "Park", "Silver Lake", 7, "Neighborhood loop with hillside views."),
    place("la-echo-park", "Echo Park Lake", 34.0735, -118.2605, "nature", "Park", "Echo Park", 7, "Lotus and downtown skyline paddleboats."),
    place("la-barnsdall", "Barnsdall Art Park", 34.0955, -118.2945, "nature", "Park", "Los Feliz", 7, "Hollyhock House and hilltop city views."),
    place("la-neutra", "Neutra VDL House", 34.0985, -118.2605, "museum", "Museum", "Silver Lake", 6, "Modernist house museum by appointment."),

    // ——— Pasadena / east ———
    place("la-huntington", "The Huntington", 34.1275, -118.1105, "nature", "Park", "San Marino", 9, "Library, art, and vast themed gardens."),
    place("la-norton", "Norton Simon Museum", 34.1465, -118.1595, "museum", "Museum", "Pasadena", 8, "European masters in a compact Pasadena museum."),
    place("la-colorado", "Old Pasadena Colorado Blvd", 34.1455, -118.1495, "shopping", "Market", "Pasadena", 7, "Brick-front shopping and dining streets."),
    place("la-rose-bowl", "Rose Bowl area loop", 34.1615, -118.1675, "nature", "Park", "Pasadena", 6, "Stadium park walks and flea-market Sundays."),

    // ——— Malibu / coast ———
    place("la-malibu-pier", "Malibu Pier", 34.0365, -118.6765, "sight", "Attraction", "Malibu", 8, "Classic pier with Surfrider Beach waves."),
    place("la-el-matador", "El Matador State Beach", 34.0395, -118.8755, "nature", "Beach", "Malibu", 9, "Sea-stack coves — stairs and tide timing matter."),
    place("la-point-dume", "Point Dume", 34.0015, -118.8065, "nature", "Viewpoint", "Malibu", 8, "Cliff trail and beach with whale-season views."),

    // ——— Koreatown / mid-city ———
    place("la-koreatown", "Koreatown stroll", 34.06, -118.3, "sight", "Attraction", "Koreatown", 7, "Neon plazas, spas, and late Korean dining."),
    place("la-wiltern", "The Wiltern", 34.0615, -118.3085, "sight", "Monument", "Koreatown", 6, "Art Deco theater at Wilshire and Western."),

    // ——— Cafes ———
    place("la-intelligentsia", "Intelligentsia Silver Lake", 34.0905, -118.2755, "cafe", "Cafe", "Silver Lake", 7, "Landmark specialty coffee counter.", { cuisine: "coffee" }),
    place("la-vivaldi", "Verve Coffee Santa Monica", 34.0155, -118.4955, "cafe", "Cafe", "Santa Monica", 7, "Beach-adjacent pour-overs.", { cuisine: "coffee" }),
    place("la-blue-bottle", "Blue Bottle Arts District", 34.0405, -118.2335, "cafe", "Cafe", "Arts District", 6, "Warehouse-district espresso.", { cuisine: "coffee" }),
    place("la-alfred", "Alfred Coffee Melrose", 34.0835, -118.3625, "cafe", "Cafe", "Melrose", 6, "Pink-branded LA coffee stop.", { cuisine: "coffee" }),
    place("la-republic", "Republic of Pie", 34.1675, -118.3775, "cafe", "Cafe", "North Hollywood", 6, "Pie and coffee in NoHo arts.", { cuisine: "coffee pastry" }),
    place("la-dimples", "Dimples Tea Downtown", 34.0485, -118.2495, "cafe", "Cafe", "Downtown", 6, "Bubble tea near the markets.", { cuisine: "tea" }),
    place("la-groundwork", "Groundwork Venice", 33.9885, -118.4695, "cafe", "Cafe", "Venice", 6, "Local roast near Abbot Kinney.", { cuisine: "coffee" }),
    place("la-lamill", "LAMILL Coffee", 34.0955, -118.2855, "cafe", "Cafe", "Silver Lake", 7, "Full cafe with brunch energy.", { cuisine: "coffee brunch" }),

    // ——— Food ———
    place("la-guisados", "Guisados", 34.0475, -118.2205, "food", "Quick meal", "Boyle Heights", 8, "Stewed taco fillings on handmade tortillas.", { cuisine: "mexican" }),
    place("la-bestia", "Bestia", 34.0335, -118.2295, "food", "Restaurant", "Arts District", 9, "Italian warehouse dining — hard reservation.", { cuisine: "italian" }),
    place("la-gjelina", "Gjelina", 33.9895, -118.4645, "food", "Restaurant", "Venice", 8, "Wood-fired California plates on Abbot Kinney.", { cuisine: "californian" }),
    place("la-langer", "Langer's Deli", 34.0605, -118.2765, "food", "Restaurant", "Westlake", 8, "Pastra mi #19 near MacArthur Park.", { cuisine: "american deli" }),
    place("la-mariscos", "Mariscos Jalisco", 34.0435, -118.2145, "food", "Quick meal", "Boyle Heights", 8, "Fried shrimp tacos from the truck.", { cuisine: "mexican seafood" }),
    place("la-n/naka", "n/naka", 34.0305, -118.3855, "food", "Restaurant", "Palms", 9, "Kaiseki temple — book far ahead.", { cuisine: "japanese" }),
    place("la-republique", "République", 34.0645, -118.3435, "food", "Restaurant", "Mid-Wilshire", 8, "French bakery-restaurant in a historic building.", { cuisine: "french bakery" }),
    place("la-howlin", "Howlin' Ray's", 34.0505, -118.2415, "food", "Quick meal", "Chinatown", 8, "Nashville hot chicken — expect a line.", { cuisine: "southern" }),
    place("la-sqirl", "Sqirl", 34.0955, -118.2875, "food", "Restaurant", "Silver Lake", 7, "Rice bowls and jam toast brunch.", { cuisine: "californian brunch" }),
    place("la-hama", "Hama Sushi", 33.9875, -118.4695, "food", "Restaurant", "Venice", 7, "Long-running Venice sushi counter.", { cuisine: "japanese sushi" }),
    place("la-philemon", "Philippe the Original", 34.0595, -118.2375, "food", "Quick meal", "Chinatown", 7, "Claimed French-dip birthplace near Union Station.", { cuisine: "american" }),
    place("la-night-market", "Smorgasburg LA", 34.0395, -118.2325, "food", "Market", "Arts District", 7, "Sunday outdoor food market when running.", { cuisine: "international" }),
    place("la-kogi", "Kogi BBQ truck hunt", 34.06, -118.3, "food", "Quick meal", "Koreatown", 7, "Korean-Mexican taco trucks — check the tracker.", { cuisine: "korean mexican" }),
    place("la-canters", "Canter's Deli", 34.0845, -118.3615, "food", "Restaurant", "Fairfax", 7, "24-hour Fairfax Jewish deli institution.", { cuisine: "american jewish" }),
    place("la-inca", "In-N-Out Burger Hollywood", 34.1015, -118.3385, "food", "Quick meal", "Hollywood", 6, "California burger classic near the Blvd.", { cuisine: "american burgers" }),

    // ——— Nightlife ———
    place("la-apres", "Apotheke LA", 34.0485, -118.2485, "nightlife", "Bar", "Downtown", 7, "Speakeasy cocktails downtown."),
    place("la-broken-mouth", "The Varnish", 34.0475, -118.2495, "nightlife", "Bar", "Downtown", 8, "Hidden cocktail bar behind Cole's."),
    place("la-dormer", "Death & Co Los Angeles", 34.0515, -118.2445, "nightlife", "Bar", "Downtown", 8, "Craft cocktails in the Arts District era."),
    place("la-rooftop-dtla", "Perch DTLA", 34.0495, -118.2525, "nightlife", "Bar", "Downtown", 7, "Rooftop French lounge with skyline views."),
    place("la-troubadour", "Troubadour", 34.0815, -118.3895, "nightlife", "Bar", "West Hollywood", 8, "Legendary live-music club on Santa Monica Blvd."),
    place("la-whisky", "Whisky a Go Go", 34.0908, -118.3855, "nightlife", "Bar", "West Hollywood", 7, "Sunset Strip rock club history."),
    place("la-venice-night", "The Brig Venice", 33.9885, -118.4655, "nightlife", "Bar", "Venice", 6, "Casual Venice night drinks."),
    place("la-k-town-night", "POCHA LA", 34.0625, -118.3085, "nightlife", "Bar", "Koreatown", 7, "Late Korean drinking-food energy."),

    // ——— Stays ———
    place("la-stay-sharon", "Hollywood Roosevelt", 34.1015, -118.3415, "stay", "Hotel", "Hollywood", 8, "Historic Hollywood Blvd hotel beside the Chinese Theatre."),
    place("la-stay-line", "The LINE LA", 34.0625, -118.3085, "stay", "Hotel", "Koreatown", 8, "Design hotel in the heart of K-Town."),
    place("la-stay-proper", "Downtown LA Proper", 34.0465, -118.2565, "stay", "Hotel", "Downtown", 8, "Kelly Wearstler interiors near Broadway."),
    place("la-stay-shutters", "Shutters on the Beach", 34.0125, -118.4985, "stay", "Hotel", "Santa Monica", 9, "Beachfront luxury steps from the pier."),
    place("la-stay-vene", "Hotel Erwin Venice", 33.9875, -118.4735, "stay", "Hotel", "Venice", 7, "Boardwalk-adjacent rooms with roof bar."),
    place("la-stay-beverly", "The Beverly Hills Hotel", 34.0815, -118.4135, "stay", "Hotel", "Beverly Hills", 9, "Pink Palace landmark on Sunset."),
    place("la-stay-ace", "Ace Hotel Downtown LA", 34.0415, -118.2565, "stay", "Hotel", "Downtown", 7, "Theater-tower stay in the historic core."),
    place("la-stay-kimpton", "Kimpton La Peer", 34.0835, -118.3855, "stay", "Hotel", "West Hollywood", 7, "Design-forward WeHo base near Melrose."),
  ],
};
