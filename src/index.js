import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Firebase, { FirebaseContext } from './firebase';
// import App from './components/App/TrainModel';
// import App from './components/App/';
import App from './routes/';

import withRootTheme from './styles/withRootTheme';
import * as serviceWorker from './serviceWorker';

const Index = withRootTheme(App);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <Index />
      </SnackbarProvider>
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
