//https://dev.to/andrejnaumovski/async-actions-in-redux-with-rxjs-and-redux-observable-efg
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import App from './TF';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
