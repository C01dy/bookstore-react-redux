import React from 'react';
import './app.sass';
import Header from '../header';
import Navbar from '../navbar';
import Cart from '../cart'
import BooksPageContainer from '../../containers/books-page-container'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container flex">
        <Navbar/>
        <BooksPageContainer/>
        <Cart/>
      </div>
    </div>
  );
}

export default App;
