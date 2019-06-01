import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export default ({ text, icon, to }) => (
  <ListItem button key={text}>
    <Link to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
    </Link>
    <ListItemText primary={text} />
  </ListItem>
);
