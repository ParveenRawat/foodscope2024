import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";

const mockRecipes = [
	{
		id: 1,
		title: "Spaghetti Carbonara",
		image: "https://via.placeholder.com/400",
		description:
			"A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
		category: "Italian",
	},
	{
		id: 2,
		title: "Chicken Curry",
		image: "https://via.placeholder.com/400",
		description:
			"A flavorful, spicy chicken curry with a rich coconut milk base.",
		category: "Indian",
	},
	{
		id: 3,
		title: "Vegan Buddha Bowl",
		image: "https://via.placeholder.com/400",
		description:
			"A healthy and colorful bowl filled with quinoa, veggies, and chickpeas.",
		category: "Vegan",
	},
	{
		id: 4,
		title: "Chocolate Cake",
		image: "https://via.placeholder.com/400",
		description:
			"A rich and moist chocolate cake topped with a decadent frosting.",
		category: "Dessert",
	},
	{
		id: 5,
		title: "Vegetable Stir-fry",
		image: "https://via.placeholder.com/400",
		description: "A quick and healthy stir-fry with mixed vegetables.",
		category: "Vegan",
	},
	{
		id: 6,
		title: "Pasta Primavera",
		image: "https://via.placeholder.com/400",
		description: "Pasta tossed with a variety of fresh, sautéed vegetables.",
		category: "Italian",
	},
];

const Explore = () => {
	const [recipes, setRecipes] = useState(mockRecipes);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [sortOption, setSortOption] = useState("title"); // Sort by title by default

	// Categories (could be dynamic from API in a real app)
	const categories = [
		"All",
		"Vegan",
		"Vegetarian",
		"Dessert",
		"Italian",
		"Indian",
	];

	useEffect(() => {
		// Filter by category
		let filteredRecipes = mockRecipes;

		if (selectedCategory && selectedCategory !== "All") {
			filteredRecipes = filteredRecipes.filter(
				(recipe) => recipe.category === selectedCategory,
			);
		}

		// Search filter
		if (searchQuery) {
			filteredRecipes = filteredRecipes.filter((recipe) =>
				recipe.title.toLowerCase().includes(searchQuery.toLowerCase()),
			);
		}

		// Sort by selected option
		if (sortOption === "title") {
			filteredRecipes = filteredRecipes.sort((a, b) =>
				a.title.localeCompare(b.title),
			);
		} else if (sortOption === "category") {
			filteredRecipes = filteredRecipes.sort((a, b) =>
				a.category.localeCompare(b.category),
			);
		}

		setRecipes(filteredRecipes);
	}, [searchQuery, selectedCategory, sortOption]);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
				Explore Recipes
			</h1>

			{/* Search and Filters */}
			<div className="flex justify-between items-center mb-6">
				<div className="w-full md:w-1/3">
					<input
						type="text"
						className="w-full px-4 py-2 border rounded-lg"
						placeholder="Search recipes..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>

				<div className="w-full md:w-1/3 flex justify-between space-x-4">
					<select
						className="px-4 py-2 border rounded-lg"
						value={selectedCategory}
						onChange={(e) => setSelectedCategory(e.target.value)}
					>
						<option value="">All Categories</option>
						{categories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>

					<select
						className="px-4 py-2 border rounded-lg"
						value={sortOption}
						onChange={(e) => setSortOption(e.target.value)}
					>
						<option value="title">Sort by Title</option>
						<option value="category">Sort by Category</option>
					</select>
				</div>
			</div>

			{/* Recipe Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{recipes.map((recipe) => (
					<div
						key={recipe.id}
						className="bg-white rounded-lg shadow-lg overflow-hidden"
					>
						<img
							src={recipe.image}
							alt={recipe.title}
							className="w-full h-64 object-cover"
						/>
						<div className="p-4">
							<h2 className="text-xl font-semibold text-gray-800">
								{recipe.title}
							</h2>
							<p className="text-gray-600 mt-2">{recipe.description}</p>
							<p className="text-gray-500 text-sm mt-2 italic">
								{recipe.category}
							</p>
						</div>
						<div className="px-4 pb-4">
							<button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
								View Recipe
							</button>
						</div>
					</div>
				))}
			</div>

			{/* No results message */}
			{recipes.length === 0 && (
				<p className="text-center text-gray-600 mt-8">
					No recipes found for your search.
				</p>
			)}
		</div>
	);
};

export default Layout()(Explore);
