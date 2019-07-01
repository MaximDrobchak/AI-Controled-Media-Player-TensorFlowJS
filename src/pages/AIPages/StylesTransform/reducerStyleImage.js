import { chicago, seaport } from "./img";
import links from "./links";
import { getRndInteger } from "./utils";

export const initialStateStyleImage = {
  src: seaport,
  inputID: "style-img",
  heightImg: 256
};

export const reducerStyleImage = (state, action) => {
  switch (action.type) {
    case "RANDOM_IMAGE":
      return onAddRandomImage(state, action);
    case "SRC_IMAGE":
      return onAddSrcImage(state, action);
    case "STYLE_HEIGTH":
      return onAddStyleHeight(state, action);
    case "RANDOM_PARAMETERS":
      return onAddRandomParameters(state, action);
    default:
      return state;
  }
};

const onAddRandomImage = (state, action) => {
  const randomNumber = Math.floor(Math.random() * links.length);
  return {
    ...state,
    src: links[randomNumber]
  };
};

const onAddSrcImage = (state, action) => ({
  ...state,
  src: action.src
});

const onAddStyleHeight = (state, action) => ({
  ...state,
  heightImg: action.heightImg
});

const onAddRandomParameters = (state, action) => {
  const heightImgStyle = getRndInteger(100, 400);
  const randomNumber = Math.floor(Math.random() * links.length);

  return {
    ...state,
    src: links[randomNumber],
    heightImg: heightImgStyle
  };
};
