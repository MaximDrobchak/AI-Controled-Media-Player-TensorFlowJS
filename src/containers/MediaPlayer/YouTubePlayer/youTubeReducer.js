import videoList from './mockList';
export const initialState = {
  videoList,
  curent: 0,
  player: null,
  triger: null,
  opts: {},
  fullscrin: false,
};

export const playerReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_PLAY':
      return onAddNextPlay(state, action);
    case 'PREW_PLAY':
      return onAddPrewPlay(state, action);
    case 'STOP':
      return onPauseVideo(state, action);
    case 'PLAY':
      return onPlayVideo(state, action);
    case 'READY':
      return onReady(state, action);
    case 'FULLSCRIN':
      return onFullScrin(state, action);
    case 'TRIGER':
      return onTriger(state, action);
    case 'CURENT':
      return onCurent(state, action);
    default:
      return state;
  }
};

export const onAddNextPlay = (state, action) => {
  if (state.curent < state.videoList.length - 1) {
    return { ...state, curent: state.curent + 1 };
  }
  return { ...state, curent: 0 };
};

export const onAddPrewPlay = (state, action) => {
  if (state.curent > 0) {
    return { ...state, curent: +state.curent - 1 };
  }
  return { ...state, curent: state.videoList.length - 1 };
};

export const onPauseVideo = (state, action) => ({
  ...state,
  player: state.player.pauseVideo(),
});

export const onPlayVideo = (state, action) => {
  return {
    ...state,
    player: state.player.playVideo(),
  };
};

export const onReady = (state, action) => ({
  ...state,
  player: action.player,
});

export const onFullScrin = (state, action) => {
  const i = document.querySelector('iframe');
  if (state.fullscrin === false) {
    if (i.requestFullscreen) {
      i.requestFullscreen();
      return { ...state, fullscrin: true };
    }
    else if (i.webkitRequestFullscreen) {
      i.webkitRequestFullscreen();
      return { ...state, fullscrin: true };
    }
    else if (i.mozRequestFullScreen) {
      i.mozRequestFullScreen();
      return { ...state, fullscrin: true };
    }
    else if (i.msRequestFullscreen) {
      i.msRequestFullscreen();
      return { ...state, fullscrin: true };
    }
  }
  else {
    if (i.exitFullscreen) {
      i.exitFullscreen();
      return { ...state, fullscrin: false };
    }
    else if (i.mozCancelFullScreen) {
      i.mozCancelFullScreen();
      return { ...state, fullscrin: false };
    }
    else if (i.webkitCancelFullScreen) {
      i.webkitCancelFullScreen();
      return { ...state, fullscrin: false };
    }
  }

  return { ...state };
};

export const onTriger = (state, action) => {
  return { ...state, triger: action.triger };
};

export const onCurent = (state, action) => ({
  ...state,
  curent: action.curent,
});
