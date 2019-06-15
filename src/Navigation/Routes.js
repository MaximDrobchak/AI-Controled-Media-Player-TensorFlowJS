import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routesList from './routeList';
import { Dashboard } from './routeComponents';
export default () => {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      {(routesList || [])
        .map(item => (
          <Route key={item.id} path={item.path} component={item.component} />
        ))}
    </Switch>
  );
};
