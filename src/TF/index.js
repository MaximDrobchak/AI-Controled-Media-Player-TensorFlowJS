import * as tf from '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';
import React from 'react';

let recognizer;
class App extends React.Component {
  _isMount = false;

  constructor (props) {
    super(props);

    this.state = {
      word: '',
    };

    this.predictWord = this.predictWord.bind(this);
  }
  async componentDidMount () {
    recognizer = speechCommands.create('BROWSER_FFT');
    await recognizer.ensureModelLoaded();
    this.predictWord();
  }
  predictWord () {
    // Array of words that the recognizer is trained to recognize.
    const words = recognizer.wordLabels();
    recognizer.listen(
      ({ scores }) => {
        // Turn scores into a list of (score,word) pairs.
        scores = Array.from(scores).map((s, i) => ({ score: s, word: words[i] }));
        // Find the most probable word.
        scores.sort((s1, s2) => s2.score - s1.score);
        this.setState({ word: scores[0].word });
      },
      { probabilityThreshold: 0.75 },
    );
  }
  render () {
    return (
      <div>
        <h1>{this.state.word}</h1>
      </div>
    );
  }
}

export default App;
