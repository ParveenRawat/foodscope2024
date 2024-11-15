const pantryItems = [
  {
    id: 0,
    name: "Apples",
  },
  {
    id: 1,
    name: "Bananas",
  },
  {
    id: 2,
    name: "Oranges",
  },
  {
    id: 3,
    name: "Lemons",
  },
  {
    id: 4,
    name: "Strawberries",
  },
  {
    id: 5,
    name: "Blueberries",
  },
  {
    id: 6,
    name: "Pineapple",
  },
  {
    id: 7,
    name: "Mango",
  },
  {
    id: 8,
    name: "Grapes",
  },
  {
    id: 9,
    name: "Avocado",
  },
  {
    id: 10,
    name: "Potato",
  },
  {
    id: 11,
    name: "Onions",
  },
  {
    id: 12,
    name: "Tomato",
  },
  {
    id: 13,
    name: "Garlic",
  },
  {
    id: 14,
    name: "Bell Peppers",
  },
  {
    id: 15,
    name: "Spinach",
  },
  {
    id: 16,
    name: "Carrots",
  },
  {
    id: 17,
    name: "Broccoli",
  },
  {
    id: 18,
    name: "Mushrooms",
  },
  {
    id: 19,
    name: "Zucchini",
  },
  {
    id: 20,
    name: "Basil",
  },
  {
    id: 21,
    name: "Parsley",
  },
  {
    id: 22,
    name: "Thyme",
  },
  {
    id: 23,
    name: "Rosemary",
  },
  {
    id: 24,
    name: "Cilantro",
  },
  {
    id: 25,
    name: "Cumin",
  },
  {
    id: 26,
    name: "Turmeric",
  },
  {
    id: 27,
    name: "Chili Powder",
  },
  {
    id: 28,
    name: "Paprika",
  },
  {
    id: 29,
    name: "Oregano",
  },
  {
    id: 30,
    name: "Chicken",
  },
  {
    id: 31,
    name: "Beef",
  },
  {
    id: 32,
    name: "Pork",
  },
  {
    id: 33,
    name: "Fish",
  },
  {
    id: 34,
    name: "Eggs",
  },
  {
    id: 35,
    name: "Tofu",
  },
  {
    id: 36,
    name: "Lentils",
  },
  {
    id: 37,
    name: "Chickpeas",
  },
  {
    id: 38,
    name: "Black Beans",
  },
  {
    id: 39,
    name: "Paneer",
  },
  {
    id: 40,
    name: "Rice",
  },
  {
    id: 41,
    name: "Quinoa",
  },
  {
    id: 42,
    name: "Oats",
  },
  {
    id: 43,
    name: "Barley",
  },
  {
    id: 44,
    name: "Flour",
  },
  {
    id: 45,
    name: "Pasta",
  },
  {
    id: 46,
    name: "Bread",
  },
  {
    id: 47,
    name: "Tortillas",
  },
  {
    id: 48,
    name: "Couscous",
  },
  {
    id: 49,
    name: "Polenta",
  },
  {
    id: 50,
    name: "Milk",
  },
  {
    id: 51,
    name: "Cheese",
  },
  {
    id: 52,
    name: "Butter",
  },
  {
    id: 53,
    name: "Yogurt",
  },
  {
    id: 54,
    name: "Cream",
  },
  {
    id: 55,
    name: "Sour Cream",
  },
  {
    id: 56,
    name: "Olive Oil",
  },
  {
    id: 57,
    name: "Vegetable Oil",
  },
  {
    id: 58,
    name: "Soy Sauce",
  },
  {
    id: 59,
    name: "Vinegar",
  },
  {
    id: 60,
    name: "Mustard",
  },
  {
    id: 61,
    name: "Ketchup",
  },
  {
    id: 62,
    name: "Mayonnaise",
  },
  {
    id: 63,
    name: "Hot Sauce",
  },
  {
    id: 64,
    name: "Honey",
  },
  {
    id: 65,
    name: "Peanut Butter",
  },
  {
    id: 66,
    name: "Sugar",
  },
  {
    id: 67,
    name: "Brown Sugar",
  },
  {
    id: 68,
    name: "Salt",
  },
  {
    id: 69,
    name: "Baking Powder",
  },
  {
    id: 70,
    name: "Baking Soda",
  },
  {
    id: 71,
    name: "Cocoa Powder",
  },
  {
    id: 72,
    name: "Vanilla Extract",
  },
  {
    id: 73,
    name: "Shrimp",
  },
  {
    id: 74,
    name: "Crab",
  },
  {
    id: 75,
    name: "Lobster",
  },
  {
    id: 76,
    name: "Clams",
  },
  {
    id: 77,
    name: "Squid",
  },
  {
    id: 78,
    name: "Chocolate Chips",
  },
  {
    id: 79,
    name: "Almonds",
  },
  {
    id: 80,
    name: "Walnuts",
  },
  {
    id: 81,
    name: "Cashews",
  },
  {
    id: 82,
    name: "Sunflower Seeds",
  },
  {
    id: 83,
    name: "Chia Seeds",
  },
  {
    id: 84,
    name: "Flax Seeds",
  },
  {
    id: 85,
    name: "Raisins",
  },
  {
    id: 86,
    name: "Canned Tomato Sauce",
  },
  {
    id: 87,
    name: "Coconut Milk",
  },
];

const dishes = [
  { name: "Sushi" },
  { name: "Pizza" },
  { name: "Tacos" },
  { name: "Ramen" },
  { name: "Paella" },
  { name: "Poutine" },
  { name: "Biryani" },
  { name: "Kimchi" },
  { name: "Croissant" },
  { name: "Shawarma" },
  { name: "Pho" },
  { name: "Goulash" },
  { name: "Falafel" },
  { name: "Ceviche" },
  { name: "Moussaka" },
  { name: "Lasagna" },
  { name: "Empanadas" },
  { name: "Dim Sum" },
  { name: "Bulgogi" },
  { name: "Arepas" },
  { name: "Baklava" },
  { name: "Pad Thai" },
  { name: "Jollof Rice" },
  { name: "Tagine" },
  { name: "Clam Chowder" },
  { name: "Churros" },
  { name: "Bibimbap" },
  { name: "Tiramisu" },
  { name: "Hummus" },
  { name: "Tamales" },
  { name: "Currywurst" },
  { name: "Pavlova" },
  { name: "Pierogi" },
  { name: "Ratatouille" },
  { name: "Chow Mein" },
  { name: "Crepes" },
  { name: "Pork Adobo" },
  { name: "Fish and Chips" },
  { name: "Vindaloo" },
  { name: "Gyoza" },
  { name: "Malai Kofta" },
  { name: "Cannoli" },
  { name: "Banh Mi" },
  { name: "Fettuccine Alfredo" },
  { name: "Samosa" },
  { name: "Okonomiyaki" },
  { name: "Khinkali" },
  { name: "Kebab" },
  { name: "Onigiri" },
  { name: "Stuffed Peppers" },
  { name: "Cottage Pie" },
  { name: "Manakish" },
  { name: "Pozole" },
  { name: "Feijoada" },
  { name: "Mochi" },
  { name: "Rendang" },
  { name: "Fajitas" },
  { name: "Aloo Gobi" },
  { name: "Shepherd’s Pie" },
  { name: "Pesto Pasta" },
  { name: "Spaghetti Carbonara" },
  { name: "Khao Pad" },
  { name: "Lobster Roll" },
  { name: "Zongzi" },
  { name: "Chimichurri Steak" },
  { name: "Eggs Benedict" },
  { name: "Shakshuka" },
  { name: "Tandoori Chicken" },
  { name: "Pierna de Cordero" },
  { name: "Gado-Gado" },
  { name: "Katsudon" },
  { name: "Vareniki" },
  { name: "Hot Pot" },
  { name: "Dal Tadka" },
  { name: "Satay" },
  { name: "Chilaquiles" },
  { name: "Steak Tartare" },
  { name: "Sauerbraten" },
  { name: "Boeuf Bourguignon" },
  { name: "Couscous" },
  { name: "Gumbo" },
  { name: "Pasta Primavera" },
  { name: "Spanakopita" },
  { name: "Fried Rice" },
  { name: "Eggplant Parmesan" },
  { name: "Risotto" },
  { name: "Schnitzel" },
  { name: "Yakisoba" },
  { name: "Stuffed Cabbage Rolls" },
  { name: "Khao Soi" },
  { name: "Pulled Pork Sandwich" },
  { name: "Shabu Shabu" },
  { name: "Mapo Tofu" },
  { name: "Hainanese Chicken Rice" },
  { name: "Quiche Lorraine" },
  { name: "Linguine with Clam Sauce" },
  { name: "Caponata" },
  { name: "Kibbeh" },
  { name: "Banoffee Pie" },
  { name: "Chicken Alfredo" },
  { name: "Idli" },
];

export { pantryItems, dishes };
