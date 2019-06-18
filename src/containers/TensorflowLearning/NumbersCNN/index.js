//https://codelabs.developers.google.com/codelabs/tfjs-training-classfication/index.html?index=..%2F..index#2

import React from 'react';
import * as tfvis from '@tensorflow/tfjs-vis';
import * as tf from '@tensorflow/tfjs';

import { MnistData } from './data.js';
import showExamples from './showExamples';

async function run (){
  const data = new MnistData();
  await data.load();
  await showExamples(data);
}

export default () => {
  document.addEventListener('DOMContentLoaded', run);
  return null;
};
