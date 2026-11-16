import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const taipei: CityCatalog = {
  id: "taipei",
  name: "Taipei, Taiwan",
  aliases: ["taipei", "taipei city"],
  center: { lat: 25.033, lon: 121.5654 },
  places: [
    // ——— Xinyi ———
    place("tpe-101", "Taipei 101", 25.0339, 121.5645, "sight", "Viewpoint", "Xinyi", 10, "Iconic tower with observatory and mall base.", { flags: ["ticket"] }),
    place("tpe-101-mall", "Taipei 101 Mall", 25.0335, 121.5648, "shopping", "Mall", "Xinyi", 8, "Luxury retail under the tower."),
    place("tpe-xiangshan", "Elephant Mountain (Xiangshan)", 25.0275, 121.5755, "nature", "Viewpoint", "Xinyi", 10, "Short hike to the classic 101 skyline view.", { flags: ["free", "early"] }),
    place("tpe-world-trade", "Taipei World Trade Center", 25.0332, 121.5635, "sight", "Attraction", "Xinyi", 6, "Exhibition halls beside 101."),
    place("tpe-city-hall", "Taipei City Hall plaza", 25.0375, 121.5645, "sight", "Attraction", "Xinyi", 6, "Open square and New Year's Eve stage."),
    place("tpe-att4fun", "ATT 4 FUN", 25.03, 121.5665, "shopping", "Mall", "Xinyi", 6, "Youth fashion and nightlife mall."),
    place("tpe-shin-kong-mitsu", "Shin Kong Mitsukoshi Xinyi", 25.036, 121.567, "shopping", "Mall", "Xinyi", 7, "Department-store cluster in Xinyi."),
    place("tpe-breeze", "Breeze Nan Shan", 25.0345, 121.5655, "shopping", "Mall", "Xinyi", 7, "Design-forward mall near 101."),

    // ——— Zhongzheng / historic ———
    place("tpe-memorial", "Chiang Kai-shek Memorial Hall", 25.0346, 121.5217, "sight", "Monument", "Zhongzheng", 10, "White memorial with changing of the guard.", { flags: ["free"] }),
    place("tpe-liberty-square", "Liberty Square", 25.0355, 121.52, "sight", "Attraction", "Zhongzheng", 8, "Vast plaza between the gates and memorial."),
    place("tpe-national-theater", "National Theater & Concert Hall", 25.035, 121.5185, "sight", "Monument", "Zhongzheng", 8, "Chinese-palace style twin venues."),
    place("tpe-228", "228 Peace Memorial Park", 25.0405, 121.5155, "nature", "Park", "Zhongzheng", 7, "Central park and 228 museum site."),
    place("tpe-228-museum", "National 228 Memorial Museum", 25.041, 121.515, "museum", "Museum", "Zhongzheng", 7, "History of the 228 Incident."),
    place("tpe-presidential", "Presidential Office Building", 25.04, 121.5118, "sight", "Monument", "Zhongzheng", 7, "Red-brick colonial landmark — exterior views."),
    place("tpe-ntu", "National Taiwan University area", 25.017, 121.537, "sight", "Attraction", "Da'an", 7, "Campus avenues and azalea season."),
    place("tpe-bookstore", "Eslite Bookstore Dunnan (heritage)", 25.04, 121.545, "shopping", "Market", "Da'an", 6, "Culture of Taiwan's 24-hour bookstore era."),

    // ——— Datong / old Taipei ———
    place("tpe-longshan", "Longshan Temple", 25.0372, 121.4998, "sight", "Monument", "Wanhua", 9, "Incense-filled temple in historic Wanhua."),
    place("tpe-bopiliao", "Bopiliao Historic Block", 25.0365, 121.5015, "sight", "Attraction", "Wanhua", 7, "Restored Qing-era street lanes."),
    place("tpe-ximending", "Ximending", 25.042, 121.507, "shopping", "Market", "Wanhua", 9, "Youth pedestrian district and street food."),
    place("tpe-red-house", "The Red House", 25.0418, 121.5065, "sight", "Monument", "Ximending", 7, "Octagonal market hall with crafts and bars."),
    place("tpe-dihua", "Dihua Street", 25.0575, 121.51, "shopping", "Market", "Datong", 9, "Herb, dried-goods, and heritage shophouses."),
    place("tpe-dodoaw", "Dadaocheng Wharf", 25.057, 121.505, "nature", "Park", "Datong", 7, "River container park and bike paths."),
    place("tpe-niche", "Ningxia Night Market", 25.0565, 121.5155, "food", "Quick meal", "Datong", 8, "Compact gourmet night market.", { cuisine: "taiwanese street_food" }),
    place("tpe-confucius", "Taipei Confucius Temple", 25.0725, 121.5165, "sight", "Monument", "Datong", 7, "Quiet Confucian temple complex."),
    place("tpe-baoan", "Baoan Temple", 25.0735, 121.5155, "sight", "Monument", "Datong", 8, "Ornate temple near Confucius Temple."),

    // ——— Zhongshan / north-central ———
    place("tpe-fine-arts", "Taipei Fine Arts Museum", 25.0725, 121.5245, "museum", "Museum", "Zhongshan", 8, "Modern and contemporary art by the riverside."),
    place("tpe-expo-park", "Taipei Expo Park", 25.071, 121.522, "nature", "Park", "Zhongshan", 7, "Flower expos, pavilions, and lawns."),
    place("tpe-maokong", "Maokong Gondola", 24.968, 121.594, "sight", "Attraction", "Wenshan", 9, "Gondola to tea plantations in the hills.", { flags: ["ticket"] }),
    place("tpe-tea", "Maokong tea houses", 24.97, 121.595, "cafe", "Cafe", "Maokong", 8, "Mountain tea with Taipei basin views.", { cuisine: "tea taiwanese" }),
    place("tpe-zoo", "Taipei Zoo", 24.9985, 121.581, "nature", "Park", "Wenshan", 7, "Large zoo at the gondola base.", { flags: ["ticket"] }),
    place("tpe-catherine", "St. Cross / Zhongshan cafés", 25.055, 121.525, "cafe", "Cafe", "Zhongshan", 6, "Tree-lined café streets.", { cuisine: "coffee" }),

    // ——— Shilin / Beitou / north ———
    place("tpe-shilin-night", "Shilin Night Market", 25.088, 121.524, "shopping", "Market", "Shilin", 9, "Taipei's famous night-market sprawl."),
    place("tpe-national-palace", "National Palace Museum", 25.1023, 121.5485, "museum", "Museum", "Shilin", 10, "One of the world's great Chinese art collections.", { flags: ["ticket"] }),
    place("tpe-zhishan", "Zhishan Cultural Park", 25.105, 121.53, "museum", "Museum", "Shilin", 6, "Archaeology park near the Palace Museum."),
    place("tpe-yangming", "Yangmingshan National Park", 25.155, 121.55, "nature", "Park", "Yangmingshan", 10, "Volcanic park with hikes and hot springs."),
    place("tpe-xiaoyoukeng", "Xiaoyoukeng", 25.18, 121.55, "nature", "Viewpoint", "Yangmingshan", 8, "Sulfur fumaroles and mountain views."),
    place("tpe-beitou", "Beitou Hot Springs", 25.137, 121.508, "nature", "Park", "Beitou", 9, "Thermal valley and public spring baths."),
    place("tpe-thermal", "Thermal Valley (Beitou)", 25.1385, 121.511, "nature", "Park", "Beitou", 8, "Steaming turquoise spring pool walk."),
    place("tpe-beitou-museum", "Beitou Hot Spring Museum", 25.1365, 121.507, "museum", "Museum", "Beitou", 7, "Bathhouse history in a restored building."),
    place("tpe-guandu", "Guandu Temple", 25.118, 121.466, "sight", "Monument", "Beitou", 7, "Riverside temple with long history."),
    place("tpe-guandu-nature", "Guandu Nature Park", 25.12, 121.47, "nature", "Park", "Beitou", 7, "Wetland birdwatching at the river mouth."),

    // ——— East / Songshan / Da'an ———
    place("tpe-daan-park", "Da'an Forest Park", 25.0295, 121.5355, "nature", "Park", "Da'an", 9, "Central green lung with lakes and lawns."),
    place("tpe-rainbow", "Rainbow Bridge / Rainbow Village tip", 25.05, 121.55, "sight", "Attraction", "Songshan", 5, "Urban color stops — verify local murals."),
    place("tpe-songshan-cultural", "Songshan Cultural and Creative Park", 25.0435, 121.56, "sight", "Attraction", "Xinyi", 8, "Former tobacco factory turned design park."),
    place("tpe-arena", "Taipei Arena area", 25.0505, 121.55, "sight", "Attraction", "Songshan", 5, "Concert venue and sports landmark."),
    place("tpe-raohe", "Raohe Night Market", 25.0508, 121.5775, "shopping", "Market", "Songshan", 9, "Covered night market by Ciyou Temple."),
    place("tpe-ciyou", "Ciyou Temple", 25.051, 121.578, "sight", "Monument", "Songshan", 7, "Temple at the Raohe market entrance."),
    place("tpe-sun-yat-sen", "Sun Yat-sen Memorial Hall", 25.04, 121.56, "sight", "Monument", "Xinyi", 8, "Memorial hall with park and guard ceremony."),
    place("tpe-flower", "Taipei Flower Market", 25.06, 121.52, "shopping", "Market", "Zhongshan", 6, "Weekend plant and flower bazaar."),

    // ——— Museums ———
    place("tpe-history", "National Taiwan Museum", 25.0425, 121.515, "museum", "Museum", "Zhongzheng", 7, "Natural history in a Japanese-era hall."),
    place("tpe-moca", "Museum of Contemporary Art Taipei", 25.0535, 121.52, "museum", "Museum", "Datong", 7, "MOCA in a historic school building."),
    place("tpe-land-bank", "Land Bank Exhibition Hall", 25.042, 121.516, "museum", "Museum", "Zhongzheng", 6, "Dinosaur displays in a bank building."),
    place("tpe-miniatures", "Miniatures Museum of Taiwan", 25.05, 121.525, "museum", "Museum", "Zhongshan", 6, "Tiny worlds and dollhouses.", { flags: ["ticket"] }),
    place("tpe-suho", "Su Ho Paper Museum", 25.055, 121.53, "museum", "Museum", "Zhongshan", 6, "Paper-making workshops and exhibits."),
    place("tpe-discover", "Discovery Center of Taipei", 25.037, 121.565, "museum", "Museum", "Xinyi", 6, "City model and urban planning exhibits."),

    // ——— Shopping ———
    place("tpe-zhongxiao", "Zhongxiao East Road shopping", 25.0415, 121.545, "shopping", "Market", "Da'an", 8, "Department stores and fashion strip."),
    place("tpe-sogo", "Pacific Sogo Fuxing", 25.041, 121.544, "shopping", "Mall", "Da'an", 7, "Classic department store hub."),
    place("tpe-endless", "Endless / underground streets", 25.045, 121.52, "shopping", "Market", "Zhongzheng", 6, "Metro-linked underground retail."),
    place("tpe-gongguan", "Gongguan shopping streets", 25.015, 121.534, "shopping", "Market", "Da'an", 7, "Student district shops near NTU."),
    place("tpe-syntrend", "Syntrend Creative Park", 25.0455, 121.5155, "shopping", "Mall", "Zhongzheng", 6, "Electronics and maker mall by NTM."),

    // ——— Cafes ———
    place("tpe-fong-da", "Fong Da Coffee", 25.04, 121.508, "cafe", "Cafe", "Ximending", 7, "Old-school coffee near Ximen.", { cuisine: "coffee" }),
    place("tpe-louisa", "Louisa Coffee branches", 25.042, 121.53, "cafe", "Cafe", "Zhongshan", 5, "Ubiquitous local chain for cheap lattes.", { cuisine: "coffee" }),
    place("tpe-simple", "Simple Kaffa", 25.04, 121.545, "cafe", "Cafe", "Da'an", 8, "World-class specialty coffee.", { cuisine: "coffee" }),
    place("tpe-cw", "Cafe Mode / heritage cafés", 25.057, 121.51, "cafe", "Cafe", "Datong", 7, "Dihua Street tea-and-coffee houses.", { cuisine: "coffee tea" }),
    place("tpe-starbucks-beimen", "Starbucks Beimen", 25.049, 121.51, "cafe", "Cafe", "Datong", 6, "Heritage building Starbucks near North Gate.", { cuisine: "coffee" }),
    place("tpe-woolloomooloo", "Woolloomooloo Xinyi", 25.033, 121.565, "cafe", "Cafe", "Xinyi", 7, "Rooftop café near 101.", { cuisine: "cafe brunch" }),
    place("tpe-onion", "Onion Café lanes", 25.03, 121.53, "cafe", "Cafe", "Da'an", 6, "Quiet residential coffee streets.", { cuisine: "coffee" }),
    place("tpe-bubble", "Bubble tea pioneers Ximending", 25.0425, 121.5075, "cafe", "Cafe", "Ximending", 7, "Classic pearl milk tea counters.", { cuisine: "bubble_tea" }),

    // ——— Food ———
    place("tpe-din-tai-fung", "Din Tai Fung (Xinyi)", 25.0338, 121.5642, "food", "Restaurant", "Xinyi", 9, "Famous xiaolongbao — expect waits.", { cuisine: "taiwanese" }),
    place("tpe-beef-noodle", "Yongkang beef noodle shops", 25.03, 121.53, "food", "Restaurant", "Da'an", 8, "Taipei's signature braised beef noodles.", { cuisine: "taiwanese" }),
    place("tpe-yongkang", "Yongkang Street snacks", 25.0315, 121.5295, "food", "Quick meal", "Da'an", 8, "Mango ice and snack dens.", { cuisine: "taiwanese dessert" }),
    place("tpe-ay-chung", "Ay-Chung Flour-Rice Noodle", 25.0422, 121.5072, "food", "Quick meal", "Ximending", 7, "Iconic vermicelli soup queue.", { cuisine: "taiwanese" }),
    place("tpe-shilin-food", "Shilin night market eats", 25.0885, 121.5245, "food", "Quick meal", "Shilin", 8, "Fried chicken and oyster omelets.", { cuisine: "taiwanese street_food" }),
    place("tpe-raohe-pepper", "Raohe pepper buns", 25.051, 121.577, "food", "Quick meal", "Songshan", 8, "Charcoal pepper buns at the gate.", { cuisine: "taiwanese street_food" }),
    place("tpe-vegetarian", "Gongguan vegetarian buffets", 25.0145, 121.5335, "food", "Restaurant", "Da'an", 6, "Buddhist-style veggie canteens.", { cuisine: "vegetarian taiwanese" }),
    place("tpe-hotpot", "Hotpot alleys Zhongshan", 25.055, 121.522, "food", "Restaurant", "Zhongshan", 7, "All-you-can-eat shabu nights.", { cuisine: "hotpot taiwanese" }),
    place("tpe-japanese", "Japanese dining Lane 216", 25.04, 121.54, "food", "Restaurant", "Da'an", 7, "Sushi and izakaya density.", { cuisine: "japanese" }),
    place("tpe-xiaolongbao", "Oyster omelet stalls", 25.042, 121.508, "food", "Quick meal", "Ximending", 7, "Night-market classic anywhere in Taipei.", { cuisine: "taiwanese street_food" }),
    place("tpe-breakfast", "Soy milk breakfast shops", 25.035, 121.525, "food", "Quick meal", "Zhongzheng", 7, "Youtiao and warm soy milk mornings.", { cuisine: "taiwanese breakfast" }),
    place("tpe-fine", "RAW / guest chef fine dining", 25.05, 121.55, "food", "Restaurant", "Songshan", 8, "Reservation-only modern Taiwanese.", { cuisine: "taiwanese fine_dining" }),
    place("tpe-banh", "Ningxia night market circuit", 25.0568, 121.5158, "food", "Quick meal", "Datong", 8, "Oyster pancakes and liver soup.", { cuisine: "taiwanese street_food" }),
    place("tpe-hakka", "Hakka restaurants", 25.03, 121.52, "food", "Restaurant", "Zhongzheng", 6, "Lei cha and Hakka stir-fries.", { cuisine: "hakka taiwanese" }),
    place("tpe-dessert-ice", "Ice shops Yongkang", 25.031, 121.53, "food", "Quick meal", "Da'an", 7, "Mango shaved ice legends.", { cuisine: "taiwanese dessert" }),

    // ——— Nightlife ———
    place("tpe-bar-lane", "Bar lanes near Zhongxiao Dunhua", 25.041, 121.548, "nightlife", "Bar", "Da'an", 8, "Cocktail dens in East District sois."),
    place("tpe-red-house-bars", "Red House craft beer patio", 25.0417, 121.5063, "nightlife", "Bar", "Ximending", 7, "Outdoor drinks by the historic hall."),
    place("tpe-xinyi-clubs", "Xinyi club scene", 25.03, 121.566, "nightlife", "Club", "Xinyi", 7, "Clubs around ATT and City Hall."),
    place("tpe-rooftop", "Xinyi rooftop bars", 25.034, 121.565, "nightlife", "Bar", "Xinyi", 8, "Skyline cocktails facing 101."),
    place("tpe-live", "Live houses Gongguan", 25.0155, 121.5345, "nightlife", "Bar", "Da'an", 7, "Indie music venues near NTU."),
    place("tpe-beitou-night", "Beitou spring evenings", 25.1368, 121.5075, "nightlife", "Bar", "Beitou", 5, "Quiet hot-spring hotel lounges — not clubby."),

    // ——— Stays ———
    place("tpe-stay-grand-hyatt", "Grand Hyatt Taipei", 25.034, 121.563, "stay", "Hotel", "Xinyi", 9, "Business luxury beside 101."),
    place("tpe-stay-w", "W Taipei", 25.039, 121.566, "stay", "Hotel", "Xinyi", 9, "Design hotel in the Xinyi club zone."),
    place("tpe-stay-mandarin", "Mandarin Oriental Taipei", 25.05, 121.53, "stay", "Hotel", "Zhongshan", 10, "Ultra-luxury on Dunhua North."),
    place("tpe-stay-regent", "Regent Taipei", 25.053, 121.523, "stay", "Hotel", "Zhongshan", 8, "Classic luxury with mall attached."),
    place("tpe-stay-caesar", "Hotel Résonance / Caesar Park", 25.04, 121.515, "stay", "Hotel", "Zhongzheng", 7, "Central bases near stations."),
    place("tpe-stay-beitou", "Beitou hot spring hotels", 25.1375, 121.5085, "stay", "Hotel", "Beitou", 8, "Private bath rooms in the spa town."),
    place("tpe-stay-amba", "amba Taipei Ximending", 25.042, 121.508, "stay", "Hotel", "Ximending", 7, "Youthful stay in the pedestrian zone."),
    place("tpe-stay-humble", "Humble House Taipei", 25.037, 121.565, "stay", "Hotel", "Xinyi", 8, "Art-forward Xinyi boutique."),
    place("tpe-stay-sheraton", "Sheraton Grand Taipei", 25.047, 121.52, "stay", "Hotel", "Zhongshan", 7, "Midtown convention hotel."),
    place("tpe-stay-space", "spaceInn / design B&Bs", 25.03, 121.53, "stay", "Hotel", "Da'an", 6, "Compact design stays near Yongkang."),
  ],
};
