import React, { useState } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';
import { TagButton } from '../';
import { useStyles } from './styles';

export default ({ buttonTitle, modelTitle, children, position = 'right' }) => {
  const [ open, setOpen ] = useState(false);
  const classes = useStyles();

  return (
    <MDBContainer>
      <TagButton
        title={buttonTitle}
        onClick={() => setOpen(!open)}
        className={classes.tagButton}
      />
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
