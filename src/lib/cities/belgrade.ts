import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const belgrade: CityCatalog = {
  id: "belgrade",
  name: "Belgrade, Serbia",
  aliases: ["belgrade", "beograd", "београд"],
  center: { lat: 44.7866, lon: 20.4489 },
  places: [
    // ——— Kalemegdan / Stari Grad ———
    place("bel-kalemegdan", "Kalemegdan Fortress", 44.8232, 20.4504, "sight", "Castle", "Stari Grad", 10, "Hilltop fortress at the Sava–Danube confluence — Belgrade's icon."),
    place("bel-victor", "Pobednik (Victor) statue", 44.8235, 20.4485, "sight", "Monument", "Kalemegdan", 8, "Symbolic bronze victor overlooking the rivers."),
    place("bel-military", "Military Museum", 44.8225, 20.4505, "museum", "Museum", "Kalemegdan", 7, "Weapons and Balkan war history inside the fortress."),
    place("bel-cvijeta", "Cvijeta Zuzorić Art Pavilion", 44.8215, 20.4525, "museum", "Museum", "Kalemegdan", 5, "Exhibition pavilion in Kalemegdan park."),
    place("bel-zoo", "Belgrade Zoo", 44.8245, 20.4525, "sight", "Attraction", "Kalemegdan", 5, "Compact zoo inside the fortress park."),
    place("bel-confluence", "Sava–Danube confluence viewpoint", 44.8255, 20.4465, "sight", "Viewpoint", "Kalemegdan", 8, "Best free panorama of the two rivers meeting."),
    place("bel-nec", "Nebojša Tower", 44.8245, 20.4485, "sight", "Monument", "Kalemegdan", 6, "Medieval tower museum on the fortress riverside."),
    place("bel-park", "Kalemegdan Park", 44.8215, 20.4515, "nature", "Park", "Kalemegdan", 7, "Tree-lined promenades leading into the fortress."),
    place("bel-knez", "Knez Mihailova Street", 44.8185, 20.4575, "shopping", "Market", "Stari Grad", 8, "Pedestrian spine of shops and cafés to Kalemegdan."),
    place("bel-republic", "Republic Square", 44.8166, 20.4602, "sight", "Attraction", "Stari Grad", 7, "National Museum and theatre facing Prince Mihailo."),
    place("bel-national", "National Museum of Serbia", 44.8167, 20.46, "museum", "Museum", "Stari Grad", 8, "Archaeology and art on Republic Square."),
    place("bel-theatre", "National Theatre", 44.8165, 20.4608, "sight", "Monument", "Stari Grad", 6, "Neoclassical theatre on the square."),
    place("bel-monument-mihailo", "Prince Mihailo Monument", 44.8168, 20.4605, "sight", "Monument", "Stari Grad", 6, "Equestrian statue at the square's centre."),
    place("bel-raznatovic", "Saborna Church", 44.8195, 20.4515, "sight", "Monument", "Stari Grad", 7, "Orthodox cathedral near the Patriarchate."),
    place("bel-patriarchate", "Serbian Patriarchate", 44.8198, 20.4518, "sight", "Monument", "Stari Grad", 5, "Church headquarters beside the cathedral."),
    place("bel-konak", "Princess Ljubica's Residence", 44.8192, 20.4525, "museum", "Museum", "Stari Grad", 6, "19th-century Balkan residence museum."),
    place("bel-fresco", "Museum of the Serbian Orthodox Church", 44.8195, 20.4522, "museum", "Museum", "Stari Grad", 5, "Icons and church treasures near Saborna."),

    // ——— Skadarlija / Dorćol ———
    place("bel-skadarlija", "Skadarlija", 44.8175, 20.4635, "sight", "Attraction", "Skadarlija", 8, "Bohemian cobbled lane of kafanas and street musicians."),
    place("bel-seb", "Sebilj / Skadarlija fountain area", 44.8178, 20.4638, "sight", "Attraction", "Skadarlija", 5, "Photo stop at the top of the restaurant street."),
    place("bel-dorcol", "Dorćol neighbourhood", 44.8255, 20.4605, "sight", "Attraction", "Dorćol", 7, "Trendy streets between the fortress and the Danube."),
    place("bel-bajlonijeva", "Bajloni Market", 44.8185, 20.4655, "shopping", "Market", "Dorćol", 6, "Neighbourhood market by Skadarlija."),
    place("bel-bitoljska", "Bitoljska / Dorćol cafés", 44.8245, 20.4585, "sight", "Attraction", "Dorćol", 6, "Café strip in lower Dorćol."),
    place("bel-danube", "Danube quay / Kej", 44.8285, 20.4555, "nature", "Park", "Dorćol", 6, "River walk toward the confluence."),

    // ——— Savamala / Waterfront ———
    place("bel-savamala", "Savamala district", 44.813, 20.445, "sight", "Attraction", "Savamala", 8, "Warehouse nightlife and design scene by the Sava."),
    place("bel-betonica", "Concrete Halls / Beton Hala", 44.8145, 20.4425, "sight", "Attraction", "Savamala", 7, "Riverside restaurants in former concrete depots."),
    place("bel-waterfront", "Belgrade Waterfront promenade", 44.8055, 20.4455, "sight", "Attraction", "Savamala", 6, "New Sava promenade and Sava Centar approaches."),
    place("bel-galerija", "Galerija Belgrade shopping", 44.8065, 20.4485, "shopping", "Market", "Savamala", 5, "Large mall in the Waterfront development."),
    place("bel-briske", "Branko's Bridge walk", 44.8145, 20.4385, "sight", "Attraction", "Savamala", 6, "Crossing to Novi Beograd with city views."),
    place("bel-museum-sartr", "Museum of Contemporary Art (MSUB)", 44.8195, 20.4325, "museum", "Museum", "Novi Beograd", 7, "Modern art on the Ušće confluence tip."),
    place("bel-usce", "Ušće Park", 44.8205, 20.4355, "nature", "Park", "Novi Beograd", 6, "Park at the river confluence opposite Kalemegdan."),
    place("bel-usce-tower", "Ušće Tower viewpoint area", 44.8175, 20.4365, "sight", "Viewpoint", "Novi Beograd", 5, "High-rise landmark across the Sava."),

    // ——— Vračar / Saint Sava ———
    place("bel-sava", "Temple of Saint Sava", 44.7981, 20.4685, "sight", "Monument", "Vračar", 10, "One of the world's largest Orthodox churches — vast dome."),
    place("bel-sava-plaza", "Saint Sava plateau", 44.7985, 20.468, "sight", "Attraction", "Vračar", 7, "Open plaza and views around the temple."),
    place("bel-karadjordje", "Karađorđe Monument", 44.7995, 20.4675, "sight", "Monument", "Vračar", 5, "Uprising leader statue on the plateau."),
    place("bel-nikola", "Nikola Tesla Museum", 44.8055, 20.4705, "museum", "Museum", "Vračar", 8, "Tesla's ashes and working demos — book timed entry."),
    place("bel-slavija", "Slavija Square", 44.8025, 20.4665, "sight", "Attraction", "Vračar", 5, "Busy roundabout linking centre and Vračar."),
    place("bel-cvetni", "Cvetni Trg", 44.8055, 20.4655, "shopping", "Market", "Vračar", 5, "Flower square near Njegoševa."),
    place("bel-njegoseva", "Njegoševa Street", 44.8045, 20.4675, "shopping", "Market", "Vračar", 6, "Cafés and boutiques in Vračar."),

    // ——— Dedinje / Topčider / South ———
    place("bel-dedinje", "Dedinje villas", 44.7855, 20.4455, "sight", "Attraction", "Dedinje", 5, "Embassy and villa quarter south of the centre."),
    place("bel-royal", "Royal Compound (Beli Dvor area)", 44.7755, 20.4455, "sight", "Attraction", "Dedinje", 6, "Royal residences — guided tours on select days."),
    place("bel-topcider", "Topčider Park", 44.7755, 20.4355, "nature", "Park", "Topčider", 7, "Historic park with Miloš's Residence."),
    place("bel-milos", "Miloš Obrenović Residence", 44.7765, 20.4345, "museum", "Museum", "Topčider", 6, "19th-century konak museum in the park."),
    place("bel-hajd", "Hajd park / Dedinje greens", 44.7885, 20.4525, "nature", "Park", "Dedinje", 5, "Leafy walks in the southern hills."),
    place("bel-aval", "Aval Tower", 44.6955, 20.5155, "sight", "Viewpoint", "Avala", 7, "TV tower panorama — short trip south of the city."),
    place("bel-aval-mon", "Monument to the Unknown Hero", 44.6935, 20.5145, "sight", "Monument", "Avala", 6, "Meštrović memorial on Avala mountain."),

    // ——— Zemun ———
    place("bel-zemun", "Zemun old town", 44.8435, 20.4125, "sight", "Attraction", "Zemun", 8, "Danube-side town with Central European feel."),
    place("bel-gardos", "Gardoš Tower", 44.8475, 20.4085, "sight", "Viewpoint", "Zemun", 8, "Millennium tower views over the Danube."),
    place("bel-zemun-quay", "Zemun quay", 44.8415, 20.4155, "nature", "Park", "Zemun", 7, "Fish restaurants and sunset promenade."),
    place("bel-zemun-church", "St. Nicholas Church Zemun", 44.8445, 20.4115, "sight", "Monument", "Zemun", 5, "Baroque church in Zemun's centre."),
    place("bel-madlenianum", "Madlenianum Opera", 44.8425, 20.4135, "sight", "Attraction", "Zemun", 5, "Opera house in the Zemun quarter."),

    // ——— More museums / centre ———
    place("bel-history", "Historical Museum of Serbia", 44.8105, 20.4625, "museum", "Museum", "Center", 6, "National history collections."),
    place("bel-yugo", "Museum of Yugoslavia", 44.7855, 20.4555, "museum", "Museum", "Dedinje", 8, "Tito-era exhibits and the House of Flowers mausoleum."),
    place("bel-flowers", "House of Flowers", 44.7852, 20.4552, "museum", "Museum", "Dedinje", 7, "Tito's resting place within the museum complex."),
    place("bel-ethnographic", "Ethnographic Museum", 44.8185, 20.4555, "museum", "Museum", "Stari Grad", 6, "Balkan folk culture near Studentski Trg."),
    place("bel-jewish", "Jewish Historical Museum", 44.8155, 20.4585, "museum", "Museum", "Stari Grad", 5, "Community history in the centre."),
    place("bel-fres", "Gallery of Frescoes", 44.8195, 20.4535, "museum", "Museum", "Stari Grad", 6, "Copies of medieval Serbian frescoes."),
    place("bel-zeleni", "Zeleni Venac market", 44.8148, 20.4555, "shopping", "Market", "Stari Grad", 6, "Busy transit-hub produce market."),
    place("bel-kombank", "Kombank Hall / concerts", 44.8125, 20.4585, "sight", "Attraction", "Center", 5, "Concert venue in the centre."),
    place("bel-tasmajdan", "Tašmajdan Park", 44.8095, 20.472, "nature", "Park", "Palilula", 6, "Central park with caves and a church."),
    place("bel-stmarks", "St. Mark's Church Belgrade", 44.8105, 20.4705, "sight", "Monument", "Palilula", 7, "Striped Orthodoxy giant by Tašmajdan."),
    place("bel-skupstina", "House of the National Assembly", 44.8115, 20.4655, "sight", "Monument", "Center", 6, "Parliament building on Nikola Pašić Square."),

    // ——— Ada / nature ———
    place("bel-ada", "Ada Ciganlija", 44.7855, 20.4155, "nature", "Park", "Ada", 8, "City lake island of beaches, bikes, and bars."),
    place("bel-ada-beach", "Ada beach strip", 44.7875, 20.4185, "nature", "Park", "Ada", 7, "Summer swimming and cafés on the lake."),
    place("bel-košutnjak", "Košutnjak Park", 44.7655, 20.4355, "nature", "Park", "Košutnjak", 7, "Forest park for hiking and picnics."),

    // ——— Cafes ———
    place("bel-cafe-sfrj", "Kafeterija / centre coffee", 44.8175, 20.4565, "cafe", "Cafe", "Stari Grad", 7, "Specialty coffee on the Knez Mihailova edge.", { cuisine: "coffee" }),
    place("bel-cafe-dorcol", "Dorćol coffee bars", 44.8245, 20.4595, "cafe", "Cafe", "Dorćol", 7, "Third-wave spots in Dorćol lanes.", { cuisine: "coffee" }),
    place("bel-cafe-skadar", "Skadarlija morning coffee", 44.8172, 20.463, "cafe", "Cafe", "Skadarlija", 6, "Quiet coffee before the kafanas wake up.", { cuisine: "coffee" }),
    place("bel-cafe-marina", "Marina Dock café", 44.8145, 20.4435, "cafe", "Cafe", "Savamala", 6, "Sava-side coffee by Beton Hala.", { cuisine: "coffee" }),
    place("bel-cafe-zemun", "Zemun garden café", 44.8435, 20.4135, "cafe", "Cafe", "Zemun", 6, "Terrace coffee near Gardoš.", { cuisine: "coffee" }),
    place("bel-cafe-vra", "Vračar bakery café", 44.8035, 20.4675, "cafe", "Cafe", "Vračar", 6, "Burek and coffee near Saint Sava.", { cuisine: "bakery coffee" }),

    // ——— Food ———
    place("bel-food-skadar", "Skadarlija kafana dinner", 44.8178, 20.464, "food", "Restaurant", "Skadarlija", 8, "Live music and Serbian grilled meats.", { cuisine: "serbian" }),
    place("bel-food-tri", "Trišević / traditional", 44.8185, 20.4585, "food", "Restaurant", "Stari Grad", 7, "Classic Serbian plates near Knez Mihailova.", { cuisine: "serbian" }),
    place("bel-food-am", "Ambar", 44.8148, 20.4428, "food", "Restaurant", "Savamala", 8, "Modern Balkan at Beton Hala.", { cuisine: "balkan serbian" }),
    place("bel-food-salon", "Salon 5 / fine dining", 44.8055, 20.4685, "food", "Restaurant", "Vračar", 7, "Contemporary Serbian tasting menus.", { cuisine: "serbian" }),
    place("bel-food-cevapi", "Ćevapi stand / Pljeskavica", 44.8165, 20.4575, "food", "Quick meal", "Stari Grad", 7, "Grilled mince sausages — Belgrade street classic.", { cuisine: "serbian street_food" }),
    place("bel-food-burek", "Burek bakery", 44.8155, 20.4565, "food", "Quick meal", "Stari Grad", 7, "Spinach or cheese burek for breakfast.", { cuisine: "balkan bakery" }),
    place("bel-food-zemun", "Zemun fish restaurants", 44.8415, 20.4165, "food", "Restaurant", "Zemun", 7, "Danube fish soup and fried carp.", { cuisine: "seafood serbian" }),
    place("bel-food-savamala", "Savamala lunch", 44.8135, 20.4455, "food", "Restaurant", "Savamala", 6, "Warehouse-district bistros.", { cuisine: "european serbian" }),
    place("bel-food-lotus", "Lotus / Asian Dorćol", 44.8235, 20.4585, "food", "Restaurant", "Dorćol", 5, "Asian break from grilled meats.", { cuisine: "asian" }),
    place("bel-food-manuf", "Manufaktura", 44.8175, 20.4555, "food", "Restaurant", "Stari Grad", 6, "Serbian comfort food near the pedestrian zone.", { cuisine: "serbian" }),
    place("bel-food-srpska", "Srpska Kafana classics", 44.7985, 20.4695, "food", "Restaurant", "Vračar", 6, "Hearty meals after Saint Sava.", { cuisine: "serbian" }),
    place("bel-food-market", "Zeleni Venac bites", 44.8145, 20.4558, "food", "Quick meal", "Stari Grad", 5, "Market snacks by the bus hub.", { cuisine: "market serbian" }),
    place("bel-food-ada", "Ada lake grill", 44.7865, 20.4175, "food", "Restaurant", "Ada", 5, "Casual lakeside grilling in summer.", { cuisine: "serbian grill" }),
    place("bel-food-homa", "Homa restaurant", 44.8255, 20.4575, "food", "Restaurant", "Dorćol", 7, "Creative fine dining in Dorćol.", { cuisine: "european" }),

    // ——— Nightlife ———
    place("bel-night-sava", "Savamala bars", 44.8125, 20.444, "nightlife", "Bar", "Savamala", 9, "Clubs and riverside bars in warehouse venues."),
    place("bel-night-splav", "Splav river clubs", 44.81, 20.43, "nightlife", "Bar", "River", 8, "Floating nightclubs on the Sava — go late."),
    place("bel-night-skadar", "Skadarlija evenings", 44.8175, 20.4638, "nightlife", "Bar", "Skadarlija", 7, "Kafana music and rakija until late."),
    place("bel-night-dorcol", "Dorćol bars", 44.8245, 20.4605, "nightlife", "Bar", "Dorćol", 7, "Craft beer and cocktail dens."),
    place("bel-night-plastic", "Club Plastic / underground", 44.8125, 20.4555, "nightlife", "Bar", "Center", 6, "Electronic music institution."),
    place("bel-night-bit", "Bit Paper / live", 44.8135, 20.4465, "nightlife", "Bar", "Savamala", 6, "Live gigs in Savamala."),
    place("bel-night-zemun", "Zemun quay nights", 44.8418, 20.4158, "nightlife", "Bar", "Zemun", 6, "Danube terraces after dark."),
    place("bel-night-ada", "Ada summer bars", 44.7875, 20.4165, "nightlife", "Bar", "Ada", 5, "Lake beach bars in season."),

    // ——— Stays ———
    place("bel-stay-square", "Square Nine Hotel", 44.8195, 20.4555, "stay", "Hotel", "Stari Grad", 9, "Design luxury near Kalemegdan."),
    place("bel-stay-metropol", "Hotel Metropol Palace", 44.8055, 20.4755, "stay", "Hotel", "Center", 8, "Iconic mid-century luxury hotel."),
    place("bel-stay-hilton", "Hilton Belgrade", 44.8065, 20.4485, "stay", "Hotel", "Savamala", 8, "Waterfront tower hotel."),
    place("bel-stay-moscow", "Hotel Moskva", 44.8125, 20.4605, "stay", "Hotel", "Center", 8, "Art Nouveau landmark on Terazije."),
    place("bel-stay-townhouse", "Townhouse 12", 44.8185, 20.4585, "stay", "Hotel", "Stari Grad", 7, "Boutique stay near Knez Mihailova."),
    place("bel-stay-savamala", "Savamala design hotel", 44.8135, 20.446, "stay", "Hotel", "Savamala", 7, "Indie rooms in the nightlife district."),
  ],
};
