import React, { useState } from 'react';

import { Group135, Group137, Group138, Group143 } from './img';
// import { Navigation, BackgroundMenu, StyleMenuItem } from './style.js';
import { useStyles } from './styles';
import MainText from './MainText';

import Typed from './Typed';

const links = [
  { linkID: 0, title: Group143, path: '#main' },
  { linkID: 1, title: Group137, path: '#services' },
  { linkID: 2, title: Group138, path: '#technologies' },
  { linkID: 3, title: Group135, path: '#hiring' },
];

const MenuLink = ({ path, title, target, getTarget, linkID, menuItem }) => (
  <a href={path} style={{ width: 50 }}>
    <img
      className={menuItem}
      src={title}
      alt=''
      target={target}
      linkID={linkID}
      onClick={() => getTarget(linkID)}
    />
  </a>
);

const NavBar = ({ target, getTarget, menuItem, navigation }) => (
  <div className={navigation}>
    {links.map(link => (
      <MenuLink
        menuItem={menuItem}
        key={link.linkID}
        {...link}
        target={target}
        getTarget={getTarget}
      />
    ))}
  </div>
);

export default () => {
  const classes = useStyles();
  const [ target, setTarget ] = useState(null);
  const getTarget = id => {
    setTarget(id);
  };
  return (
    <div id='main' className={classes.root}>
      <NavBar
        target={target}
        getTarget={getTarget}
        menuItem={classes.menuItem}
        navigation={classes.navigation}
      />
      <Typed />
      <MainText />
    </div>
  );
};
