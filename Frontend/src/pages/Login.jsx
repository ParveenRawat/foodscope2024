import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/layout/Layout";

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerateRecipe = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/generate-recipe", {
        ingredients,
        model: "llama3-8b-8192",
      });
      setRecipe(response.data.recipe);
      setError(null);
    } catch (err) {
      setError("Failed to generate recipe. Please try again.");
      setRecipe(null);
    }
  };

  return (
    <div className="bg-cream min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Recipe Generator</h1>

      {/* Combined Input and Output Container */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow p-6">
        {/* Input Form */}
        <div className="mb-6">
          <label
            className="block mb-2"
            style={{
              color: "#4D5D4B",
              fontSize: "16px",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Enter Ingredients:
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="e.g., tomato, basil, mozzarella"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          <button
            onClick={handleGenerateRecipe}
            className="w-full text-white py-2 px-4 rounded-lg"
            style={{ backgroundColor: "#E27D60" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#d66a4d")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#E27D60")}
          >
            Generate Recipe
          </button>
        </div>

        {/* Output Section */}
        {recipe && (
          <div className="border-t border-gray-300 pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Recipe Suggestion</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {recipe}
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-4 text-red-600 font-medium">{error}</div>
        )}
      </div>
    </div>
  );
};

export default Layout()(RecipeGenerator);