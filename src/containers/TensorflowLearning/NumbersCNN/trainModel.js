import * as tfvis from '@tensorflow/tfjs-vis';
import * as tf from '@tensorflow/tfjs';

export default async function train (model, data){
  //Здесь мы решаем, какие показатели мы будем отслеживать.
  //Мы будем отслеживать потери и точность в обучающем наборе, и  в тестовом
  const metrics = [ 'loss', 'val_loss', 'acc', 'val_acc' ];
  const container = {
    name: 'Model Traing',
    styles: { height: '1000px' },
  };

  const fitCallbacks = tfvis.show.fitCallbacks(container, metrics);

  const BATCH_SIZE = 512;
  const TRAIN_DATA_SIZE = 5500;
  const TEST_DATA_SIZE = 1000;

  //Здесь мы создаем два набора данных, обучающий набор, на котором мы будем тренировать модель
  //Для каждого набора данных у нас есть и входные данные (Xs) и метки (Ys).
  const [ trainXs, trainYs ] = tf.tidy(() => {
    const d = data.nextTrainBatch(TRAIN_DATA_SIZE);
    return [ d.xs.reshape([ TRAIN_DATA_SIZE, 28, 28, 1 ]), d.labels ];
  });

  const [ testXs, testYs ] = tf.tidy(() => {
    const d = data.nextTestBatch(TEST_DATA_SIZE);
    return [ d.xs.reshape([ TEST_DATA_SIZE, 28, 28, 1 ]), d.labels ];
  });

  //Мы вызываем model.fit, чтобы начать цикл обучения.
  // validationData, чтобы указать, какие данные модель должна использовать для
  // проверки себя после каждой эпохи (но не использовать для обучения).
  return model.fit(trainXs, trainYs, {
    batchSize: BATCH_SIZE,
    validationData: [ testXs, testYs ],
    epochs: 10,
    shuffle: true,
    callbacks: fitCallbacks,
  });
}
