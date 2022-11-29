import React from "react";
import styles from "./App.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <a href="/" id={styles.title}>
          WEB
        </a>
      </h1>
    </header>
  );
};
