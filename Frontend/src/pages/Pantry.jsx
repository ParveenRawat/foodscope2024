// Pantry.js
import React, { useState } from "react";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { helix } from "ldrs";
import Card from "../components/Card";

helix.register();

// Sample data for recipe generation (in a real app, this would come from an API)
const sampleRecipes = [
	{
		id: 1,
		name: "Vegetable Stir Fry",
		ingredients: ["bell pepper", "onion", "carrot"],
	},
	{ id: 2, name: "Avocado Toast", ingredients: ["avocado", "bread"] },
	{
		id: 3,
		name: "Spaghetti Marinara",
		ingredients: ["tomato", "garlic", "pasta"],
	},
	{
		id: 4,
		name: "Chicken Salad",
		ingredients: ["chicken", "lettuce", "tomato", "cucumber", "mushrooms"],
	},
	{
		id: 5,
		name: "Mushroom Risotto",
		ingredients: ["mushrooms", "rice", "onion"],
	},
];

const Pantry = () => {
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
			name: "Tomatoes",
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

	const [ingredients, setIngredients] = useState([]);
	const [input, setInput] = useState("");
	const [suggestedRecipes, setSuggestedRecipes] = useState([]);

	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);

	// Function to add an ingredient
	const addIngredient = () => {
		if (input && !ingredients.includes(input.toLowerCase())) {
			setIngredients([...ingredients, input.toLowerCase()]);
			setInput("");
		}
	};

	// Function to remove an ingredient
	const removeIngredient = (ingredient) => {
		setIngredients(ingredients.filter((item) => item !== ingredient));
	};

	//search recipes by ingredients using the recipeDB/searchRecipeByIngUsed/ endpoint
	const generateRecipes = async () => {
		setLoading(true);
		var usedIngredients = "";

		ingredients.forEach((ingredient) => {
			usedIngredients += ingredient + ", ";
		});

		usedIngredients = usedIngredients.slice(0, -2);

		console.log(usedIngredients);

		const response = await axios
			.post(
				"https://cosylab.iiitd.edu.in/recipe-search/recipesByIngredient?page=10&pageSize=5",
				{
					ingredientUsed: usedIngredients,
				},
				{
					withCredentials: false,
				},
			)
			.catch((error) => {
				console.log("Some error occured"), error;
			});

		console.log(response);

		if (response) {
			const recipes = response.data.payload.data;
			console.log(recipes);

			setSuggestedRecipes(recipes);
		} else {
			setSuggestedRecipes([]);
		}

		setShow(false);
	};

	const handleSearch = (item) => {
		const itemname = item.name;

		if (!ingredients.includes(itemname.toLowerCase())) {
			setIngredients([...ingredients, itemname.toLowerCase()]);
		}
	};

	return (
		<section className="bg-[#FFF9ED] min-h-screen py-12">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">
					My Pantry
				</h2>

				{/* Input to Add Ingredients */}
				<div className="flex justify-center mb-6">
					<header className="App-header">
						<div style={{ width: 400 }}>
							<ReactSearchAutocomplete
								onSelect={handleSearch}
								items={pantryItems}
							/>
						</div>
					</header>
				</div>

				{/* Display Added Ingredients */}
				<div className="flex flex-wrap gap-4 mb-8 justify-center">
					{ingredients.map((ingredient, index) => (
						<span
							key={index}
							className="bg-[#D9E4DD] text-[#4D5D4B] px-4 py-2 rounded-full font-bold flex items-center"
						>
							{ingredient}
							<button
								onClick={() => removeIngredient(ingredient)}
								className="ml-2 text-[#E27D60]"
							>
								✕
							</button>
						</span>
					))}
				</div>

				{/* Generate Recipe Suggestions */}
				<div className="text-center">
					<button
						onClick={() => {
							setShow(true);
							generateRecipes();
							setLoading(false);
						}}
						className="bg-[#A3B9A2] text-white font-bold py-3 px-6 rounded hover:bg-[#7A947A] transition duration-300"
					>
						Generate Recipes
					</button>
				</div>

				{/* Display Suggested Recipes */}
				<div className="mt-8 gap-8">
					{show ? (
						<div className="flex justify-center">
							<l-helix size="45" speed="2.5" color="black"></l-helix>
						</div>
					) : (
						<div className="flex flex-wrap justify-center flex-row gap-4">
							{suggestedRecipes.length > 0 ? (
								suggestedRecipes.map((item, index) => (
									<Card
										title={item.Recipe_title}
										key={index}
										image={item.img_url}
										url={item.url}
									/>
								))
							) : (
								<div className="">
									<div>No Recipes Here</div>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Layout()(Pantry);
