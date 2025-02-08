import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from './App.js';
import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

