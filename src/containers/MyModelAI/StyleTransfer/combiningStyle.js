import * as tf from '@tensorflow/tfjs';
export default async function startCombining (
  styleNet,
  combStyleImg1,
  combStyleImg2,
  combStyleRatio,
  transformNet,
  combContentImg,
  combStylized,
){
  const bottleneck1 = await tf.tidy(() => {
    return styleNet.predict(
      tf.browser
        .fromPixels(combStyleImg1)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims(),
    );
  });

  const bottleneck2 = await tf.tidy(() => {
    return styleNet.predict(
      tf.browser
        .fromPixels(combStyleImg2)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims(),
    );
  });

  const combinedBottleneck = await tf.tidy(() => {
    const scaledBottleneck1 = bottleneck1.mul(tf.scalar(1 - combStyleRatio));
    const scaledBottleneck2 = bottleneck2.mul(tf.scalar(combStyleRatio));
    return scaledBottleneck1.addStrict(scaledBottleneck2);
  });

  const stylized = await tf.tidy(() => {
    return transformNet
      .predict([
        tf.browser
          .fromPixels(combContentImg)
          .toFloat()
          .div(tf.scalar(255))
          .expandDims(),
        combinedBottleneck,
      ])
      .squeeze();
  });
  await tf.browser.toPixels(stylized, combStylized);
  bottleneck1.dispose();
  bottleneck2.dispose();
  combinedBottleneck.dispose();
  stylized.dispose();
}
