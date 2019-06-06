import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
  },
});

export default function LinearQuery (){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress variant='query' />
    </div>
  );
}
