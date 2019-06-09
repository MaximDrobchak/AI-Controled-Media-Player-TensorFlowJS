import React from 'react';
import CameraIcon from '@material-ui/icons/Camera';
export default ({ triger }) => (
  <CameraIcon
    style={{
      color:
        triger ? 'green' :
        'red',
      position: 'absolute',
      right: 20,
      top: 70,
      fontSize: 35,
      opacity: 0.4,
    }}
  />
);
