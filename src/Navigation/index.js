import React, { useState, useEffect, Fragment } from 'react';
import LeftNavigation from './LeftNavigation';
import TopNavigation from './TopNavigation';
import Routes from './Routes';
const dewiderMove = isOpen => {
  const content = document.querySelector('#content');
  const navbar = document.querySelector('.flexible-navbar');
  const footer = document.querySelector('.page-footer');
  const sidebar = document.querySelector('.sidebar-fixed');

  if (isOpen) {
    content.style.marginLeft = '300px';
    navbar.style.paddingLeft = '275px';
    footer.style.marginLeft = '270px';
    sidebar.style.marginLeft = '0px';
  }
  else {
    content.style.marginLeft = '70px';
    navbar.style.paddingLeft = '10px';
    footer.style.marginLeft = '0px';
    sidebar.style.marginLeft = '-270px';
  }
};
export default () => {
  const [ isOpen, setOpen ] = useState(false);

  useEffect(
    () => {
      dewiderMove(isOpen);
    },
    [ isOpen ],
  );

  const handleDeweder = () => {
    setOpen(!isOpen);
  };
  return (
    <Fragment>
      <TopNavigation handleDeweder={handleDeweder} />
      <LeftNavigation />
    </Fragment>
  );
};
export { LeftNavigation, TopNavigation, Routes };
