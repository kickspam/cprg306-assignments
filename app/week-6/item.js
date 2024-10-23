import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{quantity}</span>
      <span>{category}</span>
    </li>
  );
};

export default Item;
