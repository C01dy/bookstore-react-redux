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
  filterPriceType: 'default',
};

const createItem = (cartItem, book) => {
  if (cartItem) {
    return {
      ...cartItem,
      price: book.price + cartItem.price,
      count: cartItem.count + 1,
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

const bookAdded = (itemIdx, items, item, book, state) => {
  if (itemIdx < 0) {
    return {
      ...state,
      cartItems: [...items, createItem(item, book)],
    };
  } else {
    return {
      ...state,
      cartItems: [
        ...items.slice(0, itemIdx),
        createItem(item, book),
        ...items.slice(itemIdx + 1),
      ],
    };
  }
};

export const reducer = (state = initialState, action) => {
  const { books, cartItems } = state;
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
      const bookId = action.payload;
      const book = books.find(({ id }) => id === bookId);
      const itemIdx = cartItems.findIndex(({ id }) => id === bookId);
      const cartItem = cartItems[itemIdx];

      return bookAdded(itemIdx, cartItems, cartItem, book, state);

    case BOOK_DELETED_FROM_CART:
      const removedBookId = action.payload;
      const idx = books.findIndex(({ id }) => id === removedBookId);
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
