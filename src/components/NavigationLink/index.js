import React from 'react';
import { MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { withFirebase } from '../../firebase';

const NavigationLink = ({ firebase, exact = false, to, icon, lable }) => {
  if (lable === 'SignOut') {
    return (
      <NavLink
        onClick={firebase.doSignOut}
        to={to}
        activeClassName='activeClass'>
        <MDBListGroupItem>
          <MDBIcon icon={icon} className='mr-3' />
          {lable}
        </MDBListGroupItem>
      </NavLink>
    );
  }
  return (
    <NavLink exact={exact} to={to} activeClassName='activeClass'>
      <MDBListGroupItem>
        <MDBIcon icon={icon} className='mr-3' />
        {lable}
      </MDBListGroupItem>
    </NavLink>
  );
};
export default withFirebase(NavigationLink);
