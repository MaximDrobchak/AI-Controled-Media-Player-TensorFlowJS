import React, {
  useState,
  useRef,
  useEffect,
  useReducer,
  useCallback,
} from 'react';
import { styleTransferReducer, initialState } from './reducer';
import { Layout, Loading, Error } from '../../../components';
import { MDBRow } from 'mdbreact';
import StyleTransfer from '../../../containers/MyModelAI/StyleTransfer/';
import { useStyles } from './styles';

import ImageContainer from './ImageContainer';

export default () => {
  const styleImg = useRef();
  const contentImg = useRef();
  const classes = useStyles();
  const [ state, dispatch ] = useReducer(styleTransferReducer, initialState);

  return (
    <Layout>
      <MDBRow className='mb-2' style={{ justifyContent: 'space-between' }}>
        <ImageContainer
          refImg={styleImg}
          {...state.content}
          dispatch={dispatch}
        />
        <ImageContainer
          refImg={contentImg}
          {...state.image}
          dispatch={dispatch}
        />
      </MDBRow>

      <StyleTransfer styleImg={styleImg} contentImg={contentImg} />
    </Layout>
  );
};
