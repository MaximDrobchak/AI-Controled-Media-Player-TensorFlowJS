//https://codelabs.developers.google.com/codelabs/tfjs-training-classfication/index.html?index=..%2F..index#4
import * as tfvis from '@tensorflow/tfjs-vis';
import * as tf from '@tensorflow/tfjs';

export default function getModel (){
  const model = tf.sequential();

  /**
   * @var inputShape Форма данных, которые будут перетекать в первый слой модели  [row, column, depth] тойсть [28, 28, 1]
   * @var kernelSize Размер свертки здесь мы определили 5 = квадрат 5px x 5px
   * @var filters фильтрует свертку напримар квадрат
   *                                                 5  10           множим на 1  0          получаем (5 * 1) + (10 * 0) ==> 5
   *                                                 12  111                   0  1                   (12 * 0) + (111 * 1) => 111
   *                                                          в итоге 5 + 111
   *          подробней о фильтре свертки  https://developers.google.com/machine-learning/glossary/#convolutional_filter
   *                                       https://developers.google.com/machine-learning/glossary/images/ConvolutionalLayerOperation.svg
   *
   * @var strides размер шага скользящего окна (свертка) на сколько пикселей будет смещаться квадрат
   * @var activation функция активации в данном случаи  'relu' -- выпрямленной линейной единицы (ReLU)
   * @var kernelInitializer Метод, используемый для случайной инициализации весов модели
   *
   */
  const IMAGE_WIDTH = 28;
  const IMAGE_HEIGHT = 28;
  const IMAGE_CHANNELS = 1; // канал цвета
  //сверток
  model.add(
    tf.layers.conv2d({
      inputShape: [ IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS ], //
      kernelSize: 5,
      filters: 8,
      strides: 1,
      activation: 'relu',
      kernelInitializer: 'varianceScaling',
    }),
  );

  // Слой MaxPooling действует как разновидность понижающей дискретизации, используя максимальные значения
  // в регионе вместо усреднения.

  model.add(tf.layers.maxPooling2d({ poolSize: [ 2, 2 ], strides: [ 2, 2 ] }));

  //// Повторить другой стек conv2d + maxPooling.
  // у нас есть больше фильтров в свертке.

  model.add(
    tf.layers.conv2d({
      kernelSize: 5,
      filters: 16,
      strides: 1,
      activation: 'relu',
      kernelInitializer: 'varianceScaling',
    }),
  );
  model.add(tf.layers.maxPooling2d({ poolSize: [ 2, 2 ], strides: [ 2, 2 ] }));

  // Теперь мы сглаживаем вывод 2D-фильтров в одномерный вектор для подготовки
  // это для ввода в наш последний слой. Это обычная практика при кормлении
  // данные более высокого размера для выходного слоя окончательной классификации.

  /// В сплющенном слое нет весов. Он просто развертывает свои входные данные в длинный массив.
  model.add(tf.layers.flatten());

  // Наш последний слой является плотным слоем, который имеет 10 выходных единиц, по одному для каждого
  // выходной класс (то есть 0, 1, 2, 3, 4, 5, 6, 7, 8, 9).

  const NUM_OUTPUT_CLASSES = 10;
  model.add(
    tf.layers.dense({
      units: NUM_OUTPUT_CLASSES,
      kernelInitializer: 'varianceScaling',
      activation: 'softmax',
    }),
  );

  // Выбрать оптимизатор, функцию потерь и метрику точности,
  // затем скомпилируем и вернем модель

  const optimizer = tf.train.adam();
  model.compile({
    optimizer: optimizer,
    loss: 'categoricalCrossentropy',
    metrics: [ 'accuracy' ],
  });

  return model;
}
