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
            <FormGroup sx={{ width: "30%" }}>
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
            <FormGroup sx={{ width: "30%" }}>
              <FormControlLabel
                control={
                  <TextField
                    id='name'
                    label='Customers Name'
                    type='text'
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    // defaultValue={name}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                }
              />
            </FormGroup>
            <FormGroup sx={{ width: "30%" }}>
              <FormControlLabel
                control={
                  <TextField
                    id='orderNumber'
                    label='SCEO Number'
                    type='text'
                    fullWidth
                    value={orderNumber}
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
                setName("");
                setOrderNumber("");
                setDate("");
              }}
              sx={{ width: "5%", marginRight: ".5rem" }}
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
              sx={{ width: "5%" }}
              variant='outlined'
              color='secondary'
            >
              Safe Values
            </Button>
          </form>
        </Grid>
        {/* DOA BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2} id='back-to-top-anchor'>
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
            <Link to='test' spy={true} smooth={true} duration={500}>
              <Button fullWidth>test</Button>
            </Link>
            <Link to='test2' spy={true} smooth={true} duration={500}>
              <Button fullWidth>test2</Button>
            </Link>
            <Link to='DOARepCollection' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Rep-Collect</Button>
            </Link>
            <Link to='DOARepLabel' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Rep-Label</Button>
            </Link>
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
            <Link
              to='DOARefundWireCollection'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-Wire-Collect</Button>
            </Link>
            <Link to='DOARefundCCLabel' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Refund-CC-Label</Button>
            </Link>
            <Link to='DOARefundPPLabel' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Refund-PP-Label</Button>
            </Link>
            <Link
              to='DOARefundWireLabel'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-Wire-Label</Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* CHANGE OF MIND BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2} id='back-to-top-anchor'>
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
              to='COMRefundCCCollection'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-CC-Collect</Button>
            </Link>
            <Link
              to='COMRefundPPCollection'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-PP-Collect</Button>
            </Link>
            <Link
              to='COMRefundWireCollection'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-Wire-Collect</Button>
            </Link>
            <Link to='COMRefundCCLabel' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Refund-CC-Label</Button>
            </Link>
            <Link to='COMRefundPPLabel' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Refund-PP-Label</Button>
            </Link>
            <Link
              to='COMRefundWireLabel'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-Wire-Label</Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* DAMAGE BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Damaged
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='DMGRepCollection' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Rep-Collect</Button>
            </Link>
            <Link to='DMGRepLabel' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Rep-Label</Button>
            </Link>
            <Link
              to='DMGRefundCCCollection'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-CC-Collect</Button>
            </Link>
            <Link
              to='DMGRefundPPCollection'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-PP-Collect</Button>
            </Link>
            <Link
              to='DMGRefundWireCollection'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-Wire-Collect</Button>
            </Link>
            <Link to='DMGRefundCCLabel' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Refund-CC-Label</Button>
            </Link>
            <Link to='DMGRefundPPLabel' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Refund-PP-Label</Button>
            </Link>
            <Link
              to='DMGRefundWireLabel'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Refund-Wire-Label</Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* Missing BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Missing
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='MSGAllRep' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Rep - Mising All</Button>
            </Link>
            <Link to='MSGPartRep' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Rep - Missing Part</Button>
            </Link>
            <Link to='MSGAllRef' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Ref Missing All</Button>
            </Link>
            <Link to='MSGAllWireRef' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Ref Wire Missing All</Button>
            </Link>
            <Link to='MSGPartRef' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Ref Missing Part</Button>
            </Link>
            <Link to='MSGPartWireRef' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Ref Wire Missing Part</Button>
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
