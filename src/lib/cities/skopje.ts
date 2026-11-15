import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const skopje: CityCatalog = {
  id: "skopje",
  name: "Skopje, North Macedonia",
  aliases: ["skopje", "skoplje", "skopje macedonia"],
  center: { lat: 41.9981, lon: 21.4254 },
  places: [
    // ——— Macedonia Square / Center ———
    place("sk-square", "Macedonia Square", 41.9955, 21.4315, "sight", "Attraction", "Macedonia Square", 9, "Main plaza with the towering warrior on a horse statue."),
    place("sk-warrior", "Warrior on a Horse statue", 41.9956, 21.4316, "sight", "Monument", "Macedonia Square", 8, "Controversial monumental statue anchoring the square."),
    place("sk-stone-bridge", "Stone Bridge", 41.9965, 21.433, "sight", "Attraction", "Macedonia Square", 9, "Ottoman stone bridge linking square to the Old Bazaar."),
    place("sk-arch-museum", "Archaeological Museum of North Macedonia", 41.995, 21.4345, "museum", "Museum", "Center", 8, "Striking riverside museum of archaeology."),
    place("sk-archaeology-bridge", "Art Bridge / statues walk", 41.9952, 21.4335, "sight", "Attraction", "Center", 6, "Bridge lined with statues toward museum row."),
    place("sk-porta", "Porta Macedonia", 41.9935, 21.4325, "sight", "Monument", "Center", 7, "Triumphal arch on the southern approach to the square."),
    place("sk-mother", "Mother Teresa Memorial House", 41.9945, 21.428, "museum", "Museum", "Center", 8, "Memorial museum on the site of her childhood parish."),
    place("sk-mother-plaque", "Mother Teresa birthplace marker area", 41.9948, 21.4285, "sight", "Monument", "Center", 6, "Markers and chapel near the memorial house."),
    place("sk-parliament", "Assembly Building facade", 41.994, 21.4338, "sight", "Monument", "Center", 5, "Civic architecture on the riverfront axis."),
    place("sk-gov", "Government building / neo-classical facades", 41.9958, 21.4305, "sight", "Monument", "Macedonia Square", 5, "Skopje 2014-era monumental architecture."),

    // ——— Old Bazaar / Fortress ———
    place("sk-fortress", "Skopje Fortress (Kale)", 42.0015, 21.4355, "sight", "Castle", "Kale", 9, "Hill fortress with panoramic views over the Vardar."),
    place("sk-bazaar", "Old Bazaar (Čaršija)", 42.0005, 21.4365, "sight", "Attraction", "Old Bazaar", 10, "One of the Balkans' largest Ottoman bazaars."),
    place("sk-bazaar-lanes", "Čaršija craft lanes", 42.0008, 21.437, "shopping", "Market", "Old Bazaar", 8, "Silver, leather, and carpet shops in covered lanes."),
    place("sk-bezisten", "Bezisten covered market", 42.001, 21.4368, "shopping", "Market", "Old Bazaar", 7, "Historic covered trading hall."),
    place("sk-mustafa", "Mustafa Pasha Mosque", 42.002, 21.4358, "sight", "Monument", "Kale", 8, "Hillside Ottoman mosque below the fortress."),
    place("sk-ishak", "Ishak Bey Mosque", 42.0012, 21.4385, "sight", "Monument", "Old Bazaar", 6, "Historic mosque in the bazaar fabric."),
    place("sk-clock-tower", "Clock Tower (Saat Kula)", 42.0002, 21.4375, "sight", "Monument", "Old Bazaar", 6, "Ottoman clock tower above bazaar roofs."),
    place("sk-kurshumli", "Kuršumli An", 42.0015, 21.4388, "sight", "Monument", "Old Bazaar", 7, "Lead-roofed caravanserai courtyard."),
    place("sk-suli", "Suli An", 42.0006, 21.4362, "sight", "Monument", "Old Bazaar", 6, "Another historic inn courtyard in the Čaršija."),
    place("sk-cifte", "Čifte Hammam", 42.0004, 21.4355, "museum", "Museum", "Old Bazaar", 7, "Double bathhouse now used for art exhibitions."),
    place("sk-davut", "Daut Pasha Hammam", 41.9985, 21.435, "museum", "Museum", "Old Bazaar", 7, "Monumental hammam near the Stone Bridge approach."),
    place("sk-bit-pazar", "Bit Pazar market", 42.0025, 21.44, "shopping", "Market", "Old Bazaar", 7, "Open-air market north of the Čaršija."),

    // ——— Museums & culture ———
    place("sk-holocaust", "Holocaust Memorial Center", 41.9955, 21.4355, "museum", "Museum", "Center", 7, "Jewish community history by the river."),
    place("sk-macedonian-struggle", "Museum of the Macedonian Struggle", 41.995, 21.433, "museum", "Museum", "Center", 6, "Wax-figure narrative museum of national history."),
    place("sk-mmca", "Museum of Contemporary Art", 42.0035, 21.4335, "museum", "Museum", "Kale", 7, "Modern art museum on the fortress hill."),
    place("sk-nat-gallery", "National Gallery (Čifte Hammam wing)", 42.0005, 21.4358, "museum", "Museum", "Old Bazaar", 6, "Art in historic bathhouse spaces."),
    place("sk-city-museum", "Museum of the City of Skopje", 41.9925, 21.43, "museum", "Museum", "Center", 5, "Local history in the old railway station remnant."),
    place("sk-earthquake", "Earthquake memorial / station clock", 41.9928, 21.4295, "sight", "Monument", "Center", 7, "Stopped clock marking the 1963 earthquake."),
    place("sk-philip", "Philip II Square statues", 41.996, 21.4345, "sight", "Monument", "Center", 5, "Monumental statues on the museum riverside."),

    // ——— Parks & nature ———
    place("sk-city-park", "City Park (Gradski Park)", 41.9985, 21.42, "nature", "Park", "City Park", 8, "Large central park with lakes and paths."),
    place("sk-city-park-lake", "City Park lake loop", 41.999, 21.4185, "nature", "Park", "City Park", 7, "Paddle and stroll around the park lakes."),
    place("sk-vardar", "Vardar river walk", 41.9968, 21.4325, "nature", "Park", "Macedonia Square", 7, "Embankment between square and bazaar."),
    place("sk-vodno", "Mount Vodno / Millennium Cross", 41.965, 21.3945, "sight", "Viewpoint", "Vodno", 9, "Cable car or hike to the illuminated cross above the city."),
    place("sk-vodno-cable", "Vodno cable car station", 41.975, 21.405, "sight", "Attraction", "Vodno", 7, "Lower station for the Vodno ride."),
    place("sk-matka", "Matka Canyon day trip gateway", 41.96, 21.3, "nature", "Park", "Matka", 8, "Gorge, monastery, and boat rides west of town."),
    place("sk-kais", "Žena Borec / Kais park pocket", 41.994, 21.425, "nature", "Park", "Center", 5, "Small green near downtown."),
    place("sk-aerodrom-park", "Aerodrom district green", 41.985, 21.45, "nature", "Park", "Aerodrom", 4, "Residential park south of the river."),

    // ——— Debar Maalo & neighborhoods ———
    place("sk-debar", "Debar Maalo neighborhood", 41.998, 21.418, "sight", "Attraction", "Debar Maalo", 8, "Leafy dining and cafe district west of the park."),
    place("sk-debar-streets", "Debar Maalo restaurant streets", 41.9975, 21.4175, "sight", "Attraction", "Debar Maalo", 7, "Evening street life and terraces."),
    place("sk-karpos", "Karpoš riverside", 42.005, 21.41, "sight", "Attraction", "Karpoš", 5, "Residential riverside west of the center."),
    place("sk-centar-mall", "City Mall / shopping", 41.9915, 21.4255, "shopping", "Mall", "Center", 6, "Central shopping mall."),
    place("sk-ramstore", "Ramstore / East Gate orbit", 41.99, 21.45, "shopping", "Mall", "East", 5, "Larger mall options east of center."),
    place("sk-souvenir", "Bazaar souvenir shops", 42.0007, 21.4365, "shopping", "Shop", "Old Bazaar", 7, "Filigree, magnets, and local crafts."),

    // ——— Religious sites ———
    place("sk-st-spaso", "Church of the Holy Saviour (Sveti Spas)", 42.0018, 21.4348, "sight", "Monument", "Kale", 7, "Iconostasis masterpiece below the fortress."),
    place("sk-st-dimitrija", "Church of St. Demetrius", 41.9975, 21.434, "sight", "Monument", "Center", 5, "Orthodox church near the river."),
    place("sk-cathedral", "Cathedral of St. Clement of Ohrid", 41.9985, 21.4255, "sight", "Monument", "Center", 7, "Large Orthodox cathedral with distinctive domes."),
    place("sk-synagogue", "Synagogue / Jewish quarter memory", 41.9965, 21.4358, "sight", "Monument", "Center", 5, "Heritage context near the Holocaust center."),

    // ——— Cafes ———
    place("sk-cafe-bazaar", "Old Bazaar cafe", 42.0002, 21.436, "cafe", "Cafe", "Old Bazaar", 7, "Turkish coffee and tea in Čaršija courtyards."),
    place("sk-cafe-debar", "Debar Maalo specialty coffee", 41.9978, 21.4178, "cafe", "Cafe", "Debar Maalo", 8, "Third-wave coffee in the dining district."),
    place("sk-cafe-square", "Macedonia Square cafe", 41.9957, 21.4312, "cafe", "Cafe", "Macedonia Square", 6, "People-watching on the main plaza."),
    place("sk-cafe-park", "City Park cafe", 41.9988, 21.4195, "cafe", "Cafe", "City Park", 6, "Green pause after a park loop."),
    place("sk-cafe-center", "Center espresso bar", 41.995, 21.4295, "cafe", "Cafe", "Center", 6, "Quick coffee near Mother Teresa."),
    place("sk-cafe-kale", "Kale hill cafe", 42.0012, 21.435, "cafe", "Cafe", "Kale", 5, "Drink with fortress views."),
    place("sk-patisserie", "Center pastry cafe", 41.996, 21.4285, "cafe", "Cafe", "Center", 5, "Baklava and cakes downtown."),

    // ——— Food ———
    place("sk-food-kebap", "Skopje kebapčilnica lunch", 42.0006, 21.4368, "food", "Restaurant", "Old Bazaar", 9, "Ćevapi and flatbread in the bazaar — classic.", { cuisine: "macedonian" }),
    place("sk-food-debar", "Debar Maalo dinner", 41.9972, 21.4172, "food", "Restaurant", "Debar Maalo", 8, "Best restaurant concentration for evenings.", { cuisine: "macedonian european" }),
    place("sk-food-tavce", "Tavče gravče & beans lunch", 42.0004, 21.4372, "food", "Restaurant", "Old Bazaar", 8, "National bean casserole in traditional houses.", { cuisine: "macedonian" }),
    place("sk-food-square", "Square / river dinner", 41.996, 21.431, "food", "Restaurant", "Macedonia Square", 6, "Tourist-facing terraces on the plaza.", { cuisine: "european" }),
    place("sk-food-pastrmajlija", "Pastrmajlija flatbread", 41.998, 21.4185, "food", "Restaurant", "Debar Maalo", 7, "Meat flatbread from the Štip tradition.", { cuisine: "macedonian" }),
    place("sk-food-seafood", "River seafood dinner", 41.9965, 21.4335, "food", "Restaurant", "Center", 6, "Fish plates along the Vardar.", { cuisine: "seafood" }),
    place("sk-food-burek", "Burek bakery breakfast", 41.9958, 21.432, "food", "Quick meal", "Macedonia Square", 7, "Spinach or meat burek to start the day.", { cuisine: "balkan" }),
    place("sk-food-italian", "Italian dinner Debar Maalo", 41.9976, 21.4168, "food", "Restaurant", "Debar Maalo", 5, "Pizza when you want a break.", { cuisine: "italian" }),
    place("sk-food-vegetarian", "Vegetarian cafe", 41.997, 21.419, "food", "Restaurant", "Debar Maalo", 6, "Plant-forward plates west of the park.", { cuisine: "vegetarian" }),
    place("sk-food-wine", "Macedonian wine dinner", 41.9974, 21.418, "food", "Restaurant", "Debar Maalo", 7, "Tikveš and local wines with small plates.", { cuisine: "macedonian wine" }),

    // ——— Nightlife ———
    place("sk-night-debar", "Debar Maalo bars", 41.9975, 21.417, "nightlife", "Bar", "Debar Maalo", 8, "Main evening bar strip."),
    place("sk-night-bazaar", "Old Bazaar evening", 42.0, 21.4355, "nightlife", "Bar", "Old Bazaar", 6, "Tea gardens and quiet bars after shops close."),
    place("sk-night-center", "Center bars", 41.9962, 21.4305, "nightlife", "Bar", "Macedonia Square", 6, "Plaza and hotel lounges."),
    place("sk-night-club", "Skopje club night", 41.9965, 21.42, "nightlife", "Club", "City Park", 6, "Check electronic and pop lineups."),
    place("sk-night-live", "Live music Debar Maalo", 41.9978, 21.4165, "nightlife", "Bar", "Debar Maalo", 7, "Bands and acoustic nights."),
    place("sk-night-beer", "Craft beer bar", 41.9972, 21.4182, "nightlife", "Bar", "Debar Maalo", 6, "Local craft pours."),
    place("sk-night-rooftop", "Rooftop drinks center", 41.9955, 21.4308, "nightlife", "Bar", "Macedonia Square", 6, "Views over statues and the Stone Bridge."),

    // ——— Stays ———
    place("sk-stay-center", "Center Hotel Skopje", 41.9965, 21.43, "stay", "Hotel", "Macedonia Square", 8, "Walk to square, bridge, and Mother Teresa."),
    place("sk-stay-bazaar", "Old Bazaar boutique hotel", 42.0003, 21.435, "stay", "Hotel", "Old Bazaar", 7, "Character stay in Čaršija lanes."),
    place("sk-stay-debar", "Debar Maalo hotel", 41.998, 21.418, "stay", "Hotel", "Debar Maalo", 8, "Best for restaurants and evening life."),
    place("sk-stay-marriott", "Riverside business hotel", 41.9945, 21.434, "stay", "Hotel", "Center", 7, "Modern stay by museum row."),
    place("sk-stay-hostel", "Skopje Hostel", 41.997, 21.4285, "stay", "Hostel", "Center", 5, "Budget dorms near the center."),
    place("sk-stay-guest", "Guest House Skopje", 41.998, 21.4335, "stay", "Guest house", "Center", 6, "Small stay between park and bazaar."),
    place("sk-stay-kale", "Kale hillside stay", 42.001, 21.4345, "stay", "Guest house", "Kale", 6, "Views toward fortress and bazaar roofs."),
    place("sk-stay-park", "City Park hotel", 41.999, 21.421, "stay", "Hotel", "City Park", 6, "Quieter green-edge base."),
    place("sk-stay-apartment", "Center aparthotel", 41.9955, 21.429, "stay", "Hotel", "Center", 6, "Kitchenette stay near Mother Teresa."),
  ],
};
