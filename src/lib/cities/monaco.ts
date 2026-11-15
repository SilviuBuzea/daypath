import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const monaco: CityCatalog = {
  id: "monaco",
  name: "Monaco",
  aliases: ["monaco", "monte carlo", "monte-carlo"],
  center: { lat: 43.7384, lon: 7.4246 },
  places: [
    // ——— Monaco-Ville (The Rock) ———
    place("mo-palace", "Prince's Palace", 43.7311, 7.4211, "sight", "Castle", "Monaco-Ville", 10, "Palace and changing of the guard on the rock."),
    place("mo-cathedral", "Cathedral of Monaco", 43.7303, 7.4228, "sight", "Monument", "Monaco-Ville", 8, "White stone cathedral where Grace Kelly is buried."),
    place("mo-oceanographic", "Oceanographic Museum", 43.7308, 7.4253, "museum", "Museum", "Monaco-Ville", 9, "Cliffside aquarium founded by Prince Albert I — sea views from the terrace."),
    place("mo-fort-antoine", "Fort Antoine", 43.7305, 7.4265, "sight", "Viewpoint", "Monaco-Ville", 7, "Open-air amphitheatre and Mediterranean lookout on the rock tip."),
    place("mo-jardin-st-martin", "Jardin Saint-Martin", 43.7302, 7.4245, "nature", "Garden", "Monaco-Ville", 7, "Clifftop path linking palace quarter to the oceanographic museum."),
    place("mo-chapelle-misericorde", "Chapelle de la Miséricorde", 43.731, 7.4225, "sight", "Monument", "Monaco-Ville", 5, "Tiny baroque chapel on the old town lanes."),
    place("mo-musee-napoleon", "Napoleon Museum", 43.7312, 7.4215, "museum", "Museum", "Monaco-Ville", 6, "Imperial memorabilia beside the palace courtyard."),
    place("mo-old-town-lanes", "Monaco-Ville lanes", 43.7313, 7.4228, "sight", "Attraction", "Monaco-Ville", 7, "Narrow pastel streets between palace and cathedral."),
    place("mo-rampe-major", "Rampe Major", 43.7325, 7.4218, "sight", "Attraction", "Monaco-Ville", 6, "Historic fortified ramp climbing from Condamine to the rock."),

    // ——— Monte Carlo ———
    place("mo-casino", "Casino de Monte-Carlo", 43.7391, 7.428, "sight", "Attraction", "Monte Carlo", 10, "Belle Époque casino façade — dress code for gaming rooms."),
    place("mo-opera", "Opéra de Monte-Carlo", 43.739, 7.4282, "sight", "Attraction", "Monte Carlo", 8, "Garnier-designed opera house attached to the casino complex."),
    place("mo-casino-square", "Place du Casino", 43.7392, 7.4275, "sight", "Attraction", "Monte Carlo", 9, "Palm circle with Café de Paris and hotel façades."),
    place("mo-japanese-garden", "Japanese Garden", 43.74, 7.4285, "nature", "Garden", "Monte Carlo", 7, "Quiet Zen garden steps from the casino chaos."),
    place("mo-rose-garden", "Princess Grace Rose Garden", 43.7375, 7.4325, "nature", "Garden", "Fontvieille", 6, "Rose beds and memorial near Fontvieille park."),
    place("mo-grimaldi-forum", "Grimaldi Forum", 43.7415, 7.4315, "sight", "Attraction", "Larvotto", 6, "Conference and exhibition hall on the eastern waterfront."),
    place("mo-larvotto", "Larvotto Beach", 43.7465, 7.4355, "nature", "Beach", "Larvotto", 8, "Public pebble beach with loungers and a long promenade."),
    place("mo-avenue-princesses", "Avenue Princesse Grace", 43.7435, 7.432, "sight", "Attraction", "Larvotto", 6, "Seafront boulevard linking casino to Larvotto."),
    place("mo-metropole", "Métropole shopping galleries", 43.7405, 7.4265, "shopping", "Mall", "Monte Carlo", 7, "Covered luxury retail beside Hôtel Métropole."),

    // ——— Port / Condamine ———
    place("mo-port-hercules", "Port Hercules", 43.735, 7.421, "sight", "Attraction", "La Condamine", 8, "Superyacht harbour — F1 circuit runs around the quays."),
    place("mo-yacht-club", "Yacht Club de Monaco", 43.7335, 7.4225, "sight", "Attraction", "La Condamine", 6, "Foster-designed clubhouse on the harbour edge."),
    place("mo-condamine-market", "Marché de la Condamine", 43.7345, 7.42, "shopping", "Market", "La Condamine", 7, "Covered food market for picnic supplies and local produce."),
    place("mo-place-armes", "Place d'Armes", 43.7338, 7.4195, "sight", "Attraction", "La Condamine", 6, "Gateway square below the rock with market stalls."),
    place("mo-stade-louis-ii", "Stade Louis II", 43.7275, 7.4155, "sight", "Attraction", "Fontvieille", 6, "AS Monaco stadium and sports complex."),
    place("mo-heli-pad", "Monaco Heliport", 43.7265, 7.4185, "sight", "Attraction", "Fontvieille", 5, "Nice–Monaco helicopter shuttle pad by the sea."),

    // ——— Fontvieille / hills ———
    place("mo-exotic-garden", "Jardin Exotique", 43.7315, 7.414, "nature", "Garden", "Les Révoires", 8, "Cactus cliff garden with panoramic views over the principality."),
    place("mo-observatory-cave", "Observatory Cave", 43.7318, 7.4135, "sight", "Attraction", "Les Révoires", 6, "Cave visit often paired with the Exotic Garden ticket."),
    place("mo-anthropology", "Museum of Prehistoric Anthropology", 43.7316, 7.4138, "museum", "Museum", "Les Révoires", 5, "Small archaeology museum beside the Exotic Garden."),
    place("mo-fontvieille-park", "Parc Princesse Antoinette", 43.7355, 7.412, "nature", "Park", "Les Révoires", 5, "Shaded olive park above Condamine."),
    place("mo-collection-cars", "Collection of Cars of HSH the Prince", 43.7285, 7.4175, "museum", "Museum", "Fontvieille", 7, "Prince's classic and racing car collection."),
    place("mo-naval-museum", "Naval Museum", 43.7288, 7.418, "museum", "Museum", "Fontvieille", 5, "Ship models in Fontvieille's museum cluster."),
    place("mo-stamps-coins", "Museum of Stamps and Coins", 43.7282, 7.4172, "museum", "Museum", "Fontvieille", 5, "Philately and mint history of the principality."),
    place("mo-zoo", "Animal Garden (Zoo)", 43.7295, 7.4165, "nature", "Park", "Fontvieille", 5, "Small hillside zoo with Mediterranean views."),
    place("mo-port-fontvieille", "Port de Fontvieille", 43.727, 7.4205, "sight", "Attraction", "Fontvieille", 6, "Quieter marina below the rock's west face."),

    // ——— Cap d'Ail / Beausoleil edge ———
    place("mo-beausoleil-view", "Beausoleil viewpoint", 43.7425, 7.4235, "sight", "Viewpoint", "Beausoleil", 6, "French hillside lookout over Monte Carlo rooftops."),
    place("mo-cap-dail-path", "Cap d'Ail coastal path", 43.7195, 7.405, "nature", "Park", "Cap d'Ail", 7, "Seaside walk just west of the border — quieter swim spots."),

    // ——— Shopping ———
    place("mo-boulevard-mouchettes", "Boulevard des Moulins boutiques", 43.741, 7.4255, "shopping", "Market", "Monte Carlo", 6, "Designer storefronts above the casino district."),
    place("mo-one-montecarlo", "One Monte-Carlo", 43.7395, 7.4268, "shopping", "Mall", "Monte Carlo", 7, "Open-air luxury plaza by the opera."),
    place("mo-fontvieille-shops", "Centre Commercial Fontvieille", 43.728, 7.4188, "shopping", "Mall", "Fontvieille", 5, "Practical shopping and supermarket near the museums."),

    // ——— Cafes ———
    place("mo-cafe-de-paris", "Café de Paris Monte-Carlo", 43.7393, 7.4272, "cafe", "Cafe", "Monte Carlo", 8, "Terrace people-watching opposite the casino.", { cuisine: "coffee pastry" }),
    place("mo-patisserie-costa", "Pâtisserie Costa", 43.7348, 7.4205, "cafe", "Cafe", "La Condamine", 6, "Local bakery near the covered market.", { cuisine: "pastry coffee" }),
    place("mo-starbucks-condamine", "Harbour coffee stop", 43.7352, 7.4215, "cafe", "Cafe", "La Condamine", 5, "Quick coffee with yacht views on the quay.", { cuisine: "coffee" }),
    place("mo-old-town-cafe", "Café on the Rock", 43.7312, 7.423, "cafe", "Cafe", "Monaco-Ville", 6, "Espresso break between palace and cathedral.", { cuisine: "coffee" }),
    place("mo-larvotto-cafe", "Larvotto beach cafe", 43.7462, 7.435, "cafe", "Cafe", "Larvotto", 5, "Sandals-on coffee after a swim.", { cuisine: "coffee" }),
    place("mo-metropole-cafe", "Metropole café terrace", 43.7403, 7.4268, "cafe", "Cafe", "Monte Carlo", 6, "Hotel-lobby coffee in the shopping galleries.", { cuisine: "coffee" }),

    // ——— Food ———
    place("mo-joel-robuchon", "Joël Robuchon Monte-Carlo", 43.7388, 7.4262, "food", "Restaurant", "Monte Carlo", 9, "Fine dining institution — book well ahead.", { cuisine: "french" }),
    place("mo-blue-bay", "Blue Bay", 43.747, 7.438, "food", "Restaurant", "Larvotto", 8, "Sea-facing Mediterranean tasting at Monte-Carlo Beach.", { cuisine: "mediterranean" }),
    place("mo-yoshi", "Yoshi", 43.7402, 7.4265, "food", "Restaurant", "Monte Carlo", 8, "Refined Japanese inside Hôtel Métropole.", { cuisine: "japanese" }),
    place("mo-beefbar", "Beefbar Monaco", 43.7395, 7.426, "food", "Restaurant", "Monte Carlo", 7, "Steakhouse energy near Place du Casino.", { cuisine: "steak" }),
    place("mo-stars-bars", "Stars'N'Bars", 43.7338, 7.422, "food", "Restaurant", "La Condamine", 7, "Casual American harbour hangout with a sports vibe.", { cuisine: "american" }),
    place("mo-quai-des-artistes", "Quai des Artistes", 43.7345, 7.4218, "food", "Restaurant", "La Condamine", 7, "Brasserie classics on Port Hercules.", { cuisine: "french" }),
    place("mo-loggia", "La Loggia", 43.731, 7.4218, "food", "Restaurant", "Monaco-Ville", 6, "Palace hotel terrace with rock views.", { cuisine: "mediterranean" }),
    place("mo-pizzeria-monopole", "Pizzeria Monopole", 43.7342, 7.4202, "food", "Quick meal", "La Condamine", 6, "Budget-friendlier pizza near Place d'Armes.", { cuisine: "italian pizza" }),
    place("mo-socca", "Socca & street bites Condamine", 43.7346, 7.4198, "food", "Quick meal", "La Condamine", 6, "Niçois chickpea pancake energy by the market.", { cuisine: "street_food" }),
    place("mo-fuji", "Fuji", 43.7355, 7.4225, "food", "Restaurant", "La Condamine", 6, "Sushi and Japanese lunch near the port.", { cuisine: "japanese" }),
    place("mo-african-queen", "African Queen", 43.7268, 7.4208, "food", "Restaurant", "Fontvieille", 6, "Long-running Fontvieille marina restaurant.", { cuisine: "mediterranean" }),
    place("mo-elsa", "Elsa", 43.7472, 7.4385, "food", "Restaurant", "Larvotto", 8, "Michelin organic dining at Monte-Carlo Beach Hotel.", { cuisine: "french mediterranean" }),
    place("mo-maya-bay", "Maya Bay", 43.7358, 7.423, "food", "Restaurant", "La Condamine", 6, "Asian fusion with harbour views.", { cuisine: "asian fusion" }),
    place("mo-croquettes", "La Montée market lunch", 43.734, 7.42, "food", "Quick meal", "La Condamine", 5, "Grab-and-go from market counters before the rock climb.", { cuisine: "market" }),

    // ——— Nightlife ———
    place("mo-jimmyz", "Jimmy'z", 43.7455, 7.4345, "nightlife", "Club", "Larvotto", 8, "Legendary late club — dress sharp and expect a door."),
    place("mo-buddha-bar", "Buddha Bar Monte-Carlo", 43.739, 7.4278, "nightlife", "Bar", "Monte Carlo", 7, "Lounge cocktails inside the casino complex."),
    place("mo-crystal-bar", "Crystal Bar", 43.7387, 7.4268, "nightlife", "Bar", "Monte Carlo", 7, "Hotel de Paris lobby bar for a polished nightcap."),
    place("mo-sass-cafe", "Sass Café", 43.7412, 7.4258, "nightlife", "Bar", "Monte Carlo", 7, "Piano bar and late supper crowd."),
    place("mo-port-terrace", "Port Hercules evening terrace", 43.7352, 7.4212, "nightlife", "Bar", "La Condamine", 6, "Harbour drinks as the yachts light up."),
    place("mo-livello", "Livello 8 / rooftop lounges", 43.74, 7.427, "nightlife", "Bar", "Monte Carlo", 6, "Rooftop cocktail strips above casino square."),
    place("mo-twiga", "Twiga Monte-Carlo", 43.746, 7.4358, "nightlife", "Club", "Larvotto", 7, "Beach-club nights toward Larvotto."),

    // ——— Stays ———
    place("mo-hotel-de-paris", "Hôtel de Paris Monte-Carlo", 43.7387, 7.4272, "stay", "Hotel", "Monte Carlo", 10, "Palace hotel on Casino Square — the classic Monaco base."),
    place("mo-hermitage", "Hôtel Hermitage Monte-Carlo", 43.7382, 7.426, "stay", "Hotel", "Monte Carlo", 9, "Belle Époque grandeur a short walk from the casino."),
    place("mo-metropole-hotel", "Hôtel Métropole Monte-Carlo", 43.7402, 7.4265, "stay", "Hotel", "Monte Carlo", 9, "Quiet luxury with Robuchon dining on site."),
    place("mo-montecarlo-bay", "Monte-Carlo Bay Hotel", 43.7485, 7.4395, "stay", "Hotel", "Larvotto", 8, "Lagoon pool resort on the eastern tip."),
    place("mo-fairmont", "Fairmont Monte Carlo", 43.7398, 7.4305, "stay", "Hotel", "Monte Carlo", 8, "Circuit-side rooms above the harbour hairpin."),
    place("mo-port-palace", "Port Palace Hotel", 43.7355, 7.4222, "stay", "Hotel", "La Condamine", 7, "Harbour-facing mid-luxury near the yacht club."),
    place("mo-columbus", "Columbus Monte-Carlo", 43.7285, 7.4195, "stay", "Hotel", "Fontvieille", 7, "Design hotel near Fontvieille marina and museums."),
    place("mo-novotel", "Novotel Monte-Carlo", 43.742, 7.4245, "stay", "Hotel", "Monte Carlo", 6, "Practical mid-range base above the casino district."),
    place("mo-hotel-de-france", "Hôtel de France", 43.7345, 7.4192, "stay", "Hotel", "La Condamine", 6, "Budget-friendlier rooms near Place d'Armes."),
    place("mo-ambassador", "Hotel Ambassador Monaco", 43.7348, 7.4198, "stay", "Hotel", "La Condamine", 6, "Simple Condamine stay for rock and market days."),
    place("mo-villa-boeri", "Villa Boeri guest house", 43.732, 7.4235, "stay", "Guest house", "Monaco-Ville", 5, "Small stay near the rock lanes."),
    place("mo-apt-condamine", "Condamine apartment", 43.735, 7.4205, "stay", "Apartment", "La Condamine", 6, "Self-catering near market and harbour buses."),
    place("mo-apt-larvotto", "Larvotto studio", 43.7455, 7.4348, "stay", "Apartment", "Larvotto", 6, "Beach-side flat for swim-and-walk days."),
    place("mo-hostel-style", "Monaco budget stay Beausoleil", 43.7428, 7.4228, "stay", "Hostel", "Beausoleil", 5, "Cheaper beds just over the French border above Monte Carlo."),
  ],
};
