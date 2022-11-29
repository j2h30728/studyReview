import React from "react";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Article } from "./Article";

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "grid", gridTemplateColumns: "100px 2fr" }}>
        <Nav />
        <Article />
      </div>
    </div>
  );
}

export default App;
