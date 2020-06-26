import React from 'react';
import './price-button.sass';
import PropTypes from 'prop-types';

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

PriceButton.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  idx: PropTypes.number,
  onFilterChange: PropTypes.func,
  activeItem: PropTypes.number,
};

export default PriceButton;
