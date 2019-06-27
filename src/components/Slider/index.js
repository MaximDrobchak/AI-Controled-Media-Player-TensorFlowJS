import React, { useState } from 'react';

export default ({ lable = 'Example range', dispatch, inputID }) => {
  const [ styleRatio, setStyleRatio ] = useState(50);
  const handleChange = e => {
    setStyleRatio(e.target.value);
    if (inputID !== 'style-img') {
      const ratio = 144 / 100 * e.target.value;
      dispatch({ type: 'CONTENT_HEIGTH', heightImg: 256 + ratio });
    }
    else {
      const ratio = 300 / 100 * e.target.value;
      dispatch({ type: 'STYLE_HEIGTH', heightImg: 100 + ratio });
    }
  };
  return (
    <div className='my-5'>
      <label htmlFor='customRange1'>{lable}</label>
      <input
        type='range'
        className='custom-range'
        id='customRange1'
        value={styleRatio}
        onChange={handleChange}
      />
    </div>
  );
};
