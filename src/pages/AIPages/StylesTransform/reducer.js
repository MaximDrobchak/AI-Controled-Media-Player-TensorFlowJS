import { chicago, seaport } from "./img";
import links from "./links";
export const initialState = {
  styleRatio: 0.2,
  image: {
    src: seaport,
    inputID: "style-img",
    heightImg: 256
  },
  content: {
    src: chicago,
    inputID: "content-img",
    heightImg: 256
  }
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const styleTransferReducer = (state, action) => {
  switch (action.type) {
    case "RANDOM_CONTENT":
      return onAddRandomContent(state, action);
    case "RANDOM_IMAGE":
      return onAddRandomImage(state, action);
    case "SRC_CONTENT":
      return onAddSrcContent(state, action);
    case "SRC_IMAGE":
      return onAddSrcImage(state, action);
    case "STYLE_HEIGTH":
      return onAddStyleHeight(state, action);
    case "CONTENT_HEIGTH":
      return onAddContentHeight(state, action);
    case "STYLE_RATIO":
      return onAddStyleRatio(state, action);
    case "RANDOM_PARAMETERS":
      return onAddRandomParameters(state, action);
    default:
      return state;
  }
};
const onAddRandomContent = (state, action) => {
  const randomNumber = Math.floor(Math.random() * links.length);
  return {
    ...state,
    content: {
      src: links[randomNumber],
      inputID: state.content.inputID,
      heightImg: state.content.heightImg
    }
  };
};
const onAddRandomImage = (state, action) => {
  const randomNumber = Math.floor(Math.random() * links.length);
  return {
    ...state,
    image: {
      src: links[randomNumber],
      inputID: state.image.inputID,
      heightImg: state.image.heightImg
    }
  };
};
const onAddSrcContent = (state, action) => ({
  ...state,
  content: {
    src: action.src,
    inputID: state.content.inputID,
    heightImg: state.content.heightImg
  }
});
const onAddSrcImage = (state, action) => ({
  ...state,
  image: {
    src: action.src,
    inputID: state.image.inputID,
    heightImg: action.heightImg
  }
});
const onAddStyleHeight = (state, action) => ({
  ...state,
  image: {
    src: state.image.src,
    inputID: state.image.inputID,
    heightImg: action.heightImg
  }
});
const onAddContentHeight = (state, action) => ({
  ...state,
  content: {
    src: state.content.src,
    inputID: state.content.inputID,
    heightImg: action.heightImg
  }
});
const onAddStyleRatio = (state, action) => ({
  ...state,
  styleRatio: action.styleRatio
});

const onAddRandomParameters = (state, action) => {
  const heightImgContent = getRndInteger(256, 400);
  const heightImgStyle = getRndInteger(100, 400);
  const styleRatio = getRndInteger(0, 100);
  const randomNumber = Math.floor(Math.random() * links.length);
  return {
    ...state,
    styleRatio,
    content: {
      src: state.content.src,
      inputID: state.content.inputID,
      heightImg: heightImgContent
    },
    image: {
      src: links[randomNumber],
      inputID: state.image.inputID,
      heightImg: heightImgStyle
    }
  };
};
