import React from 'react';
import { Link } from '../';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withFirebase } from '../../firebase';
const Root = ({ firebase, text, icon, to, button }) => {
  if (button) {
    return (
      <ListItem button key={text} onClick={firebase.doSignOut}>
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
export default withFirebase(Root);
