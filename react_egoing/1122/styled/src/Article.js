import React from "react";
import styled from "styled-components";

const Button1 = props => {
  console.log(props);
  return (
    <button style={{ color: "green", fontSize: "2rem" }}>{props.label}</button>
  );
};
const Button2 = styled.button`
  color: green;
  font-size: 2rem;
`;

export const Article = () => {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, React!
      <hr />
      <Button1 label={"Create"}>test</Button1>
      <Button2>update</Button2>
    </article>
  );
};
