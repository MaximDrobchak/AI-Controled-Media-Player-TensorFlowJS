import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBCol, MDBCardText } from 'mdbreact';

export default ({ icon, itemHeader, itemList }) => (
  <MDBCol xl='3' md='6' className='mb-r' style={{ marginBottom: 20 }}>
    <MDBCard className='cascading-admin-card'>
      <div className='admin-up'>
        <MDBIcon icon={icon} className='light-blue lighten-1' />
        <div className='data'>
          <p>
            <strong>{itemHeader}</strong>
          </p>
        </div>
      </div>
      <MDBCardBody>
        {Object.values(itemList).map(item => (
          <MDBCardText key={item}>{item}</MDBCardText>
        ))}
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
);
