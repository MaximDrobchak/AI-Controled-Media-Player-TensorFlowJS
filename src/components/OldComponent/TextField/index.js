import React from 'react';
import TextField from '@material-ui/core/TextField';

export default ({
  variant = 'outlined',
  margin = 'normal',
  required = true,
  fullWidth = true,
  name = '',
  label = '',
  type = 'text',
  autoComplete = '',
  ...others
}) => (
  <TextField
    variant={variant}
    margin={margin}
    required={required}
    fullWidth={fullWidth}
    name={name}
    label={label}
    type={type}
    autoComplete={autoComplete}
    {...others}
  />
);
