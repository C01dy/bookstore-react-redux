import React, { useState, useEffect, useRef } from 'react';
import './navbar.sass';
import { connect } from 'react-redux';
import { filteredBooksPrice } from '../../actions';
import PriceButton from '../price-button';

const Navbar = ({ filteredBooksPrice }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sortRef = useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup((prevState) => !prevState);
  };

  const handleOutClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const filterChange = (idx, name) => {
    setActiveItem(idx);
    filteredBooksPrice(name);
  };

  const priceItems = [
    { name: 'default', label: 'По умолчанию' },
    { name: 'ascending', label: 'Сначала дешевые' },
    { name: 'descending', label: 'Сначала дорогие' },
  ];

  const renderPopup = () => {
    if (visiblePopup) {
      return (
        <ul className="navbar__price-items">
          {priceItems.map((props, idx) => (
            <PriceButton
              {...props}
              idx={idx}
              key={props.name + idx}
              activeItem={activeItem}
              onFilterChange={filterChange}
            />
          ))}
        </ul>
      );
    }
    return null;
  };

  const rotateArrow = () => {
    if (visiblePopup) {
      return {
        transform: "rotate(180deg)"
      }
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutClick);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__price-filter">
        <div>
          <div ref={sortRef} className="navbar__price-input-group">
            <span onClick={toggleVisiblePopup} className="navbar__price-btn">
              Сортировать <i className="fas fa-chevron-down popup-arrow" style={rotateArrow()}></i>
            </span>
            {renderPopup()}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  filteredBooksPrice,
};

const mapStateToProps = ({ books }) => {
  return { books };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
