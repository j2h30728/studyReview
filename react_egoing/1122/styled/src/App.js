import React from "react";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Article } from "./Article";
import styles from "./App.module.css";

function App() {
  console.log("style", styles);
  return (
    <div>
      <Header />
      <div className={styles.grid}>
        <Nav />
        <Article />
      </div>
    </div>
  );
}

export default App;
