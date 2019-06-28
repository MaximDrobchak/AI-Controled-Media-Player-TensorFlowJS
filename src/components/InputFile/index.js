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
      <input
        type="file"
        className="custom-file-input"
        id={inputID}
        onChange={e => handleSelect(e.target.files[0])}
      />
      <label style={{ position: "absolute" }} htmlFor={inputID}>
        <TagButton title="Choice file" />
      </label>
    </div>
  );
};
