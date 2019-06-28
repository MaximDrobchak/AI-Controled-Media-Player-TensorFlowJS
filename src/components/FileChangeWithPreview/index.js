import React from "react";

import { FlipCard } from "../SpringComponents";
import { useStyles } from "./styles";

export default ({ img, src, inputID, heightImg, dispatch }) => {
  const classes = useStyles({ inputID, heightImg });
  console.log(heightImg);
  return (
    <div className={classes.root}>
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
