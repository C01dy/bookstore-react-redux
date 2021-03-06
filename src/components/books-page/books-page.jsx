import React from 'react';
import './books-page.sass';
import BooksPageItem from '../books-page-item';
import { filterPrice } from '../../filter-price-fn';
import RenderChecker from '../render-checker/render-checker';
import PropTypes from 'prop-types';

const BooksPage = (props) => {
  const { books, isLoading, error, filterPriceType } = props;

  const renderItems = () => {
    return (
      <RenderChecker isLoading={isLoading} hasError={error}>
        <div className="books-page__items">
          {filterPrice(filterPriceType, books).map((book) => (
            <BooksPageItem key={book.id} book={book} inCart={book.inCart} />
          ))}
        </div>
      </RenderChecker>
    );
  };

  return <div className="books-page">{renderItems()}</div>;
};

BooksPage.propTypes = {
  books: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  filterPriceType: PropTypes.string,
};

export default BooksPage;
