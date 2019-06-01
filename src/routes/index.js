import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as routesType from '../constants/routes';

import {
  Landing,
  Account,
  Home,
  PasswordForget,
  SignIn,
  SignUp,
  Admin,
  PasswordChange,
} from '../pages';
import { SignOutButton } from '../components/Button';
import { withFirebase } from '../firebase';

const Navigation = ({ authUser }) => (
  <div>
    {
      authUser ? <NavigationAuth /> :
      <NavigationNonAuth />}
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={routesType.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routesType.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routesType.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton fullWidth={false} />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routesType.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routesType.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

const App = ({ firebase }) => {
  const [ authUser, setAuthUser ] = useState(null);
  useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {

        authUser ? setAuthUser(authUser) :
        setAuthUser(authUser);
    });
  }, []);

  return (
    <Router>
      <Fragment>
        <Navigation authUser={authUser} />
        <hr />
        <Route exact path={routesType.LANDING} component={Landing} />
        <Route path={routesType.HOME} component={Home} />
        <Route path={routesType.PASSWORD_FORGET} component={PasswordForget} />
        <Route path={routesType.SIGN_IN} component={SignIn} />
        <Route path={routesType.SIGN_UP} component={SignUp} />
        <Route path={routesType.ACCOUNT} component={Account} />
        <Route path={routesType.ADMIN} component={Admin} />
        <Route path={routesType.PASSWORD_CHANGE} component={PasswordChange} />
      </Fragment>
    </Router>
  );
};
export default withFirebase(App);
