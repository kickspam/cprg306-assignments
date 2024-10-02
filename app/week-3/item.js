import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">{name}</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
          {quantity}
        </span>
      </div>
      <p className="text-gray-600 mt-2">{category}</p>
    </li>
  );
};

export default Item;
