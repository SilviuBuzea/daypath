import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const newyork: CityCatalog = {
  id: "newyork",
  name: "New York, United States",
  aliases: ["new york", "nyc", "new york city"],
  center: { lat: 40.7128, lon: -74.006 },
  places: [
    // ——— Midtown / Times Square ———
    place("nyc-times", "Times Square", 40.758, -73.9855, "sight", "Attraction", "Times Square", 9, "Bright billboard heart — better at night than midday gridlock."),
    place("nyc-rockefeller", "Top of the Rock", 40.7587, -73.9787, "sight", "Viewpoint", "Midtown", 9, "Central Park–framed skyline view — often clearer than Empire State."),
    place("nyc-empire", "Empire State Building", 40.7484, -73.9857, "sight", "Viewpoint", "Midtown", 9, "Art Deco classic — book 102nd floor if queues allow."),
    place("nyc-bryant", "Bryant Park", 40.7536, -73.9832, "nature", "Park", "Midtown", 7, "Lawn and winter village beside the library."),
    place("nyc-library", "New York Public Library", 40.7523, -73.9938, "sight", "Monument", "Midtown", 8, "Rose Main Reading Room and lion-flanked steps."),
    place("nyc-grand-central", "Grand Central Terminal", 40.7527, -73.9772, "sight", "Monument", "Midtown", 8, "Ceiling constellations and Oyster Bar under the clock."),
    place("nyc-chrysler", "Chrysler Building exterior", 40.7516, -73.9755, "sight", "Monument", "Midtown", 7, "Art Deco crown — best admired from Lexington or a viewpoint."),
    place("nyc-moma", "MoMA", 40.7614, -73.9776, "museum", "Museum", "Midtown", 10, "Modern art anchor — free Friday evenings are crowded but worth it."),
    place("nyc-morgan", "Morgan Library & Museum", 40.7493, -73.9817, "museum", "Museum", "Midtown", 8, "Gilded interiors and manuscript treasures near Madison."),
    place("nyc-summit", "SUMMIT One Vanderbilt", 40.7527, -73.9789, "sight", "Viewpoint", "Midtown", 8, "Mirror-filled observation deck east of Grand Central."),

    // ——— Central Park ———
    place("nyc-cp-bethesda", "Bethesda Terrace", 40.7736, -73.9708, "sight", "Attraction", "Central Park", 8, "Arches and fountain — classic park photo stop."),
    place("nyc-cp-bow", "Bow Bridge", 40.7758, -73.9718, "sight", "Attraction", "Central Park", 7, "Cast-iron bridge over the lake."),
    place("nyc-cp-met", "The Met Fifth Avenue", 40.7794, -73.9632, "museum", "Museum", "Upper East Side", 10, "Plan by wing — Egyptian, American, and rooftop seasonal."),
    place("nyc-cp-strawberry", "Strawberry Fields", 40.7753, -73.9748, "sight", "Monument", "Central Park", 6, "Imagine mosaic near the Dakota."),
    place("nyc-cp-reservoir", "Reservoir running loop", 40.7855, -73.9615, "nature", "Park", "Central Park", 7, "Jogging path with west-side skyline views."),
    place("nyc-cp-zoo", "Central Park Zoo", 40.7678, -73.9718, "sight", "Attraction", "Central Park", 6, "Compact zoo — good with kids after playground time."),
    place("nyc-cp-wollman", "Wollman Rink area", 40.7678, -73.9658, "nature", "Park", "Central Park", 6, "Seasonal rink and skating energy at the park's south end."),

    // ——— Downtown / Financial ———
    place("nyc-statue", "Statue of Liberty & Ellis Island", 40.6892, -74.0445, "sight", "Monument", "Liberty Island", 10, "Reserve crown or pedestal early — ferries from Battery Park."),
    place("nyc-wall", "Wall Street & Charging Bull", 40.706, -74.009, "sight", "Attraction", "Financial District", 7, "Exchange facades and bronze bull photo stop."),
    place("nyc-911", "9/11 Memorial & Museum", 40.7115, -74.0134, "museum", "Museum", "Financial District", 10, "Reflecting pools and powerful underground history."),
    place("nyc-owtc", "One World Observatory", 40.713, -74.0132, "sight", "Viewpoint", "Financial District", 8, "Glass elevator rise above the memorial footprint."),
    place("nyc-brooklyn-bridge", "Brooklyn Bridge walk", 40.7061, -73.9969, "sight", "Attraction", "Lower Manhattan", 9, "Sunrise or sunset walk to DUMBO — stay in the bike lane."),
    place("nyc-cityhall", "City Hall Park", 40.7128, -74.006, "nature", "Park", "Civic Center", 6, "Calm lawn ringed by historic government buildings."),
    place("nyc-south-street", "South Street Seaport", 40.7075, -74.003, "sight", "Attraction", "Seaport", 6, "Waterfront pier stroll and views toward Brooklyn."),

    // ——— SoHo / Village / Chelsea ———
    place("nyc-soho", "SoHo cast-iron stroll", 40.7233, -74.003, "shopping", "Market", "SoHo", 7, "Boutiques under wrought-iron facades."),
    place("nyc-washington-square", "Washington Square Park", 40.7308, -73.9973, "nature", "Park", "Greenwich Village", 7, "Arch, chess tables, and NYU energy."),
    place("nyc-west-village", "West Village streets", 40.7355, -74.0035, "sight", "Attraction", "West Village", 7, "Townhouse lanes and classic NYC cafe corners."),
    place("nyc-highline", "The High Line", 40.748, -74.0048, "nature", "Park", "Chelsea", 9, "Elevated rail-park — enter at Gansevoort and walk north."),
    place("nyc-chelsea-market", "Chelsea Market", 40.7424, -74.0061, "shopping", "Market", "Chelsea", 8, "Food hall and shops under the old factory roofs."),
    place("nyc-whitney", "Whitney Museum", 40.7396, -74.0089, "museum", "Museum", "Meatpacking", 8, "American art at the High Line's southern tip."),
    place("nyc-little-island", "Little Island", 40.745, -74.0095, "nature", "Park", "Chelsea", 7, "Pier park with free timed entry in peak season."),
    place("nyc-flatiron", "Flatiron Building", 40.7411, -73.9897, "sight", "Monument", "Flatiron", 7, "Triangle landmark at Madison Square Park."),

    // ——— Uptown / Museums ———
    place("nyc-natural-history", "American Museum of Natural History", 40.7813, -73.974, "museum", "Museum", "Upper West Side", 9, "Dinosaur halls and planetarium — full-day potential."),
    place("nyc-guggenheim", "Guggenheim Museum", 40.783, -73.959, "museum", "Museum", "Upper East Side", 8, "Frank Lloyd Wright spiral with rotating modern shows."),
    place("nyc-frick", "Frick Collection", 40.7713, -73.9675, "museum", "Museum", "Upper East Side", 8, "Old Masters in a Gilded Age mansion."),
    place("nyc-lincoln", "Lincoln Center", 40.7725, -73.9835, "sight", "Attraction", "Upper West Side", 7, "Performing-arts campus — fountain plaza at dusk."),
    place("nyc-apollo", "Apollo Theater", 40.8098, -73.9501, "sight", "Attraction", "Harlem", 7, "Harlem music institution — Amateur Night is legendary."),
    place("nyc-harlem", "Harlem brownstone stroll", 40.8115, -73.9465, "sight", "Attraction", "Harlem", 6, "Architecture and gospel-history neighborhood walk."),

    // ——— Brooklyn ———
    place("nyc-dumbo", "DUMBO waterfront", 40.7033, -73.989, "sight", "Viewpoint", "Brooklyn", 8, "Manhattan Bridge framing shots on Washington Street."),
    place("nyc-brooklyn-bridge-park", "Brooklyn Bridge Park", 40.7024, -73.9965, "nature", "Park", "Brooklyn", 8, "Piers, Jane's Carousel, and skyline picnics."),
    place("nyc-brooklyn-museum", "Brooklyn Museum", 40.6712, -73.9638, "museum", "Museum", "Brooklyn", 8, "Strong encyclopedic collection beside Prospect Park."),
    place("nyc-prospect", "Prospect Park", 40.6602, -73.969, "nature", "Park", "Brooklyn", 8, "Brooklyn's central green — meadow and lake loops."),
    place("nyc-williamsburg", "Williamsburg waterfront", 40.7215, -73.957, "sight", "Attraction", "Brooklyn", 7, "Smorgasburg days and Manhattan skyline from the pier."),
    place("nyc-domino", "Domino Park", 40.7145, -73.9705, "nature", "Park", "Williamsburg", 6, "Refinery-turned riverfront with skyline views."),

    // ——— More sights & shopping ———
    place("nyc-fifth", "Fifth Avenue Midtown stroll", 40.763, -73.9735, "shopping", "Market", "Midtown", 7, "Flagship shopping between Rockefeller and Central Park."),
    place("nyc-macys", "Macy's Herald Square", 40.7508, -73.9896, "shopping", "Market", "Midtown", 6, "Classic department store under the big signs."),
    place("nyc-ues-museum-mile", "Museum Mile stroll", 40.779, -73.9595, "sight", "Attraction", "Upper East Side", 6, "Park-facing museums along Fifth's upper stretch."),
    place("nyc-stpatrick", "St Patrick's Cathedral", 40.7585, -73.976, "sight", "Monument", "Midtown", 7, "Neo-Gothic church opposite Rockefeller Center."),
    place("nyc-un", "United Nations Headquarters tour", 40.7489, -73.968, "sight", "Attraction", "Turtle Bay", 6, "Guided UN tour when sessions allow — passport ID required."),
    place("nyc-tenement", "Tenement Museum", 40.7188, -73.9901, "museum", "Museum", "Lower East Side", 8, "Guided immigrant-apartment stories — book timed tours."),
    place("nyc-nych", "New-York Historical Society", 40.7792, -73.9742, "museum", "Museum", "Upper West Side", 7, "City history and Tiffany lamps beside Central Park."),

    // ——— Cafes ———
    place("nyc-blue-bottle", "Blue Bottle Chelsea", 40.7425, -74.0055, "cafe", "Cafe", "Chelsea", 7, "Pour-overs near the High Line's Gansevoort end.", { cuisine: "coffee" }),
    place("nyc-stumptown", "Stumptown Ace Hotel", 40.7458, -73.9882, "cafe", "Cafe", "Flatiron", 7, "Roastery cafe in the Ace lobby.", { cuisine: "coffee" }),
    place("nyc-la-colombe", "La Colombe SoHo", 40.7225, -74.0015, "cafe", "Cafe", "SoHo", 6, "Draft lattes on busy Prince Street.", { cuisine: "coffee" }),
    place("nyc-devocion", "Devoción", 40.7165, -73.9615, "cafe", "Cafe", "Williamsburg", 7, "Wall of live plants and fresh Colombian coffee.", { cuisine: "coffee" }),
    place("nyc-yellow", "Yellow Rose diner coffee", 40.7355, -74.0055, "cafe", "Cafe", "West Village", 6, "Tex-Mex diner with strong breakfast coffee.", { cuisine: "coffee" }),
    place("nyc-maman", "Maman Greenwich Village", 40.7305, -74.0015, "cafe", "Cafe", "Greenwich Village", 6, "French-inspired pastries and lattes.", { cuisine: "coffee pastry" }),
    place("nyc-birch", "Birch Coffee", 40.7625, -73.9695, "cafe", "Cafe", "Upper East Side", 6, "Neighborhood roast bar near Museum Mile.", { cuisine: "coffee" }),
    place("nyc-intelligentsia", "Intelligentsia Chelsea", 40.7445, -74.0015, "cafe", "Cafe", "Chelsea", 6, "Specialty espresso with High Line adjacency.", { cuisine: "coffee" }),

    // ——— Food ———
    place("nyc-katz", "Katz's Delicatessen", 40.7223, -73.9874, "food", "Restaurant", "Lower East Side", 9, "Pastrami on rye — go off-peak to avoid the ticket chaos.", { cuisine: "american deli" }),
    place("nyc-joe-pizza", "Joe's Pizza Greenwich Village", 40.7308, -74.0025, "food", "Quick meal", "Greenwich Village", 8, "Classic NY slice fold on Carmine Street.", { cuisine: "pizza italian" }),
    place("nyc-lombardi", "Lombardi's", 40.7216, -73.9956, "food", "Restaurant", "Little Italy", 7, "Coal-oven pizza claim in Nolita.", { cuisine: "pizza italian" }),
    place("nyc-levain", "Levain Bakery", 40.7799, -73.9777, "food", "Quick meal", "Upper West Side", 8, "Warm chocolate-chip cookies the size of your palm.", { cuisine: "bakery pastry" }),
    place("nyc-russ", "Russ & Daughters Cafe", 40.7223, -73.9885, "food", "Restaurant", "Lower East Side", 8, "Appetizing classics — bagel, lox, and schmear done right.", { cuisine: "american jewish" }),
    place("nyc-shake", "Shake Shack Madison Square", 40.7402, -73.9882, "food", "Quick meal", "Flatiron", 6, "Burger-and-shake lunch by the park.", { cuisine: "american" }),
    place("nyc-freemans", "Freemans", 40.7205, -73.9925, "food", "Restaurant", "Lower East Side", 7, "Hunter-chic American at the end of an alley.", { cuisine: "american" }),
    place("nyc-peter-luger", "Peter Luger Steak House", 40.7099, -73.9625, "food", "Restaurant", "Williamsburg", 9, "Cash-only steak institution — reserve or brave the wait.", { cuisine: "american steakhouse" }),
    place("nyc-lilia", "Lilia", 40.7215, -73.9585, "food", "Restaurant", "Williamsburg", 8, "Wood-fired Italian — hard reservation, worth trying.", { cuisine: "italian" }),
    place("nyc-xi-an", "Xi'an Famous Foods", 40.7425, -73.9885, "food", "Quick meal", "Midtown", 7, "Spicy hand-pulled noodles on the cheap.", { cuisine: "chinese" }),
    place("nyc-chinatown", "Chinatown dumpling run", 40.7155, -73.9985, "food", "Quick meal", "Chinatown", 7, "Soup dumplings and noodle shops on Mott.", { cuisine: "chinese" }),
    place("nyc-kek", "Keki Modern Cakes", 40.7185, -73.9975, "food", "Quick meal", "Chinatown", 6, "Japanese-style cheesecakes for a sweet stop.", { cuisine: "bakery asian" }),
    place("nyc-essa", "Ess-a-Bagel", 40.7565, -73.9705, "food", "Quick meal", "Midtown", 7, "Oversized bagels near Third Avenue.", { cuisine: "american" }),
    place("nyc-grand", "Grand Central Oyster Bar", 40.7525, -73.9775, "food", "Restaurant", "Midtown", 8, "Lunch counters under Guastavino vaults.", { cuisine: "american seafood" }),
    place("nyc-eleven-madison", "Eleven Madison Park area", 40.7415, -73.9865, "food", "Restaurant", "Flatiron", 8, "Michelin apex dining — book far ahead.", { cuisine: "american" }),
    place("nyc-torrisi", "Torrisi Bar & Restaurant", 40.7215, -73.9945, "food", "Restaurant", "Nolita", 8, "Italian-American tasting energy downtown.", { cuisine: "italian american" }),
    place("nyc-vegan", "abcV plant-based", 40.7355, -73.9895, "food", "Restaurant", "Flatiron", 6, "Vegetable-forward tasting near the park.", { cuisine: "vegan vegetarian" }),
    place("nyc-halal", "Halal Guys cart", 40.7618, -73.9792, "food", "Quick meal", "Midtown", 6, "Famous chicken-over-rice — know your white sauce limits.", { cuisine: "middle_eastern halal" }),

    // ——— Nightlife ———
    place("nyc-attaboy", "Attaboy", 40.7195, -73.9895, "nightlife", "Bar", "Lower East Side", 8, "No-menu speakeasy — trust the bartender."),
    place("nyc-death", "Death & Co", 40.7265, -73.9845, "nightlife", "Bar", "East Village", 8, "Pioneer cocktail den — reservations help on weekends."),
    place("nyc-please", "Please Don't Tell", 40.7262, -73.9838, "nightlife", "Bar", "East Village", 7, "Phone-booth entry speakeasy behind a hot-dog shop."),
    place("nyc-beam", "Beam Me Up lounge", 40.7585, -73.9855, "nightlife", "Bar", "Times Square", 6, "Rooftop drinks when you want views without observation decks."),
    place("nyc-smith", "Smithsonian jazz club area", 40.7315, -74.0025, "nightlife", "Bar", "West Village", 7, "Village jazz bars and late wine rooms."),
    place("nyc-brooklyn-night", "Williamsburg bar crawl", 40.7145, -73.9615, "nightlife", "Bar", "Williamsburg", 7, "Breweries and cocktail rooms along Bedford."),
    place("nyc-rooftop", "230 Fifth rooftop", 40.7435, -73.9885, "nightlife", "Bar", "Flatiron", 6, "Empire State views with lounge seating."),
    place("nyc-house", "House of Yes", 40.7065, -73.9215, "nightlife", "Bar", "Bushwick", 7, "Theatrical Brooklyn club nights — check the calendar."),

    // ——— Stays ———
    place("nyc-stay-plaza", "The Plaza Hotel area", 40.7645, -73.9745, "stay", "Hotel", "Midtown", 9, "Fifth Avenue landmark base at Central Park's southeast corner."),
    place("nyc-stay-peninsula", "The Peninsula New York area", 40.7615, -73.9755, "stay", "Hotel", "Midtown", 9, "Luxury on Fifth with easy Rockefeller access."),
    place("nyc-stay-standard", "The Standard High Line", 40.7408, -74.0075, "stay", "Hotel", "Meatpacking", 8, "Glass tower over the High Line and Hudson."),
    place("nyc-stay-crosby", "Crosby Street Hotel area", 40.7235, -74.0005, "stay", "Hotel", "SoHo", 8, "Boutique SoHo base for downtown walking."),
    place("nyc-stay-beekman", "The Beekman Hotel", 40.7112, -74.0065, "stay", "Hotel", "Financial District", 8, "Atrium landmark for downtown and bridge walks."),
    place("nyc-stay-nomad", "NoMad Hotel area", 40.7445, -73.9885, "stay", "Hotel", "Nomad", 8, "Flatiron-adjacent chic for Midtown and Chelsea."),
    place("nyc-stay-washington", "The Jane Hotel", 40.7385, -74.0095, "stay", "Hotel", "West Village", 7, "Tiny ship-cabin rooms in the Village."),
    place("nyc-stay-yls", "YOTEL New York", 40.7595, -73.9935, "stay", "Hotel", "Hell's Kitchen", 6, "Compact tech hotel near Times Square."),
    place("nyc-stay-hi-nyc", "HI NYC Hostel", 40.7915, -73.9685, "stay", "Hostel", "Upper West Side", 7, "Large hostel on Amsterdam near the museums."),
    place("nyc-stay-cel", "The Local NY Hostel", 40.7145, -73.9505, "stay", "Hostel", "Long Island City", 6, "Queens rooftop hostel with fast Manhattan subway."),
    place("nyc-stay-jazz", "Jazz on the Park Hostel", 40.7825, -73.9735, "stay", "Hostel", "Upper West Side", 5, "Budget beds beside Central Park."),
    place("nyc-stay-american", "American Dream Hostel", 40.7345, -73.9825, "stay", "Hostel", "East Village", 5, "Small East Village walk-up hostel."),
    place("nyc-stay-guest-harlem", "Harlem Guest House", 40.8085, -73.9485, "stay", "Guest house", "Harlem", 6, "Brownstone guesthouse near Apollo nights."),
    place("nyc-stay-guest-park", "Central Park West Guest House", 40.7785, -73.9795, "stay", "Guest house", "Upper West Side", 6, "Residential stay for museum-heavy itineraries."),
    place("nyc-stay-apt-soho", "SoHo loft apartment", 40.7245, -74.0015, "stay", "Apartment", "SoHo", 7, "Cast-iron loft living for longer NYC visits."),
    place("nyc-stay-apt-brooklyn", "Brooklyn Heights apartment", 40.6965, -73.9935, "stay", "Apartment", "Brooklyn", 7, "Promenade views with bridge walks home."),
    place("nyc-stay-apt-chelsea", "Chelsea apartment stay", 40.7465, -74.0015, "stay", "Apartment", "Chelsea", 6, "Self-catering near the High Line and Market."),
    place("nyc-stay-apt-williamsburg", "Williamsburg apartment stay", 40.7135, -73.9575, "stay", "Apartment", "Williamsburg", 6, "Brooklyn base for nightlife and DUMBO days."),
    place("nyc-stay-arlo", "Arlo NoMad", 40.7455, -73.9885, "stay", "Hotel", "Nomad", 7, "Micro-room hotel popular with younger travelers."),
  ],
};