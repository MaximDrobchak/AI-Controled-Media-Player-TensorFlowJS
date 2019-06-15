import React, { useState } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBBadge,
} from 'mdbreact';

export default ({ buttonTitle, modelTitle, children, position = 'right' }) => {
  const [ open, setOpen ] = useState(false);

  return (
    <MDBContainer>
      <TagButton title={buttonTitle} onClick={() => setOpen(!open)} />
      <MDBModal
        isOpen={open}
        toggle={() => setOpen(!open)}
        fullHeight
        position={position}>
        <MDBModalHeader toggle={() => setOpen(!open)}>
          {modelTitle}
        </MDBModalHeader>
        <MDBModalBody>{children}</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color='secondary' onClick={() => setOpen(!open)}>
            Close
          </MDBBtn>
          <MDBBtn color='primary'>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};
const TagButton = ({ title, onClick }) => (
  <h5
    style={{ position: 'fixed', top: 80, right: 0, cursor: 'pointer' }}
    onClick={onClick}>
    <MDBBadge color='primary'>{title}</MDBBadge>
  </h5>
);
