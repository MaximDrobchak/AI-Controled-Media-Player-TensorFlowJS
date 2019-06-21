import React from 'react';

import { ITEMS } from './items';
import Item from './Item';
import { Layout } from '../../../components';
import { TechnologiesGrid, HeadText } from './styles';

const Technologies = () => (
  <Layout id='technologies'>

    <HeadText>We ar best at</HeadText>
    <TechnologiesGrid>
      {ITEMS.map(item => <Item key={item.id} {...item} />)}
    </TechnologiesGrid>
  </Layout>
);

export default Technologies;
