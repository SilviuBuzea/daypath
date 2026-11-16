import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const milan: CityCatalog = {
  id: "milan",
  name: "Milan, Italy",
  aliases: ["milan", "milano"],
  center: { lat: 45.4642, lon: 9.19 },
  places: [
    // ——— Duomo / Centro ———
    place("mi-duomo", "Duomo di Milano", 45.4641, 9.1919, "sight", "Monument", "Duomo", 10, "Gothic cathedral — climb the terraces for the skyline payoff.", { flags: ["ticket", "early", "touristy"] }),
    place("mi-duomo-terrace", "Duomo rooftop terraces", 45.4642, 9.1917, "sight", "Viewpoint", "Duomo", 9, "Walk among spires with Madonnina above the square."),
    place("mi-galleria", "Galleria Vittorio Emanuele II", 45.4654, 9.1897, "shopping", "Market", "Duomo", 9, "Glass arcade of shops between Duomo and La Scala."),
    place("mi-scala", "Teatro alla Scala", 45.4671, 9.1896, "sight", "Monument", "Duomo", 8, "Opera house facade and museum for music fans."),
    place("mi-scala-museum", "La Scala Museum", 45.4672, 9.1895, "museum", "Museum", "Duomo", 7, "Costumes, instruments, and a peek into the auditorium."),
    place("mi-piazza-mercanti", "Piazza Mercanti", 45.4648, 9.1875, "sight", "Attraction", "Duomo", 6, "Medieval merchant square tucked behind the cathedral."),
    place("mi-san-gottardo", "Campanile di San Gottardo", 45.4628, 9.1905, "sight", "Monument", "Duomo", 5, "Brick tower courtyard beside Palazzo Reale."),
    place("mi-palazzo-reale", "Palazzo Reale", 45.4632, 9.1915, "museum", "Museum", "Duomo", 7, "Major temporary exhibitions next to the Duomo."),

    // ——— Castello / Sempione ———
    place("mi-castello", "Castello Sforzesco", 45.4705, 9.1795, "sight", "Castle", "Castello", 9, "Sforza fortress with museums and Michelangelo's Pietà Rondanini."),
    place("mi-pietà", "Pietà Rondanini", 45.4708, 9.1788, "museum", "Museum", "Castello", 8, "Michelangelo's unfinished last sculpture inside the castle."),
    place("mi-sempione", "Parco Sempione", 45.4735, 9.1745, "nature", "Park", "Castello", 8, "Central lawns from the castle to the Arco della Pace."),
    place("mi-arco", "Arco della Pace", 45.4758, 9.1722, "sight", "Monument", "Castello", 7, "Neoclassical triumphal arch at Sempione's far end."),
    place("mi-torre-branca", "Torre Branca", 45.4732, 9.1728, "sight", "Viewpoint", "Castello", 7, "Open-lattice tower views over Sempione on clear days."),
    place("mi-aquarium", "Civic Aquarium of Milan", 45.4738, 9.1792, "museum", "Museum", "Castello", 5, "Small Art Nouveau aquarium at the park edge."),

    // ——— Brera ———
    place("mi-brera", "Pinacoteca di Brera", 45.4722, 9.188, "museum", "Museum", "Brera", 9, "Mantegna, Raphael, and Caravaggio in a former Jesuit college."),
    place("mi-brera-lanes", "Brera neighborhood stroll", 45.4715, 9.1872, "sight", "Attraction", "Brera", 8, "Cobblestone boutiques and aperitivo courtyards north of Duomo."),
    place("mi-botanical", "Orto Botanico di Brera", 45.4725, 9.1885, "nature", "Garden", "Brera", 6, "Quiet botanical courtyard behind the Pinacoteca."),
    place("mi-san-marco", "Chiesa di San Marco", 45.4745, 9.1888, "sight", "Monument", "Brera", 5, "Brick church where Mozart once performed."),

    // ——— Last Supper / Magenta ———
    place("mi-cenacolo", "The Last Supper (Santa Maria delle Grazie)", 45.4659, 9.1709, "museum", "Museum", "Magenta", 10, "Leonardo fresco — book weeks ahead for timed entry.", { flags: ["ticket", "early", "touristy"] }),
    place("mi-grazie", "Santa Maria delle Grazie", 45.4658, 9.1712, "sight", "Monument", "Magenta", 7, "Bramante dome church paired with the Cenacolo visit."),
    place("mi-santambrogio", "Basilica di Sant'Ambrogio", 45.4622, 9.1755, "sight", "Monument", "Magenta", 8, "Early Christian basilica with atrium and golden altar."),
    place("mi-scienza", "Leonardo da Vinci National Museum of Science and Technology", 45.4625, 9.172, "museum", "Museum", "Magenta", 8, "Interactive science museum with Leonardo models."),

    // ——— Fashion / Quadrilatero ———
    place("mi-montenapoleone", "Via Montenapoleone", 45.4685, 9.1955, "shopping", "Market", "Quadrilatero", 8, "Flagship fashion mile of the golden quadrilateral."),
    place("mi-spiga", "Via della Spiga stroll", 45.4695, 9.1965, "shopping", "Market", "Quadrilatero", 7, "Quieter luxury boutiques parallel to Montenapoleone."),
    place("mi-bagutta", "Via Bagutta gallery lane", 45.4678, 9.1972, "shopping", "Market", "Quadrilatero", 5, "Art galleries and side-street browsing."),
    place("mi-san-babila", "Piazza San Babila", 45.4668, 9.1985, "sight", "Attraction", "Quadrilatero", 5, "Fashion-district square and metro hub."),

    // ——— Navigli / Porta Ticinese ———
    place("mi-navigli", "Navigli canals", 45.4485, 9.1745, "sight", "Attraction", "Navigli", 9, "Canal-side aperitivo strip south of the center."),
    place("mi-darsena", "Darsena basin", 45.4515, 9.1765, "sight", "Attraction", "Navigli", 7, "Renovated harbor where Naviglio Grande meets the city."),
    place("mi-ticinese", "Porta Ticinese & columns", 45.4535, 9.1795, "sight", "Monument", "Navigli", 6, "Romanesque columns and gate into Navigli evenings."),
    place("mi-san-lorenzo", "Basilica di San Lorenzo Maggiore", 45.4582, 9.1815, "sight", "Monument", "Navigli", 7, "Ancient columns and early Christian chapel nearby."),
    place("mi-naviglio-grande", "Naviglio Grande walk", 45.447, 9.1685, "sight", "Attraction", "Navigli", 7, "Longer canal walk toward Tortona and design studios."),
    place("mi-vicolo-lavandai", "Vicolo dei Lavandai", 45.4492, 9.1738, "sight", "Attraction", "Navigli", 6, "Historic laundry alley off Naviglio Grande."),

    // ——— Porta Venezia / Giardini ———
    place("mi-giardini", "Giardini Pubblici Indro Montanelli", 45.4735, 9.2, "nature", "Park", "Porta Venezia", 7, "Central park with Natural History Museum and planetarium."),
    place("mi-natural-history", "Natural History Museum", 45.4738, 9.2015, "museum", "Museum", "Porta Venezia", 6, "Dioramas and dinosaurs beside the public gardens."),
    place("mi-porta-venezia", "Porta Venezia arches", 45.4755, 9.2055, "sight", "Monument", "Porta Venezia", 6, "Neoclassical gates on Corso Buenos Aires."),
    place("mi-buenos", "Corso Buenos Aires shopping", 45.4785, 9.2085, "shopping", "Market", "Porta Venezia", 6, "High-street retail stretch northeast of the center."),
    place("mi-gam", "GAM — Gallery of Modern Art", 45.4725, 9.1995, "museum", "Museum", "Porta Venezia", 7, "19th-century Italian art in Villa Reale."),

    // ——— Porta Nuova / Isola ———
    place("mi-gae-aulenti", "Piazza Gae Aulenti", 45.4835, 9.1895, "sight", "Attraction", "Porta Nuova", 8, "Modern skyline plaza under UniCredit Tower."),
    place("mi-bosco", "Bosco Verticale", 45.4855, 9.1905, "sight", "Monument", "Porta Nuova", 8, "Tree-covered residential towers — best viewed from the park."),
    place("mi-biblioteca", "Biblioteca degli Alberi park", 45.4845, 9.1915, "nature", "Park", "Porta Nuova", 7, "Geometric paths between Isola and the towers."),
    place("mi-isola", "Isola neighborhood lanes", 45.4875, 9.1885, "sight", "Attraction", "Isola", 7, "Street art, cafes, and nightlife north of Porta Nuova."),
    place("mi-fondazione-feltrinelli", "Fondazione Giangiacomo Feltrinelli", 45.4825, 9.188, "sight", "Monument", "Porta Nuova", 6, "Herzog & de Meuron glass wedge for culture events."),

    // ——— Museums elsewhere ———
    place("mi-ambrosiana", "Pinacoteca Ambrosiana", 45.4635, 9.1855, "museum", "Museum", "Duomo", 8, "Da Vinci Codex Atlanticus pages and Renaissance masters."),
    place("mi-poldi", "Museo Poldi Pezzoli", 45.4685, 9.1915, "museum", "Museum", "Quadrilatero", 7, "House-museum of armor, clocks, and Botticelli."),
    place("mi-bagatti", "Museo Bagatti Valsecchi", 45.4692, 9.1968, "museum", "Museum", "Quadrilatero", 6, "Neo-Renaissance mansion interiors near Via della Spiga."),
    place("mi-novecento", "Museo del Novecento", 45.4635, 9.1902, "museum", "Museum", "Duomo", 8, "20th-century Italian art with a Duomo-facing top floor."),
    place("mi-triennale", "Triennale Design Museum", 45.4725, 9.1735, "museum", "Museum", "Castello", 7, "Design exhibitions in Parco Sempione's palace."),
    place("mi-hangar", "HangarBicocca", 45.5215, 9.2185, "museum", "Museum", "Bicocca", 8, "Anselm Kiefer and industrial-scale contemporary art north."),
    place("mi-prada", "Fondazione Prada", 45.4475, 9.2065, "museum", "Museum", "Lodi", 8, "Rem Koolhaas campus of contemporary art south of center."),
    place("mi-muvic", "MUDEC — Museum of Cultures", 45.4515, 9.1625, "museum", "Museum", "Tortona", 6, "World cultures museum in the Tortona design district."),

    // ——— Day pockets ———
    place("mi-san-siro", "San Siro Stadium", 45.4781, 9.124, "sight", "Attraction", "San Siro", 7, "Football cathedral — museum and pitch tours on non-match days."),
    place("mi-cimitero", "Monumental Cemetery", 45.4875, 9.1785, "sight", "Monument", "Porta Volta", 7, "Open-air sculpture gallery of Milanese tombs."),
    place("mi-chinatown", "Chinatown / Via Paolo Sarpi", 45.4825, 9.1755, "shopping", "Market", "Chinatown", 6, "Asian shops and street food northwest of the center."),
    place("mi-citylife", "CityLife & Tre Torri", 45.4785, 9.1555, "sight", "Attraction", "CityLife", 6, "Hadid, Isozaki, and Libeskind towers with shopping plaza."),
    place("mi-naviglio-martesana", "Naviglio Martesana bike path", 45.4925, 9.2355, "nature", "Park", "Martesana", 5, "Canal bike ride toward the countryside northeast."),

    // ——— Cafes ———
    place("mi-pasticceria-marchesi", "Pasticceria Marchesi", 45.4655, 9.1855, "cafe", "Cafe", "Duomo", 7, "Historic pastry counter — also in Galleria.", { cuisine: "pastry coffee" }),
    place("mi-zucca", "Zucca in Galleria", 45.4655, 9.19, "cafe", "Cafe", "Duomo", 7, "Campari-era aperitivo bar under the Galleria vault.", { cuisine: "coffee aperitivo" }),
    place("mi-princi", "Princi bakery", 45.4658, 9.1865, "cafe", "Cafe", "Duomo", 6, "Warm focaccia and espresso for a quick stand-up stop.", { cuisine: "bakery coffee" }),
    place("mi-pavé", "Pavé", 45.4765, 9.2055, "cafe", "Cafe", "Porta Venezia", 7, "Third-wave coffee and excellent bread near Buenos Aires.", { cuisine: "coffee bakery" }),
    place("mi-orkhidéa", "Orchid Café Brera", 45.4712, 9.1878, "cafe", "Cafe", "Brera", 6, "Quiet coffee break between Brera galleries.", { cuisine: "coffee" }),
    place("mi-gelato-ciorello", "Ciorello Gelato", 45.4495, 9.1755, "cafe", "Cafe", "Navigli", 6, "Canal-side gelato after aperitivo hour.", { cuisine: "ice_cream" }),

    // ——— Food ———
    place("mi-trattoria-milanese", "Trattoria Milanese", 45.4625, 9.1855, "food", "Restaurant", "Duomo", 8, "Classic ossobuco and risotto near Ambrosiana.", { cuisine: "italian milanese" }),
    place("mi-antipodes", "Ratanà", 45.4855, 9.1875, "food", "Restaurant", "Isola", 8, "Modern Lombard cooking in Isola.", { cuisine: "italian milanese" }),
    place("mi-langosteria", "Langosteria Downtown", 45.4685, 9.1925, "food", "Restaurant", "Quadrilatero", 8, "Seafood institution for a dressier dinner.", { cuisine: "seafood italian" }),
    place("mi-luini", "Luini panzerotti", 45.4655, 9.1915, "food", "Quick meal", "Duomo", 7, "Fried stuffed dough queues beside the Duomo.", { cuisine: "street_food italian" }),
    place("mi-pecorino", "Peck Delicatessen", 45.4635, 9.1868, "food", "Quick meal", "Duomo", 7, "Gourmet counters for picnic supplies and lunch.", { cuisine: "deli italian" }),
    place("mi-ontano", "Osteria del Binari", 45.4515, 9.1685, "food", "Restaurant", "Navigli", 7, "Garden trattoria near Naviglio Grande.", { cuisine: "italian" }),
    place("mi-dimora", "Trippa Milano", 45.4525, 9.2055, "food", "Restaurant", "Porta Romana", 8, "Nose-to-tail Milanese plates — book ahead.", { cuisine: "italian milanese" }),
    place("mi-erha", "Erba Brusca", 45.4355, 9.1655, "food", "Restaurant", "Navigli", 7, "Farm-to-table garden restaurant south along the canal.", { cuisine: "italian seasonal" }),
    place("mi-pizza-faro", "Pizzeria Spontini", 45.4785, 9.2075, "food", "Quick meal", "Porta Venezia", 6, "Thick Milanese pizza al trancio by the slice.", { cuisine: "pizza italian" }),
    place("mi-uncarrello", "Un Posto a Milano", 45.4555, 9.2055, "food", "Restaurant", "Porta Romana", 7, "Cascina farmhouse restaurant with courtyard tables.", { cuisine: "italian" }),
    place("mi-dim-sum", "Giangiarelli Isola", 45.4865, 9.1888, "food", "Restaurant", "Isola", 6, "Neighborhood Italian plates after Porta Nuova views.", { cuisine: "italian" }),
    place("mi-seafood-navigli", "Cantine Isola", 45.4868, 9.1875, "food", "Restaurant", "Isola", 6, "Wine-bar dinner with cheese and salumi boards.", { cuisine: "wine italian" }),
    place("mi-risotto", "Risotteria Melotti", 45.4645, 9.1845, "food", "Restaurant", "Duomo", 6, "Rice-focused menu for classic risotto alla milanese.", { cuisine: "italian milanese" }),
    place("mi-veg", "Joia", 45.4785, 9.2015, "food", "Restaurant", "Porta Venezia", 7, "High-end vegetarian tasting menus.", { cuisine: "vegetarian fine_dining" }),

    // ——— Nightlife ———
    place("mi-aperitivo-navigli", "Navigli aperitivo bars", 45.4488, 9.1752, "nightlife", "Bar", "Navigli", 8, "Canal terraces fill at golden hour — pick a bank and wander."),
    place("mi-nottingham", "Nottingham Forest", 45.4685, 9.2055, "nightlife", "Bar", "Porta Venezia", 7, "Inventive cocktails in a tiny reservation-only room."),
    place("mi-mag-cafe", "Mag Café", 45.4495, 9.1748, "nightlife", "Bar", "Navigli", 7, "Classic Navigli cocktail stop on the canal."),
    place("mi-isola-bars", "Isola evening bars", 45.4872, 9.1882, "nightlife", "Bar", "Isola", 7, "Local craft-beer and wine dens north of Porta Nuova."),
    place("mi-radio", "Radio Design Hotel bar", 45.4525, 9.1625, "nightlife", "Bar", "Tortona", 6, "Design-district drinks after Fondazione Prada."),
    place("mi-blue-note", "Blue Note Milano", 45.4785, 9.2155, "nightlife", "Bar", "Porta Venezia", 7, "Live jazz club with dinner sets."),
    place("mi-corso-como", "10 Corso Como cafe-bar", 45.4825, 9.1865, "nightlife", "Bar", "Porta Nuova", 6, "Concept-store courtyard for a stylish nightcap."),

    // ——— Stays ———
    place("mi-stay-duomo", "Hotel Spadari al Duomo", 45.4635, 9.1895, "stay", "Hotel", "Duomo", 9, "Design hotel steps from the cathedral square."),
    place("mi-stay-park-hyatt", "Park Hyatt Milan", 45.4658, 9.1895, "stay", "Hotel", "Duomo", 9, "Luxury rooms overlooking Galleria Vittorio Emanuele."),
    place("mi-stay-bulgari", "Bulgari Hotel Milano", 45.4715, 9.1885, "stay", "Hotel", "Brera", 9, "Quiet garden luxury in Brera."),
    place("mi-stay-brera", "Antica Locanda Solferino", 45.4755, 9.1885, "stay", "Hotel", "Brera", 7, "Charming rooms in the artists' quarter."),
    place("mi-stay-navigli", "Ostello Bello Grande", 45.4505, 9.1755, "stay", "Hostel", "Navigli", 7, "Social hostel base for canal nights."),
    place("mi-stay-magenta", "Hotel Palazzo delle Stelline", 45.4655, 9.1705, "stay", "Hotel", "Magenta", 7, "Cloister hotel beside Santa Maria delle Grazie."),
    place("mi-stay-isola", "The Yard Milano", 45.4845, 9.1885, "stay", "Hotel", "Isola", 7, "Boutique stay near Porta Nuova towers."),
    place("mi-stay-venezia", "Hotel Senato", 45.4755, 9.2015, "stay", "Hotel", "Porta Venezia", 7, "Mid-century design hotel by the public gardens."),
    place("mi-stay-tortona", "Maison Milano", 45.4525, 9.1655, "stay", "Apartment", "Tortona", 6, "Design-district apartment near MUDEC."),
    place("mi-stay-central", "Room Mate Giulia", 45.4655, 9.1885, "stay", "Hotel", "Duomo", 8, "Playful boutique hotel between Duomo and Castello."),
    place("mi-stay-hostel", "Combo Milano", 45.4875, 9.2055, "stay", "Hostel", "Porta Venezia", 6, "Design hostel with courtyard cafe."),
    place("mi-stay-prada", "Hotel Viu Milan", 45.4855, 9.1825, "stay", "Hotel", "Chinatown", 7, "Rooftop pool hotel near Chinatown and Monumental Cemetery."),
  ],
};
