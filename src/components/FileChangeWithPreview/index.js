import React from 'react';
import { InputFile } from '../';
import { useStyles } from './styles';

export default ({ img, src, inputID, heightImg }) => {
  const classes = useStyles();

  const handleSelect = file => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (img => e => {
      img.current.src = fileReader.result;
    })(img);
  };

  return (
    <div className={classes.inputFile}>
      <InputFile onChange={handleSelect} inputID={inputID} />
      <img
        ref={img}
        style={{
          height: heightImg,
          // display:

          //     inputID == 'style-img' ? 'none' :
          //     '',
        }}
        src={src}
      />
      {/* {inputID == 'style-img' && <img style={{ height: 240 }} src={src} />} */}
    </div>
  );
};
