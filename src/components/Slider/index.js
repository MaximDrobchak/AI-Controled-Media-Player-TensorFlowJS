import React from 'react';

export default ({
  lable = 'Example range',
  setStyleRatio,
  styleRatio = 10,
}) => {
  return (
    <div className='my-5'>
      <label htmlFor='customRange1'>{lable}</label>
      <input
        type='range'
        className='custom-range'
        id='customRange1'
        value={styleRatio}
      />
    </div>
  );
};
