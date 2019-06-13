import React from 'react';
import {
  PlayCircleFillIcon,
  PauseCircleFilledFillIcon,
  SkipNextIedcon,
  SkipPreviousIcon,
  FullscreenIcon,
  FullscreenExitIcon,
} from '../../../Icons';
export default [
  {
    id: '0',
    value: 'play',
    label: 'Play',
    icon: <PlayCircleFillIcon />,
    type: 'PLAY',
  },
  {
    id: '1',
    value: 'stop',
    label: 'Pause',
    icon: <PauseCircleFilledFillIcon />,
    type: 'STOP',
  },
  {
    id: '3',
    value: 'prew',
    label: 'Prew',
    icon: <SkipPreviousIcon />,
    type: 'PREW_PLAY',
  },
  {
    id: '2',
    value: 'next',
    label: 'Next',
    icon: <SkipNextIedcon />,
    type: 'NEXT_PLAY',
  },
  {
    id: '4',
    value: 'fullscrin',
    label: 'FullScrin',
    icon: <FullscreenIcon />,
    type: 'FULLSCRIN',
  },
];
