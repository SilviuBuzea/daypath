import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const shenzhen: CityCatalog = {
  id: "shenzhen",
  name: "Shenzhen, China",
  aliases: ["shenzhen"],
  center: { lat: 22.5431, lon: 114.0579 },
  places: [
    // ——— Futian CBD ———
    place("sz-civic-center", "Shenzhen Civic Center", 22.5415, 114.0595, "sight", "Attraction", "Futian", 8, "Iconic hat-shaped civic roof and city axis."),
    place("sz-citizen-square", "Citizen Center Square", 22.5425, 114.059, "sight", "Attraction", "Futian", 7, "Open plaza between government towers."),
    place("sz-book-city", "Shenzhen Book City (Central)", 22.5405, 114.0585, "shopping", "Market", "Futian", 7, "Vast bookstore under the civic canopy."),
    place("sz-lotus-hill", "Lotus Hill Park", 22.5545, 114.055, "nature", "Park", "Futian", 8, "Hill climb to Deng Xiaoping statue and skyline views."),
    place("sz-lianhuashan", "Lianhuashan Park lawns", 22.553, 114.054, "nature", "Park", "Futian", 7, "Weekend picnic slopes below the peak."),
    place("sz-cofco", "COFCO MixC Futian", 22.5408, 114.0555, "shopping", "Mall", "Futian", 8, "Luxury mall on the CBD spine."),
    place("sz-ping-an", "Ping An Finance Centre", 22.5335, 114.055, "sight", "Viewpoint", "Futian", 9, "Supertall with Free Sky observation decks."),
    place("sz-kk100", "KK100 tower", 22.5402, 114.1065, "sight", "Viewpoint", "Luohu", 7, "Sculpted tower landmark east of the CBD."),
    place("sz-futian-station", "Futian Station hub", 22.5395, 114.0565, "sight", "Attraction", "Futian", 6, "High-speed rail and metro megahub under the CBD."),

    // ——— Luohu / East ———
    place("sz-luohu-port", "Luohu Port area", 22.532, 114.118, "sight", "Attraction", "Luohu", 6, "Border gateway vibe and dense retail lanes."),
    place("sz-dongmen", "Dongmen Pedestrian Street", 22.5455, 114.1185, "shopping", "Market", "Luohu", 8, "Classic street shopping and snack alleys."),
    place("sz-guomao", "Guomao Building", 22.541, 114.111, "sight", "Monument", "Luohu", 6, "1980s reform-era tower — Shenzhen's first skyscraper."),
    place("sz-diwang", "Diwang Building observation", 22.5425, 114.1135, "sight", "Viewpoint", "Luohu", 7, "Older skyline deck with Luohu views."),
    place("sz-fairyland", "Children's Paradise / Fairy Lake", 22.58, 114.155, "nature", "Park", "Luohu", 6, "Family park and temple lake northeast of Luohu."),
    place("sz-wutong", "Wutong Mountain", 22.58, 114.21, "nature", "Park", "Yantian", 9, "Highest peak hike with coastal views."),
    place("sz-east-coast", "Yantian East Coast boardwalk", 22.555, 114.235, "nature", "Beach", "Yantian", 7, "Sea promenade and seafood strip."),

    // ——— Nanshan / Shekou ———
    place("sz-window-world", "Window of the World", 22.5365, 113.9715, "sight", "Attraction", "Nanshan", 8, "Miniature world landmarks — kitschy Shenzhen classic.", { flags: ["ticket", "touristy"] }),
    place("sz-happy-valley", "Happy Valley Shenzhen", 22.5405, 113.98, "sight", "Attraction", "Nanshan", 8, "Theme-park thrills next to Window of the World.", { flags: ["ticket"] }),
    place("sz-splendid", "Splendid China Folk Village", 22.534, 113.978, "sight", "Attraction", "Nanshan", 7, "Mini China landscapes and minority shows.", { flags: ["ticket"] }),
    place("sz-oct-harbour", "OCT Harbour", 22.5255, 113.978, "shopping", "Mall", "Nanshan", 8, "Lakeside mall, cafés, and evening lights."),
    place("sz-oct-loft", "OCT-LOFT Creative Park", 22.542, 113.995, "sight", "Attraction", "Nanshan", 9, "Warehouse galleries, design shops, and coffee."),
    place("sz-shekou", "Shekou Sea World", 22.485, 113.915, "sight", "Attraction", "Shekou", 8, "Pier, cruise ship landmark, and waterfront dining."),
    place("sz-china-merchants", "China Merchants Museum", 22.487, 113.918, "museum", "Museum", "Shekou", 6, "Reform history of the Shekou industrial zone."),
    place("sz-nanshan-mountain", "Nanshan Mountain Park", 22.525, 113.935, "nature", "Park", "Nanshan", 7, "Coastal hill trails above Shekou."),
    place("sz-shenzhen-bay", "Shenzhen Bay Park", 22.515, 113.975, "nature", "Park", "Nanshan", 9, "Long bayfront path facing Hong Kong."),
    place("sz-shenzhen-bay-sports", "Shenzhen Bay Sports Center", 22.5185, 113.995, "sight", "Attraction", "Nanshan", 7, "Spring Cocoon stadium and plaza."),
    place("sz-university-town", "University Town libraries", 22.59, 113.975, "sight", "Attraction", "Nanshan", 6, "Campus green belt and striking library forms."),

    // ——— Museums & culture ———
    place("sz-museum", "Shenzhen Museum (Civic Center)", 22.5435, 114.058, "museum", "Museum", "Futian", 8, "City history from fishing village to megacity."),
    place("sz-contemporary", "Museum of Contemporary Art & Planning", 22.5438, 114.057, "museum", "Museum", "Futian", 9, "MOCAPE twin cubes on the civic axis."),
    place("sz-design-museum", "Design Society / V&A Gallery", 22.4865, 113.91, "museum", "Museum", "Shekou", 9, "Design exhibitions in the Sea World Culture Park."),
    place("sz-guan-shanyue", "Guan Shanyue Art Museum", 22.545, 114.062, "museum", "Museum", "Futian", 7, "Lingnan painting collection near civic center."),
    place("sz-art-museum", "Shenzhen Art Museum (new)", 22.685, 114.21, "museum", "Museum", "Longgang", 7, "Major new art campus in the east."),
    place("sz-science", "Shenzhen Museum of Science & Technology", 22.548, 114.055, "museum", "Museum", "Futian", 6, "Hands-on science near Lotus Hill."),
    place("sz-maritime", "China Merchants History Museum annex", 22.488, 113.92, "museum", "Museum", "Shekou", 5, "Shipping and zone pioneer exhibits."),

    // ——— Dafen / Longgang / east culture ———
    place("sz-dafen", "Dafen Oil Painting Village", 22.615, 114.135, "sight", "Attraction", "Longgang", 8, "Replica-art alleys and working studios."),
    place("sz-crane", "Crane Lake Hakka Village", 22.72, 114.28, "sight", "Monument", "Longgang", 7, "Fortified Hakka roundhouse complex."),
    place("sz-dayun", "Universiade Center area", 22.695, 114.22, "sight", "Attraction", "Longgang", 6, "Sports mega-complex and park."),

    // ——— Parks & nature ———
    place("sz-fairy-lake", "Fairy Lake Botanical Garden", 22.58, 114.165, "nature", "Garden", "Luohu", 8, "Temples, lakes, and tropical plant collections.", { flags: ["ticket"] }),
    place("sz-lizhi", "Lizhi Park", 22.548, 114.085, "nature", "Park", "Futian", 6, "Central park with lakes and stadium edge."),
    place("sz-central-park", "Central Park Futian", 22.545, 114.07, "nature", "Park", "Futian", 7, "Green corridor along the civic north-south axis."),
    place("sz-yangtai", "Yangtai Mountain", 22.655, 113.98, "nature", "Park", "Bao'an", 8, "Forest hike and reservoir views northwest."),
    place("sz-dameisha", "Dameisha Beach", 22.595, 114.31, "nature", "Beach", "Yantian", 8, "Popular east-coast sand beach."),
    place("sz-xiaomeisha", "Xiaomeisha Beach", 22.605, 114.33, "nature", "Beach", "Yantian", 7, "Quieter cove beyond Dameisha."),
    place("sz-bijia", "Bijiashan Park", 22.56, 114.08, "nature", "Park", "Futian", 7, "Hill park with skyway and city views."),

    // ——— Shopping ———
    place("sz-mixc", "MixC Shenzhen", 22.5408, 114.0555, "shopping", "Mall", "Futian", 8, "Flagship luxury and dining mall."),
    place("sz-coco-park", "COCO Park Futian", 22.535, 114.055, "shopping", "Mall", "Futian", 8, "Open-air lifestyle mall with nightlife edges."),
    place("sz-coastal-city", "Coastal City", 22.518, 113.935, "shopping", "Mall", "Nanshan", 8, "Huge Nanshan mall by the bay."),
    place("sz-unis", "Uniwalk / Unicity", 22.532, 113.935, "shopping", "Mall", "Nanshan", 6, "Tech-office district retail."),
    place("sz-huaqiangbei", "Huaqiangbei electronics market", 22.545, 114.085, "shopping", "Market", "Futian", 9, "Legendary gadget and component bazaar."),
    place("sz-seg", "SEG Plaza markets", 22.5445, 114.086, "shopping", "Market", "Futian", 7, "Multi-floor electronics towers."),
    place("sz-kk-mall", "KK Mall", 22.54, 114.107, "shopping", "Mall", "Luohu", 7, "Mall at the base of KK100."),
    place("sz-one-avenue", "One Avenue", 22.5355, 114.053, "shopping", "Mall", "Futian", 6, "Underground retail spine near Ping An."),

    // ——— Cafes ———
    place("sz-see-coffee", "SEE Coffee OCT-LOFT", 22.5425, 113.996, "cafe", "Cafe", "Nanshan", 7, "Creative-park specialty pours.", { cuisine: "coffee" }),
    place("sz-starbucks-reserve", "Starbucks Reserve Shekou", 22.486, 113.914, "cafe", "Cafe", "Shekou", 6, "Waterfront reserve bar seating.", { cuisine: "coffee" }),
    place("sz-pacific", "Pacific Coffee Futian", 22.541, 114.057, "cafe", "Cafe", "Futian", 5, "Reliable CBD caffeine stop.", { cuisine: "coffee" }),
    place("sz-alchemy", "Alchemy Coffee Loft", 22.543, 113.997, "cafe", "Cafe", "Nanshan", 7, "Roastery vibe in warehouse lanes.", { cuisine: "coffee" }),
    place("sz-manner", "Manner Coffee Huaqiangbei", 22.5455, 114.084, "cafe", "Cafe", "Futian", 6, "Quick Shanghai-chain espresso after markets.", { cuisine: "coffee" }),
    place("sz-percent-cafe", "Percent Coffee Coastal City", 22.5185, 113.936, "cafe", "Cafe", "Nanshan", 6, "Local specialty near the bay mall.", { cuisine: "coffee" }),
    place("sz-zoo-coffee", "Zoo Coffee OCT Harbour", 22.526, 113.979, "cafe", "Cafe", "Nanshan", 5, "Casual lakeside café seating.", { cuisine: "coffee dessert" }),
    place("sz-book-cafe", "Book City café corner", 22.5405, 114.0585, "cafe", "Cafe", "Futian", 6, "Read-and-sip upstairs in Book City.", { cuisine: "coffee tea" }),

    // ——— Food ———
    place("sz-chaozhou", "Chaozhou cuisine strip Luohu", 22.546, 114.12, "food", "Restaurant", "Luohu", 8, "Beef hotpot and Chaoshan classics.", { cuisine: "chaozhou chinese" }),
    place("sz-dimsum", "Din Tai Fung MixC", 22.541, 114.055, "food", "Restaurant", "Futian", 7, "Reliable xiaolongbao in the CBD mall.", { cuisine: "taiwanese chinese" }),
    place("sz-hakka", "Hakka restaurant Longgang", 22.72, 114.275, "food", "Restaurant", "Longgang", 7, "Stuffed tofu and salt-baked chicken.", { cuisine: "hakka chinese" }),
    place("sz-seafood-shekou", "Shekou seafood promenade", 22.4845, 113.913, "food", "Restaurant", "Shekou", 8, "Pick-your-seafood tanks by the pier.", { cuisine: "seafood chinese" }),
    place("sz-siu-mei", "Cantonese roast shops Dongmen", 22.545, 114.119, "food", "Quick meal", "Luohu", 7, "Char siu and roast goose rice plates.", { cuisine: "cantonese" }),
    place("sz-xiaomian", "Chongqing noodles Futian", 22.538, 114.054, "food", "Quick meal", "Futian", 6, "Spicy noon bowls for office crowds.", { cuisine: "sichuan noodles" }),
    place("sz-hotpot", "Haidilao Coastal City", 22.5175, 113.934, "food", "Restaurant", "Nanshan", 7, "Service-famous hotpot chain.", { cuisine: "hotpot chinese" }),
    place("sz-teochew", "Teochew porridge shops", 22.544, 114.117, "food", "Restaurant", "Luohu", 7, "Late porridge and small plates.", { cuisine: "teochew chinese" }),
    place("sz-muslim", "Xinjiang skewers OCT", 22.525, 113.977, "food", "Quick meal", "Nanshan", 6, "Lamb skewers and naan evenings.", { cuisine: "xinjiang chinese" }),
    place("sz-japanese", "Japanese strip Shekou", 22.4875, 113.916, "food", "Restaurant", "Shekou", 7, "Expat-favored sushi and ramen lanes.", { cuisine: "japanese" }),
    place("sz-korean", "Korean town Futian", 22.536, 114.052, "food", "Restaurant", "Futian", 6, "BBQ and bibimbap near COCO Park.", { cuisine: "korean" }),
    place("sz-dim-sum-morning", "Morning yum cha Nanshan", 22.52, 113.94, "food", "Restaurant", "Nanshan", 7, "Cart-style weekend dim sum.", { cuisine: "cantonese dim_sum" }),
    place("sz-street-bao", "Baozi stalls Huaqiangbei", 22.5448, 114.0855, "food", "Quick meal", "Futian", 5, "Steamed buns between gadget floors.", { cuisine: "chinese breakfast" }),
    place("sz-shunde", "Shunde cuisine Futian", 22.539, 114.056, "food", "Restaurant", "Futian", 7, "Delicate Cantonese fish and claypot.", { cuisine: "cantonese" }),
    place("sz-dessert", "Sugar water shops Dongmen", 22.5458, 114.118, "food", "Quick meal", "Luohu", 6, "Mango pomelo sago and herbal sweets.", { cuisine: "cantonese dessert" }),

    // ——— Nightlife ———
    place("sz-coco-nightlife", "COCO Park nightlife", 22.5345, 114.0545, "nightlife", "Bar", "Futian", 8, "Bars and clubs around the open plaza."),
    place("sz-shekou-bars", "Shekou bar street", 22.4855, 113.9145, "nightlife", "Bar", "Shekou", 8, "Expat bars along Sea World lanes."),
    place("sz-oct-night", "OCT Harbour night lights", 22.5255, 113.9785, "nightlife", "Bar", "Nanshan", 7, "Lakeside drinks after sunset."),
    place("sz-mixc-roof", "MixC rooftop lounges", 22.541, 114.0558, "nightlife", "Bar", "Futian", 6, "Mall-top cocktails in the CBD."),
    place("sz-luohu-ktv", "Luohu KTV row", 22.543, 114.115, "nightlife", "Bar", "Luohu", 5, "Karaoke towers near Guomao."),
    place("sz-nanshan-clubs", "Nanshan club strip", 22.52, 113.93, "nightlife", "Club", "Nanshan", 7, "Dance clubs near Coastal City."),

    // ——— Stays ———
    place("sz-stay-st-regis", "The St. Regis Shenzhen", 22.537, 114.054, "stay", "Hotel", "Futian", 9, "Luxury CBD stay by Ping An."),
    place("sz-stay-four-seasons", "Four Seasons Shenzhen", 22.5365, 114.0535, "stay", "Hotel", "Futian", 9, "Polished Futian tower hotel."),
    place("sz-stay-shangri-la", "Shangri-La Futian", 22.5385, 114.057, "stay", "Hotel", "Futian", 8, "Business luxury on the civic corridor."),
    place("sz-stay-hilton", "Hilton Shenzhen Shekou", 22.486, 113.912, "stay", "Hotel", "Shekou", 8, "Waterfront stay by Sea World."),
    place("sz-stay-intercontinental", "InterContinental Shenzhen", 22.54, 114.106, "stay", "Hotel", "Luohu", 8, "Linked to KK100 retail."),
    place("sz-stay-marriott-bay", "Shenzhen Marriott Hotel Nanshan", 22.517, 113.936, "stay", "Hotel", "Nanshan", 8, "Bay-area stay by Coastal City."),
    place("sz-stay-oct", "OCT Harbour hotels", 22.526, 113.977, "stay", "Hotel", "Nanshan", 7, "Resort-feel rooms by the lake mall."),
    place("sz-stay-vienna", "Vienna Hotel Huaqiangbei", 22.545, 114.087, "stay", "Hotel", "Futian", 6, "Practical midscale near electronics markets."),
    place("sz-stay-hyatt", "Grand Hyatt Shenzhen", 22.5415, 114.06, "stay", "Hotel", "Futian", 8, "Civic-center address for museum days."),
    place("sz-stay-pullman", "Pullman Shenzhen", 22.533, 114.05, "stay", "Hotel", "Futian", 7, "Solid CBD base with metro access."),
  ],
};
