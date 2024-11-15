// ExplorePage.js
import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/hero_page_components/Card"; // Import the Card component
import axios from "axios";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { dishes } from "../constants/constants";
import { recipesData } from "./recipesData";

function removeTags(input) {
    return input.replace(/<\/?[^>]+(>|$)/g, ""); // Regex to match and remove HTML tags
}
const FindRecipe = ({ search }) => {
    const [recipes, setRecipes] = useState([]); // Store fetched recipes
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                setLoading(true); // Start loading
                setError(null); // Reset error

                const response = await axios.get(
                    `https://cosylab.iiitd.edu.in/recipe-search/recipe?pageSize=10&searchText=${search}`,
                );
                console.log(response.data.payload.data);

                if (response?.data?.payload?.data) {
                    response.data.payload.data.forEach((element) => {
                        element.Recipe_title = removeTags(element.Recipe_title);
                    });

                    console.log(response.data.payload.data);
                    const fetchedRecipes = response.data.payload.data;
                    console.log("Fetched Recipes:", fetchedRecipes);
                    setRecipes(fetchedRecipes);
                } else {
                    console.log("No recipes found in the response.");
                    setRecipes([]);
                }
            } catch (err) {
                console.error("An error occurred while fetching recipes:", err);
                setError("Unable to fetch recipes. Please try again.");
                setRecipes([]);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchRecipes();
    }, [search]); // Run when 'search' prop changes

    // Rendering logic
    if (loading) {
        return <p>Loading recipes...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (recipes.length === 0) {
        return <p>No recipes found.</p>;
    }

    return (
        <div>
            <div className="flex flex-wrap justify-center flex-row gap-4">
                {recipes.map((recipe, index) => (
                    <Card
                        key={recipe._id}
                        title={recipe.Recipe_title}
                        image={recipe.img_url}
                        url={recipe.url}
                    />
                ))}
            </div>
        </div>
    );
};

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

    // Function to handle the search input
    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Filter the recipes based on the search term
        const filtered = recipesData.filter((recipe) =>
            recipe.name.toLowerCase().includes(term.toLowerCase()),
        );
        setFilteredRecipes(filtered);
    };

    return (
        <section className="min-h-screen py-12  bg-gradient-to-b from-green to-green via-cream">
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
                        filteredRecipes.map((recipe) => {
                            return (
                                <Card
                                    key={recipe.id}
                                    title={recipe.name}
                                    description={recipe.description}
                                    image={recipe.image} // Ensure your `recipesData` includes `image`
                                    url={recipe.url}
                                    res={recipe}
                                />
                            );
                        })
                    ) : (
                        <p className="text-[#333333] text-center col-span-full">
                            <FindRecipe search={searchTerm} />
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Layout()(Explore);
