import React, { useReducer, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { playerReducer, initialState } from './youTubeReducer';

import Listener from './listener';
import { useStyles } from './styles';
import {
  ModelPanel,
  List,
  TrigerIcon,
  ButtonNavigation,
} from '../../../components';
export default ({ buttons }) => {
  const classes = useStyles();
  const [ state, dispatch ] = useReducer(playerReducer, initialState);
  const onReady = e => {
    dispatch({
      type: 'READY',
      player: e.target,
    });
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
  const [ full, setFull ] = useState(false);

  useEffect(
    () => {
      if (full == 'zero') {
        dispatch({ type: 'FULLSCRIN' });
      }
      setFull('');
    },
    [ full ],
  );
  return (
    <div>
      <div className={classes.player}>
        <TrigerIcon triger={state.triger} />
        <YouTube
          autoplay={1}
          videoId={verifyId()}
          onReady={onReady}
          opts={state.opts}
          className='youtubecostumplayer-mui'
          allowfullscreen
        />
      </div>

      <ModelPanel buttonTitle={`Player control`} modelTitle={`play list`}>
        <ButtonNavigation buttons={buttons} dispatch={dispatch} />
        <List
          list={state.videoList}
          dispatch={dispatch}
          curent={state.curent}
        />
      </ModelPanel>

      <Listener dispatch={dispatch} setFull={setFull} full={full} />
    </div>
  );
};
