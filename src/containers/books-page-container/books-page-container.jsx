import React, { useContext, useEffect } from 'react';
import { bookstoreServiceContext } from '../../index';
import BooksPage from '../../components/books-page/';
import { connect } from 'react-redux';

import {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure,
} from '../../actions';

export const BooksPageContainer = (props) => {
  const bookstore = useContext(bookstoreServiceContext);
  const { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } = props;

  useEffect(() => {
    fetchBooksRequest();
    bookstore
      .getBooks()
      .then((books) => fetchBooksSuccess(books))
      .catch((err) => fetchBooksFailure(err));
  }, []);

  return <BooksPage {...props} />;
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
  fetchBooksFailure,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksPageContainer);
