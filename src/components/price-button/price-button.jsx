import React from 'react';
import './price-button.sass';

const PriceButton = ({ name, label, idx, onFilterChange, activeItem }) => {
  return (
    <li
      onClick={() => onFilterChange(idx, name)}
      key={name}
      className={`navbar__price-item ${
        activeItem === idx ? 'price-item-active' : ''
      }`}
    >
      {label}
    </li>
  );
};

export default PriceButton;
