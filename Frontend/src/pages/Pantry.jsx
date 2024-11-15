// Pantry.js
import React, { useState } from "react";
import axios from "axios";

import { helix } from "ldrs";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import Layout from "../components/layout/Layout";
import Card from "../components/Card";

import { pantryItems } from "../constants/constants";

helix.register();

// Sample data for recipe generation (in a real app, this would come from an API)

const Pantry = () => {
	const [ingredients, setIngredients] = useState([]);
	const [input, setInput] = useState("");
	const [suggestedRecipes, setSuggestedRecipes] = useState([]);

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
		var usedIngredients = "";

		ingredients.forEach((ingredient) => {
			usedIngredients += ingredient + ", ";
		});

		usedIngredients = usedIngredients.slice(0, -2);

		console.log(usedIngredients);

		try {
			const response = await axios.post(
				"https://cosylab.iiitd.edu.in/recipe-search/recipesByIngredient?page=10&pageSize=10",
				{
					ingredientUsed: usedIngredients,
				},
				{
					withCredentials: false, // Ensure this aligns with your API requirements
				},
			);

			if (response?.data?.payload?.data) {
				const recipes = response.data.payload.data;
				console.log("Fetched Recipes:", recipes);
				setSuggestedRecipes(recipes);
			} else {
				console.log("No recipes found in the response.");
				setSuggestedRecipes([]);
			}
		} catch (error) {
			console.error("An error occurred while fetching recipes:", error);
			setSuggestedRecipes([]);
		} finally {
			setShow(false);
		}
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
					<l-helix></l-helix>
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
							generateRecipes();
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
									// url={item.url}
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
