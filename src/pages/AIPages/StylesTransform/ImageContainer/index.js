import React, { useState, useRef, useEffect } from 'react';
import {
  FileChangeWithPreview,
  Slider,
  TagButton,
  ModelPopup,
} from '../../../../components';
import { useStyles } from './styles';
import { MDBCol } from 'mdbreact';
import webCammera from '../webCammera';
import setSettings, { setSrc } from './setSettings';
// ,
export default ({ src, refImg, inputID, heightImg = 240, dispatch }) => {
  const classes = useStyles({ inputID });
  const [ triger, setTriger ] = useState(false);
  const [ stream, setStream ] = useState(null);

  const webcamVideoElement = useRef();
  const element = useRef();
  const hiddenCanvas = useRef();

  const handleCammera = () => {
    webCammera(
      hiddenCanvas,
      webcamVideoElement,
      element,
      setStream,
      setTriger,
      triger,
      stream,
      dispatch,
    );
  };

  const settings = setSettings(inputID);
  const imgSrc = setSrc(src, element);

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
          {inputID !== 'style-img' && (
            <ModelPopup
              className={classes.tagButton}
              lableButton='Camera'
              title='Title'
              handleCammera={handleCammera}>
              <video ref={webcamVideoElement} width='500' height='375' />
              <canvas ref={hiddenCanvas} style={{ display: 'none' }} />
              <img ref={element} />
            </ModelPopup>
          )}
        </div>
      </div>
      <Slider />
    </MDBCol>
  );
};
