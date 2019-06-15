import React from 'react';
import { withFirebase } from '../../firebase';
import { Layout, HomeCard } from '../../components';
import dataList from './dataList';
import { useStyles } from './styles';

const HomePage = () => {
  const classes = useStyles();
  return (
    <Layout padding={50}>
      {(dataList || []).map(item => <HomeCard key={item.id} {...item} />)}
    </Layout>
  );
};

export default withFirebase(HomePage);
