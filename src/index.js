import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import BookstoreService from './services/bookstore-service';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

export const bookstoreServiceContext = React.createContext();
const bookstoreService = new BookstoreService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <bookstoreServiceContext.Provider value={bookstoreService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </bookstoreServiceContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
