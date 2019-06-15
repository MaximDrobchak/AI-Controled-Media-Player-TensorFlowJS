import React from 'react';

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
          <BottomNavigationAction
            style={buttonStyle}
            key={button.id}
            {...button}
            onClick={() => dispatch({ type: button.type })}
          />
        ))}
      </BottomNavigation>
    </div>
  );
}
