import React, { useState } from "react";
import { ButtonMDB } from "../../../../components";

import { useStyles } from "./styles";

export default ({
  handleStartStyling,
  dispatch,
  handleStyleNetSwitch,
  handleTransformSwitch
}) => {
  const classes = useStyles();
  const [styleRatio, setStyleRatio] = useState(50);
  const handleChange = e => {
    setStyleRatio(e.target.value);
    dispatch({ type: "STYLE_RATIO", styleRatio: e.target.value / 100 });
  };
  const handleRandomParam = () => {
    const x = getRndInteger(122, 323);
    if (x % 2 == 0) {
      handleStyleNetSwitch("true");
    } else {
      handleStyleNetSwitch("false");
    }

    const y = getRndInteger(122, 323);
    if (y % 2 == 0) {
      handleTransformSwitch("true");
    } else {
      handleTransformSwitch("false");
    }

    dispatch({ type: "RANDOM_PARAMETERS" });
    handleStartStyling();
  };
  return (
    <div className={classes.root}>
      <div style={{ zIndex: 100 }}>
        <ButtonMDB
          onClick={handleStartStyling}
          gradient="peach"
          style={{ width: "50%" }}
        >
          Transformation
        </ButtonMDB>
        <ButtonMDB
          onClick={handleRandomParam}
          gradient="aqua"
          style={{ width: "43%" }}
        >
          Random Param
        </ButtonMDB>
      </div>
      <div className={classes.slider}>
        <div className="my-5">
          <label htmlFor="customRange1" className={classes.lable}>
            Transformation strenght
          </label>
          <input
            type="range"
            className="custom-range"
            id="customRange1"
            value={styleRatio}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
