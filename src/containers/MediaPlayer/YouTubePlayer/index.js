import React, { useReducer, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { playerReducer, initialState } from './youTubeReducer';
import { TrigerIcon } from '../../../components';

import Listener from './listener';

export default () => {
  const [ state, dispatch ] = useReducer(playerReducer, initialState);
  const onReady = e => {
    dispatch({
      type: 'READY',
      player: e.target,
    });
  };

  return (
    <div
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
      />
      <Listener dispatch={dispatch} />
      <button onClick={() => dispatch({ type: 'FULLSCRIN' })}>Fullscrin</button>
      <button onClick={() => dispatch({ type: 'PLAY' })}>Play</button>
      <button onClick={() => dispatch({ type: 'STOP' })}>Pause</button>
      <button onClick={() => dispatch({ type: 'NEXT_PLAY' })}>Next</button>
      <button onClick={() => dispatch({ type: 'PREW_PLAY' })}>Prew</button>
    </div>
  );
};
