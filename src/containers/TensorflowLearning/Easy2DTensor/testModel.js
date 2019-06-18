// https://codelabs.developers.google.com/codelabs/tfjs-training-regression/index.html#6
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
export default function testModel (model, inputData, normalizationData){
  const { inputMax, inputMin, labelMin, labelMax } = normalizationData;

  //Генерировать прогнозы для единого диапазона чисел от 0 до 1;
  // Ненормализуем данные, выполняя обратное масштабирование min-max   которое мы делали ранее.

  const [ xs, preds ] = tf.tidy(() => {
    const xs = tf.linspace(0, 1, 100);
    const preds = model.predict(xs.reshape([ 100, 1 ]));

    const unNormXs = xs.mul(inputMax.sub(inputMin)).add(inputMin);

    const unNormPreds = preds.mul(labelMax.sub(labelMin)).add(labelMin);

    // Ненормализованные данные возвращаем
    return [ unNormXs.dataSync(), unNormPreds.dataSync() ];
    // .dataSync()это метод, который мы можем использовать для получения typedarrayзначений, хранящихся в тензоре. Это позволяет нам обрабатывать эти значения в обычном JavaScript
  });

  const predictedPoints = Array.from(xs).map((val, i) => {
    return { x: val, y: preds[i] };
  });

  const originalPoints = inputData.map(d => ({
    x: d.horsepower,
    y: d.mpg,
  }));

  tfvis.render.scatterplot(
    { name: 'Model Predictions vs Original Data' },
    {
      values: [ originalPoints, predictedPoints ],
      series: [ 'original', 'predicted' ],
    },
    {
      xLabel: 'Horsepower',
      yLabel: 'MPG',
      height: 300,
    },
  );
}
