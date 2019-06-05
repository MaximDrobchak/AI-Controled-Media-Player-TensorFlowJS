import React from 'react';

import { withFirebase } from '../../firebase';
import YouTubePlayer from '../../containers/MediaPlayer/YouTubePlayer';

const HomePage = ({ authUser }) => (
  <div>
    <YouTubePlayer />
  </div>
);

const condition = authUser => !!authUser;

export default withFirebase(HomePage);
