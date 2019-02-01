import React, { Component } from 'react'

import MediaPlayer from './MediaPlayer'

import './main.scss'


class Playlist extends Component {
  _handleTrackClick(track) {
    this.props.onTrackClick(track)
  }

  render() {
    const { tracks, currentTrack } = this.props
    return (
      <aside className="media-playlist">
        <header className="media-playlist-header">
          <h3 className="media-playlist-title">Playlist</h3>
        </header>
        <ul className="media-playlist-tracks">
          {tracks.map(track => (
            <li
              key={track.label}
              className={`media-playlist-track ${
                track === currentTrack ? 'is-active' : ''
              }`}
              onClick={this._handleTrackClick.bind(this, track)}
            >
              {track.label}
            </li>
          ))}
        </ul>
      </aside>
    )
  }
}

class App extends Component {
  state = {
    repeatTrack: false,
    autoPlay: true,
  }


  render() {
    const { repeatTrack, autoPlay } = this.state
    const {
      currentTrack,navigatePlaylist,handleTrackClick,playlist
    } = this.props;
    return (
      <div>
      <div className="media-player-wrapper">
            <MediaPlayer
              ref={c => (this._mediaPlayer = c)}
              src={currentTrack.src}
              autoPlay={autoPlay}
              loop={repeatTrack}
              currentTrack={currentTrack.label}
              repeatTrack={repeatTrack}
              onPrevTrack={() => navigatePlaylist(-1)}
              onNextTrack={() => navigatePlaylist(1)}
              onRepeatTrack={() => {
                this.setState({ repeatTrack: !repeatTrack })
              }}
              onPlay={() => !autoPlay && this.setState({ autoPlay: true })}
              onPause={() => this.setState({ autoPlay: false })}
              onEnded={() => !repeatTrack && navigatePlaylist(1)}
            />
            <Playlist
              tracks={playlist}
              currentTrack={currentTrack}
              onTrackClick={handleTrackClick}
            />
          </div>

      </div>
    )
  }
}


export default App