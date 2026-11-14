import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const paris: CityCatalog = {
  id: "paris",
  name: "Paris, France",
  aliases: ["paris"],
  center: { lat: 48.8566, lon: 2.3522 },
  places: [
    place("pa-louvre", "Louvre Museum", 48.8606, 2.3376, "museum", "Museum", "1st", 10, "Anchor a Right Bank museum morning here."),
    place("pa-orsay", "Musée d'Orsay", 48.86, 2.3266, "museum", "Museum", "7th", 9, "Impressionist museum across the river from the Louvre."),
    place("pa-notre", "Notre-Dame", 48.853, 2.3499, "sight", "Monument", "Île de la Cité", 9, "Island landmark in the historic center."),
    place("pa-sainte", "Sainte-Chapelle", 48.8554, 2.345, "sight", "Monument", "Île de la Cité", 8, "Stained glass chapel beside Notre-Dame."),
    place("pa-eiffel", "Eiffel Tower", 48.8584, 2.2945, "sight", "Attraction", "7th", 10, "Save a West Bank day for this area."),
    place("pa-arc", "Arc de Triomphe", 48.8738, 2.295, "sight", "Monument", "8th", 8, "Pair with a Champs-Élysées walk."),
    place("pa-montmartre", "Sacré-Cœur", 48.8867, 2.3431, "sight", "Monument", "Montmartre", 8, "Hilltop church and village streets."),
    place("pa-marais", "Place des Vosges", 48.8556, 2.3655, "sight", "Attraction", "Le Marais", 7, "Elegant square for a Marais afternoon."),
    place("pa-luxembourg", "Jardin du Luxembourg", 48.8462, 2.3372, "nature", "Garden", "6th", 7, "Classic park on the Left Bank."),
    place("pa-tuileries", "Jardin des Tuileries", 48.8635, 2.3273, "nature", "Park", "1st", 7, "Park between the Louvre and Place de la Concorde."),
    place("pa-pompidou", "Centre Pompidou", 48.8606, 2.3522, "museum", "Museum", "4th", 7, "Modern art near the Marais."),
    place("pa-marche", "Marché des Enfants Rouges", 48.8629, 2.3619, "shopping", "Market", "Le Marais", 6, "Covered market for a casual lunch."),

    place("pa-angelina", "Angelina", 48.8651, 2.3285, "cafe", "Cafe", "1st", 7, "Hot chocolate near the Tuileries.", { cuisine: "pastry" }),
    place("pa-cafe-flore", "Café de Flore", 48.8541, 2.3325, "cafe", "Cafe", "6th", 6, "Classic Left Bank cafe stop.", { cuisine: "coffee" }),
    place("pa-bouillon", "Bouillon Chartier", 48.8724, 2.344, "food", "Restaurant", "9th", 6, "Budget-friendly classic French dining.", { cuisine: "french" }),
    place("pa-chez", "Chez Janou", 48.8578, 2.3658, "food", "Restaurant", "Le Marais", 7, "Provençal plates near Place des Vosges.", { cuisine: "french" }),
    place("pa-septime", "Septime", 48.8536, 2.3808, "food", "Restaurant", "11th", 8, "Modern dinner if the budget allows."),
    place("pa-breizh", "Breizh Café", 48.8572, 2.3624, "food", "Restaurant", "Le Marais", 6, "Crepes and cider in the Marais."),
    place("pa-cafe-eiffel", "Café Constant", 48.8572, 2.3058, "food", "Restaurant", "7th", 6, "Handy bistro near the Eiffel Tower."),

    place("pa-experimental", "Experimental Cocktail Club", 48.8637, 2.3488, "nightlife", "Bar", "2nd", 6, "Cocktail bar near the center."),
    place("pa-hardware", "Hardware Société", 48.8858, 2.3438, "cafe", "Cafe", "Montmartre", 5, "Brunch-and-coffee stop by Sacré-Cœur."),

    place("pa-hotel-louvre", "Hôtel du Louvre area stay", 48.8632, 2.336, "stay", "Hotel", "1st", 7, "Central for Louvre and Right Bank days."),
    place("pa-marais-stay", "Le Marais Hotel", 48.8588, 2.3622, "stay", "Hotel", "Le Marais", 6, "Good base for Marais walking."),
    place("pa-hostel", "Generator Paris", 48.8778, 2.3625, "stay", "Hostel", "10th", 5, "Budget stay north of the center."),
    place("pa-leftbank", "Left Bank Guest House", 48.8538, 2.3348, "stay", "Guest house", "6th", 5, "Quieter Left Bank base near cafes."),
  ],
};
