import React from 'react';
import './cart.sass';
import { connect } from 'react-redux';
import {
  bookAddedToCart,
  bookDeletedFromCart,
  booksDeletedFromCart,
} from '../../actions';

const Cart = (props) => {
  const {
    cartItems,
    bookAddedToCart,
    bookDeletedFromCart,
    booksDeletedFromCart,
  } = props;

  const bookDelete = (id, count) => {
    if (count === 1) {
      return booksDeletedFromCart(id);
    }
    return bookDeletedFromCart(id);
  };

  return (
    <>
      <table className="cart">
        <caption>
          <div className="cart__caption-title">Корзина товаров</div>
        </caption>
        <thead>
          <tr>
            <th>Товар</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ title, count, price, id }) => {
            return (
              <tr key={id}>
                <td className="title">{title}</td>
                <td className="count-label">{count}</td>
                <td className="price-label">
                  {price} <i className="fas fa-ruble-sign"></i>
                </td>
                <td>
                  <span className="cart-btns-wrap">
                    <i
                      onClick={() => bookAddedToCart(id)}
                      className="fas fa-plus-square inc-item-btn cart__btn"
                    ></i>
                    <i
                      onClick={() => bookDelete(id, count)}
                      className="fas fa-minus-square dec-item-btn cart__btn"
                    ></i>
                    <i
                      onClick={() => booksDeletedFromCart(id)}
                      className="fas del-item-btn fa-trash cart__btn"
                    ></i>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {!cartItems.length ? (
        <div className="cart-empty">
          <i className="fas fa-shopping-basket cart-empty-icon"></i>
          <p className="cart-empty-text">Ваша корзина пуста</p>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = ({ cartItems }) => {
  return { cartItems };
};

const mapDispatchToProps = {
  bookAddedToCart,
  bookDeletedFromCart,
  booksDeletedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
