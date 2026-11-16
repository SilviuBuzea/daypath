import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const venice: CityCatalog = {
  id: "venice",
  name: "Venice, Italy",
  aliases: ["venice", "venezia"],
  center: { lat: 45.4408, lon: 12.3155 },
  places: [
    // ——— San Marco ———
    place("ve-san-marco", "Piazza San Marco", 45.4341, 12.3388, "sight", "Attraction", "San Marco", 10, "Main square — go at opening or late evening to dodge the crush.", { flags: ["early", "touristy"] }),
    place("ve-basilica", "St Mark's Basilica", 45.4345, 12.3397, "sight", "Monument", "San Marco", 10, "Golden mosaics — reserve skip-the-line entry online.", { flags: ["ticket", "early", "touristy"] }),
    place("ve-campanile", "Campanile di San Marco", 45.434, 12.339, "sight", "Viewpoint", "San Marco", 9, "Elevator to lagoon and rooftop views over the piazza."),
    place("ve-doge", "Doge's Palace", 45.4338, 12.3402, "museum", "Museum", "San Marco", 10, "Gothic seat of power with Bridge of Sighs circuit.", { flags: ["ticket", "touristy"] }),
    place("ve-sighs", "Bridge of Sighs", 45.4341, 12.3409, "sight", "Monument", "San Marco", 7, "Best photo from Ponte della Paglia on the waterfront."),
    place("ve-corrier", "Museo Correr", 45.4335, 12.3375, "museum", "Museum", "San Marco", 7, "Venetian history museum across Piazza San Marco."),
    place("ve-libreria", "Biblioteca Marciana exterior", 45.4332, 12.3392, "sight", "Monument", "San Marco", 6, "Sansovino library facade on the piazzetta."),
    place("ve-clock", "Torre dell'Orologio", 45.4346, 12.3386, "sight", "Monument", "San Marco", 6, "Astronomical clock tower on the north side of the square."),
    place("ve-fenice", "Teatro La Fenice", 45.4336, 12.334, "sight", "Monument", "San Marco", 7, "Rebuilt opera house — tour if you miss a performance."),
    place("ve-scala-bovolo", "Scala Contarini del Bovolo", 45.4348, 12.3335, "sight", "Viewpoint", "San Marco", 6, "Spiral staircase tower with a quiet city panorama."),
    place("ve-rialto", "Rialto Bridge", 45.438, 12.3358, "sight", "Monument", "San Marco", 9, "Stone arch over the Grand Canal — dawn photos are worth it.", { flags: ["early", "touristy"] }),
    place("ve-rialto-market", "Rialto Market", 45.4392, 12.3345, "shopping", "Market", "San Polo", 8, "Fish and produce stalls mornings only — pair with cicchetti."),
    place("ve-acqua", "Acqua Alta bookshop", 45.4375, 12.3405, "shopping", "Market", "Castello", 6, "Boats and bathtubs full of books — quirky browse stop."),

    // ——— Dorsoduro ———
    place("ve-accademia", "Gallerie dell'Accademia", 45.4312, 12.3282, "museum", "Museum", "Dorsoduro", 9, "Venetian painting from Bellini to Tiepolo."),
    place("ve-peggy", "Peggy Guggenheim Collection", 45.4309, 12.3315, "museum", "Museum", "Dorsoduro", 9, "Modern art in Peggy's Grand Canal palazzo."),
    place("ve-salute", "Basilica di Santa Maria della Salute", 45.4308, 12.3345, "sight", "Monument", "Dorsoduro", 8, "Baroque dome at the mouth of the Grand Canal."),
    place("ve-zattere", "Zattere waterfront walk", 45.4295, 12.3265, "sight", "Attraction", "Dorsoduro", 8, "Sunny promenade facing Giudecca with gelato stops."),
    place("ve-punto-dogana", "Punta della Dogana", 45.4305, 12.3365, "museum", "Museum", "Dorsoduro", 7, "Contemporary art in the old customs house tip."),
    place("ve-ca-rezzonico", "Ca' Rezzonico", 45.4335, 12.3268, "museum", "Museum", "Dorsoduro", 7, "18th-century Venetian life in a Grand Canal palace."),
    place("ve-squero", "Squero di San Trovaso", 45.4305, 12.3255, "sight", "Attraction", "Dorsoduro", 6, "Working gondola workshop — view from the bridge."),
    place("ve-campo-santa-margherita", "Campo Santa Margherita", 45.4338, 12.3235, "sight", "Attraction", "Dorsoduro", 7, "Student square for cicchetti and evening buzz."),
    place("ve-gesuati", "Gesuati church (Zattere)", 45.4292, 12.3275, "sight", "Monument", "Dorsoduro", 5, "Tiepolo ceilings along the sunny fondamenta."),

    // ——— Cannaregio ———
    place("ve-ghetto", "Jewish Ghetto of Venice", 45.4452, 12.3265, "sight", "Attraction", "Cannaregio", 8, "Europe's first ghetto — synagogues and quiet campi."),
    place("ve-jewish-museum", "Jewish Museum of Venice", 45.4453, 12.3268, "museum", "Museum", "Cannaregio", 7, "Synagogue tours from the museum desk."),
    place("ve-madonna-orto", "Madonna dell'Orto", 45.4465, 12.3325, "sight", "Monument", "Cannaregio", 7, "Tintoretto's parish church in a quieter north pocket."),
    place("ve-fondamente-nove", "Fondamente Nove", 45.4435, 12.3405, "sight", "Attraction", "Cannaregio", 7, "Lagoon vaporetto quay for Murano and cemetery island."),
    place("ve-ca-doro", "Ca' d'Oro", 45.4408, 12.3352, "museum", "Museum", "Cannaregio", 7, "Gothic Grand Canal facade with Franchetti gallery."),
    place("ve-strada-nova", "Strada Nova stroll", 45.4415, 12.3345, "shopping", "Market", "Cannaregio", 5, "Busy spine of shops between station and Rialto."),
    place("ve-misericordia", "Misericordia canal walk", 45.4445, 12.3315, "sight", "Attraction", "Cannaregio", 6, "Quiet fondamenta away from San Marco crowds."),
    place("ve-santialvise", "Sant'Alvise & north canals", 45.4475, 12.3285, "sight", "Attraction", "Cannaregio", 5, "Sparse tourist traffic and local laundry lines."),

    // ——— Castello ———
    place("ve-santi-giovanni", "Santi Giovanni e Paolo", 45.4392, 12.3415, "sight", "Monument", "Castello", 7, "Brick Gothic church of doge tombs."),
    place("ve-arsenal", "Arsenale gates", 45.4345, 12.3505, "sight", "Monument", "Castello", 7, "Historic shipyard lions — Biennale grounds beyond."),
    place("ve-biennale", "Biennale Gardens (Giardini)", 45.4285, 12.3575, "nature", "Park", "Castello", 7, "National pavilions and shade at Venice's east tip."),
    place("ve-san-pietro", "San Pietro di Castello", 45.4345, 12.3595, "sight", "Monument", "Castello", 5, "Former cathedral on a quiet island-like tip."),
    place("ve-via-garibaldi", "Via Garibaldi", 45.4315, 12.3555, "shopping", "Market", "Castello", 6, "Local shopping street with market stalls and bars."),
    place("ve-scuola-san-giorgio", "Scuola Dalmata di San Giorgio", 45.4355, 12.3475, "museum", "Museum", "Castello", 6, "Carpaccio cycle in a small scuola."),
    place("ve-riva", "Riva degli Schiavoni", 45.4335, 12.3455, "sight", "Attraction", "Castello", 7, "Waterfront walk from San Marco toward the Arsenale."),

    // ——— San Polo / Santa Croce ———
    place("ve-frari", "Basilica dei Frari", 45.4372, 12.326, "sight", "Monument", "San Polo", 8, "Titian Assumption and wooden choir in a huge Franciscan church."),
    place("ve-scuola-rocco", "Scuola Grande di San Rocco", 45.4365, 12.3252, "museum", "Museum", "San Polo", 9, "Tintoretto's masterpiece cycle — dim light, big impact."),
    place("ve-campo-san-polo", "Campo San Polo", 45.4375, 12.3295, "sight", "Attraction", "San Polo", 6, "One of Venice's largest squares between Rialto and Frari."),
    place("ve-rialto-fish", "Pescheria arches", 45.4395, 12.3352, "sight", "Attraction", "San Polo", 6, "Gothic fish-market loggia on the Grand Canal."),
    place("ve-tolentini", "Tolentini & Papadopoli gardens", 45.4385, 12.3195, "nature", "Garden", "Santa Croce", 5, "Green pocket near the transport hub."),

    // ——— Grand Canal / transport ———
    place("ve-grand-canal", "Grand Canal vaporetto ride", 45.4375, 12.3325, "sight", "Attraction", "San Marco", 9, "Line 1 from Piazzale Roma to San Marco is the classic parade."),
    place("ve-rialto-market-bridge", "Ponte di Rialto sunset", 45.438, 12.3358, "sight", "Viewpoint", "San Polo", 7, "Crowded but iconic canal light at dusk."),
    place("ve-traghetto", "Traghetto gondola cross", 45.4365, 12.3325, "sight", "Attraction", "San Marco", 6, "Cheap standing gondola ferry across the Grand Canal."),
    place("ve-piazzale-roma", "Piazzale Roma", 45.4378, 12.3185, "sight", "Attraction", "Santa Croce", 5, "Bus and parking gateway into car-free Venice."),
    place("ve-ferrovia", "Santa Lucia station view", 45.441, 12.3215, "sight", "Attraction", "Cannaregio", 5, "Step out of the station straight onto the Grand Canal."),

    // ——— Murano / Burano / day pockets ———
    place("ve-murano", "Murano glass furnaces", 45.4585, 12.3525, "sight", "Attraction", "Murano", 8, "Island of glassblowers — watch a demo then browse showrooms."),
    place("ve-murano-museum", "Museo del Vetro", 45.4575, 12.3565, "museum", "Museum", "Murano", 7, "Glass history in Palazzo Giustinian."),
    place("ve-murano-basilica", "Basilica dei Santi Maria e Donato", 45.4572, 12.3575, "sight", "Monument", "Murano", 6, "Byzantine mosaic floor on Murano's quiet side."),
    place("ve-burano", "Burano colorful houses", 45.4855, 12.4165, "sight", "Attraction", "Burano", 9, "Painted fishermen's houses — lace shops and photo lanes.", { flags: ["touristy"] }),
    place("ve-burano-lace", "Museo del Merletto", 45.4852, 12.4175, "museum", "Museum", "Burano", 6, "Lace museum on Burano's main square."),
    place("ve-torcello", "Torcello Basilica", 45.4985, 12.4185, "sight", "Monument", "Torcello", 7, "Byzantine mosaics on a near-empty lagoon island."),
    place("ve-san-michele", "San Michele cemetery island", 45.4485, 12.3475, "sight", "Monument", "San Michele", 6, "Cypress cemetery stop on the Murano vaporetto."),
    place("ve-lido", "Lido Beach", 45.41, 12.3675, "nature", "Park", "Lido", 7, "Sandy Adriatic beach — bike or bus from the vaporetto."),
    place("ve-giudecca", "Giudecca Redentore view", 45.4255, 12.3325, "sight", "Attraction", "Giudecca", 7, "Palladio church and quiet fondamenta facing Zattere."),
    place("ve-san-giorgio", "San Giorgio Maggiore", 45.4295, 12.3435, "sight", "Viewpoint", "San Giorgio", 8, "Palladio facade and elevator bell-tower facing San Marco."),

    // ——— Cafes ———
    place("ve-florian", "Caffè Florian", 45.4338, 12.3378, "cafe", "Cafe", "San Marco", 7, "Historic square cafe — pay for the orchestra and people-watching.", { cuisine: "coffee pastry" }),
    place("ve-quadri", "Caffè Quadri", 45.4342, 12.3382, "cafe", "Cafe", "San Marco", 6, "Rival historic cafe on the opposite arcade.", { cuisine: "coffee" }),
    place("ve-tonolo", "Pasticceria Tonolo", 45.4335, 12.3238, "cafe", "Cafe", "Dorsoduro", 7, "Beloved local pastry counter near Campo Santa Margherita.", { cuisine: "pastry coffee" }),
    place("ve-rosa-salva", "Rosa Salva", 45.4375, 12.3415, "cafe", "Cafe", "Castello", 6, "Classic Venetian pastry near Santi Giovanni e Paolo.", { cuisine: "pastry coffee" }),
    place("ve-gelato-nico", "Gelateria Nico", 45.4295, 12.3268, "cafe", "Cafe", "Dorsoduro", 7, "Gianduiotto cups on the Zattere waterfront.", { cuisine: "ice_cream" }),
    place("ve-suso", "Suso Gelatoteca", 45.4375, 12.3355, "cafe", "Cafe", "San Marco", 7, "Creative gelato near the Rialto Bridge.", { cuisine: "ice_cream" }),

    // ——— Food ———
    place("ve-alle-testiere", "Alle Testiere", 45.4365, 12.3405, "food", "Restaurant", "Castello", 8, "Tiny seafood restaurant — book far ahead.", { cuisine: "seafood venetian" }),
    place("ve-osteria-banca", "Osteria Bancogiro", 45.4385, 12.3355, "food", "Restaurant", "San Polo", 8, "Canal-side cicchetti and wine by the Rialto markets.", { cuisine: "venetian wine" }),
    place("ve-all-arco", "Cantina Do Mori", 45.4388, 12.3348, "food", "Quick meal", "San Polo", 7, "Ancient bacaro for standing cicchetti near Rialto.", { cuisine: "cicchetti venetian" }),
    place("ve-al-timon", "Al Timon", 45.4455, 12.3285, "food", "Restaurant", "Cannaregio", 7, "Canal boat seating and cicchetti in Cannaregio.", { cuisine: "cicchetti venetian" }),
    place("ve-trattoria-madona", "Trattoria Madonna", 45.4365, 12.3345, "food", "Restaurant", "San Polo", 6, "Classic tourist-friendly Venetian pasta near Rialto.", { cuisine: "venetian italian" }),
    place("ve-rivani", "Osteria da Rico", 45.4315, 12.3255, "food", "Restaurant", "Dorsoduro", 7, "Neighborhood plates near Campo Santa Margherita.", { cuisine: "venetian" }),
    place("ve-local", "Local Restaurant", 45.4368, 12.3425, "food", "Restaurant", "Castello", 8, "Modern Venetian tasting menus in Castello.", { cuisine: "venetian fine_dining" }),
    place("ve-anice", "Anice Stellato", 45.4465, 12.3295, "food", "Restaurant", "Cannaregio", 7, "Reliable seafood trattoria on a northern canal.", { cuisine: "seafood venetian" }),
    place("ve-fritto", "Acqua e Mais", 45.4372, 12.3365, "food", "Quick meal", "San Polo", 6, "Fried seafood cones for walking lunches.", { cuisine: "street_food seafood" }),
    place("ve-pizza-ae", "Antico Forno", 45.4378, 12.3342, "food", "Quick meal", "San Polo", 5, "Pizza al taglio near the Rialto crush.", { cuisine: "pizza" }),
    place("ve-veg", "Vino Vero", 45.4458, 12.3315, "food", "Restaurant", "Cannaregio", 6, "Natural wine and small plates on Fondamenta della Misericordia.", { cuisine: "wine european" }),
    place("ve-giudecca-food", "Harry's Dolci", 45.4255, 12.3285, "food", "Restaurant", "Giudecca", 6, "Cipriani sweets and lagoon terrace on Giudecca.", { cuisine: "italian pastry" }),

    // ——— Nightlife ———
    place("ve-bacari-rialto", "Rialto bacari crawl", 45.4385, 12.3348, "nightlife", "Bar", "San Polo", 8, "Standing cicchetti bars around the market streets."),
    place("ve-margherita-night", "Campo Santa Margherita bars", 45.4338, 12.3235, "nightlife", "Bar", "Dorsoduro", 8, "Outdoor student energy until late."),
    place("ve-skyline", "Skyline Rooftop Bar (Hilton Molino Stucky)", 45.4275, 12.3205, "nightlife", "Bar", "Giudecca", 7, "Rooftop lagoon views from the converted mill."),
    place("ve-venice-jazz", "Venice Jazz Club", 45.4335, 12.3225, "nightlife", "Bar", "Dorsoduro", 6, "Intimate live sets near Campo Santa Margherita."),
    place("ve-osteria-night", "Cantine del Vino già Schiavi", 45.4305, 12.3258, "nightlife", "Bar", "Dorsoduro", 7, "Cicchetti counter on San Trovaso canal."),
    place("ve-fondamente", "Fondamente Nove sunset drinks", 45.4435, 12.3405, "nightlife", "Bar", "Cannaregio", 6, "Lagoon light and simple bars before Murano boats."),

    // ——— Stays ———
    place("ve-stay-danieli", "Hotel Danieli", 45.4335, 12.3425, "stay", "Hotel", "Castello", 9, "Historic palazzo on Riva degli Schiavoni."),
    place("ve-stay-gatti", "Hotel Gritti Palace", 45.4315, 12.3335, "stay", "Hotel", "San Marco", 9, "Grand Canal luxury facing the Salute."),
    place("ve-stay-aman", "Aman Venice", 45.4355, 12.3285, "stay", "Hotel", "San Polo", 9, "Palazzo elegance on the Grand Canal."),
    place("ve-stay-novecento", "Novecento Boutique Hotel", 45.4325, 12.3325, "stay", "Hotel", "San Marco", 8, "Small design rooms near Accademia Bridge."),
    place("ve-stay-dorsoduro", "Ca' Pisani Hotel", 45.4315, 12.3275, "stay", "Hotel", "Dorsoduro", 7, "Art Deco stay near Accademia and Zattere."),
    place("ve-stay-cannaregio", "Hotel Antiche Figure", 45.4425, 12.3285, "stay", "Hotel", "Cannaregio", 7, "Quiet canal hotel with garden courtyard."),
    place("ve-stay-castello", "Hotel Riva", 45.4345, 12.3465, "stay", "Hotel", "Castello", 6, "Simple rooms east of San Marco toward Arsenale."),
    place("ve-stay-generator", "Generator Venice", 45.4265, 12.3255, "stay", "Hostel", "Giudecca", 6, "Hostel in a former mill with lagoon ferries."),
    place("ve-stay-lido", "Hotel Ausonia & Hungaria", 45.4125, 12.3755, "stay", "Hotel", "Lido", 6, "Beach-base Liberty hotel for slower lagoon days."),
    place("ve-stay-bb", "Oltre il Giardino", 45.4375, 12.3245, "stay", "Guest house", "San Polo", 7, "Garden boutique near Frari and San Rocco."),
    place("ve-stay-apartment", "San Marco apartment", 45.4345, 12.3365, "stay", "Apartment", "San Marco", 7, "Self-catering steps from the piazza circuit."),
    place("ve-stay-murano", "Murano Palace", 45.4575, 12.3515, "stay", "Hotel", "Murano", 5, "Quieter island nights after glass workshops."),
  ],
};
