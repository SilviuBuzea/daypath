import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const vatican: CityCatalog = {
  id: "vatican",
  name: "Vatican City",
  aliases: ["vatican", "vatican city", "citta del vaticano", "holy see"],
  center: { lat: 41.9029, lon: 12.4534 },
  places: [
    // ——— St Peter's & square ———
    place("va-basilica", "St. Peter's Basilica", 41.9022, 12.4539, "sight", "Monument", "Vatican", 10, "Dress for church rules; dome climb if your legs are willing."),
    place("va-square", "St. Peter's Square", 41.9022, 12.4568, "sight", "Attraction", "Vatican", 10, "Bernini colonnade and the Egyptian obelisk — arrive early for lighter crowds."),
    place("va-dome", "St. Peter's Dome (Cupola)", 41.9023, 12.4536, "sight", "Viewpoint", "Vatican", 9, "Climb or lift to the dome for Rome and Vatican Gardens views."),
    place("va-pietà", "Michelangelo's Pietà", 41.9021, 12.4542, "sight", "Monument", "Vatican", 9, "Behind glass just inside the basilica entrance on the right."),
    place("va-baldachin", "Bernini Baldachin", 41.9022, 12.4534, "sight", "Monument", "Vatican", 8, "Bronze canopy over the papal altar under the dome."),
    place("va-grottoes", "Vatican Grottoes", 41.902, 12.4535, "sight", "Monument", "Vatican", 7, "Papal tombs beneath the basilica floor."),
    place("va-necropolis", "Scavi / Vatican Necropolis", 41.9019, 12.4533, "sight", "Monument", "Vatican", 8, "Excavations under the basilica — book the Scavi Office months ahead."),
    place("va-swiss-guard", "Swiss Guard checkpoint views", 41.9018, 12.4575, "sight", "Attraction", "Vatican", 6, "Photo spot for the striped uniforms at the Bronze Door side."),
    place("va-audience-hall", "Paul VI Audience Hall exterior", 41.9008, 12.4548, "sight", "Attraction", "Vatican", 5, "Modern hall south of the basilica — used for papal audiences."),

    // ——— Museums & Sistine ———
    place("va-museums", "Vatican Museums", 41.9065, 12.4536, "museum", "Museum", "Vatican", 10, "Vast galleries leading to the Sistine — book timed entry."),
    place("va-sistine", "Sistine Chapel", 41.9029, 12.4545, "museum", "Museum", "Vatican", 10, "Michelangelo ceiling and Last Judgment — no photos, expect crowds."),
    place("va-raphael", "Raphael Rooms", 41.9035, 12.4542, "museum", "Museum", "Vatican", 9, "School of Athens and papal apartments on the museum route."),
    place("va-pinacoteca", "Vatican Pinacoteca", 41.9062, 12.4545, "museum", "Museum", "Vatican", 8, "Painting gallery with Raphael, Caravaggio, and da Vinci."),
    place("va-pio-clementino", "Pio-Clementino Museum", 41.906, 12.4538, "museum", "Museum", "Vatican", 8, "Classical sculpture including the Laocoön and Apollo Belvedere."),
    place("va-egyptian", "Gregorian Egyptian Museum", 41.9063, 12.4532, "museum", "Museum", "Vatican", 6, "Egyptian antiquities wing inside the museums."),
    place("va-etruscan", "Gregorian Etruscan Museum", 41.9064, 12.453, "museum", "Museum", "Vatican", 6, "Etruscan bronzes and ceramics upstairs."),
    place("va-gallery-maps", "Gallery of Maps", 41.9045, 12.454, "museum", "Museum", "Vatican", 8, "Long frescoed corridor of Italian regions — photo favourite."),
    place("va-spiral-stairs", "Bramante / modern spiral exit", 41.9068, 12.4548, "sight", "Attraction", "Vatican", 6, "Double-helix exit staircase often used as a final photo."),
    place("va-carriage", "Carriage Pavilion", 41.9055, 12.4525, "museum", "Museum", "Vatican", 5, "Papal carriages and cars in the museum complex."),

    // ——— Gardens & walls ———
    place("va-gardens", "Vatican Gardens", 41.9045, 12.4515, "nature", "Garden", "Vatican", 8, "Guided tours only — quiet greenery behind the museums."),
    place("va-leonine", "Leonine Walls walk views", 41.9048, 12.4555, "sight", "Viewpoint", "Vatican", 6, "Fortified walls framing the Vatican hill."),
    place("va-gate-santanna", "Porta Sant'Anna", 41.9042, 12.4582, "sight", "Attraction", "Vatican", 5, "Working gate used by residents and staff."),

    // ——— Castel / Borgo edge ———
    place("va-castel", "Castel Sant'Angelo", 41.9031, 12.4663, "sight", "Castle", "Borgo", 9, "Hadrian's mausoleum turned papal fortress — rooftop angel views."),
    place("va-ponte", "Ponte Sant'Angelo", 41.9018, 12.4668, "sight", "Attraction", "Borgo", 8, "Angel-lined bridge linking castle to the centro."),
    place("va-passetto", "Passetto di Borgo (exterior)", 41.9035, 12.462, "sight", "Attraction", "Borgo", 7, "Elevated escape corridor from Vatican to the castle."),
    place("va-via-della-conciliazione", "Via della Conciliazione", 41.9025, 12.4605, "sight", "Attraction", "Borgo", 8, "Grand axis opened onto St. Peter's — best at dusk."),
    place("va-borgo-pio", "Borgo Pio stroll", 41.904, 12.4605, "sight", "Attraction", "Borgo", 7, "Pedestrian lane of trattorie just outside the walls."),
    place("va-borgo-santo-spirito", "Borgo Santo Spirito", 41.9012, 12.4615, "sight", "Attraction", "Borgo", 6, "Quieter Borgo street south of the main axis."),
    place("va-santa-maria-transpontina", "Santa Maria in Traspontina", 41.9028, 12.4625, "sight", "Monument", "Borgo", 5, "Carmelite church on Via della Conciliazione."),
    place("va-santo-spirito", "Santo Spirito in Sassia", 41.901, 12.461, "sight", "Monument", "Borgo", 6, "Hospital church with a distinctive octagonal lantern."),
    place("va-porta-santo-spirito", "Porta Santo Spirito", 41.9005, 12.4585, "sight", "Monument", "Borgo", 5, "Renaissance gate at the south approach to the Vatican."),

    // ——— Prati ———
    place("va-piazza-cavour", "Piazza Cavour", 41.9065, 12.4705, "sight", "Attraction", "Prati", 6, "Tree-lined Prati square near courts and cafes."),
    place("va-via-coli", "Via Cola di Rienzo shopping", 41.9075, 12.4665, "shopping", "Market", "Prati", 7, "Main Prati shopping street for mid-range retail."),
    place("va-mercato-trionfale", "Mercato Trionfale", 41.9105, 12.4555, "shopping", "Market", "Prati", 8, "Huge covered food market north of the museums."),
    place("va-piazza-risorgimento", "Piazza Risorgimento", 41.9068, 12.4585, "sight", "Attraction", "Prati", 7, "Transit and taxi hub beside the museum walls."),
    place("va-ottaviano", "Ottaviano metro area", 41.9095, 12.458, "sight", "Attraction", "Prati", 6, "Metro A stop — convenient museum approach."),
    place("va-courts", "Palace of Justice (external view)", 41.9045, 12.4708, "sight", "Monument", "Prati", 5, "Massive Justitia building on the Tiber bend."),

    // ——— Nature / Tiber ———
    place("va-lungotevere", "Lungotevere Vatican walk", 41.9025, 12.4655, "nature", "Park", "Borgo", 6, "River promenade between castle and St. Peter's axis."),
    place("va-giardino-castel", "Castel Sant'Angelo park", 41.9035, 12.4675, "nature", "Park", "Borgo", 6, "Lawn and ramparts around the fortress."),

    // ——— Cafes ———
    place("va-cafe-risorgimento", "Café at Piazza Risorgimento", 41.9067, 12.4588, "cafe", "Cafe", "Prati", 6, "Pre-museum coffee before the security line.", { cuisine: "coffee" }),
    place("va-borgo-cafe", "Caffè on Borgo Pio", 41.9042, 12.4608, "cafe", "Cafe", "Borgo", 7, "Espresso and cornetto on the pedestrian Borgo.", { cuisine: "coffee pastry" }),
    place("va-sciascia", "Sciascia Caffè 1919", 41.9085, 12.4635, "cafe", "Cafe", "Prati", 8, "Historic Prati coffee roaster — excellent espresso.", { cuisine: "coffee" }),
    place("va-gelateria-old", "Old Bridge Gelateria", 41.9015, 12.4595, "cafe", "Cafe", "Borgo", 7, "Huge gelato cones near the Vatican walls.", { cuisine: "gelato" }),
    place("va-cafe-conciliazione", "Cafe on Via della Conciliazione", 41.9024, 12.4612, "cafe", "Cafe", "Borgo", 5, "Tourist-priced coffee with basilica views.", { cuisine: "coffee" }),
    place("va-prati-pastry", "Pasticceria Prati", 41.908, 12.465, "cafe", "Cafe", "Prati", 6, "Morning pastry stop on residential Prati streets.", { cuisine: "pastry coffee" }),
    place("va-museum-cafe", "Vatican Museums cafe", 41.9062, 12.4542, "cafe", "Cafe", "Vatican", 5, "On-site break between gallery wings.", { cuisine: "coffee" }),

    // ——— Food (Borgo / Prati) ———
    place("va-dal-toscanaccio", "Dal Toscano", 41.9072, 12.4595, "food", "Restaurant", "Prati", 8, "Tuscan steaks and beans near Ottaviano.", { cuisine: "tuscan italian" }),
    place("va-hostaria-dei-bastioni", "Hostaria dei Bastioni", 41.9065, 12.4555, "food", "Restaurant", "Prati", 7, "Reliable pasta steps from the museum entrance.", { cuisine: "italian" }),
    place("va-borgo-trattoria", "Trattoria on Borgo Pio", 41.9041, 12.461, "food", "Restaurant", "Borgo", 7, "Classic Roman plates on the pedestrian lane.", { cuisine: "roman italian" }),
    place("va-romano", "Ristorante Arlù", 41.9038, 12.4602, "food", "Restaurant", "Borgo", 7, "Intimate Borgo dining after St. Peter's.", { cuisine: "italian" }),
    place("va-pizza-prati", "Pizzarium Bonci", 41.9068, 12.4495, "food", "Quick meal", "Prati", 9, "Gabriele Bonci's famous pizza al taglio by Cipro metro.", { cuisine: "pizza" }),
    place("va-supplizio", "Supplizio", 41.9055, 12.468, "food", "Quick meal", "Prati", 7, "Gourmet supplì and fried Roman snacks.", { cuisine: "street_food roman" }),
    place("va-trionfale-lunch", "Mercato Trionfale lunch counters", 41.9105, 12.4558, "food", "Quick meal", "Prati", 8, "Market stall lunch — fresh and local prices.", { cuisine: "market italian" }),
    place("va-il-sorpasso", "Il Sorpasso", 41.9088, 12.4625, "food", "Restaurant", "Prati", 7, "Wine-bar plates and busy local crowd.", { cuisine: "italian wine" }),
    place("va-romeo", "Romeo Chef & Baker", 41.9078, 12.4575, "food", "Restaurant", "Prati", 7, "Modern bakery-restaurant near Ottaviano.", { cuisine: "italian bakery" }),
    place("va-carbonara", "Carbonara specialist Prati", 41.907, 12.464, "food", "Restaurant", "Prati", 6, "Roman pasta classics away from Borgo markups.", { cuisine: "roman pasta" }),
    place("va-seafood-prati", "Seafood dinner Prati", 41.9082, 12.4668, "food", "Restaurant", "Prati", 6, "Fish-focused dinner after museum day.", { cuisine: "seafood" }),
    place("va-gelato-dinner", "Trapizzino near Vatican", 41.905, 12.4625, "food", "Quick meal", "Borgo", 6, "Stuffed pizza-pocket street food.", { cuisine: "street_food" }),
    place("va-vegetarian", "Vegetarian Prati lunch", 41.9085, 12.4645, "food", "Restaurant", "Prati", 5, "Plant-forward plates near Cola di Rienzo.", { cuisine: "vegetarian" }),
    place("va-conciliazione-lunch", "Quick lunch near Conciliazione", 41.9026, 12.4618, "food", "Quick meal", "Borgo", 5, "Convenient but touristy — fine for speed.", { cuisine: "italian" }),

    // ——— Nightlife ———
    place("va-prati-bars", "Prati aperitivo bars", 41.909, 12.467, "nightlife", "Bar", "Prati", 7, "Aperitivo culture on residential Prati streets."),
    place("va-borgo-evening", "Borgo Pio evening wine", 41.9035, 12.4615, "nightlife", "Bar", "Borgo", 6, "Post-basilica wine bars as day-trippers thin out."),
    place("va-castel-night", "Castel Sant'Angelo evening terrace", 41.903, 12.4665, "nightlife", "Bar", "Borgo", 6, "Night views from the fortress area (seasonal events)."),
    place("va-enoteca-prati", "Enoteca Prati", 41.9082, 12.4655, "nightlife", "Bar", "Prati", 6, "Wine-by-the-glass neighbourhood stop."),
    place("va-cocktail-cola", "Cocktail bar Via Cola di Rienzo", 41.9076, 12.466, "nightlife", "Bar", "Prati", 5, "Late drinks after shopping street closes."),

    // ——— Stays (Borgo / Prati) ———
    place("va-stay-borgo", "Hotel in Borgo", 41.9038, 12.4602, "stay", "Hotel", "Borgo", 8, "Steps from St. Peter's — book early museum mornings."),
    place("va-stay-prati", "Hotel in Prati", 41.9085, 12.4655, "stay", "Hotel", "Prati", 8, "Residential calm with metro access to the museums."),
    place("va-stay-hilton", "Hilton Garden Inn Vatican", 41.9055, 12.4585, "stay", "Hotel", "Prati", 7, "Upscale chain comfort around the Vatican walls."),
    place("va-stay-marriott", "Rome Vatican Marriott-area hotel", 41.906, 12.4595, "stay", "Hotel", "Prati", 7, "Chain comfort near Piazza Risorgimento."),
    place("va-stay-guesthouse", "Religious guesthouse Borgo", 41.9045, 12.462, "stay", "Guest house", "Borgo", 6, "Quiet pension-style rooms popular with pilgrims."),
    place("va-stay-convent", "Casa per ferie near Vatican", 41.905, 12.4575, "stay", "Guest house", "Borgo", 6, "Simple church-run stays — early quiet hours."),
    place("va-stay-hostel", "Vatican area hostel", 41.9055, 12.458, "stay", "Hostel", "Borgo", 5, "Budget dorms within walking distance of the square."),
    place("va-stay-apt-borgo", "Borgo apartment", 41.9042, 12.4612, "stay", "Apartment", "Borgo", 7, "Self-catering above trattoria streets."),
    place("va-stay-apt-prati", "Prati apartment", 41.9088, 12.464, "stay", "Apartment", "Prati", 7, "Flat near market and metro for longer stays."),
    place("va-stay-residenza", "Residenza near museums", 41.9065, 12.4565, "stay", "Hotel", "Prati", 7, "Small hotel for first museum entry slots."),
    place("va-stay-tiber", "Tiber-view hotel Prati", 41.905, 12.4695, "stay", "Hotel", "Prati", 6, "Rooms facing the river toward Castel Sant'Angelo."),
    place("va-stay-ottaviano", "Ottaviano boutique hotel", 41.9092, 12.4585, "stay", "Hotel", "Prati", 7, "Boutique base beside Metro A."),
  ],
};
