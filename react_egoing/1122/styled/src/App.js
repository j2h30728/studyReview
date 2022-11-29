import React from "react";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Article } from "./Article";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="grid">
        <Nav />
        <Article />
      </div>
    </div>
  );
}

export default App;
