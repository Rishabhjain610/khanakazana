import React, { useState } from "react";
import chole from '../assets/chole.jpg'
import paneer from '../assets/paneer.jpg'
import pavbhaji from '../assets/pavbhaji.jpg'
import dosa from '../assets/dosa.jpg'
import biryani from '../assets/biryani.jpg'
import rajma from '../assets/rajma.jpg'
const recipes = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    image: paneer,
    ingredients: ["Paneer", "Tomatoes", "Onion", "Cream", "Spices"],
    instructions: "Cook onions and tomatoes, blend to a paste, add paneer and spices, and cook until thick."
  },
  {
    id: 2,
    name: "Chole Bhature",
    image: chole,
    ingredients: ["Chickpeas", "Flour", "Yogurt", "Spices"],
    instructions: "Soak and cook chickpeas with spices. Knead flour with yogurt, roll, and deep-fry to make bhature."
  },
  {
    id: 3,
    name: "Pav Bhaji",
    image: pavbhaji,
    ingredients: ["Potatoes", "Tomatoes", "Peas", "Butter", "Pav Bhaji Masala"],
    instructions: "Mash boiled vegetables, cook with butter and spices, and serve with buttered pav."
  },
  {
    id: 4,
    name: "Biryani",
    image: biryani,
    ingredients: ["Rice", "Chicken/Mutton/Vegetables", "Yogurt", "Spices"],
    instructions: "Layer marinated meat and rice, cook on low heat, and garnish with fried onions."
  },
  {
    id: 5,
    name:"Dosa",
    image: dosa,
    ingredients: ["Rice", "Urad Dal", "Salt", "Oil"],
    instructions: "Ferment rice and dal batter, spread on a hot pan, cook until crispy, and serve with chutney."
  },
  {
    id: 6,
    name: "Rajma Chawal",
    image: rajma,
    ingredients: ["Kidney Beans", "Tomatoes", "Onions", "Rice", "Spices"],
    instructions: "Cook kidney beans in a tomato gravy and serve with steamed rice."
  },
];

const Receipe = () => {
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto mt-20">
      {/* Search Bar */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search for a recipe..."
          className="p-3 border rounded-l w-full focus:outline-none shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-red-500 text-white px-4 py-3 rounded-r font-semibold">
          Search
        </button>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white cursor-pointer"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-semibold text-gray-800">{recipe.name}</h2>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No recipes found</p>
        )}
      </div>

      {/* Recipe Details */}
      {selectedRecipe && (
        <div className="mt-8 p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold mb-4">{selectedRecipe.name}</h2>
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.name}
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Ingredients:</h3>
          <ul className="list-disc pl-5 mb-4">
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold">Instructions:</h3>
          <p className="text-gray-700">{selectedRecipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default Receipe;
