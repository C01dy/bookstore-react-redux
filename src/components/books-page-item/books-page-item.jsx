import React from 'react';
import './books-page-item.sass';
import { connect } from 'react-redux';
import {bookAddedToCart, bookDeletedFromCart} from '../../actions';

const BooksPageItem = (props) => {
  const { id ,coverImage, title, author, price } = props.book;

  const onBookAdded= () => {
    return props.bookAddedToCart(id)
  }

  const onBookDeleted= () => {
    return props.bookDeletedFromCart(id)
  }

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
          <button onClick={onBookAdded} className="book-label-bottom__btn">Купить</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  bookAddedToCart,
  bookDeletedFromCart
}

export default connect(null, mapDispatchToProps)(BooksPageItem);
