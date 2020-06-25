import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  BOOK_ADDED_TO_CART,
  BOOK_DELETED_FROM_CART,
  BOOKS_DELETED_FROM_CART,
  FILTERED_BOOKS_PRICE,
} from '../constants/action-types';

const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  };
};

const fetchBooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

const fetchBooksFailure = (err) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: err,
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: bookId,
  };
};

const bookDeletedFromCart = (bookId) => {
  return {
    type: BOOK_DELETED_FROM_CART,
    payload: bookId,
  };
};

const booksDeletedFromCart = (bookId) => {
  return {
    type: BOOKS_DELETED_FROM_CART,
    payload: bookId,
  };
};

const filteredBooksPrice = (sortType) => {
  return {
    type: FILTERED_BOOKS_PRICE,
    payload: sortType,
  };
};

export {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure,
  bookAddedToCart,
  bookDeletedFromCart,
  booksDeletedFromCart,
  filteredBooksPrice,
};
