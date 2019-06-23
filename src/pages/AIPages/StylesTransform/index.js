import { InputFile } from '../../../components';

import React, { useState, useRef, useEffect } from 'react';

import {
  Layout,
  Loading,
  Error,
  FileChangeWithPreview,
} from '../../../components';
import StyleTransfer from '../../../containers/MyModelAI/StyleTransfer/';
import { useStyles } from './styles';
import { chicago, seaport } from './img';
// styleImg, contentImg
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
        />
        <FileChangeWithPreview
          img={contentImg}
          src={seaport}
          inputID='style-img'
        />
      </div>

      <StyleTransfer styleImg={styleImg} contentImg={contentImg} />
    </Layout>
  );
};
