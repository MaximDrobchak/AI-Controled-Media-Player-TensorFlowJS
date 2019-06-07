import React, { useReducer } from 'react';
import YouTube from 'react-youtube';
import { playerReducer, initialState } from './youTubeReducer';

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
    <div>
      <YouTube
        enablejsapi={1}
        videoId={state.videoId[state.curent]}
        onReady={onReady}
      />
      <Listener dispatch={dispatch} />
      <button onClick={() => dispatch({ type: 'PLAY' })}>Play</button>
      <button onClick={() => dispatch({ type: 'STOP' })}>Pause</button>
      <button onClick={() => dispatch({ type: 'NEXT_PLAY' })}>Next</button>
      <button onClick={() => dispatch({ type: 'PREW_PLAY' })}>Prew</button>
    </div>
  );
};
