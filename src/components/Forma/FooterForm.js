import React from 'react';
import { Grid } from '@material-ui/core';

export default ({ link_1, link_2 }) => (
  <Grid container>
    <Grid item xs>
      {link_1}
    </Grid>
    <Grid item>{link_2}</Grid>
  </Grid>
);
