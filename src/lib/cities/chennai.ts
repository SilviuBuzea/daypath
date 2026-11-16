import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const chennai: CityCatalog = {
  id: "chennai",
  name: "Chennai, India",
  aliases: ["chennai", "madras"],
  center: { lat: 13.0827, lon: 80.2707 },
  places: [
    // ——— Marina & Triplicane ———
    place("che-marina", "Marina Beach", 13.05, 80.2824, "nature", "Beach", "Marina", 10, "India's famous urban beach promenade — sunrise best, evening snack carts.", { flags: ["free", "touristy"] }),
    place("che-labour", "Labour Statue & Marina memorials", 13.0545, 80.2835, "sight", "Monument", "Marina", 7, "Iconic statues lining the Marina stretch."),
    place("che-vivekananda", "Vivekananda House", 13.0495, 80.2805, "museum", "Museum", "Marina", 8, "Ice House museum on Vivekananda's Madras stay.", { flags: ["ticket"] }),
    place("che-anna-memorial", "Anna Memorial", 13.0625, 80.2835, "sight", "Monument", "Marina", 6, "Seaside memorial park on the northern Marina."),
    place("che-mgr", "MGR Memorial", 13.0655, 80.2845, "sight", "Monument", "Marina", 6, "Film-star CM memorial beside the beach road."),
    place("che-trip-partha", "Parthasarathy Temple", 13.0585, 80.2755, "sight", "Monument", "Triplicane", 9, "Ancient Krishna temple — dress modestly, busy on weekends."),
    place("che-trip-mosque", "Triplicane Big Mosque (Wallajah)", 13.0605, 80.2785, "sight", "Monument", "Triplicane", 7, "Historic Nawab-era mosque near the beach."),
    place("che-marina-lighthouse", "Chennai Lighthouse", 13.0395, 80.2795, "sight", "Viewpoint", "Marina", 7, "Climb for Bay of Bengal views when open to visitors.", { flags: ["ticket"] }),
    place("che-elliot", "Elliot's Beach (Besant Nagar)", 12.9985, 80.2715, "nature", "Beach", "Besant Nagar", 9, "South Chennai beach with cafes and the Schmidt Memorial."),
    place("che-schmidt", "Karl Schmidt Memorial", 12.9995, 80.2725, "sight", "Monument", "Besant Nagar", 6, "White memorial marker on Elliot's Beach."),
    place("che-asper", "Ashtalakshmi Temple", 12.9925, 80.2705, "sight", "Monument", "Besant Nagar", 7, "Seafront temple to eight forms of Lakshmi."),

    // ——— Fort St. George & George Town ———
    place("che-fort", "Fort St. George", 13.0795, 80.2875, "sight", "Monument", "Fort", 9, "First English fortress in India — museum and St. Mary's inside.", { flags: ["ticket"] }),
    place("che-fort-museum", "Fort Museum", 13.08, 80.287, "museum", "Museum", "Fort", 8, "Colonial arms, medals, and company portraits.", { flags: ["ticket"] }),
    place("che-st-mary", "St. Mary's Church", 13.0798, 80.2865, "sight", "Monument", "Fort", 7, "Oldest Anglican church east of Suez inside the fort."),
    place("che-high-court", "Madras High Court Indo-Saracenic", 13.0875, 80.2855, "sight", "Monument", "George Town", 8, "Vast red Indo-Saracenic courts — exterior photography from the road."),
    place("che-parry", "Parry's Corner / Dare House", 13.0895, 80.2885, "sight", "Attraction", "George Town", 6, "Historic commercial corner of old Madras."),
    place("che-burma", "Burma Bazaar", 13.0885, 80.2865, "shopping", "Market", "George Town", 6, "Electronics and import stalls near the High Court."),
    place("che-flower", "Flower bazaar / Kotwal Chavadi fringe", 13.0925, 80.2785, "shopping", "Market", "George Town", 6, "Wholesale flower colours for temple garlands."),
    place("che-royapuram", "Royapuram fishing harbour fringe", 13.1055, 80.2955, "sight", "Attraction", "Royapuram", 5, "Working harbour north of the fort — early morning energy."),

    // ——— Egmore & museums ———
    place("che-govt-museum", "Government Museum Egmore", 13.0715, 80.2565, "museum", "Museum", "Egmore", 9, "Bronze gallery and archaeology — flagship city museum.", { tip: "Allow half a day; bronze gallery is the highlight.", flags: ["ticket"] }),
    place("che-national-art", "National Art Gallery Egmore", 13.0705, 80.2555, "museum", "Museum", "Egmore", 7, "Indo-Saracenic gallery building in the museum campus.", { flags: ["ticket"] }),
    place("che-connemara", "Connemara Public Library", 13.071, 80.2558, "sight", "Monument", "Egmore", 6, "Historic reading rooms beside the museum."),
    place("che-egmore-station", "Egmore Railway Station façade", 13.0735, 80.2615, "sight", "Monument", "Egmore", 5, "Heritage station for south-bound trains."),
    place("che-pantheon", "Pantheon Complex grounds", 13.0718, 80.2568, "nature", "Park", "Egmore", 5, "Shaded campus linking museum buildings."),

    // ——— Mylapore & Santhome ———
    place("che-kapaleeshwarar", "Kapaleeshwarar Temple", 13.0338, 80.2695, "sight", "Monument", "Mylapore", 10, "Dravidian gopuram heart of Mylapore — evening aarti glow.", { flags: ["touristy"] }),
    place("che-mylapore-tank", "Kapaleeshwarar temple tank", 13.0335, 80.2685, "sight", "Monument", "Mylapore", 7, "Sacred tank and morning walkers around the temple."),
    place("che-santhome", "Santhome Cathedral Basilica", 13.0335, 80.2775, "sight", "Monument", "Santhome", 9, "Apostle Thomas shrine on the southern Marina.", { flags: ["free"] }),
    place("che-luz", "Luz Church", 13.0365, 80.2655, "sight", "Monument", "Mylapore", 6, "One of the oldest churches in the city."),
    place("che-mylapore-sabha", "Mylapore fine arts / December season venues", 13.0345, 80.2675, "sight", "Attraction", "Mylapore", 7, "Carnatic music sabhas — peak in December festival season."),
    place("che-chitra", "Cholamandal Artists' Village", 12.8855, 80.2425, "museum", "Museum", "Injambakkam", 7, "Artist colony and galleries on the ECR fringe.", { flags: ["ticket"] }),
    place("che-mylapore-food", "Mylapore filter coffee & tiffin lanes", 13.0355, 80.2688, "food", "Restaurant", "Mylapore", 8, "Kumbakonam degree coffee and tiffin after temple.", { cuisine: "south indian" }),

    // ——— T. Nagar, Pondy Bazaar & shopping ———
    place("che-pondy", "Pondy Bazaar", 13.0415, 80.2415, "shopping", "Market", "T. Nagar", 8, "Street shopping for clothes and accessories."),
    place("che-ranganathan", "Ranganathan Street", 13.0385, 80.2335, "shopping", "Market", "T. Nagar", 9, "Packed sari and jewellery street — evenings electric.", { flags: ["touristy"] }),
    place("che-nagar", "T. Nagar silk showrooms", 13.0375, 80.2345, "shopping", "Market", "T. Nagar", 8, "Kanchipuram silk heavyweights — compare prices upstairs."),
    place("che-nagar-park", "Panagal Park", 13.0405, 80.2335, "nature", "Park", "T. Nagar", 5, "Roundabout park at the T. Nagar hub."),
    place("che-express", "Express Avenue mall", 13.0585, 80.2605, "shopping", "Market", "Royapettah", 6, "Central mall cinema and food court."),
    place("che-phoenix", "Phoenix Marketcity", 12.9955, 80.2175, "shopping", "Market", "Velachery", 6, "Large suburban mall option in south Chennai."),

    // ——— Adyar, Guindy & south ———
    place("che-theosophical", "Theosophical Society gardens", 13.0105, 80.2625, "nature", "Garden", "Adyar", 8, "Banyan grove and quiet river paths — morning entry.", { tip: "Cycles and silence rules; check gate hours.", flags: ["free"] }),
    place("che-adyar-bridge", "Adyar estuary viewpoint", 13.0155, 80.2755, "nature", "Park", "Adyar", 6, "River mouth birds near the Theosophical fringe."),
    place("che-guindy", "Guindy National Park", 13.0065, 80.2155, "nature", "Park", "Guindy", 8, "Urban deer park and trails beside Raj Bhavan.", { flags: ["ticket"] }),
    place("che-snake", "Chennai Snake Park", 13.0075, 80.2175, "nature", "Park", "Guindy", 7, "Reptile park next to Guindy — family stop.", { flags: ["ticket"] }),
    place("che-children", "Children's Park Guindy", 13.0085, 80.2185, "nature", "Park", "Guindy", 6, "Mini zoo corner for kids beside the national park."),
    place("che-iitm", "IIT Madras wooded campus walk", 12.9915, 80.2335, "nature", "Park", "Adyar", 6, "Deer-filled academic campus — visitor entry rules apply."),
    place("che-csr", "CSIR / science exhibits fringe", 13.0125, 80.2485, "museum", "Museum", "Adyar", 5, "Occasional science outreach near Adyar."),

    // ——— Mahabalipuram day-trip ———
    place("che-maha-shore", "Shore Temple Mahabalipuram", 12.6165, 80.1985, "sight", "Monument", "Mahabalipuram", 10, "UNESCO seaside temples — classic ECR day trip.", { tip: "Combine with Pancha Rathas; sunrise at Shore Temple is magical.", flags: ["ticket", "touristy"] }),
    place("che-maha-rathas", "Pancha Rathas", 12.6085, 80.1895, "sight", "Monument", "Mahabalipuram", 9, "Monolithic ratha chariots in one ticketed complex.", { flags: ["ticket"] }),
    place("che-maha-arjuna", "Arjuna's Penance / Descent of the Ganges", 12.6175, 80.1925, "sight", "Monument", "Mahabalipuram", 9, "Huge open-air bas-relief masterpiece.", { flags: ["ticket"] }),
    place("che-maha-cave", "Mahishasuramardini Cave", 12.6185, 80.1915, "sight", "Monument", "Mahabalipuram", 7, "Rock-cut cave temples on the hillock."),
    place("che-maha-beach", "Mahabalipuram beach & lighthouse", 12.6155, 80.198, "nature", "Beach", "Mahabalipuram", 7, "Climb the lighthouse for coast views after the monuments.", { flags: ["ticket"] }),
    place("che-maha-craft", "Mahabalipuram sculpture workshops", 12.62, 80.1955, "shopping", "Market", "Mahabalipuram", 6, "Watch stone carvers along the approach roads."),
    place("che-ecr", "ECR coastal drive viewpoints", 12.85, 80.24, "sight", "Viewpoint", "ECR", 6, "Bay glimpses on the East Coast Road to Mahabs."),

    // ——— Central & Anna Salai ———
    place("che-anna-salai", "Anna Salai heritage stretch", 13.0555, 80.2555, "sight", "Attraction", "Anna Salai", 6, "Mount Road commercial spine with colonial leftovers."),
    place("che-rippoint", "Ripon Building", 13.0825, 80.2705, "sight", "Monument", "Park Town", 7, "White municipal palace near Central station."),
    place("che-central", "Chennai Central station façade", 13.0825, 80.2755, "sight", "Monument", "Park Town", 7, "Iconic red station — photo from the opposite side."),
    place("che-valluvar", "Valluvar Kottam", 13.0545, 80.2425, "sight", "Monument", "Nungambakkam", 7, "Chariot-shaped memorial to poet Thiruvalluvar.", { flags: ["ticket"] }),
    place("che-thousand", "Thousand Lights Mosque", 13.0585, 80.2555, "sight", "Monument", "Anna Salai", 6, "Multi-chamber mosque on Anna Salai."),
    place("che-st-george-cathedral", "St. George's Cathedral", 13.058, 80.25, "sight", "Monument", "Anna Salai", 5, "Anglican cathedral with quiet churchyard."),

    // ——— Film & modern culture ———
    place("che-mgr-film", "MGR Film City fringe / Kodambakkam", 13.0525, 80.2255, "sight", "Attraction", "Kodambakkam", 5, "Kollywood neighbourhood energy — studio access rare."),
    place("che-ammu", "DakshinaChitra heritage museum", 12.8255, 80.2425, "museum", "Museum", "ECR", 8, "Living-history crafts village on the ECR.", { flags: ["ticket"] }),
    place("che-birla", "Birla Planetarium", 13.0105, 80.2415, "museum", "Museum", "Kotturpuram", 6, "Planetarium shows beside the science campus.", { flags: ["ticket"] }),
    place("che-periyar", "Periyar Science & Technology Centre", 13.0115, 80.2425, "museum", "Museum", "Kotturpuram", 6, "Hands-on science for families.", { flags: ["ticket"] }),

    // ——— Food ———
    place("che-murugan", "Murugan Idli Shop", 13.0405, 80.2385, "food", "Restaurant", "T. Nagar", 8, "Soft idlis and chutneys — reliable tiffin chain stop.", { cuisine: "south indian" }),
    place("che-saravana", "Saravana Bhavan", 13.0425, 80.2345, "food", "Restaurant", "T. Nagar", 8, "Global ambassador of Tamil Nadu meals and filter coffee.", { cuisine: "south indian", flags: ["touristy"] }),
    place("che-rathna", "Rathna Cafe Triplicane", 13.0575, 80.2765, "food", "Restaurant", "Triplicane", 7, "Classic tiffin near Parthasarathy Temple.", { cuisine: "south indian" }),
    place("che-mathsya", "Mathsya / Chettinad seafood", 13.0455, 80.2615, "food", "Restaurant", "Royapettah", 7, "Peppery Chettinad and coastal fish curries.", { cuisine: "chettinad" }),
    place("che-rayar", "Rayar's Cafe", 13.0345, 80.2665, "food", "Restaurant", "Mylapore", 8, "Tiny legendary tiffin counter — go early.", { cuisine: "south indian" }),
    place("che-filter", "Filter coffee stand hop Mylapore", 13.035, 80.269, "cafe", "Cafe", "Mylapore", 8, "Steel tumbler coffee after Kapaleeshwarar.", { cuisine: "cafe" }),
    place("che-sandy", "Sandy's Chocolate Chamber", 13.0455, 80.2485, "cafe", "Cafe", "Alwarpet", 6, "Dessert cafe break in central south Chennai."),
    place("che-writer", "Writer's Cafe", 13.0485, 80.2455, "cafe", "Cafe", "Teynampet", 6, "Social-enterprise cafe with quiet tables."),
    place("che-beach-sundal", "Marina sundal & murukku carts", 13.05, 80.282, "food", "Restaurant", "Marina", 7, "Evening roasted chickpeas and crunchy snacks on the sand.", { cuisine: "street food" }),
    place("che-biryani", "Ambur / Dindigul biryani houses", 13.0555, 80.2455, "food", "Restaurant", "Nungambakkam", 7, "Seeraga samba biryani plates for dinner.", { cuisine: "biryani" }),
    place("che-crab", "Karen anand / coastal crab dinners", 12.9955, 80.2555, "food", "Restaurant", "Besant Nagar", 7, "Pepper crab near Elliot's Beach cafes.", { cuisine: "seafood" }),

    // ——— Nightlife (mild) ———
    place("che-besant-cafes", "Besant Nagar evening cafe strip", 13.0005, 80.2685, "nightlife", "Bar", "Besant Nagar", 7, "Beach-adjacent cafes and soft nightlife."),
    place("che-phoenix-night", "Phoenix Marketcity cinema night", 12.9958, 80.2178, "nightlife", "Attraction", "Velachery", 5, "Late movies and mall dining."),
    place("che-brew", "Microbrew / pub pockets MRC Nagar", 13.0255, 80.2555, "nightlife", "Bar", "MRC Nagar", 6, "Upscale pubs with Bay glimpses."),
    place("che-music", "Sabha concert evenings (season)", 13.0365, 80.2665, "nightlife", "Attraction", "Mylapore", 8, "December Music Season kutcheris — book popular artists.", { flags: ["ticket"] }),

    // ——— Stays ———
    place("che-stay-marina", "Marina / Triplicane hotels", 13.055, 80.278, "stay", "Hotel", "Triplicane", 8, "Beach-proximate base for sunrise Marina walks."),
    place("che-stay-nungai", "Nungambakkam business hotels", 13.06, 80.242, "stay", "Hotel", "Nungambakkam", 8, "Central base near Egmore museums and Anna Salai."),
    place("che-stay-mylapore", "Mylapore heritage stays", 13.034, 80.268, "stay", "Hotel", "Mylapore", 8, "Temple-quarter sleeps for culture mornings."),
    place("che-stay-besant", "Besant Nagar / Adyar hotels", 13.002, 80.268, "stay", "Hotel", "Besant Nagar", 7, "South beach cafes and Theosophical gardens."),
    place("che-stay-ecr", "ECR resort stays toward Mahabs", 12.85, 80.245, "stay", "Hotel", "ECR", 6, "Coastal resorts if focusing on Mahabalipuram days."),
    place("che-stay-tnagar", "T. Nagar practical hotels", 13.04, 80.235, "stay", "Hotel", "T. Nagar", 6, "Shopping-centric base near silk streets."),
  ],
};
