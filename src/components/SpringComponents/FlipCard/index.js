import React, { useState, useCallback, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";

import { useStyles } from "./styles";

export default function Card({ src, heigthImg = 256, dispatch, inputID }) {
  const [flipped, set] = useState(false);
  const handleRevert = () => {
    inputID == "style-img"
      ? dispatch({ type: "RANDOM_IMAGE" })
      : dispatch({ type: "RANDOM_CONTENT" });

    set(state => !state);
  };
  const { transform, opacity } = useSpring({
    config: { mass: 6, tension: 500, friction: 80 },
    opacity: flipped ? 1 : 0,
    transform: `perspective(1400px) rotateX(${flipped ? 180 : 0}deg)`,
    from: {
      opacity: flipped ? 1 : 0,
      transform: `perspective(1400px) rotateX(0deg)`
    }
  });
  const classes = useStyles({ heigthImg });

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
}

function useForceUpdate() {
  const [, f] = useState(false);
  return useCallback(() => f(v => !v), []);
}
