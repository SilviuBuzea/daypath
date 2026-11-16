import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const miami: CityCatalog = {
  id: "miami",
  name: "Miami, United States",
  aliases: ["miami"],
  center: { lat: 25.7617, lon: -80.1918 },
  places: [
    // ——— South Beach / Art Deco ———
    place("mia-ocean-drive", "Ocean Drive Art Deco stroll", 25.7805, -80.1305, "sight", "Attraction", "South Beach", 9, "Pastel Deco hotels and neon — best at golden hour, not noon."),
    place("mia-lummus", "Lummus Park Beach", 25.7795, -80.1295, "nature", "Beach", "South Beach", 8, "Palm-lined sand strip facing Ocean Drive."),
    place("mia-south-pointe", "South Pointe Park", 25.7645, -80.1335, "nature", "Park", "South Beach", 8, "Pier, lawn, and cruise-ship views at the island tip."),
    place("mia-espa", "Española Way", 25.7865, -80.1335, "sight", "Attraction", "South Beach", 7, "Pedestrian lane of cafes and evening music."),
    place("mia-lincoln", "Lincoln Road Mall", 25.7905, -80.1375, "shopping", "Market", "South Beach", 8, "Open-air shopping spine from bay to beach."),
    place("mia-jewish-museum", "Jewish Museum of Florida", 25.7755, -80.1325, "museum", "Museum", "South Beach", 7, "Synagogue-turned museum on Washington Avenue."),
    place("mia-wolfsonian", "The Wolfsonian–FIU", 25.7815, -80.1335, "museum", "Museum", "South Beach", 8, "Design and propaganda collections in a Deco tower."),
    place("mia-bass", "Bass Museum of Art", 25.7975, -80.1315, "museum", "Museum", "Mid-Beach", 7, "Contemporary and classical shows near Collins Park."),
    place("mia-fillmore", "Fillmore Miami Beach", 25.7925, -80.1335, "sight", "Attraction", "South Beach", 6, "Historic theater for concerts beside the convention center."),
    place("mia-new-world", "New World Center", 25.7945, -80.1335, "sight", "Attraction", "South Beach", 7, "Gehry concert hall with free SoundScape park projections."),

    // ——— Mid-Beach / North Beach ———
    place("mia-fauna", "Faena District stroll", 25.8075, -80.1245, "sight", "Attraction", "Mid-Beach", 7, "Gold-leaf hotel strip and beach clubs north of 32nd."),
    place("mia-north-beach", "North Beach Oceanside Park", 25.8555, -80.1205, "nature", "Beach", "North Beach", 7, "Quieter sand and boardwalk away from South Beach crowds."),
    place("mia-haulovers", "Haulover Park Beach", 25.9035, -80.1225, "nature", "Beach", "North Miami Beach", 7, "Long dune park with kiteboarding and picnic lawns."),
    place("mia-bal-harbour", "Bal Harbour Shops", 25.8885, -80.1255, "shopping", "Mall", "Bal Harbour", 7, "Open-air luxury mall with garden courtyards."),

    // ——— Downtown / Brickell ———
    place("mia-bayfront", "Bayfront Park", 25.7755, -80.1865, "nature", "Park", "Downtown", 7, "Biscayne waterfront lawns and amphitheater."),
    place("mia-perez", "Pérez Art Museum Miami", 25.7858, -80.1862, "museum", "Museum", "Downtown", 9, "Bayfront contemporary art with hanging gardens."),
    place("mia-frost", "Frost Science Museum", 25.7855, -80.1855, "museum", "Museum", "Downtown", 8, "Planetarium and aquarium next to PAMM."),
    place("mia-museum-park", "Museum Park boardwalk", 25.7865, -80.1865, "nature", "Park", "Downtown", 7, "Waterfront link between PAMM and Frost."),
    place("mia-brickell-key", "Brickell Key loop", 25.7645, -80.1885, "nature", "Park", "Brickell", 6, "Island path with skyline and bay views."),
    place("mia-brickell-city", "Brickell City Centre", 25.7665, -80.1925, "shopping", "Mall", "Brickell", 7, "Climate Ribbon mall for downtown shopping."),
    place("mia-history-miami", "HistoryMiami Museum", 25.7755, -80.1965, "museum", "Museum", "Downtown", 7, "City stories from Tequesta to tourism boom."),
    place("mia-freedom-tower", "Freedom Tower", 25.7805, -80.1895, "sight", "Monument", "Downtown", 7, "Mediterranean Revival landmark of Cuban exile arrivals."),
    place("mia-underline", "The Underline Brickell", 25.7655, -80.1945, "nature", "Park", "Brickell", 7, "Linear park under Metrorail — bike and walk corridor."),
    place("mia-miami-river", "Miami Riverwalk", 25.7725, -80.1955, "sight", "Attraction", "Downtown", 6, "Working river frontage with freighters and cafes."),

    // ——— Wynwood / Design District ———
    place("mia-wynwood-walls", "Wynwood Walls", 25.8015, -80.1995, "sight", "Attraction", "Wynwood", 9, "Outdoor street-art compound — go early for photos."),
    place("mia-wynwood-streets", "Wynwood murals walk", 25.8035, -80.1985, "sight", "Attraction", "Wynwood", 8, "Warehouse blocks covered in rotating murals."),
    place("mia-museum-graffiti", "Museum of Graffiti", 25.8018, -80.1998, "museum", "Museum", "Wynwood", 7, "Street-art history beside the Walls."),
    place("mia-design-district", "Design District stroll", 25.8135, -80.1925, "shopping", "Market", "Design District", 8, "Luxury architecture and public art plazas."),
    place("mia-ica", "Institute of Contemporary Art", 25.8125, -80.1915, "museum", "Museum", "Design District", 8, "Free contemporary museum with sculpture garden."),
    place("mia-little-river", "Little River arts pocket", 25.8455, -80.1925, "sight", "Attraction", "Little River", 6, "Emerging galleries north of Wynwood."),

    // ——— Little Havana ———
    place("mia-calle-ocho", "Calle Ocho walk", 25.7655, -80.2195, "sight", "Attraction", "Little Havana", 9, "Cuban cafes, domino park, and cigar shopfronts."),
    place("mia-domino", "Máximo Gómez Domino Park", 25.7658, -80.2205, "sight", "Attraction", "Little Havana", 8, "Afternoon domino games under the trees."),
    place("mia-tower-theater", "Tower Theater", 25.7652, -80.2198, "sight", "Monument", "Little Havana", 6, "Art Deco cinema landmark on Eighth Street."),
    place("mia-cuban-memorial", "Cuban Memorial Boulevard", 25.7665, -80.2155, "sight", "Monument", "Little Havana", 6, "Monuments and eternal flame along SW 13th Avenue."),
    place("mia-ball-and-chain", "Ball & Chain", 25.7655, -80.2215, "nightlife", "Bar", "Little Havana", 8, "Live Latin music in a restored 1930s club."),

    // ——— Coconut Grove / Coral Gables ———
    place("mia-vizcaya", "Vizcaya Museum & Gardens", 25.7445, -80.2105, "museum", "Museum", "Coconut Grove", 10, "Italianate villa and formal gardens on Biscayne Bay."),
    place("mia-barnacle", "The Barnacle Historic State Park", 25.7265, -80.2415, "nature", "Park", "Coconut Grove", 7, "Bayfront cottage estate under tropical hardwoods."),
    place("mia-coco-walk", "CocoWalk & Grove streets", 25.7275, -80.2395, "shopping", "Market", "Coconut Grove", 6, "Village retail and waterfront Marina parks."),
    place("mia-peacock", "Peacock Park", 25.7265, -80.2385, "nature", "Park", "Coconut Grove", 6, "Bay lawns with skyline glimpses."),
    place("mia-biltmore", "Biltmore Hotel Coral Gables", 25.7415, -80.2785, "sight", "Monument", "Coral Gables", 8, "Mediterranean tower hotel — lobby and pool architecture."),
    place("mia-venetian", "Venetian Pool", 25.7465, -80.2745, "nature", "Park", "Coral Gables", 8, "Spring-fed historic pool carved from coral rock."),
    place("mia-miracle-mile", "Miracle Mile", 25.7495, -80.2595, "shopping", "Market", "Coral Gables", 7, "Tree-lined shopping street in the City Beautiful."),
    place("mia-lowe", "Lowe Art Museum", 25.7215, -80.2785, "museum", "Museum", "Coral Gables", 7, "University of Miami collection spanning continents."),
    place("mia-fairchild", "Fairchild Tropical Botanic Garden", 25.6775, -80.2755, "nature", "Park", "Coral Gables", 9, "Palm collections and rainforest paths south of campus."),
    place("mia-matheson", "Matheson Hammock Park", 25.6785, -80.2615, "nature", "Beach", "Coral Gables", 8, "Atoll lagoon beach and mangrove marina."),

    // ——— Key Biscayne / nature ———
    place("mia-crandon", "Crandon Park Beach", 25.7135, -80.1555, "nature", "Beach", "Key Biscayne", 8, "Wide Atlantic beach with picnic groves."),
    place("mia-bill-baggs", "Bill Baggs Cape Florida State Park", 25.6665, -80.1565, "nature", "Park", "Key Biscayne", 9, "Lighthouse trail and calm bay swimming."),
    place("mia-cape-lighthouse", "Cape Florida Lighthouse", 25.6655, -80.1555, "sight", "Monument", "Key Biscayne", 8, "Climb the 1825 lighthouse for island views."),
    place("mia-oleta", "Oleta River State Park", 25.9155, -80.1405, "nature", "Park", "North Miami", 8, "Kayak mangroves and mountain-bike trails."),
    place("mia-everglades-day", "Everglades day trip gateway", 25.7615, -80.55, "nature", "Park", "Everglades", 8, "Airboat and boardwalk day from west Miami roads."),

    // ——— More museums / sights ———
    place("mia-rubell", "Rubell Museum", 25.7955, -80.2055, "museum", "Museum", "Allapattah", 8, "Private contemporary collection in a warehouse campus."),
    place("mia-locust", "Locust Projects", 25.8005, -80.2015, "museum", "Museum", "Wynwood", 6, "Experimental art nonprofit with rotating installs."),
    place("mia-deering", "Deering Estate", 25.6195, -80.3065, "nature", "Park", "Palmetto Bay", 7, "Bayfront estate trails and archaeology tours."),
    place("mia-jungle-island", "Jungle Island", 25.7855, -80.1755, "sight", "Attraction", "Watson Island", 5, "Animal park between mainland and the Beach."),
    place("mia-port", "PortMiami cruise overlook", 25.7785, -80.17, "sight", "Viewpoint", "Downtown", 5, "Watch megaships from MacArthur Causeway pulls."),

    // ——— Cafes ———
    place("mia-versailles", "Versailles Bakery counter", 25.7655, -80.2525, "cafe", "Cafe", "Little Havana", 8, "Cuban coffee window beside the famous restaurant.", { cuisine: "coffee cuban" }),
    place("mia-panther", "Panther Coffee Wynwood", 25.8005, -80.1995, "cafe", "Cafe", "Wynwood", 7, "Local roast bar among the murals.", { cuisine: "coffee" }),
    place("mia-allday", "All Day", 25.7735, -80.1905, "cafe", "Cafe", "Downtown", 7, "Specialty espresso near the river.", { cuisine: "coffee" }),
    place("mia-zak", "Zak the Baker", 25.7995, -80.1985, "cafe", "Cafe", "Wynwood", 7, "Sourdough cafe and bakery hall.", { cuisine: "coffee bakery" }),
    place("mia-lexia", "Lexi's Clean Kitchen cafe", 25.8125, -80.1925, "cafe", "Cafe", "Design District", 6, "Light cafe stop while gallery hopping.", { cuisine: "coffee healthy" }),
    place("mia-bookstore", "Books & Books Coral Gables", 25.7495, -80.2585, "cafe", "Cafe", "Coral Gables", 7, "Indie bookstore cafe on Aragon.", { cuisine: "coffee" }),
    place("mia-tinta", "Tinta y Café", 25.7665, -80.2215, "cafe", "Cafe", "Little Havana", 7, "Cuban breakfast cafecito and toast.", { cuisine: "coffee cuban" }),
    place("mia-suzie", "Suzie Castro Coffee", 25.7905, -80.1365, "cafe", "Cafe", "South Beach", 6, "Beach-side specialty coffee on Lincoln.", { cuisine: "coffee" }),

    // ——— Food ———
    place("mia-versailles-rest", "Versailles Restaurant", 25.7652, -80.2528, "food", "Restaurant", "Little Havana", 9, "Iconic Cuban platters — expect a wait and a scene.", { cuisine: "cuban" }),
    place("mia-joe", "Joe's Stone Crab", 25.7685, -80.1355, "food", "Restaurant", "South Beach", 9, "Seasonal claws — no reservations, go early.", { cuisine: "seafood american" }),
    place("mia-yardbird", "Yardbird Southern Table", 25.7905, -80.1415, "food", "Restaurant", "South Beach", 8, "Fried chicken and biscuits on Lincoln Road.", { cuisine: "southern american" }),
    place("mia-kyu", "KYU", 25.8015, -80.2005, "food", "Restaurant", "Wynwood", 8, "Wood-fired Asian-fusion in a warehouse.", { cuisine: "asian fusion" }),
    place("mia-mandolin", "Mandolin Aegean Bistro", 25.8075, -80.1925, "food", "Restaurant", "Design District", 8, "Greek-Turkish garden tables.", { cuisine: "greek mediterranean" }),
    place("mia-cvi", "CVI.CHE 105", 25.7745, -80.1895, "food", "Restaurant", "Downtown", 8, "Peruvian cebiche downtown.", { cuisine: "peruvian seafood" }),
    place("mia-la-santisima", "La Santisima", 25.7655, -80.2185, "food", "Quick meal", "Little Havana", 7, "Tacos and aguas frescas on Calle Ocho.", { cuisine: "mexican" }),
    place("mia-garcia", "Garcia's Seafood Grille", 25.7725, -80.1985, "food", "Restaurant", "Downtown", 7, "Riverfront fish market restaurant.", { cuisine: "seafood" }),
    place("mia-books-lunch", "Havana 1957", 25.7908, -80.1378, "food", "Restaurant", "South Beach", 7, "Cuban classics a short walk from the beach.", { cuisine: "cuban" }),
    place("mia-stubborn", "Stubborn Seed", 25.7815, -80.1345, "food", "Restaurant", "South Beach", 8, "Chef-driven tasting menus on the Beach.", { cuisine: "american" }),
    place("mia-ariete", "Ariete", 25.7275, -80.2405, "food", "Restaurant", "Coconut Grove", 8, "Cuban-American fine dining in the Grove.", { cuisine: "cuban american" }),
    place("mia-boia", "Boia De", 25.8125, -80.1355, "food", "Restaurant", "Design District", 8, "Tiny Italian-American tasting — book ahead.", { cuisine: "italian" }),
    place("mia-dolores", "Dolores But You Can Call Me Lolita", 25.7665, -80.1915, "food", "Restaurant", "Brickell", 7, "Brickell skyline dining with Latin flair.", { cuisine: "latin american" }),
    place("mia-taco", "Taquiza", 25.8555, -80.1215, "food", "Quick meal", "North Beach", 7, "Blue-corn tacos near quieter sand.", { cuisine: "mexican" }),
    place("mia-pubbelly", "Pubbelly Sushi", 25.8075, -80.1255, "food", "Restaurant", "Mid-Beach", 7, "Creative rolls in the Faena stretch.", { cuisine: "japanese sushi" }),

    // ——— Nightlife ———
    place("mia-lIV", "LIV Nightclub", 25.8185, -80.1225, "nightlife", "Bar", "Mid-Beach", 8, "Megaclub inside the Fontainebleau — dress code applies."),
    place("mia-story", "Story", 25.7705, -80.1335, "nightlife", "Bar", "South Beach", 7, "High-production club nights on the Beach."),
    place("mia-sweet", "Sweet Liberty", 25.7905, -80.1325, "nightlife", "Bar", "South Beach", 8, "Award-winning cocktails without velvet-rope chaos."),
    place("mia-broken", "Broken Shaker", 25.7905, -80.1285, "nightlife", "Bar", "South Beach", 8, "Garden cocktails at Freehand — casual vibe."),
    place("mia-bodega", "Bodega Taqueria y Tequila", 25.7815, -80.1365, "nightlife", "Bar", "South Beach", 7, "Hidden-door taco bar and late drinks."),
    place("mia-raffles", "R House Wynwood", 25.8015, -80.1985, "nightlife", "Bar", "Wynwood", 7, "Drag brunch and colorful evening dining."),
    place("mia-tobacco", "Tobacco Road legacy area", 25.7655, -80.1955, "nightlife", "Bar", "Brickell", 6, "Brickell nightlife blocks near the river."),
    place("mia-grove-night", "Coconut Grove marina bars", 25.7275, -80.2375, "nightlife", "Bar", "Coconut Grove", 6, "Waterfront drinks after a Grove walk."),

    // ——— Stays ———
    place("mia-stay-fontainebleau", "Fontainebleau Miami Beach", 25.8182, -80.1222, "stay", "Hotel", "Mid-Beach", 9, "Iconic Mid-Beach resort with pool scene and beach access."),
    place("mia-stay-1hotel", "1 Hotel South Beach", 25.7925, -80.1285, "stay", "Hotel", "South Beach", 9, "Eco-luxury base on Collins with roof garden."),
    place("mia-stay-edition", "Miami Beach EDITION", 25.7935, -80.1288, "stay", "Hotel", "South Beach", 8, "Design hotel with beach club and ice rink lobby."),
    place("mia-stay-east", "EAST Miami", 25.7665, -80.1915, "stay", "Hotel", "Brickell", 8, "Brickell City Centre stay for downtown plans."),
    place("mia-stay-sifa", "SLS Brickell", 25.7615, -80.1925, "stay", "Hotel", "Brickell", 7, "Style hotel near the Underline and restaurants."),
    place("mia-stay-freehand", "Freehand Miami", 25.7908, -80.1282, "stay", "Hostel", "South Beach", 7, "Hostel-hotel hybrid with Broken Shaker on site."),
    place("mia-stay-grove", "Mayfair House Coconut Grove", 25.7285, -80.2405, "stay", "Hotel", "Coconut Grove", 7, "Village base near Vizcaya and the marina."),
    place("mia-stay-gables", "The Biltmore Hotel stay", 25.7415, -80.2785, "stay", "Hotel", "Coral Gables", 9, "Historic Gables landmark for quieter nights."),
  ],
};
