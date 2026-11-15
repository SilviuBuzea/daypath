import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const stockholm: CityCatalog = {
  id: "stockholm",
  name: "Stockholm, Sweden",
  aliases: ["stockholm"],
  center: { lat: 59.3293, lon: 18.0686 },
  places: [
    // ——— Gamla Stan ———
    place("sth-gamla", "Gamla Stan", 59.325, 18.071, "sight", "Attraction", "Gamla Stan", 10, "Medieval old town alleys — start at Stortorget."),
    place("sth-palace", "Royal Palace", 59.3268, 18.0717, "sight", "Attraction", "Gamla Stan", 9, "Changing of the guard and royal apartments."),
    place("sth-storkyrkan", "Storkyrkan", 59.3255, 18.0705, "sight", "Monument", "Gamla Stan", 7, "Cathedral beside the palace."),
    place("sth-stortorget", "Stortorget", 59.3251, 18.0708, "sight", "Attraction", "Gamla Stan", 8, "Colourful square and Nobel Museum."),
    place("sth-nobel", "Nobel Prize Museum", 59.3252, 18.0712, "museum", "Museum", "Gamla Stan", 7, "Nobel stories on Stortorget."),
    place("sth-riddarholmen", "Riddarholmen Church", 59.3245, 18.0645, "sight", "Monument", "Gamla Stan", 7, "Spire island of royal tombs."),
    place("sth-iron-boy", "Iron Boy statue", 59.3255, 18.0685, "sight", "Attraction", "Gamla Stan", 5, "Tiny hidden statue behind the Finnish Church."),
    place("sth-vasterlang", "Västerlånggatan", 59.3248, 18.0705, "shopping", "Market", "Gamla Stan", 6, "Souvenir spine of the old town."),

    // ——— Djurgården ———
    place("sth-vasa", "Vasa Museum", 59.328, 18.0914, "museum", "Museum", "Djurgården", 10, "Intact 1628 warship — don't miss."),
    place("sth-skansen", "Skansen", 59.326, 18.103, "museum", "Museum", "Djurgården", 9, "Open-air museum and Nordic zoo."),
    place("sth-abba", "ABBA The Museum", 59.3255, 18.0965, "museum", "Museum", "Djurgården", 7, "Interactive ABBA memorabilia."),
    place("sth-nordiska", "Nordic Museum", 59.329, 18.0935, "museum", "Museum", "Djurgården", 7, "Swedish cultural history opposite Vasa."),
    place("sth-junibacken", "Junibacken", 59.3255, 18.09, "sight", "Attraction", "Djurgården", 6, "Astrid Lindgren story world for kids."),
    place("sth-grona", "Gröna Lund", 59.3235, 18.0965, "sight", "Theme park", "Djurgården", 7, "Waterfront amusement park."),
    place("sth-djurgarden-walk", "Djurgården walks", 59.327, 18.1, "nature", "Park", "Djurgården", 8, "Island paths, canals, and cafés."),
    place("sth-rosendal", "Rosendals Trädgård", 59.3265, 18.115, "nature", "Garden", "Djurgården", 7, "Garden café and greenhouse."),
    place("sth-thielska", "Thielska Galleriet", 59.3255, 18.13, "museum", "Museum", "Djurgården", 6, "Art nouveau villa gallery on the island tip."),
    place("sth-waldemars", "Waldemarsudde", 59.3205, 18.1155, "museum", "Museum", "Djurgården", 7, "Prince Eugen's art palace and gardens."),

    // ——— Norrmalm / Östermalm ———
    place("sth-cityhall", "Stockholm City Hall", 59.3275, 18.0545, "sight", "Attraction", "Kungsholmen", 9, "Nobel banquet hall and tower views."),
    place("sth-sergels", "Sergels torg", 59.3325, 18.0645, "sight", "Attraction", "Norrmalm", 5, "Glass fountain plaza in the modern center."),
    place("sth-drottning", "Drottninggatan", 59.3335, 18.0625, "shopping", "Market", "Norrmalm", 6, "Main pedestrian shopping street."),
    place("sth-nk", "NK Department Store", 59.3335, 18.07, "shopping", "Mall", "Norrmalm", 7, "Flagship Nordic luxury department store."),
    place("sth-saluhall", "Östermalms Saluhall", 59.3355, 18.0785, "shopping", "Market", "Östermalm", 8, "Beautiful food hall — rebuild still excellent."),
    place("sth-humle", "Humlegården", 59.3395, 18.0735, "nature", "Park", "Östermalm", 6, "Library park in Östermalm."),
    place("sth-modrna", "Moderna Museet", 59.326, 18.0845, "museum", "Museum", "Skeppsholmen", 9, "Modern art on Skeppsholmen island."),
    place("sth-arkdes", "ArkDes", 59.3258, 18.0848, "museum", "Museum", "Skeppsholmen", 6, "Architecture museum beside Moderna."),
    place("sth-fotografiska", "Fotografiska", 59.3178, 18.0855, "museum", "Museum", "Södermalm", 8, "Photography museum with harbour views."),
    place("sth-nationalmuseum", "Nationalmuseum", 59.3285, 18.0785, "museum", "Museum", "Norrmalm", 8, "Swedish and European art by the water."),
    place("sth-army", "Army Museum", 59.3345, 18.08, "museum", "Museum", "Östermalm", 5, "Military history free museum."),
    place("sth-medeltids", "Museum of Medieval Stockholm", 59.3275, 18.07, "museum", "Museum", "Norrmalm", 6, "Underground medieval city under Norrbro."),

    // ——— Södermalm ———
    place("sth-sodermalm", "Södermalm viewpoints", 59.317, 18.07, "sight", "Viewpoint", "Södermalm", 8, "Monteliusvägen cliff path over Riddarfjärden."),
    place("sth-montelius", "Monteliusvägen", 59.3205, 18.0555, "sight", "Viewpoint", "Södermalm", 9, "Sunset skyline walk with City Hall views."),
    place("sth-mariatorget", "Mariatorget", 59.3185, 18.0625, "sight", "Attraction", "Södermalm", 6, "Leafy square and café terraces."),
    place("sth-sofo", "SoFo shopping streets", 59.3125, 18.08, "shopping", "Market", "Södermalm", 7, "Indie design south of Folkungagatan."),
    place("sth-hornsgatan", "Hornsgatan", 59.3175, 18.055, "shopping", "Market", "Södermalm", 5, "Long Södermalm shopping artery."),
    place("sth-slussen", "Slussen / Katarina viewpoint", 59.3205, 18.0725, "sight", "Viewpoint", "Södermalm", 6, "Junction views and Katarina elevator area."),
    place("sth-katarina", "Katarina Church", 59.3175, 18.0785, "sight", "Monument", "Södermalm", 6, "Baroque dome above Södermalm."),
    place("sth-vita", "Vitabergsparken", 59.3125, 18.0855, "nature", "Park", "Södermalm", 6, "Hill park with summer outdoor theatre."),

    // ——— More nature / day trips ———
    place("sth-skansen-aquarium", "Baltic Sea Science Center", 59.3255, 18.105, "museum", "Museum", "Djurgården", 5, "Baltic ecology exhibits at Skansen."),
    place("sth-archipelago", "Archipelago boat pier", 59.3285, 18.0755, "sight", "Attraction", "Norrmalm", 8, "Strömma boats to Fjäderholmarna or further."),
    place("sth-drottningholm", "Drottningholm Palace", 59.3215, 17.8865, "sight", "Castle", "Drottningholm", 9, "UNESCO royal palace — metro + bus or boat."),
    place("sth-milles", "Millesgården", 59.3585, 18.12, "museum", "Museum", "Lidingö", 7, "Sculpture park on Lidingö."),
    place("sth-hagaparken", "Hagaparken", 59.36, 18.04, "nature", "Park", "Solna", 7, "English park and copper tents north of city."),
    place("sth-langholmen", "Långholmen", 59.3215, 18.03, "nature", "Park", "Södermalm", 7, "Prison-island park and summer swimming."),
    place("sth-tanberg", "Tantolunden", 59.3155, 18.04, "nature", "Park", "Södermalm", 6, "Allotment gardens and picnic slopes."),
    place("sth-bibliotek", "Stockholm Public Library", 59.3435, 18.0555, "sight", "Attraction", "Norrmalm", 6, "Asplund's cylindrical library landmark."),
    place("sth-ericsson", "Avicii Arena exterior", 59.2935, 18.0835, "sight", "Attraction", "Södermalm", 5, "Globe arena south of the center."),

    // ——— Cafes ———
    place("sth-cafe-drop", "Drop Coffee", 59.3175, 18.0555, "cafe", "Cafe", "Södermalm", 7, "Specialty coffee on Södermalm.", { cuisine: "coffee" }),
    place("sth-cafe-lion", "Café Saturnus", 59.3385, 18.0755, "cafe", "Cafe", "Östermalm", 7, "Giant cinnamon buns in Östermalm.", { cuisine: "pastry coffee" }),
    place("sth-cafe-vagabond", "Vete-Katten", 59.3335, 18.062, "cafe", "Cafe", "Norrmalm", 7, "Classic konditori since 1928.", { cuisine: "pastry coffee" }),
    place("sth-cafe-gildas", "Gildas Rum", 59.3175, 18.07, "cafe", "Cafe", "Södermalm", 6, "Cosy Södermalm café.", { cuisine: "coffee" }),
    place("sth-cafe-fika", "Fabrique", 59.3255, 18.07, "cafe", "Cafe", "Gamla Stan", 6, "Sourdough and cardamom buns.", { cuisine: "pastry coffee" }),
    place("sth-cafe-greasy", "Greasy Spoon / brunch", 59.3155, 18.075, "cafe", "Cafe", "Södermalm", 6, "Brunch plates in SoFo.", { cuisine: "brunch coffee" }),
    place("sth-cafe-rosendal", "Rosendals café", 59.3265, 18.1155, "cafe", "Cafe", "Djurgården", 7, "Garden café after island walks.", { cuisine: "coffee pastry" }),
    place("sth-cafe-sturekatten", "Sturekatten", 59.3365, 18.0755, "cafe", "Cafe", "Östermalm", 6, "Antique-room café near Stureplan.", { cuisine: "pastry coffee" }),

    // ——— Food ———
    place("sth-food-operakallar", "Operakällaren", 59.3295, 18.0715, "food", "Restaurant", "Norrmalm", 8, "Grand dining by the Opera house.", { cuisine: "swedish" }),
    place("sth-food-tradition", "Tradition", 59.3255, 18.0725, "food", "Restaurant", "Gamla Stan", 7, "Classic Swedish husmanskost.", { cuisine: "swedish" }),
    place("sth-food-meatballs", "Meatballs for the People", 59.3155, 18.08, "food", "Restaurant", "Södermalm", 7, "Artisanal köttbullar in SoFo.", { cuisine: "swedish" }),
    place("sth-food-saluhall", "Östermalms Saluhall counters", 59.3352, 18.078, "food", "Quick meal", "Östermalm", 8, "Seafood and smörgås in the hall.", { cuisine: "swedish seafood market" }),
    place("sth-food-frantzen", "Frantzén", 59.3335, 18.0655, "food", "Restaurant", "Norrmalm", 9, "Three-Michelin Swedish tasting — book far ahead.", { cuisine: "swedish nordic" }),
    place("sth-food-hermans", "Hermans", 59.3185, 18.0855, "food", "Restaurant", "Södermalm", 7, "Vegetarian buffet with harbour views.", { cuisine: "vegetarian" }),
    place("sth-food-nystekt", "Nystekt Strömming", 59.3205, 18.072, "food", "Quick meal", "Södermalm", 7, "Fried herring van by Slussen.", { cuisine: "swedish seafood" }),
    place("sth-food-pelikan", "Pelikan", 59.3125, 18.0755, "food", "Restaurant", "Södermalm", 7, "Beer-hall Swedish classics.", { cuisine: "swedish" }),
    place("sth-food-ramen", "Ai Ramen", 59.3155, 18.0755, "food", "Restaurant", "Södermalm", 6, "Ramen break in SoFo.", { cuisine: "japanese ramen" }),
    place("sth-food-taco", "Taqueria / Mexican", 59.3175, 18.065, "food", "Quick meal", "Södermalm", 5, "Casual tacos on Södermalm.", { cuisine: "mexican" }),
    place("sth-food-sturehof", "Sturehof", 59.3365, 18.0735, "food", "Restaurant", "Östermalm", 7, "Seafood brasserie at Stureplan.", { cuisine: "seafood swedish" }),
    place("sth-food-gamla", "Gamla Stan cellar restaurant", 59.325, 18.0715, "food", "Restaurant", "Gamla Stan", 6, "Candlelit Swedish dinner in a vault.", { cuisine: "swedish" }),
    place("sth-food-foodhall", "Söderhallarna", 59.3155, 18.0725, "food", "Quick meal", "Södermalm", 6, "Food court near Medborgarplatsen.", { cuisine: "market" }),
    place("sth-food-vegan", "Mahalo / plant-based", 59.3175, 18.06, "food", "Restaurant", "Södermalm", 5, "Plant-based bowls on Söder.", { cuisine: "vegan vegetarian" }),

    // ——— Nightlife ———
    place("sth-night-stureplan", "Stureplan clubs", 59.3365, 18.073, "nightlife", "Club", "Östermalm", 7, "Dressy nightlife hub."),
    place("sth-night-sodermalm", "Södermalm bars", 59.3175, 18.074, "nightlife", "Bar", "Södermalm", 8, "Casual bars around SoFo and Mariatorget."),
    place("sth-night-acc", "Akkurat", 59.3205, 18.07, "nightlife", "Bar", "Södermalm", 8, "Legendary beer and whisky bar."),
    place("sth-night-trader", "Himlen Sky Bar", 59.3125, 18.075, "nightlife", "Bar", "Södermalm", 7, "26th-floor views over Stockholm."),
    place("sth-night-under", "Under Kastanjen", 59.3255, 18.0715, "nightlife", "Bar", "Gamla Stan", 6, "Courtyard drinks in Gamla Stan."),
    place("sth-night-deb", "Debaser Strand", 59.32, 18.09, "nightlife", "Club", "Södermalm", 6, "Live music venue by the water."),
    place("sth-night-nordic", "Nordic Sea Hotel ice bar", 59.3325, 18.0585, "nightlife", "Bar", "Norrmalm", 5, "Touristy ice bar experience."),

    // ——— Stays ———
    place("sth-stay-grand", "Grand Hôtel Stockholm", 59.3295, 18.0755, "stay", "Hotel", "Norrmalm", 10, "Waterfront luxury facing the palace."),
    place("sth-stay-ett", "Ett Hem", 59.3435, 18.0655, "stay", "Hotel", "Östermalm", 9, "Residential mansion boutique."),
    place("sth-stay-nobis", "Nobis Hotel", 59.3335, 18.0725, "stay", "Hotel", "Norrmalm", 8, "Design hotel on Norrmalmstorg."),
    place("sth-stay-rival", "Hotel Rival", 59.3185, 18.062, "stay", "Hotel", "Södermalm", 8, "ABBA-linked boutique on Mariatorget."),
    place("sth-stay-generator", "Generator Stockholm", 59.3455, 18.0555, "stay", "Hostel", "Norrmalm", 6, "Design hostel near the library."),
    place("sth-stay-city", "City Backpackers", 59.3355, 18.0555, "stay", "Hostel", "Norrmalm", 6, "Central hostel with sauna."),
    place("sth-stay-gamla", "Gamla Stan boutique", 59.3248, 18.0708, "stay", "Hotel", "Gamla Stan", 8, "Old-town rooms in historic buildings."),
    place("sth-stay-apt", "Södermalm apartment", 59.3165, 18.075, "stay", "Apartment", "Södermalm", 7, "Residential SoFo base."),

    // ——— Extra sights ———
    place("sth-kungstradgarden", "Kungsträdgården", 59.3315, 18.0715, "nature", "Park", "Norrmalm", 6, "Central park with sakura and winter ice rink."),
    place("sth-slussen-new", "New Slussen waterfront", 59.3208, 18.0735, "sight", "Attraction", "Södermalm", 5, "Rebuilt junction terraces over the water."),
  ],
};
