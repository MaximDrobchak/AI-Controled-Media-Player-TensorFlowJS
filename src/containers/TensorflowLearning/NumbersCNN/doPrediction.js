import * as tfvis from '@tensorflow/tfjs-vis';
import * as tf from '@tensorflow/tfjs';

const classNames = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
];

// Делать предсказания
export function doPrediction (model, data, testDataSize = 500){
  const IMAGE_WIDTH = 28;
  const IMAGE_HEIGHT = 28;
  const testData = data.nextTestBatch(testDataSize);
  const testxs = testData.xs.reshape([
    testDataSize,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    1,
  ]);
  const labels = testData.labels.argMax([ -1 ]);
  const preds = model.predict(testxs).argMax([ -1 ]);

  testxs.dispose();
  return [ preds, labels ];
}

// Показывать точность классa
export async function showAccuracy (model, data){
  const [ preds, labels ] = doPrediction(model, data);
  const classAccuracy = await tfvis.metrics.perClassAccuracy(labels, preds);
  const container = { name: 'Accuracy', tab: 'Evaluation' };
  tfvis.show.perClassAccuracy(container, classAccuracy, classNames);

  labels.dispose();
}

// Показать путаницу
/**Матрица путаницы похожа на точность каждого класса, но дополнительно разбивает ее, чтобы показать образцы неправильной классификации. Это позволяет увидеть, не запуталась ли модель в отношении каких-либо конкретных пар классов. */
export async function showConfusion (model, data){
  const [ preds, labels ] = doPrediction(model, data);
  const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
  const container = { name: 'Confusion Matrix', tab: 'Evaluation' };
  tfvis.render.confusionMatrix(
    container,
    { values: confusionMatrix },
    classNames,
  );

  labels.dispose();
}
