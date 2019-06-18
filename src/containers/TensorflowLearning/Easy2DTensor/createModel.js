import * as tf from '@tensorflow/tfjs';

export default function createModel (){
  const model = tf.sequential();
  // один скрытый слой
  model.add(tf.layers.dense({ inputShape: [ 1 ], units: 1, useBias: true }));
  model.add(tf.layers.dense({ units: 50, activation: 'sigmoid' }));
  model.add(tf.layers.dense({ units: 1, useBias: true })); // выходной слой

  return model;
}
