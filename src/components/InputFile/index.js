import React from 'react';
import { ButtonMDB } from '../';

export default () => (
  <div className='custom-file'>
    <input
      type='file'
      className='custom-file-input'
      id='inputGroupFile01'
      aria-describedby='inputGroupFileAddon01'
    />
    <ButtonMDB htmlFor='inputGroupFile01'>
      <label className='h4' htmlFor='inputGroupFile01'>
        Choose Photo
      </label>
    </ButtonMDB>
  </div>
);
