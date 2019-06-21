import React from 'react';

import ServicesItem from './ServicesItems';
import { ITEMS } from './items';
import services2Min from './img/services.jpg';
import { Layout } from '../../../components';
import { HeadText, ItemImage } from './styles';
import { MDBRow } from 'mdbreact';

const Services = () => (
  <Layout id='services'>
    <HeadText>Things that we work on </HeadText>

    <MDBRow className='mb-4'>
      {ITEMS.map(
        item =>

            item.image ? <img
              key={item.id}
              src={item.image}
              alt=''
              height='240'
            /> :
            <ServicesItem
              key={item.id}
              icon={item.icon}
              itemHeader={item.itemHeader}
              itemList={item.itemList}
            />,
      )}
      <ItemImage src={services2Min} alt='' />
    </MDBRow>
  </Layout>
);

export default Services;
