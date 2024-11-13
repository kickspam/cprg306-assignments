"use client";

import { useState, useEffect } from 'react';

// Fetch meal ideas from API
const fetchMealIdeas = async (ingredient) => {
  if (!ingredient) return [];
  
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      <ul className="space-y-4">
        {meals.map((meal) => (
          <li 
            key={meal.idMeal}
            className="p-4 border rounded shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <img 
                src={meal.strMealThumb} 
                alt={meal.strMeal}
                className="w-20 h-20 object-cover rounded"
              />
              <span>{meal.strMeal}</span>
            </div>
          </li>
        ))}
      </ul>
      {meals.length === 0 && (
        <p className="text-gray-500 text-center">
          {ingredient ? "No meal ideas found" : "Select an ingredient to see meal ideas"}
        </p>
      )}
    </div>
  );
};

export default MealIdeas;
