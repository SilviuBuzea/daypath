import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const copenhagen: CityCatalog = {
  id: "copenhagen",
  name: "Copenhagen, Denmark",
  aliases: ["copenhagen", "københavn", "kobenhavn"],
  center: { lat: 55.6761, lon: 12.5683 },
  places: [
    // ——— Indre By ———
    place("cph-nyhavn", "Nyhavn", 55.6797, 12.5865, "sight", "Attraction", "Indre By", 10, "Colourful harbour houses — classic Copenhagen photo."),
    place("cph-round-tower", "Round Tower", 55.6814, 12.5758, "sight", "Viewpoint", "Indre By", 7, "Spiral ramp to city views."),
    place("cph-stroget", "Strøget", 55.6785, 12.5755, "shopping", "Market", "Indre By", 7, "Long pedestrian shopping street."),
    place("cph-amalienborg", "Amalienborg", 55.684, 12.5929, "sight", "Attraction", "Frederiksstaden", 8, "Royal palace square and changing of the guard."),
    place("cph-marble", "Marble Church", 55.685, 12.5925, "sight", "Monument", "Frederiksstaden", 7, "Copper dome behind Amalienborg."),
    place("cph-opera", "Copenhagen Opera House", 55.682, 12.6005, "sight", "Monument", "Indre By", 7, "Island opera house across the harbour."),
    place("cph-christiansborg", "Christiansborg Palace", 55.6765, 12.5805, "sight", "Attraction", "Indre By", 8, "Parliament, ruins, and tower views on Slotsholmen."),
    place("cph-borsen", "Børsen", 55.6755, 12.5825, "sight", "Monument", "Indre By", 6, "Dragon-spire former stock exchange."),
    place("cph-canal", "Canal tour pier", 55.6785, 12.5855, "sight", "Attraction", "Indre By", 7, "Harbour and canal boats from Nyhavn."),
    place("cph-kings-garden", "King's Garden (Rosenborg)", 55.685, 12.58, "nature", "Garden", "Indre By", 8, "Park lawns around Rosenborg Castle."),
    place("cph-rosenborg", "Rosenborg Castle", 55.6858, 12.5775, "sight", "Castle", "Indre By", 8, "Crown jewels in a Dutch Renaissance castle."),
    place("cph-botanic", "University Botanic Garden", 55.687, 12.575, "nature", "Garden", "Indre By", 6, "Palm house and plant collections."),
    place("cph-national", "National Museum of Denmark", 55.6747, 12.575, "museum", "Museum", "Indre By", 8, "Danish history from Vikings to now."),
    place("cph-glyptotek", "Ny Carlsberg Glyptotek", 55.6727, 12.5724, "museum", "Museum", "Indre By", 9, "Antiquities and French Impressionists under a winter garden."),
    place("cph-smk", "SMK – National Gallery", 55.6885, 12.5785, "museum", "Museum", "Indre By", 8, "Danish Golden Age and European masters."),
    place("cph-danish-design", "Designmuseum Danmark", 55.6855, 12.5935, "museum", "Museum", "Frederiksstaden", 7, "Danish design classics near Amalienborg."),
    place("cph-thorvaldsen", "Thorvaldsens Museum", 55.6768, 12.5785, "museum", "Museum", "Indre By", 6, "Neoclassical sculpture museum by Christiansborg."),

    // ——— Tivoli / Vesterbro ———
    place("cph-tivoli", "Tivoli Gardens", 55.6736, 12.5681, "sight", "Theme park", "Vesterbro", 9, "Historic amusement garden — evenings sparkle."),
    place("cph-city-hall", "City Hall Square", 55.6755, 12.5695, "sight", "Attraction", "Indre By", 6, "Rådhuspladsen orientation hub."),
    place("cph-central", "Copenhagen Central Station", 55.6728, 12.5645, "sight", "Attraction", "Vesterbro", 5, "Arrival hub beside Tivoli."),
    place("cph-meatpacking", "Kødbyen (Meatpacking District)", 55.6675, 12.56, "sight", "Attraction", "Vesterbro", 7, "Galleries, clubs, and restaurants in old abattoirs."),
    place("cph-istedgade", "Istedgade", 55.6695, 12.555, "shopping", "Market", "Vesterbro", 6, "Vesterbro shops and late-night energy."),
    place("cph-enghave", "Enghave Park", 55.667, 12.545, "nature", "Park", "Vesterbro", 5, "Neighbourhood park west of Kødbyen."),

    // ——— Christianshavn / Refshaleøen ———
    place("cph-christiania", "Freetown Christiania", 55.6735, 12.5995, "sight", "Attraction", "Christianshavn", 7, "Alternative community — respect photo rules on Pusher Street."),
    place("cph-church-our", "Church of Our Saviour", 55.6725, 12.5945, "sight", "Monument", "Christianshavn", 8, "External spiral spire climb."),
    place("cph-knippels", "Knippelsbro viewpoint", 55.6745, 12.5875, "sight", "Viewpoint", "Christianshavn", 5, "Bridge views toward the Opera."),
    place("cph-reffen", "Reffen Street Food", 55.6935, 12.6155, "shopping", "Market", "Refshaleøen", 8, "Waterfront street-food containers."),
    place("cph-copenhill", "CopenHill", 55.6855, 12.62, "sight", "Attraction", "Refshaleøen", 8, "Ski slope on a waste-to-energy plant."),

    // ——— Nørrebro / Østerbro ———
    place("cph-assistens", "Assistens Cemetery", 55.6915, 12.55, "nature", "Park", "Nørrebro", 7, "Park-cemetery with Kierkegaard and Andersen graves."),
    place("cph-superkilen", "Superkilen", 55.7025, 12.5425, "nature", "Park", "Nørrebro", 7, "Red/black/green urban park of global objects."),
    place("cph-jaegersborg", "Jægersborggade", 55.6915, 12.5455, "shopping", "Market", "Nørrebro", 7, "Coffee, ceramics, and restaurants street."),
    place("cph-torvehallerne", "Torvehallerne", 55.6837, 12.57, "shopping", "Market", "Nørreport", 9, "Glass-hall food market by Nørreport."),
    place("cph-lakes", "The Lakes (Søerne)", 55.6855, 12.5655, "nature", "Park", "Nørrebro", 7, "Running and café path along the city lakes."),
    place("cph-botanisk-nor", "Østre Anlæg", 55.6905, 12.58, "nature", "Park", "Østerbro", 5, "Park by SMK and the citadel."),
    place("cph-little-mermaid", "The Little Mermaid", 55.6929, 12.5993, "sight", "Attraction", "Østerbro", 6, "Small bronze statue — combine with harbour walk."),
    place("cph-kastellet", "Kastellet", 55.6915, 12.5945, "sight", "Castle", "Østerbro", 7, "Star fortress park near the Mermaid."),
    place("cph-design-museum", "Danish Architecture Center", 55.6755, 12.58, "museum", "Museum", "Indre By", 6, "Architecture exhibits on the harbour."),
    place("cph-louisiana", "Louisiana Museum (day trip)", 55.9695, 12.5425, "museum", "Museum", "Humlebæk", 9, "Modern art by the Øresund — train north."),
    place("cph-frederiksberg", "Frederiksberg Gardens", 55.6755, 12.53, "nature", "Park", "Frederiksberg", 7, "Palace gardens and Chinese pavilion."),
    place("cph-zoo", "Copenhagen Zoo", 55.6725, 12.5215, "nature", "Park", "Frederiksberg", 6, "Zoo with famous spiral tower."),
    place("cph-carlsberg", "Carlsberg City District", 55.6675, 12.5325, "sight", "Attraction", "Vesterbro", 6, "Former brewery district redevelopment."),
    place("cph-illum", "Illum department store", 55.6795, 12.58, "shopping", "Mall", "Indre By", 6, "Central department store on Strøget."),
    place("cph-magasin", "Magasin du Nord", 55.6795, 12.5825, "shopping", "Mall", "Indre By", 6, "Flagship store on Kongens Nytorv."),

    // ——— Cafes ———
    place("cph-cafe-coffee", "Coffee Collective Jægersborggade", 55.6915, 12.5458, "cafe", "Cafe", "Nørrebro", 8, "Pioneering Copenhagen specialty coffee.", { cuisine: "coffee" }),
    place("cph-cafe-prolog", "Prolog Coffee Bar", 55.6685, 12.5555, "cafe", "Cafe", "Vesterbro", 7, "Vesterbro third-wave espresso.", { cuisine: "coffee" }),
    place("cph-cafe-april", "April Coffee", 55.6835, 12.5685, "cafe", "Cafe", "Indre By", 7, "Central specialty coffee.", { cuisine: "coffee" }),
    place("cph-cafe-democratic", "Democratic Coffee", 55.6745, 12.5685, "cafe", "Cafe", "Indre By", 6, "Coffee inside the central library.", { cuisine: "coffee" }),
    place("cph-cafe-paludan", "Paludan Bogcafé", 55.6805, 12.5735, "cafe", "Cafe", "Indre By", 6, "Book café near the university.", { cuisine: "coffee" }),
    place("cph-cafe-nyhavn", "Nyhavn café terrace", 55.6799, 12.588, "cafe", "Cafe", "Indre By", 5, "Tourist coffee with harbour views.", { cuisine: "coffee" }),
    place("cph-cafe-ateliers", "Atelier September", 55.6825, 12.5855, "cafe", "Cafe", "Indre By", 7, "Simple breakfast café near Kongens Nytorv.", { cuisine: "brunch coffee" }),
    place("cph-cafe-original", "Original Coffee", 55.6835, 12.57, "cafe", "Cafe", "Nørreport", 6, "Market-side coffee at Torvehallerne.", { cuisine: "coffee" }),

    // ——— Food ———
    place("cph-food-noma", "Noma area / Refshaleøen", 55.6925, 12.6105, "food", "Restaurant", "Refshaleøen", 9, "World-famous New Nordic — book months ahead.", { cuisine: "nordic" }),
    place("cph-food-geranium", "Geranium", 55.7035, 12.5755, "food", "Restaurant", "Østerbro", 9, "Three-Michelin rooftop at Parken.", { cuisine: "nordic" }),
    place("cph-food-torve", "Torvehallerne bites", 55.6835, 12.5695, "food", "Quick meal", "Nørreport", 8, "Smørrebrød, seafood, and coffee counters.", { cuisine: "danish market" }),
    place("cph-food-reffen", "Reffen stalls", 55.6935, 12.615, "food", "Quick meal", "Refshaleøen", 8, "Global street food by the water.", { cuisine: "street_food" }),
    place("cph-food-schonnemann", "Restaurant Schønnemann", 55.6825, 12.5755, "food", "Restaurant", "Indre By", 8, "Classic smørrebrød lunch institution.", { cuisine: "danish" }),
    place("cph-food-pallegade", "Pisserenden / Latin Quarter lunch", 55.6815, 12.5725, "food", "Restaurant", "Indre By", 6, "Casual Danish plates near Round Tower.", { cuisine: "danish" }),
    place("cph-food-hija", "Hija de Sanchez", 55.6675, 12.56, "food", "Quick meal", "Vesterbro", 7, "Tacos in the Meatpacking District.", { cuisine: "mexican" }),
    place("cph-food-gazarte", "Gazarte / Greek", 55.6785, 12.575, "food", "Restaurant", "Indre By", 5, "Casual Mediterranean break.", { cuisine: "greek" }),
    place("cph-food-bao", "Bao Bao / Asian", 55.6695, 12.5555, "food", "Restaurant", "Vesterbro", 6, "Asian bowls in Vesterbro.", { cuisine: "asian" }),
    place("cph-food-hotdog", "DØP organic hotdogs", 55.6795, 12.58, "food", "Quick meal", "Indre By", 6, "Organic pølser by Round Tower.", { cuisine: "danish street_food" }),
    place("cph-food-ved", "Ved Stranden 10", 55.6775, 12.58, "food", "Restaurant", "Indre By", 7, "Wine bar and plates by the canal.", { cuisine: "european wine" }),
    place("cph-food-mangia", "Mangia / Italian", 55.6835, 12.57, "food", "Restaurant", "Nørreport", 5, "Italian near Torvehallerne.", { cuisine: "italian" }),
    place("cph-food-vegan", "PlantPower / vegan", 55.6915, 12.55, "food", "Restaurant", "Nørrebro", 6, "Plant-based options in Nørrebro.", { cuisine: "vegan vegetarian" }),
    place("cph-food-warpigs", "Warpigs Brewpub", 55.6678, 12.5605, "food", "Restaurant", "Vesterbro", 7, "BBQ and craft beer in Kødbyen.", { cuisine: "bbq american" }),

    // ——— Nightlife ———
    place("cph-night-ved", "Ved Stranden wine bar", 55.6775, 12.5805, "nightlife", "Bar", "Indre By", 7, "Natural wine by Christiansborg canal."),
    place("cph-night-kødbyen", "Kødbyen clubs", 55.6675, 12.5608, "nightlife", "Club", "Vesterbro", 8, "Late electronic nights in Meatpacking."),
    place("cph-night-rust", "Rust", 55.6985, 12.5425, "nightlife", "Club", "Nørrebro", 7, "Live music and club nights."),
    place("cph-night-culture", "Culture Box", 55.6835, 12.5855, "nightlife", "Club", "Indre By", 6, "Electronic club near the harbour."),
    place("cph-night-bares", "Nørrebro bars strip", 55.6915, 12.5485, "nightlife", "Bar", "Nørrebro", 7, "Casual bars along Nørrebrogade."),
    place("cph-night-brew", "Mikkeller Bar", 55.6695, 12.5558, "nightlife", "Bar", "Vesterbro", 8, "Craft beer pioneer on Viktoriagade."),
    place("cph-night-roof", "Rooftop bars / Intentional", 55.6755, 12.57, "nightlife", "Bar", "Indre By", 6, "City rooftop cocktails near Tivoli."),

    // ——— Stays ———
    place("cph-stay-dangleterre", "Hotel d'Angleterre", 55.6805, 12.5825, "stay", "Hotel", "Indre By", 10, "Landmark luxury on Kongens Nytorv."),
    place("cph-stay-nimb", "Nimb Hotel", 55.6735, 12.5675, "stay", "Hotel", "Vesterbro", 9, "Arabian palace hotel beside Tivoli."),
    place("cph-stay-sp25", "SP34", 55.6785, 12.57, "stay", "Hotel", "Indre By", 8, "Design hotel in the Latin Quarter."),
    place("cph-stay-citizen", "citizenM Copenhagen", 55.6725, 12.5655, "stay", "Hotel", "Vesterbro", 7, "Compact modern rooms by Central Station."),
    place("cph-stay-generator", "Generator Copenhagen", 55.6855, 12.5755, "stay", "Hostel", "Indre By", 6, "Design hostel near the lakes."),
    place("cph-stay-urban", "Urban House", 55.6695, 12.555, "stay", "Hostel", "Vesterbro", 6, "Hostel and streetwear hub in Vesterbro."),
    place("cph-stay-axel", "Hotel Axel Guldsmeden", 55.6715, 12.56, "stay", "Hotel", "Vesterbro", 7, "Organic boutique near Kødbyen."),
    place("cph-stay-apt", "Nørrebro apartment", 55.6915, 12.55, "stay", "Apartment", "Nørrebro", 7, "Local base near Assistens and cafés."),

    // ——— Extra sights ———
    place("cph-freetown-gallery", "Christiania art galleries", 55.6738, 12.6005, "sight", "Attraction", "Christianshavn", 5, "Galleries beyond Pusher Street."),
    place("cph-holmen", "Holmen naval area", 55.6815, 12.6055, "sight", "Attraction", "Christianshavn", 6, "Former naval base islands by the Opera."),
    place("cph-amager", "Amager Beach Park", 55.6555, 12.645, "nature", "Park", "Amager", 7, "Lagoon beach metro ride from the center."),
    place("cph-orsteds", "Ørstedsparken", 55.6815, 12.5655, "nature", "Park", "Indre By", 5, "Lake park west of Nørreport."),
    place("cph-botanical-palm", "Palm House Botanic Garden", 55.6872, 12.5745, "nature", "Garden", "Indre By", 6, "Victorian glasshouse in the botanic garden."),
    place("cph-ischi", "Inderhavnsbroen", 55.6785, 12.5925, "sight", "Attraction", "Indre By", 5, "Harbour bridge walk Nyhavn to Christianshavn."),
  ],
};
