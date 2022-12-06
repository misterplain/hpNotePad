import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Fade,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  Grid,
  Modal,
  Container,
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  Chip,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { TemplateText } from "../assets/templates";
import { Link } from "react-scroll";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   "Good morning.",
//   "Good afternoon.",
//   "Thank you for your email to HP Store.",
//   "Apologies for the delay in our reply.",
// ];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Templates = () => {
  const [date, setDate] = useState("XXX");
  const [name, setName] = useState("Customer");
  const [orderNumber, setOrderNumber] = useState("in format SCEO********");
  const [apology, setApology] = useState(false);
  const [intro, setIntro] = useState("");
  const convertDate = (date) => {
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    return `${day}/${month}`;
  };

  const theme = useTheme();
  const [personName, setPersonName] = useState([
    "Thank you for your email to HP Store",
  ]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setApology(!apology);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <form>
            <div style={{ display: "flex" }}>
              <FormGroup sx={{ width: "30%" }}>
                <FormControlLabel
                  control={
                    <TextField
                      id='date'
                      label='Choose Collection Date'
                      type='date'
                      fullWidth
                      onChange={(e) => setDate(convertDate(e.target.value))}
                      onSelect={(e) => setDate(convertDate(e.target.value))}
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
                  setApology(false);
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
                  setDate(
                    "the date confirmed in your claim confirmation email"
                  );
                  setApology(false);
                }}
                sx={{ width: "5%" }}
                variant='outlined'
                color='secondary'
              >
                Safe Values
              </Button>{" "}
            </div>
            <div style={{ width: "100%" }}>
              {" "}
              <FormControl
                sx={{ m: 3 }}
                component='fieldset'
                variant='standard'
              >
                {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={apology}
                        onChange={handleChange}
                        name='apologyButton'
                      />
                    }
                    label='Add "Apologies for the delay in our reply."'
                  />
                </FormGroup>
              </FormControl>
            </div>
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
        {/* MISROUTED BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Misrouted
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='MSRTech' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Tech</Button>
            </Link>
            <Link to='MSRSales' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Sales</Button>
            </Link>
            <Link to='MSRSapos' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Sapos</Button>
            </Link>
            <Link to='MSRRecycling' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Recycling</Button>
            </Link>
            <Link to='MSRPromotions' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Promotions</Button>
            </Link>
            <Link to='MSRNonHP' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Non-HP</Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* MISC BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Misc
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='MSCHolding' spy={true} smooth={true} duration={500}>
              <Button fullWidth>CEL-Holding</Button>
            </Link>
            <Link to='MSCHoldingCRT' spy={true} smooth={true} duration={500}>
              <Button fullWidth>CRT-Holding</Button>
            </Link>
            <Link to='MSCInvoice' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Invoice Copy</Button>
            </Link>
            <Link to='MSCCancelRequest' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Cancel Request</Button>
            </Link>
            <Link to='MSCCancelSuccess' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Cancel Success - CC/PP</Button>
            </Link>
            <Link
              to='MSCCancelSuccessWire'
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button fullWidth>Cancel Success - Wire</Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* CAREPACK BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Care Pack
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='CPCert' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Certificate Attached</Button>
            </Link>
            <Link to='CPHWNeeded' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Hardware Info Needed</Button>
            </Link>
            <Link to='CPNotPhysical' spy={true} smooth={true} duration={500}>
              <Button fullWidth>CP Not Physical</Button>
            </Link>
          </ButtonGroup>
        </Grid>
                {/* ORDER STATUS BUTTONS */}
                <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Order Status
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='OSAddressNeeded' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Address Needed</Button>
            </Link>
            <Link to='OSDelivered' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Delivered</Button>
            </Link>
            <Link to='OSDeliveryToday' spy={true} smooth={true} duration={500}>
              <Button fullWidth>Delivery Today</Button>
            </Link>
            <Link to='OSETAFull' spy={true} smooth={true} duration={500}>
              <Button fullWidth>No ETA - Full</Button>
            </Link>
            <Link to='OSETAPart' spy={true} smooth={true} duration={500}>
              <Button fullWidth>No ETA - Part</Button>
            </Link>
            <Link to='OSEOL' spy={true} smooth={true} duration={500}>
              <Button fullWidth>End of Life</Button>
            </Link>

          </ButtonGroup>
        </Grid>
        <Grid item xs={12} marginTop>
          <TemplateText
            name={name}
            date={date}
            orderNumber={orderNumber}
            apology={apology}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Templates;

// {
//   id: "",
//   title: "",
//   text: ` `,
// }
