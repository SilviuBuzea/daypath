import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const rome: CityCatalog = {
  id: "rome",
  name: "Rome, Italy",
  aliases: ["rome", "roma"],
  center: { lat: 41.9028, lon: 12.4964 },
  places: [
    // ——— Colosseo / Ancient Rome ———
    place("rm-colosseum", "Colosseum", 41.8902, 12.4922, "sight", "Attraction", "Colosseo", 10, "Book a timed ticket — pair it with the Forum on the same morning.", { flags: ["ticket", "early", "touristy"] }),
    place("rm-forum", "Roman Forum", 41.8925, 12.4853, "sight", "Ruins", "Colosseo", 9, "Walk straight from the Colosseum into the heart of ancient Rome."),
    place("rm-palatine", "Palatine Hill", 41.8894, 12.4872, "sight", "Ruins", "Colosseo", 8, "Imperial palaces and quieter views over the Forum."),
    place("rm-arch-constantine", "Arch of Constantine", 41.8897, 12.4907, "sight", "Monument", "Colosseo", 6, "Free photo stop right beside the Colosseum."),
    place("rm-circus", "Circus Maximus", 41.8859, 12.4857, "sight", "Attraction", "Aventine", 6, "Grass bowl where chariot races once filled the valley."),
    place("rm-caracalla", "Baths of Caracalla", 41.8792, 12.4925, "sight", "Ruins", "Aventine", 7, "Huge brick ruins — quieter than the Forum circuit."),
    place("rm-mouth-truth", "Bocca della Verità", 41.8883, 12.4819, "sight", "Attraction", "Aventine", 6, "Quick photo at Santa Maria in Cosmedin after Circus Maximus."),
    place("rm-pyramid", "Pyramid of Cestius", 41.8765, 12.4808, "sight", "Monument", "Testaccio", 6, "Roman-era pyramid beside the Protestant Cemetery."),

    // ——— Centro Storico / Pantheon / Trevi ———
    place("rm-pantheon", "Pantheon", 41.8986, 12.4768, "sight", "Monument", "Centro Storico", 10, "Free dome visit — natural hub for the historic core."),
    place("rm-trevi", "Trevi Fountain", 41.9009, 12.4833, "sight", "Attraction", "Trevi", 9, "Go early or late; still worth the short detour."),
    place("rm-navona", "Piazza Navona", 41.8992, 12.4731, "sight", "Attraction", "Centro Storico", 8, "Bernini fountains and cafe terraces between the Pantheon and Campo."),
    place("rm-coronari", "Via dei Coronari stroll", 41.9005, 12.4695, "shopping", "Market", "Centro Storico", 6, "Antique shops and quiet lanes north of Piazza Navona."),
    place("rm-minerva", "Santa Maria sopra Minerva", 41.898, 12.4765, "sight", "Monument", "Centro Storico", 6, "Gothic church with Bernini's elephant by the Pantheon."),
    place("rm-santignazio", "Church of Sant'Ignazio", 41.899, 12.4797, "sight", "Monument", "Centro Storico", 6, "Trompe-l'œil ceiling dome — free and quick."),
    place("rm-campo", "Campo de' Fiori market", 41.8956, 12.4722, "shopping", "Market", "Centro Storico", 7, "Morning market square before the historic lanes fill up."),
    place("rm-torre-argentina", "Largo di Torre Argentina", 41.8956, 12.4768, "sight", "Ruins", "Centro Storico", 6, "Temple ruins at tram stops between Pantheon and Jewish Ghetto."),
    place("rm-piazza-farnese", "Piazza Farnese", 41.8945, 12.4708, "sight", "Attraction", "Centro Storico", 6, "Palazzo Farnese fountains — calm square off Campo de' Fiori."),
    place("rm-venezia", "Vittoriano & Piazza Venezia", 41.8947, 12.4826, "sight", "Monument", "Centro Storico", 7, "White monument stairs linking ancient Rome to Via del Corso."),

    // ——— Spanish Steps / Via del Corso ———
    place("rm-spagna", "Spanish Steps", 41.9058, 12.4823, "sight", "Attraction", "Tridente", 8, "Keats-Shelley House and designer streets above the steps."),
    place("rm-corso", "Via del Corso shopping", 41.9035, 12.4805, "shopping", "Market", "Tridente", 6, "Main artery between Piazza Venezia and Piazza del Popolo."),
    place("rm-popolo", "Piazza del Popolo", 41.9106, 12.4762, "sight", "Attraction", "Tridente", 7, "Twin churches and the gate into Villa Borghese."),
    place("rm-keats", "Keats-Shelley House", 41.9056, 12.4825, "museum", "Museum", "Tridente", 5, "Small literary museum beside the Spanish Steps."),
    place("rm-ara-pacis", "Ara Pacis Museum", 41.9061, 12.4759, "museum", "Museum", "Tridente", 7, "Augustus altar in a Richard Meier pavilion on the Tiber."),

    // ——— Jewish Ghetto / Tiber Island ———
    place("rm-ghetto", "Jewish Ghetto", 41.8922, 12.4775, "sight", "Attraction", "Ghetto", 7, "Portico d'Ottavia, kosher bakeries, and Tiber-side lanes."),
    place("rm-synagogue", "Great Synagogue of Rome", 41.8915, 12.4788, "sight", "Monument", "Ghetto", 6, "Domed synagogue by the river — museum visits by appointment."),
    place("rm-isola", "Isola Tiberina", 41.8906, 12.4773, "sight", "Attraction", "Trastevere", 6, "Bridge-linked island between Trastevere and the Ghetto."),

    // ——— Monti ———
    place("rm-monti", "Monti neighborhood lanes", 41.8942, 12.4895, "sight", "Attraction", "Monti", 7, "Vintage shops and wine bars between the Colosseum and Termini."),
    place("rm-san-clemente", "Basilica di San Clemente", 41.8894, 12.4975, "sight", "Monument", "Monti", 8, "Layered church with Roman ruins below — strong rainy-day pick."),
    place("rm-mercato-monti", "Mercato Monti", 41.8948, 12.4952, "shopping", "Market", "Monti", 6, "Weekend design-and-vintage market near the Colosseum."),

    // ——— Vatican / Prati ———
    place("rm-vatican", "St. Peter's Basilica", 41.9022, 12.4539, "sight", "Monument", "Vatican", 10, "Dress for church rules; dome climb if your legs are willing."),
    place("rm-vatican-museums", "Vatican Museums", 41.9065, 12.4536, "museum", "Museum", "Vatican", 10, "Sistine Chapel payoff — book early entry or late slot.", { flags: ["ticket", "early", "touristy"] }),
    place("rm-stpeters-square", "St. Peter's Square", 41.9022, 12.4567, "sight", "Attraction", "Vatican", 8, "Bernini colonnade — best at opening or after museums close."),
    place("rm-castel", "Castel Sant'Angelo", 41.9031, 12.4663, "sight", "Castle", "Prati", 8, "Hadrian's tomb turned papal fortress on the Tiber."),
    place("rm-borgo", "Borgo Pio walk", 41.9035, 12.4595, "sight", "Attraction", "Vatican", 5, "Pilgrim streets between St. Peter's and Castel Sant'Angelo."),
    place("rm-prati", "Via Cola di Rienzo shopping", 41.9075, 12.4645, "shopping", "Market", "Prati", 6, "Practical shopping strip in residential Prati."),

    // ——— Trastevere ———
    place("rm-trastevere", "Santa Maria in Trastevere", 41.8895, 12.4697, "sight", "Monument", "Trastevere", 8, "Mosaic basilica heart of Trastevere evenings."),
    place("rm-gianicolo", "Gianicolo viewpoint", 41.8915, 12.4614, "sight", "Viewpoint", "Trastevere", 8, "Hilltop panorama — sunset cannon optional."),
    place("rm-farnesina", "Villa Farnesina", 41.8932, 12.4678, "museum", "Museum", "Trastevere", 7, "Raphael frescoes in a riverside Renaissance villa."),
    place("rm-trastevere-lanes", "Trastevere evening lanes", 41.889, 12.471, "sight", "Attraction", "Trastevere", 7, "Cobblestones, trattorie, and late aperitivo energy."),

    // ——— Capitol / Imperial Fora ———
    place("rm-capitoline", "Capitoline Museums", 41.8931, 12.4828, "museum", "Museum", "Campidoglio", 8, "Michelangelo piazza plus Marcus Aurelius and view terrace."),
    place("rm-imperial-fora", "Imperial Fora walk", 41.8955, 12.4865, "sight", "Ruins", "Campidoglio", 7, "Trajan's Column and forum ruins along Via dei Fori Imperiali."),
    place("rm-vittoriano-terrace", "Vittoriano panoramic terrace", 41.895, 12.4829, "sight", "Viewpoint", "Campidoglio", 7, "Paid lift for one of the clearest Forum views."),
    place("rm-capitoline-wolf", "Piazza del Campidoglio", 41.8933, 12.4829, "sight", "Attraction", "Campidoglio", 7, "Michelangelo-designed square above the Roman Forum."),

    // ——— Borghese / Pincio ———
    place("rm-borghese", "Villa Borghese", 41.9142, 12.4922, "nature", "Park", "Flaminio", 8, "Rowboats, shade, and museums in Rome's central park."),
    place("rm-galleria-borghese", "Galleria Borghese", 41.9142, 12.4925, "museum", "Museum", "Flaminio", 9, "Bernini and Caravaggio in timed two-hour slots — reserve ahead."),
    place("rm-pincio", "Pincio Terrace", 41.9108, 12.4795, "sight", "Viewpoint", "Tridente", 8, "Sunset view over Piazza del Popolo."),
    place("rm-maxxi", "MAXXI Museum", 41.9265, 12.4635, "museum", "Museum", "Flaminio", 7, "Zaha Hadid contemporary art north of the center."),
    place("rm-auditorium", "Parco della Musica", 41.9295, 12.4755, "sight", "Attraction", "Flaminio", 6, "Renzo Piano music complex for concerts and architecture fans."),

    // ——— Museums / galleries ———
    place("rm-pamphilj", "Doria Pamphilj Gallery", 41.8975, 12.4812, "museum", "Museum", "Centro Storico", 7, "Private palace collection still lived in by the family."),
    place("rm-altemps", "Palazzo Altemps", 41.9012, 12.4728, "museum", "Museum", "Centro Storico", 7, "Classical sculpture museum a short walk from Piazza Navona."),
    place("rm-massimo", "Palazzo Massimo (National Roman Museum)", 41.9015, 12.4982, "museum", "Museum", "Esquilino", 8, "Mosaics, frescoed rooms, and imperial portraits near Termini."),
    place("rm-montemartini", "Centrale Montemartini", 41.8585, 12.4785, "museum", "Museum", "Ostiense", 7, "Roman statues inside a decommissioned power plant."),

    // ——— Esquilino / Termini ———
    place("rm-maggiore", "Basilica di Santa Maria Maggiore", 41.8974, 12.4987, "sight", "Monument", "Esquilino", 8, "Mosaic-filled papal basilica above Termini."),
    place("rm-moses", "San Pietro in Vincoli", 41.8923, 12.4932, "sight", "Monument", "Esquilino", 7, "Michelangelo's Moses statue near the Colosseum slope."),
    place("rm-prassede", "Santa Prassede", 41.8955, 12.4988, "sight", "Monument", "Esquilino", 6, "Byzantine mosaics in a quiet church behind Santa Maria Maggiore."),
    place("rm-termini", "Termini station area", 41.9009, 12.5015, "sight", "Attraction", "Termini", 5, "Transit hub — useful orientation for arrivals and day trips."),

    // ——— Testaccio / Ostiense ———
    place("rm-testaccio-market", "Mercato Testaccio", 41.8785, 12.4745, "shopping", "Market", "Testaccio", 7, "Local lunch counters in a foodie neighborhood."),
    place("rm-protestant-cemetery", "Protestant Cemetery", 41.8768, 12.4795, "nature", "Garden", "Testaccio", 6, "Keats and Shelley graves in a peaceful garden."),
    place("rm-eur", "Palazzo della Civiltà Italiana", 41.8365, 12.4655, "sight", "Monument", "EUR", 6, "Fendi HQ in the Fascist-era Square Colosseum — metro south."),

    // ——— Appian Way / catacombs ———
    place("rm-appian", "Appian Way (Via Appia Antica)", 41.8595, 12.5135, "nature", "Park", "Appia", 7, "Ancient basalt road for bike rental or a long walk."),
    place("rm-catacombs-callisto", "Catacombs of San Callisto", 41.8588, 12.5095, "sight", "Attraction", "Appia", 7, "Underground Christian burials — guided visits on the Appian Way."),
    place("rm-aqueduct-park", "Parco degli Acquedotti", 41.8515, 12.5625, "nature", "Park", "Appia", 7, "Aqueduct arches in open fields — best with bikes or a taxi."),

    // ——— Cafes ———
    place("rm-eustachio", "Sant'Eustachio Il Caffè", 41.8984, 12.4744, "cafe", "Cafe", "Centro Storico", 7, "Famous gran caffè near the Pantheon.", { cuisine: "coffee" }),
    place("rm-tazza", "Tazza d'Oro", 41.8995, 12.4755, "cafe", "Cafe", "Centro Storico", 7, "Another classic Pantheon-area espresso bar.", { cuisine: "coffee" }),
    place("rm-giolitti", "Giolitti", 41.9012, 12.4785, "cafe", "Cafe", "Centro Storico", 7, "Historic gelato and pastry institution.", { cuisine: "ice_cream pastry" }),
    place("rm-gelato-teatro", "Gelateria del Teatro", 41.8998, 12.4702, "cafe", "Cafe", "Centro Storico", 7, "Strong gelato between Piazza Navona lanes.", { cuisine: "ice_cream" }),
    place("rm-roscioli-caffe", "Roscioli Caffè Pasticceria", 41.8945, 12.4742, "cafe", "Cafe", "Centro Storico", 6, "Pastries and coffee before the full Roscioli dinner.", { cuisine: "pastry coffee" }),

    // ——— Food ———
    place("rm-roscioli", "Roscioli Salumeria con Cucina", 41.8947, 12.4738, "food", "Restaurant", "Centro Storico", 8, "Roman pasta and cheese room — book dinner.", { cuisine: "italian roman" }),
    place("rm-armando", "Armando al Pantheon", 41.8989, 12.4762, "food", "Restaurant", "Centro Storico", 8, "Classic carbonara and cacio e pepe beside the Pantheon.", { cuisine: "italian roman" }),
    place("rm-enzo", "Da Enzo al 29", 41.888, 12.4752, "food", "Restaurant", "Trastevere", 8, "Trastevere trattoria — go early or reserve.", { cuisine: "italian roman" }),
    place("rm-felice", "Felice a Testaccio", 41.8775, 12.4765, "food", "Restaurant", "Testaccio", 8, "Cacio e pepe tossed tableside in Testaccio.", { cuisine: "italian roman" }),
    place("rm-perilli", "Perilli", 41.8778, 12.4742, "food", "Restaurant", "Testaccio", 7, "Old-school Testaccio trattoria for amatriciana.", { cuisine: "italian roman" }),
    place("rm-flavio", "Flavio al Velavevodetto", 41.8772, 12.4758, "food", "Restaurant", "Testaccio", 7, "Quarry-wall trattoria built into the Testaccio hill.", { cuisine: "italian roman" }),
    place("rm-supplizio", "Supplizio", 41.8968, 12.4708, "food", "Quick meal", "Centro Storico", 6, "Supplì and fried Roman street-food counter.", { cuisine: "street_food italian" }),
    place("rm-pizzarium", "Pizzarium Bonci", 41.9065, 12.4598, "food", "Quick meal", "Vatican", 7, "Gabriele Bonci pizza al taglio near Vatican museums.", { cuisine: "pizza italian" }),
    place("rm-trapizzino", "Trapizzino", 41.8895, 12.4685, "food", "Quick meal", "Trastevere", 7, "Stuffed pizza pockets — fast Trastevere lunch.", { cuisine: "street_food italian" }),
    place("rm-mercato-centrale", "Mercato Centrale Roma", 41.9015, 12.5012, "food", "Quick meal", "Termini", 6, "Food hall upstairs at Termini for arrivals and trains.", { cuisine: "market italian" }),
    place("rm-imago", "Imàgo (Hassler Roma)", 41.9065, 12.4835, "food", "Restaurant", "Tridente", 8, "Rooftop tasting menus above the Spanish Steps.", { cuisine: "italian fine_dining" }),
    place("rm-romolo", "Romolo al Sev", 41.8915, 12.5055, "food", "Restaurant", "San Giovanni", 7, "Traditional Roman plates southeast of the Colosseum.", { cuisine: "italian roman" }),
    place("rm-trattoria-monti", "Trattoria Monti", 41.8985, 12.5008, "food", "Restaurant", "Esquilino", 7, "Emilia-Roman influenced pasta near Santa Maria Maggiore.", { cuisine: "italian" }),
    place("rm-osteria-francescana-area", "Monti wine-bar dinner", 41.8945, 12.4902, "food", "Restaurant", "Monti", 6, "Natural wine and small plates after Colosseum days.", { cuisine: "italian european" }),
    place("rm-bonci-pizza", "Pinsa 'm po' Monti", 41.8938, 12.4915, "food", "Quick meal", "Monti", 6, "Roman pinsa slices between Monti boutiques.", { cuisine: "pizza italian" }),
    place("rm-jewish-fried", "Ba' Ghetto Fry", 41.892, 12.4772, "food", "Quick meal", "Ghetto", 7, "Jewish-Roman fried artichokes in the Ghetto.", { cuisine: "jewish italian" }),
    place("rm-veg", "Ops! Terrazza e Cucina", 41.9025, 12.4705, "food", "Restaurant", "Centro Storico", 6, "Plant-forward plates near Piazza Navona.", { cuisine: "vegetarian vegan" }),
    place("rm-seafood-prati", "Fuocolento", 41.9045, 12.4615, "food", "Restaurant", "Prati", 7, "Seafood trattoria after Castel Sant'Angelo walks.", { cuisine: "seafood italian" }),

    // ——— Nightlife ———
    place("rm-jerry", "Jerry Thomas Speakeasy", 41.8965, 12.4688, "nightlife", "Bar", "Centro Storico", 7, "Reservation-only cocktails behind an unmarked door."),
    place("rm-freni", "Freni e Frizioni", 41.8902, 12.4678, "nightlife", "Bar", "Trastevere", 7, "Aperitivo courtyard in a former garage."),
    place("rm-caffarelli", "Caffarelli terrace drinks", 41.8955, 12.483, "nightlife", "Bar", "Campidoglio", 6, "Campidoglio-side terrace bars with Forum views."),
    place("rm-monti-bars", "Monti evening bars", 41.894, 12.4892, "nightlife", "Bar", "Monti", 7, "Wine bars and spritz terraces around Via Urbana."),
    place("rm-testaccio-night", "Testaccio club strip", 41.8765, 12.4755, "nightlife", "Bar", "Testaccio", 6, "Late venues in the old slaughterhouse district."),
    place("rm-pigneto", "Pigneto neighborhood bars", 41.8885, 12.5185, "nightlife", "Bar", "Pigneto", 6, "Local east-Rome bar crawl away from tourist streams."),
    place("rm-auditorium-night", "Auditorium summer concerts", 41.9295, 12.4755, "nightlife", "Bar", "Flaminio", 6, "Outdoor gigs and drinks at Parco della Musica."),

    // ——— Stays ———
    place("rm-stay-pantheon", "Hotel del Senato area", 41.8988, 12.4765, "stay", "Hotel", "Centro Storico", 9, "Pantheon-facing base for walkable historic-core days."),
    place("rm-stay-albergo", "Albergo del Senato", 41.899, 12.4768, "stay", "Hotel", "Centro Storico", 8, "Classic rooms on Piazza della Rotonda."),
    place("rm-stay-navona", "Hotel Navona", 41.8981, 12.4735, "stay", "Hotel", "Centro Storico", 8, "Boutique stay between Navona and the Pantheon."),
    place("rm-stay-inn", "Inn at the Roman Forum", 41.8915, 12.4885, "stay", "Hotel", "Monti", 8, "Views toward the Forum from Monti's shoulder."),
    place("rm-stay-campo", "Hotel Campo de' Fiori", 41.8958, 12.4725, "stay", "Hotel", "Centro Storico", 7, "Rooftop terrace over the market square."),
    place("rm-stay-russie", "Hotel de Russie", 41.9065, 12.4775, "stay", "Hotel", "Tridente", 9, "Luxury garden hotel between Popolo and Spanish Steps."),
    place("rm-stay-spagna", "Hotel Scalinata di Spagna", 41.9055, 12.4828, "stay", "Hotel", "Tridente", 8, "Spanish Steps pocket for shopping days."),
    place("rm-stay-vatican", "Vatican View Hotel", 41.9045, 12.4585, "stay", "Hotel", "Vatican", 7, "Practical base for early museum mornings."),
    place("rm-stay-prati", "Prati Boutique Hotel", 41.9078, 12.4635, "stay", "Hotel", "Prati", 7, "Quieter residential nights near Castel Sant'Angelo."),
    place("rm-stay-trastevere", "Trastevere House", 41.8892, 12.4688, "stay", "Apartment", "Trastevere", 7, "Evenings in trattoria lanes without a hotel lobby."),
    place("rm-stay-trilussa", "Hotel Trilussa", 41.8898, 12.4708, "stay", "Hotel", "Trastevere", 7, "Small hotel in the heart of Trastevere."),
    place("rm-stay-beehive", "The Beehive", 41.9018, 12.5035, "stay", "Hostel", "Termini", 6, "Friendly budget stay with a good cafe near Termini."),
    place("rm-stay-yellow", "The Yellow Hostel", 41.9005, 12.5025, "stay", "Hostel", "Termini", 6, "Lively hostel steps from Termini."),
    place("rm-stay-romehello", "RomeHello Hostel", 41.8985, 12.4975, "stay", "Hostel", "Termini", 5, "Design hostel between Termini and Monti."),
    place("rm-stay-guest", "Roma Guest House", 41.8962, 12.4788, "stay", "Guest house", "Centro Storico", 6, "Small rooms close to the Ghetto and Pantheon."),
    place("rm-stay-monti-apt", "Monti Apartment", 41.8945, 12.4905, "stay", "Apartment", "Monti", 7, "Self-catering between Colosseum and Cavour metro."),
    place("rm-stay-testaccio", "Testaccio Apartment", 41.8778, 12.4748, "stay", "Apartment", "Testaccio", 6, "Local food-market mornings in Testaccio."),
    place("rm-stay-flaminio", "Flaminio Hotel", 41.9125, 12.4715, "stay", "Hotel", "Flaminio", 6, "North base for Borghese and MAXXI days."),
  ],
};