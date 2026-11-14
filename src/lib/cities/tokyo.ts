import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const tokyo: CityCatalog = {
  id: "tokyo",
  name: "Tokyo, Japan",
  aliases: ["tokyo"],
  center: { lat: 35.6762, lon: 139.6503 },
  places: [
    // ——— Shibuya / Harajuku ———
    place("tky-shibuya", "Shibuya Crossing", 35.6595, 139.7004, "sight", "Attraction", "Shibuya", 10, "Iconic scramble — view from Starbucks or Mag's Park for photos."),
    place("tky-hachiko", "Hachiko Statue", 35.659, 139.7006, "sight", "Monument", "Shibuya", 7, "Meeting point outside Shibuya Station."),
    place("tky-shibuya-sky", "Shibuya Sky", 35.6586, 139.7017, "sight", "Viewpoint", "Shibuya", 9, "Open-air rooftop panorama — book sunset slots."),
    place("tky-meiji", "Meiji Shrine", 35.6764, 139.6993, "sight", "Monument", "Harajuku", 9, "Forest shrine walk between Yoyogi Park and Harajuku."),
    place("tky-yoyogi", "Yoyogi Park", 35.6717, 139.6949, "nature", "Park", "Harajuku", 8, "Weekend street performances and picnic lawns beside Meiji."),
    place("tky-takeshita", "Takeshita Street", 35.6711, 139.7028, "shopping", "Market", "Harajuku", 7, "Youth fashion and crepes — go mornings for thinner crowds."),
    place("tky-omotesando", "Omotesando Hills stroll", 35.6657, 139.7121, "shopping", "Market", "Omotesando", 7, "Designer avenue between Harajuku and Aoyama."),
    place("tky-nezu", "Nezu Museum gardens", 35.6622, 139.7153, "museum", "Museum", "Aoyama", 7, "Japanese garden and art collection off Omotesando."),
    place("tky-design", "21_21 Design Sight", 35.6628, 139.7235, "museum", "Museum", "Roppongi", 6, "Tadao Ando gallery in Tokyo Midtown — pair with a Roppongi walk."),

    // ——— Shinjuku ———
    place("tky-shinjuku-gyoen", "Shinjuku Gyoen", 35.6852, 139.71, "nature", "Garden", "Shinjuku", 9, "Three-style garden oasis — cherry season needs timed tickets."),
    place("tky-gov", "Tokyo Metropolitan Government Building", 35.6896, 139.6917, "sight", "Viewpoint", "Shinjuku", 8, "Free north and south tower observatories — west Shinjuku skyline."),
    place("tky-omoide", "Omoide Yokocho", 35.6938, 139.6999, "sight", "Attraction", "Shinjuku", 7, "Alley yakitori smoke beside Shinjuku Station."),
    place("tky-golden", "Golden Gai", 35.6939, 139.7046, "nightlife", "Bar", "Shinjuku", 8, "Tiny bars — some are regulars-only; wander with cash."),
    place("tky-kabukicho", "Kabukicho gate area", 35.6942, 139.7031, "sight", "Attraction", "Shinjuku", 6, "Neon entertainment district — stay aware of touts."),
    place("tky-shinjuku-station", "Shinjuku Station hub", 35.6896, 139.7006, "sight", "Attraction", "Shinjuku", 6, "World's busiest station — pick an exit before you surface."),
    place("tky-samurai", "Samurai Museum", 35.6958, 139.7025, "museum", "Museum", "Shinjuku", 6, "Armor and sword demos in Kabukicho fringe."),
    place("tky-hanazono", "Hanazono Shrine", 35.6935, 139.7055, "sight", "Monument", "Shinjuku", 6, "Urban shrine tucked behind the neon."),

    // ——— Asakusa / Sumida ———
    place("tky-sensoji", "Senso-ji Temple", 35.7148, 139.7967, "sight", "Monument", "Asakusa", 10, "Thunder Gate and Nakamise — arrive early for calm."),
    place("tky-nakamise", "Nakamise Shopping Street", 35.7119, 139.7965, "shopping", "Market", "Asakusa", 7, "Snacks and souvenirs leading to Senso-ji."),
    place("tky-asakusa-culture", "Asakusa Culture Tourist Information Center", 35.7116, 139.7944, "sight", "Viewpoint", "Asakusa", 6, "Free eighth-floor lookout over the temple roof."),
    place("tky-sumida", "Tokyo Skytree", 35.7101, 139.8107, "sight", "Viewpoint", "Sumida", 9, "Tallest tower views — Tembo Deck or higher Galleria."),
    place("tky-sumida-park", "Sumida Park", 35.7128, 139.8052, "nature", "Park", "Asakusa", 7, "Riverside walk with Skytree framing shots."),
    place("tky-kappabashi", "Kappabashi Tool Street", 35.7105, 139.7855, "shopping", "Market", "Asakusa", 6, "Restaurant-supply street west of Senso-ji."),
    place("tky-ukiyoe", "Sumida Hokusai Museum", 35.7183, 139.8012, "museum", "Museum", "Sumida", 7, "Woodblock prints in a striking Ando building."),
    place("tky-edo-tokyo", "Edo-Tokyo Museum", 35.6964, 139.7966, "museum", "Museum", "Ryogoku", 8, "Scale Edo city models and life in old Tokyo."),
    place("tky-ryogoku", "Ryogoku Kokugikan", 35.697, 139.7936, "sight", "Attraction", "Ryogoku", 7, "Sumo arena — museum and tournament days if dates align."),

    // ——— Ueno / Yanaka ———
    place("tky-ueno-park", "Ueno Park", 35.7146, 139.773, "nature", "Park", "Ueno", 9, "Museums, zoo, and cherry trees in one green bowl."),
    place("tky-nat-museum", "Tokyo National Museum", 35.7188, 139.7765, "museum", "Museum", "Ueno", 9, "Japan's flagship collection — allow half a day."),
    place("tky-nat-western", "National Museum of Western Art", 35.7153, 139.7758, "museum", "Museum", "Ueno", 7, "Le Corbusier building with Rodin casts outside."),
    place("tky-ueno-zoo", "Ueno Zoo", 35.7165, 139.7708, "sight", "Attraction", "Ueno", 7, "Giant pandas and a family-friendly park loop."),
    place("tky-ameya", "Ameya-Yokocho Market", 35.7112, 139.7745, "shopping", "Market", "Ueno", 7, "Lively discount market street under the tracks."),
    place("tky-yanaka", "Yanaka Ginza stroll", 35.7245, 139.7655, "sight", "Attraction", "Yanaka", 7, "Old-town shopping street with cemetery calm nearby."),
    place("tky-yanaka-cemetery", "Yanaka Cemetery", 35.7228, 139.7702, "nature", "Park", "Yanaka", 6, "Quiet paths and temple gates in shitamachi."),

    // ——— Ginza / Tsukiji / Nihonbashi ———
    place("tky-ginza", "Ginza main crossing", 35.6717, 139.764, "shopping", "Market", "Ginza", 7, "Department stores and flagship boutiques on weekends."),
    place("tky-gsix", "Ginza Six", 35.6697, 139.7642, "shopping", "Market", "Ginza", 7, "Modern mall with rooftop garden and art rotations."),
    place("tky-kabuki-za", "Kabuki-za Theatre", 35.6693, 139.7678, "sight", "Attraction", "Ginza", 8, "Single-act tickets or full performances of classic kabuki."),
    place("tky-tsukiji-outer", "Tsukiji Outer Market", 35.6654, 139.7706, "shopping", "Market", "Tsukiji", 8, "Morning seafood bowls and kitchen-gadget stalls."),
    place("tky-hama-rikyu", "Hama-rikyu Gardens", 35.6596, 139.7634, "nature", "Garden", "Shiodome", 8, "Edo tidal garden against Shiodome towers."),
    place("tky-imperial-east", "Imperial Palace East Gardens", 35.6851, 139.7528, "nature", "Garden", "Chiyoda", 8, "Free castle-grounds walk — closed Mon and Fri."),
    place("tky-marunouchi", "Marunouchi brick district", 35.6812, 139.7641, "sight", "Attraction", "Marunouchi", 6, "Red-brick station plaza and business-district stroll."),

    // ——— Akihabara / Kanda ———
    place("tky-akihabara", "Akihabara Electric Town", 35.6984, 139.7731, "shopping", "Market", "Akihabara", 8, "Anime, games, and retro electronics — go side streets."),
    place("tky-kanda", "Kanda Myojin Shrine", 35.7019, 139.7679, "sight", "Monument", "Kanda", 7, "Vibrant shrine tied to tech-worker luck charms."),

    // ——— Roppongi / Azabu ———
    place("tky-mori", "Mori Art Museum", 35.6605, 139.7292, "museum", "Museum", "Roppongi", 8, "Contemporary art with City View deck in Roppongi Hills."),
    place("tky-roppongi-hills", "Roppongi Hills complex", 35.6604, 139.729, "sight", "Attraction", "Roppongi", 7, "Shops, TV Asahi, and observation options in one hill."),
    place("tky-national-art", "National Art Center Tokyo", 35.6652, 139.7264, "museum", "Museum", "Roppongi", 8, "Rotating major exhibits in a flowing Kisho Kurokawa building."),
    place("tky-midtown", "Tokyo Midtown", 35.6655, 139.731, "shopping", "Market", "Roppongi", 7, "Galleries, design shops, and winter illuminations."),
    place("tky-azabu", "Azabu-Juban shopping street", 35.6558, 139.7362, "sight", "Attraction", "Azabu", 6, "Local shops and summer festival streets near Roppongi."),
    place("tky-zojo", "Zojo-ji Temple", 35.6586, 139.7484, "sight", "Monument", "Shiba", 7, "Temple framing Tokyo Tower — morning is calmest."),

    // ——— Tokyo Tower / Shinagawa fringe ———
    place("tky-tower", "Tokyo Tower", 35.6586, 139.7454, "sight", "Viewpoint", "Shiba", 9, "Classic red lattice views — Main Deck or Top Deck."),
    place("tky-odaiba", "Odaiba Seaside Park", 35.6275, 139.7746, "nature", "Park", "Odaiba", 7, "Rainbow Bridge views and bay-side walks."),
    place("tky-teamLab", "teamLab Borderless", 35.6265, 139.7837, "museum", "Museum", "Ariake", 9, "Immersive digital art — book timed slots far ahead."),
    place("tky-diver", "DiverCity Tokyo Plaza", 35.6252, 139.7756, "shopping", "Market", "Odaiba", 6, "Life-size Gundam and mall entertainment."),
    place("tky-miraikan", "Miraikan", 35.6192, 139.7765, "museum", "Museum", "Odaiba", 7, "National science museum with ASIMO history."),

    // ——— Ikebukuro / north ———
    place("tky-sunshine", "Sunshine City", 35.7288, 139.7193, "shopping", "Market", "Ikebukuro", 7, "Aquarium, planetarium, and observatory in one tower."),
    place("tky-koishikawa", "Koishikawa Korakuen", 35.7057, 139.7495, "nature", "Garden", "Bunkyo", 8, "Edo strolling garden beside Tokyo Dome."),

    // ——— More museums & sights ———
    place("tky-ghibli", "Ghibli Museum", 35.6962, 139.5704, "museum", "Museum", "Mitaka", 10, "Miyazaki's whimsical museum — tickets sell out on schedule."),
    place("tky-teamlab-planets", "teamLab Planets", 35.6492, 139.7895, "museum", "Museum", "Toyosu", 8, "Barefoot water and light rooms — wet floors, book ahead."),
    place("tky-edo", "Edo-Tokyo Open Air Architectural Museum", 35.7055, 139.5775, "museum", "Museum", "Koganei", 7, "Relocated historic buildings — best as a half-day west trip."),
    place("tky-sengakuji", "Sengaku-ji Temple", 35.6378, 139.7364, "sight", "Monument", "Shinagawa", 6, "47 Ronin graves — quiet history stop."),
    place("tky-meguro", "Meguro River cherry walk", 35.6412, 139.6985, "nature", "Park", "Meguro", 7, "Famous sakura tunnel in season; pleasant lane any month."),
    place("tky-shimokitazawa", "Shimokitazawa vintage streets", 35.6618, 139.6682, "shopping", "Market", "Shimokitazawa", 7, "Thrift, live houses, and café density southwest of Shibuya."),

    // ——— Cafes ———
    place("tky-blue-bottle", "Blue Bottle Aoyama", 35.6658, 139.7125, "cafe", "Cafe", "Omotesando", 7, "Third-wave coffee on the backstreets off Omotesando.", { cuisine: "coffee" }),
    place("tky-fuglen", "Fuglen Tokyo", 35.6685, 139.7045, "cafe", "Cafe", "Tomigaya", 7, "Scandi-import coffee shop that turns cocktail bar at night.", { cuisine: "coffee" }),
    place("tky-streamer", "Streamer Coffee Shibuya", 35.6612, 139.7015, "cafe", "Cafe", "Shibuya", 6, "Reliable specialty espresso near the crossing.", { cuisine: "coffee" }),
    place("tky-bearpond", "Bear Pond Espresso", 35.6492, 139.7045, "cafe", "Cafe", "Shimokitazawa", 7, "Tiny cult espresso window — respect the no-photo vibe.", { cuisine: "coffee" }),
    place("tky-gram", "Gram Cafe pancakes", 35.6625, 139.6998, "cafe", "Cafe", "Harajuku", 6, "Soufflé pancakes — go early before they sell out.", { cuisine: "coffee pastry" }),
    place("tky-sarutahiko", "Sarutahiko Coffee Ebisu", 35.6468, 139.7102, "cafe", "Cafe", "Ebisu", 6, "Clean espresso bar near Ebisu Garden Place.", { cuisine: "coffee" }),
    place("tky-onyx", "Onibus Coffee Nakameguro", 35.6435, 139.6988, "cafe", "Cafe", "Nakameguro", 7, "Roastery cafe on the canal with solid pour-overs.", { cuisine: "coffee" }),
    place("tky-switch", "Switch Coffee Tokyo", 35.6635, 139.7008, "cafe", "Cafe", "Shibuya", 6, "Minimal third-wave pour-overs a few blocks from the scramble.", { cuisine: "coffee" }),

    // ——— Food ———
    place("tky-sushi-dai", "Sushi Dai (Toyosu)", 35.6442, 139.7855, "food", "Restaurant", "Toyosu", 9, "Legendary morning sushi queue — arrive before market buzz.", { cuisine: "japanese sushi" }),
    place("tky-narisawa", "Narisawa area fine dining", 35.6675, 139.7242, "food", "Restaurant", "Minato", 8, "Innovative Japanese tasting — reserve weeks ahead.", { cuisine: "japanese" }),
    place("tky-ippudo", "Ippudo Ramen", 35.6615, 139.7035, "food", "Quick meal", "Shibuya", 7, "Reliable tonkotsu chain when you need a fast hot bowl.", { cuisine: "japanese ramen" }),
    place("tky-afuri", "Afuri Ramen Harajuku", 35.6695, 139.7055, "food", "Quick meal", "Harajuku", 7, "Yuzu-shio ramen lighter than heavy pork broth.", { cuisine: "japanese ramen" }),
    place("tky-gonpachi", "Gonpachi Nishi-Azabu", 35.6588, 139.7225, "food", "Restaurant", "Roppongi", 7, "Lively izakaya interior said to inspire film sets.", { cuisine: "japanese izakaya" }),
    place("tky-tonkatsu", "Maisen Tonkatsu Omotesando", 35.6652, 139.7128, "food", "Restaurant", "Omotesando", 7, "Thick pork cutlets in a renovated bathhouse building.", { cuisine: "japanese" }),
    place("tky-uzura", "Tonki Meguro tonkatsu", 35.6335, 139.7155, "food", "Restaurant", "Meguro", 7, "Old-school counter tonkatsu — line moves steadily.", { cuisine: "japanese" }),
    place("tky-nakameguro", "Nakameguro yakitori alley", 35.6438, 139.6982, "food", "Restaurant", "Nakameguro", 6, "Evening grills along the canal.", { cuisine: "japanese izakaya" }),
    place("tky-monja", "Tsukishima monja street", 35.6642, 139.7848, "food", "Restaurant", "Tsukishima", 7, "Cook-your-own monjayaki on dedicated restaurant row.", { cuisine: "japanese" }),
    place("tky-depachika", "Ginza depachika basement", 35.6715, 139.7635, "food", "Quick meal", "Ginza", 7, "Department-store food halls for polished bento samples.", { cuisine: "japanese market" }),
    place("tky-kyubey", "Kyubey Ginza sushi", 35.6712, 139.7625, "food", "Restaurant", "Ginza", 8, "Classic Ginza sushi counter experience.", { cuisine: "japanese sushi" }),
    place("tky-omen", "Omen Zen temple udon", 35.7245, 139.7675, "food", "Restaurant", "Yanaka", 6, "Udon by Gokoku-ji — calm lunch after cemetery walks.", { cuisine: "japanese udon" }),
    place("tky-tsukemen", "Fuunji tsukemen Shinjuku", 35.6908, 139.6995, "food", "Quick meal", "Shinjuku", 7, "Dipping ramen with rich fish broth.", { cuisine: "japanese ramen" }),
    place("tky-yakitori", "Torishiki yakitori", 35.6338, 139.7165, "food", "Restaurant", "Meguro", 8, "Michelin-leaning skewers — reserve for dinner.", { cuisine: "japanese izakaya" }),
    place("tky-vegan", "T's Tantan Tokyo Station", 35.6812, 139.7671, "food", "Quick meal", "Marunouchi", 6, "Vegan ramen inside the station bowls hall.", { cuisine: "vegan japanese" }),
    place("tky-stand", "Standing soba near Tokyo Station", 35.6815, 139.7665, "food", "Quick meal", "Marunouchi", 5, "Quick noodles before a shinkansen.", { cuisine: "japanese soba" }),

    // ——— Nightlife ———
    place("tky-nonbei", "Nonbei Yokocho", 35.6588, 139.7012, "nightlife", "Bar", "Shibuya", 7, "Lantern-lit alley bars up the hill from the crossing."),
    place("tky-roppongi-night", "Roppongi club strip", 35.6625, 139.7315, "nightlife", "Bar", "Roppongi", 6, "Late clubs and lounges — watch cover charges."),
    place("tky-shibuya-night", "Center Gai nightlife", 35.6598, 139.6988, "nightlife", "Bar", "Shibuya", 7, "Dense casual bars for a first Tokyo night out."),
    place("tky-ebisu-yokocho", "Ebisu Yokocho", 35.6465, 139.7105, "nightlife", "Bar", "Ebisu", 7, "Indoor alley of small food-and-drink stalls."),
    place("tky-nihonshu", "Hasegawa Saketen standing bar", 35.6695, 139.7648, "nightlife", "Bar", "Ginza", 6, "Sake tastings in a compact depachika bar."),
    place("tky-jazz", "Blue Note Tokyo", 35.6612, 139.7285, "nightlife", "Bar", "Minami-Aoyama", 7, "International jazz acts in Aoyama."),
    place("tky-hi", "New York Bar (Park Hyatt)", 35.6852, 139.6915, "nightlife", "Bar", "Shinjuku", 8, "Lost in Translation views — dress smart, expect a cover."),
    place("tky-kaikan", "Shinjuku Nichome area", 35.6905, 139.7065, "nightlife", "Bar", "Shinjuku", 6, "LGBTQ+ bar quarter — welcoming late-night pocket."),

    // ——— Stays ———
    place("tky-stay-park-hyatt", "Park Hyatt Shinjuku area", 35.6855, 139.6912, "stay", "Hotel", "Shinjuku", 9, "West Shinjuku tower rooms with skyline baths."),
    place("tky-stay-aman", "Aman Tokyo area", 35.6868, 139.7635, "stay", "Hotel", "Otemachi", 9, "Minimal luxury above Tokyo Station for easy transit."),
    place("tky-stay-peninsula", "The Peninsula Tokyo area", 35.6745, 139.7605, "stay", "Hotel", "Ginza", 9, "Ginza-adjacent grande dame facing the palace."),
    place("tky-stay-trunk", "Trunk Hotel Shibuya", 35.6625, 139.6985, "stay", "Hotel", "Shibuya", 8, "Design hotel walking distance to Meiji and Harajuku."),
    place("tky-stay-mimaru", "MIMARU Tokyo Station", 35.6818, 139.7682, "stay", "Hotel", "Marunouchi", 8, "Family-friendly apartments near bullet-train departures."),
    place("tky-stay-daiwa", "Daiwa Roynet Ginza area", 35.6705, 139.7645, "stay", "Hotel", "Ginza", 7, "Reliable mid-range base for kabuki and depachika lunches."),
    place("tky-stay-gracery", "Hotel Gracery Shinjuku", 35.6938, 139.7035, "stay", "Hotel", "Shinjuku", 7, "Godzilla-head building by Kabukicho."),
    place("tky-stay-asakusa", "The Gate Hotel Asakusa", 35.7125, 139.7968, "stay", "Hotel", "Asakusa", 8, "Rooftop bar views over Senso-ji."),
    place("tky-stay-mitsui", "Mitsui Garden Ginza Premier", 35.6698, 139.7638, "stay", "Hotel", "Ginza", 7, "Compact chic rooms on the main shopping grid."),
    place("tky-stay-hundred", "Hundred Stay Shinjuku", 35.6915, 139.6895, "stay", "Hotel", "Shinjuku", 7, "Serviced units good for longer Tokyo stays."),
    place("tky-stay-khaosan", "Khaosan World Asakusa", 35.7135, 139.7925, "stay", "Hostel", "Asakusa", 6, "Social hostel walking distance to the temple."),
    place("tky-stay-nui", "Nui Hostel & Bar", 35.7045, 139.7945, "stay", "Hostel", "Kuramae", 7, "Stylish hostel bar east of Asakusa."),
    place("tky-stay-sakura", "Sakura Hotel Ikebukuro", 35.7282, 139.7125, "stay", "Hostel", "Ikebukuro", 6, "Budget beds with a famous in-house restaurant."),
    place("tky-stay-guest-yanaka", "Yanaka Guest House", 35.7235, 139.7648, "stay", "Guest house", "Yanaka", 6, "Shitamachi guesthouse near the cemetery lanes."),
    place("tky-stay-apt-shibuya", "Shibuya apartment stay", 35.6605, 139.6975, "stay", "Apartment", "Shibuya", 7, "Self-catering near the crossing for multi-day trips."),
    place("tky-stay-apt-ueno", "Ueno apartment stay", 35.7125, 139.7748, "stay", "Apartment", "Ueno", 6, "Museum-loop base with kitchen for market breakfasts."),
    place("tky-stay-apt-roppongi", "Roppongi apartment stay", 35.6615, 139.7305, "stay", "Apartment", "Roppongi", 6, "Art-museum nights without last-train stress."),
  ],
};