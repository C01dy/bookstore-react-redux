import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  BOOK_ADDED_TO_CART,
  BOOK_DELETED_FROM_CART,
  FILTERED_BOOKS_PRICE,
} from '../constants/action-types';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
  cartItems: [],
  totalPrice: 128,
  filterPriceType: 'default',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        books: action.payload,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case BOOK_ADDED_TO_CART:
      console.log(state.books);
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIdx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === bookId
      );
      const cartItem = state.cartItems[itemIdx];
      let newItem;

      if (cartItem) {
        newItem = {
          ...cartItem,
          price: book.price + cartItem.price,
          count: cartItem.count + 1,
        };
      } else {
        newItem = {
          id: book.id,
          title: book.title,
          author: book.author,
          price: book.price,
          country: book.country,
          coverImage: book.coverImage,
          count: book.count,
        };
      }

      if (itemIdx < 0) {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIdx),
            newItem,
            ...state.cartItems.slice(itemIdx + 1),
          ],
        };
      }

    case BOOK_DELETED_FROM_CART:
      console.log(state.books);
      const id = action.payload;
      const idx = state.books.findIndex((book) => book.id === id);
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, idx),
          ...state.cartItems.slice(idx + 1),
        ],
      };
    case FILTERED_BOOKS_PRICE:
      return {
        ...state,
        filterPriceType: action.payload,
      };
    default:
      return state;
  }
};
