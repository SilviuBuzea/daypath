import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const rome: CityCatalog = {
  id: "rome",
  name: "Rome, Italy",
  aliases: ["rome", "roma"],
  center: { lat: 41.9028, lon: 12.4964 },
  places: [
    place("rm-colosseum", "Colosseum", 41.8902, 12.4922, "sight", "Attraction", "Colosseo", 10, "Start here for ancient Rome."),
    place("rm-forum", "Roman Forum", 41.8925, 12.4853, "sight", "Ruins", "Colosseo", 9, "Walk straight from the Colosseum into the ruins."),
    place("rm-pantheon", "Pantheon", 41.8986, 12.4768, "sight", "Monument", "Centro Storico", 9, "Perfect dome and a natural center for the historic core."),
    place("rm-trevi", "Trevi Fountain", 41.9009, 12.4833, "sight", "Attraction", "Trevi", 8, "Busy but worth a short stop nearby."),
    place("rm-navona", "Piazza Navona", 41.8992, 12.4731, "sight", "Attraction", "Centro Storico", 7, "Baroque square a few minutes from the Pantheon."),
    place("rm-vatican", "St. Peter's Basilica", 41.9022, 12.4539, "sight", "Monument", "Vatican", 10, "Anchor for a Vatican day."),
    place("rm-gianicolo", "Gianicolo", 41.8915, 12.4614, "sight", "Viewpoint", "Trastevere", 7, "Hilltop view above Trastevere."),
    place("rm-trastevere", "Santa Maria in Trastevere", 41.8895, 12.4697, "sight", "Monument", "Trastevere", 7, "Heart of Trastevere for an evening wander."),
    place("rm-borghese", "Villa Borghese", 41.9142, 12.4922, "nature", "Park", "Flaminio", 7, "Big park north of the center."),
    place("rm-vatican-museums", "Vatican Museums", 41.9065, 12.4536, "museum", "Museum", "Vatican", 10, "Pair with St. Peter's on the same day."),
    place("rm-capitolini", "Capitoline Museums", 41.8931, 12.4828, "museum", "Museum", "Campidoglio", 8, "Classic museums above the Forum."),
    place("rm-campo", "Campo de' Fiori market", 41.8956, 12.4722, "shopping", "Market", "Centro Storico", 6, "Morning market near the historic center."),

    place("rm-eustachio", "Sant'Eustachio Il Caffè", 41.8984, 12.4744, "cafe", "Cafe", "Centro Storico", 6, "Famous coffee near the Pantheon.", { cuisine: "coffee" }),
    place("rm-gelato", "Gelateria del Teatro", 41.8998, 12.4702, "cafe", "Cafe", "Centro Storico", 6, "Strong gelato stop between squares.", { cuisine: "ice_cream" }),
    place("rm-roscioli", "Roscioli", 41.8947, 12.4738, "food", "Restaurant", "Centro Storico", 8, "Excellent Roman food near Campo de' Fiori.", { cuisine: "italian" }),
    place("rm-enzo", "Da Enzo al 29", 41.888, 12.4752, "food", "Restaurant", "Trastevere", 7, "Popular Trastevere trattoria.", { cuisine: "italian" }),
    place("rm-armando", "Armando al Pantheon", 41.8989, 12.4762, "food", "Restaurant", "Centro Storico", 7, "Classic lunch beside the Pantheon."),
    place("rm-supplizio", "Supplizio", 41.8968, 12.4708, "food", "Quick meal", "Centro Storico", 5, "Quick Roman street-food stop."),
    place("rm-borgo", "Borgo Pio lunch spots", 41.904, 12.4608, "food", "Restaurant", "Vatican", 5, "Handy area for lunch on a Vatican day."),

    place("rm-jerry", "Jerry Thomas Speakeasy", 41.8965, 12.4688, "nightlife", "Bar", "Centro Storico", 6, "Cocktail bar in the historic center."),
    place("rm-frenetic", "Freni e Frizioni", 41.8902, 12.4678, "nightlife", "Bar", "Trastevere", 6, "Busy aperitivo bar in Trastevere."),

    place("rm-navona-hotel", "Hotel Navona", 41.8981, 12.4735, "stay", "Hotel", "Centro Storico", 7, "Central hotel for walking the historic core."),
    place("rm-beehive", "The Beehive", 41.9018, 12.5035, "stay", "Hostel", "Termini", 5, "Friendly budget stay near Termini."),
    place("rm-guest", "Roma Guest House", 41.8962, 12.4788, "stay", "Guest house", "Centro Storico", 5, "Small guest house close to the Pantheon area."),
    place("rm-trastevere-stay", "Trastevere House", 41.8892, 12.4688, "stay", "Apartment", "Trastevere", 6, "Good if you want evenings in Trastevere."),
  ],
};
