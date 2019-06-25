import React, { useState } from 'react';
import { MDBCollapse } from 'mdbreact';
import { ButtonMDB } from '../';
import { useStyles } from './styles';
export default ({ buttonTitle = 'Settings', children }) => {
  const classes = useStyles();
  const [ show, setShow ] = useState(false);
  const toggleCollapse = () => setShow(!show);
  return (
    <div className={classes.root}>
      <ButtonMDB onClick={toggleCollapse}>{buttonTitle}</ButtonMDB>
      <MDBCollapse isOpen={show}>
        <div className={classes.bodyBlock}>{children}</div>
      </MDBCollapse>
    </div>
  );
};
