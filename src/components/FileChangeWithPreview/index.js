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
    <div className={classes.root}>
      <InputFile onChange={handleSelect} inputID={inputID} />
      <img
        ref={img}
        style={{
          maxHeight:

              inputID == 'style-img' ? 240 :
              heightImg,
          maxWidth: '100%',
        }}
        src={src}
      />
      {/* {inputID == 'style-img' && <img style={{ height: 240 }} src={src} />} */}
    </div>
  );
};
