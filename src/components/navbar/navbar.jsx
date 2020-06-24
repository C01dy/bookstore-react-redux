import React, { useState, useEffect, useRef } from 'react';
import './navbar.sass';
import { connect } from 'react-redux';
import { filteredBooksPrice } from '../../actions';

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

  const onFilterChange = (idx, name) => {
    setActiveItem(idx);
    filteredBooksPrice(name);
  }

  const priceItems = [
    { name: 'default', label: 'По умолчанию' },
    { name: 'ascending', label: 'Сначала дешевые' },
    { name: 'descending', label: 'Сначала дорогие' },
  ];

  useEffect(() => {
    document.body.addEventListener('click', handleOutClick);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__price-filter">
        <div>
          <div ref={sortRef} className="navbar__price-input-group">
            <span onClick={toggleVisiblePopup} className="navbar__price-btn">
              Сортировать
            </span>
            {visiblePopup ? (
              <ul className="navbar__price-items">
                {priceItems.map(({ label, name }, idx) => (
                  <li
                    onClick={() => onFilterChange(idx, name)}
                    key={name}
                    className={`navbar__price-item ${
                      activeItem === idx ? 'price-item-active' : ''
                    }`}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            ) : null}
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
