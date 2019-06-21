import React from 'react';
import { ItemTitle } from './styles';

const Item = ({ image, title }) => (
  <div>
    <img src={image} alt='' style={{ maxHeight: 124 }} />
    <ItemTitle>{title}</ItemTitle>
  </div>
);

export default Item;
