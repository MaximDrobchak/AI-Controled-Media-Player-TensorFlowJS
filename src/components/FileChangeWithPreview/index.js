import React from 'react';
import { InputFile } from '../';
import { useStyles } from './styles';

export default ({ img, src, inputID }) => {
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
      <img ref={img} className={classes.contentImg} src={src} />
    </div>
  );
};
