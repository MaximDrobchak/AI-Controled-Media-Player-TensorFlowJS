import React from "react";
import { ButtonMDB, TagButton } from "../";

export default ({ inputID, refImg, dispatch }) => {
  const handleSelect = file => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (refImg => e => {
      refImg.current.src = fileReader.result;
      inputID !== "style-img"
        ? dispatch({
            type: "SRC_CONTENT",
            src: refImg.current.src
          })
        : dispatch({
            type: "SRC_IMAGE",
            src: refImg.current.src
          });
    })(refImg);
  };
  return (
    <div className="custom-file" style={{ position: "relative" }}>
      <label style={{ position: "absolute", left: "100%" }} htmlFor={inputID}>
        <TagButton title="Choice file" />
      </label>
      <input
        type="file"
        style={{ maxWidth: 50, position: "absolute", left: "100%" }}
        className="custom-file-input"
        id={inputID}
        onChange={e => handleSelect(e.target.files[0])}
      />
    </div>
  );
};
