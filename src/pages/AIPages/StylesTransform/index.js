import { InputFile } from '../../../components';

import React, { useState, useRef, useEffect } from 'react';

import {
  Layout,
  Loading,
  Error,
  FileChangeWithPreview,
  Slider,
} from '../../../components';
import StyleTransfer from '../../../containers/MyModelAI/StyleTransfer/';
import { useStyles } from './styles';
import { chicago, seaport } from './img';

export default () => {
  const styleImg = useRef();
  const contentImg = useRef();
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <FileChangeWithPreview
          img={styleImg}
          src={chicago}
          inputID='content-img'
          heightImg={340}
        />
        <FileChangeWithPreview
          img={contentImg}
          src={seaport}
          inputID='style-img'
          heightImg={100}
        />
      </div>

      <StyleTransfer styleImg={styleImg} contentImg={contentImg} />
      <Slider />
    </Layout>
  );
};
