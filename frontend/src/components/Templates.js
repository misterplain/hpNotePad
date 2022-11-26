import React from "react";
import { DOA } from "../assets/doa";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
// import {DOAValues} from '../assets/doa'
import {DOAValues} from '../assets/doa2'
// import {DOA} from '../assets/doa'
import { Link } from "react-scroll";

// const doaTemplates = DOA;
// console.log(doaTemplates);

// const BringValues = ({name, date, text}) => {
//   return (
//     <>
//       <Typography variant='body1'>
//         {name}
//         {date}
//         {text}
//       </Typography>
//     </>
//   );

// }

const Templates = () => {
  const doaTemplates = DOA;
  // console.log(doaTemplates);
  let date = "2021-10-01";
  let name = "test234"
  return (
    <>
      <Grid container > </Grid>
      <Typography variant='h3' id="back-to-top-anchor">Buttons</Typography>
      <Grid item xs={12}></Grid>
      <ButtonGroup variant='outlined' aria-label='outlined button group'>
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
        {/* {doaTemplates.map((template) => {
          return (
            <>
              <Typography key={template.id} variant='h5' id={template.id}>
                {template.button}
              </Typography>
              <Typography variant='body1'>{template.text}</Typography>
              <BringValues name={name} date={date} text={template.text} />
              <DOAValues name={name} date={date} />
            </>
          );
        })} */}
        <DOAValues name={name} date={date} />
      </Grid>
      {/* <DOAValues name={name} date={date} /> */}
    </>
  );
};

export default Templates;
