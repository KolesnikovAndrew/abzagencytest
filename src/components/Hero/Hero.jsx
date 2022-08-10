import React from "react";
import Button from "../common/Button/Button";

import styles from "./Hero.module.scss";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__heading}>
          Test assignment for front-end developer
        </h1>
        <p className={styles.hero__p}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
      </div>
      <Button value="Sign up" width="100px" />
    </div>
  );
}

export default Hero;
