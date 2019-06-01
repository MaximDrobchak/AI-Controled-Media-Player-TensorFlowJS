import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dewider from './Dewider';
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
import { AuthUserContext, withAuthentication } from '../firebase';

const Navigation = () => {
  const authUser = useContext(AuthUserContext);
  if (authUser) {
    return <NavigationAuth />;
  }
  return <NavigationNonAuth />;
};

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
      <Link to={routesType.ADMIN}>Admin</Link>
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

const App = () => {
  return (
    <Router>
      <Dewider>
        <Route exact path={routesType.LANDING} component={Landing} />
        <Route path={routesType.HOME} component={Home} />
        <Route path={routesType.SIGN_IN} component={SignIn} />
        <Route path={routesType.SIGN_UP} component={SignUp} />
        <Route path={routesType.ACCOUNT} component={Account} />
        <Route path={routesType.ADMIN} component={Admin} />
      </Dewider>
    </Router>
  );
};
export default withAuthentication(App);
