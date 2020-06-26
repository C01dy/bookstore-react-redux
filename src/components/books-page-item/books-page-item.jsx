import React from 'react';
import './books-page-item.sass';
import { connect } from 'react-redux';
import { bookAddedToCart } from '../../actions';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const BooksPageItem = (props) => {
  const { id, coverImage, title, author, price } = props.book;

  const onBookAdded = () => {
    props.bookAddedToCart(id);
  };

  const bookInCart = () => {
    return props.cartItems.findIndex((item) => item.id === id) > -1 ? (
      <NavLink to="/cart">
        <div>В корзине</div>
      </NavLink>
    ) : (
      'Купить'
    );
  };

  return (
    <div className="books-page__item">
      <img className="book-img" src={coverImage} alt="..." />
      <div className="book-labels">
        <div className="book-label-top">
          <div className="book-label-top__title">{title}</div>
          <div className="book-label-top__author">{author}</div>
        </div>
        <div className="book-label-bottom">
          <div className="book-label-bottom__price">{price} руб.</div>
          <button onClick={onBookAdded} className={`book-label-bottom__btn`}>
            {bookInCart()}
          </button>
        </div>
      </div>
    </div>
  );
};

BooksPageItem.propTypes = {
  id: PropTypes.number,
  coverImage: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  bookAddedToCart: PropTypes.func,
  cartItems: PropTypes.array
};

const mapStateToProps = ({ cartItems }) => {
  return { cartItems };
};

const mapDispatchToProps = {
  bookAddedToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksPageItem);
