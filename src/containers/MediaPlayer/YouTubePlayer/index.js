import React, { useReducer, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { playerReducer, initialState } from './youTubeReducer';
import { TrigerIcon, ButtonNavigation, List } from '../../../components';

import Fullscreen from 'react-full-screen';
import Listener from './listener';
import { useStyles } from './styles';
export default ({ buttons, show }) => {
  const classes = useStyles();
  const [ state, dispatch ] = useReducer(playerReducer, initialState);
  const onReady = e => {
    dispatch({
      type: 'READY',
      player: e.target,
    });
  };

  const [ fullscrin, setFullscrin ] = useState(false);
  const goFull = () => {
    setFullscrin(!fullscrin);
    return setTimeout(() => dispatch({ type: 'FULLSCRIN' }), 500);
  };
  function verifyId (){
    let videoId = '';
    state.videoList.forEach(item => {
      if (item.id == state.curent) {
        videoId = item.link;
      }
    });
    return videoId;
  }
  return (
    <Fullscreen enabled={fullscrin} onChange={isFull => setFullscrin(isFull)}>
      <div className={classes.root}>
        <div className={classes.player}>
          <TrigerIcon triger={state.triger} />
          <YouTube
            autoplay={1}
            videoId={verifyId()}
            onReady={onReady}
            opts={state.opts}
          />
        </div>
        <List
          list={state.videoList}
          dispatch={dispatch}
          curent={state.curent}
        />
      </div>
      <Listener
        dispatch={dispatch}
        fullscrin={fullscrin}
        setFullscrin={setFullscrin}
      />
      {show && (
        <ButtonNavigation
          buttons={buttons}
          dispatch={dispatch}
          className={classes.buttons}
        />
      )}
    </Fullscreen>
  );
};
