import React from 'react';
import './header.sass';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ cartItems }) => {

  const totalPrice = () => {
    if (cartItems.length) {
      return cartItems.map((item) => item.price).reduce((a, b) => a + b);
    } else {
      return 0
    }
      
  };

  return (
    <div className="header">
      <div className="header__content container">
        <NavLink to="/">
          <div className="header__logo">Bookstore</div>
        </NavLink>
        <NavLink to="/cart">
          <div className="header__cart-link">
            <span className="cart-total">{totalPrice()} <i className="fas fa-ruble-sign"></i></span>
            <i className="fas fa-shopping-basket cart-icon"></i>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

Header.propTypes = {
  cartItems: PropTypes.array,
}

const mapStateToProps = ({ cartItems }) => {
  return { cartItems };
};

export default connect(mapStateToProps)(Header);
