import React from "react";
import styles from "./UserRegistration.module.scss";
function InputFile({ handleInputChange, error, photo }) {
  return (
    <div className={styles.container}>
      <div className={error ? styles.button__wrap__error : styles.button__wrap}>
        <label className={styles.button} for="upload">
          Upload
          <input
            className={styles.photo}
            name="photo"
            id="upload"
            type="file"
            onChange={handleInputChange}
          />
        </label>
        <div className={styles.input__text}>
          {photo ? photo.name : "Upload your photo"}
        </div>
      </div>
      <span className={styles.error__message}>{error}</span>
    </div>
  );
}

export default InputFile;
