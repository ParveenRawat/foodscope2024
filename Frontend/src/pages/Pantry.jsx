// Pantry.js
import React, { useState } from 'react';

// Sample data for recipe generation (in a real app, this would come from an API)
const sampleRecipes = [
    { id: 1, name: "Vegetable Stir Fry", ingredients: ["bell pepper", "onion", "carrot"] },
    { id: 2, name: "Avocado Toast", ingredients: ["avocado", "bread"] },
    { id: 3, name: "Spaghetti Marinara", ingredients: ["tomato", "garlic", "pasta"] },
    { id: 4, name: "Chicken Salad", ingredients: ["chicken", "lettuce", "tomato", "cucumber"] },
    { id: 5, name: "Mushroom Risotto", ingredients: ["mushroom", "rice", "onion"] },
];

const Pantry = () => {
    const [ingredients, setIngredients] = useState([]);
    const [input, setInput] = useState("");
    const [suggestedRecipes, setSuggestedRecipes] = useState([]);

    // Function to add an ingredient
    const addIngredient = () => {
        if (input && !ingredients.includes(input.toLowerCase())) {
            setIngredients([...ingredients, input.toLowerCase()]);
            setInput("");
        }
    };

    // Function to remove an ingredient
    const removeIngredient = (ingredient) => {
        setIngredients(ingredients.filter(item => item !== ingredient));
    };

    // Simulate AI-based Recipe Generation based on Ingredients
    const generateRecipes = () => {
        const matches = sampleRecipes.filter(recipe =>
            recipe.ingredients.every(ing => ingredients.includes(ing))
        );
        setSuggestedRecipes(matches);
    };

    return (
        <section className="bg-[#FFF9ED] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">My Pantry</h2>

                {/* Input to Add Ingredients */}
                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add an ingredient..."
                        className="w-full max-w-lg p-3 border border-gray-300 rounded-l-lg bg-[#FFF9ED] text-[#333333] focus:outline-none focus:border-[#A3B9A2]"
                    />
                    <button
                        onClick={addIngredient}
                        className="bg-[#E27D60] text-white font-bold py-3 px-4 rounded-r-lg hover:bg-[#C2583A] transition duration-300"
                    >
                        Add
                    </button>
                </div>

                {/* Display Added Ingredients */}
                <div className="flex flex-wrap gap-4 mb-8 justify-center">
                    {ingredients.map((ingredient, index) => (
                        <span key={index} className="bg-[#D9E4DD] text-[#4D5D4B] px-4 py-2 rounded-full font-bold flex items-center">
                            {ingredient}
                            <button onClick={() => removeIngredient(ingredient)} className="ml-2 text-[#E27D60]">✕</button>
                        </span>
                    ))}
                </div>

                {/* Generate Recipe Suggestions */}
                <div className="text-center">
                    <button
                        onClick={generateRecipes}
                        className="bg-[#A3B9A2] text-white font-bold py-3 px-6 rounded hover:bg-[#7A947A] transition duration-300"
                    >
                        Generate Recipes
                    </button>
                </div>

                {/* Display Suggested Recipes */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {suggestedRecipes.length > 0 ? (
                        suggestedRecipes.map(recipe => (
                            <div key={recipe.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                                <h3 className="text-2xl font-bold text-[#4D5D4B] mb-2">{recipe.name}</h3>
                                <p className="text-[#333333] mb-4">Ingredients: {recipe.ingredients.join(", ")}</p>
                                <a
                                    href={`/recipe/${recipe.id}`}
                                    className="inline-block py-2 px-4 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
                                >
                                    View Recipe
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className="text-[#333333] text-center col-span-full">No matching recipes found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Pantry;
