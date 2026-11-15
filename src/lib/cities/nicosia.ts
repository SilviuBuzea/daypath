import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const nicosia: CityCatalog = {
  id: "nicosia",
  name: "Nicosia, Cyprus",
  aliases: ["nicosia", "lefkosia", "lefkoşa", "nicosia cyprus"],
  center: { lat: 35.1856, lon: 33.3823 },
  places: [
    // ——— Old City south / Ledra ———
    place("ni-ledra", "Ledra Street", 35.1715, 33.3615, "sight", "Attraction", "Old City", 9, "Main pedestrian street of shops leading to the Green Line crossing."),
    place("ni-ledra-crossing", "Ledra Street crossing checkpoint", 35.1728, 33.3618, "sight", "Attraction", "Green Line", 8, "Pedestrian crossing into the north — bring passport; check current rules."),
    place("ni-onou", "Onasagorou Street", 35.1705, 33.3625, "sight", "Attraction", "Old City", 7, "Cafe and restaurant lane parallel to Ledra."),
    place("ni-faneromeni", "Faneromeni Square & Church", 35.172, 33.3635, "sight", "Monument", "Old City", 7, "Historic square and church near Ledra."),
    place("ni-archbishop", "Archbishop's Palace", 35.1735, 33.3665, "sight", "Monument", "Old City", 7, "Orthodox archbishopric complex with museums nearby."),
    place("ni-st-john", "Cathedral of St. John", 35.1738, 33.3668, "sight", "Monument", "Old City", 7, "Frescoed Orthodox cathedral beside the palace."),
    place("ni-liberty", "Liberty Monument", 35.1695, 33.3655, "sight", "Monument", "Old City", 6, "Relief monument to independence struggle."),
    place("ni-ocyprus", "Omeriye Mosque / Omeriye area", 35.171, 33.3655, "sight", "Monument", "Old City", 6, "Converted mosque and hammam neighborhood."),
    place("ni-hammam", "Omeriye Hammam", 35.1708, 33.3652, "sight", "Attraction", "Old City", 6, "Ottoman bath experience when operating."),
    place("ni-laiki", "Laiki Geitonia", 35.1712, 33.3638, "sight", "Attraction", "Old City", 8, "Restored tourist quarter of alleys, tavernas, and crafts."),
    place("ni-plates", "Plateia Eleftherias (Freedom Square)", 35.169, 33.3585, "sight", "Attraction", "Center", 8, "Zaha Hadid–designed square at the old city edge."),
    place("ni-trikpi", "Tripiotis Church", 35.1718, 33.3645, "sight", "Monument", "Old City", 5, "Historic church in the old-city fabric."),

    // ——— Venetian walls ———
    place("ni-walls", "Venetian Walls circuit", 35.1725, 33.3635, "sight", "Attraction", "Old City", 9, "Star-shaped bastions encircling the old city."),
    place("ni-famagusta-gate", "Famagusta Gate", 35.1745, 33.3695, "sight", "Monument", "Old City", 8, "Best-preserved gate — now a cultural venue."),
    place("ni-paphos-gate", "Paphos Gate", 35.173, 33.3555, "sight", "Monument", "Old City", 6, "Western gate near the Green Line."),
    place("ni-kyrenia-gate", "Kyrenia Gate", 35.1795, 33.3615, "sight", "Monument", "North Old City", 7, "Northern gate on the Turkish Cypriot side."),
    place("ni-constanza", "Constanza Bastion / Shacolas Tower area", 35.1705, 33.3605, "sight", "Viewpoint", "Old City", 7, "Observatory museum over Ledra rooftops."),
    place("ni-shacolas", "Shacolas Tower Observatory", 35.1708, 33.3608, "sight", "Viewpoint", "Old City", 8, "360° old-city views including the buffer zone."),
    place("ni-flatro", "Flatro Bastion buffer views", 35.1755, 33.37, "sight", "Viewpoint", "Green Line", 6, "Wall-top sense of the divided capital."),

    // ——— Museums south ———
    place("ni-cyprus-museum", "Cyprus Museum", 35.1685, 33.3555, "museum", "Museum", "Museum Area", 9, "Island's main archaeology museum — Aphrodite and more."),
    place("ni-leventis", "Leventis Municipal Museum", 35.1705, 33.3605, "museum", "Museum", "Old City", 8, "Nicosia's story in a restored mansion."),
    place("ni-byzantine", "Byzantine Museum / Makarios Foundation", 35.1735, 33.367, "museum", "Museum", "Old City", 7, "Icons and Byzantine art by the Archbishopric."),
    place("ni-folk", "Folk Art Museum", 35.1732, 33.3662, "museum", "Museum", "Old City", 6, "Costume and craft collections."),
    place("ni-national-struggle", "National Struggle Museum", 35.1736, 33.366, "museum", "Museum", "Old City", 6, "1950s EOKA struggle exhibits."),
    place("ni-casteliotissa", "Casteliotissa Hall", 35.1725, 33.3585, "sight", "Attraction", "Old City", 5, "Medieval hall used for exhibitions."),
    place("ni-house-hati", "House of Hadjigeorgakis Kornesios", 35.1715, 33.3665, "museum", "Museum", "Old City", 7, "Ottoman dragoman mansion museum."),
    place("ni-state-gallery", "State Gallery of Contemporary Art", 35.165, 33.355, "museum", "Museum", "South", 5, "Modern Cypriot art outside the walls."),

    // ——— North Old City ———
    place("ni-selimiye", "Selimiye Mosque (former St. Sophia)", 35.175, 33.3645, "sight", "Monument", "North Old City", 9, "Gothic cathedral-mosque — check crossing rules before visiting."),
    place("ni-buyuk-han", "Büyük Han", 35.176, 33.363, "sight", "Attraction", "North Old City", 9, "Ottoman great inn with cafes and craft shops around the courtyard."),
    place("ni-kumarcilar", "Kumarcılar Han", 35.1765, 33.3635, "sight", "Attraction", "North Old City", 7, "Smaller caravanserai near Büyük Han."),
    place("ni-bandabulya", "Bandabulya covered market", 35.1755, 33.3625, "shopping", "Market", "North Old City", 7, "Produce and household market north of the line."),
    place("ni-arsasta", "Arasta bazaar street", 35.1758, 33.364, "shopping", "Market", "North Old City", 7, "Tourist shopping lane by Selimiye."),
    place("ni-lapidary", "Lapidary Museum", 35.1752, 33.365, "museum", "Museum", "North Old City", 6, "Stone fragments from Gothic buildings."),
    place("ni-mevlevi", "Mevlevi Tekke Museum", 35.1785, 33.361, "museum", "Museum", "North Old City", 6, "Whirling-dervish lodge museum near Kyrenia Gate."),
    place("ni-arabahmet", "Arabahmet neighborhood", 35.177, 33.3585, "sight", "Attraction", "North Old City", 7, "Restored Ottoman houses and quiet lanes."),
    place("ni-sultan", "Sultan Mahmut Library", 35.1753, 33.3648, "sight", "Monument", "North Old City", 5, "Ottoman library beside Selimiye."),
    place("ni-yenisehir", "Yenişehir / north modern edge", 35.19, 33.36, "sight", "Attraction", "North", 4, "Modern Turkish Cypriot commercial districts."),

    // ——— Parks & outside walls ———
    place("ni-municipal", "Municipal Gardens", 35.168, 33.358, "nature", "Park", "Center", 6, "Central green near the museum area."),
    place("ni-acar", "Acarlar / park pockets", 35.175, 33.35, "nature", "Park", "West", 5, "Neighborhood green west of the walls."),
    place("ni-acha", "Athalassa National Forest Park", 35.145, 33.38, "nature", "Park", "South", 8, "Large forest park and lake south of the city."),
    place("ni-acha-lake", "Athalassa lake loop", 35.146, 33.382, "nature", "Park", "South", 7, "Birdwatching and walking paths."),
    place("ni-pedieos", "Pedieos river linear park", 35.165, 33.35, "nature", "Park", "West", 6, "Green corridor along the river."),
    place("ni-cypress", "Public Garden / cafe greens", 35.1695, 33.3575, "nature", "Park", "Center", 5, "Shaded benches near Eleftherias."),

    // ——— Shopping ———
    place("ni-ledra-shops", "Ledra Street shopping", 35.1712, 33.3616, "shopping", "Shop", "Old City", 7, "Clothes, souvenirs, and Cyprus products."),
    place("ni-mall", "Nicosia Mall", 35.14, 33.33, "shopping", "Mall", "Southwest", 6, "Large modern mall outside the center."),
    place("ni-mall-of", "Mall of Cyprus / retail orbit", 35.15, 33.34, "shopping", "Mall", "South", 5, "Suburban shopping options."),
    place("ni-municipal-market", "Old City market lanes", 35.174, 33.3625, "shopping", "Market", "Old City", 6, "Produce and specialty food stalls."),
    place("ni-cyprus-handicraft", "Cyprus Handicraft Service shop", 35.1688, 33.3565, "shopping", "Shop", "Museum Area", 6, "Lace, pottery, and certified crafts."),
    place("ni-souvenir", "Laiki Geitonia craft shops", 35.171, 33.3635, "shopping", "Shop", "Old City", 6, "Leather, lace, and loukoumia."),

    // ——— Cafes ———
    place("ni-cafe-ledra", "Ledra Street cafe", 35.1718, 33.3618, "cafe", "Cafe", "Old City", 7, "People-watching coffee on the main street."),
    place("ni-cafe-onou", "Onasagorou specialty coffee", 35.1706, 33.3628, "cafe", "Cafe", "Old City", 8, "Third-wave cafes on the dining lane."),
    place("ni-cafe-buyuk", "Büyük Han courtyard cafe", 35.176, 33.3632, "cafe", "Cafe", "North Old City", 8, "Tea and coffee under Ottoman arches."),
    place("ni-cafe-laiki", "Laiki Geitonia cafe", 35.1713, 33.3636, "cafe", "Cafe", "Old City", 6, "Courtyard coffee in the tourist quarter."),
    place("ni-cafe-eleftheria", "Eleftherias Square cafe", 35.1692, 33.3588, "cafe", "Cafe", "Center", 6, "Modern square-edge coffee."),
    place("ni-cafe-museum", "Museum-area cafe", 35.1688, 33.356, "cafe", "Cafe", "Museum Area", 5, "Pause after the Cyprus Museum."),
    place("ni-patisserie", "Cyprus sweet shop / cafe", 35.171, 33.3612, "cafe", "Cafe", "Old City", 6, "Loukoumia, spoon sweets, and coffee."),

    // ——— Food ———
    place("ni-food-meze", "Cypriot meze lunch Old City", 35.173, 33.362, "food", "Restaurant", "Old City", 9, "Halloumi, souvlaki, and endless meze plates.", { cuisine: "cypriot" }),
    place("ni-food-taverna", "Laiki Geitonia taverna", 35.1714, 33.364, "food", "Restaurant", "Old City", 8, "Tourist-friendly tavernas with courtyard seating.", { cuisine: "cypriot" }),
    place("ni-food-onou", "Onasagorou dinner", 35.1705, 33.3626, "food", "Restaurant", "Old City", 8, "Best concentration of modern Cypriot dining.", { cuisine: "cypriot european" }),
    place("ni-food-north", "North Old City kebab & meze", 35.1755, 33.3635, "food", "Restaurant", "North Old City", 7, "Turkish Cypriot grills near Büyük Han.", { cuisine: "turkish cypriot" }),
    place("ni-food-souvlaki", "Souvlaki quick lunch", 35.1716, 33.3615, "food", "Quick meal", "Old City", 8, "Pitta souvlaki on Ledra side streets.", { cuisine: "cypriot" }),
    place("ni-food-halloumi", "Halloumi-focused cafe lunch", 35.1708, 33.3622, "food", "Restaurant", "Old City", 7, "Grilled halloumi and village salads.", { cuisine: "cypriot" }),
    place("ni-food-italian", "Italian dinner center", 35.17, 33.36, "food", "Restaurant", "Center", 5, "Pizza and pasta outside the tourist core.", { cuisine: "italian" }),
    place("ni-food-seafood", "Seafood meze dinner", 35.1702, 33.363, "food", "Restaurant", "Old City", 7, "Calamari and fish meze inland.", { cuisine: "seafood" }),
    place("ni-food-vegetarian", "Vegetarian / vegan Old City", 35.171, 33.362, "food", "Restaurant", "Old City", 6, "Plant-forward plates near Ledra.", { cuisine: "vegetarian" }),
    place("ni-food-wine", "Commandaria wine dinner", 35.1704, 33.3618, "food", "Restaurant", "Old City", 7, "Cypriot wines including Commandaria with small plates.", { cuisine: "cypriot wine" }),

    // ——— Nightlife ———
    place("ni-night-old", "Old City bars", 35.172, 33.3628, "nightlife", "Bar", "Old City", 8, "Bars and pubs in the southern old city."),
    place("ni-night-ledra", "Ledra / Onasagorou evening", 35.1712, 33.361, "nightlife", "Bar", "Old City", 7, "Cafe-bars that run late on dining streets."),
    place("ni-night-north", "North Old City evening", 35.1762, 33.3628, "nightlife", "Bar", "North Old City", 6, "Courtyard drinks around Büyük Han."),
    place("ni-night-club", "Nicosia club night", 35.1685, 33.36, "nightlife", "Club", "Center", 6, "Check suburban and center club lineups."),
    place("ni-night-wine", "Wine bar Old City", 35.1707, 33.3624, "nightlife", "Bar", "Old City", 7, "Cypriot and European wines by the glass."),
    place("ni-night-live", "Live music bar", 35.1715, 33.3632, "nightlife", "Bar", "Old City", 6, "Acoustic and band nights."),
    place("ni-night-rooftop", "Rooftop drinks near walls", 35.1705, 33.361, "nightlife", "Bar", "Old City", 6, "Views over Venetian bastions."),

    // ——— Stays ———
    place("ni-stay-old", "Old City Hotel", 35.1728, 33.3612, "stay", "Hotel", "Old City", 8, "Walkable to Ledra, museums, and the walls."),
    place("ni-stay-center", "Center Hotel Nicosia", 35.1695, 33.359, "stay", "Hotel", "Center", 7, "Near Eleftherias Square and the Cyprus Museum."),
    place("ni-stay-boutique", "Laiki Geitonia boutique stay", 35.1712, 33.3638, "stay", "Hotel", "Old City", 8, "Character rooms in restored lanes."),
    place("ni-stay-north", "North Old City boutique hotel", 35.1765, 33.362, "stay", "Hotel", "North Old City", 7, "Base for Büyük Han and Selimiye — confirm border logistics."),
    place("ni-stay-hostel", "Nicosia Hostel", 35.171, 33.364, "stay", "Hostel", "Old City", 5, "Budget dorms inside the walls."),
    place("ni-stay-guest", "Guest House Nicosia", 35.1745, 33.3605, "stay", "Guest house", "Old City", 6, "Small stay near the Venetian walls."),
    place("ni-stay-business", "Business hotel outside walls", 35.165, 33.35, "stay", "Hotel", "South", 6, "Modern stay with parking south of the center."),
    place("ni-stay-apartment", "Old City aparthotel", 35.1715, 33.362, "stay", "Hotel", "Old City", 6, "Kitchenette stay for longer visits."),
    place("ni-stay-museum", "Museum-area hotel", 35.168, 33.3565, "stay", "Hotel", "Museum Area", 6, "Quiet base beside the Cyprus Museum."),
  ],
};
