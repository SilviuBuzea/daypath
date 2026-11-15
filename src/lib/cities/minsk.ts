import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const minsk: CityCatalog = {
  id: "minsk",
  name: "Minsk, Belarus",
  aliases: ["minsk", "minsk belarus"],
  center: { lat: 53.9006, lon: 27.559 },
  places: [
    // ——— Independence / Center ———
    place("mn-independence-sq", "Independence Square", 53.8954, 27.5477, "sight", "Attraction", "Independence Square", 9, "Vast Soviet square with Red Church and government facades."),
    place("mn-red-church", "Church of Saints Simon and Helena (Red Church)", 53.8965, 27.5485, "sight", "Monument", "Independence Square", 8, "Red-brick neo-Gothic landmark on the square."),
    place("mn-gov", "Government House facade", 53.895, 27.547, "sight", "Monument", "Independence Square", 6, "Monumental Soviet civic architecture."),
    place("mn-independence-ave", "Independence Avenue stroll", 53.904, 27.561, "sight", "Attraction", "Center", 8, "Broad main avenue linking squares and parks."),
    place("mn-victory-sq", "Victory Square", 53.908, 27.5745, "sight", "Monument", "Victory Square", 9, "Obelisk and eternal flame — key memorial axis."),
    place("mn-victory-obelisk", "Victory Obelisk", 53.9082, 27.5748, "sight", "Monument", "Victory Square", 8, "Tall memorial spire at the square's center."),
    place("mn-kastrychnitskaya", "Kastrychnitskaya Square", 53.9025, 27.5615, "sight", "Attraction", "Center", 7, "Palace of the Republic square on the avenue."),
    place("mn-palace-republic", "Palace of the Republic", 53.9028, 27.5618, "sight", "Attraction", "Center", 6, "Large concert and congress hall on the square."),
    place("mn-national-library", "National Library of Belarus", 53.9315, 27.646, "sight", "Viewpoint", "East", 8, "Diamond-shaped tower with observation deck."),
    place("mn-gate-city", "City Gates (Station Towers)", 53.8905, 27.5485, "sight", "Monument", "Station", 7, "Twin towers framing the main railway station plaza."),

    // ——— Upper Town / Nyamiha ———
    place("mn-upper-town", "Upper Town (Vierchni Horad)", 53.9045, 27.555, "sight", "Attraction", "Upper Town", 9, "Historic core with cathedral, town hall, and cafes."),
    place("mn-town-hall", "Minsk Town Hall", 53.9042, 27.5555, "sight", "Monument", "Upper Town", 7, "Reconstructed town hall on the old square."),
    place("mn-holy-spirit", "Holy Spirit Cathedral", 53.9048, 27.5565, "sight", "Monument", "Upper Town", 8, "Baroque Orthodox cathedral in Upper Town."),
    place("mn-virgin-mary", "Cathedral of Saint Virgin Mary", 53.9038, 27.5545, "sight", "Monument", "Upper Town", 7, "Baroque Catholic cathedral nearby."),
    place("mn-nyamiha", "Nyamiha area", 53.906, 27.55, "sight", "Attraction", "Nyamiha", 6, "Shopping and transit hub below Upper Town."),
    place("mn-trinity", "Trinity Suburb (Traetskae Pradmestsie)", 53.9085, 27.5565, "sight", "Attraction", "Trinity Suburb", 9, "Restored riverside quarter of pastel houses and galleries."),
    place("mn-isle-tears", "Island of Tears", 53.91, 27.552, "sight", "Monument", "Svislach", 8, "Memorial island chapel for Afghan war soldiers."),
    place("mn-opera", "National Opera and Ballet", 53.9105, 27.5615, "sight", "Attraction", "Trinity Suburb", 7, "Landmark opera house by the river."),
    place("mn-svislach", "Svislach river walk", 53.9075, 27.555, "nature", "Park", "Svislach", 7, "Embankment paths linking Upper Town and Trinity."),
    place("mn-piaterski", "Piaterski monastery ruins area", 53.9055, 27.5535, "sight", "Monument", "Upper Town", 5, "Historic religious site remnants near the river."),

    // ——— Museums ———
    place("mn-art", "National Art Museum of Belarus", 53.8985, 27.5605, "museum", "Museum", "Center", 8, "Belarusian and international art collections."),
    place("mn-war", "Belarusian Great Patriotic War Museum", 53.9165, 27.537, "museum", "Museum", "Nyamiha", 8, "Large WWII museum near the avenue."),
    place("mn-history", "National Historical Museum", 53.898, 27.5555, "museum", "Museum", "Center", 7, "Archaeology and national history downtown."),
    place("mn-maxsim", "Maksim Bahdanovič Literary Museum", 53.909, 27.558, "museum", "Museum", "Trinity Suburb", 6, "Poet museum in the riverside quarter."),
    place("mn-money", "Museum of Money / NBRB exhibits", 53.9, 27.5585, "museum", "Museum", "Center", 5, "Currency history for a short indoor stop."),
    place("mn-nature", "Nature & Ecology Museum", 53.9015, 27.562, "museum", "Museum", "Center", 5, "Natural history displays downtown."),
    place("mn-azgur", "Zair Azgur Memorial Studio Museum", 53.925, 27.585, "museum", "Museum", "North", 6, "Sculptor's studio museum."),
    place("mn-strana-mini", "Strana Mini (miniature park)", 53.927, 27.52, "sight", "Attraction", "West", 6, "Miniature landmarks park for a light outing."),
    place("mn-church-all-saints", "All Saints Church", 53.94, 27.53, "sight", "Monument", "North", 6, "Memorial church with striking silhouette."),
    place("mn-circus", "Belarusian State Circus", 53.904, 27.568, "sight", "Attraction", "Center", 5, "Landmark circus building near Gorky Park."),
    place("mn-ratusha-sq", "Freedom Square (Upper Town plaza)", 53.9044, 27.5553, "sight", "Attraction", "Upper Town", 7, "Cobblestone plaza between town hall and cathedrals."),
    place("mn-trinity-view", "Trinity Suburb river viewpoint", 53.9088, 27.5558, "sight", "Viewpoint", "Trinity Suburb", 6, "Photo spot across to Island of Tears."),
    place("mn-hydra", "Hydropathic / riverside leisure edge", 53.912, 27.553, "nature", "Park", "Svislach", 4, "Casual riverside lounging north of Trinity."),

    // ——— Parks & nature ———
    place("mn-gorky", "Gorky Park", 53.9035, 27.571, "nature", "Park", "Center", 7, "Central amusement and walking park."),
    place("mn-yanka", "Yanka Kupala Park", 53.9065, 27.5655, "nature", "Park", "Center", 7, "Riverside park with the poet's monument."),
    place("mn-victory-park", "Victory Park / Chelyuskinites", 53.92, 27.545, "nature", "Park", "North", 7, "Large park and reservoir for longer walks."),
    place("mn-botanical", "Central Botanical Garden", 53.915, 27.605, "nature", "Garden", "East", 7, "Botanical garden toward the library side of town."),
    place("mn-loshitsa", "Loshitsa Park", 53.86, 27.565, "nature", "Park", "South", 7, "Manor park with ponds south of the center."),
    place("mn-dreamland", "Dreamland / children's park orbit", 53.918, 27.548, "nature", "Park", "North", 5, "Family park pocket near Victory Park."),
    place("mn-mkad-green", "Svislach upstream green", 53.915, 27.55, "nature", "Park", "Svislach", 5, "Quieter river paths north of Trinity."),

    // ——— Neighborhoods ———
    place("mn-kastrychnitskaya-st", "Kastrychnitskaya Street street art", 53.9055, 27.5455, "sight", "Attraction", "Oktyabrskaya", 8, "Industrial street of murals, cafes, and nightlife."),
    place("mn-korpus", "PRADMOVA / Korpus cultural space area", 53.905, 27.5445, "sight", "Attraction", "Oktyabrskaya", 7, "Creative hub on the street-art strip."),
    place("mn-urucca", "Uruchcha residential modernist walk", 53.945, 27.68, "sight", "Attraction", "Uruchcha", 4, "Soviet housing landscapes if you're curious about microdistricts."),
    place("mn-nemiga-shops", "Nemiga shopping streets", 53.9045, 27.5495, "shopping", "Mall", "Nyamiha", 6, "Retail streets below Upper Town."),
    place("mn-stoleta", "Stolle / pie culture stop area", 53.901, 27.558, "food", "Quick meal", "Center", 6, "Belarusian pie chain energy for a quick bite.", { cuisine: "belarusian" }),
    place("mn-komarovka", "Komarovka Market", 53.92, 27.57, "shopping", "Market", "North", 8, "Famous covered market for produce and snacks."),
    place("mn-galleria", "Galleria Minsk", 53.9, 27.565, "shopping", "Mall", "Center", 6, "Central shopping mall."),
    place("mn-dana", "Dana Mall", 53.93, 27.63, "shopping", "Mall", "East", 5, "Large mall toward the National Library side."),
    place("mn-souvenir", "Upper Town craft shops", 53.9046, 27.5558, "shopping", "Shop", "Upper Town", 6, "Linen, ceramics, and Belarusian souvenirs."),

    // ——— Cafes ———
    place("mn-cafe-upper", "Upper Town cafe", 53.9043, 27.5552, "cafe", "Cafe", "Upper Town", 7, "Coffee on the historic square."),
    place("mn-cafe-trinity", "Trinity Suburb cafe", 53.9082, 27.5568, "cafe", "Cafe", "Trinity Suburb", 7, "Riverside coffee among pastel houses."),
    place("mn-cafe-okt", "Kastrychnitskaya specialty coffee", 53.9058, 27.5458, "cafe", "Cafe", "Oktyabrskaya", 8, "Hip coffee on the street-art strip."),
    place("mn-cafe-center", "Independence Avenue cafe", 53.901, 27.56, "cafe", "Cafe", "Center", 6, "Boulevard coffee between museums."),
    place("mn-cafe-gorky", "Gorky Park cafe", 53.9038, 27.5715, "cafe", "Cafe", "Center", 5, "Park-edge pause after a stroll."),
    place("mn-cafe-library", "Library-area cafe", 53.931, 27.645, "cafe", "Cafe", "East", 5, "Coffee after the National Library deck."),
    place("mn-patisserie", "Center patisserie", 53.902, 27.5595, "cafe", "Cafe", "Center", 6, "Cakes and tea downtown."),

    // ——— Food ———
    place("mn-food-draniki", "Draniki & Belarusian lunch", 53.9, 27.558, "food", "Restaurant", "Center", 8, "Potato pancakes and local classics.", { cuisine: "belarusian" }),
    place("mn-food-upper", "Upper Town dinner", 53.904, 27.556, "food", "Restaurant", "Upper Town", 8, "Historic-quarter restaurants for evening meals.", { cuisine: "belarusian european" }),
    place("mn-food-trinity", "Trinity Suburb dinner", 53.9088, 27.557, "food", "Restaurant", "Trinity Suburb", 7, "Riverside dining in the reconstructed suburb.", { cuisine: "european" }),
    place("mn-food-okt", "Oktyabrskaya kitchen dinner", 53.9052, 27.545, "food", "Restaurant", "Oktyabrskaya", 7, "Modern bistros on the creative street.", { cuisine: "modern european" }),
    place("mn-food-market", "Komarovka market bites", 53.9205, 27.5705, "food", "Quick meal", "North", 7, "Dairy, pastries, and hot stands in the market.", { cuisine: "market" }),
    place("mn-food-pelmeni", "Pelmeni / dumpling spot", 53.9025, 27.5625, "food", "Restaurant", "Center", 6, "Comfort dumplings near the avenue.", { cuisine: "eastern european" }),
    place("mn-food-italian", "Italian dinner center", 53.9015, 27.561, "food", "Restaurant", "Center", 5, "Pizza and pasta downtown.", { cuisine: "italian" }),
    place("mn-food-asian", "Asian fusion Nyamiha", 53.9055, 27.5505, "food", "Restaurant", "Nyamiha", 5, "Noodles and sushi near the shopping streets.", { cuisine: "asian" }),
    place("mn-food-steak", "Grill dinner Independence Ave", 53.903, 27.563, "food", "Restaurant", "Center", 6, "Meat-forward dinner on the main avenue.", { cuisine: "grill" }),
    place("mn-food-vegetarian", "Vegetarian cafe lunch", 53.9048, 27.5465, "food", "Restaurant", "Oktyabrskaya", 6, "Plant-based plates on Kastrychnitskaya.", { cuisine: "vegetarian" }),

    // ——— Nightlife ———
    place("mn-night-okt", "Kastrychnitskaya bars", 53.9055, 27.546, "nightlife", "Bar", "Oktyabrskaya", 8, "Best concentrated nightlife and live music strip."),
    place("mn-night-upper", "Upper Town evening", 53.905, 27.554, "nightlife", "Bar", "Upper Town", 7, "Wine and cocktail bars in the old core."),
    place("mn-night-center", "Center avenue bars", 53.902, 27.561, "nightlife", "Bar", "Center", 6, "Hotel lounges and bars along Independence Avenue."),
    place("mn-night-club", "Minsk club night", 53.9035, 27.548, "nightlife", "Club", "Nyamiha", 6, "Check electronic and pop club schedules."),
    place("mn-night-trinity", "Trinity riverside drinks", 53.9085, 27.556, "nightlife", "Bar", "Trinity Suburb", 6, "Quieter evening by the Svislach."),
    place("mn-night-jazz", "Jazz / live music bar", 53.9045, 27.5455, "nightlife", "Bar", "Oktyabrskaya", 7, "Live sets on the creative street."),
    place("mn-night-beer", "Craft beer taproom", 53.9052, 27.547, "nightlife", "Bar", "Oktyabrskaya", 6, "Local and regional craft pours."),

    // ——— Stays ———
    place("mn-stay-independence", "Independence Square hotel", 53.896, 27.55, "stay", "Hotel", "Independence Square", 8, "Monumental square base near Red Church."),
    place("mn-stay-victory", "Victory Square hotel", 53.907, 27.572, "stay", "Hotel", "Victory Square", 7, "Handy for avenue walks and parks."),
    place("mn-stay-upper", "Upper Town boutique hotel", 53.903, 27.557, "stay", "Hotel", "Upper Town", 8, "Best for old-town evenings and river walks."),
    place("mn-stay-crown", "Crown Plaza / business hotel area", 53.91, 27.55, "stay", "Hotel", "Svislach", 7, "Business stay near river and opera."),
    place("mn-stay-hostel", "Minsk Hostel", 53.9, 27.565, "stay", "Hostel", "Center", 5, "Budget dorms downtown."),
    place("mn-stay-guest", "Guest House Upper Town", 53.9045, 27.5545, "stay", "Guest house", "Upper Town", 6, "Small stay in the historic core."),
    place("mn-stay-okt", "Oktyabrskaya loft stay", 53.9055, 27.5452, "stay", "Hotel", "Oktyabrskaya", 6, "Creative-district base for nightlife."),
    place("mn-stay-east", "East / library-area hotel", 53.93, 27.64, "stay", "Hotel", "East", 5, "Practical if visiting the National Library."),
    place("mn-stay-station", "Station plaza hotel", 53.891, 27.549, "stay", "Hotel", "Station", 6, "Convenient for early trains — twin towers nearby."),
  ],
};
