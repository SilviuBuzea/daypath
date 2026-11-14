import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const barcelona: CityCatalog = {
  id: "barcelona",
  name: "Barcelona, Spain",
  aliases: ["barcelona", "bcn"],
  center: { lat: 41.3874, lon: 2.1686 },
  places: [
    place("bcn-sagrada", "Sagrada Família", 41.4036, 2.1744, "sight", "Monument", "Eixample", 10, "Anchor an Eixample morning here."),
    place("bcn-casa-batllo", "Casa Batlló", 41.3916, 2.1649, "sight", "Attraction", "Eixample", 8, "Gaudí house on Passeig de Gràcia."),
    place("bcn-pedrera", "La Pedrera", 41.3954, 2.1619, "sight", "Attraction", "Eixample", 8, "Another Gaudí stop a short walk away."),
    place("bcn-gotic", "Barcelona Cathedral", 41.384, 2.1761, "sight", "Monument", "Gothic Quarter", 7, "Center of the old Gothic lanes."),
    place("bcn-born", "Santa Maria del Mar", 41.3839, 2.1821, "sight", "Monument", "El Born", 7, "Beautiful church for a Born afternoon."),
    place("bcn-parkguell", "Park Güell", 41.4145, 2.1527, "nature", "Park", "Gràcia", 9, "Gaudí park above the city."),
    place("bcn-ciutadella", "Parc de la Ciutadella", 41.388, 2.1865, "nature", "Park", "El Born", 6, "Green break near El Born."),
    place("bcn-montjuic", "Montjuïc viewpoint", 41.364, 2.165, "sight", "Viewpoint", "Montjuïc", 7, "Hill and museum area above the port."),
    place("bcn-picasso", "Picasso Museum", 41.3852, 2.1809, "museum", "Museum", "El Born", 8, "Best museum stop in El Born."),
    place("bcn-mnac", "MNAC", 41.368, 2.153, "museum", "Museum", "Montjuïc", 8, "Catalan art museum on Montjuïc."),
    place("bcn-boqueria", "La Boqueria", 41.3816, 2.1719, "shopping", "Market", "El Raval", 7, "Famous market just off La Rambla."),

    place("bcn-cafe", "Café de l'Opera", 41.3808, 2.1734, "cafe", "Cafe", "Gothic Quarter", 5, "Old cafe for a quick coffee break."),
    place("bcn-tapas-born", "El Xampanyet", 41.3857, 2.1825, "food", "Restaurant", "El Born", 7, "Classic tapas and cava in El Born.", { cuisine: "tapas" }),
    place("bcn-cal-pep", "Cal Pep", 41.3837, 2.1834, "food", "Restaurant", "El Born", 7, "Counter tapas near Santa Maria del Mar.", { cuisine: "tapas" }),
    place("bcn-eixample-lunch", "Cervecería Catalana", 41.3925, 2.1568, "food", "Restaurant", "Eixample", 6, "Busy tapas spot for an Eixample day."),
    place("bcn-ticket", "Tickets Bar area dinner", 41.3758, 2.1565, "food", "Restaurant", "Poble Sec", 6, "Handy dinner zone below Montjuïc."),
    place("bcn-gracia", "Gràcia square cafes", 41.403, 2.158, "cafe", "Cafe", "Gràcia", 5, "Neighborhood cafes after Park Güell."),

    place("bcn-paradise", "Paradiso", 41.3835, 2.1832, "nightlife", "Bar", "El Born", 7, "Cocktail bar in El Born."),
    place("bcn-marsella", "Bar Marsella", 41.3788, 2.1708, "nightlife", "Bar", "El Raval", 5, "Old absinthe bar near the center."),

    place("bcn-hotel-eixample", "Hotel Casa Fuster area", 41.3982, 2.1578, "stay", "Hotel", "Eixample", 7, "Central for Gaudí and Eixample walking."),
    place("bcn-born-stay", "El Born Boutique Stay", 41.3848, 2.1815, "stay", "Hotel", "El Born", 6, "Good if you want evenings in El Born."),
    place("bcn-hostel", "Generator Barcelona", 41.4045, 2.1595, "stay", "Hostel", "Gràcia", 5, "Budget stay near Gràcia."),
    place("bcn-guest", "Gothic Quarter Guest House", 41.3828, 2.1755, "stay", "Guest house", "Gothic Quarter", 5, "Small stay in the old center."),
  ],
};
