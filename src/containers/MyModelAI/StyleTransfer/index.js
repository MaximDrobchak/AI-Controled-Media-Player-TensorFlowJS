import React, { useState, useEffect, useRef } from 'react';
import { startStyling } from './startStyle';
import combiningStyle from './combiningStyle';
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
  const handleStyleNetSwitch = async triger => {
    if (triger) {
      let styleNetLoad =

          triger === 'true' ? await loadInceptionStyleModel() :
          await loadMobileNetStyleModel();

      setStyleNet(styleNetLoad);
      setStyleNetSwitch(!styleNetSwitch);
    }
    else {
      let styleNetLoad =
        styleNetSwitch ? await loadInceptionStyleModel() :
        await loadMobileNetStyleModel();

      setStyleNet(styleNetLoad);
      setStyleNetSwitch(!styleNetSwitch);
    }
  };

  const [ transformNetSwitch, setTransformNetSwitch ] = useState(false);
  const handleTransformSwitch = async triger => {
    if (triger) {
      let transformNetLoad =

          triger === 'false' ? await loadOriginalTransformerModel() :
          await loadSeparableTransformerModel();

      setTransformNet(transformNetLoad);
      setTransformNetSwitch(!transformNetSwitch);
    }
    else {
      let transformNetLoad =
        transformNetSwitch ? await loadOriginalTransformerModel() :
        await loadSeparableTransformerModel();

      setTransformNet(transformNetLoad);
      setTransformNetSwitch(!transformNetSwitch);
    }
  };
  return (
    <Component
      {...props}
      styleNet={styleNet}
      transformNet={transformNet}
      startStyling={startStyling}
      combiningStyle={combiningStyle}
      handleStyleNetSwitch={handleStyleNetSwitch}
      handleTransformSwitch={handleTransformSwitch}
    />
  );
};
