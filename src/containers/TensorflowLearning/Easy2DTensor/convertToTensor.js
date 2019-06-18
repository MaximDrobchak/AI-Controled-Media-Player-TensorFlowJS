import * as tf from '@tensorflow/tfjs';

export const convertToTensor = data =>
  tf.tidy(() => {
    // 1.Перемешивание данных
    tf.util.shuffle(data);

    // 2.Конвертация data в тензоры
    const inputs = data.map(d => d.horsepower);
    const labels = data.map(d => d.mpg);

    const inputTensor = tf.tensor2d(inputs, [ inputs.length, 1 ]);
    const labelTensor = tf.tensor2d(labels, [ labels.length, 1 ]);

    // 3.нормализация данных в значения от 0 до 1 испульзуя min-max
    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();
    const labelMax = labelTensor.max();
    const labelMin = labelTensor.min();

    const normalizedInputs = inputTensor
      .sub(inputMin)
      .div(inputMax.sub(inputMin));

    const normalizedLabels = labelTensor
      .sub(labelMin)
      .div(labelMax.sub(labelMin));

    return {
      inputs: normalizedInputs,
      labels: normalizedLabels,
      // Вернем мин / макс границы, чтобы мы могли использовать их позже.
      inputMax,
      inputMin,
      labelMax,
      labelMin,
    };
  });
