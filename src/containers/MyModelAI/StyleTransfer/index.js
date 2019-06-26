import React, { useState, useEffect, useRef } from 'react';
import { startStyling } from './startStyle';
import { useStyles } from './styles';
import {
  loadMobileNetStyleModel,
  loadOriginalTransformerModel,
  loadInceptionStyleModel,
  loadSeparableTransformerModel,
} from './loadModels';

export default Component => props => {
  const [ styleNet, setStyleNet ] = useState(null);
  const [ transformNet, setTransformNet ] = useState(null);

  useEffect(() => {
    async function setNetworks (){
      const styleNetLoad = await loadInceptionStyleModel();
      const transformNetLoad = await loadOriginalTransformerModel();
      setStyleNet(styleNetLoad);
      setTransformNet(transformNetLoad);
    }
    setNetworks();
    return () => {
      setNetworks();
    };
  }, []);

  return (
    <Component
      {...props}
      styleNet={styleNet}
      transformNet={transformNet}
      startStyling={startStyling}
    />
  );
};
