import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MenuItem = ({ name }) => (
  <li style={{ marginLeft: 10 }}>
    <Button style={{ display: 'flex' }}>
      <Link to={'/' + name}>{name}</Link>
    </Button>
  </li>
);

export default ({ list }) => (
  <ul style={{ display: 'inline-flex' }}>
    {(list || []).map(item => <MenuItem name={item.name} key={item.id} />)}
  </ul>
);
