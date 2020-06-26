import React, { useContext, useEffect } from 'react';
import { bookstoreServiceContext } from '../../index';
import BooksPage from '../../components/books-page/';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

BooksPageContainer.propTypes = {
  fetchBooksRequest: PropTypes.func,
  fetchBooksSuccess: PropTypes.func,
  fetchBooksFailure: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  books: PropTypes.array,
  filterPriceType: PropTypes.string,
}

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
