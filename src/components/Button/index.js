import React from 'react';
import Button from '@material-ui/core/Button';
import RedButtonStyle, { useStyles } from './styles';
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

export const RedButton = ({ props, text = '', type = 'button' }) => (
  <RedButtonStyle type={type} {...props}>
    {text}
  </RedButtonStyle>
);
