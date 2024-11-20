"use client";

import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';

const Page = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  const loadItems = async (user) => {
    const items = await getItems(user.uid);
    setItems(items);
  };

  useEffect(() => {
    // TODO: Get current user and call loadItems
    // loadItems(user);
  }, []); // Empty dependency array since we only want to load items once when mounted

  const handleAddItem = async (newItem) => {
    // TODO: Get current user
    const user = { uid: 'test' }; // Temporary placeholder
    const id = await addItem(user.uid, newItem);
    setItems([...items, { ...newItem, id }]);
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
