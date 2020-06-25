import React from 'react';
import './app.sass';
import Header from '../header';
import Navbar from '../navbar';
import Cart from '../cart';
import BooksPageContainer from '../../containers/books-page-container';
import { Route } from 'react-router-dom';

const renderCartPage = (
  <Route
    path="/cart"
    render={() => <Cart />}/>
);

const renderHomePage = (
  <Route
    path="/"
    exact
    render={() => (
      <>
        <Navbar />
        <BooksPageContainer />
      </>
    )}
  />
);

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container flex">
        {renderHomePage}
        {renderCartPage}
      </div>
    </div>
  );
}

export default App;
