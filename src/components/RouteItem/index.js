import React from 'react';
import { Link } from '../';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withFirebase } from '../../firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
const Root = ({ history, firebase, text, icon, to, button }) => {
  const onOut = () => {
    history.push('/');
    window.location.reload();
    return firebase.doSignOut();
  };
  if (button) {
    return (
      <ListItem button key={text} onClick={onOut}>
        <Link
          to={to}
          lable={
            <span style={{ display: 'inline-flex' }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </span>
          }
        />
      </ListItem>
    );
  }
  else {
    return (
      <ListItem button key={text}>
        <Link
          to={to}
          lable={
            <span style={{ display: 'inline-flex' }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </span>
          }
        />
      </ListItem>
    );
  }
};
export default compose(withFirebase, withRouter)(Root);
