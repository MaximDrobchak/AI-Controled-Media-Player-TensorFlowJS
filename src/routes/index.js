import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dewider } from '../components';
import * as routesType from '../constants/routes';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import SinOutIcon from '@material-ui/icons/Send';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SinInIcon from '@material-ui/icons/PowerSettingsNewSharp';
import AdminIcon from '@material-ui/icons/Star';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import {
  PasswordChangeComponent,
  PasswordForgetComponent,
  SignUpComponent,
  SignInComponent,
  AdminComponent,
  AccountComponent,
  HomeComponent,
  LandingComponent,
} from './routesList';
import { withFirebase } from '../firebase';

const App = ({ firebase }) => {
  const [ authUser, setAuthUser ] = useState(null);

  useEffect(() => {
    function onAuthUser (){
      firebase.auth.onAuthStateChanged(authUser => {

          authUser ? setAuthUser(true) :
          setAuthUser(null);
      });
    }
    onAuthUser();
    return () => {
      onAuthUser();
    };
  }, []);
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
        text: 'Sign Out',
        to: routesType.LANDING,
        icon: <SinOutIcon />,
        button: true,
      },
    ] :
    [
      { text: 'Sign In', to: routesType.SIGN_IN, icon: <SinInIcon /> },
      { text: 'Sign Up', to: routesType.SIGN_UP, icon: <HowToRegIcon /> },
    ];

  return (
    <Router>
      <Dewider routeList={routeList} accountMenuList={accountMenuList}>
        <Route exact path={routesType.LANDING} component={LandingComponent} />
        <Route path={routesType.HOME} component={HomeComponent} />
        <Route path={routesType.SIGN_IN} component={SignInComponent} />
        <Route path={routesType.SIGN_UP} component={SignUpComponent} />
        <Route path={routesType.ACCOUNT} component={AccountComponent} />
        <Route path={routesType.ADMIN} component={AdminComponent} />
        <Route
          path={routesType.PASSWORD_CHANGE}
          component={PasswordChangeComponent}
        />
        <Route
          path={routesType.PASSWORD_FORGET}
          component={PasswordForgetComponent}
        />
      </Dewider>
    </Router>
  );
};

export default withFirebase(App);
