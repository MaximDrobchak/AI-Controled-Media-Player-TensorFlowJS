import React from 'react';
import { Layout } from '../../components';
import Main from './Main';
import { useStyles } from './styles';
export default () => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <Main />
    </Layout>
  );
};
