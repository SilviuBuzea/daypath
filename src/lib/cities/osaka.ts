import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const osaka: CityCatalog = {
  id: "osaka",
  name: "Osaka, Japan",
  aliases: ["osaka"],
  center: { lat: 34.6937, lon: 135.5023 },
  places: [
    // ——— Osaka Castle & nearby ———
    place("osk-castle", "Osaka Castle", 34.6873, 135.5262, "sight", "Monument", "Osaka Castle", 10, "Rebuilt keep with museum floors and huge park moats — go at open.", { tip: "Climb for city views; gardens shine in cherry and autumn seasons.", flags: ["ticket", "touristy"] }),
    place("osk-castle-park", "Osaka Castle Park", 34.6885, 135.5255, "nature", "Park", "Osaka Castle", 9, "Plum grove, lawns, and jog paths around the moats.", { flags: ["free"] }),
    place("osk-nishinomaru", "Nishinomaru Garden", 34.6865, 135.5235, "nature", "Garden", "Osaka Castle", 8, "Paid garden with castle keep framed by cherry trees.", { flags: ["ticket"] }),
    place("osk-museum-history", "Osaka Museum of History", 34.6825, 135.5205, "museum", "Museum", "Osaka Castle", 8, "Life-size Naniwa palace reconstructions with castle views from upper floors.", { flags: ["ticket"] }),
    place("osk-nhk", "NHK Osaka hall area", 34.6835, 135.5195, "sight", "Attraction", "Osaka Castle", 5, "Broadcast complex beside the history museum."),

    // ——— Dotonbori & Namba ———
    place("osk-dotonbori", "Dotonbori canal street", 34.6686, 135.5013, "sight", "Attraction", "Dotonbori", 10, "Neon signs, Glico runner, and street-food densest strip in Osaka.", { flags: ["free", "touristy"] }),
    place("osk-glico", "Glico Man sign", 34.6687, 135.5012, "sight", "Monument", "Dotonbori", 9, "Iconic running neon — best from Ebisubashi bridge.", { flags: ["touristy"] }),
    place("osk-ebisubashi", "Ebisubashi Bridge", 34.6688, 135.501, "sight", "Viewpoint", "Dotonbori", 8, "Central photo bridge over the canal lights."),
    place("osk-kuromon", "Kuromon Market", 34.6665, 135.5065, "shopping", "Market", "Namba", 9, "Seafood skewers and fruit — go hungry before lunch rush.", { cuisine: "street food", flags: ["touristy"] }),
    place("osk-shinsaibashi", "Shinsaibashi-suji shopping arcade", 34.6735, 135.5015, "shopping", "Market", "Shinsaibashi", 8, "Covered fashion arcade linking Nagahoribashi to Dotonbori."),
    place("osk-america-mura", "Amerikamura (America Village)", 34.6725, 135.4985, "shopping", "Market", "Amerikamura", 7, "Streetwear, vintage shops, and triangle park youth culture."),
    place("osk-hombu", "Hozenji Temple & Yokocho", 34.6682, 135.5028, "sight", "Monument", "Dotonbori", 8, "Moss-covered Fudo statue in a lantern alley off the neon."),
    place("osk-namba-yasaka", "Namba Yasaka Shrine", 34.6625, 135.4965, "sight", "Monument", "Namba", 8, "Giant lion-head stage shrine — striking photo stop."),
    place("osk-den-den", "Den Den Town (Nipponbashi)", 34.6605, 135.5055, "shopping", "Market", "Nipponbashi", 7, "Anime, games, and electronics south of Namba."),
    place("osk-sennichimae", "Sennichimae Doguyasuji tool street", 34.6655, 135.5035, "shopping", "Market", "Namba", 7, "Kitchen knives and plastic food samples for chefs and collectors."),
    place("osk-namba-parks", "Namba Parks rooftop garden", 34.6615, 135.5018, "nature", "Garden", "Namba", 7, "Canyon mall with rooftop greenery above Namba Station."),
    place("osk-tocotoco", "Takoyaki street stalls Dotonbori", 34.6685, 135.5025, "food", "Restaurant", "Dotonbori", 8, "Compare octopus-ball stands — eat standing at the counter.", { cuisine: "takoyaki" }),
    place("osk-ichiran", "Ichiran ramen Namba", 34.6675, 135.5018, "food", "Restaurant", "Namba", 7, "Solo booth tonkotsu — late-night carb reset.", { cuisine: "ramen" }),

    // ——— Shinsekai & Tennoji ———
    place("osk-shinsekai", "Shinsekai & Tsutenkaku", 34.6525, 135.5065, "sight", "Attraction", "Shinsekai", 9, "Retro neon district under the tower — kushikatsu central.", { flags: ["touristy"] }),
    place("osk-tsutenkaku", "Tsutenkaku Tower", 34.6523, 135.5063, "sight", "Viewpoint", "Shinsekai", 8, "Observation decks over southern Osaka.", { flags: ["ticket"] }),
    place("osk-janjan", "Janjan Yokocho alley", 34.6518, 135.5058, "food", "Restaurant", "Shinsekai", 7, "Covered alley of kushikatsu and cheap eats.", { cuisine: "kushikatsu" }),
    place("osk-tennoji-zoo", "Tennoji Zoo", 34.6515, 135.5085, "nature", "Park", "Tennoji", 7, "City zoo beside the park and art museum.", { flags: ["ticket"] }),
    place("osk-tennoji-park", "Tennoji Park", 34.6505, 135.5075, "nature", "Park", "Tennoji", 7, "Lawn and greenhouse next to Abeno Harukas."),
    place("osk-harukas", "Abeno Harukas Observatory", 34.6456, 135.5136, "sight", "Viewpoint", "Tennoji", 9, "Japan's tallest skyscraper views — sunset slots shine.", { flags: ["ticket"] }),
    place("osk-abeno", "Abeno Harukas Kintetsu mall", 34.6458, 135.5134, "shopping", "Market", "Tennoji", 7, "Department store floors under the observatory."),
    place("osk-shitennoji", "Shitennoji Temple", 34.6538, 135.5165, "sight", "Monument", "Tennoji", 9, "Japan's oldest officially administered temple — morning calm.", { flags: ["ticket"] }),
    place("osk-isshinji", "Isshinji Temple", 34.6555, 135.4995, "sight", "Monument", "Tennoji", 6, "Temple known for Buddha statues made with ashes."),

    // ——— Umeda & Kita ———
    place("osk-umeda-sky", "Umeda Sky Building Floating Garden", 34.7053, 135.4897, "sight", "Viewpoint", "Umeda", 9, "Twin-tower observatory with open-air rooftop circle.", { flags: ["ticket", "touristy"] }),
    place("osk-grand-front", "Grand Front Osaka", 34.7035, 135.4955, "shopping", "Market", "Umeda", 7, "Modern mall and plaza north of JR Osaka Station."),
    place("osk-hep-five", "HEP FIVE Ferris wheel", 34.704, 135.4998, "sight", "Attraction", "Umeda", 7, "Red Ferris wheel landmark above the youth mall.", { flags: ["ticket"] }),
    place("osk-whity", "Whity Umeda underground mall", 34.7025, 135.4985, "shopping", "Market", "Umeda", 6, "Labyrinth basement shops linking stations."),
    place("osk-ogimachi", "Ogimachi Park", 34.7055, 135.5105, "nature", "Park", "Ogimachi", 5, "Neighbourhood green north-east of Umeda."),
    place("osk-museum-housing", "Museum of Housing and Living", 34.7058, 135.5015, "museum", "Museum", "Umeda", 7, "Showa-era street recreation on a department-store upper floor.", { flags: ["ticket"] }),
    place("osk-umeda-food", "Umeda izakaya alleys", 34.7015, 135.4975, "nightlife", "Bar", "Umeda", 7, "Salaryman bars under the tracks — English menus vary."),
    place("osk-yodobashi", "Yodobashi Umeda", 34.7038, 135.4978, "shopping", "Market", "Umeda", 6, "Electronics and rooftop restaurants in one mega-store."),

    // ——— Sumiyoshi & south ———
    place("osk-sumiyoshi", "Sumiyoshi Taisha", 34.6125, 135.4928, "sight", "Monument", "Sumiyoshi", 9, "Ancient shrine with iconic arched bridge — New Year crowds.", { flags: ["free"] }),
    place("osk-sumiyoshi-park", "Sumiyoshi Park", 34.6115, 135.4915, "nature", "Park", "Sumiyoshi", 6, "Quiet park beside the shrine approach."),

    // ——— Bay Area & Universal Studios pocket ———
    place("osk-usj", "Universal Studios Japan", 34.6654, 135.4323, "sight", "Attraction", "Universal City", 10, "Full theme-park day — buy Express Pass if weekends.", { tip: "Separate transit pocket via JR Universal City; plan a whole day.", flags: ["ticket", "touristy"] }),
    place("osk-universal-citywalk", "Universal CityWalk Osaka", 34.6675, 135.4375, "shopping", "Market", "Universal City", 7, "Pre/post-park dining and souvenir mall."),
    place("osk-tempozan", "Tempozan Ferris Wheel", 34.6562, 135.431, "sight", "Viewpoint", "Bay Area", 8, "Giant wheel beside the aquarium — harbour sunset.", { flags: ["ticket"] }),
    place("osk-kaiyukan", "Osaka Aquarium Kaiyukan", 34.6545, 135.4288, "museum", "Museum", "Bay Area", 9, "Whale shark tank and Pacific habitats — allow 2–3 hours.", { flags: ["ticket"] }),
    place("osk-tempozan-market", "Tempozan Marketplace", 34.6555, 135.4295, "shopping", "Market", "Bay Area", 6, "Food court and shops between wheel and aquarium."),
    place("osk-captain-line", "Captain Line harbour cruise", 34.6558, 135.4305, "sight", "Attraction", "Bay Area", 6, "Short boat link between Tempozan and Universal areas.", { flags: ["ticket"] }),

    // ——— Nakazakicho, Tenma & north-east ———
    place("osk-nakazaki", "Nakazakicho cafe streets", 34.7075, 135.5085, "cafe", "Cafe", "Nakazakicho", 8, "Retro houses turned cafes north of Umeda."),
    place("osk-tenma", "Tenma / Temma food alleys", 34.7055, 135.5155, "food", "Restaurant", "Tenma", 8, "Local izakaya density without Dotonbori prices.", { cuisine: "izakaya" }),
    place("osk-osaka-tenmangu", "Osaka Tenmangu Shrine", 34.6985, 135.5125, "sight", "Monument", "Tenma", 7, "Scholarship shrine and Tenjin festival home."),
    place("osk-tenjinbashi", "Tenjinbashi-suji shopping street", 34.7025, 135.5135, "shopping", "Market", "Tenma", 7, "Japan's longest shopping arcade — practical and local."),

    // ——— Nakanoshima & civic museums ———
    place("osk-nakanoshima", "Nakanoshima Park", 34.6935, 135.5055, "nature", "Park", "Nakanoshima", 8, "River-island lawns between Dojima and Tosabori."),
    place("osk-central-public", "Osaka Central Public Hall", 34.6938, 135.5075, "sight", "Monument", "Nakanoshima", 7, "Red-brick neo-Renaissance landmark on the island."),
    place("osk-science", "Osaka Science Museum", 34.6915, 135.4915, "museum", "Museum", "Nakanoshima", 7, "Planetarium and hands-on exhibits by the river.", { flags: ["ticket"] }),
    place("osk-national-art", "National Museum of Art Osaka", 34.6918, 135.4925, "museum", "Museum", "Nakanoshima", 8, "Underground contemporary art museum with striking entrance tubes.", { flags: ["ticket"] }),
    place("osk-east", "Museum of Oriental Ceramics", 34.6932, 135.5068, "museum", "Museum", "Nakanoshima", 7, "World-class Korean and Chinese ceramics collection.", { flags: ["ticket"] }),

    // ——— Spa World, Tobita & local colour ———
    place("osk-spa", "Spa World", 34.6495, 135.5045, "sight", "Attraction", "Shinsekai", 7, "Theme-park onsen complex — European/Asian zone days rotate.", { flags: ["ticket"] }),
    place("osk-teamlab", "teamLab Botanical Garden Osaka", 34.6825, 135.5285, "museum", "Museum", "Osaka Castle", 8, "Seasonal night digital art in the castle park botanical garden.", { flags: ["ticket"] }),
    place("osk-cupnoodles", "CupNoodles Museum Osaka Ikeda", 34.8205, 135.4265, "museum", "Museum", "Ikeda", 7, "Instant-ramen craft workshop north of the city — half-day.", { flags: ["ticket"] }),
    place("osk-minoh", "Minoh Park waterfall", 34.8525, 135.4685, "nature", "Park", "Minoh", 8, "Maple-lined hike to a waterfall — autumn day trip north.", { flags: ["free"] }),
    place("osk-expo", "Expo Park & Tower of the Sun", 34.8055, 135.5325, "sight", "Monument", "Suita", 8, "Taro Okamoto tower and park museums north of Osaka.", { flags: ["ticket"] }),

    // ——— Kyoto day-trip outer pocket ———
    place("osk-kyoto-fushimi", "Fushimi Inari Taisha (Kyoto day trip)", 34.9671, 135.7727, "sight", "Monument", "Kyoto Day Trip", 9, "Thousand torii gates — easy JR trip from Osaka as an outer day.", { tip: "30–45 min from Osaka Station; start early to beat crowds.", flags: ["free", "touristy"] }),
    place("osk-kyoto-station", "Kyoto Station / tower viewpoint", 34.9858, 135.7588, "sight", "Viewpoint", "Kyoto Day Trip", 6, "Arrival hub with rooftop sky garden before temple hopping."),
    place("osk-kyoto-gion", "Gion Shirakawa stroll", 35.0037, 135.7781, "sight", "Attraction", "Kyoto Day Trip", 8, "Lantern canal streets — evening atmosphere if staying late."),
    place("osk-kyoto-kinkaku", "Kinkaku-ji Golden Pavilion", 35.0394, 135.7292, "sight", "Monument", "Kyoto Day Trip", 9, "Gold-leaf pavilion lake — combine with north Kyoto loop.", { flags: ["ticket", "touristy"] }),
    place("osk-nara", "Nara Park deer & Todai-ji (optional)", 34.6851, 135.843, "sight", "Monument", "Nara Day Trip", 8, "Deer park and Great Buddha — alternative outer day from Osaka.", { flags: ["ticket", "touristy"] }),

    // ——— Food anchors ———
    place("osk-mizuno", "Mizuno okonomiyaki", 34.6684, 135.5022, "food", "Restaurant", "Dotonbori", 9, "Classic Osaka pancake house — expect a wait.", { cuisine: "okonomiyaki", flags: ["touristy"] }),
    place("osk-chibo", "Chibo okonomiyaki", 34.6689, 135.5018, "food", "Restaurant", "Dotonbori", 7, "Reliable multi-floor okonomiyaki with English menus.", { cuisine: "okonomiyaki" }),
    place("osk-kushikatsu-daruma", "Kushikatsu Daruma Shinsekai", 34.6522, 135.506, "food", "Restaurant", "Shinsekai", 8, "No double-dipping rule — fried skewers institution.", { cuisine: "kushikatsu" }),
    place("osk-yoshino", "Yoshino sushi (or local sushi counters)", 34.6705, 135.5035, "food", "Restaurant", "Shinsaibashi", 7, "Central sushi options for a sit-down break from stalls.", { cuisine: "sushi" }),
    place("osk-kitashinchi", "Kitashinchi bar district", 34.6975, 135.4985, "nightlife", "Bar", "Kitashinchi", 8, "Upscale alleys north of Nakanoshima — dress neat."),
    place("osk-sora", "Sora restaurant Ferris / bay dining", 34.656, 135.4315, "food", "Restaurant", "Bay Area", 6, "Harbour-view dining near Tempozan after the aquarium.", { cuisine: "multi-cuisine" }),
    place("osk-ramen-yokozuna", "Ramen Yokozuna / heavy local bowls", 34.6695, 135.5005, "food", "Restaurant", "Shinsaibashi", 6, "Large spicy bowls popular with students.", { cuisine: "ramen" }),
    place("osk-kaiten", "Kaiten-zushi near Namba", 34.6655, 135.5015, "food", "Restaurant", "Namba", 7, "Conveyor-belt sushi for quick family meals.", { cuisine: "sushi" }),
    place("osk-wagyu", "Teppan / wagyu dinner Shinsaibashi", 34.6745, 135.5005, "food", "Restaurant", "Shinsaibashi", 7, "Book ahead for counter teppanyaki nights.", { cuisine: "teppanyaki" }),
    place("osk-matcha", "Matcha cafe Mido-suji fringe", 34.6755, 135.4995, "cafe", "Cafe", "Shinsaibashi", 6, "Parfaits and soft serve between shopping stretches."),
    place("osk-starbucks-mido", "Starbucks reserved historic / canal spots", 34.6692, 135.5008, "cafe", "Cafe", "Dotonbori", 5, "AC break with canal people-watching."),

    // ——— Nightlife ———
    place("osk-dontonight", "Dotonbori late neon walk", 34.6685, 135.5015, "nightlife", "Attraction", "Dotonbori", 8, "Post-dinner sign crawl — street food until late."),
    place("osk-soccer", "Soccer bar / sports pubs Umeda", 34.702, 135.4965, "nightlife", "Bar", "Umeda", 5, "Match nights in the station district."),
    place("osk-livehouse", "Namba live houses", 34.6665, 135.4995, "nightlife", "Club", "Namba", 6, "Small music venues — check tonight's bill."),

    // ——— Stays ———
    place("osk-stay-namba", "Namba / Dotonbori hotels", 34.667, 135.502, "stay", "Hotel", "Namba", 9, "Best food-and-neon base — noisy but unbeatable nights."),
    place("osk-stay-umeda", "Umeda business hotels", 34.7025, 135.497, "stay", "Hotel", "Umeda", 8, "Rail hub for Kyoto day trips and Sky Building mornings."),
    place("osk-stay-tennoji", "Tennoji / Abeno stays", 34.6465, 135.513, "stay", "Hotel", "Tennoji", 7, "Quieter south base near Harukas and Shitennoji."),
    place("osk-stay-bay", "Bay Area / Universal hotels", 34.6665, 135.4355, "stay", "Hotel", "Universal City", 7, "Park-focused sleeps with CityWalk dining."),
    place("osk-stay-shinsaibashi", "Shinsaibashi boutique hotels", 34.674, 135.501, "stay", "Hotel", "Shinsaibashi", 8, "Shopping-arcade base between Umeda and Namba."),
  ],
};
