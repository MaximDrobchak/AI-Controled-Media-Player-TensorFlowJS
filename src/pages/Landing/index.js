import React from 'react';
import { Layout } from '../../components';
import Main from './Main';
import About from './About';
import Technologies from './Technologies';
import Services from './Services';
import { useStyles } from './styles';
export default () => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <Main />
      <About />
      <Technologies />
      <Services />
    </Layout>
  );
};
