import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Fade,
  Box,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  Grid,
  Modal,
  Container,
} from "@mui/material";

import { TemplateText } from "../assets/templates";
import { Link } from "react-scroll";

const Templates = () => {
  const [date, setDate] = useState("XXX");
  const [name, setName] = useState("Customer");
  const [orderNumber, setOrderNumber] = useState("in format SCEO********");

  const convertDate = (date) => {
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    return `${day}/${month}`;
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <form style={{ display: "flex" }}>
            <FormGroup sx={{ width: "20%" }}>
              <FormControlLabel
                control={
                  <TextField
                    id='date'
                    label='Choose Collection Date'
                    type='date'
                    fullWidth
                    onChange={(e) => setDate(convertDate(e.target.value))}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                }
              />
            </FormGroup>
            <FormGroup sx={{ width: "20%" }}>
              <FormControlLabel
                control={
                  <TextField
                    id='name'
                    label='Customers Name'
                    type='text'
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                    // defaultValue={name}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                }
              />
            </FormGroup>
            <FormGroup sx={{ width: "20%" }}>
              <FormControlLabel
                control={
                  <TextField
                    id='orderNumber'
                    label='SCEO Number'
                    type='text'
                    fullWidth
                    onChange={(e) => setOrderNumber(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                }
              />
            </FormGroup>
            <Button
              onClick={() => {
                setName("XXX");
                setOrderNumber("XXX");
                setDate("XXX");
              }}
              sx={{ width: "20%", marginRight: ".5rem" }}
              variant='outlined'
              color='primary'
            >
              Clear All
            </Button>
            <Button
              onClick={() => {
                setName("Customer");
                setOrderNumber("in format SCEO********");
                setDate("the date confirmed in your claim confirmation email");
              }}
              sx={{ width: "20%" }}
              variant='outlined'
              color='secondary'
            >
              Safe Values
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} id='back-to-top-anchor'>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            DOA
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            <Link
              to='DOARefundCCCollection'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-CC-Collect</Button>
            </Link>
            <Link
              to='DOARefundPPCollection'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-PP-Collect</Button>
            </Link>
            <Link to='DOARefundCCLabel' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Refund-CC-Label</Button>
            </Link>
            <Link to='DOARefundPPLabel' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Refund-PP-Label</Button>
            </Link>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} id='back-to-top-anchor'>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Change of Mind
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            <Link
              // to='DOARefundCCCollection'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-CC-Collect</Button>
            </Link>
            <Link
              // to='DOARefundPPCollection'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-PP-Collect</Button>
            </Link>
            <Link
              // to='DOARefundCCLabel'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-CC-Label</Button>
            </Link>
            <Link
              // to='DOARefundPPLabel'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-PP-Label</Button>
            </Link>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} marginTop>
          <TemplateText name={name} date={date} orderNumber={orderNumber} />
        </Grid>{" "}
      </Grid>
    </>
  );
};

export default Templates;
