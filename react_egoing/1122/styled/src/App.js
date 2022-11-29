import React from "react";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Article } from "./Article";
import styled, { css } from "styled-components";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  padding-bottom: 2rem;
  margin: 0.5rem 0;
  ${props =>
    props.dark &&
    css`
      background-color: black;
      color: white;
    `}
  article {
    border-left: 1px solid gray;
    padding-left: 1rem;
  }
  nav a {
    text-decoration: none;
    ${props =>
      props.dark &&
      css`
        background-color: black;
        color: white;
      `}
  }
`;

function App() {
  return (
    <div>
      <Header />
      <GridLayout dark={true}>
        <Nav />
        <Article />
      </GridLayout>
      <GridLayout dark={false}>
        <Nav />
        <Article />
      </GridLayout>
    </div>
  );
}

export default App;
