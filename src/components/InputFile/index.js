import React from 'react';
import { ButtonMDB } from '../';

export default ({ onChange, inputID }) => (
  <div className='custom-file'>
    <input
      type='file'
      className='custom-file-input'
      id={inputID}
      onChange={e => onChange(e.target.files[0])}
    />
    <ButtonMDB htmlFor={inputID}>
      <label className='h4' htmlFor={inputID}>
        Choose Photo
      </label>
    </ButtonMDB>
  </div>
);
