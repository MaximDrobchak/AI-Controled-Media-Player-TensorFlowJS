import React, { useState, useEffect } from 'react';
import * as speechCommands from '@tensorflow-models/speech-commands';
let recognizer;
export default ({ dispatch }) => {
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
    // console.log(recognizer.wordLabels());
  };

  useEffect(() => {
    const loadModel = async () => {
      recognizer = speechCommands.create('BROWSER_FFT');
      await recognizer.ensureModelLoaded();
      predictWord();
    };
    loadModel();
    return () => {
      loadModel();
    };
  }, []);

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
  return null;
};
