import React, { useState, useEffect, useReducer } from 'react';
import YouTube from 'react-youtube';
import * as speechCommands from '@tensorflow-models/speech-commands';
// const videoIdA = 'XxVg_s8xAms';
// const videoIdB = '-DX3vJiqxm4';
let recognizer;
const mod = (num, max) => (num % max + max) % max;

const videoId = [
  'h3YVKTxTOgU',
  'mMfxI3r_LyA',
  'OwdlqquJDK4',
  'GFOtRrFH3z0',
  'oNTEsdd1U6w',
  'XxVg_s8xAms',
  '-DX3vJiqxm4',
];

const initialState = {
  videoId,
  curent: 0,
  player: null,
};

const onAddNextPlay = (state, action) => {
  if (state.curent < state.videoId.length - 1) {
    return { ...state, curent: state.curent + 1 };
  }
  return { ...state, curent: 0 };
};

const onAddPrewPlay = (state, action) => {
  if (state.curent > 0) {
    return { ...state, curent: +state.curent - 1 };
  }
  return { ...state, curent: state.videoId.length - 1 };
};

const onPauseVideo = (state, action) => ({
  ...state,
  player: state.player.pauseVideo(),
});

const onPlayVideo = (state, action) => ({
  ...state,
  player: state.player.playVideo(),
});
const onReady = (state, action) => ({
  ...state,
  player: action.player,
});

const playerReducer = (state, action) => {
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

export default () => {
  const [ word, setWord ] = useState('');

  const predictWord = () => {
    const words = recognizer.wordLabels();
    recognizer.listen(
      ({ scores }) => {
        scores = Array.from(scores).map((s, i) => ({
          score: s,
          word: words[i],
        }));
        scores.sort((s1, s2) => s2.score - s1.score);
        setWord(scores[0].word);
      },
      { probabilityThreshold: 0.5 },
    );
  };

  useEffect(async () => {
    recognizer = speechCommands.create('BROWSER_FFT');
    await recognizer.ensureModelLoaded();
    predictWord();
  }, []);

  const [ state, dispatch ] = useReducer(playerReducer, initialState);
  const onReady = e => {
    dispatch({
      type: 'READY',
      player: e.target,
    });
  };

  const [ triger, setTriger ] = useState(false);

  const isComandWord = () => {
    if (word === 'up') {
      setTriger(true);
      return setTimeout(() => {
        setTriger(false);
      }, 5000);
    }
  };

  useEffect(
    () => {
      isComandWord();
      if (triger && word === 'right') {
        dispatch({ type: 'NEXT_PLAY' });
      }
      else if (triger && word === 'left') {
        dispatch({ type: 'PREW_PLAY' });
      }
      else if (triger && word === 'stop') {
        dispatch({ type: 'STOP' });
      }
      else if (triger && word === 'go') {
        dispatch({ type: 'PLAY' });
      }
    },
    [ word ],
  );

  return (
    <div>
      <YouTube
        enablejsapi={1}
        videoId={state.videoId[state.curent]}
        onReady={onReady}
        modestbranding={1}
        iv_load_policy={3}
        playsinline={1}
      />
      <button onClick={() => dispatch({ type: 'PLAY' })}>Play</button>
      <button onClick={() => dispatch({ type: 'STOP' })}>Pause</button>
      <button onClick={() => dispatch({ type: 'NEXT_PLAY' })}>Next</button>
      <button onClick={() => dispatch({ type: 'PREW_PLAY' })}>Prew</button>
    </div>
  );
};
// export default class extends React.Component {
//   constructor (props) {
//     super(props);

//     this.state = {
//       player: null,
//       curent: 0,
//     };

//     this.onReady = this.onReady.bind(this);
//     this.onChangeVideo = this.onChangeVideo.bind(this);
//     this.onPlayVideo = this.onPlayVideo.bind(this);
//     this.onPauseVideo = this.onPauseVideo.bind(this);
//   }

//   onReady (event) {
//     console.log(
//       `YouTube Player object for videoId: "${this.state
//         .curent}" has been saved to state.`,
//     ); // eslint-disable-line
//     this.setState({
//       player: event.target,
//     });
//   }

//   onPlayVideo () {
//     this.state.player.playVideo();
//   }

//   onPauseVideo () {
//     this.state.player.pauseVideo();
//   }

//   onChangeVideo () {
//     this.setState({
//       curent: this.state.curent + 1,
//     });
//   }

//   render () {
//     return (
//       <div>
//         <YouTube videoId={videoId[this.state.curent]} onReady={this.onReady} />
//         <button onClick={this.onPlayVideo}>Play</button>
//         <button onClick={this.onPauseVideo}>Pause</button>
//         <button onClick={this.onChangeVideo}>Change Video</button>
//       </div>
//     );
//   }
// }
