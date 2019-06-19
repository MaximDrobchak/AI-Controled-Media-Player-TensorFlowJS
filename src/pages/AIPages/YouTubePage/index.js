import React, { useState } from 'react';

import { Layout, Loading, Error, Switches } from '../../../components';
import YouTubePlayer from '../../../containers/MediaPlayer/YouTubePlayer';
import { useStyles, iconStyle } from './styles';

import buttons from './buttons';
export default () => {
  const classes = useStyles();
  const [ checkedA, setCheckedA ] = useState(false);

  return (
    <Layout padding={0}>
      <YouTubePlayer buttons={buttons} />
    </Layout>
  );
};
