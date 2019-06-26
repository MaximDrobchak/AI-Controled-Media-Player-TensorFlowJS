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

  // const [ styleNetSwitch, setStyleNetSwitch ] = useState(false);
  // useEffect(
  //   () => {
  //     async function setNetworks (){
  //       let styleNetLoad =
  //         styleNetSwitch ? await loadInceptionStyleModel() :
  //         await loadMobileNetStyleModel();

  //       setStyleNet(styleNetLoad);
  //       setStyleNetSwitch(!styleNetSwitch);
  //     }
  //     setNetworks();
  //     return () => {
  //       setNetworks();
  //     };
  //   },
  //   [ styleNetSwitch ],
  // );

  // const [ transformNetSwitch, setTransformNetSwitch ] = useState(false);
  // useEffect(
  //   () => {
  //     async function setNetworks (){
  //       let transformNetLoad =
  //         transformNetSwitch ? await loadOriginalTransformerModel() :
  //         await loadSeparableTransformerModel();

  //       setTransformNet(transformNetLoad);
  //       setTransformNetSwitch(!transformNetSwitch);
  //     }
  //     setNetworks();
  //     return () => {
  //       setNetworks();
  //     };
  //   },
  //   [ transformNetSwitch ],
  // );
  return (
    <Component
      {...props}
      styleNet={styleNet}
      transformNet={transformNet}
      startStyling={startStyling}
      // setStyleNetSwitch={setStyleNetSwitch}
      // setTransformNetSwitch={setTransformNetSwitch}
    />
  );
};
