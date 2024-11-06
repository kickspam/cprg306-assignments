"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="mb-4 flex justify-center">
        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          Sort by Category
        </button>
      </div>
      <ul className="space-y-4 flex flex-col items-center">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
