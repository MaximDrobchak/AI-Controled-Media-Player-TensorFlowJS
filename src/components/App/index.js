import React, { useState, useEffect, useReducer } from 'react';
import YouTube from 'react-youtube';
import * as speechCommands from '@tensorflow-models/speech-commands';
import {
  onAddNextPlay,
  onAddPrewPlay,
  onPauseVideo,
  onPlayVideo,
  onReady,
  playerReducer,
} from './youTubeReducer';
let recognizer;
const mod = (num, max) => (num % max + max) % max;

const videoId = [
  'h3YVKTxTOgU',
  'mMfxI3r_LyA',
  'OwdlqquJDK4',
  'GFOtRrFH3z0',
  'oNTEsdd1U6w',
  'RQ9_TKayu9s',
  'uelHwf8o7_U',
  'EHkozMIXZ8w',
  '5RDSkR8_AQ0',
  'um4-d7VzZiE',
];

const initialState = {
  videoId,
  curent: 0,
  player: null,
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
      { probabilityThreshold: 0.75 },
    );
    console.log(recognizer.wordLabels());
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
      }, 1000);
    }
  };

  useEffect(
    () => {
      isComandWord();
      if (triger && word === 'right') {
        dispatch({ type: 'NEXT_PLAY' });
        setTriger(false);
      }
      else if (triger && word === 'left') {
        dispatch({ type: 'PREW_PLAY' });
        setTriger(false);
      }
      else if (triger && word === 'stop') {
        dispatch({ type: 'STOP' });
        setTriger(false);
      }
      else if (triger && word === 'go') {
        dispatch({ type: 'PLAY' });
        setTriger(false);
      }
    },
    [ word, triger ],
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
