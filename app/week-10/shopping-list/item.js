import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li 
      onClick={() => onSelect(name)}
      className="w-full p-4 border rounded-lg shadow hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 flex justify-between items-center"
    >
      <span className="font-medium">{name}</span>
      <span className="text-gray-600">Quantity: {quantity}</span>
      <span className="text-gray-600 italic">{category}</span>
    </li>
  );
};

export default Item;
