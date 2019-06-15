import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

export default ({ to, lable }) => (
  <MuiLink
    to={to}
    component={Link}
    variant='body2'
    style={{ textDecoration: 'none' }}>
    {lable}
  </MuiLink>
);
