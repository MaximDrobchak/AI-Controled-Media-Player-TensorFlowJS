import links, { chicago, seaport } from './img';

export const initialState = {
  styleRatio: 1.0,
  image: {
    src: seaport,
    inputID: 'style-img',
    heightImg: 250,
  },
  content: {
    src: chicago,
    inputID: 'content-img',
    heightImg: 250,
  },
};

export const styleTransferReducer = (state, action) => {
  switch (action.type) {
    case 'RANDOM_CONTENT':
      return onAddRandomContent(state, action);
    case 'RANDOM_IMAGE':
      return onAddRandomImage(state, action);
    case 'SRC_CONTENT':
      return onAddSrcContent(state, action);

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
      heightImg: state.content.heightImg,
    },
  };
};
const onAddRandomImage = (state, action) => {
  const randomNumber = Math.floor(Math.random() * links.length);
  return {
    ...state,
    image: {
      src: links[randomNumber],
      inputID: state.image.inputID,
      heightImg: state.image.heightImg,
    },
  };
};
const onAddSrcContent = (state, action) => ({
  ...state,
  content: {
    src: action.src,
    inputID: state.content.inputID,
    heightImg: state.content.heightImg,
  },
});
