import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const pristina: CityCatalog = {
  id: "pristina",
  name: "Pristina, Kosovo",
  aliases: ["pristina", "prishtina", "priština", "pristina kosovo"],
  center: { lat: 42.6629, lon: 21.1655 },
  places: [
    // ——— Center / Mother Teresa ———
    place("pr-newborn", "NEWBORN monument", 42.662, 21.1585, "sight", "Attraction", "Center", 9, "Independence landmark letters — constantly repainted."),
    place("pr-mother-teresa", "Mother Teresa Boulevard", 42.6615, 21.1615, "sight", "Attraction", "Center", 8, "Main pedestrian spine of cafes and evening life."),
    place("pr-cathedral", "Cathedral of Saint Mother Teresa", 42.6615, 21.16, "sight", "Monument", "Center", 8, "Modern Catholic cathedral on the boulevard."),
    place("pr-cathedral-tower", "Cathedral bell tower climb", 42.6616, 21.1602, "sight", "Viewpoint", "Center", 7, "City views from the tower when open."),
    place("pr-library", "National Library of Kosovo", 42.6575, 21.1625, "sight", "Attraction", "University", 9, "Unique metal-dome architecture — iconic photo stop."),
    place("pr-university", "University of Pristina campus", 42.658, 21.1635, "sight", "Attraction", "University", 6, "Campus green around the National Library."),
    place("pr-skanderbeg", "Skanderbeg Square / statue", 42.6635, 21.1645, "sight", "Attraction", "Center", 7, "Central square with Skanderbeg monument."),
    place("pr-government", "Government building facade", 42.6625, 21.162, "sight", "Monument", "Center", 5, "Civic architecture near NEWBORN."),
    place("pr-youth", "Palace of Youth and Sports", 42.66, 21.1575, "sight", "Attraction", "Center", 6, "Brutalist sports and culture complex."),
    place("pr-bill-clinton", "Bill Clinton Boulevard & statue", 42.655, 21.155, "sight", "Monument", "South Center", 6, "Namesake boulevard with the Clinton statue."),

    // ——— Old Town / Ottoman ———
    place("pr-carshia", "Çarshia / old bazaar streets", 42.665, 21.165, "shopping", "Market", "Old Town", 8, "Historic trading streets and craft shops."),
    place("pr-imperial", "Imperial Mosque (Xhamia e Mbretit)", 42.666, 21.166, "sight", "Monument", "Old Town", 8, "15th-century Ottoman mosque — dress modestly."),
    place("pr-clock", "Clock Tower (Sahat Kulla)", 42.6665, 21.1665, "sight", "Monument", "Old Town", 7, "Ottoman clock tower beside the Imperial Mosque."),
    place("pr-jashar", "Jashar Pasha Mosque", 42.6655, 21.1655, "sight", "Monument", "Old Town", 6, "Another historic mosque in the old core."),
    place("pr-pirinaz", "Pirinaz Mosque", 42.667, 21.167, "sight", "Monument", "Old Town", 5, "Neighborhood Ottoman mosque."),
    place("pr-hammam", "Great Hammam of Pristina", 42.6658, 21.1658, "sight", "Monument", "Old Town", 7, "Restored Ottoman bathhouse near the bazaar."),
    place("pr-ethnographic", "Emin Gjiku Ethnographic Museum", 42.6662, 21.1645, "museum", "Museum", "Old Town", 7, "Traditional courtyard house museum."),
    place("pr-old-streets", "Old Town lane wander", 42.6655, 21.1662, "sight", "Attraction", "Old Town", 6, "Quiet residential Ottoman street fabric."),

    // ——— Museums ———
    place("pr-kosovo-museum", "Kosovo Museum", 42.6645, 21.164, "museum", "Museum", "Center", 8, "Archaeology and national history downtown."),
    place("pr-national-art", "National Gallery of Kosovo", 42.6595, 21.1615, "museum", "Museum", "Center", 7, "Contemporary and modern Kosovar art."),
    place("pr-independence", "Independence House / related exhibits", 42.6622, 21.1595, "museum", "Museum", "Center", 6, "Context for 2008 independence near NEWBORN."),
    place("pr-hani", "Hani i Dy Robertëve cultural space", 42.664, 21.1635, "cafe", "Cafe", "Center", 7, "Legendary cafe-gallery of Pristina's cultural scene."),
    place("pr-film", "Kino Armata / cinema culture", 42.661, 21.163, "sight", "Attraction", "Center", 6, "Arthouse cinema and events hub."),
    place("pr-mining", "Mining Museum / Trepča context exhibits", 42.663, 21.1655, "museum", "Museum", "Center", 5, "Industrial heritage of Kosovo."),

    // ——— Parks & nature ———
    place("pr-germia", "Gërmia Park", 42.67, 21.19, "nature", "Park", "Gërmia", 9, "Forest park and swimming pool complex east of town."),
    place("pr-germia-trails", "Gërmia hiking trails", 42.672, 21.195, "nature", "Park", "Gërmia", 8, "Woodland walks above the city."),
    place("pr-germia-pool", "Gërmia outdoor pools", 42.6695, 21.188, "nature", "Park", "Gërmia", 6, "Summer swimming in the park complex."),
    place("pr-city-park", "City Stadium Park / green", 42.6585, 21.158, "nature", "Park", "Center", 5, "Green around sports facilities."),
    place("pr-taipi", "Tauk Bahqe / neighborhood parks", 42.655, 21.17, "nature", "Park", "South", 5, "Local parks south of the center."),
    place("pr-lake", "Badovc Lake day trip edge", 42.64, 21.25, "nature", "Park", "East", 5, "Reservoir escape east of Pristina."),
    place("pr-dragodan", "Dragodan / Arberia hillside views", 42.665, 21.15, "sight", "Viewpoint", "Dragodan", 6, "Hill neighborhood with city panoramas."),

    // ——— Neighborhoods & sights ———
    place("pr-pejton", "Pejton neighborhood", 42.66, 21.155, "sight", "Attraction", "Pejton", 7, "Leafy villa streets with cafes and embassies."),
    place("pr-udi", "Ulpiana archaeological site (nearby)", 42.595, 21.175, "sight", "Ruins", "South", 6, "Roman Ulpiana ruins a short drive south."),
    place("pr-gračanica", "Gračanica Monastery day trip", 42.598, 21.192, "sight", "Monument", "South", 8, "UNESCO frescoed monastery near Pristina."),
    place("pr-bus", "Central bus station area", 42.6555, 21.148, "sight", "Attraction", "West", 4, "Arrival hub orientation."),
    place("pr-railway", "Train station facade", 42.65, 21.145, "sight", "Attraction", "West", 4, "Older station architecture on the west side."),
    place("pr-mosque-new", "Modern mosque landmarks", 42.664, 21.168, "sight", "Monument", "East Center", 5, "Newer mosque architecture around town."),
    place("pr-orthodox", "St. Nicholas Orthodox Church", 42.661, 21.1685, "sight", "Monument", "Center", 5, "Orthodox church in the urban fabric."),
    place("pr-jewish", "Jewish cemetery / heritage memory", 42.668, 21.17, "sight", "Monument", "North", 4, "Visit respectfully — community heritage site."),
    place("pr-color", "Colorful Newborn photo wall orbit", 42.6622, 21.1588, "sight", "Attraction", "Center", 6, "Street art and murals near the letters."),
    place("pr-dardania", "Dardania neighborhood walk", 42.65, 21.165, "sight", "Attraction", "Dardania", 5, "Residential modernist blocks and local shops."),
    place("pr-kodra", "Kodra e Diellit hillside", 42.67, 21.155, "sight", "Viewpoint", "North", 5, "Higher residential views over Pristina."),
    place("pr-food-pite", "Pite / savory pie lunch", 42.6632, 21.164, "food", "Quick meal", "Center", 7, "Kosovar savory pies beyond burek.", { cuisine: "kosovar" }),
    place("pr-cafe-dardania", "Dardania cafe", 42.6505, 21.1645, "cafe", "Cafe", "Dardania", 5, "Neighborhood coffee away from the boulevard."),

    // ——— Shopping ———
    place("pr-bazaar", "Center bazaar streets", 42.665, 21.1655, "shopping", "Market", "Old Town", 7, "Clothes, crafts, and household goods."),
    place("pr-albi", "Albi Mall", 42.645, 21.14, "shopping", "Mall", "Southwest", 6, "Large modern shopping mall."),
    place("pr-grand", "Grand Store / center retail", 42.6625, 21.1635, "shopping", "Mall", "Center", 6, "Downtown shopping."),
    place("pr-souvenir", "Boulevard souvenir shops", 42.6618, 21.161, "shopping", "Shop", "Center", 5, "NEWBORN merch and Kosovo crafts."),
    place("pr-pejton-shops", "Pejton boutiques", 42.6595, 21.1545, "shopping", "Shop", "Pejton", 5, "Small design shops in villa streets."),
    place("pr-green-market", "Green market / produce", 42.6645, 21.1675, "shopping", "Market", "Old Town", 6, "Fresh produce near the old core."),

    // ——— Cafes ———
    place("pr-cafe-boulevard", "Mother Teresa Boulevard cafe", 42.6618, 21.1618, "cafe", "Cafe", "Center", 8, "Prime terrace coffee on the pedestrian spine."),
    place("pr-cafe-hani", "Hani i Dy Robertëve coffee", 42.664, 21.1635, "cafe", "Cafe", "Center", 8, "Institutional cultural cafe."),
    place("pr-cafe-pejton", "Pejton garden cafe", 42.66, 21.1548, "cafe", "Cafe", "Pejton", 7, "Quiet garden coffee in villa streets."),
    place("pr-cafe-old", "Old Town tea house", 42.6655, 21.1658, "cafe", "Cafe", "Old Town", 6, "Turkish coffee near the mosques."),
    place("pr-cafe-library", "University / library cafe", 42.6578, 21.1628, "cafe", "Cafe", "University", 6, "Student coffee by the National Library."),
    place("pr-cafe-specialty", "Specialty coffee Pristina", 42.6625, 21.1605, "cafe", "Cafe", "Center", 7, "Third-wave beans downtown."),
    place("pr-patisserie", "Center patisserie", 42.662, 21.1625, "cafe", "Cafe", "Center", 5, "Pastries and baklava downtown."),

    // ——— Food ———
    place("pr-food-flite", "Flija & traditional lunch", 42.6635, 21.1645, "food", "Restaurant", "Center", 8, "Layered flija and Kosovar classics.", { cuisine: "kosovar" }),
    place("pr-food-old", "Old Town dinner", 42.6655, 21.166, "food", "Restaurant", "Old Town", 7, "Grill and traditional houses near the bazaar.", { cuisine: "kosovar" }),
    place("pr-food-boulevard", "Boulevard dinner terrace", 42.661, 21.161, "food", "Restaurant", "Center", 7, "International and local plates on Mother Teresa.", { cuisine: "european" }),
    place("pr-food-qebapa", "Qebapa grill lunch", 42.6645, 21.1652, "food", "Restaurant", "Old Town", 8, "Ćevapi with onions and bread — essential.", { cuisine: "balkan grill" }),
    place("pr-food-pejton", "Pejton dinner", 42.6598, 21.1555, "food", "Restaurant", "Pejton", 7, "Quieter neighborhood restaurants.", { cuisine: "european" }),
    place("pr-food-burek", "Burek bakery breakfast", 42.663, 21.163, "food", "Quick meal", "Center", 7, "Cheese or meat burek to start the day.", { cuisine: "balkan" }),
    place("pr-food-italian", "Italian trattoria center", 42.6615, 21.1625, "food", "Restaurant", "Center", 5, "Pizza and pasta downtown.", { cuisine: "italian" }),
    place("pr-food-vegetarian", "Vegetarian cafe", 42.6622, 21.1612, "food", "Restaurant", "Center", 6, "Plant-forward bowls on the boulevard.", { cuisine: "vegetarian" }),
    place("pr-food-dessert", "Trileçe & dessert cafe", 42.6628, 21.162, "food", "Quick meal", "Center", 6, "Sweet milk cake popular across Kosovo.", { cuisine: "dessert" }),
    place("pr-food-wine", "Wine bar dinner", 42.6605, 21.1605, "food", "Restaurant", "Center", 6, "Regional wines with small plates.", { cuisine: "wine" }),

    // ——— Nightlife ———
    place("pr-night-boulevard", "Mother Teresa evening bars", 42.6625, 21.162, "nightlife", "Bar", "Center", 8, "Main bar and lounge strip."),
    place("pr-night-pejton", "Pejton nightlife", 42.6595, 21.155, "nightlife", "Bar", "Pejton", 7, "Garden bars in villa streets."),
    place("pr-night-old", "Old Town evening", 42.6658, 21.1655, "nightlife", "Bar", "Old Town", 5, "Quieter drinks near the bazaar."),
    place("pr-night-club", "Pristina club night", 42.6612, 21.1585, "nightlife", "Club", "Center", 7, "Electronic and pop nights — check lineups."),
    place("pr-night-live", "Live music bar", 42.662, 21.1615, "nightlife", "Bar", "Center", 7, "Bands and DJ sets downtown."),
    place("pr-night-beer", "Craft beer bar", 42.6615, 21.1635, "nightlife", "Bar", "Center", 6, "Local and regional craft pours."),
    place("pr-night-rooftop", "Rooftop drinks center", 42.6628, 21.1608, "nightlife", "Bar", "Center", 6, "Views over the boulevard and cathedral."),

    // ——— Stays ———
    place("pr-stay-center", "Center Hotel Pristina", 42.663, 21.165, "stay", "Hotel", "Center", 8, "Walkable to NEWBORN, boulevard, and museums."),
    place("pr-stay-boulevard", "Boulevard hotel", 42.6618, 21.16, "stay", "Hotel", "Center", 8, "On Mother Teresa for cafes and nightlife."),
    place("pr-stay-swiss", "Swiss Diamond / upscale stay area", 42.66, 21.158, "stay", "Hotel", "Center", 7, "Upscale base near the Palace of Youth."),
    place("pr-stay-pejton", "Pejton boutique hotel", 42.6595, 21.154, "stay", "Hotel", "Pejton", 7, "Quiet villa-neighborhood stay."),
    place("pr-stay-hostel", "Pristina Hostel", 42.664, 21.167, "stay", "Hostel", "Center", 5, "Budget dorms near the center."),
    place("pr-stay-guest", "Guest House Pristina", 42.666, 21.163, "stay", "Guest house", "Old Town", 6, "Small stay toward the Ottoman core."),
    place("pr-stay-apartment", "Center aparthotel", 42.6625, 21.1615, "stay", "Hotel", "Center", 6, "Kitchenette stay on the boulevard orbit."),
    place("pr-stay-germia", "Gërmia-edge hotel", 42.668, 21.185, "stay", "Hotel", "Gërmia", 5, "Quieter stay near the forest park."),
    place("pr-stay-business", "Business hotel south", 42.6555, 21.156, "stay", "Hotel", "South Center", 6, "Handy for Clinton Boulevard and malls."),
  ],
};
