import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  BOOK_ADDED_TO_CART,
  BOOK_DELETED_FROM_CART,
  BOOKS_DELETED_FROM_CART,
  FILTERED_BOOKS_PRICE,
} from '../constants/action-types';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
  cartItems: [],
  filterPriceType: 'default',
};

const createItem = (cartItem, book, quantity) => {
  if (cartItem) {
    return {
      ...cartItem,
      price: quantity > 0 ? cartItem.price + book.price  : cartItem.price - book.price,
      count: cartItem.count + quantity,
    };
  } else {
    return {
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      country: book.country,
      coverImage: book.coverImage,
      count: book.count,
    };
  }
};

const updateCartItems = (state, bookId, quantity) => {
  const { books, cartItems } = state;

  const book = books.find(({ id }) => id === bookId);
  const itemIdx = cartItems.findIndex(({ id }) => id === bookId);
  const cartItem = cartItems[itemIdx];

  if (itemIdx < 0) {
    return {
      ...state,
      cartItems: [...cartItems, createItem(cartItem, book, quantity)],
    };
  } else {
    return {
      ...state,
      cartItems: [
        ...cartItems.slice(0, itemIdx),
        createItem(cartItem, book, quantity),
        ...cartItems.slice(itemIdx + 1),
      ],
    };
  }
};

export const reducer = (state = initialState, action) => {
  const { cartItems } = state;
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
      return updateCartItems(state, action.payload, 1);
    case BOOK_DELETED_FROM_CART:
      return updateCartItems(state, action.payload, -1);

    case BOOKS_DELETED_FROM_CART:
      const removedBookId = action.payload;
      const idx = cartItems.findIndex(({ id }) => id === removedBookId);
      return {
        ...state,
        cartItems: [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)],
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
