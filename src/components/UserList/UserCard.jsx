import React from "react";
import styles from "./UserCard.module.scss";
function UserCard({ userPhoto, userName, userRole, userEmail, userPhone }) {
  return (
    <div className={styles.userCard}>
      <img src={userPhoto} className={styles.userCard__userPhoto}></img>
      <span className={styles.userName}>{userName}</span>
      <p className={styles.userCard__userInfo}>
        {userRole}
        <br />
        {userEmail}
        <br />
        {userPhone}
      </p>
    </div>
  );
}

export default UserCard;
