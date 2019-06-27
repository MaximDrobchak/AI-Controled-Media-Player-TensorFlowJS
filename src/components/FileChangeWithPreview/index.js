import React from "react";
import { InputFile } from "../";
import { FlipCard } from "../SpringComponents";
import { useStyles } from "./styles";

export default ({ img, src, inputID, heightImg, dispatch }) => {
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
      <FlipCard
        src={src}
        heightImg={heightImg}
        dispatch={dispatch}
        inputID={inputID}
      />
      <img
        crossOrigin="anonymous"
        ref={img}
        className={classes.image}
        src={src}
      />
    </div>
  );
};
