import * as tf from "@tensorflow/tfjs";
export default async function startCombining(
  styleNet,
  transformNet,
  canvas,
  styleImg,
  styleImg2,
  contentImg,
  styleRatio,
  combContent
) {
  await tf.nextFrame();
  const bottleneck1 = await tf.tidy(() => {
    return styleNet.predict(
      tf.browser
        .fromPixels(styleImg.current)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims()
    );
  });
  await tf.nextFrame();
  const bottleneck2 = await tf.tidy(() => {
    return styleNet.predict(
      tf.browser
        .fromPixels(styleImg2.current)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims()
    );
  });
  await tf.nextFrame();
  const combinedBottleneck = await tf.tidy(() => {
    const scaledBottleneck1 = bottleneck1.mul(tf.scalar(1 - styleRatio));
    const scaledBottleneck2 = bottleneck2.mul(tf.scalar(styleRatio));
    return scaledBottleneck1.addStrict(scaledBottleneck2);
  });
  await tf.nextFrame();
  const stylized = await tf.tidy(() => {
    return transformNet
      .predict([
        tf.browser
          .fromPixels(contentImg.current)
          .toFloat()
          .div(tf.scalar(255))
          .expandDims(),
        combinedBottleneck
      ])
      .squeeze();
  });

  await tf.browser.toPixels(stylized, canvas.current);
  bottleneck1.dispose();
  bottleneck2.dispose();
  combinedBottleneck.dispose();
  stylized.dispose();
}
