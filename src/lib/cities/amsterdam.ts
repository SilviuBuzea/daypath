import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const amsterdam: CityCatalog = {
  id: "amsterdam",
  name: "Amsterdam, Netherlands",
  aliases: ["amsterdam"],
  center: { lat: 52.3676, lon: 4.9041 },
  places: [
    // ——— Canal ring / Centrum ———
    place("ams-centraal", "Amsterdam Centraal station", 52.3791, 4.9003, "sight", "Attraction", "Centrum", 6, "Arrival hub — free ferries to Noord leave from the rear."),
    place("ams-dam", "Dam Square", 52.3731, 4.8932, "sight", "Attraction", "Centrum", 8, "Royal Palace and National Monument — orientation hub for the center."),
    place("ams-palace", "Royal Palace Amsterdam", 52.3732, 4.8916, "sight", "Monument", "Centrum", 8, "Former city hall turned palace — check opening days."),
    place("ams-begijnhof", "Begijnhof", 52.3695, 4.8895, "sight", "Attraction", "Centrum", 7, "Hidden cloister garden off Spui — quiet escape."),
    place("ams-spui", "Spui book market", 52.3688, 4.8892, "shopping", "Market", "Centrum", 6, "Friday book stalls and cafes around the Spui square."),
    place("ams-magere", "Magere Brug", 52.3635, 4.9035, "sight", "Attraction", "Plantage", 7, "Skinny bridge lights up at night over the Amstel."),
    place("ams-herengracht", "Herengracht canal walk", 52.3705, 4.8885, "sight", "Attraction", "Canal Ring", 8, "Golden Bend gabled houses on the grandest canal."),
    place("ams-rijksmuseum", "Rijksmuseum", 52.36, 4.8852, "museum", "Museum", "Museumplein", 10, "Dutch Masters and Rembrandt's Night Watch — book timed entry.", { flags: ["ticket", "touristy"] }),
    place("ams-van-gogh", "Van Gogh Museum", 52.3584, 4.8811, "museum", "Museum", "Museumplein", 10, "The world's largest Van Gogh collection beside the Rijksmuseum. Book ahead.", { flags: ["ticket", "touristy"] }),
    place("ams-stedelijk", "Stedelijk Museum", 52.3579, 4.8798, "museum", "Museum", "Museumplein", 7, "Modern and contemporary art on Museumplein."),
    place("ams-museumplein", "Museumplein lawn", 52.3595, 4.8835, "sight", "Attraction", "Museumplein", 7, "Iamsterdam letters gone but the lawn and terraces remain."),
    place("ams-vondelpark", "Vondelpark", 52.3579, 4.8686, "nature", "Park", "Oud-West", 8, "Central park for bikes, ponds, and open-air theatre in summer."),
    place("ams-westertoren", "Westerkerk tower", 52.3745, 4.8835, "sight", "Monument", "Jordaan", 7, "Climb for canal views near Anne Frank's house."),
    place("ams-anne", "Anne Frank House", 52.3752, 4.884, "museum", "Museum", "Jordaan", 10, "Book weeks ahead — canal-side annex museum.", { flags: ["ticket", "early", "touristy"] }),
    place("ams-houseboats", "Houseboat Museum", 52.3725, 4.8845, "museum", "Museum", "Jordaan", 6, "Single-canal-boat glimpse of Amsterdam water living."),

    // ——— Jordaan / Nine Streets ———
    place("ams-jordaan", "Jordaan lanes", 52.374, 4.881, "sight", "Attraction", "Jordaan", 8, "Courtyards, hofjes, and brown cafes west of the canals."),
    place("ams-nine-streets", "De Negen Straatjes", 52.3695, 4.8855, "shopping", "Market", "Canal Ring", 7, "Vintage, design, and lunch counters between canals."),
    place("ams-westerkerk", "Westerkerk", 52.3744, 4.8836, "sight", "Monument", "Jordaan", 7, "Renaissance church whose bells Anne Frank wrote about."),
    place("ams-noordermarkt", "Noordermarkt", 52.3795, 4.8845, "shopping", "Market", "Jordaan", 7, "Saturday organic market and Monday textile stalls."),
    place("ams-lindengracht", "Lindengracht market", 52.3785, 4.8825, "shopping", "Market", "Jordaan", 6, "Saturday street market along the Jordaan edge."),

    // ——— De Pijp / Albert Cuyp ———
    place("ams-albert-cuyp", "Albert Cuyp Market", 52.3558, 4.8952, "shopping", "Market", "De Pijp", 8, "Everyday Amsterdam market — stroopwafels and herring stalls."),
    place("ams-heineken", "Heineken Experience", 52.3578, 4.8918, "sight", "Attraction", "De Pijp", 6, "Brand tour if you want a beer break in De Pijp."),
    place("ams-sarphati", "Sarphatipark", 52.3515, 4.8965, "nature", "Park", "De Pijp", 6, "Leafy neighbourhood park south of Albert Cuyp."),
    place("ams-pijp-lanes", "De Pijp restaurant streets", 52.3565, 4.8935, "sight", "Attraction", "De Pijp", 7, "Terrace dining along Ferdinand Bolstraat and side lanes."),

    // ——— Plantage / East ———
    place("ams-artis", "Artis Royal Zoo", 52.3658, 4.9165, "sight", "Attraction", "Plantage", 7, "City zoo with historic gardens and aquarium."),
    place("ams-hermitage", "Hermitage Amsterdam", 52.3655, 4.9045, "museum", "Museum", "Plantage", 7, "Russia-linked exhibitions on the Amstel."),
    place("ams-portuguese", "Portuguese Synagogue", 52.3675, 4.9055, "sight", "Monument", "Plantage", 7, "Candlelit 17th-century synagogue complex."),
    place("ams-hortus", "Hortus Botanicus", 52.3672, 4.9085, "nature", "Garden", "Plantage", 7, "Historic botanical garden beside Artis."),
    place("ams-verzetsmuseum", "Dutch Resistance Museum", 52.3678, 4.9125, "museum", "Museum", "Plantage", 7, "WWII Netherlands stories east of the center."),
    place("ams-scheepvaart", "National Maritime Museum", 52.3715, 4.9145, "museum", "Museum", "Plantage", 8, "Ship replica and Dutch seafaring history on the Oosterdok."),

    // ——— Amsterdam Noord ———
    place("ams-eye", "Eye Filmmuseum", 52.3845, 4.9005, "museum", "Museum", "Noord", 8, "Architecture, film archive, and IJ-side terrace — free ferry."),
    place("ams-noord-ferry", "Buiksloterweg ferry viewpoint", 52.3835, 4.9015, "sight", "Viewpoint", "Noord", 7, "Free ferry from Centraal with skyline photos back to the center."),
    place("ams-adam", "A'DAM Lookout", 52.3842, 4.9022, "sight", "Viewpoint", "Noord", 7, "Rooftop swing and panorama across the IJ."),
    place("ams-noord-brewery", "Noord brewery strip", 52.3885, 4.8985, "sight", "Attraction", "Noord", 6, "Former shipyard breweries and cultural halls."),

    // ——— West / Westerpark ———
    place("ams-westerpark", "Westerpark", 52.3865, 4.8735, "nature", "Park", "Westerpark", 7, "Culture, food hall, and green space west of the Jordaan."),
    place("ams-wondr", "WONDR Experience", 52.3925, 4.8755, "sight", "Attraction", "Noord", 6, "Interactive photo playground on the Noord side."),
    // ——— Red Light District / Nieuwmarkt ———
    place("ams-nieuwmarkt", "Nieuwmarkt square", 52.3725, 4.9005, "sight", "Attraction", "Centrum", 7, "De Waag and market days on the old city gate square."),
    place("ams-de-waag", "De Waag", 52.3728, 4.9002, "sight", "Monument", "Centrum", 6, "Medieval gate building — former anatomy theatre."),
    place("ams-oude-kerk", "Oude Kerk", 52.3745, 4.8978, "sight", "Monument", "Red Light District", 7, "Oldest building in Amsterdam in the canal belt edge."),
    place("ams-red-light-walk", "Canal belt evening walk", 52.3735, 4.8985, "sight", "Attraction", "Centrum", 6, "Narrow lanes and lit bridges — stay aware of local rules."),

    place("ams-java", "Java-eiland architecture walk", 52.3745, 4.9255, "sight", "Attraction", "Oost", 6, "Modern waterfront blocks on the eastern docklands."),
    place("ams-rookworst", "Waterland day-trip quay", 52.3795, 4.9015, "sight", "Attraction", "Centrum", 5, "Canal tours and bike rental docks behind Centraal."),

    // ——— South / Oud-Zuid ———
    place("ams-olympic", "Olympic Stadium", 52.3435, 4.8545, "sight", "Attraction", "Oud-Zuid", 6, "1928 stadium and park southwest of Museumplein."),
    place("ams-rivierenbuurt", "Rivierenbuurt architecture", 52.3415, 4.8915, "sight", "Attraction", "Rivierenbuurt", 6, "Amsterdam School brick blocks — tram south from the center."),

    // ——— More museums ———
    place("ams-amsterdam-museum", "Amsterdam Museum", 52.3702, 4.8845, "museum", "Museum", "Centrum", 7, "City history in the old civic orphanage."),
    place("ams-attic", "Our Lord in the Attic", 52.3755, 4.8995, "museum", "Museum", "Centrum", 7, "Hidden Catholic church in a canal-house attic."),
    place("ams-concertgebouw", "Concertgebouw", 52.3562, 4.8795, "sight", "Monument", "Museumplein", 8, "World-famous concert hall behind the Rijksmuseum."),
    place("ams-nemo", "NEMO Science Museum", 52.3742, 4.9125, "museum", "Museum", "Oosterdok", 7, "Green ship-shaped building with rooftop views."),
    place("ams-photography", "Foam Fotografiemuseum", 52.3645, 4.8935, "museum", "Museum", "Canal Ring", 7, "Photography exhibitions on Keizersgracht."),
    place("ams-moco", "Moco Museum", 52.3588, 4.8815, "museum", "Museum", "Museumplein", 6, "Banksy and modern shows in a Villa Alsberg mansion."),
    place("ams-grachtenhuis", "Museum van Loon", 52.3655, 4.8995, "museum", "Museum", "Canal Ring", 7, "Canal-house interiors and garden on Keizersgracht."),
    place("ams-willet", "Museum Willet-Holthuysen", 52.3658, 4.8992, "museum", "Museum", "Canal Ring", 6, "Golden Age canal house museum."),
    place("ams-tropen", "Tropenmuseum", 52.3665, 4.9225, "museum", "Museum", "Oost", 7, "World cultures museum in the east — rainy-day pick."),

    // ——— Cafes ———
    place("ams-cafe-bocca", "Bocca Coffee", 52.3635, 4.8845, "cafe", "Cafe", "De Pijp", 7, "Specialty roaster on Kerkstraat.", { cuisine: "coffee" }),
    place("ams-cafe-lot", "Lot Sixty One", 52.3755, 4.8825, "cafe", "Cafe", "Jordaan", 7, "Jordaan espresso bar.", { cuisine: "coffee" }),
    place("ams-cafe-back", "Back to Black", 52.3645, 4.8935, "cafe", "Cafe", "De Pijp", 7, "Cult coffee on Weteringpad.", { cuisine: "coffee" }),
    place("ams-cafe-winkel", "Winkel 43", 52.3795, 4.8848, "cafe", "Cafe", "Jordaan", 7, "Famous apple pie terrace on Noordermarkt.", { cuisine: "pastry coffee" }),
    place("ams-cafe-proud", "Proud Mary", 52.3675, 4.8745, "cafe", "Cafe", "Oud-West", 6, "Third-wave coffee near Vondelpark.", { cuisine: "coffee" }),
    place("ams-cafe-screaming", "Screaming Beans", 52.3648, 4.8835, "cafe", "Cafe", "Museumplein", 6, "Museumplein caffeine between big museums.", { cuisine: "coffee" }),
    place("ams-cafe-gartine", "Gartine", 52.3735, 4.8955, "cafe", "Cafe", "Centrum", 6, "Tiny tartine-and-tea room near Nieuwmarkt.", { cuisine: "pastry brunch" }),

    // ——— Food ———
    place("ams-rijks-cafe", "RIJKS restaurant", 52.3602, 4.8855, "food", "Restaurant", "Museumplein", 8, "Modern Dutch plates inside the Rijksmuseum.", { cuisine: "dutch" }),
    place("ams-gheraamte", "De Gheerette / Rembrandtplein area", 52.3665, 4.8955, "food", "Restaurant", "Centrum", 7, "Classic Dutch dining rooms near Rembrandtplein.", { cuisine: "dutch" }),
    place("ams-moeders", "Moeders", 52.3685, 4.8675, "food", "Restaurant", "Oud-West", 7, "Stamppot and Dutch comfort food.", { cuisine: "dutch" }),
    place("ams-cafe-loetje", "Café Loetje", 52.3585, 4.8795, "food", "Restaurant", "Museumplein", 7, "Famous biefstek (steak) beside Museumplein.", { cuisine: "dutch steak" }),
    place("ams-singel", "Singel 410 herring", 52.3758, 4.8895, "food", "Quick meal", "Canal Ring", 7, "Stand-up herring counter on the canal.", { cuisine: "seafood dutch" }),
    place("ams-vlaams", "Vlaams Friteshuis Vleminckx", 52.3672, 4.8905, "food", "Quick meal", "Centrum", 7, "Legendary fries with saté sauce in the center.", { cuisine: "dutch street_food" }),
    place("ams-ramen", "Ramen Yamamoto", 52.3645, 4.8925, "food", "Restaurant", "De Pijp", 7, "Ramen escape in the Pijp.", { cuisine: "japanese" }),
    place("ams-firma", "Restaurant Firma", 52.3725, 4.8965, "food", "Restaurant", "Centrum", 7, "Seasonal Dutch tasting menu near Nieuwmarkt.", { cuisine: "dutch european" }),
    place("ams-bolenius", "Bolenius", 52.3605, 4.8875, "food", "Restaurant", "Museumplein", 7, "Vegetable-forward Dutch at Museumplein.", { cuisine: "dutch vegetarian" }),
    place("ams-maoz", "Maoz falafel", 52.3725, 4.8945, "food", "Quick meal", "Centrum", 6, "Fast vegan falafel near Dam.", { cuisine: "middle_eastern vegetarian" }),
    place("ams-pancake", "Pannenkoekenhuis Upstairs", 52.3765, 4.8835, "food", "Restaurant", "Jordaan", 6, "Tiny pancake house on Jordaan stairs.", { cuisine: "dutch pancake" }),
    place("ams-bridge", "Café de Jaren", 52.3678, 4.8965, "food", "Restaurant", "Centrum", 7, "Canal-front lunch terrace by Blauwbrug.", { cuisine: "european dutch" }),
    place("ams-hannekes", "Hannekes Boom", 52.3695, 4.9155, "food", "Restaurant", "Oosterdok", 6, "Rough-and-ready waterside BBQ and beer.", { cuisine: "bbq dutch" }),
    place("ams-serre", "De Kas greenhouse dining", 52.3595, 4.9255, "food", "Restaurant", "Oost", 8, "Eat inside a working greenhouse — reserve ahead.", { cuisine: "dutch organic" }),
    place("ams-indonesian", "Indonesian rijsttafel", 52.3595, 4.8915, "food", "Restaurant", "De Pijp", 7, "Colonial-era rijsttafel spread in the Pijp.", { cuisine: "indonesian" }),
    place("ams-foodhallen", "Foodhallen", 52.3665, 4.8685, "food", "Quick meal", "Oud-West", 7, "Bitterballen and global stalls in a former tram depot.", { cuisine: "market dutch street_food" }),
    place("ams-roti", "Roti Roll", 52.3565, 4.8945, "food", "Quick meal", "De Pijp", 6, "Surinamese roti pockets near Albert Cuyp.", { cuisine: "surinamese" }),
    place("ams-vegan", "Mr. Tempeh", 52.3655, 4.8815, "food", "Restaurant", "Oud-West", 5, "Plant-based bowls west of the canals.", { cuisine: "vegan vegetarian" }),

    // ——— Nightlife ———
    place("ams-night-leidse", "Leidseplein bars", 52.3638, 4.8835, "nightlife", "Bar", "Centrum", 7, "Dense terrace bars and clubs around the square."),
    place("ams-night-rembrandt", "Rembrandtplein nightlife", 52.3665, 4.8952, "nightlife", "Bar", "Centrum", 6, "Lounges and dance clubs on the square."),
    place("ams-night-jordan", "Jordan brown cafes", 52.3745, 4.8805, "nightlife", "Bar", "Jordaan", 7, "Gezellig canal-side pubs in the Jordaan."),
    place("ams-night-brouwerij", "Brouwerij 't IJ", 52.3668, 4.9265, "nightlife", "Bar", "Oost", 8, "Windmill brewery for Dutch craft beer."),
    place("ams-night-pian", "Pianobar Lil' Pub", 52.3715, 4.8845, "nightlife", "Bar", "Jordaan", 6, "Intimate sing-along piano bar."),
    place("ams-night-door", "Door 74", 52.3645, 4.8885, "nightlife", "Bar", "Centrum", 7, "Reservation-only speakeasy cocktails."),
    place("ams-night-paradiso", "Paradiso", 52.3622, 4.8842, "nightlife", "Bar", "Centrum", 7, "Church-turned-concert hall beside Leidseplein."),
    place("ams-night-noord", "Noord waterfront bars", 52.3845, 4.8995, "nightlife", "Bar", "Noord", 6, "Post-ferry drinks with IJ views."),
    place("ams-night-radio", "Radio Radio", 52.3655, 4.8945, "nightlife", "Bar", "De Pijp", 6, "Pijp electronic music club nights."),

    // ——— Stays ———
    place("ams-stay-pulitzer", "Pulitzer Amsterdam area", 52.3705, 4.8845, "stay", "Hotel", "Canal Ring", 9, "Canal-house luxury between Jordaan and Nine Streets."),
    place("ams-stay-dylan", "The Dylan area", 52.3675, 4.8915, "stay", "Hotel", "Canal Ring", 9, "Keizersgracht boutique on a quiet canal bend."),
    place("ams-stay-ambassade", "Ambassade Hotel", 52.3708, 4.8858, "stay", "Hotel", "Canal Ring", 8, "Literary canal-house hotel on Herengracht."),
    place("ams-stay-hoxton", "The Hoxton Amsterdam", 52.3755, 4.8995, "stay", "Hotel", "Centrum", 8, "Lively lobby bar on the canal belt east side."),
    place("ams-stay-mollie", "Hotel Max Brown area", 52.3645, 4.8865, "stay", "Hotel", "Museumplein", 7, "Museumplein-adjacent design stays."),
    place("ams-stay-citizenm", "citizenM Amsterdam", 52.3735, 4.8912, "stay", "Hotel", "Centrum", 7, "Compact modern rooms near Dam."),
    place("ams-stay-movenpick", "Mövenpick Amsterdam City", 52.3695, 4.9155, "stay", "Hotel", "Oost", 7, "River-facing base east of the center."),
    place("ams-stay-sir", "Sir Adam Hotel", 52.3845, 4.9025, "stay", "Hotel", "Noord", 7, "A'DAM tower hotel across the IJ."),
    place("ams-stay-jordaan", "Jordaan boutique hotel", 52.3775, 4.8825, "stay", "Hotel", "Jordaan", 7, "Quiet nights west of Anne Frank house."),
    place("ams-stay-pijp", "De Pijp apartment hotel", 52.3565, 4.8925, "stay", "Hotel", "De Pijp", 7, "Market-morning base on Albert Cuyp."),
    place("ams-stay-vondel", "Vondelpark stay", 52.3615, 4.8725, "stay", "Hotel", "Oud-West", 6, "Green-edge rooms near the park."),
    place("ams-stay-flying", "Flying Pig Uptown", 52.3635, 4.8875, "stay", "Hostel", "Museumplein", 6, "Classic Amsterdam hostel energy."),
    place("ams-stay-winston", "St Christopher's Inn", 52.3755, 4.8975, "stay", "Hostel", "Centrum", 6, "Central hostel by the Red Light District edge."),
    place("ams-stay-shelter", "Shelter City Hostel", 52.3685, 4.8915, "stay", "Hostel", "Centrum", 5, "Budget beds near Nieuwmarkt."),
    place("ams-stay-generator", "Generator Amsterdam", 52.3815, 4.9055, "stay", "Hostel", "Plantage", 6, "Large hostel near Oosterpark."),
    place("ams-stay-guest", "Canal guest house", 52.3695, 4.8865, "stay", "Guest house", "Canal Ring", 7, "Small B&B on a canal belt floor."),
    place("ams-stay-apt-jordaan", "Jordaan apartment", 52.3765, 4.8815, "stay", "Apartment", "Jordaan", 7, "Self-catering between Westerkerk and hofjes."),
    place("ams-stay-apt-pijp", "De Pijp apartment", 52.3555, 4.8945, "stay", "Apartment", "De Pijp", 6, "Residential Pijp base with market mornings."),
    place("ams-stay-apt-noord", "Noord waterfront apartment", 52.3855, 4.8985, "stay", "Apartment", "Noord", 6, "IJ-view apartment after ferry hops."),
    place("ams-stay-ibis", "Ibis Amsterdam Centre", 52.3748, 4.8985, "stay", "Hotel", "Centrum", 6, "Reliable budget chain by the canals and Nieuwmarkt."),
  ],
};