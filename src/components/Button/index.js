import React from 'react';
import { Button, IconButton, Switch, Typography } from '@material-ui/core/';

import { useStyles } from './styles';
export default ({
  type = 'button',
  fullWidth = true,
  variant = 'contained',
  color = 'primary',
  className,
  disabled,
  children,
  ...others
}) => {
  const classes = useStyles();
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      className={className || classes.submit}
      disabled={disabled}
      {...others}>
      {children}
    </Button>
  );
};
export const ButtonIcon = ({ onClick, children, className, ...others }) => (
  <IconButton onClick={onClick} className={className} {...others}>
    {children}
  </IconButton>
);
export const RedButton = ({ text = '', type = 'button', onClick }) => {
  const classes = useStyles();

  return (
    <button className={classes.redButton} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export function Switches ({ checkedA, handleChange, lable, style }){
  return (
    <div style={style}>
      <Typography gutterBottom variant='h5' component='h2'>
        {lable}
      </Typography>
      <Switch
        checked={checkedA}
        onChange={handleChange('checkedA')}
        value='checkedA'
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onClick={handleChange}
      />
    </div>
  );
}
