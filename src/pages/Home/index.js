import React from 'react';

import { withAuthorization } from '../../firebase';
import YouTubePlayer from '../../containers/MediaPlayer/YouTubePlayer';

const HomePage = () => (
  <div>
    <YouTubePlayer />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
