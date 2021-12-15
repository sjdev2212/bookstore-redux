/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducer from './redux/books/books';
import './index.css';
import App from './App';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
