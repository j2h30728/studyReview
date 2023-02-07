import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const Article = () => {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, React!
      <p>
        <ButtonGroup variant="contained">
          <Button>Create</Button>
          <Button>Update</Button>
        </ButtonGroup>
        <Button variant="outlined">Delete</Button>
      </p>
    </article>
  );
};
