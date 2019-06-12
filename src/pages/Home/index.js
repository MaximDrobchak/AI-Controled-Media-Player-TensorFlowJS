import React from 'react';
import { withFirebase } from '../../firebase';
import YouTubePlayer from '../../containers/MediaPlayer/YouTubePlayer';
import { Layout } from '../../components';
const HomePage = () => (
  <Layout>
    <YouTubePlayer />
  </Layout>
);

export default withFirebase(HomePage);
