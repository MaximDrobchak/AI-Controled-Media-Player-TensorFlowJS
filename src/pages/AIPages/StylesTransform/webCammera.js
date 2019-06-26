export default (
  hiddenCanvass,
  webcamVideoElements,
  elements,
  setStream,
  setTriger,
  triger,
  stream,
) => {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  const hiddenCanvas = hiddenCanvass.current;
  const webcamVideoElement = webcamVideoElements.current;
  const element = elements.current;
  const hiddenContext = hiddenCanvas.getContext('2d');
  hiddenCanvas.width = webcamVideoElement.width;
  hiddenCanvas.height = webcamVideoElement.height;
  hiddenContext.drawImage(
    webcamVideoElement,
    0,
    0,
    hiddenCanvas.width,
    hiddenCanvas.height,
  );
  const imageDataURL = hiddenCanvas.toDataURL('image/jpg');
  element.src = imageDataURL;
  if (triger) {
    setTimeout(() => {
      stream.getTracks()[0].stop();
      webcamVideoElement.style.display = 'none';
      element.style.display = 'block';
      setTriger(false);
    }, 0);
  }
  else {
    navigator.getUserMedia(
      {
        video: true,
      },
      stream => {
        webcamVideoElement.style.display = 'block';
        element.style.display = 'none';
        setStream(stream);
        webcamVideoElement.srcObject = stream;
        webcamVideoElement.play();
        setTriger(true);
      },
      err => {
        console.error(err);
      },
    );
  }
};
