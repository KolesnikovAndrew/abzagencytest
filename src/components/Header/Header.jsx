import React from "react";
import Logo from "../../assets/Logo.svg";
import styles from "./Header.module.scss";
import Button from "../common/Button/Button";
function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={Logo}></img>
      <ul className={styles.header__ul}>
        <Button value="Users" width="100px" />
        <Button value="Sign up" width="100px" />
      </ul>
    </div>
  );
}

export default Header;
