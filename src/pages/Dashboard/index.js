import React, { useState, useEffect } from 'react';
import { useLoadingOrError } from '../../userHooks';
import { Layout, Loading, Error, Card } from '../../components';
import { useStyles } from './styles';
import dataList from './dataList';

const Galery = () => {
  const classes = useStyles();
  const { isLoading, getError, getLoading, error } = useLoadingOrError();

  return (
    <Layout padding={50}>
      {isLoading && <Loading />}
      <Error error={error} />
      {(dataList || []).map(item => <Card key={item.id} {...item} />)}
    </Layout>
  );
};

export default Galery;
