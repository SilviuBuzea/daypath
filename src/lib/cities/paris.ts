import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const paris: CityCatalog = {
  id: "paris",
  name: "Paris, France",
  aliases: ["paris"],
  center: { lat: 48.8566, lon: 2.3522 },
  places: [
    // ——— Louvre / 1st ———
    place("pa-louvre", "Louvre Museum", 48.8606, 2.3376, "museum", "Museum", "1st", 10, "Don't try to see it all — pick a wing and book timed entry.", { flags: ["ticket", "early", "touristy"] }),
    place("pa-tuileries", "Jardin des Tuileries", 48.8635, 2.3273, "nature", "Park", "1st", 8, "Formal park between the Louvre and Place de la Concorde."),
    place("pa-concorde", "Place de la Concorde", 48.8656, 2.3212, "sight", "Attraction", "8th", 7, "Obelisk square linking Tuileries and the Champs-Élysées."),
    place("pa-orangerie", "Musée de l'Orangerie", 48.8638, 2.3227, "museum", "Museum", "1st", 8, "Monet's Water Lilies in oval rooms beside the Tuileries."),
    place("pa-palais-royal", "Palais-Royal gardens", 48.8635, 2.3365, "nature", "Garden", "1st", 7, "Arcades and quiet courtyards behind the Louvre."),
    place("pa-saint-eustache", "Église Saint-Eustache", 48.8632, 2.348, "sight", "Monument", "1st", 6, "Grand church beside Les Halles."),
    place("pa-forum-halles", "Westfield Forum des Halles", 48.862, 2.347, "shopping", "Market", "1st", 5, "Modern mall over the old market heart — handy if you need shops."),

    // ——— Île de la Cité / Latin Quarter ———
    place("pa-notre", "Notre-Dame", 48.853, 2.3499, "sight", "Monument", "Île de la Cité", 10, "Island landmark; check current visit rules after restoration."),
    place("pa-sainte", "Sainte-Chapelle", 48.8554, 2.345, "sight", "Monument", "Île de la Cité", 9, "Stained-glass chapel — book ahead for peak hours."),
    place("pa-conciergerie", "Conciergerie", 48.8556, 2.3456, "museum", "Museum", "Île de la Cité", 7, "Medieval palace-prison on the same island as Sainte-Chapelle."),
    place("pa-pantheon", "Panthéon", 48.8462, 2.3461, "sight", "Monument", "5th", 8, "Neoclassical dome and Foucault pendulum in the Latin Quarter."),
    place("pa-sorbonne", "Sorbonne / Latin Quarter walk", 48.849, 2.343, "sight", "Attraction", "5th", 6, "Bookshops, students, and side streets around the university."),
    place("pa-cluny", "Musée de Cluny", 48.8503, 2.3431, "museum", "Museum", "5th", 7, "Medieval art and the Lady and the Unicorn tapestries."),
    place("pa-shakespeare", "Shakespeare and Company", 48.8526, 2.3472, "shopping", "Market", "5th", 6, "Legendary English bookshop facing Notre-Dame."),

    // ——— Orsay / Left Bank / 7th ———
    place("pa-orsay", "Musée d'Orsay", 48.86, 2.3266, "museum", "Museum", "7th", 10, "Impressionists in a former station — pair with a Seine walk. Book timed entry when you can.", { flags: ["ticket"] }),
    place("pa-rodin", "Musée Rodin", 48.8553, 2.3158, "museum", "Museum", "7th", 8, "Sculpture museum with a calm garden near Invalides."),
    place("pa-invalides", "Les Invalides", 48.8565, 2.3126, "sight", "Monument", "7th", 8, "Dome of Napoleon's tomb and army museums."),
    place("pa-eiffel", "Eiffel Tower", 48.8584, 2.2945, "sight", "Attraction", "7th", 10, "Book summit or second-floor tickets; Champ de Mars for free views.", { flags: ["ticket", "touristy"] }),
    place("pa-champ-mars", "Champ de Mars", 48.8555, 2.298, "nature", "Park", "7th", 7, "Lawn in front of the tower for picnic photos."),
    place("pa-trocadero", "Trocadéro viewpoint", 48.8615, 2.289, "sight", "Viewpoint", "16th", 8, "Classic Eiffel Tower photo terrace across the river."),
    place("pa-quai-branly", "Musée du Quai Branly", 48.8608, 2.2975, "museum", "Museum", "7th", 7, "World cultures museum near the tower."),

    // ——— Champs-Élysées / 8th ———
    place("pa-arc", "Arc de Triomphe", 48.8738, 2.295, "sight", "Monument", "8th", 9, "Climb for a star-shaped avenue view."),
    place("pa-champs", "Champs-Élysées stroll", 48.8698, 2.3075, "shopping", "Market", "8th", 6, "Grand avenue shopping between Concorde and the Arc."),
    place("pa-petit-palais", "Petit Palais", 48.866, 2.3145, "museum", "Museum", "8th", 7, "Free fine-arts museum near the Grand Palais."),
    place("pa-grand-palais", "Grand Palais area", 48.8661, 2.3125, "sight", "Attraction", "8th", 6, "Exhibition hall and river-edge landmark."),
    place("pa-madeleine", "Église de la Madeleine", 48.87, 2.3242, "sight", "Monument", "8th", 6, "Temple-style church near luxury shopping."),

    // ——— Marais / 3rd–4th ———
    place("pa-vosges", "Place des Vosges", 48.8556, 2.3655, "sight", "Attraction", "Le Marais", 8, "Arcaded square for a Marais afternoon."),
    place("pa-pompidou", "Centre Pompidou", 48.8606, 2.3522, "museum", "Museum", "4th", 8, "Modern and contemporary art with a rooftop city view."),
    place("pa-carnavalet", "Musée Carnavalet", 48.8575, 2.3622, "museum", "Museum", "Le Marais", 7, "Free museum of Paris history in historic mansions."),
    place("pa-picardie", "Maison de Victor Hugo", 48.8554, 2.3662, "museum", "Museum", "Le Marais", 6, "Writer's apartment on Place des Vosges."),
    place("pa-marche-enfants", "Marché des Enfants Rouges", 48.8629, 2.3619, "shopping", "Market", "Le Marais", 7, "Oldest covered market — casual lunch counters."),
    place("pa-jewish-quarter", "Rue des Rosiers", 48.8572, 2.3595, "sight", "Attraction", "Le Marais", 6, "Falafel strip and boutique streets."),
    place("pa-hotel-sens", "Hôtel de Sens gardens", 48.8535, 2.359, "nature", "Garden", "4th", 5, "Quiet medieval courtyard near the Seine."),

    // ——— Montmartre ———
    place("pa-sacre", "Sacré-Cœur", 48.8867, 2.3431, "sight", "Monument", "Montmartre", 9, "White dome above the city — go early for fewer crowds."),
    place("pa-place-tertres", "Place du Tertre", 48.8864, 2.3408, "sight", "Attraction", "Montmartre", 6, "Artist square — touristy but atmospheric."),
    place("pa-montmartre-museum", "Musée de Montmartre", 48.8878, 2.3405, "museum", "Museum", "Montmartre", 6, "Hill history and Renoir gardens."),
    place("pa-wall-love", "Le Mur des Je t'aime", 48.8847, 2.3385, "sight", "Attraction", "Montmartre", 5, "Love-wall photo stop near Abbesses."),
    place("pa-moulin", "Moulin Rouge exterior", 48.8841, 2.3322, "sight", "Attraction", "Pigalle", 5, "Iconic facade if you're in Pigalle — shows are separate."),

    // ——— Luxembourg / Saint-Germain ———
    place("pa-luxembourg", "Jardin du Luxembourg", 48.8462, 2.3372, "nature", "Garden", "6th", 9, "Chairs, ponds, and palace gardens on the Left Bank."),
    place("pa-odeon", "Odéon / Saint-Germain stroll", 48.8495, 2.3385, "sight", "Attraction", "6th", 6, "Cafes, galleries, and bookshops west of Luxembourg."),
    place("pa-saint-sulpice", "Saint-Sulpice", 48.851, 2.3347, "sight", "Monument", "6th", 6, "Vast church with Delacroix frescoes."),
    place("pa-musee-orsay-side", "Rue de Seine galleries", 48.8555, 2.337, "shopping", "Market", "6th", 5, "Gallery hopping between Saint-Germain and the river."),

    // ——— Canal / Bastille / 11th ———
    place("pa-canal", "Canal Saint-Martin", 48.8715, 2.3655, "nature", "Park", "10th", 7, "Locks, bridges, and picnic banks northeast of the center."),
    place("pa-bastille", "Place de la Bastille", 48.8532, 2.3691, "sight", "Attraction", "11th", 5, "Orientation hub for the east — Opéra Bastille nearby."),
    place("pa-père-lachaise", "Père Lachaise Cemetery", 48.8614, 2.3933, "nature", "Park", "20th", 7, "Leafy cemetery of famous graves — treat as its own pocket."),
    place("pa-belleville", "Parc de Belleville", 48.8712, 2.3845, "sight", "Viewpoint", "20th", 6, "Hill park with one of the best free city views."),
    place("pa-buttes", "Parc des Buttes-Chaumont", 48.8798, 2.3828, "nature", "Park", "19th", 7, "Dramatic cliffs and temple viewpoint in the northeast."),

    // ——— Opera / Grands Boulevards ———
    place("pa-opera", "Palais Garnier", 48.8719, 2.3316, "sight", "Monument", "9th", 8, "Opulent opera house — tour if you're not seeing a show."),
    place("pa-galeries", "Galeries Lafayette dome", 48.8736, 2.3322, "shopping", "Market", "9th", 7, "Department store with a free rooftop lookout."),
    place("pa-printemps", "Printemps Haussmann", 48.874, 2.328, "shopping", "Market", "9th", 6, "Classic boulevard shopping next door."),

    // ——— La Défense / outer highlights ———
    place("pa-defense", "La Défense Grande Arche", 48.892, 2.236, "sight", "Viewpoint", "La Défense", 6, "Modern skyline day-trip west — metro from the center."),
    place("pa-versailles", "Palace of Versailles", 48.8049, 2.1204, "sight", "Castle", "Versailles", 10, "Full half-day or day trip — gardens deserve time too."),
    place("pa-montparnasse", "Tour Montparnasse viewpoint", 48.8421, 2.3219, "sight", "Viewpoint", "15th", 6, "Paid roof view that includes the Eiffel Tower in frame."),
    place("pa-catacombs", "Catacombs of Paris", 48.8338, 2.3324, "sight", "Attraction", "14th", 7, "Underground ossuary — book timed tickets."),
    place("pa-bourse", "Bourse de Commerce — Pinault Collection", 48.8627, 2.3426, "museum", "Museum", "1st", 7, "Contemporary art in the restored circular stock exchange."),

    // ——— More museums ———
    place("pa-picasso", "Musée Picasso", 48.8598, 2.3623, "museum", "Museum", "Le Marais", 7, "Picasso collection in a Marais mansion."),
    place("pa-marmottan", "Musée Marmottan Monet", 48.8592, 2.2675, "museum", "Museum", "16th", 7, "Deep Monet collection in a quieter west pocket."),
    place("pa-jacquemart", "Musée Jacquemart-André", 48.8756, 2.3105, "museum", "Museum", "8th", 6, "Private mansion museum near Boulevard Haussmann."),
    place("pa-arts-metiers", "Musée des Arts et Métiers", 48.8665, 2.3554, "museum", "Museum", "3rd", 6, "Science and invention museum with Foucault's original pendulum."),

    // ——— Cafes ———
    place("pa-angelina", "Angelina", 48.8651, 2.3285, "cafe", "Cafe", "1st", 8, "Famous hot chocolate beside the Tuileries.", { cuisine: "pastry coffee" }),
    place("pa-cafe-flore", "Café de Flore", 48.8541, 2.3325, "cafe", "Cafe", "6th", 7, "Classic Left Bank terrace — touristy, still iconic.", { cuisine: "coffee" }),
    place("pa-deux-magots", "Les Deux Magots", 48.854, 2.3332, "cafe", "Cafe", "6th", 6, "Literary cafe across from Flore.", { cuisine: "coffee" }),
    place("pa-hardware", "Hardware Société", 48.8858, 2.3438, "cafe", "Cafe", "Montmartre", 6, "Australian-style brunch coffee by Sacré-Cœur.", { cuisine: "coffee" }),
    place("pa-kb", "KB CaféShop", 48.8785, 2.3385, "cafe", "Cafe", "9th", 5, "Specialty coffee near Pigalle / South Pigalle.", { cuisine: "coffee" }),
    place("pa-cafe-kitsune", "Café Kitsuné Palais-Royal", 48.8638, 2.3375, "cafe", "Cafe", "1st", 5, "Coffee in the Palais-Royal arcades.", { cuisine: "coffee" }),
    place("pa-berthillon", "Berthillon ice cream", 48.8517, 2.3566, "cafe", "Cafe", "Île Saint-Louis", 7, "Island ice-cream institution.", { cuisine: "ice_cream pastry" }),

    // ——— Food ———
    place("pa-bouillon", "Bouillon Chartier", 48.8724, 2.344, "food", "Restaurant", "9th", 7, "Belle Époque room and classic French plates at friendly prices.", { cuisine: "french" }),
    place("pa-chez-janou", "Chez Janou", 48.8578, 2.3658, "food", "Restaurant", "Le Marais", 7, "Provençal cooking and chocolate mousse near Vosges.", { cuisine: "french" }),
    place("pa-breizh", "Breizh Café", 48.8572, 2.3624, "food", "Restaurant", "Le Marais", 7, "Buckwheat galettes and cider.", { cuisine: "french crepe" }),
    place("pa-septime", "Septime", 48.8536, 2.3808, "food", "Restaurant", "11th", 8, "Modern tasting-menu energy — book well ahead.", { cuisine: "french" }),
    place("pa-cafe-constant", "Café Constant", 48.8572, 2.3058, "food", "Restaurant", "7th", 7, "Reliable bistro near the Eiffel Tower.", { cuisine: "french" }),
    place("pa-frenchie", "Frenchie Bar à Vins", 48.868, 2.3485, "food", "Restaurant", "2nd", 7, "Wine-bar plates near Sentier.", { cuisine: "french" }),
    place("pa-laze", "L'As du Fallafel", 48.8574, 2.3592, "food", "Quick meal", "Le Marais", 7, "Famous falafel line on Rue des Rosiers.", { cuisine: "middle_eastern vegetarian" }),
    place("pa-du-pain", "Du Pain et des Idées", 48.871, 2.3625, "food", "Quick meal", "10th", 6, "Bakery stop near Canal Saint-Martin.", { cuisine: "pastry bread" }),
    place("pa-clown", "Clown Bar", 48.8635, 2.371, "food", "Restaurant", "11th", 6, "Small natural-wine plates near Oberkampf.", { cuisine: "french" }),
    place("pa-ellsworth", "Ellsworth", 48.8655, 2.336, "food", "Restaurant", "1st", 6, "Casual modern plates near Palais-Royal.", { cuisine: "european" }),
    place("pa-royal-merveilleux", "Le Royal Combawa area dinner", 48.886, 2.335, "food", "Restaurant", "Montmartre", 5, "Dinner pocket below Sacré-Cœur.", { cuisine: "french" }),
    place("pa-chez-labeille", "Chez l'Ami Jean", 48.8595, 2.3045, "food", "Restaurant", "7th", 7, "Hearty Basque-leaning bistro near the tower.", { cuisine: "french" }),
    place("pa-le-comptoir", "Le Comptoir du Relais", 48.8535, 2.338, "food", "Restaurant", "6th", 7, "Busy Left Bank bistro — lunch is easier than dinner.", { cuisine: "french" }),
    place("pa-pizzeria", "Projectez-vous / Oberkampf pizza", 48.8655, 2.378, "food", "Quick meal", "11th", 5, "Casual east-Paris dinner after Canal walks.", { cuisine: "pizza italian" }),
    place("pa-viet", "Pho 14 / Belleville noodles", 48.8718, 2.3805, "food", "Quick meal", "Belleville", 5, "Quick Asian bowls near Belleville park.", { cuisine: "vietnamese" }),
    place("pa-marche-lunch", "Marché Bastille lunch", 48.8535, 2.3695, "food", "Quick meal", "Bastille", 6, "Market stalls on Thursday and Sunday mornings.", { cuisine: "market french" }),
    place("pa-seine-dinner", "Seine riverside dinner", 48.8585, 2.325, "food", "Restaurant", "7th", 6, "Left Bank dinner with river walks after Orsay.", { cuisine: "french" }),
    place("pa-vegan", "Wild & the Moon", 48.8615, 2.364, "food", "Restaurant", "Le Marais", 5, "Plant-based bowls if you want a lighter Marais meal.", { cuisine: "vegan vegetarian" }),

    // ——— Nightlife ———
    place("pa-experimental", "Experimental Cocktail Club", 48.8637, 2.3488, "nightlife", "Bar", "2nd", 7, "Speakeasy-style cocktails near Étienne Marcel."),
    place("pa-prescription", "Prescription Cocktail Club", 48.8538, 2.3375, "nightlife", "Bar", "6th", 7, "Hidden-feeling cocktails in Saint-Germain."),
    place("pa-candelaria", "Candelaria", 48.8628, 2.3635, "nightlife", "Bar", "Le Marais", 7, "Tacos in front, serious cocktails in the back room."),
    place("pa-le-mary", "Le Mary Celeste", 48.8632, 2.3655, "nightlife", "Bar", "Le Marais", 6, "Oysters and natural wine energy."),
    place("pa-concrete", "River club / Quai de la Rapée area", 48.8455, 2.372, "nightlife", "Bar", "12th", 5, "Late riverside nights southeast of Bastille."),
    place("pa-pigalle-night", "South Pigalle bars", 48.8815, 2.3375, "nightlife", "Bar", "Pigalle", 7, "Dense bar strip below Montmartre."),
    place("pa-seine-apero", "Seine golden-hour apéro", 48.8545, 2.3475, "nightlife", "Bar", "Île de la Cité", 6, "Bridge-side drinks as the stone lights up."),
    place("pa-oberkampf", "Oberkampf nightlife", 48.865, 2.379, "nightlife", "Bar", "11th", 7, "Classic east-Paris bar crawl streets."),

    // ——— Stays ———
    place("pa-stay-louvre", "Hôtel du Louvre area", 48.8632, 2.336, "stay", "Hotel", "1st", 9, "Prime for Louvre, Tuileries, and Right Bank days."),
    place("pa-stay-brighton", "Hôtel Brighton area", 48.8645, 2.3295, "stay", "Hotel", "1st", 8, "Rue de Rivoli base facing the Tuileries."),
    place("pa-stay-marais", "Le Marais Hotel", 48.8588, 2.3622, "stay", "Hotel", "Le Marais", 8, "Walkable to Vosges, Picasso, and the Centre Pompidou."),
    place("pa-stay-saint-germain", "Saint-Germain Hotel", 48.8535, 2.3345, "stay", "Hotel", "6th", 8, "Left Bank cafes and Luxembourg within easy reach."),
    place("pa-stay-eiffel", "Tour Eiffel Hotel", 48.8575, 2.3015, "stay", "Hotel", "7th", 7, "Best if the 7th and tower area are your focus."),
    place("pa-stay-opera", "Opéra Hotel", 48.8715, 2.3325, "stay", "Hotel", "9th", 7, "Near Palais Garnier and the grands magasins."),
    place("pa-stay-montmartre", "Montmartre Boutique Hotel", 48.8855, 2.3385, "stay", "Hotel", "Montmartre", 6, "Village feel below Sacré-Cœur."),
    place("pa-stay-bastille", "Bastille Hotel", 48.8538, 2.3715, "stay", "Hotel", "11th", 6, "East Paris base for Canal and Oberkampf nights."),
    place("pa-stay-latin", "Latin Quarter Hotel", 48.8495, 2.3485, "stay", "Hotel", "5th", 7, "Handy for Notre-Dame, Panthéon, and Left Bank walks."),
    place("pa-stay-generator", "Generator Paris", 48.8778, 2.3625, "stay", "Hostel", "10th", 6, "Large hostel near Canal Saint-Martin."),
    place("pa-stay-stchristopher", "St Christopher's Canal", 48.8855, 2.3685, "stay", "Hostel", "19th", 5, "Budget beds by the canal basin."),
    place("pa-stay-oops", "Oops Hostel", 48.8445, 2.3515, "stay", "Hostel", "5th", 5, "Central budget stay near the Latin Quarter."),
    place("pa-stay-guest-marais", "Marais Guest House", 48.8605, 2.3615, "stay", "Guest house", "Le Marais", 6, "Small stay in the historic lanes."),
    place("pa-stay-guest-left", "Left Bank Guest House", 48.8538, 2.3348, "stay", "Guest house", "6th", 6, "Quiet rooms near Saint-Germain cafes."),
    place("pa-stay-apt-iles", "Île Saint-Louis Apartment", 48.8518, 2.3555, "stay", "Apartment", "Île Saint-Louis", 7, "Apartment living on the quieter island."),
    place("pa-stay-apt-canal", "Canal Saint-Martin Apartment", 48.8725, 2.3645, "stay", "Apartment", "10th", 6, "Self-catering beside the locks and cafes."),
    place("pa-stay-apt-11", "Oberkampf Apartment", 48.8645, 2.3775, "stay", "Apartment", "11th", 5, "Local east-Paris apartment base."),
    place("pa-stay-renaissance", "Le Marais Design Hotel", 48.8565, 2.3605, "stay", "Hotel", "Le Marais", 7, "Stylish mid-range base for Right Bank walking."),
    place("pa-stay-malte", "Hôtel de Malte area", 48.8655, 2.3535, "stay", "Hotel", "2nd", 6, "Between Sentier and the Centre Pompidou."),
    place("pa-stay-passy", "Passy / Trocadéro Hotel", 48.86, 2.2855, "stay", "Hotel", "16th", 6, "Quieter west base near Trocadéro views."),
  ],
};
