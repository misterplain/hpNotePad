import React from "react";
import { DOA } from "../assets/doa";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import { Link } from "react-scroll";

// const doaTemplates = DOA;
// console.log(doaTemplates);

const Templates = () => {
  const doaTemplates = DOA;
  console.log(doaTemplates);
  //   const doaTemplates = [
  //     {
  //       id: "1",
  //       button: "Button",
  //     },
  //     {
  //       id: "2",
  //       button: "Button",
  //     },
  //     {
  //       id: "3",
  //       button: "Button",
  //     },
  //   ];
  return (
    <>
      <Grid container > </Grid>
      <Typography variant='h3' id="back-to-top-anchor">Buttons</Typography>
      <Grid item xs={12}></Grid>
      <ButtonGroup variant='outlined' aria-label='outlined button group'>
        {" "}
        {/* {doaTemplates.map((template) => {
          return (
            <Button key={template.id} variant='contained' color>
              {template.button}
            </Button>
          );
        })} */}
        <Link
          to='DOARefundCCCollection'
          spy={true}
          smooth={true}
          duration={500}
        >
          <Button>DOARefundCCCollection</Button>
        </Link>
        <Link
          to='DOARefundPPCollection'
          spy={true}
          smooth={true}
          duration={500}
        >
          <Button>DOARefundPPCollection</Button>
        </Link>
        <Link to='DOARefundCCLabel' spy={true} smooth={true} duration={500}>
          <Button>DOARefundCCLabel</Button>
        </Link>
        <Link to='DOARefundPPLabel' spy={true} smooth={true} duration={500}>
          <Button>DOARefundPPLabel</Button>
        </Link>
      </ButtonGroup>
      <Typography variant='h3'>Templates</Typography>
      <Grid item xs={12}>
        {doaTemplates.map((template) => {
          return (
            <>
              <Typography key={template.id} variant='h5' id={template.id}>
                {template.button}
              </Typography>
              <Typography variant='body1'>{template.text}</Typography>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Templates;
