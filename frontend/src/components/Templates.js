import React from "react";
import { DOA } from "../assets/doa";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// const doaTemplates = DOA;
// console.log(doaTemplates);

const Templates = () => {
  // const doaTemplates = DOA;
  // console.log(doaTemplates);
  const doaTemplates = [
    {
      id: "1",
      button: "Button",
    },
    {
      id: "2",
      button: "Button",
    },
    {
      id: "3",
      button: "Button",
    },
  ];
  return (
    <>
      <Container>
        <Typography variant='h3'>DOA</Typography>
        {/* <ButtonGroup  variant="outlined" aria-label="outlined button group">
          {" "}
          {doaTemplates.map((template) => {
            return (
              <Button key={template.id} variant='contained' color>
                {template.button}
              </Button>
            );
          })}
        </ButtonGroup> */}
        <h1>templates</h1>
      </Container>
    </>
  );
};

export default Templates;
