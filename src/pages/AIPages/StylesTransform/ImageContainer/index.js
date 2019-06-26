import React, { useState, useRef, useEffect } from 'react';
import {
  FileChangeWithPreview,
  Slider,
  TagButton,
  ModelPopup,
} from '../../../../components';
import { useStyles } from './styles';
import { MDBCol } from 'mdbreact';

export default ({ src, refImg, inputID, heightImg = 240, dispatch }) => {
  const classes = useStyles({ inputID });
  const [ triger, setTriger ] = useState(false);
  const [ stream, setStream ] = useState(null);

  const webcamVideoElement = useRef();
  const element = useRef();
  const hiddenCanvass = useRef();
  const settings =

      inputID !== 'style-img' ? [
        {
          id: '11',
          title: 'Random',
          type: 'RANDOM_CONTENT',
          icon: 'random',
        },
      ] :
      [
        {
          id: '1',
          title: 'Random',
          type: 'RANDOM_IMAGE',
          icon: 'random',
        },
      ];
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
  const handleCammera = () => {
    const hiddenCanvas = hiddenCanvass.current;
    const hiddenContext = hiddenCanvas.getContext('2d');
    hiddenCanvas.width = webcamVideoElement.current.width;
    hiddenCanvas.height = webcamVideoElement.current.height;
    hiddenContext.drawImage(
      webcamVideoElement.current,
      0,
      0,
      hiddenCanvas.width,
      hiddenCanvas.height,
    );
    const imageDataURL = hiddenCanvas.toDataURL('image/jpg');
    element.current.src = imageDataURL;
    if (triger) {
      setTimeout(() => {
        stream.getTracks()[0].stop();
        setTriger(false);
      }, 0);
    }
    else {
      navigator.getUserMedia(
        {
          video: true,
        },
        stream => {
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
  const imgSrc =

      element.current && element.current.src.length > 10000 ? element.current
        .src :
      src;
  return (
    <MDBCol
      xl='6'
      md='10'
      className='mb-r'
      style={{ border: '1px solid black' }}>
      <div className={classes.mainRow}>
        <FileChangeWithPreview
          img={refImg}
          src={imgSrc}
          inputID={inputID}
          heightImg={heightImg}
        />
        <div>
          {settings.map(item => (
            <TagButton
              key={item.id}
              {...item}
              type={item.type}
              className={classes.tagButton}
              dispatch={dispatch}
            />
          ))}
          <ModelPopup
            className={classes.tagButton}
            lableButton='Camera'
            title='Title'
            handleCammera={handleCammera}>
            <video ref={webcamVideoElement} width='500' height='375' />
            <canvas ref={hiddenCanvass} style={{ display: 'none' }} />
            <img ref={element} />
          </ModelPopup>
        </div>
      </div>
      <Slider />
    </MDBCol>
  );
};
