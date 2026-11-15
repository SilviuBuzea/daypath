import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const vienna: CityCatalog = {
  id: "vienna",
  name: "Vienna, Austria",
  aliases: ["vienna", "wien"],
  center: { lat: 48.2082, lon: 16.3738 },
  places: [
    // ——— Innere Stadt ———
    place("vie-stephansdom", "St. Stephen's Cathedral", 48.2085, 16.3731, "sight", "Monument", "Innere Stadt", 10, "Gothic south tower climb over the old town."),
    place("vie-hofburg", "Hofburg Palace", 48.2055, 16.365, "sight", "Attraction", "Innere Stadt", 9, "Imperial apartments, Sisi Museum, and Spanish Riding School."),
    place("vie-sisi", "Sisi Museum", 48.2058, 16.3655, "museum", "Museum", "Innere Stadt", 8, "Empress Elisabeth story inside Hofburg."),
    place("vie-albertina", "Albertina", 48.2045, 16.3685, "museum", "Museum", "Innere Stadt", 9, "Graphic arts and Monet/Picasso shows by the Opera."),
    place("vie-opera", "Vienna State Opera", 48.2035, 16.369, "sight", "Monument", "Innere Stadt", 9, "Standing tickets or guided tours of the opera house."),
    place("vie-kunsthisto", "Kunsthistorisches Museum", 48.2037, 16.3615, "museum", "Museum", "Innere Stadt", 10, "Bruegel and Habsburg treasures on Maria-Theresien-Platz."),
    place("vie-nhm", "Natural History Museum", 48.205, 16.3595, "museum", "Museum", "Innere Stadt", 7, "Dinosaurs opposite the Kunsthistorisches."),
    place("vie-ring", "Ringstrasse walk", 48.205, 16.37, "sight", "Attraction", "Innere Stadt", 8, "Grand boulevard loop — tram 1/2 sightseeing."),
    place("vie-rathaus", "Vienna City Hall", 48.2108, 16.3585, "sight", "Monument", "Innere Stadt", 7, "Neo-Gothic Rathaus and Christmas market square."),
    place("vie-parliament", "Austrian Parliament", 48.208, 16.358, "sight", "Monument", "Innere Stadt", 7, "Athena fountain and renovated parliament."),
    place("vie-burgtheater", "Burgtheater", 48.2105, 16.3615, "sight", "Monument", "Innere Stadt", 6, "Imperial theatre facing the Rathaus."),
    place("vie-kapuziner", "Capuchin Crypt (Kaisergruft)", 48.2055, 16.37, "sight", "Monument", "Innere Stadt", 7, "Habsburg imperial tombs under the Capuchins."),
    place("vie-jewish-museum", "Jewish Museum Vienna", 48.2075, 16.3695, "museum", "Museum", "Innere Stadt", 7, "Jewish history on Dorotheergasse."),
    place("vie-mozart-haus", "Mozarthaus Vienna", 48.208, 16.3765, "museum", "Museum", "Innere Stadt", 6, "Mozart's only surviving Vienna apartment."),
    place("vie-stadtpark", "Stadtpark", 48.205, 16.3795, "nature", "Park", "Innere Stadt", 7, "Golden Johann Strauss statue and park paths."),
    place("vie-gricken", "Graben & Kohlmarkt", 48.2085, 16.3695, "shopping", "Market", "Innere Stadt", 7, "Luxury shopping spine to Hofburg."),
    place("vie-haust", "Haas House rooftop view", 48.208, 16.3725, "sight", "Viewpoint", "Innere Stadt", 6, "Modern glass façade opposite Stephansdom."),

    // ——— MuseumsQuartier / Neubau ———
    place("vie-mq", "MuseumsQuartier", 48.2035, 16.359, "museum", "Museum", "Neubau", 9, "Leopold, MUMOK, and courtyard loungers."),
    place("vie-leopold", "Leopold Museum", 48.2035, 16.3585, "museum", "Museum", "Neubau", 9, "Schiele and Klimt in the MQ."),
    place("vie-mumok", "MUMOK", 48.2038, 16.3575, "museum", "Museum", "Neubau", 7, "Modern and contemporary art cube."),
    place("vie-spittelberg", "Spittelberg lanes", 48.2035, 16.3555, "sight", "Attraction", "Neubau", 7, "Biedermeier lanes and Christmas market."),
    place("vie-naschmarkt", "Naschmarkt", 48.1985, 16.3635, "shopping", "Market", "Mariahilf", 9, "Food market stalls and Saturday flea market."),
    place("vie-secession", "Secession Building", 48.2005, 16.3655, "museum", "Museum", "Mariahilf", 8, "Golden cabbage dome and Klimt Beethoven Frieze."),
    place("vie-theater-an-der-wien", "Theater an der Wien", 48.1995, 16.3645, "sight", "Monument", "Mariahilf", 6, "Historic opera house by Naschmarkt."),

    // ——— Belvedere / Landstraße ———
    place("vie-belvedere", "Belvedere Palace", 48.191, 16.3808, "museum", "Museum", "Landstraße", 10, "Klimt's Kiss in Upper Belvedere."),
    place("vie-belvedere-garden", "Belvedere Gardens", 48.1925, 16.3815, "nature", "Garden", "Landstraße", 8, "Baroque terraces between Upper and Lower."),
    place("vie-hund", "Hundertwasserhaus", 48.2075, 16.394, "sight", "Attraction", "Landstraße", 7, "Colorful undulating apartment landmark."),
    place("vie-kunsthaus", "KunstHausWien", 48.2105, 16.3935, "museum", "Museum", "Landstraße", 7, "Hundertwasser museum nearby."),
    place("vie-stadtpark-east", "Stadtpark to Belvedere walk", 48.1985, 16.38, "sight", "Attraction", "Landstraße", 5, "Connect parks south of the Ring."),

    // ——— Schönbrunn / Hietzing ———
    place("vie-schonbrunn", "Schönbrunn Palace", 48.1845, 16.3122, "sight", "Attraction", "Hietzing", 10, "Imperial summer palace — give it a half-day."),
    place("vie-schonbrunn-garden", "Schönbrunn Gardens & Gloriette", 48.1825, 16.3115, "nature", "Garden", "Hietzing", 9, "Hilltop Gloriette café with palace views."),
    place("vie-zoo", "Tiergarten Schönbrunn", 48.182, 16.3035, "nature", "Park", "Hietzing", 8, "World's oldest zoo in the palace grounds."),
    place("vie-wagenburg", "Wagenburg", 48.1855, 16.3095, "museum", "Museum", "Hietzing", 6, "Imperial carriage museum."),

    // ——— Leopoldstadt / Prater ———
    place("vie-prater", "Prater", 48.2165, 16.396, "nature", "Park", "Leopoldstadt", 8, "Amusement park and vast green Prater Hauptallee."),
    place("vie-riesenrad", "Wiener Riesenrad", 48.2165, 16.3958, "sight", "Attraction", "Leopoldstadt", 8, "Iconic Ferris wheel from The Third Man."),
    place("vie-donauinsel", "Donauinsel", 48.23, 16.41, "nature", "Park", "Donaustadt", 6, "Danube island for bikes and summer swimming."),
    place("vie-danube-tower", "Danube Tower", 48.2405, 16.41, "sight", "Viewpoint", "Donaustadt", 6, "Rotating restaurant tower north of the Prater."),
    place("vie-augarten", "Augarten", 48.2255, 16.3785, "nature", "Park", "Leopoldstadt", 6, "Baroque park with porcelain manufactory."),

    // ——— More ———
    place("vie-karlskirche", "Karlskirche", 48.1985, 16.3715, "sight", "Monument", "Wieden", 8, "Baroque dome with elevator to the frescoes."),
    place("vie-technisches", "Technisches Museum", 48.1905, 16.3185, "museum", "Museum", "Penzing", 6, "Science and tech museum near Schönbrunn."),
    place("vie-sigmund", "Sigmund Freud Museum", 48.2185, 16.3635, "museum", "Museum", "Alsergrund", 7, "Freud's apartment and practice rooms."),
    place("vie-liechtenstein", "Liechtenstein Garden Palace", 48.2225, 16.36, "museum", "Museum", "Alsergrund", 6, "Baroque palace art collection (check openings)."),
    place("vie-hause", "House of Music", 48.2045, 16.3755, "museum", "Museum", "Innere Stadt", 6, "Interactive sound museum near Stephansplatz."),
    place("vie-mariahilfer", "Mariahilfer Straße", 48.1985, 16.3525, "shopping", "Market", "Mariahilf", 7, "Main shopping street west of the center."),

    // ——— Cafes ———
    place("vie-cafe-central", "Café Central", 48.2103, 16.365, "cafe", "Cafe", "Innere Stadt", 9, "Grand literary coffeehouse under vaulted ceilings.", { cuisine: "coffee viennese" }),
    place("vie-cafe-sacher", "Café Sacher", 48.204, 16.3695, "cafe", "Cafe", "Innere Stadt", 8, "Original Sachertorte beside the Opera.", { cuisine: "pastry coffee" }),
    place("vie-cafe-hawelka", "Café Hawelka", 48.2085, 16.369, "cafe", "Cafe", "Innere Stadt", 7, "Bohemian smoky classic near Graben.", { cuisine: "coffee" }),
    place("vie-cafe-demel", "Demel", 48.2085, 16.3675, "cafe", "Cafe", "Innere Stadt", 8, "Imperial pastry shop on Kohlmarkt.", { cuisine: "pastry coffee" }),
    place("vie-cafe-sperl", "Café Sperl", 48.1985, 16.3615, "cafe", "Cafe", "Mariahilf", 7, "Billiards and Melange near Naschmarkt.", { cuisine: "coffee viennese" }),
    place("vie-cafe-landtmann", "Café Landtmann", 48.2105, 16.361, "cafe", "Cafe", "Innere Stadt", 7, "Freud's haunt by the Burgtheater.", { cuisine: "coffee viennese" }),
    place("vie-cafe-pruckel", "Café Prückel", 48.2075, 16.3815, "cafe", "Cafe", "Innere Stadt", 6, "1950s interior on the Ring near Stadtpark.", { cuisine: "coffee" }),
    place("vie-cafe-kleines", "Kleines Café", 48.207, 16.3765, "cafe", "Cafe", "Innere Stadt", 6, "Tiny Franziskanerplatz terrace café.", { cuisine: "coffee" }),

    // ——— Food ———
    place("vie-food-figl", "Figlmüller", 48.2095, 16.3755, "food", "Restaurant", "Innere Stadt", 9, "Oversized Wiener Schnitzel near Stephansdom.", { cuisine: "austrian" }),
    place("vie-food-platten", "Plachutta Wollzeile", 48.2085, 16.3775, "food", "Restaurant", "Innere Stadt", 8, "Tafelspitz boiled beef tradition.", { cuisine: "austrian" }),
    place("vie-food-gulasch", "Gulaschmuseum", 48.208, 16.3785, "food", "Restaurant", "Innere Stadt", 7, "Dozens of goulash variations.", { cuisine: "austrian hungarian" }),
    place("vie-food-naschmarkt", "Naschmarkt food stalls", 48.1988, 16.364, "food", "Quick meal", "Mariahilf", 8, "Middle Eastern, Asian, and Austrian counters.", { cuisine: "market middle_eastern" }),
    place("vie-food-steiereck", "Steirereck", 48.2045, 16.3815, "food", "Restaurant", "Innere Stadt", 10, "Top Austrian fine dining in Stadtpark.", { cuisine: "austrian" }),
    place("vie-food-bitzinger", "Bitzinger Würstelstand", 48.2035, 16.3685, "food", "Quick meal", "Innere Stadt", 7, "Late Käsekrainer by the Opera.", { cuisine: "austrian street_food" }),
    place("vie-food-vestibul", "Vestibül", 48.2105, 16.3618, "food", "Restaurant", "Innere Stadt", 7, "Burgtheater restaurant for Austrian plates.", { cuisine: "austrian" }),
    place("vie-food-happy", "Tian", 48.2065, 16.3755, "food", "Restaurant", "Innere Stadt", 8, "Vegetarian fine dining near Stadtpark.", { cuisine: "vegetarian" }),
    place("vie-food-schnitzelwirt", "Schnitzelwirt", 48.2055, 16.3525, "food", "Restaurant", "Neubau", 6, "No-frills schnitzel house in Neubau.", { cuisine: "austrian" }),
    place("vie-food-gasthaus", "Gasthaus Pöschl", 48.2075, 16.376, "food", "Restaurant", "Innere Stadt", 6, "Neighborhood Beisl near Stephansplatz.", { cuisine: "austrian" }),
    place("vie-food-manami", "Manami / Asian break", 48.1985, 16.363, "food", "Restaurant", "Mariahilf", 5, "Asian bowls near Naschmarkt.", { cuisine: "asian" }),
    place("vie-food-pizza", "Ancora / Italian", 48.2055, 16.37, "food", "Restaurant", "Innere Stadt", 5, "Italian escape in the first district.", { cuisine: "italian" }),
    place("vie-food-heuriger", "Heuriger Mayer am Pfarrplatz", 48.26, 16.355, "food", "Restaurant", "Döbling", 7, "Wine tavern evening in Grinzing hills.", { cuisine: "austrian wine" }),
    place("vie-food-trzesniewski", "Trzesniewski", 48.2085, 16.3698, "food", "Quick meal", "Innere Stadt", 7, "Open-faced finger sandwiches and beer.", { cuisine: "austrian" }),

    // ——— Nightlife ———
    place("vie-night-loft", "Loft Vienna", 48.2185, 16.39, "nightlife", "Club", "Leopoldstadt", 7, "Large club nights near Prater."),
    place("vie-night-flex", "Flex", 48.2155, 16.37, "nightlife", "Club", "Innere Stadt", 7, "Danube Canal electronic club."),
    place("vie-night-praterstrasse", "Praterstraße bars", 48.2155, 16.39, "nightlife", "Bar", "Leopoldstadt", 6, "Bars between city and Prater."),
    place("vie-night-nachtmarkt", "Naschmarkt night bars", 48.1985, 16.3638, "nightlife", "Bar", "Mariahilf", 7, "Late drinks along the market strip."),
    place("vie-night-lohos", "Loos American Bar", 48.208, 16.3715, "nightlife", "Bar", "Innere Stadt", 8, "Tiny Adolf Loos cocktail classic."),
    place("vie-night-dachboden", "Dachboden", 48.21, 16.3555, "nightlife", "Bar", "Neubau", 7, "25hours rooftop bar with city views."),
    place("vie-night-first", "First Floor Bar", 48.2085, 16.372, "nightlife", "Bar", "Innere Stadt", 6, "Cocktails near Stephansplatz."),

    // ——— Stays ———
    place("vie-stay-sacher", "Hotel Sacher", 48.2038, 16.3692, "stay", "Hotel", "Innere Stadt", 10, "Opera-adjacent grand hotel of cake fame."),
    place("vie-stay-imperial", "Hotel Imperial", 48.2015, 16.3725, "stay", "Hotel", "Innere Stadt", 9, "Ringstrasse palace hotel."),
    place("vie-stay-25hours", "25hours Hotel Wien", 48.21, 16.355, "stay", "Hotel", "Neubau", 8, "Circus-themed design hotel by MQ."),
    place("vie-stay-daniel", "Hotel Daniel Vienna", 48.1915, 16.3855, "stay", "Hotel", "Landstraße", 7, "Design stay near Belvedere and Hauptbahnhof."),
    place("vie-stay-ruby", "Ruby Marie Hotel", 48.1985, 16.3555, "stay", "Hotel", "Mariahilf", 7, "Lean luxury near Mariahilfer Straße."),
    place("vie-stay-wombats", "Wombat's City Hostel", 48.1965, 16.35, "stay", "Hostel", "Mariahilf", 6, "Social hostel by Westbahnhof."),
    place("vie-stay-generator", "Generator Vienna", 48.2185, 16.3925, "stay", "Hostel", "Leopoldstadt", 6, "Design hostel near Prater."),
    place("vie-stay-apt", "Neubau apartment", 48.2035, 16.3525, "stay", "Apartment", "Neubau", 7, "Residential base near Spittelberg and MQ."),

    // ——— Extra sights ———
    place("vie-votive", "Votive Church", 48.2155, 16.3585, "sight", "Monument", "Alsergrund", 6, "Neo-Gothic twin spires on the Ring."),
    place("vie-university", "University of Vienna main building", 48.213, 16.3605, "sight", "Attraction", "Alsergrund", 5, "Arcaded courtyard on the Ringstrasse."),
    place("vie-anker", "Anker Clock", 48.2115, 16.3735, "sight", "Monument", "Innere Stadt", 6, "Art Nouveau clock procession at noon."),
    place("vie-hundermarkt", "Karmelitermarkt", 48.2185, 16.38, "shopping", "Market", "Leopoldstadt", 6, "Neighbourhood market in Leopoldstadt."),
    place("vie-donaukanal", "Donaukanal promenade", 48.2155, 16.3755, "nature", "Park", "Innere Stadt", 6, "Canal bars and summer swimming spots."),
  ],
};
