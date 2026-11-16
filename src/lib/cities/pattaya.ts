import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const pattaya: CityCatalog = {
  id: "pattaya",
  name: "Pattaya, Thailand",
  aliases: ["pattaya"],
  center: { lat: 12.9236, lon: 100.8825 },
  places: [
    // ——— Central Pattaya / Beach Road ———
    place("pty-beach-road", "Pattaya Beach Road", 12.9275, 100.8775, "sight", "Attraction", "Central Pattaya", 8, "Bayfront promenade with beach and hotels."),
    place("pty-walking-street", "Walking Street", 12.925, 100.8685, "nightlife", "Bar", "South Pattaya", 9, "Neon nightlife corridor at the south end."),
    place("pty-bali-hai", "Bali Hai Pier", 12.9185, 100.8655, "sight", "Attraction", "South Pattaya", 7, "Ferry pier for islands and sunset photos."),
    place("pty-central-beach", "Central Pattaya Beach", 12.933, 100.882, "nature", "Beach", "Central Pattaya", 7, "Main bay swimming strip — busy weekends."),
    place("pty-north-beach", "North Pattaya Beach", 12.95, 100.888, "nature", "Beach", "North Pattaya", 7, "Slightly calmer sand toward Naklua."),
    place("pty-big-buddha", "Big Buddha Hill (Pattaya)", 12.9155, 100.8755, "sight", "Monument", "South Pattaya", 8, "Hilltop Buddha with bay overlook."),
    place("pty-pratamnak", "Pratumnak Hill", 12.92, 100.87, "nature", "Viewpoint", "Pratumnak", 8, "Ridge between Pattaya and Jomtien."),
    place("pty-viewpoint", "Pattaya Viewpoint", 12.918, 100.872, "nature", "Viewpoint", "Pratumnak", 9, "Classic curve-of-the-bay panorama."),
    place("pty-wat-phra-yai", "Wat Phra Yai", 12.916, 100.876, "sight", "Monument", "Pratumnak", 7, "Temple complex around the Big Buddha."),
    place("pty-sanctuary", "The Sanctuary of Truth", 12.973, 100.889, "sight", "Monument", "Naklua", 10, "All-wood temple carving masterpiece on the north shore.", { flags: ["ticket"] }),
    place("pty-bottleshark", "Bottleshark / art corners", 12.928, 100.878, "sight", "Attraction", "Central Pattaya", 5, "Street-art pockets near beach hotels."),

    // ——— Jomtien / south ———
    place("pty-jomtien", "Jomtien Beach", 12.895, 100.865, "nature", "Beach", "Jomtien", 9, "Longer, calmer beach south of the hill."),
    place("pty-dongtan", "Dongtan Beach", 12.91, 100.86, "nature", "Beach", "Jomtien", 7, "Northern Jomtien stretch by Pratumnak."),
    place("pty-buddha-jomtien", "Wat Khao Phra Bat", 12.905, 100.87, "sight", "Monument", "Jomtien", 5, "Local hill temple above Jomtien."),
    place("pty-underwater", "Underwater World Pattaya", 12.888, 100.875, "museum", "Museum", "Jomtien", 6, "Tunnel aquarium on the Jomtien strip.", { flags: ["ticket"] }),
    place("pty-floating", "Pattaya Floating Market", 12.87, 100.9, "shopping", "Market", "South Pattaya", 7, "Canal market with boats and snacks.", { flags: ["touristy"] }),
    place("pty-nong-nooch", "Nong Nooch Tropical Garden", 12.766, 100.995, "nature", "Garden", "South of Pattaya", 9, "Vast gardens, shows, and sculptures — half-day.", { flags: ["ticket"] }),

    // ——— Naklua / north ———
    place("pty-naklua", "Naklua Beach", 12.965, 100.885, "nature", "Beach", "Naklua", 7, "Quieter north bay with fishing roots."),
    place("pty-wong-amat", "Wong Amat Beach", 12.975, 100.885, "nature", "Beach", "Naklua", 8, "Upscale hotel beach north of town."),
    place("pty-khao-takiab", "Khao Takiab area", 12.98, 100.89, "nature", "Viewpoint", "Naklua", 6, "Headland walks near Sanctuary of Truth."),
    place("pty-bangkok-airways", "Airport shuttle hubs", 12.94, 100.89, "sight", "Attraction", "Central Pattaya", 4, "Orientation for U-Tapao / Bangkok transfers."),

    // ——— Islands ———
    place("pty-koh-larn", "Koh Larn (Coral Island)", 12.915, 100.775, "nature", "Beach", "Koh Larn", 9, "Day-trip island with clear water beaches."),
    place("pty-tawaen", "Tawaen Beach", 12.925, 100.77, "nature", "Beach", "Koh Larn", 8, "Main ferry-landing beach on Koh Larn."),
    place("pty-sangwan", "Sangwan Beach", 12.91, 100.78, "nature", "Beach", "Koh Larn", 7, "Quieter cove on the island's south."),
    place("pty-koh-sak", "Koh Sak", 12.94, 100.79, "nature", "Beach", "Offshore", 7, "Tiny sandbar island for day boats."),
    place("pty-ferry", "Bali Hai island ferries", 12.9188, 100.866, "sight", "Attraction", "South Pattaya", 7, "Scheduled boats to Koh Larn."),

    // ——— Museums & attractions ———
    place("pty-tiffany", "Tiffany's Show", 12.935, 100.883, "nightlife", "Bar", "Central Pattaya", 7, "Famous cabaret theatre — book seats.", { flags: ["ticket", "touristy"] }),
    place("pty-alcazar", "Alcazar Cabaret", 12.938, 100.885, "nightlife", "Bar", "Central Pattaya", 7, "Rival cabaret spectacular.", { flags: ["ticket"] }),
    place("pty-ripley", "Ripley's Believe It or Not", 12.928, 100.882, "museum", "Museum", "Central Pattaya", 5, "Oddities museum in Royal Garden Plaza.", { flags: ["ticket", "touristy"] }),
    place("pty-art-museum", "Pattaya Art & Culture galleries", 12.93, 100.88, "museum", "Museum", "Central Pattaya", 5, "Small rotating art spaces downtown."),
    place("pty-teddy", "Teddy Bear Museum", 12.92, 100.875, "museum", "Museum", "South Pattaya", 4, "Family photo museum — very touristy.", { flags: ["touristy"] }),
    place("pty-mini-siam", "Mini Siam", 12.95, 100.905, "sight", "Attraction", "East Pattaya", 6, "Miniature landmarks park.", { flags: ["ticket", "touristy"] }),
    place("pty-cartoon", "Cartoon Network Amazone", 12.85, 100.95, "sight", "Attraction", "East Pattaya", 6, "Water park for families.", { flags: ["ticket"] }),
    place("pty-ramayana", "Ramayana Water Park", 12.86, 100.96, "sight", "Attraction", "East Pattaya", 7, "Large water park inland.", { flags: ["ticket"] }),
    place("pty-terminal21", "Terminal 21 Pattaya", 12.95, 100.892, "shopping", "Mall", "North Pattaya", 8, "Airport-themed mall with rooftop views."),
    place("pty-aviation", "Terminal 21 rooftop deck", 12.9505, 100.8925, "sight", "Viewpoint", "North Pattaya", 7, "Bay panorama from the mall roof."),
    place("pty-million-year", "Million Years Stone Park", 12.85, 100.92, "nature", "Park", "East Pattaya", 6, "Rock garden and crocodile shows.", { flags: ["ticket"] }),
    place("pty-khao-chi", "Khao Chi Chan Buddha", 12.765, 100.95, "sight", "Monument", "South of Pattaya", 8, "Laser-carved Buddha cliff near Nong Nooch."),
    place("pty-wat-yan", "Wat Yan Sangwararam", 12.8, 100.95, "sight", "Monument", "South of Pattaya", 7, "Large royal temple complex inland."),
    place("pty-truth", "Sanctuary workshop area", 12.972, 100.888, "museum", "Museum", "Naklua", 7, "See woodcarvers at work near the sanctuary."),

    // ——— Nature & parks ———
    place("pty-phra-tamnak-park", "Phra Tamnak Park", 12.919, 100.873, "nature", "Park", "Pratumnak", 7, "Green ridge park with bay views."),
    place("pty-kao-chi", "Khao Chi Chan grounds", 12.766, 100.951, "nature", "Park", "South of Pattaya", 6, "Lawn and temple grounds under the Buddha cliff."),
    place("pty-reservoir", "Map Prachan Reservoir", 12.94, 100.95, "nature", "Park", "East Pattaya", 6, "Local cycling and picnic reservoir."),
    place("pty-ko-lane-hike", "Koh Larn hill trails", 12.92, 100.772, "nature", "Park", "Koh Larn", 6, "Scooter or hike between island beaches."),

    // ——— Shopping ———
    place("pty-central-marina", "Central Festival Pattaya Beach", 12.935, 100.88, "shopping", "Mall", "Central Pattaya", 8, "Beachfront mall with cinema and dining."),
    place("pty-royal-garden", "Royal Garden Plaza", 12.9285, 100.8815, "shopping", "Mall", "Central Pattaya", 6, "Older mall with Ripley's and shops."),
    place("pty-avenue", "The Avenue Pattaya", 12.94, 100.89, "shopping", "Mall", "Central Pattaya", 6, "Open-air lifestyle plaza."),
    place("pty-night-market", "Thepprasit Night Market", 12.905, 100.88, "shopping", "Market", "Jomtien", 8, "Weekend night market south of town."),
    place("pty-walking-shops", "Walking Street shops", 12.9255, 100.869, "shopping", "Market", "South Pattaya", 5, "Souvenir stalls mixed with nightlife."),
    place("pty-naklua-market", "Naklua fresh market", 12.962, 100.888, "shopping", "Market", "Naklua", 6, "Morning produce and seafood."),
    place("pty-outlet", "Premium Outlet nearby", 13.05, 101.05, "shopping", "Mall", "East", 5, "Day trip outlet shopping inland."),

    // ——— Cafes ———
    place("pty-starbucks-beach", "Starbucks Beach Road", 12.932, 100.881, "cafe", "Cafe", "Central Pattaya", 5, "Bay-view chain coffee.", { cuisine: "coffee" }),
    place("pty-amazon", "Café Amazon Terminal 21", 12.95, 100.892, "cafe", "Cafe", "North Pattaya", 5, "Thai chain iced coffee in the mall.", { cuisine: "coffee" }),
    place("pty-roast", "Specialty cafés Pratumnak", 12.921, 100.871, "cafe", "Cafe", "Pratumnak", 7, "Quieter hillside coffee rooms.", { cuisine: "coffee" }),
    place("pty-jomtien-cafe", "Jomtien beach cafés", 12.896, 100.866, "cafe", "Cafe", "Jomtien", 6, "Smoothie and brunch stops on the sand.", { cuisine: "cafe juice" }),
    place("pty-bakery", "European bakeries Central", 12.934, 100.883, "cafe", "Cafe", "Central Pattaya", 6, "Croissants and espresso for hotel guests.", { cuisine: "bakery coffee" }),
    place("pty-naklua-cafe", "Naklua café lane", 12.964, 100.886, "cafe", "Cafe", "Naklua", 6, "Local coffee near Wong Amat.", { cuisine: "coffee" }),
    place("pty-rooftop-cafe", "Terminal 21 café decks", 12.95, 100.8922, "cafe", "Cafe", "North Pattaya", 6, "Casual drinks with rooftop breeze.", { cuisine: "coffee" }),
    place("pty-vegan-cafe", "Vegan cafés Jomtien", 12.9, 100.868, "cafe", "Cafe", "Jomtien", 6, "Plant-based brunches south of the hill.", { cuisine: "vegan cafe" }),

    // ——— Food ———
    place("pty-seafood-naklua", "Naklua seafood restaurants", 12.966, 100.887, "food", "Restaurant", "Naklua", 8, "Fresh catch dinners away from Walking Street.", { cuisine: "seafood thai" }),
    place("pty-somtum", "Som tum stalls Beach Road", 12.93, 100.879, "food", "Quick meal", "Central Pattaya", 7, "Papaya salad and grilled chicken.", { cuisine: "thai isaaan" }),
    place("pty-indian", "Indian restaurants Second Road", 12.932, 100.885, "food", "Restaurant", "Central Pattaya", 6, "Curry houses for beach-town nights.", { cuisine: "indian" }),
    place("pty-korean", "Korean BBQ North Pattaya", 12.948, 100.89, "food", "Restaurant", "North Pattaya", 6, "Grill tables near Terminal 21.", { cuisine: "korean" }),
    place("pty-japanese", "Japanese strip Pratumnak", 12.922, 100.87, "food", "Restaurant", "Pratumnak", 7, "Sushi and ramen on the ridge.", { cuisine: "japanese" }),
    place("pty-floating-food", "Floating Market snacks", 12.871, 100.901, "food", "Quick meal", "South Pattaya", 6, "Boat noodles and coconut desserts.", { cuisine: "thai street_food" }),
    place("pty-jomtien-seafood", "Jomtien seafood promenade", 12.894, 100.864, "food", "Restaurant", "Jomtien", 7, "Beach-road grilled fish dinners.", { cuisine: "seafood thai" }),
    place("pty-buffet", "Hotel seafood buffets", 12.936, 100.878, "food", "Restaurant", "Central Pattaya", 6, "Resort dinner spreads on Beach Road.", { cuisine: "international buffet" }),
    place("pty-muslim", "Muslim food near mosque", 12.94, 100.88, "food", "Quick meal", "Central Pattaya", 6, "Halal biryani and roti.", { cuisine: "thai muslim" }),
    place("pty-steak", "Steak houses Second Road", 12.933, 100.886, "food", "Restaurant", "Central Pattaya", 6, "Tourist steak-and-wine rooms.", { cuisine: "steak international" }),
    place("pty-night-food", "Thepprasit market food", 12.9055, 100.8805, "food", "Quick meal", "Jomtien", 8, "Weekend grilled skewers and desserts.", { cuisine: "thai street_food" }),
    place("pty-vietnamese", "Vietnamese eateries", 12.935, 100.884, "food", "Restaurant", "Central Pattaya", 5, "Pho and banh mi for a change.", { cuisine: "vietnamese" }),
    place("pty-fine", "Glass House / bay dining", 12.97, 100.886, "food", "Restaurant", "Naklua", 8, "Upscale waterfront Thai-international.", { cuisine: "thai fine_dining" }),
    place("pty-padthai", "Pad Thai Beach Road", 12.929, 100.878, "food", "Quick meal", "Central Pattaya", 5, "Wok noodles for beach crowds.", { cuisine: "thai" }),
    place("pty-dessert", "Mango sticky rice carts", 12.927, 100.877, "food", "Quick meal", "Central Pattaya", 6, "Classic sweet after the promenade.", { cuisine: "thai dessert" }),

    // ——— Nightlife ———
    place("pty-walking-clubs", "Walking Street clubs", 12.9248, 100.8688, "nightlife", "Club", "South Pattaya", 9, "Mega-clubs and neon bars."),
    place("pty-soi-6", "Soi 6 bar lane", 12.936, 100.88, "nightlife", "Bar", "Central Pattaya", 6, "Dense bar soi north of central beach."),
    place("pty-lk", "LK Metro area", 12.926, 100.87, "nightlife", "Bar", "South Pattaya", 7, "Gay nightlife district near Walking Street."),
    place("pty-jomtien-bars", "Jomtien beach bars", 12.897, 100.865, "nightlife", "Bar", "Jomtien", 6, "Lower-key sunset drinks."),
    place("pty-hotel-rooftop", "Hotel rooftop bars", 12.934, 100.879, "nightlife", "Bar", "Central Pattaya", 7, "Bay-view cocktails above Beach Road."),
    place("pty-disco", "Central Pattaya discos", 12.931, 100.884, "nightlife", "Club", "Central Pattaya", 6, "Second Road club nights."),

    // ——— Stays ———
    place("pty-stay-hilton", "Hilton Pattaya", 12.9345, 100.8795, "stay", "Hotel", "Central Pattaya", 9, "Iconic beachfront tower over Central Festival."),
    place("pty-stay-royal-cliff", "Royal Cliff Hotels", 12.915, 100.86, "stay", "Hotel", "Pratumnak", 9, "Cliff resort complex with private coves."),
    place("pty-stay-intercontinental", "InterContinental Pattaya Resort", 12.912, 100.858, "stay", "Hotel", "Pratumnak", 9, "Luxury cove resort on Pratumnak."),
    place("pty-stay-centara", "Centara Grand Mirage", 12.97, 100.886, "stay", "Hotel", "Wong Amat", 8, "Family water-park resort north."),
    place("pty-stay-amari", "Amari Pattaya", 12.94, 100.883, "stay", "Hotel", "North Pattaya", 7, "Beachfront mid-north stay."),
    place("pty-stay-jomtien", "Jomtien beach hotels", 12.8955, 100.8655, "stay", "Hotel", "Jomtien", 7, "Value beach stays south of the hill."),
    place("pty-stay-hard-rock", "Hard Rock Hotel Pattaya", 12.9355, 100.881, "stay", "Hotel", "Central Pattaya", 7, "Music-themed beach hotel."),
    place("pty-stay-pullman", "Pullman Pattaya Hotel G", 12.928, 100.876, "stay", "Hotel", "Central Pattaya", 8, "Design hotel near Walking Street."),
    place("pty-stay-sanctuary", "Hotels near Sanctuary of Truth", 12.971, 100.89, "stay", "Hotel", "Naklua", 7, "Quiet north-shore base."),
    place("pty-stay-holiday", "Holiday Inn Pattaya", 12.937, 100.882, "stay", "Hotel", "Central Pattaya", 7, "Reliable central beach tower."),
  ],
};
