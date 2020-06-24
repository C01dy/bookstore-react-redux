import React, { useContext, useEffect } from 'react';

import './books-page.sass';
import { bookstoreServiceContext } from '../../index';
import { connect } from 'react-redux';

import {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure,
} from '../../actions';
import BooksPageItem from '../books-page-item';

export const BooksPageContainer = (props) => {
  const bookstore = useContext(bookstoreServiceContext);
  const {
    fetchBooksRequest,
    fetchBooksSuccess,
    fetchBooksFailure,
    books,
    isLoading,
    error,
    filterPriceType,
  } = props;

  useEffect(() => {
    fetchBooksRequest();
    bookstore
      .getBooks()
      .then((books) => fetchBooksSuccess(books))
      .catch((err) => fetchBooksFailure(err));
  }, []);

  return (
    <BooksPage
      isLoading={isLoading}
      error={error}
      books={books}
      filterPriceType={filterPriceType}
    />
  );
};

const BooksPage = ({ books, isLoading, error, filterPriceType }) => {
  const filterPrice = (filterType, arr) => {
    let newArr = arr.slice()
    let sorted = newArr.sort((a, b) => a.price - b.price);
    switch (filterType) {
      case 'default':
        return arr;
      case 'ascending':
        return sorted;
      case 'descending':
        return sorted.reverse();
      default:
        return arr;
    }
  };

  const renderItems = () => {
    if (isLoading) {
      return <h1>LOADING...</h1>;
    }

    if (error) {
      return <h1>Error</h1>;
    }

    return (
      <div className="books-page__items">
        {filterPrice(filterPriceType, books).map((book) => (
          <BooksPageItem key={book.id} book={book} />
        ))}
      </div>
    );
  };

  return <div className="books-page">{renderItems()}</div>;
};

const mapStateToProps = ({ isLoading, error, books, filterPriceType }) => {
  return {
    isLoading,
    error,
    books,
    filterPriceType,
  };
};

const mapDispatchToProps = {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksPageContainer);
