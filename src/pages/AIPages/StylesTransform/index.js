import React, { useState, useRef, useReducer } from "react";
import { styleTransferReducer, initialState } from "./reducer";
import {
  Layout,
  Loading,
  Error,
  TagButton,
  SliderMaterial
} from "../../../components";

import { MDBRow } from "mdbreact";
import withStyleTransfer from "../../../containers/MyModelAI/StyleTransfer/";
import { useStyles } from "./styles";
import RootPanelParameters from "./RootPanelParameters";
import ImageContainer from "./ImageContainer";
import ButtonsPanel from "./ButtonsPanel";
const StyleTransfetPage = ({
  startStyling,
  styleNet,
  transformNet,
  handleTransformSwitch,
  handleStyleNetSwitch
}) => {
  const styleImg = useRef();
  const contentImg = useRef();
  const canvas = useRef();
  const combContent = useRef();
  const [isTransform, setIsTransform] = useState(false);

  const classes = useStyles({ isTransform });
  const [state, dispatch] = useReducer(styleTransferReducer, initialState);

  const handleStartStyling = () => {
    setIsTransform(true);
    return setTimeout(() => {
      startStyling(
        styleNet,
        transformNet,
        canvas,
        styleImg,
        contentImg,
        state.styleRatio,
        combContent
      );
    }, 2600);
  };

  return (
    <Layout>
      <RootPanelParameters
        handleStartStyling={handleStartStyling}
        dispatch={dispatch}
        handleStyleNetSwitch={handleStyleNetSwitch}
        handleTransformSwitch={handleTransformSwitch}
        isTransform={isTransform}
      />

      <MDBRow className="mb-2" style={{ justifyContent: "space-between" }}>
        <ImageContainer
          refImg={styleImg}
          {...state.content}
          dispatch={dispatch}
          setSwitch={handleStyleNetSwitch}
          isTransform={isTransform}
        />
        <ImageContainer
          refImg={contentImg}
          {...state.image}
          dispatch={dispatch}
          setSwitch={handleTransformSwitch}
          isTransform={isTransform}
        />
      </MDBRow>
      <div className={classes.resultBlock}>
        <ButtonsPanel
          setIsTransform={setIsTransform}
          dispatch={dispatch}
          isTransform={isTransform}
          handleStyleNetSwitch={handleStyleNetSwitch}
          handleTransformSwitch={handleTransformSwitch}
          handleStartStyling={handleStartStyling}
        />
        <SliderMaterial
          dispatch={dispatch}
          refImg={styleImg.current}
          {...state.image}
        />
        <canvas ref={canvas} className={classes.canvas} />
      </div>
      <img
        crossOrigin="anonymous"
        ref={combContent}
        src="./Exemple/images/beach.jpg"
        style={{ display: "none" }}
      />
    </Layout>
  );
};
export default withStyleTransfer(StyleTransfetPage);
