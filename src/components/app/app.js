import React from 'react';
import './app.sass';
import Header from '../header';
import Navbar from '../navbar';
import BooksPageContainer from '../books-page';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container flex">
        <Navbar/>
        <BooksPageContainer/>
      </div>
    </div>
  );
}

export default App;
