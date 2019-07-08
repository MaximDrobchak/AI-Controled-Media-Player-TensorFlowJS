import * as tfvis from "@tensorflow/tfjs-vis";
import * as tf from "@tensorflow/tfjs";

export default async function trainModel(model, inputs, labels) {
  // Подготовьте модель к тренировкам. --> Компеляция

  model.compile({
    optimizer: tf.train.adam(),
    loss: tf.losses.meanSquaredError,
    metrics: ["mse"]
  });

  const batchSize = 28; // Размер одного пакета
  const epochs = 50;

  return await model.fit(inputs, labels, {
    batchSize,
    epochs,
    shuffle: true,
    callbacks: tfvis.show.fitCallbacks(
      { name: "Training Performance" },
      ["loss", "mse"],
      { height: 200, callbacks: ["onEpochEnd"] }
    )
  });
}
