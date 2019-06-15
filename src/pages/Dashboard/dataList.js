import { YouTubeImage } from './img';
import * as routeTypes from '../../constants/routes';

export default [
  {
    id: '0',
    title: 'YouTube',
    description: 'You can manage you-tube media player with help you voice',
    image: YouTubeImage,
    link: {
      to: routeTypes.YOUTUBE,
      lable: 'Live Preview'
    }
  },
];
