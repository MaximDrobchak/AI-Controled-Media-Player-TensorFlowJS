import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withFirebase } from '../../firebase';
import SinOutIcon from '@material-ui/icons/Send';
const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const MuiButton = ({
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
const MuiSignOutButton = ({ firebase }) => (
  <MuiButton
    key='signoutbutton'
    type='button'
    color='inherit'
    onClick={firebase.doSignOut}>
    <SinOutIcon /> Sign Out
  </MuiButton>
);
const SignOutButton = withFirebase(MuiSignOutButton);
export default MuiButton;
export { SignOutButton };