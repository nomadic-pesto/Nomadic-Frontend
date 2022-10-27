export const constants = {
  BACKEND_URL: "http://localhost:5001",
  PRODUCT_LIMIT: 24,
  DESTINATION_TYPES: [
    { icon: "fa-anchor", name: "Beaches" },
    { icon: "fa-area-chart", name: "Hills" },
    { icon: "fa-thermometer-full", name: "Dessert" },
    { icon: "fa-envira", name: "Wildlife" },
    { icon: "fa-envira", name: "Heritage" },
    { icon: "fa-tree", name: "Forest" },
    { icon: "fa-snowflake-o", name: "Winter" },
    { icon: "fa-home", name: "Cities" },
    { icon: "fa-bath", name: "Islands" },
    { icon: "fa-map-signs", name: "Farms" },
  ],
  SUB_DESTINATION_TYPES: [
    { destination: "Beaches", name: "Baga Beach", icon: "fa-anchor" },
    { destination: "Beaches", name: "marina", icon: "fa-anchor" },
    { destination: "Beaches", name: "Om Beach", icon: "fa-anchor" },
    { destination: "Beaches", name: "pondicherry", icon: "fa-anchor" },
    { destination: "Beaches", name: "kanyakumari", icon: "fa-anchor" },
    { destination: "Beaches", name: "kovalam", icon: "fa-anchor" },
    { destination: "Beaches", name: "Chandipur Beach", icon: "fa-anchor" },
    { destination: "Beaches", name: "Varkala Beach", icon: "fa-anchor" },
    { destination: "Beaches", name: "Mandarmani Beach", icon: "fa-anchor" },
    { destination: "Beaches", name: "Wandoor Beach", icon: "fa-anchor" },
    { destination: "Beaches", name: "Mahabalipuram", icon: "fa-anchor" },
    { destination: "Beaches", name: "Ariyaman Beach", icon: "fa-anchor" },
    { destination: "Beaches", name: "Juhu Beach", icon: "fa-anchor" },

    { destination: "Hill station", name: "Shillong", icon: "fa-area-chart" },
    { destination: "Hill station", name: "Mussoorie", icon: "fa-area-chart" },
    { destination: "Hill station", name: "Auli", icon: "fa-area-chart" },
    { destination: "Hill station", name: "Nainital", icon: "fa-area-chart" },
    { destination: "Hill station", name: "Ooty", icon: "fa-area-chart" },
    { destination: "Hill station", name: "Darjeeling", icon: "fa-area-chart" },
    { destination: "Hill station", name: "Gangtok", icon: "fa-area-chart" },
    {
      destination: "Hill station",
      name: "Mahabaleshwar",
      icon: "fa-area-chart",
    },
    { destination: "Hill station", name: "Coorg", icon: "fa-area-chart" },
    { destination: "Hill station", name: "Chikmagalur", icon: "fa-area-chart" },
    { destination: "Hill station", name: "Munnar", icon: "fa-area-chart" },
    { destination: "Hill station", name: "Kodaikanal", icon: "fa-area-chart" },
    { destination: "Hill station", name: "Wayanad", icon: "fa-area-chart" },

    { destination: "Dessert", name: "Jaisalmer", icon: "fa-thermometer-full" },
    { destination: "Dessert", name: "kutch", icon: "fa-thermometer-full" },
    { destination: "Dessert", name: "bikaner", icon: "fa-thermometer-full" },
    { destination: "Dessert", name: "barmer", icon: "fa-thermometer-full" },
    {
      destination: "Dessert",
      name: "chittorgarh",
      icon: "fa-thermometer-full",
    },
    {
      destination: "Dessert",
      name: "Kumbhalgarh",
      icon: "fa-thermometer-full",
    },
    { destination: "Dessert", name: "Bundi", icon: "fa-thermometer-full" },
    { destination: "Dessert", name: "Pushkar", icon: "fa-thermometer-full" },
    { destination: "Dessert", name: "Ajmer", icon: "fa-thermometer-full" },
    { destination: "Dessert", name: "Khimsar", icon: "fa-thermometer-full" },
    {
      destination: "Dessert",
      name: "Nubra valley",
      icon: "fa-thermometer-full",
    },
    {
      destination: "Dessert",
      name: "Spiti valley",
      icon: "fa-thermometer-full",
    },
    {
      destination: "Dessert",
      name: "Rann of Kutch",
      icon: "fa-thermometer-full",
    },

    { destination: "Wildlife", name: "Jim Corbett", icon: "fa-envira" },
    { destination: "Wildlife", name: "Ranthambore", icon: "fa-envira" },
    { destination: "Wildlife", name: "Gir National Park", icon: "fa-envira" },
    {
      destination: "Wildlife",
      name: "Bannerghatta Biological Park",
      icon: "fa-envira",
    },
    {
      destination: "Wildlife",
      name: "Kaziranga National Park ",
      icon: "fa-envira",
    },
    {
      destination: "Wildlife",
      name: "Periyar National Park",
      icon: "fa-envira",
    },
    {
      destination: "Wildlife",
      name: "Sunderbans National Park",
      icon: "fa-envira",
    },
    { destination: "Wildlife", name: "Manas National Park", icon: "fa-envira" },
    { destination: "Wildlife", name: "Bera", icon: "fa-envira" },
    { destination: "Wildlife", name: "Khangchendzonga", icon: "fa-envira" },
    { destination: "Wildlife", name: "Nanda Devi", icon: "fa-envira" },
    { destination: "Wildlife", name: "Nagarahole", icon: "fa-envira" },
    { destination: "Wildlife", name: "Hemis National Park", icon: "fa-envira" },

    { destination: "Heritage", name: "Hampi", icon: "fa-tree" },
    { destination: "Heritage", name: "Varanasi", icon: "fa-tree" },
    { destination: "Heritage", name: "Rishikesh", icon: "fa-tree" },
    { destination: "Heritage", name: "Ellora Caves", icon: "fa-tree" },
    { destination: "Heritage", name: "Western Ghats", icon: "fa-tree" },
    { destination: "Heritage", name: "Jantar Mantar", icon: "fa-tree" },
    { destination: "Heritage", name: "Sundarbans", icon: "fa-tree" },
    {
      destination: "Heritage",
      name: "Mahabalipuram Monuments",
      icon: "fa-tree",
    },
    { destination: "Heritage", name: "Agra", icon: "fa-tree" },

    { destination: "Chilli places", name: "Gulmarg", icon: "fa-snowflake-o" },
    { destination: "Chilli places", name: "Manali", icon: "fa-snowflake-o" },
    {
      destination: "Chilli places",
      name: "Dharamshala",
      icon: "fa-snowflake-o",
    },
    { destination: "Chilli places", name: "Srinagar", icon: "fa-snowflake-o" },
    {
      destination: "Chilli places",
      name: "Leh-Ladakh",
      icon: "fa-snowflake-o",
    },
    {
      destination: "Chilli places",
      name: "Spiti valley",
      icon: "fa-snowflake-o",
    },
    {
      destination: "Chilli places",
      name: "Shimla-Kufri",
      icon: "fa-snowflake-o",
    },
    { destination: "Chilli places", name: "Binsar", icon: "fa-snowflake-o" },
    { destination: "Chilli places", name: "Dalhousie", icon: "fa-snowflake-o" },
    { destination: "Chilli places", name: "Tawang", icon: "fa-snowflake-o" },
    { destination: "Chilli places", name: "Gangtok", icon: "fa-snowflake-o" },
    { destination: "Chilli places", name: "Shillong", icon: "fa-snowflake-o" },
    {
      destination: "Chilli places",
      name: "Darjeeling",
      icon: "fa-snowflake-o",
    },

    { destination: "Cities", name: "Udaipur", icon: "fa-home" },
    { destination: "Cities", name: "Jodhpur", icon: "fa-home" },
    { destination: "Cities", name: "Mumbai", icon: "fa-home" },
    { destination: "Cities", name: "Banglore", icon: "fa-home" },
    { destination: "Cities", name: "Chennai", icon: "fa-home" },
    { destination: "Cities", name: "Agra", icon: "fa-home" },
    { destination: "Cities", name: "Hyderabad", icon: "fa-home" },
    { destination: "Cities", name: "Surat", icon: "fa-home" },
    { destination: "Cities", name: "Ahmedabad", icon: "fa-home" },
    { destination: "Cities", name: "Port blair", icon: "fa-home" },
    { destination: "Cities", name: "Panaji", icon: "fa-home" },
    { destination: "Cities", name: "Lucknow", icon: "fa-home" },
    { destination: "Cities", name: "Delhi", icon: "fa-home" },

    { destination: "Islands", name: "Majuli Island", icon: "fa-bath" },
    { destination: "Islands", name: "Diu Island", icon: "fa-bath" },
    { destination: "Islands", name: "Divar Island", icon: "fa-bath" },
    { destination: "Islands", name: "St Mary’s Islands", icon: "fa-bath" },
    { destination: "Islands", name: "Little Andaman Island", icon: "fa-bath" },
    { destination: "Islands", name: "Lakshadweep Islands", icon: "fa-bath" },
    { destination: "Islands", name: "Barren Island", icon: "fa-bath" },
    { destination: "Islands", name: "Grand Island", icon: "fa-bath" },
    { destination: "Islands", name: "Great Nicobar Island", icon: "fa-bath" },
    { destination: "Islands", name: "Havelock Island", icon: "fa-bath" },
    { destination: "Islands", name: "Pamban Island", icon: "fa-bath" },
    { destination: "Islands", name: "Munroe Island", icon: "fa-bath" },
    { destination: "Islands", name: "Netrani Island", icon: "fa-bath" },

    { destination: "Farms", name: "Dewalokam Farmstay", icon: "fa-map-signs" },
    { destination: "Farms", name: "Vanilla County", icon: "fa-map-signs" },
    { destination: "Farms", name: "Maachli", icon: "fa-map-signs" },
    {
      destination: "Farms",
      name: "Dudhsagar Plantation",
      icon: "fa-map-signs",
    },
    { destination: "Farms", name: "Konyak Tea Retreat", icon: "fa-map-signs" },
    { destination: "Farms", name: "The Goat Village", icon: "fa-map-signs" },
    {
      destination: "Farms",
      name: "Enchanted Forest Farm",
      icon: "fa-map-signs",
    },
    { destination: "Farms", name: "Oyster Opera", icon: "fa-map-signs" },
    { destination: "Farms", name: "Dwarka Farmstay", icon: "fa-map-signs" },
    {
      destination: "Farms",
      name: "Tieedi Earthy Dwelling",
      icon: "fa-map-signs",
    },
    { destination: "Farms", name: "Prakriti Farms", icon: "fa-map-signs" },
  ],
  AMENITIES_LIST: [
    "Iron",
    "Hair Dryer",
    "Coffee Maker",
    "Bedroom Essentials",
    "Bathroom Essentials",
    "Dishwasher",
    "Washing Machine",
    "Pool",
    "Room Darkening",
    "TV",
    "Kitchen",
    "Heating",
    "Air Conditioning",
    "Smoke Alarm",
    "Parking",
    "Wifi",
  ],
  HOUSE_TYPES: [
    { name: "Single House" },
    { name: "Apartment" },
    { name: "Duplex" },
    { name: "villa" },
    { name: "Farm" },
    { name: "Bunglow" },
    { name: "Mansion" },
    { name: "Tree house" },
  ],
  SLIDER_MAX_VALUE: 10000,
};
