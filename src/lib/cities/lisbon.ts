import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const lisbon: CityCatalog = {
  id: "lisbon",
  name: "Lisbon, Portugal",
  aliases: ["lisbon", "lisboa"],
  center: { lat: 38.7223, lon: -9.1393 },
  places: [
    // ——— Alfama / Castelo ———
    place("lx-castle", "Castelo de São Jorge", 38.7139, -9.1335, "sight", "Castle", "Alfama", 10, "Hilltop castle with the classic city view."),
    place("lx-se", "Sé de Lisboa", 38.7098, -9.1327, "sight", "Monument", "Alfama", 8, "Romanesque cathedral below the castle."),
    place("lx-pantheon", "National Pantheon", 38.715, -9.1245, "sight", "Monument", "Alfama", 7, "Baroque dome and rooftop views in Alfama."),
    place("lx-santa-luzia", "Miradouro de Santa Luzia", 38.7115, -9.1305, "sight", "Viewpoint", "Alfama", 8, "Tile-lined terrace over Alfama rooftops."),
    place("lx-portas-sol", "Miradouro das Portas do Sol", 38.7118, -9.1302, "sight", "Viewpoint", "Alfama", 8, "Wide Alfama and river panorama."),
    place("lx-fado-museum", "Fado Museum", 38.7115, -9.1275, "museum", "Museum", "Alfama", 7, "Portuguese fado history by the river."),
    place("lx-sto-antonio", "Santo António Church", 38.71, -9.1335, "sight", "Monument", "Alfama", 5, "Church on St Anthony's birthplace."),
    place("lx-alfama-lanes", "Alfama lanes walk", 38.7125, -9.1295, "sight", "Attraction", "Alfama", 8, "Get lost in stair alleys and laundry lines."),

    // ——— Baixa / Chiado / Bairro Alto ———
    place("lx-comercio", "Praça do Comércio", 38.7075, -9.1365, "sight", "Attraction", "Baixa", 9, "Grand waterfront square under the arch."),
    place("lx-rua-augusta", "Rua Augusta Arch", 38.7085, -9.1368, "sight", "Viewpoint", "Baixa", 7, "Climb the arch for Baixa views."),
    place("lx-rossio", "Rossio Square", 38.7139, -9.1393, "sight", "Attraction", "Baixa", 7, "Wave-pattern plaza and theatres."),
    place("lx-santa", "Miradouro de Santa Catarina", 38.7096, -9.1484, "sight", "Viewpoint", "Chiado", 7, "Adamastor terrace near Bairro Alto."),
    place("lx-sao-pedro", "Miradouro de São Pedro de Alcântara", 38.7155, -9.1445, "sight", "Viewpoint", "Bairro Alto", 8, "Classic Baixa and castle view."),
    place("lx-carmo", "Carmo Convent", 38.712, -9.1405, "sight", "Monument", "Chiado", 8, "Open-air Gothic ruins from the 1755 quake."),
    place("lx-santa-justa", "Santa Justa Lift", 38.7122, -9.1394, "sight", "Attraction", "Baixa", 7, "Eiffel-style elevator to Carmo."),
    place("lx-chiado", "Chiado streets", 38.7107, -9.1425, "shopping", "Market", "Chiado", 7, "Bookshops, cafés, and theatres."),
    place("lx-bairro", "Bairro Alto lanes", 38.7135, -9.1455, "sight", "Attraction", "Bairro Alto", 7, "Daytime quiet, nighttime bars."),
    place("lx-basilica-estrela", "Basílica da Estrela", 38.7135, -9.1605, "sight", "Monument", "Estrela", 6, "Baroque basilica with dome climb."),
    place("lx-praca-figueira", "Praça da Figueira", 38.7135, -9.1385, "sight", "Attraction", "Baixa", 5, "Market square beside Rossio."),

    // ——— Graça / Mouraria ———
    place("lx-senhora", "Miradouro da Senhora do Monte", 38.719, -9.1328, "sight", "Viewpoint", "Graça", 9, "Wide viewpoint over Alfama and the river."),
    place("lx-graca", "Miradouro da Graça", 38.7165, -9.1315, "sight", "Viewpoint", "Graça", 8, "Pine-shaded terrace by Graça church."),
    place("lx-mouraria", "Mouraria lanes", 38.7155, -9.1355, "sight", "Attraction", "Mouraria", 6, "Multicultural streets below the castle."),
    place("lx-martim", "Martim Moniz Square", 38.7165, -9.1365, "sight", "Attraction", "Mouraria", 5, "Tram hub and fusion food stalls."),

    // ——— Belém ———
    place("lx-jeronimos", "Mosteiro dos Jerónimos", 38.6978, -9.2067, "sight", "Monument", "Belém", 10, "Manueline monastery — Lisbon's must-see."),
    place("lx-belem", "Torre de Belém", 38.6916, -9.216, "sight", "Attraction", "Belém", 10, "Iconic riverside tower."),
    place("lx-discoveries", "Padrão dos Descobrimentos", 38.6936, -9.2057, "sight", "Monument", "Belém", 8, "Ship-prow monument to the Age of Discovery."),
    place("lx-maat", "MAAT", 38.696, -9.1936, "museum", "Museum", "Belém", 8, "Contemporary art and architecture by the river."),
    place("lx-coach", "National Coach Museum", 38.6975, -9.1995, "museum", "Museum", "Belém", 7, "Royal coaches in a modern hall."),
    place("lx-belem-palace", "Belém Palace gardens", 38.6975, -9.2105, "nature", "Garden", "Belém", 5, "Presidential palace exterior and gardens."),
    place("lx-maritime", "Maritime Museum", 38.6975, -9.2085, "museum", "Museum", "Belém", 6, "Naval history beside Jerónimos."),
    place("lx-ajuda", "Ajuda Palace", 38.7075, -9.1985, "sight", "Castle", "Ajuda", 6, "Neoclassical royal palace above Belém."),

    // ——— Parks / museums / other ———
    place("lx-park", "Parque Eduardo VII", 38.7282, -9.1527, "nature", "Park", "Avenida", 7, "Sloping park above Avenida da Liberdade."),
    place("lx-estrela", "Jardim da Estrela", 38.7151, -9.1597, "nature", "Garden", "Estrela", 7, "Leafy garden for a slower afternoon."),
    place("lx-gulbenkian", "Museu Calouste Gulbenkian", 38.7374, -9.1538, "museum", "Museum", "São Sebastião", 9, "World-class collection and gardens."),
    place("lx-azulejo", "Museu Nacional do Azulejo", 38.7247, -9.1127, "museum", "Museum", "Xabregas", 8, "Tile museum in a former convent."),
    place("lx-oriente", "Oceanário de Lisboa", 38.761, -9.094, "sight", "Attraction", "Parque das Nações", 8, "World-class aquarium at Expo site."),
    place("lx-vasco", "Vasco da Gama Bridge viewpoint", 38.76, -9.09, "sight", "Viewpoint", "Parque das Nações", 5, "Long bridge views from the park."),
    place("lx-lx-factory", "LX Factory", 38.7035, -9.1788, "shopping", "Market", "Alcântara", 7, "Shops, cafés, and warehouses in an industrial yard."),
    place("lx-timeout", "Time Out Market", 38.707, -9.1458, "shopping", "Market", "Cais do Sodré", 8, "Food hall with many local counters."),
    place("lx-pink", "Pink Street", 38.7068, -9.1445, "sight", "Attraction", "Cais do Sodré", 6, "Painted nightlife street by day."),
    place("lx-ribeira", "Ribeira Market exterior", 38.707, -9.1455, "sight", "Attraction", "Cais do Sodré", 5, "Historic market shell housing Time Out."),
    place("lx-docas", "Docas de Santo Amaro", 38.6985, -9.1775, "sight", "Attraction", "Alcântara", 6, "Waterfront restaurants under the bridge."),
    place("lx-25abril", "25 de Abril Bridge viewpoint", 38.7, -9.177, "sight", "Viewpoint", "Alcântara", 6, "Golden Gate lookalike over the Tagus."),
    place("lx-berardo", "Museu Coleção Berardo", 38.6955, -9.2085, "museum", "Museum", "Belém", 7, "Modern art in the CCB complex."),
    place("lx-design", "MUDE Design Museum", 38.71, -9.1375, "museum", "Museum", "Baixa", 5, "Design museum on Rua Augusta."),
    place("lx-money", "Money Museum", 38.7085, -9.1385, "museum", "Museum", "Baixa", 5, "Interactive banking museum free entry."),
    place("lx-arcentes", "Arco do Cego / Avenida shops", 38.7355, -9.1425, "shopping", "Market", "Avenida", 4, "Retail along Avenida da Liberdade."),
    place("lx-feira", "Feira da Ladra", 38.7155, -9.124, "shopping", "Market", "Alfama", 6, "Tuesday/Saturday flea market by the Pantheon."),
    place("lx-tram28", "Tram 28 route highlight", 38.7145, -9.1325, "sight", "Attraction", "Alfama", 7, "Iconic tram through hills — ride early."),
    place("lx-sintra-day", "Sintra day-trip station", 38.7975, -9.3885, "sight", "Attraction", "Sintra", 8, "Palaces and misty hills — train from Rossio."),
    place("lx-cascais", "Cascais waterfront", 38.697, -9.4215, "nature", "Park", "Cascais", 7, "Seaside town — train from Cais do Sodré."),
    place("lx-monsanto", "Monsanto Forest Park", 38.73, -9.19, "nature", "Park", "Monsanto", 6, "City forest for bikes and viewpoints."),
    place("lx-campo-ourigue", "Mercado de Campo de Ourique", 38.7175, -9.1655, "shopping", "Market", "Campo de Ourique", 6, "Neighbourhood food market hall."),

    // ——— Cafes ———
    place("lx-pasteis", "Pastéis de Belém", 38.6975, -9.2032, "cafe", "Cafe", "Belém", 9, "The classic custard tart stop beside the monastery.", { cuisine: "pastry" }),
    place("lx-brasileira", "A Brasileira", 38.7107, -9.1422, "cafe", "Cafe", "Chiado", 7, "Historic café with Pessoa statue outside.", { cuisine: "coffee" }),
    place("lx-gulbenkian-cafe", "Café Gulbenkian", 38.737, -9.1542, "cafe", "Cafe", "São Sebastião", 5, "Easy café beside the museum gardens.", { cuisine: "coffee" }),
    place("lx-fabrica", "Fábrica Coffee Roasters", 38.7155, -9.1455, "cafe", "Cafe", "Bairro Alto", 7, "Specialty roast near São Pedro miradouro.", { cuisine: "coffee" }),
    place("lx-copenhagen", "Copenhagen Coffee Lab", 38.71, -9.145, "cafe", "Cafe", "Chiado", 7, "Scandi-style specialty coffee.", { cuisine: "coffee" }),
    place("lx-milanese", "The Mill", 38.7135, -9.1485, "cafe", "Cafe", "Príncipe Real", 7, "Brunch and coffee in Príncipe Real.", { cuisine: "brunch coffee" }),
    place("lx-dear", "Dear Breakfast", 38.7125, -9.15, "cafe", "Cafe", "Príncipe Real", 6, "Instagram brunch spot.", { cuisine: "brunch" }),
    place("lx-nata", "Manteigaria", 38.7105, -9.1435, "cafe", "Cafe", "Chiado", 8, "Often-voted best pastel de nata in Chiado.", { cuisine: "pastry" }),

    // ——— Food ———
    place("lx-ramiro", "Cervejaria Ramiro", 38.7207, -9.1402, "food", "Restaurant", "Intendente", 9, "Famous seafood — queue or go early.", { cuisine: "seafood" }),
    place("lx-prata", "Prata da Baixa", 38.7102, -9.1378, "food", "Restaurant", "Baixa", 6, "Straightforward Portuguese plates in Baixa.", { cuisine: "portuguese" }),
    place("lx-farmacia", "Pharmacia Food & Friends", 38.7105, -9.1431, "food", "Restaurant", "Chiado", 6, "Stylish lunch in a former pharmacy.", { cuisine: "portuguese" }),
    place("lx-bicos", "Solar dos Bicos", 38.7101, -9.1331, "food", "Restaurant", "Alfama", 5, "Local cooking beside the cathedral.", { cuisine: "portuguese" }),
    place("lx-margem", "À Margem", 38.6955, -9.2075, "food", "Restaurant", "Belém", 7, "River-facing lunch near Belém.", { cuisine: "portuguese mediterranean" }),
    place("lx-timeout-food", "Time Out Market counters", 38.707, -9.1455, "food", "Quick meal", "Cais do Sodré", 8, "Sample many chefs under one roof.", { cuisine: "market portuguese" }),
    place("lx-cervejaria", "Cervejaria Trindade", 38.7125, -9.1425, "food", "Restaurant", "Chiado", 6, "Tile-lined beer hall near Chiado.", { cuisine: "portuguese" }),
    place("lx-a-cipreste", "A Cevicheria", 38.7155, -9.1475, "food", "Restaurant", "Príncipe Real", 7, "Peruvian ceviche under a giant octopus.", { cuisine: "peruvian seafood" }),
    place("lx-alma", "Alma", 38.71, -9.1455, "food", "Restaurant", "Chiado", 8, "Henrique Sá Pessoa tasting menus.", { cuisine: "portuguese" }),
    place("lx-pinocchio", "Pinóquio", 38.7135, -9.1395, "food", "Restaurant", "Baixa", 6, "Classic seafood near Rossio.", { cuisine: "seafood portuguese" }),
    place("lx-prego", "Café de São Bento / prego", 38.7145, -9.1555, "food", "Quick meal", "São Bento", 6, "Steak sandwich near Parliament.", { cuisine: "portuguese" }),
    place("lx-tio", "Ti-Natércia", 38.7135, -9.1285, "food", "Restaurant", "Alfama", 7, "Tiny home-style Alfama kitchen — cash.", { cuisine: "portuguese" }),
    place("lx-vegan", "Ao 26 Vegan Food Project", 38.7125, -9.14, "food", "Restaurant", "Baixa", 6, "Vegan Portuguese near Baixa.", { cuisine: "vegan vegetarian" }),
    place("lx-indian", "Indian Palace / break", 38.7165, -9.14, "food", "Restaurant", "Intendente", 4, "Non-Portuguese dinner near Intendente.", { cuisine: "indian" }),

    // ——— Nightlife ———
    place("lx-pensao", "Pensão Amor", 38.7068, -9.1446, "nightlife", "Bar", "Cais do Sodré", 7, "Late-night bar on Pink Street."),
    place("lx-parkbar", "Park Bar", 38.7109, -9.1489, "nightlife", "Bar", "Bairro Alto", 8, "Rooftop drinks above a parking garage."),
    place("lx-lux", "Lux Frágil", 38.724, -9.1135, "nightlife", "Club", "Santa Apolónia", 8, "Riverside club and late bar."),
    place("lx-musicbox", "Musicbox", 38.7065, -9.144, "nightlife", "Club", "Cais do Sodré", 7, "Live music and club nights under Pink Street."),
    place("lx-povos", "Povos / Bairro Alto bars", 38.7135, -9.1458, "nightlife", "Bar", "Bairro Alto", 7, "Bar-hop the narrow lanes."),
    place("lx-incognito", "Incógnito", 38.7125, -9.1485, "nightlife", "Club", "Bairro Alto", 6, "Unmarked indie dance club."),
    place("lx-topo", "Topo Chiado", 38.712, -9.1405, "nightlife", "Bar", "Chiado", 7, "Rooftop cocktails by Carmo ruins."),

    // ——— Stays ———
    place("lx-hotel-baixa", "Hotel da Baixa", 38.7124, -9.1388, "stay", "Hotel", "Baixa", 7, "Central base for walking Baixa and Chiado."),
    place("lx-figueira", "Hotel Figueira", 38.7138, -9.1398, "stay", "Hotel", "Baixa", 6, "Handy hotel beside Rossio and Figueira."),
    place("lx-hostel", "Lisbon Destination Hostel", 38.7145, -9.1405, "stay", "Hostel", "Rossio", 6, "Budget stay above Rossio station."),
    place("lx-alfama-hostel", "Alfama Patio Hostel", 38.7118, -9.1308, "stay", "Hostel", "Alfama", 6, "Small stay inside Alfama lanes."),
    place("lx-chiado-apt", "Chiado Apartments", 38.7104, -9.1436, "stay", "Apartment", "Chiado", 7, "Apartment base near shops and cafés."),
    place("lx-memmo", "Memmo Alfama", 38.7115, -9.1295, "stay", "Hotel", "Alfama", 8, "Design hotel with terrace over Alfama."),
    place("lx-corrigedor", "Corpo Santo Lisbon Historical Hotel", 38.7075, -9.14, "stay", "Hotel", "Baixa", 8, "Historic luxury near Praça do Comércio."),
    place("lx-independente", "The Independente Hostel & Suites", 38.7155, -9.1445, "stay", "Hostel", "Bairro Alto", 7, "Social stay by São Pedro miradouro."),
  ],
};
