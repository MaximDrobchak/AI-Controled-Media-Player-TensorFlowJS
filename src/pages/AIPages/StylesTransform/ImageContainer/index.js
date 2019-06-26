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
import setSettings from './setSettings';

export default ({ src, refImg, inputID, heightImg = 240, dispatch }) => {
  const classes = useStyles({ inputID });
  const [ triger, setTriger ] = useState(false);
  const [ stream, setStream ] = useState(null);

  const webcamVideoElements = useRef();
  const elements = useRef();
  const hiddenCanvass = useRef();

  const handleCammera = () => {
    webCammera(
      hiddenCanvass,
      webcamVideoElements,
      elements,
      setStream,
      setTriger,
      triger,
      stream,
    );
  };

  const settings = setSettings(inputID);
  const imgSrc =

      elements.current && elements.current.src.length > 10000 ? elements.current
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
            <video ref={webcamVideoElements} width='500' height='375' />
            <canvas ref={hiddenCanvass} style={{ display: 'none' }} />
            <img ref={elements} />
          </ModelPopup>
        </div>
      </div>
      <Slider />
    </MDBCol>
  );
};
