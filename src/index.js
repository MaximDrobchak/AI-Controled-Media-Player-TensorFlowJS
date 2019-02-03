//https://dev.to/andrejnaumovski/async-actions-in-redux-with-rxjs-and-redux-observable-efg
import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStateProvider } from './store';

import App from './TF';

ReactDOM.render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>,
  document.getElementById('root'),
);
