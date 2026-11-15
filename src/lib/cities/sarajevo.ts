import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const sarajevo: CityCatalog = {
  id: "sarajevo",
  name: "Sarajevo, Bosnia and Herzegovina",
  aliases: ["sarajevo", "сарајево"],
  center: { lat: 43.8563, lon: 18.4131 },
  places: [
    // ——— Baščaršija / Old Town ———
    place("sar-bascarsija", "Baščaršija", 43.8595, 18.431, "sight", "Attraction", "Baščaršija", 10, "Ottoman bazaar heart — copperware, ćevapi, and cobbles."),
    place("sar-sebilj", "Sebilj fountain", 43.8597, 18.4313, "sight", "Attraction", "Baščaršija", 8, "Wooden fountain on the pigeons' square — city symbol."),
    place("sar-gazi", "Gazi Husrev-beg Mosque", 43.8592, 18.4295, "sight", "Monument", "Baščaršija", 9, "Great Ottoman mosque with courtyard and madrasa."),
    place("sar-sahat", "Sahat-kula clock tower", 43.859, 18.4292, "sight", "Monument", "Baščaršija", 6, "Lunar-time clock beside the mosque."),
    place("sar-bezistan", "Gazi Husrev-beg Bezistan", 43.859, 18.4305, "shopping", "Market", "Baščaršija", 7, "Covered bazaar hall of shops and crafts."),
    place("sar-bravadziluk", "Bravadžiluk street", 43.8593, 18.4315, "shopping", "Market", "Baščaršija", 7, "Ćevapi lane and metalworkers' street."),
    place("sar-kazandziluk", "Kazandžiluk (Copper Street)", 43.8588, 18.4325, "shopping", "Market", "Baščaršija", 8, "Hammered copper souvenirs and workshops."),
    place("sar-morica", "Morića Han", 43.8595, 18.4285, "sight", "Attraction", "Baščaršija", 7, "Restored caravanserai courtyard for tea and crafts."),
    place("sar-sadrvan", "Mosque courtyard šadrvan", 43.8593, 18.4293, "sight", "Attraction", "Baščaršija", 6, "Ablution fountain inside Gazi Husrev-beg complex."),
    place("sar-old-orthodox", "Old Orthodox Church", 43.8595, 18.428, "sight", "Monument", "Baščaršija", 6, "Small church museum of icons near the bazaar."),
    place("sar-synagogue", "Sarajevo Synagogue / Jewish Museum", 43.8565, 18.4255, "museum", "Museum", "Center", 7, "Sephardic heritage in the Ashkenazi synagogue."),
    place("sar-cathedral", "Sacred Heart Cathedral", 43.8585, 18.4255, "sight", "Monument", "Center", 7, "Neo-Gothic Catholic cathedral on the Ferhadija edge."),
    place("sar-ferhadija", "Ferhadija Street", 43.8585, 18.4245, "shopping", "Market", "Center", 7, "Pedestrian spine linking Austro-Hungarian and Ottoman towns."),
    place("sar-latinska", "Latin Bridge", 43.8577, 18.4288, "sight", "Monument", "Center", 8, "Ottoman bridge by the 1914 assassination site."),
    place("sar-museum-sarajevo", "Museum Sarajevo 1878–1918", 43.8578, 18.4285, "museum", "Museum", "Center", 7, "Franz Ferdinand assassination exhibition by the bridge."),
    place("sar-inatl", "Inat Kuća", 43.8575, 18.4305, "sight", "Attraction", "Baščaršija", 6, "House of Spite folklore landmark across the river."),
    place("sar-cemetery", "Kovači Martyrs' Cemetery", 43.8625, 18.4335, "sight", "Monument", "Vratnik", 7, "Hillside cemetery overlooking the Old Town."),
    place("sar-yellow", "Yellow Fortress (Žuta Tabija)", 43.8635, 18.4345, "sight", "Viewpoint", "Vratnik", 8, "Sunset rampart views over Baščaršija rooftops."),
    place("sar-white", "White Fortress (Bijela Tabija)", 43.8655, 18.4365, "sight", "Viewpoint", "Vratnik", 7, "Higher fortress ruins above the Yellow Fortress."),
    place("sar-vratnik", "Vratnik neighbourhood lanes", 43.8645, 18.4335, "sight", "Attraction", "Vratnik", 6, "Ottoman hillside quarter of quiet alleys."),

    // ——— Austro-Hungarian centre ———
    place("sar-vijecnica", "City Hall (Vijećnica)", 43.859, 18.4345, "sight", "Monument", "Baščaršija", 9, "Neo-Moorish hall rebuilt after the war — now library and museum."),
    place("sar-eternity", "Eternal Flame", 43.8585, 18.4215, "sight", "Monument", "Center", 6, "WWII liberation memorial at Ferhadija's west end."),
    place("sar-triroza", "Trg Fra Grge Martića / cathedral square", 43.8582, 18.4258, "sight", "Attraction", "Center", 5, "Plaza by the Catholic cathedral."),
    place("sar-gallery", "National Gallery of Bosnia and Herzegovina", 43.8575, 18.42, "museum", "Museum", "Center", 6, "Bosnian art collections in the centre."),
    place("sar-theatre", "National Theatre Sarajevo", 43.8575, 18.4225, "sight", "Monument", "Center", 5, "Colourful theatre on the central square."),
    place("sar-marks", "Markale Market memorial", 43.8585, 18.4235, "sight", "Monument", "Center", 6, "Marketplace memorial from the siege years."),
    place("sar-children", "Memorial to Children of Sarajevo", 43.8555, 18.4125, "sight", "Monument", "Center", 6, "Siege memorial in the western centre."),
    place("sar-sniper", "Sniper Alley (Zmaja od Bosne)", 43.8555, 18.3955, "sight", "Attraction", "Center", 6, "Boulevard of wartime memory between museums."),
    place("sar-holiday", "Holiday Inn wartime landmark", 43.8555, 18.4025, "sight", "Attraction", "Center", 5, "Yellow hotel famous from siege journalism."),

    // ——— Museums ———
    place("sar-national", "National Museum of BiH", 43.8545, 18.402, "museum", "Museum", "Center", 7, "Archaeology, ethnology, and the Sarajevo Haggadah."),
    place("sar-history", "History Museum of BiH", 43.8555, 18.4005, "museum", "Museum", "Center", 7, "Siege and 20th-century exhibitions beside the National Museum."),
    place("sar-tunnel", "Tunnel of Hope Museum", 43.8205, 18.337, "museum", "Museum", "Butmir", 10, "Siege tunnel under the airport — give it its own transfer."),
    place("sar-war", "War Childhood Museum", 43.8585, 18.4185, "museum", "Museum", "Center", 8, "Personal objects from children of the 1990s siege."),
    place("sar-srebrenica", "Srebrenica Gallery 11/07/95", 43.8585, 18.4265, "museum", "Museum", "Center", 8, "Photography gallery on the genocide and its aftermath."),
    place("sar-despić", "Despić House", 43.8575, 18.4295, "museum", "Museum", "Baščaršija", 6, "Ottoman-era merchant house museum."),
    place("sar-sevdah", "Museum of Sevdah", 43.8595, 18.4308, "museum", "Museum", "Baščaršija", 6, "Traditional Bosnian song culture in the bazaar."),
    place("sar-aliya", "Alija Izetbegović Museum", 43.8625, 18.4325, "museum", "Museum", "Vratnik", 5, "First presidency museum in a fortress gate."),
    place("sar-brusa", "Brusa Bezistan museum", 43.8588, 18.4302, "museum", "Museum", "Baščaršija", 6, "Archaeology displays in an Ottoman covered market."),
    place("sar-jewish-cemetery", "Old Jewish Cemetery", 43.8455, 18.4055, "sight", "Monument", "South", 6, "Historic hillside cemetery with wartime traces."),

    // ——— Parks / viewpoints / outer ———
    place("sar-goat", "Goat's Bridge (Kozija ćuprija)", 43.8555, 18.4655, "sight", "Monument", "East", 6, "Ottoman bridge on the old road east of town."),
    place("sar-skakavac", "Skakavac waterfall trailhead", 43.9455, 18.4455, "nature", "Park", "North", 7, "Day-hike waterfall in the mountains above Sarajevo."),
    place("sar-trebevic", "Trebević cable car", 43.8565, 18.4255, "sight", "Attraction", "Center", 8, "Cable car to mountain views and the Olympic bobsleigh."),
    place("sar-bobsleigh", "Trebević bobsleigh track", 43.8425, 18.4555, "sight", "Attraction", "Trebević", 7, "Graffiti-covered Olympic track in the forest."),
    place("sar-trebevic-view", "Trebević viewpoint", 43.8415, 18.4525, "sight", "Viewpoint", "Trebević", 7, "Panorama back over the Sarajevo valley."),
    place("sar-vilsonovo", "Vilsonovo Šetalište", 43.8525, 18.3955, "nature", "Park", "Center", 7, "Tree-lined riverside promenade west of the centre."),
    place("sar-velik", "Veliki Park", 43.8585, 18.4155, "nature", "Park", "Center", 5, "Central green space near government buildings."),
    place("sar-ilidza", "Ilidža / Vrelo Bosne", 43.8205, 18.2855, "nature", "Park", "Ilidža", 8, "Springs of the Bosna river — carriage rides and paths."),
    place("sar-romed", "Roman bridge Ilidža", 43.8255, 18.2955, "sight", "Monument", "Ilidža", 5, "Stone bridge on the way to Vrelo Bosne."),
    place("sar-airport", "Sarajevo Airport area", 43.8245, 18.3315, "sight", "Attraction", "Butmir", 4, "Orientation for Tunnel of Hope transfers."),

    // ——— Neighbourhoods ———
    place("sar-maric", "Marijin Dvor", 43.8555, 18.4055, "sight", "Attraction", "Center", 5, "Austro-Hungarian administrative quarter."),
    place("sar-alifakovac", "Alifakovac cemetery hill", 43.8565, 18.4355, "sight", "Viewpoint", "Baščaršija", 7, "Ottoman tombstones and Old Town views."),
    place("sar-bistrik", "Bistrik neighbourhood", 43.8525, 18.4255, "sight", "Attraction", "Bistrik", 5, "Hillside quarter south of the Miljacka."),
    place("sar-grbavica", "Grbavica", 43.8455, 18.3855, "sight", "Attraction", "Grbavica", 4, "Residential district with wartime history."),
    place("sar-novo", "Novo Sarajevo skyline", 43.8485, 18.3755, "sight", "Attraction", "Novo Sarajevo", 4, "Modern apartment blocks west along the valley."),
    place("sar-miljacka", "Miljacka river walk", 43.8575, 18.4255, "nature", "Park", "Center", 7, "Embankment stroll past bridges and cafés."),

    // ——— Shopping ———
    place("sar-coppersmith", "Baščaršija craft stalls", 43.8594, 18.4305, "shopping", "Market", "Baščaršija", 7, "Copper, carpets, and tourist crafts."),
    place("sar-mall", "Importanne / modern malls", 43.8555, 18.4085, "shopping", "Market", "Center", 4, "Contemporary shopping west of Ferhadija."),
    place("sar-bijela", "Bijela Tabija souvenir path", 43.8645, 18.4355, "shopping", "Market", "Vratnik", 4, "Small stalls on the fortress climb."),

    // ——— Cafes ———
    place("sar-cafe-mori", "Morića Han tea", 43.8596, 18.4288, "cafe", "Cafe", "Baščaršija", 7, "Traditional tea in the caravanserai courtyard.", { cuisine: "tea coffee" }),
    place("sar-cafe-egipat", "Café Egipat", 43.8595, 18.4305, "cafe", "Cafe", "Baščaršija", 6, "Old-school bazaar coffee stop.", { cuisine: "coffee" }),
    place("sar-cafe-rah", "Rahatlook", 43.8585, 18.4275, "cafe", "Cafe", "Center", 7, "Popular café near the cathedral.", { cuisine: "coffee" }),
    place("sar-cafe-ministry", "Ministry of Ćejf", 43.8588, 18.4245, "cafe", "Cafe", "Center", 7, "Specialty coffee on Ferhadija.", { cuisine: "coffee" }),
    place("sar-cafe-zlatna", "Zlatna Ribica", 43.8585, 18.4225, "cafe", "Cafe", "Center", 6, "Eclectic décor café-bar.", { cuisine: "coffee cocktails" }),
    place("sar-cafe-bistrik", "Bistrik hillside café", 43.8535, 18.4265, "cafe", "Cafe", "Bistrik", 5, "Quiet coffee above the river.", { cuisine: "coffee" }),

    // ——— Food ———
    place("sar-food-cevapi", "Ćevabdžinica Željo", 43.859, 18.4302, "food", "Restaurant", "Baščaršija", 9, "Legendary ćevapi in somun bread.", { cuisine: "bosnian" }),
    place("sar-food-mrkva", "Ćevabdžinica Mrkva", 43.8592, 18.4312, "food", "Restaurant", "Baščaršija", 8, "Another classic ćevapi counter by Sebilj.", { cuisine: "bosnian" }),
    place("sar-food-buregd", "Buregdžinica Bosna", 43.8595, 18.4295, "food", "Quick meal", "Baščaršija", 7, "Flaky burek and sirnica by weight.", { cuisine: "bosnian bakery" }),
    place("sar-food-inat", "Inat Kuća restaurant", 43.8575, 18.4308, "food", "Restaurant", "Baščaršija", 7, "Traditional Bosnian across the Miljacka.", { cuisine: "bosnian" }),
    place("sar-food-dveri", "Dveri", 43.8588, 18.4285, "food", "Restaurant", "Baščaršija", 7, "Homestyle Bosnian in a side alley.", { cuisine: "bosnian" }),
    place("sar-food-aščinica", "Aščinica ASDŽ", 43.8593, 18.4308, "food", "Restaurant", "Baščaršija", 7, "Ottoman stew-house tradition.", { cuisine: "bosnian" }),
    place("sar-food-sweet", "Baklava / sweet shops", 43.8594, 18.4312, "food", "Quick meal", "Baščaršija", 7, "Baklava and tufahija in the bazaar.", { cuisine: "bosnian pastry" }),
    place("sar-food-klopa", "Klopa / modern Bosnian", 43.8575, 18.42, "food", "Restaurant", "Center", 6, "Contemporary plates west of Ferhadija.", { cuisine: "bosnian european" }),
    place("sar-food-pizza", "Metropolis / casual centre", 43.8575, 18.4235, "food", "Restaurant", "Center", 5, "Casual international near the theatre.", { cuisine: "european" }),
    place("sar-food-market", "Markale market bites", 43.8582, 18.4232, "food", "Quick meal", "Center", 5, "Fresh produce and snacks at the market.", { cuisine: "market bosnian" }),
    place("sar-food-ilidza", "Ilidža riverside lunch", 43.8215, 18.2865, "food", "Restaurant", "Ilidža", 5, "Meals after Vrelo Bosne walks.", { cuisine: "bosnian" }),
    place("sar-food-sahan", "Sač / slow-roast dinners", 43.8585, 18.4295, "food", "Restaurant", "Baščaršija", 6, "Meat and vegetables under the bell lid.", { cuisine: "bosnian" }),
    place("sar-food-vegetarian", "Vegetarian / vegan Baščaršija", 43.859, 18.4288, "food", "Restaurant", "Baščaršija", 5, "Plant-based options near the han.", { cuisine: "vegetarian vegan" }),
    place("sar-food-fish", "Miljacka fish grill", 43.8575, 18.4275, "food", "Restaurant", "Center", 5, "River-adjacent grilled fish.", { cuisine: "seafood bosnian" }),

    // ——— Nightlife ———
    place("sar-night-bas", "Baščaršija bars", 43.8588, 18.429, "nightlife", "Bar", "Baščaršija", 6, "Rakija and lounge bars around the bazaar."),
    place("sar-night-zab", "Zlatna Ribica night", 43.8585, 18.4228, "nightlife", "Bar", "Center", 7, "Eclectic late bar in the centre."),
    place("sar-night-club", "Club Underground / centre", 43.8565, 18.415, "nightlife", "Bar", "Center", 5, "Late clubs west of Ferhadija."),
    place("sar-night-sadr", "Šadrvan evenings", 43.8592, 18.4305, "nightlife", "Bar", "Baščaršija", 5, "Tea-and-nargile courtyards after dark."),
    place("sar-night-treb", "Trebević sunset drinks", 43.8418, 18.4528, "nightlife", "Bar", "Trebević", 5, "Mountain café drinks after the cable car."),
    place("sar-night-radio", "Radio Bar / live", 43.8575, 18.4185, "nightlife", "Bar", "Center", 6, "Live music and cocktails."),
    place("sar-night-deck", "Deck / riverside", 43.8572, 18.4245, "nightlife", "Bar", "Center", 6, "Miljacka embankment drinks."),
    place("sar-night-ilidza", "Ilidža evening", 43.8225, 18.2885, "nightlife", "Bar", "Ilidža", 4, "Quiet suburb bars after the springs."),

    // ——— Stays ———
    place("sar-stay-europe", "Hotel Europe Sarajevo", 43.8585, 18.4265, "stay", "Hotel", "Center", 8, "Historic luxury between bazaar and Ferhadija."),
    place("sar-stay-president", "Hotel President Sarajevo", 43.8575, 18.4225, "stay", "Hotel", "Center", 7, "Central upscale hotel near the theatre."),
    place("sar-stay-swiss", "Swissôtel Sarajevo", 43.8555, 18.3955, "stay", "Hotel", "Center", 8, "Modern tower on the western boulevard."),
    place("sar-stay-old", "Hotel Old Town / Baščaršija", 43.8591, 18.43, "stay", "Hotel", "Baščaršija", 7, "Boutique rooms inside the bazaar."),
    place("sar-stay-austria", "Hotel Austria & Bosnia", 43.8585, 18.4285, "stay", "Hotel", "Baščaršija", 7, "Classic stay by Latin Bridge."),
    place("sar-stay-hcc", "HCC Warski / central", 43.8568, 18.4135, "stay", "Hotel", "Center", 6, "Midrange base west of the Old Town."),
    place("sar-stay-hostel", "Hostel Franz Ferdinand", 43.858, 18.427, "stay", "Hostel", "Baščaršija", 6, "Popular hostel near the bazaar."),
    place("sar-stay-story", "Story Hostel / downtown", 43.8575, 18.42, "stay", "Hostel", "Center", 6, "Central backpacker stay."),
    place("sar-stay-guest", "Vratnik guest house", 43.86, 18.432, "stay", "Guest house", "Vratnik", 6, "Hillside rooms above the Yellow Fortress."),
    place("sar-stay-apt-bas", "Baščaršija apartment", 43.8592, 18.4308, "stay", "Apartment", "Baščaršija", 7, "Self-catering above the copper street."),
    place("sar-stay-apt-fer", "Ferhadija apartment", 43.8585, 18.424, "stay", "Apartment", "Center", 7, "Pedestrian-street base between empires."),
    place("sar-stay-ilidza", "Ilidža spa hotel", 43.8215, 18.2925, "stay", "Hotel", "Ilidža", 6, "Thermal-area stay near Vrelo Bosne."),
  ],
};
