import React from 'react';
import { YouTubeImage } from './img';
import { OpenInNewIcon, NoteAddIcon } from '../../Icons';
import * as routeTypes from '../../constants/routes';
const styles = { width: 24, maxWidth: 24, minWidth: 24, color: 'blue' };

export default [
  {
    id: '0',
    title: 'YouTube',
    describtion: 'You can manage you-tube media player with help you voice',
    image: YouTubeImage,
    preview: {
      icon: <OpenInNewIcon />,
      text: 'preview',
      to: routeTypes.YOUTUBE,
      styles,
      buttonStyles: { width: 110, textColor: 'black' },
    },
    add: {
      icon: <NoteAddIcon />,
      text: 'add',
      to: '/home',
      styles,
      buttonStyles: {
        width: 50,
        marginLeft: 20,
        textColor: 'black',
      },
    },
  },
];
