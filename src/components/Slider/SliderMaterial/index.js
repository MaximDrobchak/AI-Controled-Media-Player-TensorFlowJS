import React, { useState } from "react";
import { useStyles, PrettoSlider, marks } from "./styles";
export default ({ dispatch, inputID }) => {
  const classes = useStyles({ inputID });
  const [styleRatio, setStyleRatio] = useState(0);
  const handleChange = (e, newValue) => {
    setStyleRatio(newValue);
    if (inputID !== "style-img") {
      const ratio = (144 / 100) * newValue;
      dispatch({ type: "CONTENT_HEIGTH", heightImg: 256 + ratio });
    } else {
      const ratio = (300 / 100) * newValue;
      dispatch({ type: "STYLE_HEIGTH", heightImg: 100 + ratio });
    }
  };
  return (
    <div className={classes.root}>
      <PrettoSlider
        orientation="vertical"
        aria-labelledby="vertical-slider"
        marks={marks}
        style={{ color: "red", borderRadius: 4, fontSize: "2em" }}
        value={typeof styleRatio === "number" ? styleRatio : 0}
        onChange={handleChange}
      />
    </div>
  );
};
