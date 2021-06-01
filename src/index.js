// Import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Import Bootstrap files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Import app
import App from './App';
// Import store
import storeFn from './redux/store';
const store = storeFn();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
