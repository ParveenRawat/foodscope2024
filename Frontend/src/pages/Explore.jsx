import React, { useState } from "react";
import { recipesData } from "./recipesData";
import Layout from "../components/layout/Layout";
import Card from "../components/hero_page_components/Card"; // Import the Card component

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

    // Function to handle the search input
    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Filter the recipes based on the search term
        const filtered = recipesData.filter((recipe) =>
            recipe.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredRecipes(filtered);
    };

    return (
        <section className="bg-[#FFF9ED] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">
                    Explore Recipes
                </h2>

                {/* Search Bar */}
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search for a recipe..."
                        className="w-full max-w-lg p-3 border border-gray-300 rounded-lg bg-[#FFF9ED] text-[#333333] focus:outline-none focus:border-[#A3B9A2]"
                    />
                </div>

                {/* Recipes List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((recipe) => (
                            <Card
                                key={recipe.id}
                                title={recipe.name}
                                description={recipe.description}
                                image={recipe.image} // Ensure your `recipesData` includes `image`
                                onViewRecipe={() => alert(`View Recipe: ${recipe.name}`)}
                                onViewDetails={() => alert(`View Details: ${recipe.name}`)}
                            />
                        ))
                    ) : (
                        <p className="text-[#333333] text-center col-span-full">
                            No recipes found.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Layout()(Explore);
