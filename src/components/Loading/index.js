import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    top: 60,
    height: 10,
    minWidth: '100vw !important',
    position: 'absolute',
    left: 0,
    zIndex: 99999,
  },
});

export default function LinearQuery (){
  const classes = useStyles();
  return (
    <div>
      <LinearProgress className={classes.root} color='secondary' />
    </div>
  );
}
