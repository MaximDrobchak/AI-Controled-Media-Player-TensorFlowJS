import React, { useState } from 'react';

import { Group135, Group137, Group138, Group143 } from './img';
import { Navigation, BackgroundMenu, StyleMenuItem } from './style.js';

import MainText from './MainText';
import Splinters from './Splinters';
import Typed from './Typed';

const links = [
  { linkID: 0, title: Group143, path: '#main' },
  { linkID: 1, title: Group137, path: '#services' },
  { linkID: 2, title: Group138, path: '#technologies' },
  { linkID: 3, title: Group135, path: '#hiring' },
];

const MenuLink = ({ path, title, target, getTarget, linkID }) => (
  <a href={path} style={{ width: 50 }}>
    <StyleMenuItem
      src={title}
      alt=''
      target={target}
      linkID={linkID}
      onClick={() => getTarget(linkID)}
    />
  </a>
);

const NavBar = ({ target, getTarget }) => (
  <Navigation>
    {links.map(link => (
      <MenuLink
        key={link.linkID}
        {...link}
        target={target}
        getTarget={getTarget}
      />
    ))}
  </Navigation>
);

export default () => {
  const [ target, setTarget ] = useState(null);
  const getTarget = id => {
    setTarget(id);
  };
  return (
    <BackgroundMenu id='main'>
      <Typed />
      <NavBar target={target} getTarget={getTarget} />
      <MainText />
      <Splinters />
    </BackgroundMenu>
  );
};
