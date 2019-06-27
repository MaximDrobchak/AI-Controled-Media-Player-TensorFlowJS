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
export async function benchmark (){
  const x = tf.randomNormal([ 1, 256, 256, 3 ]);
  const bottleneck = tf.randomNormal([ 1, 1, 1, 100 ]);

  let styleNet = await loadInceptionStyleModel();
  let time = await benchmarkStyle(x, styleNet);
  styleNet.dispose();

  styleNet = await loadMobileNetStyleModel();
  time = await benchmarkStyle(x, styleNet);
  styleNet.dispose();

  let transformNet = await loadOriginalTransformerModel();
  time = await benchmarkTransform(x, bottleneck, transformNet);
  transformNet.dispose();

  transformNet = await loadSeparableTransformerModel();
  time = await benchmarkTransform(x, bottleneck, transformNet);
  transformNet.dispose();

  x.dispose();
  bottleneck.dispose();

  return await { styleNet, transformNet };
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

async function benchmarkTransform (x, bottleneck, transformNet){
  const profile = await tf.profile(() => {
    tf.tidy(() => {
      const dummyOut = transformNet.predict([ x, bottleneck ]);
      dummyOut.print();
    });
  });
  console.log(profile);
  const time = await tf.time(() => {
    tf.tidy(() => {
      for (let i = 0; i < 10; i++) {
        const y = transformNet.predict([ x, bottleneck ]);
        y.print();
      }
    });
  });
  console.log(time);
}
