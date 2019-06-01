import React from 'react';
import { Grid } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import * as routesType from '../../constants/routes';
export default () => (
  <Grid container>
    <Grid item xs>
      <MuiLink to={routesType.PASSWORD_FORGET} component={Link} variant='body2'>
        Forgot password?
      </MuiLink>
    </Grid>
    <Grid item>
      <MuiLink to={routesType.SIGN_UP} component={Link} variant='body2'>
        Don't have an account? Sign Up
      </MuiLink>
    </Grid>
  </Grid>
);
