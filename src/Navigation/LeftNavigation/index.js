import React, { useContext } from 'react';
import logo from '../../assets/mdb-react.png';
import { MDBListGroup } from 'mdbreact';

import { NavigationLink } from '../../components';
import { withAuthentication, AuthUserContext } from '../../firebase';
import { notAuth, auth } from './list';

const LeftNavigation = () => {
  const authUser = useContext(AuthUserContext);
  const list =
    authUser ? auth :
    notAuth;

  return (
    <div className='sidebar-fixed position-fixed'>
      <a href='#!' className='logo-wrapper waves-effect'>
        <img alt='MDB React Logo' className='img-fluid' src={logo} />
      </a>
      <MDBListGroup className='list-group-flush'>
        {(list || [])
          .map(item => <NavigationLink key={item.lable} {...item} />)}
      </MDBListGroup>
    </div>
  );
};

export default withAuthentication(LeftNavigation);
