import React, { useState } from "react";
import styles from "./Input.module.scss";

function Input({
  inputType,
  inputName,
  inputPlaceholder,
  handleInputChange,
  error,
}) {
  return (
    <div className={styles.input__box}>
      <input
        className={error ? styles.input__error : styles.input}
        name={inputName}
        type={inputType}
        onChange={handleInputChange}
      ></input>
      <label className={styles.input__label}>{inputPlaceholder}</label>
      <span className={styles.error__message}>{error}</span>
    </div>
  );
}

export default Input;
