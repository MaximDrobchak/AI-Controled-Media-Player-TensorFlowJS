import React, { useState, useRef } from "react";
import {
  FileChangeWithPreview,
  TagButton,
  ModelPopup,
  InputFile,
  SliderMaterial
} from "../../../../components";
import { useStyles } from "./styles";

import webCammera from "../webCammera";
import { setSrc } from "./setSettings";

export default ({
  src,
  refImg,
  inputID,
  heightImg,
  dispatch,
  setSwitch,
  isTransform,
  secondaryImage
}) => {
  const [triger, setTriger] = useState(false);
  const [stream, setStream] = useState(null);

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
      dispatch
    );
  };

  const imgSrc = setSrc(src, element);
  const [imageSwitch, setImageSwitch] = useState(true);

  const handleSwitch = () => {
    setImageSwitch(!imageSwitch);
    setSwitch();
  };

  const classes = useStyles({ inputID, isTransform });

  return (
    <div className={classes.transformation}>
      <div className={classes.mainRow}>
        <ModelPopup
          className={classes.tagButton}
          lableButton="Camera"
          title="Title"
          handleCammera={handleCammera}
        >
          <video ref={webcamVideoElement} width="500" height="375" />
          <canvas ref={hiddenCanvas} style={{ display: "none" }} />
          <img ref={element} crossOrigin="anonymous" />
        </ModelPopup>
        <TagButton
          onClick={handleSwitch}
          title="setSwitch"
          color={imageSwitch ? "primary" : "purple"}
          className={classes.tagButton}
        />

        <InputFile
          inputID={inputID}
          dispatch={dispatch}
          refImg={refImg}
          className={classes.tagButton}
        />
      </div>
      <div className={classes.root}>
        <div className={classes.slider}>
          <SliderMaterial
            dispatch={dispatch}
            refImg={refImg.current}
            inputID={inputID}
          />
        </div>
        <FileChangeWithPreview
          img={refImg}
          src={imgSrc}
          inputID={inputID}
          heightImg={heightImg}
          dispatch={dispatch}
        />
      </div>
      <div className={classes.caruselImage} />
    </div>
  );
};
