import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const lisbon: CityCatalog = {
  id: "lisbon",
  name: "Lisbon, Portugal",
  aliases: ["lisbon", "lisboa"],
  center: { lat: 38.7223, lon: -9.1393 },
  places: [
    place("lx-castle", "Castelo de São Jorge", 38.7139, -9.1335, "sight", "Castle", "Alfama", 9, "Hilltop castle with the classic city view."),
    place("lx-se", "Sé de Lisboa", 38.7098, -9.1327, "sight", "Monument", "Alfama", 8, "The city's old cathedral, right below the castle."),
    place("lx-senhora", "Miradouro da Senhora do Monte", 38.719, -9.1328, "sight", "Viewpoint", "Graça", 8, "Wide viewpoint over Alfama and the river."),
    place("lx-comercio", "Praça do Comércio", 38.7075, -9.1365, "sight", "Attraction", "Baixa", 8, "Grand waterfront square and an easy orientation point."),
    place("lx-santa", "Miradouro de Santa Catarina", 38.7096, -9.1484, "sight", "Viewpoint", "Chiado", 7, "Relaxed viewpoint near Chiado and Bairro Alto."),
    place("lx-jeronimos", "Mosteiro dos Jerónimos", 38.6978, -9.2067, "sight", "Monument", "Belém", 10, "Lisbon's most famous monastery and a must for history."),
    place("lx-belem", "Torre de Belém", 38.6916, -9.216, "sight", "Attraction", "Belém", 10, "Iconic riverside tower a short walk from the monastery."),
    place("lx-park", "Parque Eduardo VII", 38.7282, -9.1527, "nature", "Park", "Avenida", 7, "Big sloping park above the city center."),
    place("lx-estrela", "Jardim da Estrela", 38.7151, -9.1597, "nature", "Garden", "Estrela", 6, "Leafy garden for a slower afternoon."),
    place("lx-gulbenkian", "Museu Calouste Gulbenkian", 38.7374, -9.1538, "museum", "Museum", "São Sebastião", 9, "Excellent collection in a calm northern pocket."),
    place("lx-maat", "MAAT", 38.696, -9.1936, "museum", "Museum", "Belém", 8, "Contemporary art and architecture by the river."),
    place("lx-azulejo", "Museu Nacional do Azulejo", 38.7247, -9.1127, "museum", "Museum", "Xabregas", 8, "Tile museum in a former convent."),
    place("lx-timeout", "Time Out Market", 38.707, -9.1458, "shopping", "Market", "Cais do Sodré", 7, "Food hall with many local counters in one place."),
    place("lx-factory", "LX Factory", 38.7035, -9.1788, "shopping", "Market", "Alcântara", 6, "Shops, cafes, and warehouses in an old industrial yard."),

    place("lx-pasteis", "Pastéis de Belém", 38.6975, -9.2032, "cafe", "Cafe", "Belém", 8, "The classic custard tart stop beside the monastery.", { cuisine: "pastry" }),
    place("lx-brasileira", "A Brasileira", 38.7107, -9.1422, "cafe", "Cafe", "Chiado", 7, "Historic cafe for coffee in the center.", { cuisine: "coffee" }),
    place("lx-ramiro", "Cervejaria Ramiro", 38.7207, -9.1402, "food", "Restaurant", "Intendente", 8, "Famous seafood place near the center.", { cuisine: "seafood" }),
    place("lx-prata", "Prata da Baixa", 38.7102, -9.1378, "food", "Restaurant", "Baixa", 6, "Straightforward Portuguese plates in Baixa.", { cuisine: "portuguese" }),
    place("lx-farmacia", "Pharmacia Food & Friends", 38.7105, -9.1431, "food", "Restaurant", "Chiado", 6, "Stylish lunch stop near Chiado."),
    place("lx-bicos", "Solar dos Bicos", 38.7101, -9.1331, "food", "Restaurant", "Alfama", 5, "Local cooking beside the cathedral area.", { cuisine: "portuguese" }),
    place("lx-margem", "À Margem", 38.6955, -9.2075, "food", "Restaurant", "Belém", 6, "River-facing lunch near Belém."),
    place("lx-gulbenkian-cafe", "Café Gulbenkian", 38.737, -9.1542, "cafe", "Cafe", "São Sebastião", 5, "Easy cafe beside the museum gardens."),

    place("lx-pensao", "Pensão Amor", 38.7068, -9.1446, "nightlife", "Bar", "Cais do Sodré", 6, "Late-night bar on the Pink Street strip."),
    place("lx-parkbar", "Park Bar", 38.7109, -9.1489, "nightlife", "Bar", "Bairro Alto", 7, "Rooftop drinks above Bairro Alto."),
    place("lx-lux", "Lux Frágil", 38.724, -9.1135, "nightlife", "Bar", "Santa Apolónia", 7, "Well-known riverside club and late bar."),

    place("lx-hotel-baixa", "Hotel da Baixa", 38.7124, -9.1388, "stay", "Hotel", "Baixa", 7, "Central base for walking days in Baixa and Chiado."),
    place("lx-figueira", "Hotel Figueira", 38.7138, -9.1398, "stay", "Hotel", "Baixa", 6, "Handy hotel beside Rossio and Figueira square."),
    place("lx-hostel", "Lisbon Destination Hostel", 38.7145, -9.1405, "stay", "Hostel", "Rossio", 5, "Budget stay above Rossio station."),
    place("lx-alfama-hostel", "Alfama Patio Hostel", 38.7118, -9.1308, "stay", "Guest house", "Alfama", 5, "Small stay inside the Alfama lanes."),
    place("lx-chiado-apt", "Chiado Apartments", 38.7104, -9.1436, "stay", "Apartment", "Chiado", 6, "Apartment-style base near shops and cafes."),
  ],
};
