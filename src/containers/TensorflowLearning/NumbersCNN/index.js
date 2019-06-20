//https://codelabs.developers.google.com/codelabs/tfjs-training-classfication/index.html?index=..%2F..index#2

import React from 'react';
import * as tfvis from '@tensorflow/tfjs-vis';
import * as tf from '@tensorflow/tfjs';

import { MnistData } from './data.js';
import showExamples from './showExamples';
import getModel from './getModel';
import train from './trainModel';
import { doPrediction, showAccuracy, showConfusion } from './doPrediction';
async function run (){
  const data = new MnistData();
  await data.load();
  await showExamples(data);
  const model = getModel();
  tfvis.show.modelSummary({ name: 'Model Architecture' }, model);

  await train(model, data);

  await showAccuracy(model, data);
  await showConfusion(model, data);

  doPrediction(model, data);
}

export default () => {
  document.addEventListener('DOMContentLoaded', run);
  return null;
};
