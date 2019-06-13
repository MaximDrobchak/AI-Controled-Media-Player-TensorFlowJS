const videoList = [
  {
    id: 0,
    link: 'ZzHUzctT4bo',
    lable: 'Крестная Семья',
    lableSecondary: 'Хей Герла',
  },
  {
    id: 1,
    link: 'WWPpLDdSTME',
    lable: 'Крестная Семья',
    lableSecondary: 'Мусор на бабки',
  },
  {
    id: 2,
    link: 'Ead0vHhVyzI',
    lable: 'Крестная Семья',
    lableSecondary: 'Гос Дума',
  },
  {
    id: 3,
    link: 'BXnqsPcMyGk',
    lable: 'Крестная Семья',
    lableSecondary: 'Кто не пьёт тот не бёот',
  },
  {
    id: 4,
    link: 'OwdlqquJDK4',
    lable: 'King of my Castel',
    lableSecondary: '1999',
  },
  {
    id: 5,
    link: 'nWAGLkyxQG0',
    lable: 'With Kallyfa',
    lableSecondary: 'Black and Yellow',
  },
  // 'nWAGLkyxQG0',
  // 'T_tAtLAdV10',
  // '8CdcCD5V-d8',
  // 'TOrnUquxtwA',
  // 'mMfxI3r_LyA',
  // 'bfcQg-befiw',
  // 'h3YVKTxTOgU',
  // 'DyDfgMOUjCI',
  // 'tIXIajutwio',
  // 'yyDUC1LUXSU',
  // 'IVUTMGbitsE',
  // 'UXWFqxKU2qA',
  // 'GFOtRrFH3z0',
  // 'bQLi3GTJAug',
  // 'oNTEsdd1U6w',
  // 'jZSPAp8kCl4',
  // '4qlCC1GOwFw',
  // 'RQ9_TKayu9s',
  // 'uelHwf8o7_U',
  // 'EHkozMIXZ8w',
  // '5RDSkR8_AQ0',
  // 'um4-d7VzZiE',
  // '4iQZ9HS0L18',
  // 'eWViUNBV-dw',
  // '4jgfyJcqpSo',
];

export const initialState = {
  videoList,
  curent: 0,
  player: null,
  triger: null,
  opts: {},
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
  if (state.opts.width <= 600) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return { ...state, opts: { height, width } };
  }
  else return { ...state, opts: { height: 400, width: 600 } };
};

export const onTriger = (state, action) => {
  return { ...state, triger: action.triger };
};

export const onCurent = (state, action) => ({
  ...state,
  curent: action.curent,
});
