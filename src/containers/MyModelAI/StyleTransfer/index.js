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
        .fromPixels(styleImgs)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims(),
    );
  });

  await tf.nextFrame();
  const identityBottleneck = await tf.tidy(() => {
    return styleNet.predict(
      tf.browser
        .fromPixels(contentImgs)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims(),
    );
  });
  const styleBottleneck = bottleneck;
  bottleneck = await tf.tidy(() => {
    const styleBottleneckScaled = styleBottleneck.mul(tf.scalar(styleRatio));
    const identityBottleneckScaled = identityBottleneck.mul(
      tf.scalar(1.0 - styleRatio),
    );
    return styleBottleneckScaled.addStrict(identityBottleneckScaled);
  });
  styleBottleneck.dispose();
  identityBottleneck.dispose();

  await tf.nextFrame();
  const stylized = await tf.tidy(() => {
    return transformNet
      .predict([
        tf.browser
          .fromPixels(combContentImg)
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

    benchmark();
  }
  useEffect(() => {
    setNetworks();
  }, []);
  async function benchmark (){
    const x = tf.randomNormal([ 1, 256, 256, 3 ]);
    const bottleneck = tf.randomNormal([ 1, 1, 1, 100 ]);

    let styleNet = await loadInceptionStyleModel();
    let time = await benchmarkStyle(x, styleNet);
    styleNet.dispose();

    styleNet = await loadMobileNetStyleModel();
    time = await benchmarkStyle(x, styleNet);
    styleNet.dispose();

    // let transformNet = await loadOriginalTransformerModel();
    // time = await this.benchmarkTransform(x, bottleneck, transformNet);
    // transformNet.dispose();

    // transformNet = await loadSeparableTransformerModel();
    // time = await benchmarkTransform(x, bottleneck, transformNet);
    // transformNet.dispose();

    x.dispose();
    bottleneck.dispose();
  }

  async function benchmarkStyle (x, styleNet){
    const profile = await tf.profile(() => {
      tf.tidy(() => {
        const dummyOut = styleNet.predict(x);
        dummyOut.print();
      });
    });
    console.log(profile);
    const time = await tf.time(() => {
      tf.tidy(() => {
        for (let i = 0; i < 10; i++) {
          const y = styleNet.predict(x);
          y.print();
        }
      });
    });
    console.log(time);
  }

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
      <img ref={combContent} width='100' height='100' />
    </React.Fragment>
  );
};
