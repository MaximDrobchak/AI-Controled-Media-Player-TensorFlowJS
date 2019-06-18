/// https://codelabs.developers.google.com/codelabs/tfjs-training-regression/index.html#1

//https://developers.google.com/machine-learning/crash-course/introduction-to-neural-networks/anatomy
import * as tfvis from '@tensorflow/tfjs-vis';
import * as tf from '@tensorflow/tfjs';

import getData from './getDate';
import trainModel from './trainModel';
import createModel from './createModel';
import { convertToTensor } from './convertToTensor';
import testModel from './testModel';
async function run (){
  // Load and plot the original input data that we are going to train on.
  const data = await getData();
  const values = data.map(d => ({
    x: d.horsepower,
    y: d.mpg,
  }));

  tfvis.render.scatterplot(
    { name: 'Horsepower v MPG' },
    { values },
    {
      xLabel: 'Horsepower',
      yLabel: 'MPG',
      height: 300,
    },
  );

  // More code will be added below

  const model = createModel();
  tfvis.show.modelSummary({ name: 'Model Summary' }, model);

  // Преобразуйте данные в форму, которую мы можем использовать для обучения.
  const tensorDtaa = convertToTensor(data);
  const { inputs, labels } = tensorDtaa;

  // Запускаем тренировку
  await trainModel(model, inputs, labels);
  console.log('Done Training');

  testModel(model, data, tensorDtaa);
}

export default () => {
  document.addEventListener('DOMContentLoaded', run);
  return null;
};
