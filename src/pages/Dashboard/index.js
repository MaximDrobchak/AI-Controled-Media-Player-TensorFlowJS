import React from 'react';

import { Card } from '../../components';
import dataList from './dataList';

const DashboardPage = () => {
  return (
    <React.Fragment>
      {(dataList || []).map(item => <Card key={item.id} {...item} />)}
    </React.Fragment>
  );
};

export default DashboardPage;
