import React from 'react';
import { useStyles } from './styles';
import { RedButton } from '../../../../components';
export default () => {
  const classes = useStyles();
  const onButton = e => {
    console.log('Кукла');
    e.preventDefault();
  };
  return (
    <div className={classes.root}>
      <p>Mobile application and website</p>
      <p className={classes.mainWord}>DEVELOPMENT</p>
      <p>With AI elements</p>
      <RedButton text='Learn more now' onClick={onButton} />
    </div>
  );
};
