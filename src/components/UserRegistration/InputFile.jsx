import React from "react";
import styles from "./UserRegistration.module.scss";
function InputFile({ handleInputChange, error }) {
  return (
    <div>
      <input type="file" id="photo" name="photo" onChange={handleInputChange} />
      <span>{error}</span>
    </div>
  );
}

export default InputFile;
