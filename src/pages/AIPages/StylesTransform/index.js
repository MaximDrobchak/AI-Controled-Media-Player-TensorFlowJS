import React, {
  useState,
  useRef,
  useEffect,
  useReducer,
  useCallback
} from "react";
import { styleTransferReducer, initialState } from "./reducer";
import { Layout, Loading, Error } from "../../../components";
import { FlipCard } from "../../../components/SpringComponents";
import { MDBRow } from "mdbreact";
import withStyleTransfer from "../../../containers/MyModelAI/StyleTransfer/";
import { useStyles } from "./styles";
import RootPanelParameters from "./RootPanelParameters";
import ImageContainer from "./ImageContainer";
const cards = [
  "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg"
];
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

  const classes = useStyles();
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
      <FlipCard />
      <RootPanelParameters
        handleStartStyling={handleStartStyling}
        dispatch={dispatch}
        handleStyleNetSwitch={handleStyleNetSwitch}
        handleTransformSwitch={handleTransformSwitch}
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
      <canvas ref={canvas} className={classes.canvas} />
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
