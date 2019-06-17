import React from 'react';
import Dewider, { Routes } from './Navigation';
import { Footer } from './components';
import './index.css';

export default () => {
  return (
    <div className='flexible-content'>
      <Dewider />
      <main id='content'>
        <Routes />
      </main>
      <Footer />
    </div>
  );
};
