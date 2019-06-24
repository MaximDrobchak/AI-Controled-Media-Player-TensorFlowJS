import * as tf from '@tensorflow/tfjs';
export async function startStyling (
  styleNet,
  transformNet,
  canvas,
  styleImg,
  contentImg,
  styleRatio,
  combContent,
){
  const styleImgs = styleImg.current;
  const canvass = canvas.current;
  const contentImgs = contentImg.current;
  const combContentImg = combContent.current;

  let bottleneck = await tf.tidy(() => {
    return styleNet.predict(
      tf.browser
        .fromPixels(contentImgs)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims(),
    );
  });

  if (styleRatio !== 1.0) {
    const identityBottleneck = await tf.tidy(() => {
      return styleNet.predict(
        tf.browser
          .fromPixels(contentImgs)
          .toFloat()
          .div(tf.scalar(255))
          .expandDims(),
      );
    });
    const styleBottleneck = bottleneck;
    bottleneck = await tf.tidy(() => {
      const styleBottleneckScaled = styleBottleneck.mul(tf.scalar(styleRatio));
      const identityBottleneckScaled = identityBottleneck.mul(
        tf.scalar(1.0 - styleRatio),
      );
      return styleBottleneckScaled.addStrict(identityBottleneckScaled);
    });
    styleBottleneck.dispose();
    identityBottleneck.dispose();
  }

  const stylized = await tf.tidy(() => {
    return transformNet
      .predict([
        tf.browser
          .fromPixels(styleImgs)
          .toFloat()
          .div(tf.scalar(255))
          .expandDims(),
        bottleneck,
      ])
      .squeeze();
  });
  await tf.browser.toPixels(stylized, canvass);
  bottleneck.dispose();
  stylized.dispose();
}
