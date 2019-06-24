import * as tf from '@tensorflow/tfjs';
export async function loadMobileNetStyleModel (){
  return await tf.loadGraphModel('http://localhost:3001/saved_model_style_js');
}

export async function loadOriginalTransformerModel (){
  return await tf.loadGraphModel(
    'http://localhost:3001/saved_model_transformer_js',
  );
}

export async function loadInceptionStyleModel (){
  return await tf.loadGraphModel(
    'http://localhost:3001/saved_model_style_inception_js',
  );
}

export async function loadSeparableTransformerModel (){
  return await tf.loadGraphModel(
    'http://localhost:3001/saved_model_transformer_separable_js',
  );
}
