import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { useStyles, buttonStyle } from './styles';
export default function LabelBottomNavigation ({
  buttons,
  dispatch,
  className,
}){
  const classes = useStyles();
  const [ value, setValue ] = React.useState('recents');

  function handleChange (event, newValue){
    setValue(newValue);
  }

  return (
    <div style={{ width: 250 }}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={className || classes.root}>
        {buttons.map(button => (
          <MDBBtn
            key={button.id}
            tag='a'
            size='md'
            floating
            gradient='blue'
            onClick={() => dispatch({ type: button.type })}>
            <MDBIcon icon={button.icon} size='sm' />
          </MDBBtn>
        ))}
      </BottomNavigation>
    </div>
  );
}
