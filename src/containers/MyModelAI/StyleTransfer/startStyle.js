import * as tf from "@tensorflow/tfjs";
export async function startStyling(
  styleNet,
  transformNet,
  canvas,
  styleImg,
  contentImg,
  styleRatio,
  combContent
) {
  await tf.nextFrame();
  let bottleneck = await tf.tidy(() => {
    return styleNet.predict(
      tf.browser
        .fromPixels(styleImg.current)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims()
    );
  });
  await tf.nextFrame();
  if (styleRatio !== 1.0) {
    const identityBottleneck = await tf.tidy(() => {
      return styleNet.predict(
        tf.browser
          .fromPixels(contentImg.current)
          .toFloat()
          .div(tf.scalar(255))
          .expandDims()
      );
    });
    const styleBottleneck = bottleneck;
    bottleneck = await tf.tidy(() => {
      const styleBottleneckScaled = styleBottleneck.mul(tf.scalar(styleRatio));
      const identityBottleneckScaled = identityBottleneck.mul(
        tf.scalar(1.0 - styleRatio)
      );
      return styleBottleneckScaled.addStrict(identityBottleneckScaled);
    });

    styleBottleneck.dispose();
    identityBottleneck.dispose();
  }
  await tf.nextFrame();
  const stylized = await tf.tidy(() => {
    return transformNet
      .predict([
        tf.browser
          .fromPixels(styleImg.current)
          .toFloat()
          .div(tf.scalar(255))
          .expandDims(),
        bottleneck
      ])
      .squeeze();
  });
  await tf.browser.toPixels(stylized, canvas.current);
  bottleneck.dispose();
  stylized.dispose();
}
