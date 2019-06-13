import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dewider } from '../components';
import * as routesType from '../constants/routes';
import {
  DashboardIcon,
  HomeIcon,
  SinOutIcon,
  AccountBoxIcon,
  SinInIcon,
  AdminIcon,
  HowToRegIcon,
} from '../Icons';

import {
  PasswordChangeComponent,
  PasswordForgetComponent,
  SignUpComponent,
  SignInComponent,
  GaleryComponent,
  AccountComponent,
  HomeComponent,
  LandingComponent,
  YouTubeComponent,
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
      { text: 'Galery', to: routesType.GALERY, icon: <AdminIcon /> },
      { text: 'Home', to: routesType.HOME, icon: <HomeIcon /> },
      { text: 'Account', to: routesType.ACCOUNT, icon: <AccountBoxIcon /> },
    ] :
    [
      { text: 'Landing', to: routesType.LANDING, icon: <DashboardIcon /> },
      { text: 'Galery', to: routesType.GALERY, icon: <AdminIcon /> },
    ];

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
        <Route path={routesType.GALERY} component={GaleryComponent} />
        <Route path={routesType.YOUTUBE} component={YouTubeComponent} />
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
