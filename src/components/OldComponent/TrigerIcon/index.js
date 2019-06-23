import React from 'react';

import { MDBIcon } from 'mdbreact';
export default ({ triger }) => (
  <MDBIcon
    icon='microphone-alt'
    style={{
      color:
        triger ? 'green' :
        'red',
      position: 'absolute',
      zIndex: 9999,
      right: 20,
      top: 70,
      fontSize: 35,
      opacity: 0.6,
    }}
  />
);
