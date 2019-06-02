import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dewider, SignOutButton } from '../components';
import * as routesType from '../constants/routes';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SinInIcon from '@material-ui/icons/PowerSettingsNewSharp';
import AdminIcon from '@material-ui/icons/Star';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { Landing, Account, Home, SignIn, SignUp, Admin } from '../pages';
import { AuthUserContext, withAuthentication } from '../firebase';

const App = () => {
  const authUser = useContext(AuthUserContext);

  const [ location, setLocation ] = useState(window.location.href);
  useEffect(
    () => {
      setLocation(window.location.href);
    },
    [ location.length ],
  );

  const routeList =
    authUser ? [
      { text: 'Landing', to: routesType.LANDING, icon: <DashboardIcon /> },
      { text: 'Home', to: routesType.HOME, icon: <HomeIcon /> },
      { text: 'Account', to: routesType.ACCOUNT, icon: <AccountBoxIcon /> },
      { text: 'Admin', to: routesType.ADMIN, icon: <AdminIcon /> },
    ] :
    [ { text: 'Landing', to: routesType.LANDING, icon: <DashboardIcon /> } ];

  const accountMenuList =
    authUser ? [
      {
        to: routesType.LANDING,
        button: <SignOutButton />,
      },
    ] :
    [
      { text: 'Sign In', to: routesType.SIGN_IN, icon: <SinInIcon /> },
      { text: 'Sign Up', to: routesType.SIGN_UP, icon: <HowToRegIcon /> },
    ];
  return (
    <Router>
      <Dewider routeList={routeList} accountMenuList={accountMenuList}>
        <Route exact path={routesType.LANDING} component={Landing} />
        <Route exact path={routesType.HOME} component={Home} />
        <Route exact path={routesType.SIGN_IN} component={SignIn} />
        <Route exact path={routesType.SIGN_UP} component={SignUp} />
        <Route exact path={routesType.ACCOUNT} component={Account} />
        <Route exact path={routesType.ADMIN} component={Admin} />
      </Dewider>
    </Router>
  );
};
export default withAuthentication(App);
