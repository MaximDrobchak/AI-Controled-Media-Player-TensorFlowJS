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
    icon: 'play',
    type: 'PLAY',
  },
  {
    id: '1',
    value: 'stop',
    label: 'Pause',
    icon: 'pause',
    type: 'STOP',
  },
  {
    id: '3',
    value: 'prew',
    label: 'Prew',
    icon: 'backward',
    type: 'PREW_PLAY',
  },
  {
    id: '2',
    value: 'next',
    label: 'Next',
    icon: 'forward',
    type: 'NEXT_PLAY',
  },
  {
    id: '4',
    value: 'fullscrin',
    label: 'FullScrin',
    icon: 'arrows-alt',
    type: 'FULLSCRIN',
  },
];
