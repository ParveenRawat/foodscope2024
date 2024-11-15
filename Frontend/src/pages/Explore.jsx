// ExplorePage.js
import React, { useState } from 'react';
import { recipesData } from './recipesData';

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

    // Function to handle the search input
    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        
        // Filter the recipes based on the search term
        const filtered = recipesData.filter(recipe =>
            recipe.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredRecipes(filtered);
    };

    return (
        <section className="bg-[#FFF9ED] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">Explore Recipes</h2>

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
                        filteredRecipes.map(recipe => (
                            <div key={recipe.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                                <h3 className="text-2xl font-bold text-[#4D5D4B] mb-2">{recipe.name}</h3>
                                <p className="text-[#333333] mb-4">{recipe.description}</p>
                                <a
                                    href={`/recipe/${recipe.id}`}
                                    className="inline-block py-2 px-4 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
                                >
                                    View Recipe
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className="text-[#333333] text-center col-span-full">No recipes found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Explore;
