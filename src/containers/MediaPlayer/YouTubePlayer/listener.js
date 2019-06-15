import { useState, useEffect } from 'react';
import * as speechCommands from '@tensorflow-models/speech-commands';

export default ({ dispatch, setFull }) => {
  const [ recognizer, setListen ] = useState(
    speechCommands.create('BROWSER_FFT'),
  );
  const [ word, setWord ] = useState('');

  const predictWord = () => {
    const words = recognizer.wordLabels();
    if (!recognizer.isListening()) {
      recognizer.listen(
        ({ scores }) => {
          scores = Array.from(scores).map((s, i) => ({
            score: s,
            word: words[i],
          }));
          scores.sort((s1, s2) => s2.score - s1.score);
          setWord(scores[0].word);
        },
        { probabilityThreshold: 0.85 },
      );
    }
    else recognizer.stopListening();
  };
  useEffect(() => {
    const loadModel = async () => {
      await recognizer.ensureModelLoaded();
      predictWord(setWord);
    };

    loadModel();
    return () => {
      setListen(null);
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
      dispatch({ type: 'TRIGER', triger: triger });
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
        dispatch({ type: 'STOP' });
        setTriger(false);
      }
      else if (triger && word === 'go') {
        dispatch({ type: 'PLAY' });
        setTriger(false);
      }
      else if (triger && word === 'zero') {
        setFull('zero');
        setTriger(false);
      }
    },
    [ word ],
  );
  return null;
};
