import React from "react";
import { useSpring, animated as a } from "react-spring";

export default flipped => {
  const { transform, opacity } = useSpring({
    config: { mass: 6, tension: 500, friction: 80 },
    opacity: flipped ? 1 : 0,
    transform: `perspective(1400px) rotateX(${flipped ? 180 : 0}deg)`,
    from: {
      opacity: flipped ? 1 : 0,
      transform: `perspective(1400px) rotateX(0deg)`
    }
  });

  return {
    transform,
    opacity
  };
};
