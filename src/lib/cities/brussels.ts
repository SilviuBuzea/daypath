import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const brussels: CityCatalog = {
  id: "brussels",
  name: "Brussels, Belgium",
  aliases: ["brussels", "bruxelles", "brussel"],
  center: { lat: 50.8503, lon: 4.3517 },
  places: [
    // ——— Grand-Place / Centre ———
    place("br-grand", "Grand-Place", 50.8467, 4.3525, "sight", "Attraction", "Centre", 10, "Gothic square and guildhalls — the city's postcard."),
    place("br-hotel-ville", "Brussels Town Hall", 50.8466, 4.3517, "sight", "Monument", "Centre", 9, "Flamboyant Gothic tower facing the Grand-Place."),
    place("br-maison-roi", "Maison du Roi / Museum of the City", 50.8469, 4.353, "museum", "Museum", "Centre", 7, "City history and Manneken Pis wardrobe across the square."),
    place("br-manneken", "Manneken Pis", 50.845, 4.3499, "sight", "Attraction", "Centre", 6, "Tiny bronze fountain boy — quick photo stop southwest of Grand-Place."),
    place("br-jeanneke", "Jeanneke Pis", 50.8482, 4.3542, "sight", "Attraction", "Centre", 5, "Playful counterpart fountain tucked in an Impasse de la Fidélité alley."),
    place("br-galeries", "Galeries Royales Saint-Hubert", 50.8475, 4.355, "shopping", "Attraction", "Centre", 8, "Glass-covered 19th-century arcades for chocolate, books, and browsing."),
    place("br-bourse", "Bourse / Belgian Beer World area", 50.8482, 4.3495, "sight", "Attraction", "Centre", 7, "Former stock exchange and beer museum on Boulevard Anspach."),
    place("br-cathedrale", "Cathedral of St. Michael and St. Gudula", 50.8478, 4.3572, "sight", "Monument", "Centre", 8, "Twin-towered Gothic cathedral above the lower town."),
    place("br-mont-arts", "Mont des Arts viewpoint", 50.8445, 4.3565, "sight", "Viewpoint", "Centre", 8, "Garden terrace looking toward the Town Hall spire."),
    place("br-saint-nicolas", "Église Saint-Nicolas", 50.8472, 4.3512, "sight", "Monument", "Centre", 6, "Compact medieval church steps from Grand-Place."),

    // ——— Royal Quarter / Sablon ———
    place("br-palace", "Royal Palace of Brussels", 50.8426, 4.3622, "sight", "Monument", "Royal Quarter", 7, "Official palace facing Parc de Bruxelles — interiors open in summer."),
    place("br-parc", "Parc de Bruxelles", 50.8445, 4.3635, "nature", "Park", "Royal Quarter", 7, "Formal park between the palace and the parliament."),
    place("br-magritte", "Magritte Museum", 50.8422, 4.359, "museum", "Museum", "Royal Quarter", 9, "World's largest René Magritte collection in the Royal Museums."),
    place("br-finarts", "Royal Museums of Fine Arts", 50.8425, 4.3585, "museum", "Museum", "Royal Quarter", 8, "Old Masters through modern Belgian art beside Magritte."),
    place("br-beaux", "BOZAR Centre for Fine Arts", 50.8442, 4.3595, "museum", "Museum", "Royal Quarter", 7, "Horta-designed arts centre with exhibitions and concerts."),
    place("br-sablon", "Place du Grand Sablon", 50.8405, 4.3555, "shopping", "Market", "Sablon", 8, "Antique weekends, chocolate shops, and café terraces."),
    place("br-petit-sablon", "Place du Petit Sablon", 50.8398, 4.3568, "nature", "Garden", "Sablon", 7, "Fenced garden with artisan statues above the Sablon."),
    place("br-notre-dame-sablon", "Notre-Dame du Sablon", 50.8402, 4.3562, "sight", "Monument", "Sablon", 7, "Late-Gothic church of the aristocratic quarter."),
    place("br-jewish", "Jewish Museum of Belgium", 50.8395, 4.3545, "museum", "Museum", "Sablon", 6, "Belgian Jewish history near the Sablon antiques strip."),
    place("br-musical", "Musical Instruments Museum", 50.8428, 4.3598, "museum", "Museum", "Royal Quarter", 7, "Art Nouveau Old England building with rooftop café views."),

    // ——— Marolles / Midi ———
    place("br-marolles", "Marolles flea market", 50.8365, 4.3455, "shopping", "Market", "Marolles", 7, "Daily Place du Jeu de Balle flea market in the working-class quarter."),
    place("br-palace-justice", "Palace of Justice", 50.8368, 4.3518, "sight", "Monument", "Marolles", 7, "Vast neoclassical courthouse dominating the Marolles skyline."),
    place("br-atelier", "Ateliers des Tanneurs area", 50.8355, 4.3445, "sight", "Attraction", "Marolles", 6, "Converted tannery halls and indie shops below the Palace."),
    place("br-porte-hal", "Porte de Hal", 50.8335, 4.3448, "sight", "Monument", "Marolles", 6, "Sole surviving medieval city gate — now a museum."),
    place("br-midi", "Gare du Midi / South Station", 50.8352, 4.3365, "sight", "Attraction", "Midi", 5, "Eurostar and TGV hub — orientation for south-side arrivals."),

    // ——— Saint-Géry / Dansaert ———
    place("br-saint-gery", "Place Saint-Géry", 50.849, 4.347, "sight", "Attraction", "Saint-Géry", 7, "Former covered market square — nightlife and terrace hub."),
    place("br-halles-gery", "Halles Saint-Géry", 50.8492, 4.3468, "sight", "Attraction", "Saint-Géry", 6, "Iron-and-glass market hall hosting exhibitions and events."),
    place("br-dansaert", "Rue Antoine Dansaert", 50.8515, 4.3445, "shopping", "Market", "Dansaert", 7, "Belgian fashion and design boutiques west of the centre."),
    place("br-canal", "Brussels Canal quays", 50.8535, 4.3415, "nature", "Park", "Canal", 6, "Former industrial waterfront walks toward Tour & Taxis."),
    place("br-tour-taxis", "Tour & Taxis", 50.8665, 4.3485, "sight", "Attraction", "Laeken edge", 7, "Converted freight sheds with markets, offices, and events."),

    // ——— European Quarter / Cinquantenaire ———
    place("br-cinquante", "Parc du Cinquantenaire", 50.8405, 4.3935, "nature", "Park", "European Quarter", 8, "Triumphal arch park with museums on the east side."),
    place("br-autoworld", "Autoworld", 50.8402, 4.3938, "museum", "Museum", "European Quarter", 7, "Classic car museum inside a Cinquantenaire hall."),
    place("br-army", "Royal Museum of the Armed Forces", 50.8408, 4.3925, "museum", "Museum", "European Quarter", 6, "Military history under the Cinquantenaire arcades."),
    place("br-art-history", "Art & History Museum", 50.8395, 4.3915, "museum", "Museum", "European Quarter", 7, "Antiquities and decorative arts in Cinquantenaire."),
    place("br-parlement", "European Parliament / Parlamentarium", 50.8385, 4.3755, "sight", "Attraction", "European Quarter", 7, "EU institutions and free visitor centre near Place Luxembourg."),
    place("br-luxembourg", "Place du Luxembourg", 50.8395, 4.375, "sight", "Attraction", "European Quarter", 6, "Après-work terrace square facing the parliament."),
    place("br-schuman", "Schuman roundabout", 50.8425, 4.3825, "sight", "Attraction", "European Quarter", 5, "Heart of the EU quarter — Berlaymont and Council buildings."),

    // ——— Ixelles / Avenue Louise ———
    place("br-louise", "Avenue Louise", 50.8275, 4.3655, "shopping", "Market", "Ixelles", 7, "Flagship fashion and department stores south of the centre."),
    place("br-ixelles-ponds", "Ixelles Ponds", 50.8225, 4.3725, "nature", "Park", "Ixelles", 7, "Twin lakes with paths and café terraces."),
    place("br-abbaye", "Abbaye de la Cambre", 50.8185, 4.3735, "sight", "Monument", "Ixelles", 7, "Quiet abbey gardens at the end of Avenue Louise."),
    place("br-flagey", "Place Flagey", 50.8275, 4.372, "sight", "Attraction", "Ixelles", 7, "Art Deco radio building and Sunday food market."),
    place("br-horta", "Horta Museum", 50.8222, 4.3555, "museum", "Museum", "Saint-Gilles", 8, "Victor Horta's own Art Nouveau house and studio."),
    place("br-saint-gilles", "Saint-Gilles town hall", 50.8235, 4.3455, "sight", "Monument", "Saint-Gilles", 6, "Ornate municipal palace on the commune square."),
    place("br-matonge", "Matongé African quarter", 50.8335, 4.3625, "sight", "Attraction", "Ixelles", 6, "Congolese shops and restaurants around Porte de Namur."),

    // ——— Heysel / Laeken ———
    place("br-atomium", "Atomium", 50.8949, 4.3415, "sight", "Attraction", "Heysel", 9, "1958 World's Fair iron-crystal icon — go up for panoramas."),
    place("br-mini", "Mini-Europe", 50.8942, 4.3385, "sight", "Attraction", "Heysel", 6, "Miniature landmarks park beside the Atomium."),
    place("br-laeken", "Royal Greenhouses of Laeken", 50.8885, 4.3555, "nature", "Garden", "Laeken", 8, "Vast glasshouses open a few weeks each spring."),
    place("br-chinese", "Chinese Pavilion & Japanese Tower", 50.8925, 4.3615, "sight", "Attraction", "Laeken", 6, "Orientalist pavilions near the royal domain."),
    place("br-atomiumpark", "Osseghem Park", 50.8935, 4.3455, "nature", "Park", "Heysel", 5, "Green space framing the Atomium approaches."),

    // ——— Anderlecht / West ———
    place("br-erasme", "Erasmus House", 50.8325, 4.3085, "museum", "Museum", "Anderlecht", 6, "Renaissance humanist museum with a quiet garden."),
    place("br-midi-market", "Midi Market (Sunday)", 50.8365, 4.3325, "shopping", "Market", "Midi", 7, "Huge Sunday street market stretching from Gare du Midi."),
    place("br-forest", "Forest Park / Parc de Forest", 50.8215, 4.3335, "nature", "Park", "Forest", 6, "Large south-west park with ponds and playgrounds."),
    place("br-koekelberg", "National Basilica of the Sacred Heart", 50.8665, 4.3185, "sight", "Monument", "Koekelberg", 7, "Enormous Art Deco basilica with a panorama platform."),

    // ——— Woluwe / East parks ———
    place("br-woluwe", "Parc de Woluwe", 50.8295, 4.4285, "nature", "Park", "Woluwe", 6, "English-style park with lakes east of the EU quarter."),
    place("br-tervuren", "AfricaMuseum Tervuren", 50.8305, 4.5175, "museum", "Museum", "Tervuren", 7, "Central Africa collections in a park palace — tram from centre."),
    place("br-bois", "Bois de la Cambre", 50.8055, 4.3755, "nature", "Park", "Ixelles", 7, "Forest park with a lake island café south of Avenue Louise."),

    // ——— More museums ———
    place("br-comic", "Belgian Comic Strip Center", 50.8508, 4.3602, "museum", "Museum", "Centre", 7, "Tintin and bande dessinée in a Horta warehouse."),
    place("br-trainworld", "Train World", 50.88, 4.3785, "museum", "Museum", "Schaerbeek", 7, "Railway museum in the restored Schaerbeek station."),
    place("br-belvue", "BELvue Museum", 50.8428, 4.3605, "museum", "Museum", "Royal Quarter", 6, "Belgium's political and social history by the palace."),
    place("br-chocolate", "Choco-Story Brussels", 50.8485, 4.3525, "museum", "Museum", "Centre", 6, "Chocolate history and tastings near Grand-Place."),
    place("br-fashion", "ModeMuseum / Fashion & Lace Museum", 50.8488, 4.3515, "museum", "Museum", "Centre", 5, "Costume and lace collections in the historic centre."),

    // ——— Cafes ———
    place("br-cafe-mok", "Mok Coffee", 50.8505, 4.3485, "cafe", "Cafe", "Dansaert", 7, "Specialty coffee on the Dansaert design strip.", { cuisine: "coffee" }),
    place("br-cafe-belga", "Café Belga", 50.8278, 4.3722, "cafe", "Cafe", "Ixelles", 7, "Flagey institution for terrace coffee and people-watching.", { cuisine: "coffee" }),
    place("br-cafe-walvis", "Café Walvis", 50.8525, 4.3435, "cafe", "Cafe", "Dansaert", 6, "Canal-side brunch and coffee near Quai des Charbonnages.", { cuisine: "brunch coffee" }),
    place("br-cafe-orchid", "Or Coffee", 50.8455, 4.3485, "cafe", "Cafe", "Centre", 6, "Third-wave espresso near Manneken Pis.", { cuisine: "coffee" }),
    place("br-cafe-pain", "Le Pain Quotidien Sablon", 50.8408, 4.3558, "cafe", "Cafe", "Sablon", 6, "Communal-table bakery café on the Sablon.", { cuisine: "bakery coffee" }),
    place("br-cafe-grib", "Gribaix", 50.8368, 4.3465, "cafe", "Cafe", "Marolles", 6, "Neighbourhood coffee in the Marolles lanes.", { cuisine: "coffee" }),

    // ——— Food ———
    place("br-food-comme", "Comme Chez Soi", 50.8385, 4.3455, "food", "Restaurant", "Centre", 9, "Classic Belgian fine dining institution.", { cuisine: "belgian french" }),
    place("br-food-noe", "Noel Noël / moules-frites strip", 50.8472, 4.3515, "food", "Restaurant", "Centre", 7, "Mussels and fries dens around Rue des Bouchers.", { cuisine: "belgian seafood" }),
    place("br-food-frites", "Maison Antoine frites", 50.8375, 4.3785, "food", "Quick meal", "European Quarter", 8, "Legendary Place Jourdan fritkot — late-night fries.", { cuisine: "belgian street_food" }),
    place("br-food-huit", "Sea Grill / seafood", 50.8435, 4.3555, "food", "Restaurant", "Centre", 8, "High-end Belgian seafood near the royal museums.", { cuisine: "seafood belgian" }),
    place("br-food-bon", "Bon Bon", 50.8255, 4.4055, "food", "Restaurant", "Woluwe", 8, "Creative Belgian tasting menus east of the centre.", { cuisine: "belgian" }),
    place("br-food-nordzee", "Nordzee / Mer du Nord", 50.8505, 4.3495, "food", "Quick meal", "Saint-Géry", 7, "Standing seafood counter — shrimp croquettes and oysters.", { cuisine: "seafood belgian" }),
    place("br-food-choc", "Pierre Marcolini Sablon", 50.8405, 4.3552, "food", "Quick meal", "Sablon", 7, "Flagship Belgian chocolatier on the Grand Sablon.", { cuisine: "chocolate pastry" }),
    place("br-food-waffles", "Vitalgaufre / waffle stand", 50.8465, 4.3535, "food", "Quick meal", "Centre", 6, "Liège-style waffles steps from Grand-Place.", { cuisine: "belgian street_food" }),
    place("br-food-cook", "Cook & Book", 50.8425, 4.4155, "food", "Restaurant", "Woluwe", 6, "Theme-room restaurant-bookstore hybrid.", { cuisine: "european" }),
    place("br-food-fin", "Fin de Siècle", 50.8485, 4.3485, "food", "Restaurant", "Saint-Géry", 7, "Hearty Belgian plates and local beers near Saint-Géry.", { cuisine: "belgian" }),
    place("br-food-lafin", "La Quincaillerie", 50.8235, 4.3555, "food", "Restaurant", "Saint-Gilles", 7, "Brasserie in a former hardware shop near Horta.", { cuisine: "belgian french" }),
    place("br-food-ixelles", "Les Brassins", 50.8255, 4.3655, "food", "Restaurant", "Ixelles", 6, "Beer-hall Belgian comfort food off Avenue Louise.", { cuisine: "belgian beer" }),
    place("br-food-vietnamese", "Little Vietnam Matongé", 50.8338, 4.3628, "food", "Restaurant", "Ixelles", 6, "Pho and spring rolls in the African quarter.", { cuisine: "vietnamese" }),
    place("br-food-market", "Marché de la Place Flagey stalls", 50.8272, 4.3718, "food", "Quick meal", "Ixelles", 6, "Sunday market bites around Place Flagey.", { cuisine: "market street_food" }),

    // ——— Nightlife ———
    place("br-night-delirium", "Delirium Café", 50.8482, 4.3538, "nightlife", "Bar", "Centre", 8, "Vast beer list in Impasse de la Fidélité."),
    place("br-night-gery", "Saint-Géry bars", 50.8492, 4.3465, "nightlife", "Bar", "Saint-Géry", 7, "Terrace-hopping around the old market square."),
    place("br-night-lux", "Place Luxembourg nightlife", 50.8398, 4.3748, "nightlife", "Bar", "European Quarter", 6, "Eurocrat after-work crowds on the parliament square."),
    place("br-night-fuse", "Fuse", 50.8355, 4.3455, "nightlife", "Bar", "Marolles", 7, "Long-running techno club in the Marolles."),
    place("br-night-celtica", "Celtica / Irish pubs centre", 50.8475, 4.3515, "nightlife", "Bar", "Centre", 5, "Late pubs on Rue du Marché aux Fromages."),
    place("br-night-flagey", "Flagey evening", 50.8275, 4.3715, "nightlife", "Bar", "Ixelles", 6, "Concerts and bars around the Art Deco hall."),
    place("br-night-spirito", "Spirito Brussels", 50.8355, 4.3555, "nightlife", "Bar", "Sablon", 6, "Church-converted club near the Sablon."),
    place("br-night-cano", "Canal nightlife Tour & Taxis", 50.8655, 4.3475, "nightlife", "Bar", "Canal", 5, "Warehouse parties and summer events by the canal."),

    // ——— Stays ———
    place("br-stay-amigo", "Hotel Amigo", 50.8462, 4.3515, "stay", "Hotel", "Centre", 9, "Rocco Forte luxury steps from Grand-Place."),
    place("br-stay-metropole", "Hotel Metropole", 50.8515, 4.3545, "stay", "Hotel", "Centre", 8, "Belle Époque grande dame on Place de Brouckère."),
    place("br-stay-steigen", "Steigenberger Wiltcher's", 50.8275, 4.3625, "stay", "Hotel", "Ixelles", 8, "Avenue Louise landmark hotel."),
    place("br-stay-bristol", "Hotel Le Plaza", 50.8525, 4.3585, "stay", "Hotel", "Centre", 8, "Restored theatre-hotel near Botanique."),
    place("br-stay-nh", "NH Collection Grand Sablon", 50.8408, 4.3548, "stay", "Hotel", "Sablon", 7, "Boutique base on the antique square."),
    place("br-stay-pantone", "Pantone Hotel", 50.8335, 4.3555, "stay", "Hotel", "Saint-Gilles", 7, "Colour-blocked design hotel near Avenue Louise."),
    place("br-stay-mozart", "Hotel Mozart", 50.8475, 4.3535, "stay", "Hotel", "Centre", 6, "Budget-friendly rooms near the Galeries."),
    place("br-stay-2go4", "2GO4 Quality Hostel", 50.8485, 4.3625, "stay", "Hostel", "Centre", 6, "Central hostel near the cathedral."),
    place("br-stay-sleepwell", "Sleep Well Youth Hostel", 50.8525, 4.3615, "stay", "Hostel", "Centre", 6, "Classic Brussels hostel by Botanique."),
  ],
};
