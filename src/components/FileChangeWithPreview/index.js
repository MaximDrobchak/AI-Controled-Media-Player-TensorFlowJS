import React from 'react';
import { InputFile } from '../';
import { useStyles } from './styles';

export default ({ img, src, inputID, heightImg }) => {
  const classes = useStyles({ inputID, heightImg });

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
        crossorigin='anonymous'
        ref={img}
        className={classes.image}
        src={src}
      />
    </div>
  );
};
