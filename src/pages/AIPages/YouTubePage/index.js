import React, { useState } from 'react';

import { Layout, Loading, Error, Switches } from '../../../components';
import YouTubePlayer from '../../../containers/MediaPlayer/YouTubePlayer';
import { useStyles, iconStyle } from './styles';

import buttons from './buttons';
export default () => {
  const classes = useStyles();
  const [ checkedA, setCheckedA ] = useState(false);
  const [ show, setMenu ] = useState(false);
  const handleChange = name => event => {
    setMenu(!show);
    setCheckedA(event.target.checked);
  };

  return (
    <Layout className={classes.root}>
      <Switches
        checkedA={checkedA}
        handleChange={handleChange}
        lable='Show buttons'
        style={iconStyle}
      />

      <YouTubePlayer buttons={buttons} show={show} />
    </Layout>
  );
};
