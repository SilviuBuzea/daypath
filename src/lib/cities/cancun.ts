import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const cancun: CityCatalog = {
  id: "cancun",
  name: "Cancún, Mexico",
  aliases: ["cancun", "cancúns", "cancun mexico"],
  center: { lat: 21.1619, lon: -86.8515 },
  places: [
    // ——— Hotel Zone north / beaches ———
    place("cun-playa-langosta", "Playa Langosta", 21.1455, -86.7855, "nature", "Beach", "Hotel Zone", 7, "Calm north-zone beach near quieter resorts."),
    place("cun-playa-tortugas", "Playa Tortugas", 21.1385, -86.7755, "nature", "Beach", "Hotel Zone", 8, "Ferry-adjacent beach with Isla Mujeres boats."),
    place("cun-playa-linda", "Playa Linda", 21.1425, -86.78, "nature", "Beach", "Hotel Zone", 7, "Public beach access and boat docks."),
    place("cun-km0", "Hotel Zone Km 0 viewpoint", 21.15, -86.79, "sight", "Viewpoint", "Hotel Zone", 6, "Where the barrier island meets the mainland lagoon."),
    place("cun-cactus", "Coco Bongo area strip", 21.1325, -86.7485, "nightlife", "Bar", "Hotel Zone", 7, "Show-club corridor in the mid Hotel Zone."),
    place("cun-forum", "Forum Beach / Fat Tuesday strip", 21.1315, -86.7475, "nightlife", "Bar", "Hotel Zone", 6, "Party beach clubs around Forum Mall."),
    place("cun-playa-chac", "Playa Chac Mool", 21.1285, -86.7455, "nature", "Beach", "Hotel Zone", 7, "Public beach pocket with strong surf days."),
    place("cun-playa-gaviota", "Playa Gaviota Azul", 21.1255, -86.7425, "nature", "Beach", "Hotel Zone", 7, "Wide sand near the malls and party zone."),
    place("cun-la-isla", "La Isla Shopping Village", 21.1215, -86.7555, "shopping", "Mall", "Hotel Zone", 8, "Lagoon-front outdoor mall with restaurants."),
    place("cun-aquarium", "Interactive Aquarium Cancún", 21.1218, -86.7558, "sight", "Attraction", "Hotel Zone", 6, "Touch tanks and dolphin programs at La Isla."),
    place("cun-plaza-flamingo", "Plaza Flamingo", 21.1185, -86.7585, "shopping", "Mall", "Hotel Zone", 5, "Mid-zone retail and services."),
    place("cun-maya-museum", "Museo Maya de Cancún", 21.0705, -86.7785, "museum", "Museum", "Hotel Zone", 9, "Maya artifacts beside San Miguelito ruins."),
    place("cun-san-miguelito", "San Miguelito ruins", 21.0708, -86.7788, "sight", "Monument", "Hotel Zone", 8, "Small archaeological site next to the Maya Museum."),
    place("cun-el-rey", "El Rey ruins", 21.0605, -86.7825, "sight", "Monument", "Hotel Zone", 8, "Larger Hotel Zone ruin with iguana residents."),
    place("cun-playa-delfines", "Playa Delfines", 21.0555, -86.7795, "nature", "Beach", "Hotel Zone", 9, "Iconic Cancún sign and open public beach."),
    place("cun-mirador", "Mirador Delfines lookout", 21.0565, -86.7805, "sight", "Viewpoint", "Hotel Zone", 8, "Elevated Cancún sign photo stop."),
    place("cun-forum-mall", "Forum by the Sea", 21.132, -86.748, "shopping", "Mall", "Hotel Zone", 6, "Beachfront mall with clubs and chain dining."),
    place("cun-luxury-ave", "Luxury Avenue Mall", 21.1355, -86.7525, "shopping", "Mall", "Hotel Zone", 6, "Designer boutiques in the north-mid zone."),
    place("cun-kukulcan", "Boulevard Kukulcán stroll", 21.1, -86.77, "sight", "Attraction", "Hotel Zone", 7, "Main Hotel Zone artery — bike or bus the length."),
    place("cun-lagoon", "Nichupté Lagoon sunset", 21.11, -86.78, "nature", "Viewpoint", "Hotel Zone", 7, "Mangrove lagoon sunsets opposite the Caribbean."),

    // ——— Hotel Zone south / parks ———
    place("cun-quinta", "Parque Nacional Costa Occidental", 21.04, -86.79, "nature", "Park", "Punta Nizuc", 7, "Reef park snorkel access near the southern tip."),
    place("cun-nizuc", "Punta Nizuc beach", 21.0355, -86.7885, "nature", "Beach", "Punta Nizuc", 8, "Quieter southern tip with reef nearby."),
    place("cun-wet-n-wild", "Wet'n Wild Cancún", 21.08, -86.77, "sight", "Attraction", "Hotel Zone", 5, "Water park for family heat-escape days."),
    place("cun-golf", "Pok-Ta-Pok golf views", 21.13, -86.76, "nature", "Park", "Hotel Zone", 5, "Lagoon golf course scenery from the boulevard."),

    // ——— Downtown Cancún ———
    place("cun-parque-palapas", "Parque de las Palapas", 21.1615, -86.8255, "sight", "Attraction", "Downtown", 8, "Evening plaza with food stalls and live music."),
    place("cun-avenida-tulum", "Avenida Tulum walk", 21.1615, -86.8285, "shopping", "Market", "Downtown", 6, "Main downtown commercial avenue."),
    place("cun-mercado-28", "Mercado 28", 21.1618, -86.8315, "shopping", "Market", "Downtown", 8, "Handicrafts, hammocks, and souvenir bargaining."),
    place("cun-mercado-23", "Mercado 23", 21.1675, -86.8315, "shopping", "Market", "Downtown", 7, "Local produce market with authentic food stalls."),
    place("cun-ayuntamiento", "City Hall plaza", 21.1612, -86.8275, "sight", "Monument", "Downtown", 5, "Civic plaza for downtown orientation."),
    place("cun-catedral", "Catedral de Cancún", 21.1605, -86.8265, "sight", "Monument", "Downtown", 6, "Modern cathedral facing the central plazas."),
    place("cun-yaxche", "Parque Kabah", 21.1455, -86.8455, "nature", "Park", "Downtown", 6, "Neighborhood green space west of center."),
    place("cun-malecon", "Malecón Tajamar", 21.1555, -86.8055, "nature", "Park", "Downtown", 6, "Lagoon boardwalk on the mainland side."),
    place("cun-teatro", "Teatro Cancún area", 21.1485, -86.8225, "sight", "Attraction", "Downtown", 5, "Cultural venue for local performances."),
    place("cun-plaza-las-americas", "Plaza Las Américas", 21.1485, -86.8385, "shopping", "Mall", "Downtown", 6, "Large mainland mall for everyday shopping."),

    // ——— Puerto Juárez / ferries ———
    place("cun-puerto-juarez", "Puerto Juárez ferry terminal", 21.1855, -86.8055, "sight", "Attraction", "Puerto Juárez", 8, "Main passenger ferry to Isla Mujeres."),
    place("cun-gran-puerto", "Gran Puerto Cancún", 21.1785, -86.8085, "sight", "Attraction", "Puerto Juárez", 7, "Ultra ferry terminal with faster Isla boats."),
    place("cun-playa-ninos", "Playa Niños Puerto Juárez", 21.1865, -86.8045, "nature", "Beach", "Puerto Juárez", 6, "Small mainland beach near the docks."),

    // ——— Isla Mujeres day-trip ———
    place("cun-isla-norte", "Playa Norte Isla Mujeres", 21.2625, -86.7505, "nature", "Beach", "Isla Mujeres", 10, "Powder sand and calm water — top day-trip beach."),
    place("cun-isla-centro", "Isla Mujeres downtown", 21.2375, -86.7315, "sight", "Attraction", "Isla Mujeres", 8, "Colorful streets, golf carts, and waterfront cafes."),
    place("cun-isla-tortugas", "Tortugranja turtle farm", 21.2285, -86.7285, "nature", "Park", "Isla Mujeres", 7, "Sea turtle conservation stop on the island."),
    place("cun-isla-punta", "Punta Sur Isla Mujeres", 21.2015, -86.7105, "nature", "Viewpoint", "Isla Mujeres", 8, "Cliff sculptures and Caribbean overlook at the tip."),
    place("cun-isla-garrafon", "Garrafón natural park", 21.2055, -86.7155, "nature", "Park", "Isla Mujeres", 7, "Snorkel park on the island's southern reefs."),
    place("cun-isla-museum", "Casa de Cultura Isla", 21.2365, -86.7325, "museum", "Museum", "Isla Mujeres", 5, "Small cultural exhibits in town."),
    place("cun-isla-hacienda", "Hacienda Mundaca ruins", 21.22, -86.725, "sight", "Monument", "Isla Mujeres", 6, "Pirate-era estate ruins mid-island."),

    // ——— Nearby day trips ———
    place("cun-isla-blanca", "Isla Blanca", 21.28, -86.78, "nature", "Beach", "North Coast", 7, "Remote sandbar north of Cancún — 4x4 or tour."),
    place("cun-puerto-morelos", "Puerto Morelos reef town", 20.8535, -86.8755, "nature", "Beach", "Puerto Morelos", 8, "Laid-back reef town south of Cancún."),
    place("cun-cenote-verde", "Cenote Verde Lucero area", 20.9, -86.9, "nature", "Park", "Riviera Maya", 7, "Freshwater swim stop toward Puerto Morelos."),
    place("cun-chichen", "Chichén Itzá day trip", 20.6843, -88.5678, "sight", "Monument", "Chichén Itzá", 10, "Full-day Maya wonder — leave early."),
    place("cun-ek-balam", "Ek Balam day trip", 20.8925, -88.1355, "sight", "Monument", "Ek Balam", 8, "Climbable pyramids with fewer crowds than Chichén."),
    place("cun-rio-secreto", "Rio Secreto", 20.59, -87.13, "nature", "Park", "Riviera Maya", 9, "Underground river cave system — book a tour."),
    place("cun-xcaret", "Xcaret Park", 20.58, -87.12, "sight", "Attraction", "Riviera Maya", 8, "Eco-archaeology park day south of Cancún."),
    place("cun-tulum-day", "Tulum ruins day trip", 20.2145, -87.4295, "sight", "Monument", "Tulum", 9, "Cliff-top Maya ruins over the Caribbean."),

    // ——— Museums / culture ———
    place("cun-museo-maya-note", "San Miguelito museum gardens", 21.071, -86.779, "nature", "Park", "Hotel Zone", 6, "Jungle paths linking museum and ruins."),
    place("cun-memoria", "Casa de la Cultura Cancún", 21.16, -86.83, "museum", "Museum", "Downtown", 5, "Local arts programming downtown."),
    place("cun-underwater", "MUSA underwater museum", 21.1, -86.72, "museum", "Museum", "Caribbean", 8, "Submerged sculptures — snorkel or dive tour."),

    // ——— Cafes ———
    place("cun-pata", "Pata Negra Café", 21.1625, -86.8265, "cafe", "Cafe", "Downtown", 7, "Specialty coffee near Parque de las Palapas.", { cuisine: "coffee" }),
    place("cun-marimba", "Marimba Café", 21.1615, -86.8245, "cafe", "Cafe", "Downtown", 6, "Local cafe for breakfast before the beach.", { cuisine: "coffee mexican" }),
    place("cun-starbucks-isla", "La Isla cafe row", 21.1215, -86.7552, "cafe", "Cafe", "Hotel Zone", 5, "Easy Hotel Zone caffeine at the mall.", { cuisine: "coffee" }),
    place("cun-inca-cafe", "Inca Café Downtown", 21.1635, -86.8275, "cafe", "Cafe", "Downtown", 6, "Quiet laptop-friendly coffee.", { cuisine: "coffee" }),
    place("cun-isla-cafe", "Poc-Na cafe area Isla", 21.2385, -86.7315, "cafe", "Cafe", "Isla Mujeres", 6, "Island town coffee before Playa Norte.", { cuisine: "coffee" }),
    place("cun-ayah", "Áyah Coffee", 21.1595, -86.8325, "cafe", "Cafe", "Downtown", 7, "Third-wave beans in downtown Cancún.", { cuisine: "coffee" }),
    place("cun-bubble", "Bubble Waffle Zone cafe", 21.1325, -86.7495, "cafe", "Cafe", "Hotel Zone", 5, "Sweet cafe stop on the party strip.", { cuisine: "coffee pastry" }),
    place("cun-green", "Green House Cafe", 21.1485, -86.8255, "cafe", "Cafe", "Downtown", 6, "Juices and light bites inland.", { cuisine: "juice healthy" }),

    // ——— Food ———
    place("cun-labna", "Labná", 21.1585, -86.8265, "food", "Restaurant", "Downtown", 8, "Yucatecan classics inland from the Zone.", { cuisine: "yucatecan mexican" }),
    place("cun-el-fish", "El Fish Fritanga", 21.1355, -86.7655, "food", "Restaurant", "Hotel Zone", 8, "Lagoon-side casual seafood.", { cuisine: "seafood mexican" }),
    place("cun-por-que", "¿Por Qué No?", 21.1625, -86.8258, "food", "Restaurant", "Downtown", 7, "Tacos and cantina energy downtown.", { cuisine: "mexican" }),
    place("cun-surfin", "Surfin' Burrito", 21.1315, -86.7485, "food", "Quick meal", "Hotel Zone", 6, "Late burritos on the party strip.", { cuisine: "mexican american" }),
    place("cun-lorenzillo", "Lorenzillo's", 21.1185, -86.7625, "food", "Restaurant", "Hotel Zone", 8, "Overwater lobster dining on the lagoon.", { cuisine: "seafood" }),
    place("cun-haba", "Habana Vieja", 21.16, -86.827, "food", "Restaurant", "Downtown", 7, "Cuban plates near Palapas.", { cuisine: "cuban" }),
    place("cun-taco-fish", "Tacos Fish Tacos", 21.1635, -86.8285, "food", "Quick meal", "Downtown", 7, "Baja-style fish tacos downtown.", { cuisine: "mexican seafood" }),
    place("cun-marakame", "Marakame Café breakfast", 21.1455, -86.82, "food", "Restaurant", "Downtown", 6, "Hearty Mexican breakfasts.", { cuisine: "mexican breakfast" }),
    place("cun-isla-picus", "Picus Isla Mujeres", 21.2375, -86.7318, "food", "Restaurant", "Isla Mujeres", 7, "Waterfront seafood on the island.", { cuisine: "seafood mexican" }),
    place("cun-rolandi", "Rolandi's Isla", 21.2365, -86.732, "food", "Restaurant", "Isla Mujeres", 7, "Italian-Mexican institution on the island.", { cuisine: "italian mexican" }),
    place("cun-harry", "Harry's Steakhouse", 21.1255, -86.7555, "food", "Restaurant", "Hotel Zone", 8, "Steak and seafood splurge in the Zone.", { cuisine: "steakhouse" }),
    place("cun-mexican", "La Habichuela Sunset", 21.12, -86.76, "food", "Restaurant", "Hotel Zone", 7, "Maya-inspired fine dining by the lagoon.", { cuisine: "mexican" }),
    place("cun-cenacolo", "Cenacolo", 21.1185, -86.7585, "food", "Restaurant", "Hotel Zone", 7, "Italian Hotel Zone classic.", { cuisine: "italian" }),
    place("cun-street", "Street tacos near Palapas", 21.1615, -86.8252, "food", "Quick meal", "Downtown", 7, "Evening taco stands around the plaza.", { cuisine: "mexican" }),
    place("cun-cocteleria", "Cocktaileria Puerto Juárez", 21.1855, -86.8052, "food", "Quick meal", "Puerto Juárez", 7, "Seafood cocktails before the ferry.", { cuisine: "seafood mexican" }),

    // ——— Nightlife ———
    place("cun-coco", "Coco Bongo", 21.1325, -86.7488, "nightlife", "Bar", "Hotel Zone", 9, "Cabaret-club spectacle — buy tickets ahead."),
    place("cun-mandala", "Mandala Beach Club", 21.132, -86.7478, "nightlife", "Bar", "Hotel Zone", 7, "Day-to-night beach club on the strip."),
    place("cun-the-city", "The City nightclub", 21.1318, -86.7482, "nightlife", "Bar", "Hotel Zone", 7, "Large Hotel Zone dance club."),
    place("cun-palapas-night", "Palapas evening stalls", 21.1615, -86.8255, "nightlife", "Bar", "Downtown", 7, "Local plaza nights with music and snacks."),
    place("cun-isla-night", "Isla Mujeres waterfront bars", 21.2375, -86.731, "nightlife", "Bar", "Isla Mujeres", 6, "Sunset drinks before the last ferry."),
    place("cun-congo", "Congo Bar", 21.1322, -86.748, "nightlife", "Bar", "Hotel Zone", 6, "Open-air party bar mid-zone."),
    place("cun-bull", "Señor Frog's Cancún", 21.1315, -86.7475, "nightlife", "Bar", "Hotel Zone", 6, "Tourist party restaurant-bar."),
    place("cun-downtown-rooftop", "Downtown rooftop bars", 21.162, -86.826, "nightlife", "Bar", "Downtown", 6, "Quieter mainland evening drinks."),

    // ——— Stays ———
    place("cun-stay-live-aqua", "Live Aqua Beach Resort", 21.0955, -86.7725, "stay", "Hotel", "Hotel Zone", 9, "Adults-oriented beachfront mid-south Zone."),
    place("cun-stay-hyatt", "Hyatt Ziva Cancún", 21.1455, -86.7825, "stay", "Hotel", "Hotel Zone", 8, "Point resort with lagoon and ocean views."),
    place("cun-stay-nizuc", "Nizuc Resort & Spa", 21.0355, -86.7895, "stay", "Hotel", "Punta Nizuc", 9, "Quiet luxury at the southern tip."),
    place("cun-stay-dreams", "Dreams Vista Cancún", 21.12, -86.76, "stay", "Hotel", "Hotel Zone", 7, "All-inclusive mid-zone base."),
    place("cun-stay-downtown", "Náay Telas Cancún", 21.1625, -86.8245, "stay", "Hotel", "Downtown", 7, "Boutique downtown stay near Palapas."),
    place("cun-stay-isla", "Mia Reef Isla Mujeres", 21.26, -86.75, "stay", "Hotel", "Isla Mujeres", 8, "Overwater-vibe island stay by Playa Norte."),
    place("cun-stay-secrets", "Secrets The Vine Cancún", 21.1, -86.765, "stay", "Hotel", "Hotel Zone", 8, "Adults-only high-rise on the beach."),
    place("cun-stay-hostel", "Hostelito Cancún", 21.1635, -86.8265, "stay", "Hostel", "Downtown", 6, "Budget downtown base for markets and buses."),
  ],
};
