const videoId = [
  'DyDfgMOUjCI',
  'IVUTMGbitsE',
  'h3YVKTxTOgU',
  'mMfxI3r_LyA',
  '8CdcCD5V-d8',
  'OwdlqquJDK4',
  'GFOtRrFH3z0',
  'bQLi3GTJAug',
  'oNTEsdd1U6w',
  'jZSPAp8kCl4',
  '4qlCC1GOwFw',
  'RQ9_TKayu9s',
  'uelHwf8o7_U',
  'EHkozMIXZ8w',
  '5RDSkR8_AQ0',
  'um4-d7VzZiE',
  '4iQZ9HS0L18',
];

export const initialState = {
  videoId,
  curent: 0,
  player: null,
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
    default:
      return state;
  }
};

export const onAddNextPlay = (state, action) => {
  if (state.curent < state.videoId.length - 1) {
    return { ...state, curent: state.curent + 1 };
  }
  return { ...state, curent: 0 };
};

export const onAddPrewPlay = (state, action) => {
  if (state.curent > 0) {
    return { ...state, curent: +state.curent - 1 };
  }
  return { ...state, curent: state.videoId.length - 1 };
};

export const onPauseVideo = (state, action) => ({
  ...state,
  player: state.player.pauseVideo(),
});

export const onPlayVideo = (state, action) => ({
  ...state,
  player: state.player.playVideo(),
});
export const onReady = (state, action) => ({
  ...state,
  player: action.player,
});
