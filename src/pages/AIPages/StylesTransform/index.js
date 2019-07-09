import React, { useState, useRef, useReducer } from "react";
import { styleTransferReducer, initialState } from "./reducer";
import {
  Layout,
  Loading,
  Error,
  TagButton,
  SliderMaterial
} from "../../../components";

import { MDBRow, MDBCol } from "mdbreact";
import withStyleTransfer from "../../../containers/MyModelAI/StyleTransfer/";
import { useStyles } from "./styles";
import RootPanelParameters from "./RootPanelParameters";
import ImageContainer from "./ImgContainer";
import ButtonsPanel from "./ButtonsPanel";
import { ChainAnimation } from "../../../components/SpringComponents";

const StyleTransfetPage = ({
  startStyling,
  styleNet,
  transformNet,
  handleTransformSwitch,
  handleStyleNetSwitch,
  combiningStyle
}) => {
  const styleImg = useRef();
  const contentImg = useRef();
  const styleImg2 = useRef();
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
  const handleCombiningStyle = () => {
    setIsTransform(true);
    return setTimeout(() => {
      combiningStyle(
        styleNet,
        transformNet,
        canvas,
        styleImg,
        styleImg2,
        contentImg,
        state.styleRatio,
        combContent
      );
    }, 2600);
  };
  return (
    <Layout className={classes.layout}>
      <RootPanelParameters
        handleStartStyling={handleStartStyling}
        dispatch={dispatch}
        handleStyleNetSwitch={handleStyleNetSwitch}
        handleTransformSwitch={handleTransformSwitch}
        isTransform={isTransform}
        handleCombiningStyle={handleCombiningStyle}
      />

      <MDBRow className="mb-2" style={{ justifyContent: "space-between" }}>
        <MDBCol xl="6" md="12" className="mb-r">
          <ImageContainer
            refImg={styleImg}
            {...state.content}
            dispatch={dispatch}
            setSwitch={handleStyleNetSwitch}
            isTransform={isTransform}
          />
        </MDBCol>
        {/* <ImageContainer
          refImg={contentImg}
          {...state.image}
          dispatch={dispatch}
          setSwitch={handleTransformSwitch}
          isTransform={isTransform}
        />
        <ChainAnimation className={classes.secondaryImage}>
          <ImageContainer
            refImg={styleImg2}
            {...state.image2}
            dispatch={dispatch}
            setSwitch={handleTransformSwitch}
            isTransform={isTransform}
            secondaryImage
          />
        </ChainAnimation> */}
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
