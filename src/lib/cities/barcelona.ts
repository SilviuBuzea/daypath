import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const barcelona: CityCatalog = {
  id: "barcelona",
  name: "Barcelona, Spain",
  aliases: ["barcelona", "bcn"],
  center: { lat: 41.3874, lon: 2.1686 },
  places: [
    // ——— Eixample / Gaudí ———
    place("bcn-sagrada", "Sagrada Família", 41.4036, 2.1744, "sight", "Monument", "Eixample", 10, "Book a tower slot — morning light through the nave is worth it."),
    place("bcn-casa-batllo", "Casa Batlló", 41.3916, 2.1649, "sight", "Attraction", "Eixample", 9, "Gaudí façade on Passeig de Gràcia — timed entry."),
    place("bcn-pedrera", "La Pedrera (Casa Milà)", 41.3954, 2.1619, "sight", "Attraction", "Eixample", 9, "Rooftop warriors and apartment tour on the same avenue."),
    place("bcn-casa-amatller", "Casa Amatller", 41.3918, 2.1645, "sight", "Attraction", "Eixample", 7, "Modernista chocolate-house façade on the Block of Discord."),
    place("bcn-casa-leo", "Casa Lleó Morera", 41.3915, 2.1642, "sight", "Attraction", "Eixample", 6, "Domènech i Montaner details beside Batlló and Amatller."),
    place("bcn-passeig", "Passeig de Gràcia stroll", 41.3935, 2.1635, "shopping", "Market", "Eixample", 7, "Boutiques and modernista buildings between Diagonal and Plaça Catalunya."),
    place("bcn-sant-pau", "Hospital de Sant Pau", 41.4115, 2.1745, "sight", "Monument", "Eixample", 8, "Art Nouveau campus — quieter masterpiece northeast of Sagrada Família."),
    place("bcn-casa-vicens", "Casa Vicens", 41.4035, 2.1505, "sight", "Attraction", "Gràcia", 7, "Gaudí's first house — tiled facade in residential Gràcia."),

    // ——— Gothic Quarter / Born ———
    place("bcn-gotic", "Barcelona Cathedral", 41.384, 2.1761, "sight", "Monument", "Gothic Quarter", 8, "Gothic core of the old city — cloister geese optional."),
    place("bcn-placa-reial", "Plaça Reial", 41.3802, 2.1752, "sight", "Attraction", "Gothic Quarter", 6, "Palm-shaded square with Gaudí lampposts off La Rambla."),
    place("bcn-placa-sant-jaume", "Plaça de Sant Jaume", 41.3828, 2.1772, "sight", "Attraction", "Gothic Quarter", 6, "City hall and Generalitat facing each other in the Gothic grid."),
    place("bcn-felip-neri", "Plaça de Sant Felip Neri", 41.3838, 2.1755, "sight", "Attraction", "Gothic Quarter", 6, "Quiet memorial square behind the cathedral."),
    place("bcn-mares", "Museu Frederic Marès", 41.3845, 2.1768, "museum", "Museum", "Gothic Quarter", 6, "Sculpture and curiosities beside the cathedral."),
    place("bcn-muhba", "MUHBA Plaça del Rei", 41.3838, 2.1778, "museum", "Museum", "Gothic Quarter", 7, "Roman Barcelona under the Gothic palace."),
    place("bcn-born-church", "Santa Maria del Mar", 41.3839, 2.1821, "sight", "Monument", "El Born", 9, "Catalan Gothic church — anchor an El Born afternoon."),
    place("bcn-born-market", "Mercat de Santa Caterina", 41.3862, 2.1785, "shopping", "Market", "El Born", 6, "Colorful roof market between Born and the cathedral."),
    place("bcn-picasso", "Picasso Museum", 41.3852, 2.1809, "museum", "Museum", "El Born", 9, "Early Picasso in medieval palaces — book ahead."),
    place("bcn-born-culture", "El Born Centre de Cultura", 41.3855, 2.1835, "museum", "Museum", "El Born", 7, "Excavated 18th-century city under an iron-and-glass hall."),
    place("bcn-passeig-born", "Passeig del Born", 41.385, 2.1825, "sight", "Attraction", "El Born", 7, "Cocktail terraces and boutiques under the church shadow."),
    place("bcn-music", "Palau de la Música Catalana", 41.3875, 2.1752, "sight", "Monument", "El Born", 9, "Domènech i Montaner concert hall — tour if no show tickets."),

    // ——— Plaça Catalunya / upper Raval ———
    place("bcn-catalunya", "Plaça de Catalunya", 41.387, 2.1701, "sight", "Attraction", "Eixample", 7, "Main square linking La Rambla, Gothic Quarter, and Passeig de Gràcia."),
    place("bcn-punxes", "Casa de les Punxes", 41.3958, 2.1635, "sight", "Attraction", "Eixample", 7, "Fairytale spires on Avinguda Diagonal."),
    place("bcn-camp-nou", "Spotify Camp Nou experience", 41.3809, 2.1228, "sight", "Attraction", "Les Corts", 7, "Stadium tour and Barça museum west of the center."),

    // ——— La Rambla / Raval ———
    place("bcn-rambla", "La Rambla stroll", 41.3815, 2.1735, "sight", "Attraction", "La Rambla", 7, "Touristy but useful spine from Plaça Catalunya to the port."),
    place("bcn-boqueria", "La Boqueria", 41.3816, 2.1719, "shopping", "Market", "El Raval", 8, "Grand market off La Rambla — go early for juice counters."),
    place("bcn-liceu", "Gran Teatre del Liceu", 41.3808, 2.1734, "sight", "Attraction", "La Rambla", 6, "Opera house facade on La Rambla."),
    place("bcn-maca", "MACBA", 41.3832, 2.1668, "museum", "Museum", "El Raval", 7, "Contemporary art on Plaça dels Àngels with skateboard energy."),
    place("bcn-ccc", "Centre de Cultura Contemporània", 41.3835, 2.1662, "museum", "Museum", "El Raval", 6, "Exhibitions beside MACBA in the Raval."),
    place("bcn-raval-walk", "El Raval lanes", 41.3825, 2.1695, "sight", "Attraction", "El Raval", 6, "Multicultural bars and small galleries west of La Rambla."),
    place("bcn-maritime", "Maritime Museum", 41.3752, 2.1765, "museum", "Museum", "Gothic Quarter", 7, "Medieval shipyards housing Catalan maritime history."),

    // ——— Gràcia / Park Güell ———
    place("bcn-parkguell", "Park Güell", 41.4145, 2.1527, "nature", "Park", "Gràcia", 9, "Book timed entry for the monumental zone; free city views outside it."),
    place("bcn-gaudi-house", "Gaudí House Museum", 41.4145, 2.1525, "museum", "Museum", "Gràcia", 7, "House museum inside Park Güell where Gaudí once lived."),
    place("bcn-gracia-squares", "Gràcia village squares", 41.403, 2.158, "sight", "Attraction", "Gràcia", 7, "Plaça del Sol and nearby terraces after Park Güell."),
    place("bcn-bunkers", "Bunkers del Carmel viewpoint", 41.4185, 2.1615, "sight", "Viewpoint", "Gràcia", 8, "Best free sunset panorama — taxi or steep walk from metro."),

    // ——— Montjuïc ———
    place("bcn-montjuic-castle", "Montjuïc Castle", 41.3636, 2.1642, "sight", "Castle", "Montjuïc", 8, "Hilltop fort with port and city views."),
    place("bcn-mnac", "MNAC", 41.368, 2.153, "museum", "Museum", "Montjuïc", 8, "Catalan art in the palau — pair with the magic-fountain area."),
    place("bcn-fundacio-miro", "Fundació Joan Miró", 41.3685, 2.1598, "museum", "Museum", "Montjuïc", 8, "Miró collection in a Josep Lluís Sert building."),
    place("bcn-poble-espanyol", "Poble Espanyol", 41.3688, 2.1485, "sight", "Attraction", "Montjuïc", 6, "Open-air architecture village — fun with kids."),
    place("bcn-olympic", "Olympic Stadium & Ring", 41.3645, 2.1555, "sight", "Attraction", "Montjuïc", 7, "1992 Games stadium above the city."),
    place("bcn-magic-fountain", "Magic Fountain show", 41.3715, 2.1515, "sight", "Attraction", "Montjuïc", 7, "Evening light-and-water show at the foot of Montjuïc."),
    place("bcn-caixaforum", "CaixaForum Barcelona", 41.3682, 2.1505, "museum", "Museum", "Montjuïc", 6, "Industrial brick building and vertical garden at Montjuïc's base."),

    // ——— Waterfront / Barceloneta ———
    place("bcn-barceloneta", "Barceloneta Beach", 41.3785, 2.1895, "nature", "Park", "Barceloneta", 7, "City beach for a late-afternoon swim or stroll."),
    place("bcn-port-vell", "Port Vell promenade", 41.3755, 2.1835, "sight", "Attraction", "Waterfront", 7, "Rambla de Mar bridge to Maremàgnum and harbour walks."),
    place("bcn-w-hotel", "W Hotel viewpoint", 41.3685, 2.19, "sight", "Viewpoint", "Barceloneta", 6, "Sail-shaped hotel marking the port entrance."),
    place("bcn-ciutadella", "Parc de la Ciutadella", 41.388, 2.1865, "nature", "Park", "El Born", 8, "Rowboats, zoo edge, and shade between Born and the arc."),
    place("bcn-arc", "Arc de Triomf", 41.391, 2.1798, "sight", "Monument", "El Born", 7, "Red-brick triumphal arch leading into Ciutadella."),

    // ——— Poble Sec / Sant Antoni ———
    place("bcn-poble-sec", "Poble Sec tapas lane", 41.375, 2.1645, "sight", "Attraction", "Poble Sec", 7, "Carrer de Blai pintxos strip below Montjuïc."),
    place("bcn-sant-antoni-market", "Mercat de Sant Antoni", 41.3785, 2.1625, "shopping", "Market", "Sant Antoni", 7, "Renovated market under an iron skeleton near Eixample edge."),
    place("bcn-espana", "Plaça d'Espanya", 41.3748, 2.1495, "sight", "Attraction", "Sants", 7, "MNAC-facing square and the twin Venetian towers."),

    place("bcn-pedralbes", "Monestir de Pedralbes", 41.3925, 2.1265, "sight", "Monument", "Pedralbes", 7, "Gothic cloister and museum in a leafy west pocket."),

    // ——— Tibidabo / Poblenou ———
    place("bcn-tibidabo", "Tibidabo Amusement Park", 41.4215, 2.1195, "sight", "Attraction", "Sarrià", 8, "Hilltop rides and church with sweeping city views."),
    place("bcn-cosmo", "CosmoCaixa", 41.4185, 2.1315, "museum", "Museum", "Sarrià", 7, "Rainforest dome and hands-on science west of the center."),
    place("bcn-poblenou", "Poblenou rambla", 41.3985, 2.1985, "sight", "Attraction", "Poblenou", 6, "Converted-industry neighborhood with design studios."),
    place("bcn-design", "Design Museum of Barcelona", 41.4025, 2.19, "museum", "Museum", "Poblenou", 6, "Product and fashion design at Disseny Hub."),

    // ——— Cafes ———
    place("bcn-cafe-nomad", "Nomad Coffee Lab", 41.3912, 2.1615, "cafe", "Cafe", "Eixample", 7, "Specialty coffee on Passage Sert.", { cuisine: "coffee" }),
    place("bcn-cafe-satan", "Satan's Coffee Corner", 41.3835, 2.1765, "cafe", "Cafe", "Gothic Quarter", 6, "Third-wave coffee in the Gothic lanes.", { cuisine: "coffee" }),
    place("bcn-cafe-oper", "Café de l'Opera", 41.3808, 2.1734, "cafe", "Cafe", "La Rambla", 5, "Old-school Rambla cafe for a quick break.", { cuisine: "coffee" }),
    place("bcn-cafe-chok", "Chök", 41.3872, 2.1835, "cafe", "Cafe", "El Born", 6, "Doughnuts and coffee in El Born.", { cuisine: "pastry coffee" }),
    place("bcn-cafe-granja", "Granja Viader", 41.3855, 2.1715, "cafe", "Cafe", "El Raval", 6, "Historic dairy bar for xocolata desfeta.", { cuisine: "pastry chocolate" }),
    place("bcn-cafe-babushka", "Babushka Cake Bar", 41.4045, 2.1575, "cafe", "Cafe", "Gràcia", 5, "Gràcia cakes after Park Güell.", { cuisine: "pastry coffee" }),
    place("bcn-cafe-federal", "Federal Café Gothic", 41.3825, 2.1778, "cafe", "Cafe", "Gothic Quarter", 6, "Australian-style brunch in the Gothic Quarter.", { cuisine: "coffee brunch" }),

    // ——— Food ———
    place("bcn-tapas-born", "El Xampanyet", 41.3857, 2.1825, "food", "Restaurant", "El Born", 8, "Classic tapas and cava — counter standing room.", { cuisine: "tapas catalan" }),
    place("bcn-cal-pep", "Cal Pep", 41.3837, 2.1834, "food", "Restaurant", "El Born", 8, "Counter seafood tapas — arrive before doors open.", { cuisine: "tapas seafood" }),
    place("bcn-cerveceria", "Cervecería Catalana", 41.3925, 2.1568, "food", "Restaurant", "Eixample", 7, "Crowded tapas on Diagonal.", { cuisine: "tapas spanish" }),
    place("bcn-tickets", "Tickets / Poble Sec dining", 41.3758, 2.1565, "food", "Restaurant", "Poble Sec", 7, "Adrià-era creative tapas zone below Montjuïc — book ahead.", { cuisine: "tapas spanish" }),
    place("bcn-quimet", "Quimet & Quimet", 41.3755, 2.1725, "food", "Restaurant", "Poble Sec", 7, "Tiny standing tapas with inventive montaditos.", { cuisine: "tapas spanish" }),
    place("bcn-botifarra", "La Bodegueta del Poble Sec", 41.3748, 2.1648, "food", "Quick meal", "Poble Sec", 6, "Blai-carrer pintxos crawl starting point.", { cuisine: "tapas spanish" }),
    place("bcn-bar-canete", "Bar Cañete", 41.3812, 2.1735, "food", "Restaurant", "Gothic Quarter", 7, "Classic Barcelona tapeo on Moll de la Fusta side.", { cuisine: "tapas spanish" }),
    place("bcn-disfrutar", "Disfrutar area lunch", 41.3905, 2.1625, "food", "Restaurant", "Eixample", 8, "Fine-dining pocket near Eixample — reserve well ahead.", { cuisine: "spanish fine_dining" }),
    place("bcn-7-portes", "7 Portes", 41.3765, 2.1835, "food", "Restaurant", "Barceloneta", 7, "Paella institution by the port.", { cuisine: "paella seafood spanish" }),
    place("bcn-can-majo", "Can Majó", 41.3782, 2.1905, "food", "Restaurant", "Barceloneta", 7, "Beachfront rice and seafood on Barceloneta.", { cuisine: "seafood paella" }),
    place("bcn-boqueria-lunch", "Kiosko Universal (Boqueria)", 41.3818, 2.1715, "food", "Quick meal", "El Raval", 6, "Market-counter seafood inside La Boqueria.", { cuisine: "seafood market" }),
    place("bcn-celler", "Celler de Can Roca popup area", 41.3928, 2.1638, "food", "Restaurant", "Eixample", 7, "High-end Catalan tasting menus on the Gràcia border.", { cuisine: "catalan" }),
    place("bcn-flax", "Flax & Kale", 41.3875, 2.1758, "food", "Restaurant", "El Born", 6, "Healthy plant-forward plates near the Palau.", { cuisine: "vegetarian vegan" }),
    place("bcn-rao", "Pakta Ramen", 41.3755, 2.1585, "food", "Restaurant", "Poble Sec", 7, "Peruvian-Japanese noodles on the Albert Adrià strip.", { cuisine: "japanese fusion" }),
    place("bcn-bun", "Bunsen", 41.3845, 2.1815, "food", "Quick meal", "El Born", 6, "Simple burger break between Born sights.", { cuisine: "burger american" }),
    place("bcn-sant-antoni-lunch", "Sant Antoni market lunch", 41.3785, 2.1625, "food", "Quick meal", "Sant Antoni", 6, "Tapas counters under the renovated market roof.", { cuisine: "market catalan" }),
    place("bcn-santa-caterina-lunch", "Santa Caterina market lunch", 41.3862, 2.1785, "food", "Quick meal", "El Born", 6, "Less touristy market lunch than Boqueria.", { cuisine: "market catalan" }),
    place("bcn-eixample-dinner", "Eixample bistro dinner", 41.3945, 2.1605, "food", "Restaurant", "Eixample", 6, "Sit-down Catalan plates after Gaudí house tours.", { cuisine: "catalan spanish" }),
    place("bcn-lasal", "La Sal glories area", 41.4025, 2.1855, "food", "Restaurant", "Poblenou", 6, "Contemporary Catalan dining near the modern seafront.", { cuisine: "catalan" }),

    // ——— Nightlife ———
    place("bcn-paradiso", "Paradiso", 41.3835, 2.1832, "nightlife", "Bar", "El Born", 8, "Speakeasy behind a pastrami shop — book ahead."),
    place("bcn-marsella", "Bar Marsella", 41.3788, 2.1708, "nightlife", "Bar", "El Raval", 6, "Absinthe and old mirrors in the Raval."),
    place("bcn-opium", "Opium Barcelona", 41.3695, 2.1895, "nightlife", "Bar", "Barceloneta", 7, "Beachfront club complex on the port."),
    place("bcn-razzmatazz", "Razzmatazz", 41.4015, 2.1925, "nightlife", "Bar", "Poblenou", 7, "Multi-room indie and electronic club."),
    place("bcn-ollivé", "Ollivé rooftop", 41.3935, 2.1645, "nightlife", "Bar", "Eixample", 6, "Rooftop cocktails on Passeig de Gràcia."),
    place("bcn-bobby-gin", "Bobby Gin Born", 41.3852, 2.1828, "nightlife", "Bar", "El Born", 7, "Gin cocktails steps from Santa Maria del Mar."),
    place("bcn-gracia-bars", "Gràcia plaza bars", 41.4032, 2.1578, "nightlife", "Bar", "Gràcia", 6, "Village-square terraces after sunset."),
    place("bcn-poble-sec-night", "Carrer de Blai nightlife", 41.3752, 2.1642, "nightlife", "Bar", "Poble Sec", 7, "Cheap pintxos crawl that stretches late."),

    // ——— Stays ———
    place("bcn-stay-majesty", "Hotel Majestic area", 41.3955, 2.1615, "stay", "Hotel", "Eixample", 9, "Passeig de Gràcia luxury base for Gaudí mornings."),
    place("bcn-stay-cotton", "Cotton House Hotel", 41.3925, 2.1655, "stay", "Hotel", "Eixample", 8, "Design hotel on Gran Via near Casa Batlló."),
    place("bcn-stay-ohla", "Ohla Barcelona", 41.3865, 2.1745, "stay", "Hotel", "Gothic Quarter", 8, "Boutique hotel between Gothic lanes and La Rambla."),
    place("bcn-stay-yurbban", "Yurbban Trafalgar Hotel", 41.3885, 2.1725, "stay", "Hotel", "El Born", 7, "Rooftop pool steps from the Born culture center."),
    place("bcn-stay-born", "El Born Boutique Stay", 41.3848, 2.1815, "stay", "Hotel", "El Born", 7, "Evening walks on Passeig del Born."),
    place("bcn-stay-mercer", "Mercer Hotel", 41.3835, 2.1785, "stay", "Hotel", "Gothic Quarter", 8, "Roman walls inside a Gothic mansion hotel."),
    place("bcn-stay-eixample", "Hotel Casa Fuster area", 41.3982, 2.1578, "stay", "Hotel", "Eixample", 7, "Gràcia-border base for Sagrada Família days."),
    place("bcn-stay-sagrada", "Sagrada Família view hotel", 41.4045, 2.1725, "stay", "Hotel", "Eixample", 7, "Wake up facing the towers."),
    place("bcn-stay-parallel", "Hotel Pulitzer", 41.3885, 2.1695, "stay", "Hotel", "El Raval", 7, "Rooftop terrace between Raval and Rambla."),
    place("bcn-stay-barceloneta", "Barceloneta beach hotel", 41.3788, 2.1898, "stay", "Hotel", "Barceloneta", 7, "Sand-and-sea mornings on the city beach."),
    place("bcn-stay-poble-sec", "Poble Sec stay", 41.3755, 2.1665, "stay", "Hotel", "Poble Sec", 6, "Quieter base below Montjuïc with Blai tapas nights."),
    place("bcn-stay-gracia", "Generator Barcelona", 41.4045, 2.1595, "stay", "Hostel", "Gràcia", 6, "Large design hostel near Gràcia squares."),
    place("bcn-stay-ramblas", "Hostel One Ramblas", 41.3842, 2.1725, "stay", "Hostel", "El Raval", 6, "Central hostel near La Boqueria and MACBA."),
    place("bcn-stay-yard", "The Yard Hostel", 41.3845, 2.1775, "stay", "Hostel", "Gothic Quarter", 6, "Social hostel in the Gothic grid."),
    place("bcn-stay-rocket", "Sant Jordi Hostel Rock Palace", 41.3935, 2.1595, "stay", "Hostel", "Eixample", 5, "Rock-themed hostel near Diagonal."),
    place("bcn-stay-guest", "Gothic Quarter Guest House", 41.3828, 2.1755, "stay", "Guest house", "Gothic Quarter", 6, "Small rooms in the old center."),
    place("bcn-stay-apt-born", "Born apartment", 41.3858, 2.1805, "stay", "Apartment", "El Born", 7, "Self-catering between Picasso Museum and the church."),
    place("bcn-stay-apt-gracia", "Gràcia apartment", 41.4025, 2.1585, "stay", "Apartment", "Gràcia", 6, "Village-feel base north of Diagonal."),
    place("bcn-stay-apt-beach", "Barceloneta apartment", 41.3795, 2.1885, "stay", "Apartment", "Barceloneta", 6, "Apartment living near the boardwalk."),
    place("bcn-stay-w", "W Barcelona area", 41.3688, 2.1898, "stay", "Hotel", "Barceloneta", 8, "Iconic sail hotel for a splurge waterfront stay."),
  ],
};