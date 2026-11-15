import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const sofia: CityCatalog = {
  id: "sofia",
  name: "Sofia, Bulgaria",
  aliases: ["sofia", "софия"],
  center: { lat: 42.6977, lon: 23.3219 },
  places: [
    // ——— Nevsky / Historic centre ———
    place("sof-nevsky", "Alexander Nevsky Cathedral", 42.6958, 23.3328, "sight", "Monument", "Center", 10, "Neo-Byzantine gold domes — Sofia's defining landmark."),
    place("sof-sofia-church", "Saint Sofia Church", 42.6965, 23.3315, "sight", "Monument", "Center", 8, "4th-century basilica that gave the city its name."),
    place("sof-icon", "Icon gallery under Nevsky", 42.6955, 23.3325, "shopping", "Market", "Center", 6, "Open-air icon and craft stalls beside the cathedral."),
    place("sof-parliament", "National Assembly", 42.6955, 23.3295, "sight", "Monument", "Center", 6, "Yellow parliament building facing Nevsky square."),
    place("sof-russian", "Russian Church (St. Nicholas)", 42.6955, 23.3285, "sight", "Monument", "Center", 7, "Onion-domed church with a tiled exterior."),
    place("sof-art", "National Art Gallery / Royal Palace", 42.6962, 23.3275, "museum", "Museum", "Center", 7, "Bulgarian art in the former royal palace."),
    place("sof-ethnographic", "Ethnographic Museum", 42.6965, 23.3278, "museum", "Museum", "Center", 6, "Folk costumes and crafts in the palace wing."),
    place("sof-archaeology", "National Archaeological Museum", 42.6965, 23.3245, "museum", "Museum", "Center", 7, "Thracian treasures in a former mosque."),
    place("sof-rotunda", "Church of St. George Rotunda", 42.6968, 23.3225, "sight", "Monument", "Center", 8, "Red-brick Roman rotunda in a courtyard behind the presidency."),
    place("sof-presidency", "Presidency building", 42.6965, 23.3235, "sight", "Monument", "Center", 5, "Changing of the guard on the central square."),
    place("sof-banya", "Banya Bashi Mosque", 42.6995, 23.3225, "sight", "Monument", "Center", 7, "Ottoman mosque still in use by the mineral baths."),
    place("sof-synagogue", "Sofia Synagogue", 42.7005, 23.3215, "sight", "Monument", "Center", 7, "Largest Sephardic synagogue in Europe."),
    place("sof-mineral", "Public Mineral Baths building", 42.6998, 23.3235, "sight", "Monument", "Center", 7, "Vienna Secession bathhouse — now a history museum."),
    place("sof-history", "Sofia History Museum", 42.6995, 23.3238, "museum", "Museum", "Center", 7, "City history inside the restored mineral baths."),
    place("sof-sveta-nedelya", "Sveta Nedelya Church", 42.6965, 23.3215, "sight", "Monument", "Center", 7, "Cathedral church on the central square."),
    place("sof-serdica", "Serdica archaeological complex", 42.6975, 23.3215, "sight", "Attraction", "Center", 7, "Roman streets under glass between Largo buildings."),
    place("sof-largo", "The Largo", 42.6972, 23.3218, "sight", "Attraction", "Center", 6, "Communist-era triad of party buildings at the centre."),

    // ——— Vitosha Boulevard / South centre ———
    place("sof-vitosha", "Vitosha Boulevard", 42.69, 23.32, "shopping", "Market", "Center", 8, "Pedestrian spine of shops, cafés, and mountain views south."),
    place("sof-crystal", "Crystal Garden / Kristal park", 42.6885, 23.3245, "nature", "Park", "Center", 5, "Small green pocket off Vitosha Boulevard."),
    place("sof-ndk", "National Palace of Culture (NDK)", 42.6855, 23.3185, "sight", "Attraction", "Center", 7, "Vast congress complex with a fountain plaza."),
    place("sof-ndk-park", "NDK park / South Park edge", 42.6845, 23.3175, "nature", "Park", "Center", 6, "Lawn and fountains around the culture palace."),
    place("sof-earth", "Earth and Man Museum", 42.6865, 23.3155, "museum", "Museum", "Center", 5, "Mineral and crystal museum near NDK."),
    place("sof-slaveykov", "Slaveykov Square book market", 42.6925, 23.3235, "shopping", "Market", "Center", 6, "Open-air book stalls in the centre."),
    place("sof-women", "Women's Market (Zhenski Pazar)", 42.702, 23.32, "shopping", "Market", "Center", 6, "Everyday produce market north of the synagogue."),
    place("sof-tzum", "TZUM department store", 42.6978, 23.3228, "shopping", "Market", "Center", 5, "Central mall by the Largo."),

    // ——— Borisova / East ———
    place("sof-borisova", "Borisova Gradina", 42.683, 23.34, "nature", "Park", "East", 8, "Sofia's great park — lakes, stadium, and tree-lined alleys."),
    place("sof-stadium", "Vasil Levski Stadium area", 42.6875, 23.3355, "sight", "Attraction", "East", 5, "National stadium on the park edge."),
    place("sof-sofia-uni", "Sofia University", 42.6935, 23.3345, "sight", "Monument", "Center", 6, "Rectorate facade facing the park approach."),
    place("sof-doctors", "Doctors' Garden", 42.6935, 23.3365, "nature", "Park", "Center", 6, "Quiet garden with a medical-history monument."),
    place("sof-orlov", "Orlov Most (Eagles' Bridge)", 42.6905, 23.3375, "sight", "Attraction", "East", 5, "Landmark bridge toward Borisova Gradina."),
    place("sof-military", "National Museum of Military History", 42.6875, 23.3485, "museum", "Museum", "East", 6, "Tanks and uniforms east of the park."),
    place("sof-tv", "TV Tower / Kopitoto views (city side)", 42.6755, 23.3455, "sight", "Viewpoint", "South", 5, "City approaches toward Vitosha foothills."),

    // ——— Boyana / Vitosha ———
    place("sof-boyana", "Boyana Church", 42.645, 23.266, "sight", "Monument", "Boyana", 9, "UNESCO medieval frescoes — dedicate a short ride."),
    place("sof-history-nat", "National History Museum", 42.657, 23.271, "museum", "Museum", "Boyana", 8, "Bulgaria's largest history museum in Boyana residence."),
    place("sof-boyana-res", "Boyana Residence grounds", 42.6565, 23.2705, "nature", "Park", "Boyana", 5, "Parkland around the history museum."),
    place("sof-vitosha-drag", "Dragalevtsi trailhead", 42.6355, 23.3055, "nature", "Park", "Vitosha", 7, "Village gateway to Vitosha mountain hikes."),
    place("sof-vitosha-sim", "Simeonovo / Vitosha lift area", 42.6285, 23.3355, "nature", "Park", "Vitosha", 7, "Cable-car access toward Aleko and Cherni Vrah."),
    place("sof-dragalevtsi-mon", "Dragalevtsi Monastery", 42.6385, 23.2985, "sight", "Monument", "Vitosha", 6, "Forest monastery above the suburb."),
    place("sof-zoo", "Sofia Zoo", 42.6585, 23.2785, "sight", "Attraction", "Boyana", 5, "City zoo near the National History Museum."),

    // ——— West / North neighbourhoods ———
    place("sof-lozenets", "Lozenets neighbourhood", 42.6755, 23.3255, "sight", "Attraction", "Lozenets", 5, "Leafy residential area south of NDK."),
    place("sof-south-park", "South Park (Yuzhen Park)", 42.6655, 23.3155, "nature", "Park", "Lozenets", 7, "Large southern park popular with joggers."),
    place("sof-studentski", "Studentski Grad", 42.65, 23.35, "sight", "Attraction", "Studentski", 4, "Student campus district — budget eats and nightlife."),
    place("sof-ilientsi", "Iliantsi / northwest markets", 42.7255, 23.2955, "shopping", "Market", "North", 4, "Large wholesale market zone."),
    place("sof-central-station", "Central Railway Station", 42.7125, 23.3215, "sight", "Attraction", "North", 4, "Main rail arrival point north of the centre."),

    // ——— More museums ———
    place("sof-polytechnic", "National Polytechnic Museum", 42.6985, 23.3185, "museum", "Museum", "Center", 5, "Science and technology collections west of the Largo."),
    place("sof-natural", "National Museum of Natural History", 42.6955, 23.3272, "museum", "Museum", "Center", 6, "Dinosaurs and minerals near the Russian Church."),
    place("sof-kvadrat", "KVADRAT 500 / National Gallery", 42.6925, 23.3345, "museum", "Museum", "Center", 7, "Modern national gallery collections."),
    place("sof-sofia-arsenal", "Sofia Arsenal Museum for Contemporary Art", 42.6855, 23.3285, "museum", "Museum", "Center", 5, "Contemporary shows in a former arsenal."),
    place("sof-red-house", "The Red House Centre", 42.6915, 23.3285, "museum", "Museum", "Center", 5, "Culture and debate venue in a modernist house."),
    place("sof-street-art", "Street art around Kapana-style lanes", 42.6985, 23.3255, "sight", "Attraction", "Center", 5, "Murals and indie galleries north of the Largo."),

    // ——— Cafes ———
    place("sof-cafe-cog", "Coffee House / Vitosha cafés", 42.6915, 23.3205, "cafe", "Cafe", "Center", 6, "Terrace coffee on the pedestrian boulevard.", { cuisine: "coffee" }),
    place("sof-cafe-apart", "The Apartment Café", 42.6935, 23.3255, "cafe", "Cafe", "Center", 7, "Cosy specialty coffee near the Russian Church.", { cuisine: "coffee" }),
    place("sof-cafe-wise", "Wise Guys Coffee", 42.6885, 23.3185, "cafe", "Cafe", "Center", 7, "Third-wave espresso near NDK.", { cuisine: "coffee" }),
    place("sof-cafe-doko", "Doko Café", 42.6945, 23.3225, "cafe", "Cafe", "Center", 6, "Central brunch and coffee spot.", { cuisine: "brunch coffee" }),
    place("sof-cafe-baker", "Little Things / bakery cafés", 42.6925, 23.3215, "cafe", "Cafe", "Center", 6, "Pastry-focused cafés off Vitosha.", { cuisine: "bakery coffee" }),
    place("sof-cafe-lozen", "Lozenets garden café", 42.6765, 23.3245, "cafe", "Cafe", "Lozenets", 5, "Quiet neighbourhood coffee south of NDK.", { cuisine: "coffee" }),

    // ——— Food ———
    place("sof-food-manastirska", "Manastirska Magernitsa", 42.6885, 23.3285, "food", "Restaurant", "Center", 8, "Traditional Bulgarian recipes in a garden setting.", { cuisine: "bulgarian" }),
    place("sof-food-made", "Made in Blue", 42.6935, 23.3265, "food", "Restaurant", "Center", 7, "Contemporary Bulgarian near the galleries.", { cuisine: "bulgarian" }),
    place("sof-food-raketa", "Raketa Rakia Bar", 42.6915, 23.3225, "food", "Restaurant", "Center", 7, "Socialist-nostalgia décor and Bulgarian plates.", { cuisine: "bulgarian" }),
    place("sof-food-divaka", "Divaka", 42.6865, 23.3215, "food", "Restaurant", "Center", 7, "Meat-forward Bulgarian classics near NDK.", { cuisine: "bulgarian" }),
    place("sof-food-chevermeto", "Chevermeto", 42.6855, 23.3355, "food", "Restaurant", "East", 7, "Folklore dinner with spit-roast lamb.", { cuisine: "bulgarian" }),
    place("sof-food-banitsa", "Banitsa bakery stand", 42.6945, 23.3218, "food", "Quick meal", "Center", 7, "Flaky cheese pastry — breakfast essential.", { cuisine: "bulgarian bakery" }),
    place("sof-food-shopska", "Shopska salad lunch spot", 42.6925, 23.3208, "food", "Restaurant", "Center", 6, "Tomato-cucumber-sirene classic on Vitosha.", { cuisine: "bulgarian" }),
    place("sof-food-skewers", "Skara / grill houses", 42.6985, 23.3185, "food", "Restaurant", "Center", 6, "Kebapche and kyufte grill rooms.", { cuisine: "bulgarian grill" }),
    place("sof-food-market", "Women's Market bites", 42.7015, 23.3205, "food", "Quick meal", "Center", 5, "Fresh produce and quick eats at the market.", { cuisine: "market bulgarian" }),
    place("sof-food-sushi", "Before & After / modern centre", 42.6905, 23.3215, "food", "Restaurant", "Center", 6, "Modern European plates on Vitosha.", { cuisine: "european" }),
    place("sof-food-vegan", "Loving Hut / vegan Sofia", 42.6885, 23.3195, "food", "Restaurant", "Center", 5, "Plant-based option near NDK.", { cuisine: "vegan vegetarian" }),
    place("sof-food-italian", "Shtastliveca", 42.6948, 23.3245, "food", "Restaurant", "Center", 7, "Popular Bulgarian restaurant by the yellow cobbles.", { cuisine: "bulgarian" }),
    place("sof-food-boyana", "Boyana lunch near the church", 42.6455, 23.2675, "food", "Restaurant", "Boyana", 5, "Simple meals after the fresco visit.", { cuisine: "bulgarian" }),
    place("sof-food-night", "Skapto burger / casual", 42.6918, 23.3195, "food", "Quick meal", "Center", 5, "Casual burgers off the boulevard.", { cuisine: "burgers" }),

    // ——— Nightlife ———
    place("sof-night-vitosha", "Vitosha Boulevard bars", 42.6912, 23.3202, "nightlife", "Bar", "Center", 7, "Terrace hopping on the pedestrian strip."),
    place("sof-night-library", "The Library / cocktail bars", 42.6935, 23.3235, "nightlife", "Bar", "Center", 7, "Cocktail dens around the centre."),
    place("sof-night-studentski", "Studentski Grad nightlife", 42.6515, 23.3485, "nightlife", "Bar", "Studentski", 5, "Student clubs and late bars."),
    place("sof-night-yalta", "Yalta club nights", 42.6885, 23.3325, "nightlife", "Bar", "East", 6, "Long-running club near Borisova."),
    place("sof-night-mix", "Mixtape 5 / live music", 42.6955, 23.3185, "nightlife", "Bar", "Center", 6, "Live music venue west of the centre."),
    place("sof-night-ndk", "NDK evening plaza", 42.6858, 23.3188, "nightlife", "Bar", "Center", 5, "Summer events and bars around NDK."),
    place("sof-night-bar", "One More Bar", 42.6945, 23.3255, "nightlife", "Bar", "Center", 6, "Rooftop and late drinks near Nevsky."),
    place("sof-night-basement", "Club House / basement clubs", 42.6925, 23.3185, "nightlife", "Bar", "Center", 5, "Underground club circuit."),

    // ——— Stays ———
    place("sof-stay-sense", "Sense Hotel Sofia", 42.6955, 23.3315, "stay", "Hotel", "Center", 9, "Design luxury facing Alexander Nevsky."),
    place("sof-stay-sofia", "Sofia Hotel Balkan", 42.6968, 23.3228, "stay", "Hotel", "Center", 8, "Landmark hotel on the Largo."),
    place("sof-stay-marriott", "Sofia Marriott Hotel", 42.6945, 23.3195, "stay", "Hotel", "Center", 8, "Central business luxury near Vitosha."),
    place("sof-stay-inter", "InterContinental Sofia", 42.6955, 23.3295, "stay", "Hotel", "Center", 8, "High-rise rooms near the parliament."),
    place("sof-stay-arena", "Arena di Serdica", 42.6975, 23.3245, "stay", "Hotel", "Center", 7, "Boutique hotel over Roman ruins."),
    place("sof-stay-art", "Art Hotel Simona", 42.6925, 23.3255, "stay", "Hotel", "Center", 6, "Small central hotel near galleries."),
    place("sof-stay-hostel", "Hostel Mostel Sofia", 42.6985, 23.3185, "stay", "Hostel", "Center", 6, "Popular backpacker hostel west of the Largo."),
    place("sof-stay-canape", "Canapé Connection", 42.6935, 23.3215, "stay", "Hostel", "Center", 6, "Homey hostel near Vitosha Boulevard."),
    place("sof-stay-ndk", "NDK area hotel", 42.6865, 23.3195, "stay", "Hotel", "Center", 6, "Midrange base by the culture palace."),
    place("sof-stay-apt-nevsky", "Nevsky apartment", 42.6962, 23.3318, "stay", "Apartment", "Center", 7, "Self-catering with cathedral views."),
    place("sof-stay-apt-vitosha", "Vitosha Boulevard apartment", 42.6905, 23.3205, "stay", "Apartment", "Center", 7, "Above the pedestrian shopping spine."),
    place("sof-stay-guest", "Lozenets guest house", 42.6775, 23.3235, "stay", "Guest house", "Lozenets", 5, "Quiet residential stay south of NDK."),
    place("sof-stay-boyana", "Boyana hillside stay", 42.6485, 23.2685, "stay", "Hotel", "Boyana", 6, "Base near the church and Vitosha trails."),
    place("sof-stay-radisson", "Radisson Blu Sofia", 42.6948, 23.3315, "stay", "Hotel", "Center", 7, "Reliable upscale rooms by Nevsky."),
    place("sof-stay-ibis", "ibis Sofia Airport / city budget", 42.7025, 23.3155, "stay", "Hotel", "North", 5, "Budget chain option toward the north."),
  ],
};
