import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import App from './App';
// import App from './pages/AIPages/StylesTransform';
import Firebase, { FirebaseContext } from './firebase';
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

// import App from './containers/TensorflowLearning/NumbersCNN';
// import App from './containers/TensorflowLearning/Easy2DTensor';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
