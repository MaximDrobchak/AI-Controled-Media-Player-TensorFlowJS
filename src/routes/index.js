import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routesType from '../constants/routes';
import Header from '../components/Header';
import { Landing } from '../pages';
import routesList from './routesList';

const MuiRouter = ({ name, Component }) => (
  <span>
    <Route path={routesType.LANDING + name} component={Component} />
  </span>
);

export default () => (
  <Router>
    <Fragment>
      <Header list={routesList} />
      <hr />
      <Route exact path={routesType.LANDING} component={Landing} />
      {routesList.map(item => <MuiRouter {...item} key={item.id} />)}
    </Fragment>
  </Router>
);
