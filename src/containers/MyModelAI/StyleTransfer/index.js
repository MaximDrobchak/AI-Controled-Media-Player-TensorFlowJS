import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

async function loadMobileNetStyleModel (){
  return await tf.loadGraphModel('http://localhost:3001/saved_model_style_js');
}

async function loadOriginalTransformerModel (){
  return await tf.loadGraphModel(
    'http://localhost:3001/saved_model_transformer_js',
  );
}

async function loadInceptionStyleModel (){
  return await tf.loadGraphModel('saved_model_style_inception_js/model.json');
}

async function loadSeparableTransformerModel (){
  return await tf.loadGraphModel(
    'saved_model_transformer_separable_js/model.json',
  );
}

async function startStyling (
  styleNet,
  transformNet,
  canvas,
  styleImg,
  contentImg,
  styleRatio,
  combContent,
){
  const styleImgs = styleImg.current;
  const contentImgs = contentImg.current;
  const combContentImg = combContent.current;
  await tf.nextFrame();
  await tf.nextFrame();
  let bottleneck = await tf.tidy(() => {
    return styleNet.predict(
      tf.browser
        .fromPixels(contentImgs)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims(),
    );
  });

  await tf.nextFrame();
  const stylized = await tf.tidy(() => {
    return transformNet
      .predict([
        tf.browser
          .fromPixels(styleImgs)
          .toFloat()
          .div(tf.scalar(255))
          .expandDims(),
        bottleneck,
      ])
      .squeeze();
  });
  await tf.browser.toPixels(stylized, canvas.current);
  bottleneck.dispose();
  stylized.dispose();
}

export default ({ styleImg, contentImg, styleRatio = 1.0 }) => {
  const canvas = useRef();
  const combContent = useRef();
  let styleNet, transformNet;
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
      <canvas ref={canvas} width='100' height='100' />
      <img
        ref={combContent}
        src='./Exemple/images/beach.jpg'
        width='100'
        height='100'
        style={{ display: 'none' }}
      />
    </React.Fragment>
  );
};
