import React from 'react';
import { ButtonMDB } from '../';

export default ({ onChange, inputID }) => (
  <div className='custom-file' style={{ position: 'relative' }}>
    <input
      type='file'
      className='custom-file-input'
      id={inputID}
      onChange={e => onChange(e.target.files[0])}
    />
    <ButtonMDB htmlFor={inputID}>
      <label className='h6' htmlFor={inputID}>
        Choose Photo
      </label>
    </ButtonMDB>
  </div>
);
