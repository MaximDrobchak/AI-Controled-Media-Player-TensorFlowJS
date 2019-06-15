import React from 'react';
import {
  MDBCard,
  MDBCol,
  MDBView,
  MDBMask,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
} from 'mdbreact';
import { NavLink } from 'react-router-dom';
export default ({ image, title, description, link }) => (
  <section className='text-center pb-3'>
    <MDBCol lg='6' xl='5' className='mb-3'>
      <MDBCard className='d-flex mb-5'>
        <MDBView>
          <img src={image} alt={title} className='img-fluid' />
          <MDBMask overlay='white-slight' />
        </MDBView>
        <MDBCardBody>
          <MDBCardTitle className='font-bold mb-3'>
            <strong>{title}</strong>
          </MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
        </MDBCardBody>
        <MDBCardFooter className='links-light profile-card-footer'>
          <span className='right'>
            <NavLink
              to={link.to}
              activeClassName='activeClass'>
              {link.lable}
              <MDBIcon icon='image' className='ml-1' />
            </NavLink>
          </span>
        </MDBCardFooter>
      </MDBCard>
    </MDBCol>
  </section>
);
