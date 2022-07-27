import React from "react";
import PreloaderSVG from "../../../assets/Preloader.svg";
import styles from "./Preloader.module.scss";
function Preloader() {
  return (
    <img src={PreloaderSVG} alt="loading..." className={styles.preloader}></img>
  );
}

export default Preloader;
