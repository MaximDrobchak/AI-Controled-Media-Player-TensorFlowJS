import React, { useState } from "react";
import { Trail, animated } from "react-spring/renderprops";
import "./styles.css";

export default ({ toggle, component }) => {
  const [items, setItems] = useState([component]);
  return (
    <div
      style={{
        backgroundColor: "#247BA0",
        position: "relative",
        width: "100%",
        minHeight: 500
      }}
    >
      <Trail
        native
        reverse={toggle}
        initial={null}
        items={items}
        from={{ opacity: 0, x: -100 }}
        to={{ opacity: toggle ? 1 : 0.25, x: toggle ? 0 : 100 }}
      >
        {item => ({ x, opacity }) => (
          <animated.div
            className="box"
            style={{
              opacity,
              transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
            }}
          >
            {item}
          </animated.div>
        )}
      </Trail>
    </div>
  );
};
