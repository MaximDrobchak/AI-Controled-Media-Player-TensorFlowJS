import React, { useContext } from 'react';
import logo from '../../assets/ai-logo.jpg';
import { MDBListGroup, MDBIcon } from 'mdbreact';

import { NavigationLink } from '../../components';
import { withAuthentication, AuthUserContext } from '../../firebase';
import { notAuth, auth } from './list';

const LeftNavigation = ({ handleDeweder }) => {
  const authUser = useContext(AuthUserContext);
  const list =
    authUser ? auth :
    notAuth;

  return (
    <div className='sidebar-fixed position-fixed'>
      <a href='#!' className='logo-wrapper waves-effect'>
        <img alt='MDB React Logo' className='img-fluid' src={logo} />
      </a>
      <span
        onClick={handleDeweder}
        style={{
          position: 'absolute',
          right: 0,
          top: 20,
          width: 30,
          height: 50,
        }}>
        <MDBIcon icon='angle-left' size='x4' />
      </span>
      <MDBListGroup className='list-group-flush'>
        {(list || [])
          .map(item => <NavigationLink key={item.lable} {...item} />)}
      </MDBListGroup>
    </div>
  );
};

export default withAuthentication(LeftNavigation);
