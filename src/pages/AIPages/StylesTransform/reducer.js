import links, { chicago, seaport } from './img';

export const initialState = {
  styleRatio: 1.0,
  image: {
    src: seaport,
    inputID: 'style-img',
    heightImg: 240,
  },
  content: {
    src: chicago,
    inputID: 'content-img',
    heightImg: 240,
  },
};

export const styleTransferReducer = (state, action) => {
  switch (action.type) {
    case 'RANDOM_CONTENT':
      return onAddRandomContent(state, action);
    case 'RANDOM_IMAGE':
      return onAddRandomImage(state, action);
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
      inputID: 'content-img',
      heightImg: 240,
    },
  };
};
const onAddRandomImage = (state, action) => {
  const randomNumber = Math.floor(Math.random() * links.length);
  return {
    ...state,
    image: {
      src: links[randomNumber],
      inputID: 'style-img',
      heightImg: 240,
    },
  };
};
