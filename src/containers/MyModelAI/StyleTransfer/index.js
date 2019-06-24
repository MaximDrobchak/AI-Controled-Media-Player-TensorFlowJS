import React, { useState, useEffect, useRef } from 'react';
import { startStyling } from './startStyle';
import { useStyles } from './styles';
import {
  loadMobileNetStyleModel,
  loadOriginalTransformerModel,
  loadInceptionStyleModel,
  loadSeparableTransformerModel,
} from './loadModels';

export default ({ styleImg, contentImg, styleRatio = 0.5 }) => {
  const canvas = useRef();
  const combContent = useRef();
  let styleNet, transformNet;
  const classes = useStyles();
  async function setNetworks (){
    styleNet = await loadMobileNetStyleModel();
    transformNet = await loadOriginalTransformerModel();
  }
  useEffect(() => {
    setNetworks();
  }, []);

  return (
    <React.Fragment>
      <button
        onClick={() => {
          return setTimeout(() => {
            startStyling(
              styleNet,
              transformNet,
              canvas,
              styleImg,
              contentImg,
              styleRatio,
              combContent,
            );
          }, 1000);
        }}>
        Button
      </button>
      <canvas ref={canvas} className={classes.canvas} />
      <img
        ref={combContent}
        src='./Exemple/images/beach.jpg'
        style={{ display: 'none' }}
      />
    </React.Fragment>
  );
};
