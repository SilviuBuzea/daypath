import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const bucharest: CityCatalog = {
  id: "bucharest",
  name: "Bucharest, Romania",
  aliases: ["bucharest", "bucuresti", "bucurești"],
  center: { lat: 44.4268, lon: 26.1025 },
  places: [
    place("bu-palace", "Palace of the Parliament", 44.4279, 26.0873, "sight", "Attraction", "Dealul Spirii", 9, "Huge landmark for a Civic Center morning."),
    place("bu-oldtown", "Old Town / Lipscani", 44.4312, 26.1016, "sight", "Attraction", "Old Town", 8, "Walkable historic lanes for cafes and evening life."),
    place("bu-atheneum", "Romanian Athenaeum", 44.4412, 26.0973, "sight", "Monument", "Calea Victoriei", 8, "Beautiful concert hall on Calea Victoriei."),
    place("bu-revolution", "Revolution Square", 44.4388, 26.0976, "sight", "Attraction", "Calea Victoriei", 7, "Historic square beside major museums."),
    place("bu-village", "Dimitrie Gusti National Village Museum", 44.4728, 26.077, "museum", "Museum", "Herăstrău", 8, "Open-air museum by the lake."),
    place("bu-art", "National Museum of Art", 44.4395, 26.0965, "museum", "Museum", "Calea Victoriei", 8, "Main art museum on the central axis."),
    place("bu-history", "National History Museum", 44.4314, 26.0968, "museum", "Museum", "Calea Victoriei", 7, "History museum near Old Town."),
    place("bu-cismigiu", "Cișmigiu Gardens", 44.4365, 26.0908, "nature", "Park", "City center", 7, "Central park for a slower stretch."),
    place("bu-herastrau", "Herăstrău Park", 44.4705, 26.0788, "nature", "Park", "Herăstrău", 7, "Large lake park in the north."),
    place("bu-carturesti", "Cărturești Carusel", 44.432, 26.1008, "shopping", "Attraction", "Old Town", 7, "Famous bookstore inside Old Town."),

    place("bu-cafe", "Origo Coffee", 44.4335, 26.0965, "cafe", "Cafe", "City center", 6, "Specialty coffee near the center.", { cuisine: "coffee" }),
    place("bu-caru", "Caru' cu Bere", 44.4318, 26.1028, "food", "Restaurant", "Old Town", 7, "Classic Romanian restaurant in Old Town.", { cuisine: "romanian" }),
    place("bu-shift", "Shift Pub / nearby lunch", 44.445, 26.0978, "food", "Restaurant", "Aviatorilor", 5, "Handy lunch area toward the north."),
    place("bu-energy", "Energy Coffee & Lunch", 44.438, 26.0995, "cafe", "Cafe", "Calea Victoriei", 5, "Casual stop on the Victoriei axis."),
    place("bu-manuc", "Hanul lui Manuc", 44.4298, 26.1038, "food", "Restaurant", "Old Town", 6, "Historic courtyard restaurant."),
    place("bu-north", "North station area bistro", 44.4475, 26.0785, "food", "Restaurant", "Gara de Nord", 4, "Simple dinner option if you're staying north."),

    place("bu-control", "Control Club", 44.4368, 26.1055, "nightlife", "Bar", "Universitate", 6, "Live music and late drinks near the center."),
    place("bu-linea", "Linea / Closer to the Moon", 44.4345, 26.1012, "nightlife", "Bar", "Old Town", 6, "Rooftop drinks above Old Town."),

    place("bu-hotel-center", "Hotel Capitol / Victoriei stay", 44.4368, 26.0978, "stay", "Hotel", "Calea Victoriei", 7, "Central hotel axis for most walking days."),
    place("bu-oldtown-stay", "Old Town Boutique Hotel", 44.4315, 26.1012, "stay", "Hotel", "Old Town", 6, "Best if you want nightlife nearby."),
    place("bu-hostel", "Midland Youth Hostel", 44.4398, 26.1005, "stay", "Hostel", "City center", 5, "Budget stay near the center."),
    place("bu-guest", "Victoriei Guest House", 44.4418, 26.0968, "stay", "Guest house", "Calea Victoriei", 5, "Small stay on the main boulevard."),
  ],
};
