import React, { useState, useEffect } from 'react';
import { useLoadingOrError } from '../../userHooks';
import { Layout, Loading, Error, GaleryCard } from '../../components';
import { useStyles } from './styles';
import dataList from './dataList';

const Galery = () => {
  const classes = useStyles();
  const { isLoading, getError, getLoading, error } = useLoadingOrError();

  return (
    <Layout padding={50}>
      {isLoading && <Loading />}
      <Error error={error} />
      {(dataList || []).map(item => <GaleryCard key={item.id} {...item} />)}
    </Layout>
  );
};

export default Galery;
