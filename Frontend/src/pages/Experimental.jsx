import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/layout/Layout";

const RecipeGenerator = () => {
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  const handleAddIngredient = () => {
    if (ingredient.trim() && !ingredientsList.includes(ingredient.trim())) {
      setIngredientsList((prevList) => [...prevList, ingredient.trim()]);
      setIngredient(""); // Clear the input after adding
    }
  };

  const handleGenerateRecipe = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/generate-recipe", {
        ingredients: ingredientsList.join(", "), // Send ingredients as a string
        model: "llama3-8b-8192",
      });
      setRecipe(response.data.recipe);
      setError(null);
    } catch (err) {
      setError("Failed to generate recipe. Please try again.");
      setRecipe(null);
    }
  };

  const handleRemoveIngredient = (ingredientToRemove) => {
    setIngredientsList(ingredientsList.filter((item) => item !== ingredientToRemove));
  };

  // Function to convert text between stars to bold
  const formatRecipeText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Replaces text between ** with <strong> tags
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
          <div className="flex items-center">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., tomato, basil, mozzarella"
            />
            <button
              onClick={handleAddIngredient}
              className="flex-none ml-1 px-2 py-3 bg-[#E27D60] hover:bg-[#C2583A] transition duration-300 text-black rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14"></path>
              </svg>
            </button>
          </div>

          {/* Ingredients List */}
          {ingredientsList.length > 0 && (
            <div className="mt-4">
              <h3 className="text-gray-800 font-medium mb-2">Ingredients Added:</h3>
              <div className="flex flex-wrap gap-2">
                {ingredientsList.map((ingredient, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center"
                  >
                    <span>{ingredient}</span>
                    <button
                      onClick={() => handleRemoveIngredient(ingredient)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleGenerateRecipe}
            className="w-full text-white py-2 px-4 rounded-lg mt-4"
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
            <p
              className="text-gray-700 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: formatRecipeText(recipe), // Render formatted recipe text with bold tags
              }}
            />
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