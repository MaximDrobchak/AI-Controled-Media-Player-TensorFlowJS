import React, { useState, useRef } from "react";
import {
  useTransition,
  useSpring,
  animated,
  config,
  useChain
} from "react-spring";
import styled from "styled-components";
import data from "./data";
import { TagButton } from "../../";
import { useStyles } from "./styles";
export default function App({ children, className }) {
  const classes = useStyles();
  const [open, set] = useState(false);

  const springRef = useRef();

  const { size, opacity, ...rest } = useSpring({
    from: { size: "100%", background: "hotpink" },
    size: open ? "100%" : "100%",
    background: open ? "white" : "hotpink",
    config: { ...config.stiff, precision: 0.01 },
    ref: springRef
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], item => item.name, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
    trail: 400 / data.length,
    config: { ...config.stiff, precision: 0.01, cancelDelay: true },
    unique: true,
    reset: true,
    ref: transRef
  });

  const chain = [springRef, transRef];
  useChain(open ? chain : chain.reverse(), [0, open ? 0.1 : 0.5]);

  return (
    <div className={className}>
      <Sidebar
        style={{ ...rest, width: size, height: size }}
        onClick={() => set(open => !open)}
      >
        {transitions.map(({ item, key, props }) => (
          <div onClick={() => set(open => !open)}>
            <Item key={key} style={{ ...props, background: item.css }}>
              {children}
            </Item>
          </div>
        ))}
      </Sidebar>
    </div>
  );
}

const Main = styled("div")`
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 20px;
  box-sizing: border-box;
`;

const Sidebar = styled(animated.div)`
  position: relative;
  width: 40px;
  min-height: 250px;
  padding: 20px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  will-change: width, height;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`;

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  min-width: 600px;
  min-height: 500px;
  background: #ededee;
  border-radius: 5px;
  will-change: transform, opacity;
`;
