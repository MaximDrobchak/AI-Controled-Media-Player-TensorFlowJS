import React from "react";
import { useStyles } from "./styles";
import { TagButton } from "../../../../components";
export default ({
  setIsTransform,
  dispatch,
  handleStartStyling,
  handleStyleNetSwitch,
  handleTransformSwitch
}) => {
  const classes = useStyles();
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
    <div className={classes.resultButtons}>
      <TagButton
        title="Return"
        onClick={() => setIsTransform(false)}
        className={classes.tagButtonStyle}
      />
      <TagButton
        title="Random Parameters"
        onClick={handleRandomParam}
        className={classes.tagButtonStyle}
      />
    </div>
  );
};
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
