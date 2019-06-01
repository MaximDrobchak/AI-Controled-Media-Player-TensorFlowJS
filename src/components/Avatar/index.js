import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default ({ className, icon, ...others }) => {
  const classes = useStyles();

  return (
    <Avatar className={className || classes.avatar} {...others}>
      {icon}
    </Avatar>
  );
};
