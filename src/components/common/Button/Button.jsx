import React from "react";
import styles from "./Button.module.scss";
function Button({ width, value, disabled = false, onclick, type = "button" }) {
  return (
    <button
      className={styles.header__button}
      style={{ width: width }}
      disabled={disabled}
      onClick={onclick}
      type={type}
    >
      {value}
    </button>
  );
}

export default Button;
