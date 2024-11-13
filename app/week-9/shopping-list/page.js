"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
  };

  const handleItemSelect = (itemName) => {
    // Clean up item name by removing emojis and extra text after comma
    const cleanName = itemName
      .split(',')[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C][\uDC00-\uDFFF]|[\uD83D][\uDC00-\uDFFF]|[\u2011-\u26FF]|[\uD83E][\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanName);
  };

  return (
    <main className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="md:w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
