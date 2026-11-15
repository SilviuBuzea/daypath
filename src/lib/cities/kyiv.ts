import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const kyiv: CityCatalog = {
  id: "kyiv",
  name: "Kyiv, Ukraine",
  aliases: ["kyiv", "kiev"],
  center: { lat: 50.4501, lon: 30.5234 },
  places: [
    // ——— Upper Town / Sophia ———
    place("ky-sophia", "Saint Sophia Cathedral", 50.4529, 30.5143, "sight", "Monument", "Upper Town", 10, "UNESCO cathedral and bell tower — check current travel advisories before visiting Kyiv."),
    place("ky-sophia-bell", "Sophia Bell Tower", 50.453, 30.5148, "sight", "Viewpoint", "Upper Town", 8, "Climb for Upper Town views over the cathedral complex; confirm access amid advisories."),
    place("ky-golden-gate", "Golden Gate", 50.4486, 30.5133, "sight", "Monument", "Upper Town", 8, "Reconstructed medieval city gate — classic Upper Town photo stop."),
    place("ky-st-michael", "St. Michael's Golden-Domed Monastery", 50.4555, 30.5228, "sight", "Monument", "Upper Town", 9, "Blue-and-gold domes facing Sophia — rebuilt after Soviet demolition."),
    place("ky-volodymyrska", "Volodymyrska Street stroll", 50.4508, 30.5148, "sight", "Attraction", "Upper Town", 7, "Historic axis linking Golden Gate, universities, and Sophia."),
    place("ky-st-andrew", "St. Andrew's Church", 50.459, 30.518, "sight", "Monument", "Andriivskyi", 9, "Baroque hilltop church at the top of Andriivskyi Descent."),
    place("ky-andriivskyi", "Andriivskyi Descent", 50.46, 30.5165, "sight", "Attraction", "Andriivskyi", 9, "Art-filled cobblestone slope from Upper Town down to Podil — check advisories for the city."),
    place("ky-richard", "Castle of Richard the Lionheart", 50.4595, 30.5168, "sight", "Monument", "Andriivskyi", 6, "Gothic-revival facade on Andriivskyi — exterior stop on the descent."),
    place("ky-bulgakov", "Bulgakov Museum", 50.4605, 30.5162, "museum", "Museum", "Andriivskyi", 7, "Writer's house museum on the Descent — literary Kyiv."),
    place("ky-one-street", "One Street Museum", 50.4612, 30.5158, "museum", "Museum", "Andriivskyi", 6, "Small museum devoted to Andriivskyi's layered history."),

    // ——— Podil ———
    place("ky-kontraktova", "Kontraktova Square", 50.4655, 30.5155, "sight", "Attraction", "Podil", 8, "Podil's historic marketplace square — cafes and street life."),
    place("ky-poshtova", "Poshtova Square & funicular", 50.4598, 30.5255, "sight", "Attraction", "Podil", 7, "Riverfront square with funicular up to Upper Town."),
    place("ky-funicular", "Kyiv Funicular", 50.4585, 30.5245, "sight", "Attraction", "Podil", 7, "Short hillside ride linking Podil to Mykhailivska Square."),
    place("ky-illyinska", "Illinska Church", 50.4648, 30.5215, "sight", "Monument", "Podil", 6, "Historic Podil church near the river terraces."),
    place("ky-florivskyi", "Florivskyi Convent", 50.4642, 30.5185, "sight", "Monument", "Podil", 6, "Quiet convent complex in lower Podil."),
    place("ky-hostynnyi", "Hostynnyi Dvir", 50.4658, 30.5168, "sight", "Attraction", "Podil", 6, "Historic trading courtyard on Kontraktova."),
    place("ky-dnipro-embankment", "Dnipro embankment walk", 50.458, 30.528, "nature", "Park", "Podil", 7, "River promenade below Podil — verify local conditions before riverside walks."),
    place("ky-petro-pavlo", "Church of St. Peter and Paul (Podil)", 50.4665, 30.5195, "sight", "Monument", "Podil", 5, "Neighborhood church stop on a Podil loop."),

    // ——— Khreshchatyk / Maidan ———
    place("ky-maidan", "Maidan Nezalezhnosti", 50.4504, 30.5245, "sight", "Attraction", "Khreshchatyk", 9, "Independence Square — civic heart of Kyiv; check travel advisories."),
    place("ky-khreshchatyk", "Khreshchatyk Street", 50.447, 30.522, "sight", "Attraction", "Khreshchatyk", 8, "Main boulevard of shops and chestnut trees — classic center stroll."),
    place("ky-besarabsky", "Besarabsky Market", 50.4425, 30.5205, "shopping", "Market", "Khreshchatyk", 8, "Covered market at the south end of Khreshchatyk — produce and street food."),
    place("ky-tsum", "TSUM Kyiv", 50.4455, 30.5215, "shopping", "Mall", "Khreshchatyk", 6, "Central department store on Khreshchatyk."),
    place("ky-passazh", "Passage Arcade", 50.4465, 30.5235, "shopping", "Attraction", "Khreshchatyk", 7, "Belle Époque shopping passage off Khreshchatyk."),
    place("ky-lypskyi", "Lypskyi / Pechersk gate area", 50.4445, 30.5285, "sight", "Attraction", "Khreshchatyk", 5, "Transition from Khreshchatyk toward government Pechersk."),
    place("ky-european-sq", "European Square", 50.4525, 30.5275, "sight", "Attraction", "Khreshchatyk", 6, "Square at the north end of Khreshchatyk toward the park slopes."),
    place("ky-pinchuk", "PinchukArtCentre", 50.4415, 30.5218, "museum", "Museum", "Khreshchatyk", 8, "Contemporary art center near Besarabka — rotating exhibitions."),

    // ——— Pechersk / Lavra ———
    place("ky-lavra", "Kyiv Pechersk Lavra", 50.4345, 30.557, "sight", "Monument", "Pechersk", 10, "UNESCO cave monastery complex — major landmark; confirm open sites and advisories."),
    place("ky-lavra-caves", "Lavra Near Caves", 50.4338, 30.5565, "sight", "Monument", "Pechersk", 9, "Underground monastic caves within the Lavra — dress modestly."),
    place("ky-motherland", "Motherland Monument", 50.4265, 30.563, "sight", "Monument", "Pechersk", 9, "Towering Soviet-era statue above the WWII museum grounds."),
    place("ky-wwii-museum", "National Museum of the History of Ukraine in the Second World War", 50.4268, 30.5615, "museum", "Museum", "Pechersk", 8, "War history museum at the Motherland complex."),
    place("ky-askold", "Askold's Grave Park", 50.441, 30.545, "nature", "Park", "Pechersk", 6, "Hillside park and church above the Dnipro."),
    place("ky-mariinskyi", "Mariinskyi Palace & Park", 50.448, 30.5385, "sight", "Attraction", "Pechersk", 8, "Ceremonial palace facade and formal park toward the river."),
    place("ky-mariinskyi-park", "Mariinskyi Park paths", 50.4475, 30.54, "nature", "Park", "Pechersk", 7, "Shaded paths and viewpoints above the Dnipro."),
    place("ky-arsenal", "Arsenalna metro / Mystetskyi Arsenal area", 50.444, 30.5455, "sight", "Attraction", "Pechersk", 6, "Deep metro station area and art complex orbit."),
    place("ky-mystetskyi", "Mystetskyi Arsenal", 50.434, 30.552, "museum", "Museum", "Pechersk", 7, "Large contemporary exhibition space near Lavra."),
    place("ky-vichnoi-slavy", "Park of Eternal Glory", 50.4395, 30.554, "nature", "Park", "Pechersk", 7, "Memorial park on the ridge between Lavra and the center."),
    place("ky-botanical", "Fomin Botanical Garden", 50.4435, 30.5125, "nature", "Garden", "Shevchenkivskyi", 7, "University botanical garden near the Golden Gate axis."),

    // ——— Museums & culture ———
    place("ky-nat-art", "National Art Museum of Ukraine", 50.4495, 30.5285, "museum", "Museum", "Center", 8, "Ukrainian painting and sculpture in a neoclassical building."),
    place("ky-khanenko", "Khanenko Museum", 50.4418, 30.5155, "museum", "Museum", "Center", 8, "World-art collection in a merchant mansion."),
    place("ky-history", "National Museum of the History of Ukraine", 50.4585, 30.5165, "museum", "Museum", "Upper Town", 7, "National history collections near Andriivskyi."),
    place("ky-taras", "Taras Shevchenko National Museum", 50.4425, 30.5145, "museum", "Museum", "Center", 6, "Poet and national figure museum."),
    place("ky-water-museum", "Water Museum (Ukraine)", 50.452, 30.5325, "museum", "Museum", "Center", 6, "Interactive museum in a historic water tower."),
    place("ky-chocolate", "Chocolate House", 50.442, 30.5295, "museum", "Museum", "Pechersk", 6, "Ornate mansion museum near Pechersk."),
    place("ky-opera", "National Opera of Ukraine", 50.4465, 30.5125, "sight", "Attraction", "Center", 8, "Landmark opera house — check performance schedules."),
    place("ky-philharmonic", "National Philharmonic", 50.4535, 30.5285, "sight", "Attraction", "Center", 7, "Concert hall near European Square."),
    place("ky-ivan-franko", "Ivan Franko Theater", 50.445, 30.5185, "sight", "Attraction", "Center", 6, "Historic drama theater in the center."),

    // ——— Parks & nature ———
    place("ky-hydropark", "Hydropark", 50.443, 30.578, "nature", "Park", "Dnipro Islands", 7, "Island park for summer walks and river beaches — local conditions vary."),
    place("ky-truhaniv", "Trukhaniv Island", 50.465, 30.535, "nature", "Park", "Dnipro Islands", 6, "Bridge-access island green space north of the center."),
    place("ky-shevchenko-park", "Taras Shevchenko Park", 50.442, 30.5135, "nature", "Park", "Center", 6, "University park with the poet's monument."),
    place("ky-victory-park", "Victory Park / Pechersk slopes", 50.435, 30.545, "nature", "Park", "Pechersk", 5, "Green slopes linking Pechersk landmarks."),
    place("ky-natalka", "Natalka Park", 50.495, 30.515, "nature", "Park", "Obolon", 6, "Modern riverside park in northern Obolon."),
    place("ky-expocenter", "VDNG / Expocenter grounds", 50.3815, 30.4775, "nature", "Park", "Holosiivskyi", 7, "Vast expo park and pavilions south of the center."),
    place("ky-holosiivskyi", "Holosiivskyi National Nature Park edge", 50.375, 30.48, "nature", "Park", "Holosiivskyi", 6, "Forest park for longer green escapes."),

    // ——— Shopping ———
    place("ky-gulliver", "Gulliver Mall", 50.4385, 30.5225, "shopping", "Mall", "Pechersk", 6, "Large mall near Pechersk business towers."),
    place("ky-ocean-plaza", "Ocean Plaza", 50.4125, 30.5225, "shopping", "Mall", "Lybidska", 6, "Major shopping center south of the center."),
    place("ky-petrivka", "Petrovka / book market area", 50.485, 30.498, "shopping", "Market", "Podil North", 5, "Book and flea-market energy north of Podil."),
    place("ky-andr-shops", "Andriivskyi artisan stalls", 50.4598, 30.5168, "shopping", "Market", "Andriivskyi", 7, "Souvenirs, crafts, and street art along the Descent."),

    // ——— Cafes ———
    place("ky-cafe-podil", "Podil specialty cafe", 50.464, 30.515, "cafe", "Cafe", "Podil", 7, "Third-wave coffee culture in Podil lanes."),
    place("ky-cafe-andr", "Andriivskyi cafe terrace", 50.4595, 30.5172, "cafe", "Cafe", "Andriivskyi", 7, "Pause on the Descent between galleries."),
    place("ky-cafe-lviv", "Lviv Croissants / center bakery cafe", 50.4485, 30.5235, "cafe", "Cafe", "Khreshchatyk", 6, "Quick bakery-cafe stop off Khreshchatyk."),
    place("ky-cafe-besarabka", "Besarabka coffee break", 50.443, 30.521, "cafe", "Cafe", "Khreshchatyk", 6, "Cafe energy beside the covered market."),
    place("ky-cafe-pechersk", "Pechersk neighborhood cafe", 50.4355, 30.5485, "cafe", "Cafe", "Pechersk", 6, "Quiet coffee after Lavra or Arsenal."),
    place("ky-cafe-upper", "Upper Town university cafe", 50.4515, 30.5135, "cafe", "Cafe", "Upper Town", 6, "Student-area cafe near Golden Gate."),
    place("ky-honey", "Honey / dessert cafe Podil", 50.4635, 30.5175, "cafe", "Cafe", "Podil", 6, "Sweet stop on Kontraktova-side streets."),

    // ——— Food ———
    place("ky-food-varenyky", "Ukrainian varenyky lunch", 50.448, 30.525, "food", "Restaurant", "Khreshchatyk", 8, "Classic dumplings and borscht near the center — check advisories for dining out.", { cuisine: "ukrainian" }),
    place("ky-food-podil", "Podil modern Ukrainian dinner", 50.463, 30.517, "food", "Restaurant", "Podil", 8, "Contemporary Ukrainian plates in Podil's dining streets.", { cuisine: "ukrainian" }),
    place("ky-food-kanapa", "Kanapa-style traditional dining", 50.4605, 30.5165, "food", "Restaurant", "Andriivskyi", 8, "Heritage recipes near Andriivskyi — book ahead when busy.", { cuisine: "ukrainian" }),
    place("ky-food-pechersk", "Pechersk bistro dinner", 50.435, 30.55, "food", "Restaurant", "Pechersk", 6, "Neighborhood dinner after Lavra or Motherland.", { cuisine: "european" }),
    place("ky-food-shashlyk", "Shashlyk & grill courtyard", 50.4645, 30.5185, "food", "Restaurant", "Podil", 7, "Grilled meats and casual Podil evenings.", { cuisine: "ukrainian grill" }),
    place("ky-food-georgian", "Georgian restaurant Kyiv", 50.4475, 30.5185, "food", "Restaurant", "Center", 7, "Khachapuri and Georgian wines popular with locals.", { cuisine: "georgian" }),
    place("ky-food-market", "Besarabsky market bites", 50.4428, 30.5208, "food", "Quick meal", "Khreshchatyk", 7, "Cheese, pastries, and quick stands inside the market.", { cuisine: "market" }),
    place("ky-food-oban", "Obolon riverside lunch", 50.4945, 30.516, "food", "Restaurant", "Obolon", 5, "Casual lunch near Natalka Park.", { cuisine: "european" }),
    place("ky-food-vegan", "Plant-based cafe center", 50.449, 30.5215, "food", "Restaurant", "Khreshchatyk", 6, "Vegetarian and vegan plates near Maidan.", { cuisine: "vegetarian" }),
    place("ky-food-sushi", "Center sushi / Asian dinner", 50.446, 30.524, "food", "Restaurant", "Khreshchatyk", 5, "Reliable Asian dinner option in the center.", { cuisine: "asian" }),

    // ——— Nightlife ———
    place("ky-night-podil", "Podil craft bars", 50.465, 30.518, "nightlife", "Bar", "Podil", 8, "Bar crawl streets in Podil — confirm venues are open."),
    place("ky-night-andr", "Andriivskyi evening bars", 50.46, 30.517, "nightlife", "Bar", "Andriivskyi", 7, "Descent-side drinks with city lights."),
    place("ky-night-khresh", "Khreshchatyk / Passage evening", 50.4468, 30.523, "nightlife", "Bar", "Khreshchatyk", 6, "Central bars and hotel lounges after a boulevard walk."),
    place("ky-night-jazz", "Podil live music bar", 50.4642, 30.5165, "nightlife", "Bar", "Podil", 7, "Jazz and acoustic nights in lower town."),
    place("ky-night-club", "Center late club night", 50.449, 30.523, "nightlife", "Club", "Khreshchatyk", 6, "Check lineups — nightlife schedules shift with conditions."),
    place("ky-night-wine", "Pechersk wine bar", 50.4365, 30.549, "nightlife", "Bar", "Pechersk", 6, "Quieter wine-forward evening near business Pechersk."),
    place("ky-night-obolon", "Obolon riverside evening", 50.4955, 30.5145, "nightlife", "Bar", "Obolon", 5, "Terrace drinks by the northern embankment."),

    // ——— Stays ———
    place("ky-stay-khresh", "Khreshchatyk / Fairmont-area hotel", 50.4475, 30.5225, "stay", "Hotel", "Khreshchatyk", 8, "Central boulevard base — verify hotel operations and advisories."),
    place("ky-stay-opera", "Opera / Golden Gate hotel", 50.4468, 30.5135, "stay", "Hotel", "Upper Town", 8, "Walkable to Sophia, Golden Gate, and theaters."),
    place("ky-stay-podil", "Podil boutique hotel", 50.462, 30.516, "stay", "Hotel", "Podil", 7, "Neighborhood stay near Kontraktova and Andriivskyi."),
    place("ky-stay-pechersk", "Pechersk business hotel", 50.436, 30.548, "stay", "Hotel", "Pechersk", 7, "Handy for Lavra and Motherland days."),
    place("ky-stay-ibis", "Center mid-range hotel", 50.451, 30.52, "stay", "Hotel", "Khreshchatyk", 6, "Practical mid-range base near Maidan."),
    place("ky-stay-hostel", "Kyiv Hostel / dorm stay", 50.4515, 30.5195, "stay", "Hostel", "Center", 5, "Budget dorms and privates — confirm shelter and safety guidance."),
    place("ky-stay-guest", "Upper Town guest house", 50.4535, 30.5155, "stay", "Guest house", "Upper Town", 6, "Small stay near Sophia and St. Michael's."),
    place("ky-stay-obolon", "Obolon aparthotel", 50.492, 30.505, "stay", "Hotel", "Obolon", 5, "Quieter northern stay with metro into the center."),
    place("ky-stay-andr", "Andriivskyi hillside stay", 50.4592, 30.5175, "stay", "Guest house", "Andriivskyi", 6, "Character lodging on or near the Descent — expect stairs."),
  ],
};
