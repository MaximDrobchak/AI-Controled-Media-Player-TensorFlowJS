// import * as tf from '@tensorflow/tfjs';
import React, { useState, useEffect } from 'react';
import * as speechCommands from '@tensorflow-models/speech-commands';
import playlist from './playlist';
import MyMedia from '../MyMedia';
let recognizer;
const mod = (num, max) => (num % max + max) % max;

export default () => {
  const [ word, setWord ] = useState('');

  const predictWord = () => {
    const words = recognizer.wordLabels();
    recognizer.listen(
      ({ scores }) => {
        // Turn scores into a list of (score,word) pairs.
        scores = Array.from(scores).map((s, i) => ({
          score: s,
          word: words[i],
        }));
        // Find the most probable word.
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

  const [ currentTrack, setCurrentTrack ] = useState({
    src: null,
    label: 'No media loaded',
  });

  const navigatePlaylist = direction => {
    const newIndex = mod(
      playlist.indexOf(currentTrack) + direction,
      playlist.length,
    );
    setCurrentTrack(playlist[newIndex]);
  };

  const handleTrackClick = track => {
    setCurrentTrack(track);
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
        return navigatePlaylist(1);
      }
      else if (triger && word === 'left') {
        return navigatePlaylist(-1);
      }
    },
    [ word ],
  );

  return (
    <div>
      <h3>{word}</h3>
      <MyMedia
        navigatePlaylist={navigatePlaylist}
        handleTrackClick={handleTrackClick}
        playlist={playlist}
        currentTrack={currentTrack}
        word={triger && word}
      />
    </div>
  );
};
