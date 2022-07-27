import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import styles from "./UserList.module.scss";
import { restAPI } from "../../api/api";
import Button from "../common/Button/Button";
import { USERS_PORTION } from "../../utils/constants";
import Preloader from "../common/Preloader/Preloader";

function UserList() {
  const [users, setUsers] = useState();
  const [isLoading, setLoading] = useState(true);
  const [usersShown, setUsersShown] = useState(USERS_PORTION);
  //Component did mount, rendering first users equal to USERS_PORTION
  useEffect(() => {
    const renderUsers = async () => {
      const data = await restAPI.getUsers(USERS_PORTION, setLoading);
      if (!users) {
        setUsers(data.users);
      }
      setLoading(false);
    };
    renderUsers();
  }, [users]);

  const getMoreUsers = async () => {
    setLoading(true);
    const renderMoreUsers = async () => {
      setUsersShown(usersShown + USERS_PORTION);
      let data = await restAPI.getUsers(usersShown + USERS_PORTION, setLoading);
      setUsers(data.users);
      setLoading(false);
    };
    renderMoreUsers();
  };

  return (
    <div className={styles.userListContainer}>
      <h2>Working with GET request</h2>

      <div className={styles.userList}>
        {users &&
          users.map((user) => {
            return (
              <UserCard
                userPhoto={user.photo}
                userName={user.name}
                userRole={user.position}
                userEmail={user.email}
                userPhone={user.phone}
              />
            );
          })}
      </div>
      {isLoading && <Preloader />}
      <Button value="Show more" width="120px" onclick={getMoreUsers} />
    </div>
  );
}

export default UserList;
