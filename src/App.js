import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import UserList from "./components/UserList/UserList";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import styles from "./App.module.scss";
function App() {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <UserList />
        <UserRegistration />
      </main>
    </div>
  );
}

export default App;
