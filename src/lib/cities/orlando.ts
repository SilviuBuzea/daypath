import type { CityCatalog } from "../types";
import { place } from "./helpers";

export const orlando: CityCatalog = {
  id: "orlando",
  name: "Orlando, United States",
  aliases: ["orlando"],
  center: { lat: 28.5383, lon: -81.3792 },
  places: [
    // ——— Walt Disney World pocket ———
    place("orl-magic-kingdom", "Magic Kingdom", 28.4177, -81.5812, "sight", "Attraction", "Disney World", 10, "Castle hub — rope drop beats midday heat and crowds."),
    place("orl-epcot", "EPCOT", 28.3747, -81.5494, "sight", "Attraction", "Disney World", 9, "World Showcase evenings and Future World icons."),
    place("orl-hollywood", "Disney's Hollywood Studios", 28.3575, -81.5583, "sight", "Attraction", "Disney World", 9, "Star Wars and tower thrills south of EPCOT."),
    place("orl-animal", "Disney's Animal Kingdom", 28.355, -81.59, "sight", "Attraction", "Disney World", 9, "Pandora at dawn and safari mid-morning."),
    place("orl-disney-springs", "Disney Springs", 28.3705, -81.5215, "shopping", "Market", "Disney World", 8, "Free-entry shopping and dining district."),
    place("orl-typhoon", "Typhoon Lagoon", 28.3655, -81.5285, "nature", "Park", "Disney World", 7, "Disney water park with surf lagoon."),
    place("orl-blizzard", "Blizzard Beach", 28.3515, -81.5755, "nature", "Park", "Disney World", 7, "Snow-themed Disney water park."),
    place("orl-contemporary", "Contemporary Resort monorail view", 28.4155, -81.5745, "sight", "Viewpoint", "Disney World", 7, "A-frame resort with Magic Kingdom sightlines."),
    place("orl-poly", "Polynesian Village luau grounds", 28.4105, -81.5835, "sight", "Attraction", "Disney World", 6, "Resort beach fireworks viewing across the Seven Seas."),
    place("orl-boardwalk", "Disney BoardWalk", 28.3695, -81.5575, "sight", "Attraction", "Disney World", 7, "Evening promenade between EPCOT and Yacht Club."),
    place("orl-fort-wilderness", "Fort Wilderness trails", 28.4085, -81.5535, "nature", "Park", "Disney World", 6, "Quiet resort paths and lake views."),

    // ——— Universal pocket ———
    place("orl-universal-studios", "Universal Studios Florida", 28.4745, -81.4675, "sight", "Attraction", "Universal", 9, "Movie-park classics and Super Nintendo World era."),
    place("orl-islands", "Islands of Adventure", 28.4715, -81.4685, "sight", "Attraction", "Universal", 10, "Hogsmeade, VelociCoaster, and Marvel lanes."),
    place("orl-epic", "Universal Epic Universe", 28.4555, -81.4455, "sight", "Attraction", "Universal", 9, "Newest Universal gate — timed tickets essential."),
    place("orl-citywalk", "Universal CityWalk Orlando", 28.4735, -81.4688, "shopping", "Market", "Universal", 8, "Dining and entertainment bridge to the parks."),
    place("orl-volcano-bay", "Universal's Volcano Bay", 28.4615, -81.4735, "nature", "Park", "Universal", 8, "Volcano-centered water park."),
    place("orl-diagon", "Diagon Alley (Studios)", 28.4775, -81.4695, "sight", "Attraction", "Universal", 9, "Wizarding London streetscape inside Studios."),
    place("orl-hogsmeade", "Hogsmeade (Islands)", 28.473, -81.4715, "sight", "Attraction", "Universal", 9, "Snowy village and Hogwarts castle views."),
    // ——— International Drive ———
    place("orl-icon", "The Wheel at ICON Park", 28.4435, -81.4695, "sight", "Viewpoint", "International Drive", 8, "Giant observation wheel over I-Drive."),
    place("orl-madame", "Madame Tussauds Orlando", 28.4438, -81.4698, "museum", "Museum", "International Drive", 5, "Wax figures beside the Wheel."),
    place("orl-sea-life", "SEA LIFE Orlando", 28.4432, -81.4692, "museum", "Museum", "International Drive", 6, "Aquarium tunnel at ICON Park."),
    place("orl-seaworld", "SeaWorld Orlando", 28.4115, -81.4615, "sight", "Attraction", "International Drive", 8, "Coasters and marine shows south of I-Drive."),
    place("orl-discovery-cove", "Discovery Cove", 28.4055, -81.4575, "nature", "Park", "International Drive", 8, "Reservation-only lagoon and reef day."),
    place("orl-aquatica", "Aquatica Orlando", 28.4155, -81.4565, "nature", "Park", "International Drive", 7, "SeaWorld's water park."),
    place("orl-wonderworks", "WonderWorks", 28.4485, -81.4695, "sight", "Attraction", "International Drive", 6, "Upside-down mansion of science interactives."),
    place("orl-ripley", "Ripley's Believe It or Not", 28.4525, -81.4705, "museum", "Museum", "International Drive", 5, "Odditorium in the leaning building."),
    place("orl-pointe", "Pointe Orlando", 28.4355, -81.4705, "shopping", "Mall", "International Drive", 6, "Outdoor plaza dining on I-Drive."),
    place("orl-premium", "Orlando International Premium Outlets", 28.4855, -81.4555, "shopping", "Mall", "International Drive", 7, "Large outlet mall north of Universal."),
    place("orl-vineland", "Orlando Vineland Premium Outlets", 28.3855, -81.4905, "shopping", "Mall", "I-Drive South", 6, "Outlet shopping near Disney corridor."),
    place("orl-idrive", "International Drive stroll", 28.45, -81.47, "sight", "Attraction", "International Drive", 6, "Tourist strip of neon, mini-golf, and dinner shows."),

    // ——— Downtown Orlando / Lake Eola ———
    place("orl-lake-eola", "Lake Eola Park", 28.5435, -81.3725, "nature", "Park", "Downtown", 8, "Swan boats and skyline fountain loop."),
    place("orl-church-street", "Church Street Station", 28.5405, -81.3795, "sight", "Attraction", "Downtown", 7, "Brick entertainment street downtown."),
    place("orl-amlway", "Amway Center exterior", 28.5395, -81.3835, "sight", "Attraction", "Downtown", 5, "Arena landmark for Magic game nights."),
    place("orl-dr-phillips", "Dr. Phillips Center", 28.5385, -81.3785, "sight", "Attraction", "Downtown", 7, "Performing-arts campus downtown."),
    place("orl-orange-museum", "Orange County Regional History Center", 28.5425, -81.3765, "museum", "Museum", "Downtown", 7, "County history in the old courthouse."),
    place("orl-thornton", "Thornton Park streets", 28.5435, -81.3655, "sight", "Attraction", "Downtown", 6, "Brick bungalows and cafes east of Lake Eola."),
    place("orl-mills", "Mills 50 District", 28.5555, -81.3655, "sight", "Attraction", "Mills 50", 7, "Vietnamese and Asian dining corridor."),
    place("orl-audubon", "Audubon Park Garden District", 28.5655, -81.3455, "sight", "Attraction", "Audubon Park", 6, "Local shops near Leu Gardens."),
    place("orl-leu", "Harry P. Leu Gardens", 28.5685, -81.3555, "nature", "Park", "Audubon Park", 8, "Camellias and lakeside botanical gardens."),

    // ——— Winter Park ———
    place("orl-park-ave", "Park Avenue Winter Park", 28.5975, -81.3515, "shopping", "Market", "Winter Park", 9, "Boutique street with brick sidewalks."),
    place("orl-central-park-wp", "Central Park Winter Park", 28.5978, -81.3518, "nature", "Park", "Winter Park", 7, "Farmer's market lawns on Park Avenue."),
    place("orl-morse", "Charles Hosmer Morse Museum", 28.5995, -81.3525, "museum", "Museum", "Winter Park", 9, "World's major Tiffany glass collection."),
    place("orl-rollins", "Rollins College campus", 28.5925, -81.3485, "sight", "Attraction", "Winter Park", 7, "Mediterranean campus on Lake Virginia."),
    place("orl-kraft", "Kraft Azalea Garden", 28.6055, -81.3455, "nature", "Park", "Winter Park", 7, "Lakeside azaleas and reflecting temple."),
    place("orl-scenic-boat", "Winter Park Scenic Boat Tour", 28.5955, -81.3455, "sight", "Attraction", "Winter Park", 8, "Historic chain-of-lakes boat ride."),
    place("orl-albin", "Albin Polasek Museum", 28.5945, -81.3435, "museum", "Museum", "Winter Park", 7, "Sculpture gardens on Lake Osceola."),
    place("orl-cornell", "Cornell Fine Arts Museum", 28.5928, -81.3488, "museum", "Museum", "Winter Park", 7, "Rollins art museum on campus."),
    place("orl-winter-park-mall", "Winter Park Village", 28.6055, -81.3655, "shopping", "Mall", "Winter Park", 6, "Open-air dining and cinema plaza."),

    // ——— Nature / nearby ———
    place("orl-gatorland", "Gatorland", 28.3555, -81.4055, "nature", "Park", "South Orlando", 7, "Classic alligator park on South Orange Blossom."),
    place("orl-wekiwa", "Wekiwa Springs State Park", 28.7115, -81.4605, "nature", "Park", "Apopka", 8, "Spring swim and paddling north of town."),
    place("orl-kelly", "Kelly Park Rock Springs", 28.7555, -81.5015, "nature", "Park", "Apopka", 8, "Natural lazy-river tubing day trip."),
    place("orl-bok", "Bok Tower Gardens", 27.9355, -81.5775, "nature", "Park", "Lake Wales", 8, "Singing tower and gardens — half-day south."),
    place("orl-kennedy", "Kennedy Space Center day trip", 28.5725, -80.6485, "museum", "Museum", "Cape Canaveral", 9, "NASA visitor complex — full-day east."),
    place("orl-cocoa", "Cocoa Beach pier day", 28.3685, -80.6015, "nature", "Beach", "Cocoa Beach", 7, "Surf town pier east of Orlando."),
    place("orl-lake-louisa", "Lake Louisa State Park", 28.4555, -81.7255, "nature", "Park", "Clermont", 6, "Sandhill lakes west for a quiet day."),
    place("orl-mead", "Mead Botanical Garden", 28.5855, -81.3555, "nature", "Park", "Winter Park", 6, "Creek-side garden between Orlando and Winter Park."),

    // ——— Kissimmee / south corridor ———
    place("orl-old-town", "Old Town Kissimmee", 28.3355, -81.5055, "shopping", "Market", "Kissimmee", 6, "Classic tourist midway near Disney."),
    place("orl-celebration", "Celebration town center", 28.3255, -81.5405, "sight", "Attraction", "Celebration", 7, "Planned Disney town with lakeside shops."),
    place("orl-medieval", "Medieval Times Dinner Show", 28.3455, -81.5105, "sight", "Attraction", "Kissimmee", 5, "Tournament dinner theater near US-192."),

    // ——— More museums ———
    place("orl-art-museum", "Orlando Museum of Art", 28.5735, -81.3655, "museum", "Museum", "Loch Haven", 7, "Regional art in Loch Haven Park."),
    place("orl-science", "Orlando Science Center", 28.5725, -81.3675, "museum", "Museum", "Loch Haven", 7, "Hands-on science and planetarium."),
    place("orl-holocaust", "Holocaust Memorial Resource Center", 28.5955, -81.3655, "museum", "Museum", "Maitland", 6, "Education center north of Winter Park."),

    // ——— Cafes ———
    place("orl-lineage", "Lineage Coffee Roasting", 28.5555, -81.3655, "cafe", "Cafe", "Mills 50", 7, "Local roast near the Asian corridor.", { cuisine: "coffee" }),
    place("orl-foxtail", "Foxtail Coffee Winter Park", 28.5975, -81.3512, "cafe", "Cafe", "Winter Park", 7, "Park Avenue specialty coffee.", { cuisine: "coffee" }),
    place("orl-hogar", "Hogar Coffee Collective", 28.5435, -81.372, "cafe", "Cafe", "Downtown", 6, "Downtown espresso near Lake Eola.", { cuisine: "coffee" }),
    place("orl-ink", "Inkwood Books cafe vibe WP", 28.5985, -81.3505, "cafe", "Cafe", "Winter Park", 6, "Browse-and-sip energy on Park Ave.", { cuisine: "coffee" }),
    place("orl-barista", "The Barista Club", 28.45, -81.47, "cafe", "Cafe", "International Drive", 5, "Caffeine between park days.", { cuisine: "coffee" }),
    place("orl-dexter", "Dexter's of Thornton Park", 28.5435, -81.3658, "cafe", "Cafe", "Downtown", 6, "Neighborhood cafe-brunch hybrid.", { cuisine: "coffee brunch" }),
    place("orl-barnes", "Barnie's Coffee Winter Park", 28.5972, -81.3515, "cafe", "Cafe", "Winter Park", 5, "Long-running Florida coffee brand stop.", { cuisine: "coffee" }),
    place("orl-stardust", "Stardust Video & Coffee", 28.5558, -81.3652, "cafe", "Cafe", "Mills 50", 7, "Indie cafe with gardens and vinyl energy.", { cuisine: "coffee" }),

    // ——— Food ———
    place("orl-victoria", "Victoria & Albert's", 28.41, -81.585, "food", "Restaurant", "Disney World", 9, "Fine dining inside Grand Floridian — book far ahead.", { cuisine: "american" }),
    place("orl-sci-fi", "Sci-Fi Dine-In Theater", 28.3578, -81.5585, "food", "Restaurant", "Disney World", 7, "Car-hop theater dining at Hollywood Studios.", { cuisine: "american" }),
    place("orl-toothsome", "Toothsome Chocolate Emporium", 28.4735, -81.4685, "food", "Restaurant", "Universal", 7, "Steampunk shakes at CityWalk.", { cuisine: "american dessert" }),
    place("orl-mythos", "Mythos Restaurant", 28.4718, -81.4682, "food", "Restaurant", "Universal", 8, "Cave dining inside Islands of Adventure.", { cuisine: "american" }),
    place("orl-seagull", "The Ravenous Pig", 28.5975, -81.352, "food", "Restaurant", "Winter Park", 8, "Gastropub landmark near Park Avenue.", { cuisine: "american" }),
    place("orl-prato", "Prato", 28.5978, -81.351, "food", "Restaurant", "Winter Park", 8, "Wood-fired Italian on Park Avenue.", { cuisine: "italian" }),
    place("orl-maxine", "Maxine's on Shine", 28.5455, -81.3655, "food", "Restaurant", "Downtown", 7, "Neighborhood favorite east of Eola.", { cuisine: "american" }),
    place("orl-pho", "Anh Hong", 28.5555, -81.3658, "food", "Restaurant", "Mills 50", 8, "Vietnamese staple on Mills.", { cuisine: "vietnamese" }),
    place("orl-sapi", "Sáp Việt", 28.5565, -81.3645, "food", "Restaurant", "Mills 50", 7, "Modern Vietnamese near Mills 50.", { cuisine: "vietnamese" }),
    place("orl-king", "King Bao", 28.5435, -81.3728, "food", "Quick meal", "Downtown", 6, "Bao and Asian street snacks downtown.", { cuisine: "asian" }),
    place("orl-cola", "Cola Restaurant Classico", 28.5985, -81.3508, "food", "Restaurant", "Winter Park", 7, "Italian plates on the Avenue.", { cuisine: "italian" }),
    place("orl-hash", "Se7en Bites", 28.5555, -81.37, "food", "Restaurant", "Mills 50", 7, "Southern brunch institution.", { cuisine: "southern brunch" }),
    place("orl-kadence", "Kadence", 28.555, -81.36, "food", "Restaurant", "Audubon Park", 8, "Omakase counter — reserve early.", { cuisine: "japanese" }),
    place("orl-homecomin", "Chef Art Smith's Homecomin'", 28.3708, -81.5212, "food", "Restaurant", "Disney Springs", 8, "Florida comfort food at Disney Springs.", { cuisine: "southern" }),

    // ——— Nightlife ———
    place("orl-citywalk-night", "CityWalk evening circuit", 28.4735, -81.4685, "nightlife", "Bar", "Universal", 8, "Bars and live venues after park close."),
    place("orl-disney-springs-night", "Disney Springs nightlife", 28.3705, -81.5215, "nightlife", "Bar", "Disney World", 7, "Themed bars without park tickets."),
    place("orl-wall", "The Wall Street Plaza", 28.5415, -81.3785, "nightlife", "Bar", "Downtown", 7, "Cluster of downtown bars in one block."),
    place("orl-hansons", "Hanson's Shoe Repair", 28.541, -81.379, "nightlife", "Bar", "Downtown", 8, "Speakeasy cocktails — password entry."),
    place("orl-matthews", "Matthew's Eyewear rooftop area", 28.54, -81.378, "nightlife", "Bar", "Downtown", 6, "Downtown lounge energy near Church Street."),
    place("orl-wp-night", "Winter Park wine bars", 28.5975, -81.3515, "nightlife", "Bar", "Winter Park", 6, "Quieter Avenue evenings after shopping."),
    place("orl-house-of-blues", "House of Blues Disney Springs", 28.371, -81.521, "nightlife", "Bar", "Disney World", 7, "Live music hall at Disney Springs."),
    place("orl-cowfish", "Howl at the Moon / I-Drive clubs", 28.4355, -81.4705, "nightlife", "Bar", "International Drive", 5, "Tourist-strip late nights near Pointe."),

    // ——— Stays ———
    place("orl-stay-grand-floridian", "Disney's Grand Floridian", 28.4115, -81.5865, "stay", "Hotel", "Disney World", 10, "Flagship Magic Kingdom monorail resort."),
    place("orl-stay-poly", "Disney's Polynesian Village", 28.4105, -81.5835, "stay", "Hotel", "Disney World", 9, "Monorail resort with fireworks beach views."),
    place("orl-stay-yacht", "Disney's Yacht Club", 28.3705, -81.5555, "stay", "Hotel", "Disney World", 8, "Walkable to EPCOT and BoardWalk."),
    place("orl-stay-hard-rock", "Hard Rock Hotel Universal", 28.4755, -81.4655, "stay", "Hotel", "Universal", 8, "Early park admission base by CityWalk."),
    place("orl-stay-portofino", "Loews Portofino Bay", 28.4785, -81.4605, "stay", "Hotel", "Universal", 8, "Italianate Universal premier resort."),
    place("orl-stay-alon", "Alon Hotel Autograph", 28.4355, -81.47, "stay", "Hotel", "International Drive", 7, "Boutique-feel I-Drive stay."),
    place("orl-stay-wp", "The Alfond Inn", 28.5935, -81.3495, "stay", "Hotel", "Winter Park", 8, "Art-filled Winter Park base near Rollins."),
    place("orl-stay-grande", "Waldorf Astoria Orlando", 28.3755, -81.4955, "stay", "Hotel", "Lake Buena Vista", 9, "Luxury near Disney with golf grounds."),
  ],
};
