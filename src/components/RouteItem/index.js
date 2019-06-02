import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export default ({ text, icon, to, button }) => (
  <ListItem button key={text}>
    <Link to={to}>
      {
        button ? button :
        <ListItemIcon>{icon}</ListItemIcon>}
    </Link>
    <ListItemText primary={text} />
  </ListItem>
);
