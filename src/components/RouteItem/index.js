import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withFirebase } from '../../firebase';
const Root = ({ firebase, text, icon, to, button }) => (
  <ListItem
    button
    key={text}
    onClick={() => button && firebase.doSignOut()}
    style={{ display: 'flex-inline' }}>
    <Link to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
      {/* <ListItemText primary={} /> */}
      {text}
    </Link>
  </ListItem>
);
export default withFirebase(Root);
