import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const seoul: CityCatalog = {
  id: "seoul",
  name: "Seoul, South Korea",
  aliases: ["seoul"],
  center: { lat: 37.5665, lon: 126.978 },
  places: [
    // ——— Jongno / Gyeongbokgung ———
    place("sel-gyeongbok", "Gyeongbokgung Palace", 37.5796, 126.977, "sight", "Castle", "Jongno", 10, "Main Joseon palace — free guided tours in English at set times."),
    place("sel-gwanghwamun", "Gwanghwamun Square", 37.5725, 126.9768, "sight", "Monument", "Jongno", 8, "Statues and palace gate views — start of a palace loop."),
    place("sel-bukchon", "Bukchon Hanok Village", 37.5825, 126.9855, "sight", "Attraction", "Bukchon", 9, "Hanok alleys between palaces — go early, respect residents."),
    place("sel-changdeok", "Changdeokgung Palace", 37.5794, 126.991, "sight", "Castle", "Jongno", 9, "UNESCO palace — Secret Garden tour needs reservation."),
    place("sel-insadong", "Insadong street", 37.5745, 126.9855, "shopping", "Market", "Insadong", 8, "Tea shops, crafts, and gallery lanes near the palaces."),
    place("sel-jogyesa", "Jogyesa Temple", 37.5742, 126.982, "sight", "Monument", "Jongno", 7, "Colorful lanterns at the head temple of Korean Buddhism."),
    place("sel-cheonggye", "Cheonggyecheon Stream", 37.5695, 126.9785, "nature", "Park", "Jongno", 8, "Urban stream walk lit well at night."),
    place("sel-tapgol", "Tapgol Park", 37.5722, 126.99, "nature", "Park", "Jongno", 6, "Small historic park near Insadong's east end."),

    // ——— Myeongdong / N Seoul Tower ———
    place("sel-myeongdong", "Myeongdong shopping street", 37.5636, 126.9855, "shopping", "Market", "Myeongdong", 8, "K-beauty and street food in the pedestrian core."),
    place("sel-namsan", "N Seoul Tower", 37.5512, 126.9882, "sight", "Viewpoint", "Namsan", 9, "Cable car or bus up Namsan for 360° views."),
    place("sel-namsan-park", "Namsan Park trails", 37.5555, 126.9845, "nature", "Park", "Namsan", 7, "Forest paths circling the tower hill."),
    place("sel-deoksugung", "Deoksugung Palace", 37.5658, 126.9751, "sight", "Castle", "City Hall", 7, "Smaller palace beside the modern city hall campus."),
    place("sel-namdaemun", "Namdaemun Market", 37.559, 126.9775, "shopping", "Market", "Namdaemun", 7, "Wholesale market maze south of the gate."),
    place("sel-lotte", "Lotte Department Store Main", 37.5645, 126.9815, "shopping", "Market", "Myeongdong", 6, "Department store anchor for Myeongdong loops."),

    // ——— Dongdaemun / Hongdae ———
    place("sel-ddp", "Dongdaemun Design Plaza", 37.5665, 127.009, "sight", "Attraction", "Dongdaemun", 8, "Zaha Hadid curves and night LED rose garden."),
    place("sel-dongdaemun", "Dongdaemun History & Culture Park", 37.5652, 127.0075, "museum", "Museum", "Dongdaemun", 7, "Ruins of the old fortress wall in the park."),
    place("sel-hongdae", "Hongdae pedestrian streets", 37.5565, 126.9235, "sight", "Attraction", "Hongdae", 9, "Youth street performances and indie shops by the university."),
    place("sel-trick-eye", "Trick Eye Museum Hongdae", 37.5535, 126.9205, "museum", "Museum", "Hongdae", 6, "Photo-trick galleries for a light rainy-hour."),
    place("sel-ewha", "Ewha Womans University campus", 37.5615, 126.9465, "sight", "Attraction", "Sinchon", 6, "Campus architecture and student shopping streets."),
    place("sel-sinchon", "Sinchon nightlife alley", 37.5555, 126.9375, "nightlife", "Bar", "Sinchon", 6, "Student bars between Yonsei and Ewha."),

    // ——— Gangnam / COEX ———
    place("sel-gangnam", "Gangnam Station district", 37.498, 127.0276, "shopping", "Market", "Gangnam", 7, "Upscale shopping and the famous street from the song."),
    place("sel-bongeun", "Bongeunsa Temple", 37.5148, 127.0585, "sight", "Monument", "Gangnam", 7, "Temple grounds against COEX towers."),
    place("sel-coex", "COEX Mall & Starfield Library", 37.5125, 127.0595, "shopping", "Market", "Gangnam", 8, "Giant underground mall with the famous bookshelf atrium."),
    place("sel-lotte-world", "Lotte World Tower", 37.5125, 127.1025, "sight", "Viewpoint", "Jamsil", 8, "Seoul Sky observation deck in Korea's tallest building."),
    place("sel-seokchon", "Seokchon Lake", 37.5115, 127.0985, "nature", "Park", "Jamsil", 7, "Lake loop around Lotte World with cherry blossoms."),
    place("sel-apgujeong", "Apgujeong Rodeo Street", 37.5275, 127.0395, "shopping", "Market", "Apgujeong", 6, "Luxury shopping south of the river."),

    // ——— Itaewon / Yongsan ———
    place("sel-war", "War Memorial of Korea", 37.5365, 126.977, "museum", "Museum", "Yongsan", 8, "Outdoor aircraft and tanks with strong indoor galleries."),
    place("sel-itaewon", "Itaewon main street", 37.5345, 126.9945, "sight", "Attraction", "Itaewon", 7, "International dining and late-night energy."),
    place("sel-leeum", "Leeum Samsung Museum of Art", 37.5385, 126.9995, "museum", "Museum", "Itaewon", 8, "Mario Botta, Jean Nouvel, and Rem Koolhaas buildings in one."),
    place("sel-namsangol", "Namsangol Hanok Village", 37.5595, 126.9945, "sight", "Attraction", "Chungmuro", 6, "Restored hanoks with seasonal performances."),
    place("sel-yongsan", "Yongsan Electronics Market", 37.5315, 126.9655, "shopping", "Market", "Yongsan", 5, "Tech bargain basement if you need parts."),

    // ——— Museums & culture ———
    place("sel-national-museum", "National Museum of Korea", 37.5239, 126.9803, "museum", "Museum", "Yongsan", 9, "Vast free collection — allow a half-day minimum."),
    place("sel-national-folk", "National Folk Museum", 37.5798, 126.9775, "museum", "Museum", "Jongno", 7, "Inside Gyeongbokgung grounds — daily life exhibits."),
    place("sel-sejong", "Sejong Center for the Performing Arts", 37.572, 126.976, "sight", "Attraction", "Gwanghwamun", 6, "Performances facing Gwanghwamun."),
    place("sel-seoul-museum", "Seoul Museum of History", 37.5655, 126.9685, "museum", "Museum", "Seodaemun", 7, "City timeline near Gyeonghuigung."),
    place("sel-gyeonghuigung", "Gyeonghuigung Palace", 37.5705, 126.9695, "sight", "Castle", "Seodaemun", 6, "Lesser-known palace west of City Hall."),
    place("sel-dongmyo", "Dongmyo Shrine", 37.5725, 127.0175, "sight", "Monument", "Dongdaemun", 6, "Confucian shrine flea market on Sundays."),

    // ——— Nature & viewpoints ———
    place("sel-han-river", "Banpo Hangang Park", 37.5085, 126.9965, "nature", "Park", "Banpo", 8, "Moonlight Rainbow Fountain shows spring through fall."),
    place("sel-yeouido", "Yeouido Hangang Park", 37.5285, 126.9325, "nature", "Park", "Yeouido", 7, "Cherry festival island and picnic lawns."),
    place("sel-bukhansan", "Bukhansan National Park trail", 37.6625, 126.9785, "nature", "Park", "Bukhansan", 8, "Granite peaks on the northern city edge — start early."),
    place("sel-inwangsan", "Inwangsan mountain trail", 37.5845, 126.9585, "nature", "Park", "Seodaemun", 7, "Shorter city hike with wall and shrine views."),
    place("sel-seonyudo", "Seonyudo Park", 37.5435, 126.8965, "nature", "Park", "Yeongdeungpo", 6, "Eco park on a former water-treatment island."),
    place("sel-world-cup", "World Cup Park", 37.5685, 126.8955, "nature", "Park", "Mapo", 6, "Landfill turned grass hills with skyline views."),

    // ——— Markets & shopping ———
    place("sel-gwangjang", "Gwangjang Market", 37.57, 127.0015, "shopping", "Market", "Jongno", 9, "Bindaetteok and mayak gimbap among fabric lanes."),
    place("sel-tongin", "Tongin Market lunch trays", 37.5785, 126.9685, "shopping", "Market", "Seocheon", 7, "Coin lunch boxes from stall to stall."),
    place("sel-mangwon", "Mangwon Market", 37.5565, 126.9055, "shopping", "Market", "Mapo", 6, "Neighborhood market popular with locals and expats."),
    place("sel-starfield", "Starfield COEX aquarium area", 37.5135, 127.06, "sight", "Attraction", "Gangnam", 6, "Family aquarium beside the design mall."),
    place("sel-garosu", "Garosu-gil stroll", 37.5205, 127.0235, "shopping", "Market", "Sinsa", 7, "Tree-lined boutiques in gentrified Gangnam."),
    place("sel-kstar", "K-Star Road Gangnam", 37.5235, 127.0415, "sight", "Attraction", "Gangnam", 6, "K-pop agency murals and bear statues for fans."),
    place("sel-noryangjin", "Noryangjin Fish Market", 37.5135, 126.9405, "shopping", "Market", "Dongjak", 7, "Live seafood auction halls — eat sashimi upstairs."),
    place("sel-olympic", "Olympic Park", 37.5215, 127.1155, "nature", "Park", "Songpa", 6, "1988 Games grounds with sculpture park loops."),
    place("sel-ikseon", "Ikseon-dong hanok cafes", 37.5745, 126.9895, "sight", "Attraction", "Ikseon", 7, "Revitalized alleys with tiny restaurants near Jongno."),
    place("sel-naksan", "Naksan Park city wall walk", 37.5805, 127.0085, "nature", "Park", "Dongdaemun", 7, "Fortress wall trail with downtown panoramas."),
    place("sel-freedom", "Freedom Park Namsan footpath", 37.5585, 126.9815, "nature", "Park", "Namsan", 6, "Steeper stairs shortcut toward the tower."),

    // ——— Cafes ———
    place("sel-anthracite", "Anthracite Coffee Hannam", 37.5345, 126.9945, "cafe", "Cafe", "Hannam", 8, "Industrial-roastery cafe in a former factory.", { cuisine: "coffee" }),
    place("sel-fritz", "Fritz Coffee Company", 37.5475, 126.9235, "cafe", "Cafe", "Mapo", 7, "Seoul specialty-coffee landmark with playful branding.", { cuisine: "coffee" }),
    place("sel-blue-bottle", "Blue Bottle Samcheong", 37.5805, 126.9815, "cafe", "Cafe", "Samcheong", 7, "Minimal Third Wave near the palaces.", { cuisine: "coffee" }),
    place("sel-layered", "Layered Jongno", 37.5755, 126.9845, "cafe", "Cafe", "Insadong", 6, "British-inspired scones and tea service.", { cuisine: "coffee pastry" }),
    place("sel-onion", "Onion Anguk", 37.5765, 126.9855, "cafe", "Cafe", "Anguk", 7, "Korean bakery cafe in a hanok courtyard.", { cuisine: "coffee pastry" }),
    place("sel-starbucks-bukchon", "Bukchon tea house cafe pocket", 37.582, 126.9865, "cafe", "Cafe", "Bukchon", 5, "Quiet caffeine stop between hanok photo walks.", { cuisine: "coffee" }),
    place("sel-momos", "Momos Coffee Garosu-gil", 37.5215, 127.0245, "cafe", "Cafe", "Sinsa", 6, "Gangnam roastery with solid pour-overs.", { cuisine: "coffee" }),
    place("sel-duo", "Duo Coffee Bar", 37.5565, 126.9245, "cafe", "Cafe", "Hongdae", 6, "Student favorite before nightlife.", { cuisine: "coffee" }),

    // ——— Food ———
    place("sel-jungsik", "Jungsik", 37.5255, 127.0425, "food", "Restaurant", "Gangnam", 9, "Modern Korean tasting — reserve well ahead.", { cuisine: "korean" }),
    place("sel-mingles", "Mingles area fine dining", 37.5245, 127.0415, "food", "Restaurant", "Gangnam", 8, "Contemporary Korean plates with seasonal focus.", { cuisine: "korean" }),
    place("sel-maple", "Maple Tree House Itaewon", 37.5348, 126.9948, "food", "Restaurant", "Itaewon", 8, "Premium Korean BBQ with table grilling.", { cuisine: "korean bbq" }),
    place("sel-wangbi", "Wangbijib Myeongdong", 37.5635, 126.9858, "food", "Restaurant", "Myeongdong", 7, "Tourist-friendly galbi with English menus.", { cuisine: "korean bbq" }),
    place("sel-kalguksu", "Myeongdong Kyoja", 37.5632, 126.9852, "food", "Quick meal", "Myeongdong", 8, "Knife-cut noodles and dumplings — expect a line.", { cuisine: "korean" }),
    place("sel-gogung", "Gogung Bibimbap Jongno", 37.5748, 126.9858, "food", "Restaurant", "Insadong", 7, "Stone-bowl bibimbap in a traditional dining room.", { cuisine: "korean" }),
    place("sel-tosok", "Tosokchon Samgyetang", 37.5795, 126.9725, "food", "Restaurant", "Seochon", 8, "Ginseng chicken soup near Gyeongbokgung's west gate.", { cuisine: "korean" }),
    place("sel-gwangjang-food", "Gwangjang bindaetteok stalls", 37.57, 127.0018, "food", "Quick meal", "Jongno", 8, "Crispy mung-bean pancakes in the market aisles.", { cuisine: "korean street_food" }),
    place("sel-hotteok", "Hotteok street cart Insadong", 37.5745, 126.9865, "food", "Quick meal", "Insadong", 6, "Sweet nut-filled pancake snack while shopping.", { cuisine: "korean street_food" }),
    place("sel-chimaek", "Chimaek alley Hongdae", 37.5568, 126.9245, "food", "Restaurant", "Hongdae", 7, "Fried chicken and beer combo after shows.", { cuisine: "korean" }),
    place("sel-jokbal", "Jokbal alley Gongdeok", 37.5415, 126.9515, "food", "Restaurant", "Mapo", 6, "Pig's trotters with saeujeot — late-night classic.", { cuisine: "korean" }),
    place("sel-kimbap", "Gimbap Cheonguk shops", 37.5665, 126.978, "food", "Quick meal", "Jongno", 5, "24-hour gimbap diners across the city.", { cuisine: "korean" }),
    place("sel-vegan", "Plant Cafe Itaewon", 37.5342, 126.9942, "food", "Restaurant", "Itaewon", 6, "Plant-based plates in the international quarter.", { cuisine: "vegan vegetarian" }),
    place("sel-chinese", "Jjajangmyeon in Incheon Chinatown trip", 37.4755, 126.6165, "food", "Restaurant", "Incheon", 6, "Black-bean noodles on a metro day trip if time allows.", { cuisine: "chinese korean" }),
    place("sel-tteokbokki", "Sindang-dong tteokbokki town", 37.5655, 127.0175, "food", "Quick meal", "Dongdaemun", 7, "Spicy rice cakes in the alley that made the dish famous.", { cuisine: "korean street_food" }),
    place("sel-hansik", "Baekban home-style lunch Jongno", 37.5725, 126.9875, "food", "Restaurant", "Jongno", 6, "Set lunches with banchan refills.", { cuisine: "korean" }),
    place("sel-pocha", "Pojangmacha tent bars near Jongno", 37.5715, 126.9885, "food", "Restaurant", "Jongno", 6, "Plastic-tent soju spots after palace days.", { cuisine: "korean izakaya" }),

    // ——— Nightlife ———
    place("sel-club", "Club Octagon area Gangnam", 37.4985, 127.0295, "nightlife", "Bar", "Gangnam", 7, "Large EDM clubs south of the river — dress code applies."),
    place("sel-itaewon-night", "Itaewon club hill", 37.5348, 126.9955, "nightlife", "Bar", "Itaewon", 8, "International bars and late kitchens on the hill."),
    place("sel-hongdae-night", "Hongdae playground bars", 37.5568, 126.9225, "nightlife", "Bar", "Hongdae", 8, "Cheap shots and live music on the side streets."),
    place("sel-makgeolli", "Makgeolli bars Insadong fringe", 37.5755, 126.9835, "nightlife", "Bar", "Insadong", 6, "Rice wine pitchers with savory pancakes."),
    place("sel-southside", "Southside Parlor", 37.5255, 126.9245, "nightlife", "Bar", "Hapjeong", 7, "Awarded cocktail bar in Mapo."),
    place("sel-lefe", "Le Chamber", 37.5258, 126.9235, "nightlife", "Bar", "Cheongdam", 7, "Hidden bookshelf-door speakeasy in Gangnam."),
    place("sel-myeongdong-rooftop", "Myeongdong rooftop bars", 37.5638, 126.9865, "nightlife", "Bar", "Myeongdong", 6, "Hotel rooftops with neon city views."),
    place("sel-han-river-beer", "Hangang convenience-store beer picnic", 37.5285, 126.9328, "nightlife", "Bar", "Yeouido", 7, "Grab chicken and soju for a riverside sunset."),

    // ——— Stays ———
    place("sel-stay-four", "Four Seasons Seoul area", 37.5705, 126.9785, "stay", "Hotel", "Gwanghwamun", 9, "Luxury on Cheonggyecheon with palace walks."),
    place("sel-stay-signiel", "Signiel Seoul area", 37.5125, 127.1025, "stay", "Hotel", "Jamsil", 9, "Top-floor rooms in Lotte World Tower."),
    place("sel-stay-shilla", "The Shilla Seoul area", 37.5555, 127.0055, "stay", "Hotel", "Jung", 9, "Classic grande dame north of Namsan."),
    place("sel-stay-ryse", "RYSE Hotel Hongdae", 37.5565, 126.9235, "stay", "Hotel", "Hongdae", 8, "Design hotel in the indie nightlife zone."),
    place("sel-stay-lotte", "Lotte Hotel Seoul", 37.5655, 126.9785, "stay", "Hotel", "Myeongdong", 8, "Connected to Avenuel mall and Myeongdong strolls."),
    place("sel-stay-ambassador", "Ambassador Seoul Pullman area", 37.5658, 126.9788, "stay", "Hotel", "Myeongdong", 7, "City Hall–adjacent tower rooms."),
    place("sel-stay-ryokan", "Rakkojae Hanok", 37.5795, 126.9685, "stay", "Hotel", "Seochon", 8, "Hanok inn near Gyeongbokgung's west village."),
    place("sel-stay-mondrian", "Mondrian Seoul Itaewon", 37.5345, 126.9948, "stay", "Hotel", "Itaewon", 7, "Stylish base for international dining nights."),
    place("sel-stay-ibis", "ibis Styles Myeongdong", 37.5635, 126.9845, "stay", "Hotel", "Myeongdong", 6, "Mid-range chain amid cosmetics shopping."),
    place("sel-stay-guesthouse-bukchon", "Bukchon guesthouse", 37.582, 126.986, "stay", "Guest house", "Bukchon", 7, "Sleep in a hanok lane — quiet after 10 pm."),
    place("sel-stay-guest-itaewon", "Itaewon guesthouse", 37.5342, 126.994, "stay", "Guest house", "Itaewon", 6, "Budget rooms in the expat quarter."),
    place("sel-stay-mango", "Mango House Hongdae", 37.5562, 126.9242, "stay", "Guest house", "Hongdae", 6, "Social guesthouse near the university strip."),
    place("sel-stay-kimchi", "Kimchi Guesthouse Insadong", 37.5752, 126.9842, "stay", "Guest house", "Insadong", 6, "Traditional house stay walking distance to palaces."),
    place("sel-stay-backpackers", "Bong House Hostel", 37.5792, 126.9695, "stay", "Hostel", "Seochon", 6, "Friendly hostel near Seochon cafes."),
    place("sel-stay-kpop", "Kpop stay Dongdaemun", 37.5665, 127.0085, "stay", "Hostel", "Dongdaemun", 5, "Budget beds by the design plaza."),
    place("sel-stay-kimchi-hongdae", "Kimchee Hongdae Guest House", 37.5555, 126.9225, "stay", "Hostel", "Hongdae", 6, "Popular hostel steps from the club streets."),
    place("sel-stay-apt-gangnam", "Gangnam apartment stay", 37.4985, 127.0285, "stay", "Apartment", "Gangnam", 7, "Self-catering south of the river for longer visits."),
    place("sel-stay-apt-mapo", "Mapo apartment stay", 37.5565, 126.9515, "stay", "Apartment", "Mapo", 6, "Hongdae-adjacent kitchen base."),
    place("sel-stay-apt-jongno", "Jongno apartment stay", 37.5725, 126.9895, "stay", "Apartment", "Jongno", 6, "Palace-loop apartment with market mornings."),
  ],
};