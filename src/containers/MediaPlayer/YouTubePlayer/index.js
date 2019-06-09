import React, { useReducer, useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { playerReducer, initialState } from './youTubeReducer';
import { TrigerIcon } from '../../../components';

import Fullscreen from 'react-full-screen';
import Listener from './listener';
const className = {
  width: '100%',
  height: '100%',
};
export default () => {
  const [ state, dispatch ] = useReducer(playerReducer, initialState);
  const onReady = e => {
    dispatch({
      type: 'READY',
      player: e.target,
    });
  };

  const [ fullscrin, setFullscrin ] = useState(false);
  const inputEl = useRef(null);

  const goFull = () => {
    setFullscrin(!fullscrin);
  };
  return (
    <Fullscreen
      enabled={fullscrin}
      onChange={isFull => setFullscrin(isFull)}
      style={{
        position: 'relative',
        width:
          state.opts.width ? state.opts.width :
          600,
      }}>
      <TrigerIcon triger={state.triger} />
      <YouTube
        autoplay={1}
        videoId={state.videoId[state.curent]}
        onReady={onReady}
        opts={state.opts}
        className={className}
      />
      <Listener dispatch={dispatch} />
      <button onClick={goFull}>Fullscrin</button>
      <button onClick={() => dispatch({ type: 'PLAY' })}>Play</button>
      <button onClick={() => dispatch({ type: 'STOP' })}>Pause</button>
      <button onClick={() => dispatch({ type: 'NEXT_PLAY' })}>Next</button>
      <button onClick={() => dispatch({ type: 'PREW_PLAY' })}>Prew</button>
    </Fullscreen>
  );
};
