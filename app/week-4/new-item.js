"use client";

import { useState } from "react";

const NewItem = () => {
  // Initialize state variables
  const [quantity, setQuantity] = useState(1);

  // Function to increment quantity
  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  // Function to decrement quantity
  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Quantity: ${quantity}`);
    setQuantity(1); // Reset quantity after form submission
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md w-64">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={decrement}
          className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          type="button"
          onClick={increment}
          className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default NewItem;
