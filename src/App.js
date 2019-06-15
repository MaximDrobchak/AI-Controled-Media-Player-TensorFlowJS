import React from 'react';
import Dewider, { LeftNavigation, TopNavigation, Routes } from './Navigation';
import { Footer } from './components';
import './index.css';

export default () => {
  return (
    <div className='flexible-content'>
      {/* <TopNavigation /> */}
      {/* <LeftNavigation /> */}
      <Dewider />
      <main id='content'>
        <Routes />
      </main>
      <Footer />
    </div>
  );
};
