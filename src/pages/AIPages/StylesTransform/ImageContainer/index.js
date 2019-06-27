import React, { useState, useRef, useEffect } from "react";
import {
  FileChangeWithPreview,
  Slider,
  TagButton,
  ModelPopup
} from "../../../../components";
import { useStyles } from "./styles";
import { MDBCol } from "mdbreact";
import webCammera from "../webCammera";
import setSettings, { setSrc } from "./setSettings";

export default ({
  src,
  refImg,
  inputID,
  heightImg,
  dispatch,
  setSwitch,
  isTransform
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

  const settings = setSettings(inputID);
  const imgSrc = setSrc(src, element);
  const [imageSwitch, setImageSwitch] = useState(true);

  const handleSwitch = () => {
    setImageSwitch(!imageSwitch);
    setSwitch();
  };
  const classes = useStyles({ inputID, isTransform });
  const button = inputID !== "style-img" ? "" : "";
  return (
    <MDBCol
      xl="6"
      md="10"
      className="mb-r"
      style={{ border: "1px solid black" }}
    >
      <div className={classes.transformation}>
        <div className={classes.mainRow}>
          <FileChangeWithPreview
            img={refImg}
            src={imgSrc}
            inputID={inputID}
            heightImg={heightImg}
            dispatch={dispatch}
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
            {inputID !== "style-img" && (
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
            )}
            <TagButton
              onClick={handleSwitch}
              title="setSwitch"
              color={imageSwitch ? "primary" : "purple"}
              className={classes.tagButton}
            />
          </div>
        </div>
      </div>
      <Slider dispatch={dispatch} refImg={refImg.current} inputID={inputID} />
    </MDBCol>
  );
};
