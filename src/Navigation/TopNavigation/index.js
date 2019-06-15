import React, { useContext } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBIcon,
  MDBBtn,
} from 'mdbreact';
import { DropDown } from '../../components';
import { notAuth, auth } from './list';
import { withAuthentication, AuthUserContext } from '../../firebase';

const TopNavigation = ({ handleDeweder }) => {
  const authUser = useContext(AuthUserContext);
  const list =
    authUser ? auth :
    notAuth;

  return (
    <MDBNavbar className='flexible-navbar' light expand='md' scrolling>
      <MDBBtn
        tag='span'
        rounded
        outline
        onClick={handleDeweder}
        id='diwider-button-control'>
        <MDBIcon icon='bars' size='x3' />
      </MDBBtn>

      <MDBNavbarNav left />
      <MDBNavbarNav right>
        <MDBNavItem>
          <DropDown
            title={<MDBIcon icon='user-circle' size='2x' />}
            list={list}
          />
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

export default withAuthentication(TopNavigation);
