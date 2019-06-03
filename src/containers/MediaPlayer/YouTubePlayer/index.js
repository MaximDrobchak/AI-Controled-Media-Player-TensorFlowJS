import React, { useState, useEffect, useReducer } from 'react';
import YouTube from 'react-youtube';
import * as speechCommands from '@tensorflow-models/speech-commands';
import { playerReducer, initialState } from './youTubeReducer';
import { predictWord } from '../../MyModelAI/SpeechCommands/TrainModel/';
let recognizer;

export default () => {
  const [ word, setWord ] = useState('');

  // const predictWord = () => {
  //   const words = recognizer.wordLabels();
  //   recognizer.listen(
  //     ({ scores }) => {
  //       scores = Array.from(scores).map((s, i) => ({
  //         score: s,
  //         word: words[i],
  //       }));
  //       scores.sort((s1, s2) => s2.score - s1.score);
  //       setWord(scores[0].word);
  //     },
  //     { probabilityThreshold: 0.75 },
  //   );
  //   // console.log(recognizer.wordLabels());
  // };

  useEffect(() => {
    const loadModel = async () => {
      recognizer = speechCommands.create('BROWSER_FFT');
      await recognizer.ensureModelLoaded();
      predictWord(setWord);
    };
    loadModel();
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
      }, 2000);
    }
  };
  useEffect(
    () => {
      console.log(triger);
    },
    [ triger ],
  );
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
        console.log('stop');
        dispatch({ type: 'STOP' });
        setTriger(false);
      }
      else if (triger && word === 'go') {
        dispatch({ type: 'PLAY' });
        setTriger(false);
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
