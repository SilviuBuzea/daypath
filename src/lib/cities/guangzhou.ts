import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const guangzhou: CityCatalog = {
  id: "guangzhou",
  name: "Guangzhou, China",
  aliases: ["guangzhou", "canton"],
  center: { lat: 23.1291, lon: 113.2644 },
  places: [
    // ——— Yuexiu / historic ———
    place("gz-chen-clan", "Chen Clan Ancestral Hall", 23.1265, 113.2435, "sight", "Monument", "Liwan", 9, "Intricate Lingnan ancestral hall and folk art museum."),
    place("gz-temple-six", "Temple of the Six Banyan Trees", 23.1285, 113.2615, "sight", "Monument", "Yuexiu", 8, "Flower Pagoda rising above a Buddhist temple."),
    place("gz-guangxiao", "Guangxiao Temple", 23.1315, 113.2555, "sight", "Monument", "Yuexiu", 8, "Ancient monastery — one of Guangzhou's oldest."),
    place("gz-cathedral", "Sacred Heart Cathedral", 23.1185, 113.255, "sight", "Monument", "Yuexiu", 8, "Gothic stone cathedral known as Stone House."),
    place("gz-yuexiu-park", "Yuexiu Park", 23.14, 113.266, "nature", "Park", "Yuexiu", 9, "Hill park with Five Rams statue and Zhenhai Tower."),
    place("gz-five-rams", "Five Rams Statue", 23.1415, 113.2665, "sight", "Monument", "Yuexiu", 8, "City symbol atop Yuexiu Park."),
    place("gz-zhenhai", "Zhenhai Tower / Guangzhou Museum", 23.143, 113.2675, "museum", "Museum", "Yuexiu", 8, "City museum in a Ming watchtower."),
    place("gz-sun-yat-sen", "Sun Yat-sen Memorial Hall", 23.1355, 113.2645, "sight", "Monument", "Yuexiu", 8, "Blue-roofed memorial theater."),
    place("gz-peasant", "Site of the National Peasant Movement Institute", 23.13, 113.27, "museum", "Museum", "Yuexiu", 6, "Revolutionary history school site."),
    place("gz-nanyue", "Museum of the Nanyue King", 23.1405, 113.262, "museum", "Museum", "Yuexiu", 9, "Han royal tomb treasures under Yuexiu."),
    place("gz-beijing-rd", "Beijing Road Pedestrian Street", 23.1255, 113.27, "shopping", "Market", "Yuexiu", 8, "Glass-floor ruins and shopping spine."),

    // ——— Liwan / Shamian ———
    place("gz-shamian", "Shamian Island", 23.1085, 113.2415, "sight", "Attraction", "Liwan", 9, "Tree-lined colonial concession island."),
    place("gz-shamian-church", "Our Lady of Lourdes Chapel", 23.109, 113.24, "sight", "Monument", "Shamian", 6, "Small church on Shamian's quiet lanes."),
    place("gz-lychee-bay", "Lychee Bay", 23.115, 113.235, "sight", "Attraction", "Liwan", 8, "Canals, opera, and Cantonese gardens."),
    place("gz-enning", "Enning Road", 23.12, 113.24, "sight", "Attraction", "Liwan", 8, "Qilou arcade street and Yongqing Fang."),
    place("gz-yongqing", "Yongqing Fang", 23.1195, 113.2395, "shopping", "Market", "Liwan", 7, "Restored blocks with cafés and Bruce Lee house."),
    place("gz-qingping", "Qingping Market", 23.11, 113.245, "shopping", "Market", "Liwan", 6, "Traditional medicine and dried goods market."),
    place("gz-upper-down", "Shangxiajiu Pedestrian Street", 23.1155, 113.2485, "shopping", "Market", "Liwan", 8, "Classic Cantonese shopping arcade."),

    // ——— Tianhe / Zhujiang New Town ———
    place("gz-canton-tower", "Canton Tower", 23.1065, 113.3245, "sight", "Viewpoint", "Haizhu", 10, "Twisted TV tower with observation decks.", { flags: ["ticket"] }),
    place("gz-flower-city", "Flower City Square", 23.12, 113.321, "sight", "Attraction", "Tianhe", 8, "Axis plaza between opera house and libraries."),
    place("gz-ifcto", "Guangzhou IFC / CTF towers", 23.1185, 113.3215, "sight", "Viewpoint", "Tianhe", 8, "Twin supertalls over Zhujiang New Town."),
    place("gz-opera", "Guangzhou Opera House", 23.1165, 113.3175, "sight", "Monument", "Tianhe", 9, "Zaha Hadid pebbles by the river."),
    place("gz-library", "Guangzhou Library", 23.119, 113.323, "sight", "Attraction", "Tianhe", 7, "Striking public library on the civic axis."),
    place("gz-museum", "Guangdong Museum", 23.1175, 113.3255, "museum", "Museum", "Tianhe", 9, "Treasure-chest building of provincial collections."),
    place("gz-grandview", "Grandview Mall", 23.135, 113.33, "shopping", "Mall", "Tianhe", 7, "Huge mall near Tianhe Sports Center."),
    place("gz-tee", "TeeMall / Tianhe Malls", 23.137, 113.325, "shopping", "Mall", "Tianhe", 7, "Retail cluster around the sports stadium."),
    place("gz-parc", "Parc Central", 23.13, 113.33, "shopping", "Mall", "Tianhe", 6, "Open-air lifestyle mall."),
    place("gz-k11", "K11 Guangzhou", 23.125, 113.325, "shopping", "Mall", "Tianhe", 7, "Art-retail concept mall."),

    // ——— Pearl River / Haizhu ———
    place("gz-pearl-cruise", "Pearl River night cruise piers", 23.11, 113.3, "sight", "Attraction", "Tianhe", 9, "Evening skyline cruises under the bridges.", { flags: ["ticket"] }),
    place("gz-haixinsha", "Haixinsha Island", 23.1125, 113.32, "nature", "Park", "Tianhe", 7, "Asian Games island plaza on the river."),
    place("gz-er-sha", "Ersha Island", 23.11, 113.295, "nature", "Park", "Yuexiu", 8, "Leafy island of museums and villas."),
    place("gz-guangdong-art", "Guangdong Museum of Art", 23.1085, 113.2955, "museum", "Museum", "Ersha", 7, "Contemporary art on Ersha Island."),
    place("gz-xinghai", "Xinghai Concert Hall", 23.1095, 113.2935, "sight", "Monument", "Ersha", 7, "Riverside concert venue."),
    place("gz-haizhu-wetland", "Haizhu National Wetland Park", 23.08, 113.33, "nature", "Park", "Haizhu", 8, "Urban wetland trails and birdwatching."),
    place("gz-canton-fair", "Canton Fair Complex", 23.103, 113.355, "sight", "Attraction", "Pazhou", 7, "Trade-fair halls on Pazhou Island."),
    place("gz-pazhou", "Pazhou Pagoda", 23.1, 113.365, "sight", "Monument", "Pazhou", 6, "Ancient river pagoda near the fair."),

    // ——— Baiyun / north ———
    place("gz-baiyun", "Baiyun Mountain", 23.17, 113.295, "nature", "Park", "Baiyun", 9, "City mountain park with cable car and peaks.", { flags: ["ticket"] }),
    place("gz-baiyun-cable", "Baiyun Mountain cable car", 23.165, 113.29, "sight", "Attraction", "Baiyun", 7, "Ascend for haze-day city views."),
    place("gz-yuntai", "Yuntai Garden", 23.175, 113.3, "nature", "Garden", "Baiyun", 7, "Formal gardens on Baiyun's slopes."),
    place("gz-moxing", "Moxing Ridge", 23.18, 113.3, "nature", "Viewpoint", "Baiyun", 8, "Highest accessible peak in Baiyun."),

    // ——— Universities / east culture ———
    place("gz-zhongshan-uni", "Sun Yat-sen University south campus", 23.095, 113.295, "sight", "Attraction", "Haizhu", 7, "Leafy historic campus avenues."),
    place("gz-whampoa", "Whampoa Military Academy site", 23.09, 113.42, "museum", "Museum", "Huangpu", 7, "Republican military academy museum."),
    place("gz-chimelong", "Chimelong Paradise / Safari", 23.0, 113.32, "sight", "Attraction", "Panyu", 8, "Theme parks and safari south of the city.", { flags: ["ticket"] }),
    place("gz-changlong", "Chimelong International Circus", 23.005, 113.325, "sight", "Attraction", "Panyu", 7, "Famous circus show complex.", { flags: ["ticket"] }),
    place("gz-ancestral-panyu", "Baomo Garden", 22.95, 113.35, "sight", "Attraction", "Panyu", 6, "Lingnan garden day trip in Panyu."),

    // ——— Museums extras ———
    place("gz-canton-customs", "Guangzhou Customs Museum", 23.11, 113.25, "museum", "Museum", "Liwan", 5, "Trade-port history exhibits."),
    place("gz-maritime", "Maritime Silk Road museums", 23.1, 113.26, "museum", "Museum", "Yuexiu", 6, "Port and silk-road narrative sites."),
    place("gz-science", "Guangdong Science Center", 23.07, 113.37, "museum", "Museum", "Panyu", 7, "Hands-on science mega-museum."),
    place("gz-litchi", "Litchi Museum / orchard parks", 23.12, 113.23, "museum", "Museum", "Liwan", 5, "Seasonal fruit culture exhibits."),

    // ——— Parks ———
    place("gz-martyrs", "Guangzhou Uprising Martyrs Park", 23.135, 113.285, "nature", "Park", "Yuexiu", 6, "Memorial park east of the center."),
    place("gz-liuhua", "Liuhua Lake Park", 23.145, 113.26, "nature", "Park", "Yuexiu", 6, "Lake park near the trade fair old site."),
    place("gz-dongshan", "Dongshan Lake Park", 23.125, 113.29, "nature", "Park", "Yuexiu", 6, "Neighborhood lake walks."),
    place("gz-pearl-promenade", "Zhujiang riverside promenade", 23.112, 113.31, "nature", "Park", "Tianhe", 8, "Night light walk facing Canton Tower."),

    // ——— Shopping ———
    place("gz-taikoo-hui", "Taikoo Hui", 23.1355, 113.33, "shopping", "Mall", "Tianhe", 8, "Luxury mall by the East Tower metro."),
    place("gz-one-link", "OneLinkWalk / sports malls", 23.138, 113.323, "shopping", "Mall", "Tianhe", 6, "Retail around Tianhe Sports Center."),
    place("gz-beijing-shops", "Beijing Road boutiques", 23.125, 113.2705, "shopping", "Market", "Yuexiu", 7, "Fashion and snack shopping downtown."),
    place("gz-jiangnan", "Jiangnan clothing wholesale", 23.08, 113.26, "shopping", "Market", "Haizhu", 6, "Fabric and apparel markets."),
    place("gz-fangcun", "Fangcun tea market", 23.1, 113.22, "shopping", "Market", "Liwan", 7, "Huge tea wholesale district."),
    place("gz-amazon-mall", "Positive / positive vibe markets", 23.12, 113.25, "shopping", "Market", "Liwan", 5, "Local arcade shopping near Shangxiajiu."),

    // ——— Cafes ———
    place("gz-see-cafe", "SEE / specialty cafés Yongqing", 23.1198, 113.2398, "cafe", "Cafe", "Liwan", 7, "Heritage-block specialty coffee.", { cuisine: "coffee" }),
    place("gz-starbucks-shamian", "Shamian café terraces", 23.1088, 113.2418, "cafe", "Cafe", "Shamian", 7, "Colonial-lane coffee pauses.", { cuisine: "coffee" }),
    place("gz-manner", "Manner Coffee Tianhe", 23.12, 113.322, "cafe", "Cafe", "Tianhe", 6, "Quick CBD espresso.", { cuisine: "coffee" }),
    place("gz-tea-house", "Traditional tea houses Liwan", 23.116, 113.245, "cafe", "Cafe", "Liwan", 8, "Gongfu tea and dim sum rhythm.", { cuisine: "tea cantonese" }),
    place("gz-er-sha-cafe", "Ersha Island cafés", 23.11, 113.296, "cafe", "Cafe", "Ersha", 6, "Riverside quiet coffee.", { cuisine: "coffee" }),
    place("gz-book-cafe", "Bookstore cafés Beijing Road", 23.126, 113.269, "cafe", "Cafe", "Yuexiu", 6, "Read-and-sip downtown.", { cuisine: "coffee tea" }),
    place("gz-baiyun-cafe", "Baiyun trail cafés", 23.168, 113.292, "cafe", "Cafe", "Baiyun", 5, "Simple drinks after the hike.", { cuisine: "tea coffee" }),
    place("gz-percent", "Percent Coffee Zhujiang", 23.118, 113.32, "cafe", "Cafe", "Tianhe", 6, "Specialty near Flower City.", { cuisine: "coffee" }),

    // ——— Food ———
    place("gz-dim-sum", "Classic yum cha halls Tianhe", 23.133, 113.328, "food", "Restaurant", "Tianhe", 9, "Morning carts of har gow and siu mai.", { cuisine: "cantonese dim_sum" }),
    place("gz-panxi", "Panxi Restaurant", 23.13, 113.24, "food", "Restaurant", "Liwan", 8, "Garden dim sum institution.", { cuisine: "cantonese dim_sum" }),
    place("gz-tao-tao", "Tao Tao Ju", 23.116, 113.249, "food", "Restaurant", "Liwan", 8, "Old Shangxiajiu Cantonese restaurant.", { cuisine: "cantonese" }),
    place("gz-bingsheng", "Bingsheng Taste", 23.12, 113.32, "food", "Restaurant", "Tianhe", 8, "Modern Cantonese favorite.", { cuisine: "cantonese" }),
    place("gz-siu-mei", "Roast goose shops", 23.12, 113.25, "food", "Quick meal", "Liwan", 8, "Cantonese roast meats over rice.", { cuisine: "cantonese" }),
    place("gz-morning-tea", "Liwan morning tea circuit", 23.117, 113.246, "food", "Restaurant", "Liwan", 9, "Teahouse dim sum culture at its source.", { cuisine: "cantonese dim_sum" }),
    place("gz-hotpot", "Seafood hotpot Zhujiang", 23.115, 113.318, "food", "Restaurant", "Tianhe", 7, "River-area hotpot nights.", { cuisine: "hotpot cantonese" }),
    place("gz-dessert", "Sugar water shops", 23.125, 113.27, "food", "Quick meal", "Yuexiu", 7, "Mango pomelo sago and herbal sweets.", { cuisine: "cantonese dessert" }),
    place("gz-wonton", "Wonton noodle stalls", 23.124, 113.268, "food", "Quick meal", "Yuexiu", 7, "Shrimp wonton soups downtown.", { cuisine: "cantonese noodles" }),
    place("gz-chaozhou", "Chaozhou restaurants", 23.13, 113.28, "food", "Restaurant", "Yuexiu", 7, "Beef hotpot and oyster omelets.", { cuisine: "chaozhou" }),
    place("gz-shunde", "Shunde cuisine rooms", 23.118, 113.315, "food", "Restaurant", "Tianhe", 7, "Delicate fish and claypot dishes.", { cuisine: "shunde cantonese" }),
    place("gz-muslim", "Huimin restaurants", 23.13, 113.26, "food", "Restaurant", "Yuexiu", 6, "Halal Chinese and lamb dishes.", { cuisine: "halal chinese" }),
    place("gz-japanese", "Japanese dining Zhujiang", 23.119, 113.321, "food", "Restaurant", "Tianhe", 6, "Sushi dens in New Town.", { cuisine: "japanese" }),
    place("gz-shipu", "Shipu / Ningbo seafood", 23.11, 113.3, "food", "Restaurant", "Yuexiu", 6, "East China seafood styles.", { cuisine: "seafood chinese" }),
    place("gz-street", "Shamian snack walks", 23.109, 113.242, "food", "Quick meal", "Shamian", 5, "Light bites between colonial blocks.", { cuisine: "cantonese" }),

    // ——— Nightlife ———
    place("gz-zhujiang-bars", "Zhujiang New Town bars", 23.118, 113.319, "nightlife", "Bar", "Tianhe", 8, "Cocktail dens under the towers."),
    place("gz-party-pier", "Party Pier / Canton Place", 23.105, 113.31, "nightlife", "Bar", "Haizhu", 7, "Riverside nightlife facing the tower."),
    place("gz-tianhe-clubs", "Tianhe club strip", 23.135, 113.328, "nightlife", "Club", "Tianhe", 7, "Dance clubs near the malls."),
    place("gz-enning-bars", "Enning Road bars", 23.12, 113.2405, "nightlife", "Bar", "Liwan", 7, "Heritage-street drinks and live music."),
    place("gz-shamian-night", "Shamian evening stroll", 23.1085, 113.241, "nightlife", "Bar", "Shamian", 6, "Quiet hotel bars — not a club zone."),
    place("gz-livehouses", "Livehouses Haizhu", 23.1, 113.28, "nightlife", "Bar", "Haizhu", 6, "Indie music venues south of the river."),

    // ——— Stays ———
    place("gz-stay-rosewood", "Rosewood Guangzhou", 23.118, 113.322, "stay", "Hotel", "Tianhe", 10, "Luxury in the CTF tower complex."),
    place("gz-stay-four-seasons", "Four Seasons Guangzhou", 23.1195, 113.321, "stay", "Hotel", "Tianhe", 9, "IFC tower stay over Flower City."),
    place("gz-stay-st-regis", "The St. Regis Guangzhou", 23.117, 113.32, "stay", "Hotel", "Tianhe", 9, "Butler-service luxury in New Town."),
    place("gz-stay-white-swan", "White Swan Hotel", 23.1095, 113.24, "stay", "Hotel", "Shamian", 8, "Classic riverside hotel on Shamian."),
    place("gz-stay-garden", "The Garden Hotel", 23.14, 113.28, "stay", "Hotel", "Yuexiu", 8, "Landmark hotel near the trade hub."),
    place("gz-stay-langham", "The Langham Guangzhou", 23.125, 113.27, "stay", "Hotel", "Yuexiu", 8, "Central luxury near Beijing Road."),
    place("gz-stay-marriott", "Guangzhou Marriott Tianhe", 23.135, 113.33, "stay", "Hotel", "Tianhe", 7, "Business stay by Grandview."),
    place("gz-stay-sofitel", "Sofitel Guangzhou Sunrich", 23.14, 113.32, "stay", "Hotel", "Tianhe", 7, "Solid Tianhe business hotel."),
    place("gz-stay-baiyun", "Hotels near Baiyun Mountain", 23.16, 113.28, "stay", "Hotel", "Baiyun", 6, "North-city bases for park days."),
    place("gz-stay-panyu", "Chimelong hotels", 23.002, 113.322, "stay", "Hotel", "Panyu", 7, "Theme-park resort stays south."),
  ],
};
