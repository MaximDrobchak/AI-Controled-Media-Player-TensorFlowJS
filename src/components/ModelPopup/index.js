import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';
import { ButtonMDB, TagButton } from '../';
export default ({ lableButton, title, className, children, handleCammera }) => {
  const [ show, setShow ] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <div>
      <TagButton
        onClick={handleShow}
        title={lableButton}
        className={className}
      />
      <MDBModal isOpen={show} toggle={handleShow} fullHeight position='top'>
        <MDBModalHeader toggle={handleShow}>{title}</MDBModalHeader>
        <MDBModalBody>{children}</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color='secondary' onClick={handleShow}>
            Close
          </MDBBtn>
          <MDBBtn onClick={handleCammera} color='primary'>
            Save changes
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </div>
  );
};
