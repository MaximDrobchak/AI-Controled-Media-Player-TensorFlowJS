import React from 'react';
import { Typography } from '@material-ui/core';
export default ({ error }) =>
  error && (
    <Typography color='error' component='h1' variant='h5'>
      {error.message}
    </Typography>
  );
