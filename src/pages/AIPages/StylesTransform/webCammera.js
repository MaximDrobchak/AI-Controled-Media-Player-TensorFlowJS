export default (
  hiddenCanvas,
  webcamVideoElement,
  element,
  setStream,
  setTriger,
  triger,
  stream,
  dispatch,
) => {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
  const hiddenContext = hiddenCanvas.current.getContext('2d');
  hiddenCanvas.current.width = webcamVideoElement.current.width;
  hiddenCanvas.current.height = webcamVideoElement.current.height;
  hiddenContext.drawImage(
    webcamVideoElement.current,
    0,
    0,
    hiddenCanvas.current.width,
    hiddenCanvas.current.height,
  );
  const imageDataURL = hiddenCanvas.current.toDataURL('image/jpg');
  element.current.src = imageDataURL;
  if (triger) {
    setTimeout(() => {
      stream.getTracks()[0].stop();
      webcamVideoElement.current.style.display = 'none';
      element.current.style.display = 'block';
      dispatch({
        type: 'SRC_CONTENT',
        src: element.current.src,
      });
      setTriger(false);
    }, 0);
  }
  else {
    navigator.getUserMedia(
      {
        video: true,
      },
      stream => {
        webcamVideoElement.current.style.display = 'block';
        element.current.style.display = 'none';
        setStream(stream);
        webcamVideoElement.current.srcObject = stream;
        webcamVideoElement.current.play();
        setTriger(true);
      },
      err => {
        console.error(err);
      },
    );
  }
};
