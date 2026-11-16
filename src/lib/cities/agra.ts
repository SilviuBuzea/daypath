import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const agra: CityCatalog = {
  id: "agra",
  name: "Agra, India",
  aliases: ["agra"],
  center: { lat: 27.1767, lon: 78.0081 },
  places: [
    // ——— Taj Mahal & Taj Ganj ———
    place("ag-taj", "Taj Mahal", 27.1751, 78.0421, "sight", "Monument", "Taj Ganj", 10, "White-marble mausoleum at sunrise — book tickets online and go east gate.", { tip: "Closed Fridays. Sunrise slots sell out; carry passport for online tickets.", flags: ["ticket", "early", "touristy"] }),
    place("ag-taj-mosque", "Taj Mahal mosque flank", 27.1748, 78.0415, "sight", "Monument", "Taj Ganj", 8, "Red sandstone mosque inside the complex — quieter photo angles."),
    place("ag-taj-jawab", "Taj Jawab & mihman khana", 27.1755, 78.0428, "sight", "Monument", "Taj Ganj", 7, "Symmetrical guest house mirroring the mosque inside the gardens."),
    place("ag-mehtab", "Mehtab Bagh", 27.1795, 78.0428, "nature", "Garden", "Trans-Yamuna", 10, "Sunset Taj reflection gardens across the Yamuna — classic mirror shot.", { tip: "Enter before late afternoon; tickets separate from Taj.", flags: ["ticket", "touristy"] }),
    place("ag-yamuna-ghat", "Yamuna riverbank walk (Taj side)", 27.1765, 78.0395, "nature", "Park", "Taj Ganj", 6, "Informal river edge views of the Taj dome from outside the walls."),
    place("ag-east-gate", "Taj East Gate approach", 27.1742, 78.0445, "sight", "Attraction", "Taj Ganj", 7, "Least crowded ticket gate — good for early entry logistics."),
    place("ag-shilpgram", "Shilpgram craft village", 27.1695, 78.0485, "shopping", "Market", "Taj East", 7, "Craft stalls and cultural shows near the Taj east approach."),
    place("ag-taj-museum", "Taj Museum", 27.1735, 78.0418, "museum", "Museum", "Taj Ganj", 7, "Miniatures, calligraphy, and building history inside the complex.", { flags: ["ticket"] }),
    place("ag-itc-mughal-garden", "ITC Mughal garden viewpoint fringe", 27.1645, 78.0385, "sight", "Viewpoint", "Taj Ganj", 5, "Hotel gardens with distant Taj glimpses — guest or restaurant access."),

    // ——— Agra Fort & Rakabganj ———
    place("ag-fort", "Agra Fort", 27.1795, 78.0211, "sight", "Monument", "Rakabganj", 10, "Red sandstone Mughal citadel with Diwan-i-Khas and Taj peep windows.", { tip: "Allow 2–3 hours; combine with Jama Masjid nearby.", flags: ["ticket", "touristy"] }),
    place("ag-diwan-am", "Diwan-i-Am public audience hall", 27.1798, 78.0215, "sight", "Monument", "Rakabganj", 8, "Pillared hall where emperors heard petitions."),
    place("ag-musamman", "Musamman Burj", 27.1802, 78.0218, "sight", "Monument", "Rakabganj", 9, "Octagonal marble tower with the classic Taj view from the fort."),
    place("ag-jahangir-palace", "Jahangiri Mahal", 27.1792, 78.0205, "sight", "Monument", "Rakabganj", 8, "Hindu-influenced palace wing inside the fort."),
    place("ag-sheesh", "Sheesh Mahal (fort)", 27.1805, 78.0212, "sight", "Monument", "Rakabganj", 7, "Mirror-work baths and private chambers — restricted angles."),
    place("ag-amar-singh", "Amar Singh Gate", 27.1785, 78.0218, "sight", "Monument", "Rakabganj", 6, "Main visitor entrance with bent-axis defence design."),
    place("ag-jama", "Jama Masjid Agra", 27.1825, 78.0175, "sight", "Monument", "Rakabganj", 8, "Shah Jahan mosque facing the fort — dress modestly and remove shoes."),
    place("ag-moti", "Moti Masjid exterior (fort)", 27.1808, 78.0202, "sight", "Monument", "Rakabganj", 7, "Pearl Mosque white marble courtyard — often viewed from pathways."),

    // ——— Itmad-ud-Daulah & East bank ———
    place("ag-baby-taj", "Itmad-ud-Daulah (Baby Taj)", 27.1929, 78.0309, "sight", "Monument", "Itimad-ud-Daulah", 9, "Pietra dura tomb that inspired the Taj — quieter morning visit.", { flags: ["ticket"] }),
    place("ag-chini", "Chini ka Rauza", 27.2005, 78.0335, "sight", "Monument", "Itimad-ud-Daulah", 7, "Persian-glazed tile mausoleum along the Yamuna east bank."),
    place("ag-ram-bagh", "Ram Bagh gardens", 27.2055, 78.0385, "nature", "Garden", "Itimad-ud-Daulah", 7, "Oldest Mughal garden in India — riverside charbagh calm.", { flags: ["ticket"] }),
    place("ag-arambagh", "Aram Bagh riverside picnic fringe", 27.2045, 78.0375, "nature", "Park", "Itimad-ud-Daulah", 5, "Shaded spots near Ram Bagh for a packed lunch."),
    place("ag-ghat-east", "East-bank Yamuna ghats", 27.1955, 78.0325, "nature", "Park", "Itimad-ud-Daulah", 6, "Local bathing and boat spots facing the fort silhouette."),

    // ——— Sikandra ———
    place("ag-sikandra", "Akbar's Tomb Sikandra", 27.2205, 77.9505, "sight", "Monument", "Sikandra", 9, "Pyramid-tiered tomb in a deer-filled charbagh — half morning.", { flags: ["ticket"] }),
    place("ag-sikandra-gate", "Sikandra Buland Darwaza gate", 27.2185, 77.9525, "sight", "Monument", "Sikandra", 7, "Monumental gateway into Akbar's funerary garden."),
    place("ag-mariam", "Mariam's Tomb", 27.2165, 77.9485, "sight", "Monument", "Sikandra", 7, "Red sandstone tomb of Akbar's wife near the main complex.", { flags: ["ticket"] }),
    place("ag-sikandra-deer", "Sikandra deer park paths", 27.2215, 77.9495, "nature", "Park", "Sikandra", 6, "Spotted deer roaming the tomb gardens at dawn."),

    // ——— Fatehpur Sikri day-trip ———
    place("ag-fps-buland", "Buland Darwaza", 27.0945, 77.6625, "sight", "Monument", "Fatehpur Sikri", 10, "Victory gate of Akbar's capital — day trip ~40 km west.", { tip: "Hire a driver for half-day; combine with Jama Masjid and palace courts.", flags: ["ticket", "touristy"] }),
    place("ag-fps-jama", "Jama Masjid Fatehpur Sikri", 27.0948, 77.6635, "sight", "Monument", "Fatehpur Sikri", 9, "Vast courtyard mosque beside Buland Darwaza."),
    place("ag-fps-salim", "Salim Chishti Dargah", 27.0949, 77.6638, "sight", "Monument", "Fatehpur Sikri", 9, "White marble Sufi shrine — tie a thread for wishes."),
    place("ag-fps-panch", "Panch Mahal", 27.0975, 77.6648, "sight", "Monument", "Fatehpur Sikri", 8, "Five-storey open pavilion in the palace complex."),
    place("ag-fps-diwan", "Diwan-i-Khas (central pillar)", 27.0978, 77.6652, "sight", "Monument", "Fatehpur Sikri", 9, "Hall of Private Audience with the famous lotus pillar."),
    place("ag-fps-anjuman", "Anup Talao & Turkish Sultana house", 27.0972, 77.6645, "sight", "Monument", "Fatehpur Sikri", 7, "Pool courtyard and carved chambers in the royal zone."),
    place("ag-fps-jodha", "Jodha Bai Palace", 27.0965, 77.6665, "sight", "Monument", "Fatehpur Sikri", 8, "Largest palace wing with Hindu architectural motifs."),
    place("ag-fps-hiran", "Hiran Minar", 27.1015, 77.6685, "sight", "Monument", "Fatehpur Sikri", 6, "Elephant-tusk tower and hunting memorial outside the walls."),
    place("ag-fps-baoli", "Fatehpur Sikri baoli stepwell", 27.0925, 77.6615, "sight", "Monument", "Fatehpur Sikri", 5, "Deep stepwell near the village approach."),
    place("ag-fps-village", "Fatehpur Sikri craft stalls", 27.0935, 77.6605, "shopping", "Market", "Fatehpur Sikri", 6, "Marble inlay and textile stalls on the approach road."),

    // ——— Dayalbagh, Northern fringe ———
    place("ag-dayalbagh", "Dayalbagh Garden colony", 27.2255, 78.0105, "nature", "Garden", "Dayalbagh", 6, "Planned spiritual colony with gardens north of the city."),
    place("ag-soami", "Soami Bagh samadh", 27.2285, 78.0125, "sight", "Monument", "Dayalbagh", 6, "Marble Radhasoami shrine — check visitor hours."),

    // ——— Sadar, Cantt & Civil Lines ———
    place("ag-sadar", "Sadar Bazaar shopping", 27.1575, 78.0085, "shopping", "Market", "Sadar Bazaar", 8, "Leather, marble, and souvenirs near the Cantonment."),
    place("ag-subway", "Subhash Bazaar lanes", 27.1855, 78.0155, "shopping", "Market", "Kinari Bazaar", 7, "Old-city textile and jewellery alleys near Jama Masjid."),
    place("ag-kinari", "Kinari Bazaar bridal lanes", 27.1865, 78.0165, "shopping", "Market", "Kinari Bazaar", 7, "Gotapatti lace and wedding shopping crush."),
    place("ag-jooni", "Jooni Mandi antiques pocket", 27.1845, 78.0145, "shopping", "Market", "Old Agra", 6, "Hardware-turned-antique shops on the old mandi strip."),
    place("ag-cantt", "Agra Cantonment station area", 27.1575, 77.9905, "sight", "Attraction", "Cantonment", 5, "Rail arrival hub — ATMs, prepaid autos, hotel pickups."),
    place("ag-civil", "Civil Lines cafe strip", 27.1755, 78.0085, "cafe", "Cafe", "Civil Lines", 6, "Quiet cafes and bakeries away from Taj Ganj touts."),
    place("ag-mg-road", "MG Road Agra stroll", 27.1685, 78.0055, "shopping", "Market", "MG Road", 6, "Banks, pharmacies, and mid-range shops for practical stops."),

    // ——— Taj Nature Walk & Southern parks ———
    place("ag-nature-walk", "Taj Nature Walk", 27.1655, 78.0455, "nature", "Park", "Taj East", 7, "Wooded path with filtered Taj views — cooler morning option.", { flags: ["ticket"] }),
    place("ag-keetham", "Keetham Lake (Sur Sarovar)", 27.2555, 77.8755, "nature", "Park", "Keetham", 7, "Bird sanctuary lake northwest — winter migratory flocks.", { flags: ["ticket"] }),
    place("ag-soor", "Soor Sarovar birding trails", 27.2585, 77.8725, "nature", "Park", "Keetham", 6, "Watchtowers and lakeside paths for binocular mornings."),
    place("ag-pehli", "Paliwal Park", 27.1885, 78.0055, "nature", "Park", "Civil Lines", 5, "City park with library and evening walkers."),

    // ——— Museums & lesser monuments ———
    place("ag-taj-heritage", "Taj Heritage Corridor viewpoint fringe", 27.1775, 78.0355, "sight", "Viewpoint", "Taj Ganj", 5, "River corridor vistas between fort and Taj."),
    place("ag-jagan", "Jagan Nath Temple Agra", 27.1815, 78.0085, "sight", "Monument", "Belanganj", 5, "Local Hindu temple stop away from the tourist core."),
    place("ag-guru", "Guru ka Taal", 27.2155, 77.9755, "sight", "Monument", "Sikandra fringe", 6, "Sikh tank and gurdwara complex near Sikandra."),
    place("ag-mankameshwar", "Mankameshwar Temple", 27.1835, 78.0185, "sight", "Monument", "Rakabganj", 6, "Busy Shiva temple near the fort approach."),
    place("ag-cathedral", "Cathedral of the Immaculate Conception", 27.1625, 78.0025, "sight", "Monument", "Wazirpura", 5, "Colonial cathedral in the Christian neighbourhood."),
    place("ag-roman", "Roman Catholic Cemetery", 27.1615, 78.0015, "sight", "Monument", "Padri Tola", 5, "Historic European tombs including Walter Reinhardt's."),
    place("ag-khas", "Khas Mahal gardens (fort)", 27.1801, 78.0216, "nature", "Garden", "Rakabganj", 7, "White marble private palace terraces overlooking the Yamuna."),
    place("ag-anguri", "Anguri Bagh", 27.1796, 78.0208, "nature", "Garden", "Rakabganj", 6, "Geometric grape garden inside Agra Fort."),
    place("ag-meena", "Meena Bazaar (fort)", 27.179, 78.0214, "shopping", "Market", "Rakabganj", 5, "Historic market court inside the fort walls."),

    // ——— Food & cafes ———
    place("ag-panchhi", "Panchhi Petha shop", 27.1685, 78.0125, "food", "Restaurant", "Sadar Bazaar", 8, "Agra's signature ash-gourd sweet — packed boxes for the train.", { cuisine: "sweets" }),
    place("ag-gmb", "GMB (Gopal Mishthan Bhandar)", 27.1695, 78.0115, "food", "Restaurant", "Sadar Bazaar", 7, "Petha and namkeen counter near Sadar.", { cuisine: "sweets" }),
    place("ag-dasaprakash", "Dasaprakash South Indian", 27.1585, 78.0095, "food", "Restaurant", "Sadar Bazaar", 7, "Dosa and thali reliable stop near Cantonment.", { cuisine: "south indian" }),
    place("ag-joney", "Joney's Place backpacker cafe", 27.1688, 78.0415, "cafe", "Cafe", "Taj Ganj", 7, "Long-running traveller cafe with banana pancakes near the Taj."),
    place("ag-esh", "Esphahan / hotel Mughlai dining", 27.1648, 78.0388, "food", "Restaurant", "Taj Ganj", 8, "Fine Mughlai thalis in heritage hotel dining rooms — book sunset.", { cuisine: "mughlai" }),
    place("ag-pinch", "Pinch of Spice", 27.1755, 78.0155, "food", "Restaurant", "Civil Lines", 7, "North Indian and Chinese crowd-pleaser for a sit-down dinner.", { cuisine: "north indian" }),
    place("ag-tourists", "Tourist Rest House / UPSTDC cafe", 27.1675, 78.0425, "cafe", "Cafe", "Taj Ganj", 5, "Simple government-run meals near the east gate."),
    place("ag-chai", "Taj Ganj rooftop chai spots", 27.1695, 78.0405, "cafe", "Cafe", "Taj Ganj", 7, "Budget rooftops claiming Taj views — verify the angle before ordering."),
    place("ag-beda", "Bedai & jalebi breakfast stall", 27.1855, 78.0125, "food", "Restaurant", "Old Agra", 8, "Spiced fried bread with potato curry — classic Agra breakfast.", { cuisine: "street food" }),
    place("ag-namashkar", "Namashkare / modern cafe pocket", 27.1725, 78.0085, "cafe", "Cafe", "Civil Lines", 6, "Espresso and sandwiches when you need a break from thalis."),
    place("ag-shankara", "Shankara Veg Restaurant", 27.1705, 78.0395, "food", "Restaurant", "Taj Ganj", 6, "Pure-veg thalis popular with tour groups.", { cuisine: "vegetarian" }),
    place("ag-only", "Only Restaurant garden", 27.1715, 78.0185, "food", "Restaurant", "MG Road", 6, "Garden seating multi-cuisine near the mall strip.", { cuisine: "multi-cuisine" }),

    // ——— Nightlife (limited) & evening ———
    place("ag-kalakriti", "Kalakriti cultural show", 27.1665, 78.0355, "nightlife", "Attraction", "Taj Ganj", 7, "Dance-drama on Shah Jahan's story — evening ticketed show.", { flags: ["ticket"] }),
    place("ag-mohabbat", "Mohabbat the Taj show", 27.1675, 78.0365, "nightlife", "Attraction", "Taj Ganj", 6, "Sound-and-light style theatrical take on the Taj legend.", { flags: ["ticket"] }),
    place("ag-mall", "TDI / local mall evening", 27.1735, 78.0055, "shopping", "Market", "MG Road", 5, "AC break, cinema, and chain dining after monument days."),
    place("ag-rooftop-bar", "Hotel rooftop sunset bars", 27.1705, 78.0418, "nightlife", "Bar", "Taj Ganj", 7, "Mocktails and soft drinks with dome views — alcohol rules vary by venue."),

    // ——— Stays ———
    place("ag-stay-tajganj", "Taj Ganj guesthouses", 27.1698, 78.0408, "stay", "Hotel", "Taj Ganj", 8, "Walk-to-sunrise base — compare rooftop Taj sightlines."),
    place("ag-stay-fatehabad", "Fatehabad Road hotels", 27.1625, 78.0455, "stay", "Hotel", "Fatehabad Road", 8, "Mid and upscale strip with pools and reliable taxis to monuments."),
    place("ag-stay-cantt", "Cantonment / Civil Lines hotels", 27.16, 78.005, "stay", "Hotel", "Cantonment", 7, "Quieter sleeps near the railway station for early trains."),
    place("ag-stay-heritage", "Heritage haveli stays", 27.1785, 78.0185, "stay", "Hotel", "Rakabganj", 7, "Character rooms near the fort with courtyard breakfasts."),
    place("ag-stay-fps", "Fatehpur Sikri overnight option", 27.094, 77.661, "stay", "Hotel", "Fatehpur Sikri", 5, "Rare but useful if you want dawn at Buland Darwaza without the drive."),

    // ——— Practical & viewpoints ———
    place("ag-west-gate", "Taj West Gate parking fringe", 27.1745, 78.0385, "sight", "Attraction", "Taj Ganj", 5, "Battery-bus transfer point — less used than east/south."),
    place("ag-south-gate", "Taj South Gate", 27.1725, 78.0425, "sight", "Attraction", "Taj Ganj", 6, "Alternate ticket gate closest to many Fatehabad hotels."),
    place("ag-agrawal", "Agra Art Gallery / marble workshops", 27.1655, 78.0425, "shopping", "Market", "Fatehabad Road", 7, "Pietra dura demos — agree prices before marble shopping."),
    place("ag-leather", "Agra leather factory outlets", 27.1555, 78.0155, "shopping", "Market", "Sadar Bazaar", 6, "Jackets and bags — quality varies; compare Sadar shops."),
    place("ag-sunset-fort", "Fort sunset ramparts", 27.1803, 78.022, "sight", "Viewpoint", "Rakabganj", 8, "Catch the Taj blushing pink from Musamman Burj at dusk."),
    place("ag-sunrise-mehtab", "Mehtab Bagh sunrise alternative", 27.1798, 78.0432, "nature", "Garden", "Trans-Yamuna", 8, "If Taj tickets are sold out, sunrise reflections still work here.", { flags: ["early"] }),
  ],
};
