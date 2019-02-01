// import * as tf from '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';
import React from 'react';
import playlist from './playlist';
import MyMedia from '../MyMedia';

let recognizer;
const mod = (num, max) => (num % max + max) % max;

class App extends React.Component {
  _isMount = false;
  constructor (props) {
    super(props);

    this.state = {
      word: '',
      currentTrack: { src: null, label: 'No media loaded' },
      flag: true,
    };

    this.predictWord = this.predictWord.bind(this);
    this.navigatePlaylist = this.navigatePlaylist.bind(this);
    this.handleTrackClick = this.handleTrackClick.bind(this);
  }
  async componentDidMount () {
    this._isMounted = true;
    recognizer = speechCommands.create('BROWSER_FFT');
    await recognizer.ensureModelLoaded();
    this.predictWord();
    if (this._isMounted) {
      this.setState({ flag: true });
      this.timer = setTimeout(() => this.setState({ flag: false }), 5000);
    }
  }

  navigatePlaylist = direction => {
    const newIndex = mod(
      playlist.indexOf(this.state.currentTrack) + direction,
      playlist.length,
    );
    this.setState({ currentTrack: playlist[newIndex] });
  };
  handleTrackClick = track => {
    this.setState({ currentTrack: track });
  };
  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.word !== nextState.word) {
      return true;
    }

    return false;
  }
  componentDidUpdate () {
    if (this.state.word == 'up') {
      this.setState({ flag: true });

      this.timer = setTimeout(() => {
        this.setState({ flag: false });
      }, 5000);
    }

    if (this.state.flag) {
      this.listener();
    }
  }
  componentWillUnmount () {
    clearInterval(this.timer);
    this._isMounted = false;
  }
  listener () {
    const { word } = this.state;

    if (word == 'right') {
      return this.navigatePlaylist(1);
    }
    else if (word == 'left') {
      return this.navigatePlaylist(-1);
    }
  }
  predictWord () {
    // Array of words that the recognizer is trained to recognize.
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
        this.setState({ word: scores[0].word });
      },
      { probabilityThreshold: 0.75 },
    );
  }
  render () {
    return (
      <div>
        <h1>{this.state.word}</h1>
        {this.state.flag && <Flag />}
        <MyMedia
          navigatePlaylist={this.navigatePlaylist}
          handleTrackClick={this.handleTrackClick}
          playlist={playlist}
          currentTrack={this.state.currentTrack}
        />
      </div>
    );
  }
}

function Flag (){
  return (
    <div
      style={{
        width: 100,
        height: 100,

        background: 'black',
      }}
    />
  );
}
export default App;
