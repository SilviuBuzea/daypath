import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const hochiminh: CityCatalog = {
  id: "hochiminh",
  name: "Ho Chi Minh City, Vietnam",
  aliases: ["ho chi minh", "ho chi minh city", "saigon", "hcmc"],
  center: { lat: 10.8231, lon: 106.6297 },
  places: [
    // ——— District 1 historic core ———
    place("hcm-notre-dame", "Notre-Dame Cathedral Basilica of Saigon", 10.7798, 106.699, "sight", "Monument", "District 1", 9, "Red-brick French cathedral on Paris Square — façade restoration check before visiting.", { flags: ["free", "touristy"] }),
    place("hcm-post", "Saigon Central Post Office", 10.7801, 106.6998, "sight", "Monument", "District 1", 9, "Gothic-arched postal hall with maps and souvenir counters.", { flags: ["free", "touristy"] }),
    place("hcm-opera", "Saigon Opera House", 10.7765, 106.7032, "sight", "Monument", "District 1", 8, "Colonial theatre — evening shows or exterior photos from Lam Son."),
    place("hcm-peoples", "People's Committee Building", 10.776, 106.7008, "sight", "Monument", "District 1", 8, "Lit Hôtel de Ville façade facing Nguyen Hue walking street.", { flags: ["free"] }),
    place("hcm-nguyen-hue", "Nguyen Hue Walking Street", 10.7745, 106.7035, "sight", "Attraction", "District 1", 8, "Pedestrian boulevard with fountains, weekend crowds, and skyline views."),
    place("hcm-bitexco", "Bitexco Financial Tower Skydeck", 10.7716, 106.7043, "sight", "Viewpoint", "District 1", 8, "Helipad skyscraper views over the Saigon River bend.", { flags: ["ticket"] }),
    place("hcm-landmark81", "Landmark 81 SkyView", 10.795, 106.722, "sight", "Viewpoint", "Binh Thanh", 9, "Tallest tower observatory in Vinhomes Central Park.", { flags: ["ticket"] }),
    place("hcm-independence", "Independence Palace (Reunification)", 10.777, 106.6955, "sight", "Monument", "District 1", 10, "1960s presidential palace with war-room bunkers and rooftop tank photos.", { tip: "Allow 1.5–2 hours; combo ticket with War Remnants often sold.", flags: ["ticket", "touristy"] }),
    place("hcm-war-remnants", "War Remnants Museum", 10.7795, 106.692, "museum", "Museum", "District 3", 10, "Powerful war exhibits — emotionally heavy, essential context.", { tip: "Go morning; photography rules vary by gallery.", flags: ["ticket", "touristy"] }),
    place("hcm-fine-arts", "HCMC Fine Arts Museum", 10.7705, 106.6945, "museum", "Museum", "District 1", 8, "Colonial villa with Vietnamese modern and wartime art.", { flags: ["ticket"] }),
    place("hcm-history", "HCMC Museum (Gia Long Palace)", 10.7768, 106.6995, "museum", "Museum", "District 1", 7, "City history in a mustard-yellow colonial mansion.", { flags: ["ticket"] }),
    place("hcm-ben-thanh", "Ben Thanh Market", 10.772, 106.6983, "shopping", "Market", "District 1", 9, "Iconic covered market for coffee, lacquer, and lunch stalls.", { tip: "Haggle politely; prices drop away from the main doors.", flags: ["touristy"] }),
    place("hcm-ben-thanh-night", "Ben Thanh night market street", 10.7715, 106.6975, "shopping", "Market", "District 1", 7, "Evening stalls spill onto surrounding streets after dark."),
    place("hcm-cong-vien", "30/4 Park (Tao Dan fringe)", 10.7785, 106.6945, "nature", "Park", "District 1", 6, "Green buffer between palace and cathedral for a breather."),
    place("hcm-tao-dan", "Tao Dan Park", 10.7765, 106.6915, "nature", "Park", "District 1", 7, "Morning tai chi, bird singers, and shaded paths."),
    place("hcm-book-street", "Book Street (Duong Sach)", 10.7795, 106.6985, "shopping", "Market", "District 1", 7, "Open-air bookshops beside Notre-Dame."),
    place("hcm-hai-ba", "Hai Ba Trung flower street pocket", 10.7825, 106.6955, "shopping", "Market", "District 3", 5, "Florist stretch useful for Tet-season colour."),

    // ——— Chinatown / District 5 ———
    place("hcm-binh-tay", "Binh Tay Market", 10.7495, 106.6515, "shopping", "Market", "Cholon", 8, "Wholesale Chinatown market with temples nearby — morning energy."),
    place("hcm-thien-hau", "Thien Hau Temple", 10.7505, 106.6615, "sight", "Monument", "Cholon", 8, "Incense-coiled sea-goddess temple on Nguyen Trai."),
    place("hcm-quan-am", "Quan Am Pagoda", 10.7535, 106.6585, "sight", "Monument", "Cholon", 7, "Ornate Chinese pagoda courtyard in Cholon."),
    place("hcm-phung-son", "Phung Son Pagoda", 10.7485, 106.6455, "sight", "Monument", "District 11", 6, "Quiet temple on the Cholon fringe."),
    place("hcm-cholon-food", "Cholon street-food lanes", 10.7515, 106.66, "food", "Restaurant", "Cholon", 7, "Chinese-Vietnamese noodles and roast meats off the temple belt.", { cuisine: "chinese-vietnamese" }),

    // ——— District 3 & museums ———
    place("hcm-voh", "Voh Boc / radio museum fringe", 10.7855, 106.6885, "museum", "Museum", "District 3", 5, "Niche history stops tucked in D3 villas."),
    place("hcm-mariamman", "Mariamman Hindu Temple", 10.7715, 106.6955, "sight", "Monument", "District 1", 7, "Colourful South Indian temple near Ben Thanh."),
    place("hcm-xa-loi", "Xa Loi Pagoda", 10.7765, 106.6865, "sight", "Monument", "District 3", 7, "Buddhist pagoda central to 1960s protests — calm courtyard."),
    place("hcm-jade", "Jade Emperor Pagoda (Phuoc Hai)", 10.7905, 106.6975, "sight", "Monument", "District 1", 9, "Taoist-Buddhist maze of incense and turtle ponds.", { flags: ["touristy"] }),
    place("hcm-le-van", "Le Van Tam Park", 10.7885, 106.6925, "nature", "Park", "District 1", 5, "Local park near Jade Emperor for shade."),

    // ——— Nguyen Thi Minh Khai / cafe apartment ———
    place("hcm-cafe-apartment", "Cafe Apartment (42 Nguyen Hue)", 10.7735, 106.7038, "cafe", "Cafe", "District 1", 8, "Vertical maze of indie cafes in a renovated apartment block."),
    place("hcm-cong-caphe", "Cong Caphe (various D1)", 10.7755, 106.7015, "cafe", "Cafe", "District 1", 7, "Coconut coffee in army-green nostalgic interiors.", { cuisine: "cafe" }),
    place("hcm-trung-nguyen", "Trung Nguyen Legend cafe", 10.7748, 106.7005, "cafe", "Cafe", "District 1", 6, "Vietnamese coffee house near the opera."),
    place("hcm-the-coffee-house", "The Coffee House terrace spots", 10.775, 106.7025, "cafe", "Cafe", "District 1", 5, "Reliable AC and wifi between sights."),

    // ——— Dong Khoi & shopping ———
    place("hcm-dong-khoi", "Dong Khoi Street stroll", 10.7755, 106.7045, "shopping", "Market", "District 1", 8, "Luxury and lacquer shops on the old rue Catinat axis."),
    place("hcm-takashimaya", "Saigon Centre Takashimaya", 10.773, 106.7005, "shopping", "Market", "District 1", 7, "Japanese department store and food halls."),
    place("hcm-vincom", "Vincom Center Dong Khoi", 10.7768, 106.7025, "shopping", "Market", "District 1", 6, "Mall basement links and cinema near the opera."),
    place("hcm-diamond", "Diamond Plaza", 10.7815, 106.6985, "shopping", "Market", "District 1", 6, "Older mall by Notre-Dame with rooftop views."),
    place("hcm-saiton-square", "Saigon Square bargains", 10.7725, 106.7005, "shopping", "Market", "District 1", 6, "Indoor bargain fashion near Ben Thanh."),

    // ——— Bitexco river & District 2 / Thu Duc ———
    place("hcm-bach-dang", "Bach Dang Waterbus pier", 10.7715, 106.7075, "sight", "Attraction", "District 1", 7, "River waterbus to District 2 — scenic and practical.", { flags: ["ticket"] }),
    place("hcm-saigon-river", "Saigon River sunset walk", 10.7725, 106.7085, "nature", "Park", "District 1", 7, "Promenade views toward Thu Thiem skyline."),
    place("hcm-thu-thiem", "Thu Thiem tunnel / new city fringe", 10.7855, 106.7185, "sight", "Viewpoint", "Thu Thiem", 6, "Emerging skyline district across the river."),
    place("hcm-vinhomes", "Vinhomes Central Park promenade", 10.7945, 106.7215, "nature", "Park", "Binh Thanh", 7, "Landscaped park under Landmark 81."),

    // ——— District 7 / Phu My Hung ———
    place("hcm-crescent", "Crescent Mall / Lake walk", 10.7295, 106.7185, "shopping", "Market", "Phu My Hung", 7, "Expat-district mall and crescent lake evening lights."),
    place("hcm-starlight", "Starlight Bridge", 10.7285, 106.7205, "sight", "Attraction", "Phu My Hung", 6, "Pedestrian bridge light show over the crescent."),

    // ——— Cu Chi & Mekong day pockets ———
    place("hcm-cu-chi", "Cu Chi Tunnels", 11.1435, 106.4945, "sight", "Monument", "Cu Chi", 10, "Half-day underground tunnels northwest of the city.", { tip: "Book a morning tour; bring water and closed shoes.", flags: ["ticket", "touristy"] }),
    place("hcm-ben-duoc", "Ben Duoc Tunnels section", 11.1555, 106.4855, "sight", "Monument", "Cu Chi", 8, "Less crowded tunnel site than Ben Dinh."),
    place("hcm-mekong", "My Tho Mekong delta day trip", 10.3605, 106.3585, "nature", "Park", "Mekong Day Trip", 9, "Boat canals, coconut candy, and island lunch south of HCMC.", { tip: "Full-day tour; sunrise departures from District 1 hotels.", flags: ["touristy"] }),
    place("hcm-can-gio", "Can Gio Biosphere mangrove ferry", 10.4055, 106.9555, "nature", "Park", "Can Gio", 7, "Mangrove and monkey-island day south-east of the city.", { flags: ["ticket"] }),

    // ——— Museums & culture continued ———
    place("hcm-southern-womens", "Southern Women's Museum", 10.7825, 106.6855, "museum", "Museum", "District 3", 6, "Exhibits on Vietnamese women's history and wartime roles.", { flags: ["ticket"] }),
    place("hcm-ao-dai", "Ao Dai Museum / displays", 10.8125, 106.6855, "museum", "Museum", "Tan Binh", 6, "Traditional dress collections — check current open days.", { flags: ["ticket"] }),
    place("hcm-fito", "FITO Museum of Traditional Medicine", 10.7585, 106.6685, "museum", "Museum", "District 10", 7, "Pharmacy history in a lacquered wooden building.", { flags: ["ticket"] }),
    place("hcm-zoo", "Saigon Zoo and Botanical Gardens", 10.7875, 106.7055, "nature", "Park", "District 1", 7, "Historic zoo and gardens near the history museum gate.", { flags: ["ticket"] }),
    place("hcm-gia-dinh", "Gia Dinh Park", 10.8025, 106.6855, "nature", "Park", "Binh Thanh", 5, "Large local park north of the centre."),

    // ——— Food ———
    place("hcm-pho-hoa", "Pho Hoa Pasteur", 10.7755, 106.6905, "food", "Restaurant", "District 3", 8, "Classic pho bowls on Pasteur — go early or late.", { cuisine: "pho" }),
    place("hcm-pho-bac", "Pho Bac / neighbourhood pho counters", 10.7785, 106.6985, "food", "Restaurant", "District 1", 7, "Simple stools and fragrant broth near the centre.", { cuisine: "pho" }),
    place("hcm-banh-mi-huynh", "Banh Mi Huynh Hoa", 10.7715, 106.6855, "food", "Restaurant", "District 1", 9, "Overloaded house-special sandwiches — cash and queues.", { cuisine: "banh mi", flags: ["touristy"] }),
    place("hcm-banh-xeo", "Banh xeo stalls District 3", 10.7805, 106.6855, "food", "Restaurant", "District 3", 8, "Crispy turmeric pancakes with herbs and fish sauce.", { cuisine: "banh xeo" }),
    place("hcm-com-tam", "Com tam broken-rice plates", 10.7685, 106.6955, "food", "Restaurant", "District 1", 8, "Pork-chop rice plates — Saigon everyday lunch.", { cuisine: "com tam" }),
    place("hcm-bun-bo", "Bun bo Hue / central-VN noodles", 10.7745, 106.6885, "food", "Restaurant", "District 3", 7, "Spicy lemongrass noodle bowls as a pho alternative.", { cuisine: "bun bo hue" }),
    place("hcm-oc", "Oc snail alleys District 1/3", 10.7825, 106.6915, "food", "Restaurant", "District 3", 8, "Nighttime seafood snails and shellfish tables.", { cuisine: "seafood" }),
    place("hcm-secret", "Secret Garden / rooftop Vietnamese", 10.7765, 106.698, "food", "Restaurant", "District 1", 7, "Herb-garden rooftop Vietnamese near the backpacker zone.", { cuisine: "vietnamese" }),
    place("hcm-pizza-4ps", "Pizza 4P's cheese pull", 10.7735, 106.7045, "food", "Restaurant", "District 1", 6, "Japanese-Italian pizza with long waits — book or queue.", { cuisine: "pizza" }),
    place("hcm-ngon", "Quan An Ngon food hall style", 10.7785, 106.6975, "food", "Restaurant", "District 1", 7, "Regional Vietnamese stalls under one roof.", { cuisine: "vietnamese", flags: ["touristy"] }),
    place("hcm-che", "Che dessert carts", 10.7725, 106.6965, "food", "Restaurant", "District 1", 6, "Sweet bean and jelly cups after dinner.", { cuisine: "dessert" }),
    place("hcm-breakfast", "District 1 morning sticky rice & coffee", 10.774, 106.6995, "food", "Restaurant", "District 1", 7, "Xoi and ca phe sua da before museums open.", { cuisine: "breakfast" }),

    // ——— Nightlife & Bui Vien ———
    place("hcm-bui-vien", "Bui Vien Walking Street", 10.7675, 106.6925, "nightlife", "Bar", "Pham Ngu Lao", 8, "Backpacker neon strip — loud, cheap, late.", { flags: ["touristy"] }),
    place("hcm-pham-ngu-lao", "Pham Ngu Lao hostel lanes", 10.7685, 106.6935, "nightlife", "Bar", "Pham Ngu Lao", 7, "Travel agencies, bia hoi, and dorm energy."),
    place("hcm-acoustic", "Acoustic bar / live music D1", 10.7855, 106.6925, "nightlife", "Bar", "District 3", 7, "Local bands in intimate rooms — check set times."),
    place("hcm-chill-skybar", "Chill Skybar", 10.7718, 106.704, "nightlife", "Bar", "District 1", 8, "Rooftop cocktails with Bitexco-level views — dress code."),
    place("hcm-broma", "Broma / lay-low rooftops", 10.7745, 106.7035, "nightlife", "Bar", "District 1", 7, "Mid-height rooftops overlooking Nguyen Hue."),
    place("hcm-air360", "Air360 Sky Lounge", 10.7715, 106.7042, "nightlife", "Bar", "District 1", 7, "Open-air tower lounge near Ben Thanh."),
    place("hcm-bia-hoi", "Bia hoi plastic-stool corners", 10.7695, 106.6915, "nightlife", "Bar", "Pham Ngu Lao", 7, "Fresh draught beer on stools — classic Saigon cheap night."),

    // ——— Day trips / day pockets continued ———
    place("hcm-ao-dai-show", "Ao dai cultural show venues", 10.776, 106.7025, "nightlife", "Attraction", "District 1", 5, "Occasional dinner shows near the opera — check listings."),
    place("hcm-dam-sen", "Dam Sen Park", 10.7655, 106.6355, "sight", "Attraction", "District 11", 6, "Amusement park and water park for family downtime.", { flags: ["ticket"] }),
    place("hcm-suoi-tien", "Suoi Tien Theme Park", 10.8665, 106.8055, "sight", "Attraction", "Thu Duc", 5, "Myth-themed park on the eastern outskirts.", { flags: ["ticket"] }),
    place("hcm-cu-lao", "Thanh Da peninsula riverside", 10.8255, 106.7155, "nature", "Park", "Binh Thanh", 5, "Quieter river cafes north of the centre."),

    // ——— Stays ———
    place("hcm-stay-d1", "District 1 boutique hotels", 10.7755, 106.7015, "stay", "Hotel", "District 1", 9, "Walkable base for cathedral, palace, and Nguyen Hue."),
    place("hcm-stay-pnl", "Pham Ngu Lao hostels", 10.768, 106.693, "stay", "Hotel", "Pham Ngu Lao", 8, "Budget beds and tour desks for Cu Chi / Mekong."),
    place("hcm-stay-dong-khoi", "Dong Khoi luxury hotels", 10.7758, 106.7048, "stay", "Hotel", "District 1", 8, "Colonial-grandeur sleeps on the river axis."),
    place("hcm-stay-d3", "District 3 quiet guesthouses", 10.7825, 106.6885, "stay", "Hotel", "District 3", 7, "Cafe neighbourhood away from Bui Vien noise."),
    place("hcm-stay-d7", "Phu My Hung serviced stays", 10.73, 106.7195, "stay", "Hotel", "Phu My Hung", 6, "Expat comfort and mall dining in District 7."),
    place("hcm-stay-binh-thanh", "Binh Thanh / Landmark area hotels", 10.7935, 106.7205, "stay", "Hotel", "Binh Thanh", 6, "Modern tower stays near Central Park."),
  ],
};
