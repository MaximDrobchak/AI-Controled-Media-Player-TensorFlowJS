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
import withStyleTransfer from '../../../containers/MyModelAI/StyleTransfer/';
import { useStyles } from './styles';
import RootPanelParameters from './RootPanelParameters';
import ImageContainer from './ImageContainer';

const StyleTransfetPage = ({
  startStyling,
  styleNet,
  transformNet,
  handleTransformSwitch,
  handleStyleNetSwitch,
}) => {
  const styleImg = useRef();
  const contentImg = useRef();
  const canvas = useRef();
  const combContent = useRef();

  const classes = useStyles();
  const [ state, dispatch ] = useReducer(styleTransferReducer, initialState);
  const handleStartStyling = () => {
    return setTimeout(() => {
      startStyling(
        styleNet,
        transformNet,
        canvas,
        styleImg,
        contentImg,
        state.styleRatio,
        combContent,
      );
    }, 100);
  };
  return (
    <Layout>
      <RootPanelParameters
        handleStartStyling={handleStartStyling}
        dispatch={dispatch}
        handleStyleNetSwitch={handleStyleNetSwitch}
        handleTransformSwitch={handleTransformSwitch}
      />
      <MDBRow className='mb-2' style={{ justifyContent: 'space-between' }}>
        <ImageContainer
          refImg={styleImg}
          {...state.content}
          dispatch={dispatch}
          setSwitch={handleStyleNetSwitch}
        />
        <ImageContainer
          refImg={contentImg}
          {...state.image}
          dispatch={dispatch}
          setSwitch={handleTransformSwitch}
        />
      </MDBRow>
      <canvas ref={canvas} className={classes.canvas} />
      <img
        ref={combContent}
        src='./Exemple/images/beach.jpg'
        style={{ display: 'none' }}
      />
    </Layout>
  );
};
export default withStyleTransfer(StyleTransfetPage);
