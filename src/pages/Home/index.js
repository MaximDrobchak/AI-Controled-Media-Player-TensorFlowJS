import React from 'react';

import { withFirebase } from '../../firebase';
import YouTubePlayer from '../../containers/MediaPlayer/YouTubePlayer';

const HomePage = () => (
  <div>
    <YouTubePlayer />
  </div>
);

export default withFirebase(HomePage);
