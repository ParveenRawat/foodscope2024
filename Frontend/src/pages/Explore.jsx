// ExplorePage.js
import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { dishes } from "../constants/constants";
import { recipesData } from "./recipesData";

axios
    .get("https://cosylab.iiitd.edu.in/recipe/" + 5)
    .then((Response) => {
        console.log(Response);
    })
    .catch(console.log("Some Error Occured"));
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
            <h1>Recipes for "{search}"</h1>
            <ul>
                {recipes.map((recipe, index) => (
                    <div
                        key={recipe._id}
                        className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
                    >
                        <h3 className="text-2xl font-bold text-[#4D5D4B] mb-2">
                            {recipe.Recipe_title}
                        </h3>
                        <p className="text-[#333333] mb-4">{recipe.description}</p>
                        <a
                            href={`/recipe/${recipe._id}`}
                            className="inline-block py-2 px-4 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
                        >
                            View Recipe
                        </a>
                    </div>
                ))}
            </ul>
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
                            <div
                                key={recipe.id}
                                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
                            >
                                <h3 className="text-2xl font-bold text-[#4D5D4B] mb-2">
                                    {recipe.name}
                                </h3>
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
                        <p className="text-[#333333] text-center col-span-full">
                            <FindRecipe search={searchTerm} />
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

//
// <header className="App-header">
//                         <div style={{ width: 400 }}>
//                             <ReactSearchAutocomplete
//                                 onSelect={(item) => {
//                                     setSearchTerm(item.name);
//                                     handleSearch(item);
//                                 }}
//                                 items={dishes}
//                             />
//                         </div>
//                     </header>
export default Layout()(Explore);
