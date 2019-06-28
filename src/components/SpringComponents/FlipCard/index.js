import React, { useState } from "react";
import { animated as a } from "react-spring";
import { useStyles } from "./styles";
import useConfiguration from "./useConfiguration";

export default ({ src, heightImg, dispatch, inputID }) => {
  const [flipped, set] = useState(false);
  const handleRevert = () => {
    inputID == "style-img"
      ? dispatch({ type: "RANDOM_IMAGE" })
      : dispatch({ type: "RANDOM_CONTENT" });

    set(state => !state);
  };
  const { transform, opacity } = useConfiguration(flipped);
  const classes = useStyles({ heightImg });

  return (
    <div className={classes.root} onClick={handleRevert}>
      <a.img
        className={classes.flipC}
        src={src}
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
        crossOrigin="anonymous"
      />
      <a.img
        className={classes.flipC}
        src={src}
        crossOrigin="anonymous"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      />
    </div>
  );
};
