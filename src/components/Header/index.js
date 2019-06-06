import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

const MenuItem = ({ name }) => (
  <span style={{ marginLeft: 10 }}>
    <MuiLink component={Link} to={'/' + name}>
      {name}
    </MuiLink>
  </span>
);

const NavigationList = ({ list }) => (
  <div style={{ display: 'inline-flex' }}>
    {(list || []).map(item => <MenuItem name={item.name} key={item.id} />)}
  </div>
);
export default ({ list, authUser }) => {
  const authList = [ list[0], list[4], { id: 'Landing', name: '/' } ];
  const notAuhList = [ list[1], list[2], list[3], list[5] ];

  return (
    <div>
      {
        authUser ? <NavigationList list={authList} /> :
        <NavigationList list={notAuhList} />}
    </div>
  );
};
