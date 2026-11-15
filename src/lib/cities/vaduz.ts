import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const vaduz: CityCatalog = {
  id: "vaduz",
  name: "Vaduz, Liechtenstein",
  aliases: ["vaduz", "liechtenstein", "vaduz liechtenstein"],
  center: { lat: 47.141, lon: 9.5209 },
  places: [
    // ——— Castle & centre ———
    place("vd-castle", "Vaduz Castle viewpoint", 47.148, 9.5245, "sight", "Castle", "Castle Hill", 10, "Prince's residence — usually viewed from below; exterior photos from the trail."),
    place("vd-castle-trail", "Castle hill walking path", 47.1465, 9.5235, "nature", "Park", "Castle Hill", 8, "Uphill walk from Städtle for the classic castle angle."),
    place("vd-stadtle", "Städtle main street", 47.1406, 9.5212, "shopping", "Market", "Center", 8, "Pedestrian spine with shops, stamps, and public art."),
    place("vd-parliament", "Parliament Building (Landtag)", 47.1395, 9.522, "sight", "Attraction", "Center", 7, "Modern glass parliament beside the government quarter."),
    place("vd-government", "Government House", 47.1398, 9.5215, "sight", "Attraction", "Center", 6, "Administrative buildings on Peter-Kaiser-Platz."),
    place("vd-cathedral", "Cathedral of St. Florin", 47.1408, 9.5215, "sight", "Monument", "Center", 7, "Neo-Gothic parish church of Vaduz."),
    place("vd-rathaus", "Vaduz Town Hall", 47.1403, 9.521, "sight", "Attraction", "Center", 5, "Civic building on the main pedestrian street."),
    place("vd-post-office", "Vaduz Post Office", 47.1405, 9.5218, "sight", "Attraction", "Center", 6, "Stamp-collectors' stop — Liechtenstein postage is famous."),
    place("vd-red-house", "Rotes Haus (Red House)", 47.1415, 9.524, "sight", "Monument", "Center", 6, "Historic red manor on the hillside approach."),
    place("vd-mitteldorf", "Mitteldorf historic lanes", 47.1425, 9.523, "sight", "Attraction", "Mitteldorf", 6, "Older village fabric north of the modern centre."),

    // ——— Museums ———
    place("vd-kunstmuseum", "Kunstmuseum Liechtenstein", 47.1405, 9.5225, "museum", "Museum", "Center", 9, "Black-box modern art museum — strong contemporary collection."),
    place("vd-postage", "Postage Stamp Museum", 47.1402, 9.5218, "museum", "Museum", "Center", 7, "Philately museum celebrating the principality's stamps."),
    place("vd-landesmuseum", "Liechtenstein National Museum", 47.1408, 9.5222, "museum", "Museum", "Center", 8, "History, culture, and rural life of Liechtenstein."),
    place("vd-treasure", "Treasure Chamber (Schatzkammer)", 47.1404, 9.522, "museum", "Museum", "Center", 7, "Princely treasures and Faberge pieces in the centre."),
    place("vd-ski-museum", "Ski Museum Vaduz", 47.1412, 9.5205, "museum", "Museum", "Center", 5, "Alpine ski history in a small specialist museum."),
    place("vd-englanderhaus", "Engländerbau exhibitions", 47.1398, 9.5225, "museum", "Museum", "Center", 5, "Cultural exhibitions beside the Kunstmuseum."),

    // ——— Rhine / nature ———
    place("vd-rhine", "Rhine river path", 47.138, 9.51, "nature", "Park", "Rhine", 8, "Flat cycle and walking path along the Rhine embankment."),
    place("vd-rhine-bridge", "Old Rhine Bridge to Switzerland", 47.1375, 9.5085, "sight", "Attraction", "Rhine", 7, "Wooden bridge crossing into Swiss Sevelen — stamp your passport for fun."),
    place("vd-rheinpark", "Rheinpark Stadion area walk", 47.1355, 9.5125, "nature", "Park", "Rhine", 5, "Stadium precinct and riverside open space."),
    place("vd-vineyards", "Vaduz vineyards", 47.136, 9.525, "nature", "Park", "South", 7, "Prince of Liechtenstein winery slopes south of town."),
    place("vd-winery", "Hofkellerei des Fürsten", 47.1355, 9.5255, "sight", "Attraction", "South", 7, "Princely winery tastings and vineyard views."),
    place("vd-gutenberg", "Burg Gutenberg (Balzers)", 47.0675, 9.5015, "sight", "Castle", "Balzers", 8, "Day-trip castle silhouette in southern Liechtenstein."),
    place("vd-malbun", "Malbun alpine village", 47.1005, 9.6085, "nature", "Park", "Malbun", 7, "Mountain resort for hiking or winter sports inland."),
    place("vd-triesenberg", "Triesenberg viewpoint", 47.1185, 9.545, "sight", "Viewpoint", "Triesenberg", 7, "Walser village above Vaduz with Rhine valley panoramas."),
    place("vd-walser-museum", "Walser Museum Triesenberg", 47.118, 9.5445, "museum", "Museum", "Triesenberg", 6, "Alpine Walser culture museum up the mountain road."),
    place("vd-nendeln", "Eschnerberg / northern hills", 47.2, 9.545, "nature", "Park", "North", 5, "Rolling hills and villages north of Vaduz."),
    place("vd-schaan", "Schaan town stroll", 47.165, 9.51, "sight", "Attraction", "Schaan", 5, "Neighbouring town — larger everyday Liechtenstein life."),

    // ——— Public art / oddities ———
    place("vd-sculpture", "Stadtleskulptur trail", 47.1407, 9.5214, "sight", "Attraction", "Center", 6, "Outdoor sculptures dotted along Städtle."),
    place("vd-passport", "Tourist passport stamp booth", 47.1405, 9.5213, "sight", "Attraction", "Center", 6, "Unofficial souvenir stamp — not an official border control."),
    place("vd-bus", "LIEmobil bus hub", 47.139, 9.5205, "sight", "Attraction", "Center", 5, "Free/cheap local buses linking Vaduz to Malbun and Balzers."),

    // ——— Shopping ———
    place("vd-stamp-shop", "Stamp and souvenir shops", 47.1406, 9.5215, "shopping", "Market", "Center", 6, "Postage sets and Liechtenstein keepsakes on Städtle."),
    place("vd-design", "Design and craft boutiques", 47.1404, 9.521, "shopping", "Market", "Center", 5, "Small design stores on the pedestrian street."),
    place("vd-wine-shop", "Wine shop Hofkellerei", 47.1358, 9.5252, "shopping", "Market", "South", 6, "Take-home princely wines after a tasting."),
    place("vd-schaan-shops", "Schaan retail streets", 47.1645, 9.5095, "shopping", "Mall", "Schaan", 5, "Practical shopping beyond tourist Vaduz."),

    // ——— Cafes ———
    place("vd-cafe-stadtle", "Café on Städtle", 47.1407, 9.5216, "cafe", "Cafe", "Center", 7, "People-watching coffee on the main street.", { cuisine: "coffee" }),
    place("vd-cafe-kunst", "Kunstmuseum café", 47.1404, 9.5226, "cafe", "Cafe", "Center", 6, "Museum café for a quiet pause.", { cuisine: "coffee" }),
    place("vd-bakery", "Vaduz bakery", 47.1402, 9.5208, "cafe", "Cafe", "Center", 6, "Fresh bread and pastries for a Rhine picnic.", { cuisine: "pastry coffee" }),
    place("vd-castle-cafe", "Castle path refreshment", 47.1455, 9.523, "cafe", "Cafe", "Castle Hill", 5, "Simple drinks after the uphill walk.", { cuisine: "coffee" }),
    place("vd-schaan-cafe", "Schaan café stop", 47.1648, 9.5105, "cafe", "Cafe", "Schaan", 5, "Local café if you bus north.", { cuisine: "coffee" }),
    place("vd-gelato", "Ice cream on Städtle", 47.1405, 9.5211, "cafe", "Cafe", "Center", 5, "Summer gelato while souvenir shopping.", { cuisine: "gelato" }),

    // ——— Food ———
    place("vd-restaurant-torkel", "Restaurant Torkel", 47.1365, 9.5248, "food", "Restaurant", "South", 8, "Princely estate restaurant among the vines.", { cuisine: "liechtenstein alpine" }),
    place("vd-real", "Restaurant Real", 47.141, 9.5225, "food", "Restaurant", "Center", 8, "Fine dining institution in Vaduz centre.", { cuisine: "european" }),
    place("vd-wirtshaus", "Wirtshaus Älple", 47.1408, 9.5208, "food", "Restaurant", "Center", 7, "Alpine comfort food and local beer.", { cuisine: "alpine swiss" }),
    place("vd-stadtle-lunch", "Städtle lunch terrace", 47.1404, 9.5214, "food", "Restaurant", "Center", 6, "Casual midday plates on the pedestrian street.", { cuisine: "european" }),
    place("vd-italian", "Italian trattoria Vaduz", 47.1402, 9.5216, "food", "Restaurant", "Center", 6, "Pasta and pizza when you want something familiar.", { cuisine: "italian" }),
    place("vd-rhine-bites", "Rhine path picnic supplies", 47.1385, 9.512, "food", "Quick meal", "Rhine", 5, "Grab bakery goods and eat by the river.", { cuisine: "picnic" }),
    place("vd-asian", "Asian kitchen Vaduz", 47.1412, 9.5205, "food", "Restaurant", "Center", 5, "Casual Asian lunch off Städtle.", { cuisine: "asian" }),
    place("vd-hotel-dinner", "Park Hotel restaurant", 47.141, 9.523, "food", "Restaurant", "Center", 7, "Hotel dining with reliable alpine menus.", { cuisine: "alpine" }),
    place("vd-malbun-food", "Malbun mountain restaurant", 47.1008, 9.608, "food", "Restaurant", "Malbun", 6, "Hearty mountain plates after a hike.", { cuisine: "alpine" }),
    place("vd-triesenberg-food", "Triesenberg stuben lunch", 47.1182, 9.5448, "food", "Restaurant", "Triesenberg", 6, "Village inn food with valley views.", { cuisine: "alpine" }),
    place("vd-fondue", "Fondue / raclette night", 47.1409, 9.5218, "food", "Restaurant", "Center", 6, "Swiss-border comfort food for cool evenings.", { cuisine: "swiss fondue" }),
    place("vd-vegetarian", "Vegetarian-friendly bistro", 47.1403, 9.5206, "food", "Restaurant", "Center", 5, "Lighter plates in a tiny capital.", { cuisine: "vegetarian" }),

    // ——— Nightlife ———
    place("vd-center-bar", "Städtle evening bar", 47.1409, 9.521, "nightlife", "Bar", "Center", 6, "Quiet drinks — Vaduz nights are low-key."),
    place("vd-hotel-lounge", "Hotel lounge evening", 47.1415, 9.5228, "nightlife", "Bar", "Center", 6, "Cocktail lounge in a centre hotel."),
    place("vd-wine-bar", "Wine bar Vaduz", 47.1405, 9.5217, "nightlife", "Bar", "Center", 6, "Local and regional wines by the glass."),
    place("vd-schaan-night", "Schaan late bar", 47.1652, 9.51, "nightlife", "Bar", "Schaan", 5, "Slightly busier night options one bus stop north."),
    place("vd-malbun-apres", "Malbun après-ski", 47.1005, 9.6088, "nightlife", "Bar", "Malbun", 5, "Seasonal mountain après if you overnight up high."),

    // ——— Stays ———
    place("vd-park-hotel", "Park Hotel Sonnenhof", 47.145, 9.528, "stay", "Hotel", "Hill", 9, "Hillside luxury with castle and Rhine views."),
    place("vd-hotel-vaduzerhof", "Hotel Vaduzerhof", 47.141, 9.523, "stay", "Hotel", "Center", 7, "Central base for walking the capital."),
    place("vd-hotel-schlosswald", "Hotel Schlosswald", 47.147, 9.5255, "stay", "Hotel", "Castle Hill", 7, "Stay near the castle path."),
    place("vd-landhaus", "Landhaus am Platz", 47.1403, 9.5205, "stay", "Hotel", "Center", 6, "Simple mid-range rooms by Städtle."),
    place("vd-gasthof", "Gasthof Löwen", 47.1412, 9.5215, "stay", "Guest house", "Center", 6, "Traditional inn-style stay."),
    place("vd-hostel", "Vaduz hostel-style", 47.139, 9.519, "stay", "Hostel", "Center", 5, "Budget beds for backpackers crossing the Rhine."),
    place("vd-apt", "Vaduz apartment", 47.142, 9.521, "stay", "Apartment", "Center", 6, "Self-catering flat for Rhine-path days."),
    place("vd-malbun-hotel", "Malbun mountain hotel", 47.101, 9.609, "stay", "Hotel", "Malbun", 7, "Alpine overnight for hiking or skiing."),
    place("vd-triesenberg-stay", "Triesenberg guesthouse", 47.1185, 9.5455, "stay", "Guest house", "Triesenberg", 6, "Village quiet above the capital."),
    place("vd-balzers-stay", "Balzers hotel near Gutenberg", 47.068, 9.502, "stay", "Hotel", "Balzers", 6, "Southern base beside Burg Gutenberg."),
    place("vd-schaan-hotel", "Schaan business hotel", 47.165, 9.511, "stay", "Hotel", "Schaan", 5, "Practical stay with bus links to Vaduz."),
    place("vd-boutique", "Boutique stay Städtle", 47.1408, 9.5212, "stay", "Hotel", "Center", 7, "Small design hotel on the pedestrian street."),
  ],
};
