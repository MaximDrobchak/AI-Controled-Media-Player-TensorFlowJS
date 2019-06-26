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

  const [ styleNetSwitch, setStyleNetSwitch ] = useState(false);
  const handleStyleNetSwitch = async () => {
    let styleNetLoad =
      styleNetSwitch ? await loadInceptionStyleModel() :
      await loadMobileNetStyleModel();
    console.log('test');
    setStyleNet(styleNetLoad);
    setStyleNetSwitch(!styleNetSwitch);
  };

  const [ transformNetSwitch, setTransformNetSwitch ] = useState(false);
  const handleTransformSwitch = async () => {
    let transformNetLoad =
      transformNetSwitch ? await loadOriginalTransformerModel() :
      await loadSeparableTransformerModel();
    console.log('test');
    setTransformNet(transformNetLoad);
    setTransformNetSwitch(!transformNetSwitch);
  };
  return (
    <Component
      {...props}
      styleNet={styleNet}
      transformNet={transformNet}
      startStyling={startStyling}
      handleStyleNetSwitch={handleStyleNetSwitch}
      handleTransformSwitch={handleTransformSwitch}
    />
  );
};
