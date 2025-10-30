import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  Grid,
  Checkbox,
} from "@mui/material";
import parse from "html-react-parser";
import { BiCopy } from "react-icons/bi";
import Snackbar from "@mui/material/Snackbar";

const PriceMatchCalculator = () => {
  const [pricePaid, setPricePaid] = useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [refundWithVAT, setRefundWithVAT] = useState(0);
  const [refundWithoutVAT, setRefundWithoutVAT] = useState(0);
  const [claimNotesDisplay, setClaimNotesDisplay] =
    useState(`Price Match Refund, Price Paid:
     ${pricePaid}, New Price: ${newPrice}, Refund With VAT: ${refundWithVAT}, Refund Without VAT: ${refundWithoutVAT}`);
  const [claimNotesCopy, setClaimNotesCopy] =
    useState(`Price Match Refund, Price Paid:
      ${pricePaid}, New Price: ${newPrice}, Refund With VAT: ${refundWithVAT}, Refund Without VAT: ${refundWithoutVAT}`);

  //snackbar
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updatedClaimNotesDisplay = `Price Match Refund<br/>Price Paid: ${pricePaid} GBP<br/>New Price: ${newPrice} GBP<br/>Refund With VAT: ${refundWithVAT} GBP<br/>Refund Without VAT: ${refundWithoutVAT} GBP`;
    const updatedClaimNotesCopy = `Price Match Refund\nPrice Paid: ${pricePaid} GBP\nNew Price: ${newPrice} GBP\nRefund With VAT: ${refundWithVAT} GBP\nRefund Without VAT: ${refundWithoutVAT} GBP`;
    setClaimNotesDisplay(updatedClaimNotesDisplay);
    setClaimNotesCopy(updatedClaimNotesCopy);
  }, [pricePaid, newPrice, refundWithVAT, refundWithoutVAT]);

  const changePricePaid = (e) => {
    const newPricePaid = parseFloat(e.target.value) || 0;
    setPricePaid(newPricePaid);

    const calculatedRefundWithVAT = newPricePaid - newPrice;
    setRefundWithVAT(roundToTwoDecimals(calculatedRefundWithVAT));
    setRefundWithoutVAT(roundToTwoDecimals(calculatedRefundWithVAT / 1.2));
  };

  const changeNewPrice = (e) => {
    const newPriceValue = parseFloat(e.target.value) || 0;
    setNewPrice(newPriceValue);

    const calculatedRefundWithVAT = pricePaid - newPriceValue;
    setRefundWithVAT(roundToTwoDecimals(calculatedRefundWithVAT));
    setRefundWithoutVAT(roundToTwoDecimals(calculatedRefundWithVAT / 1.2));
  };

  const roundToTwoDecimals = (amount) => {
    return Math.round(amount * 100) / 100;
  };

  return (
    <>
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Grid item xs={3} sx={{ paddingTop: "25px" }}>
          <FormGroup>
            <FormControlLabel
              control={
                <TextField
                  id="pricePaid"
                  label="Price Paid"
                  type="number"
                  fullWidth
                  onChange={(e) => changePricePaid(e)}
                />
              }
            />
          </FormGroup>
          <FormGroup sx={{ marginTop: "15px" }}>
            <FormControlLabel
              control={
                <TextField
                  id="newPrice"
                  label="New Price"
                  type="number"
                  fullWidth
                  onChange={(e) => changeNewPrice(e)}
                />
              }
            />
          </FormGroup>
        </Grid>{" "}
        {/* <Grid item xs={1} sx={{border: "1px solid green"}}>
          {" "}
          <BiCopy
            onClick={() => {
              navigator.clipboard.writeText(parse(claimNotesCopy));
              setOpen(true);
            }}
            style={{
              cursor: "pointer",
              margin: "40 30 50 25",
              color: "green",
              fontSize: "20px",
              flexShrink: 0,
            }}
          />
        </Grid> */}
        <Grid item xs={5}>
          {" "}
          <BiCopy
            onClick={() => {
              navigator.clipboard.writeText(parse(claimNotesCopy));
              setOpen(true);
            }}
            style={{
              cursor: "pointer",
              margin: "0 0 0 0",
              color: "green",
              fontSize: "20px",
              flexShrink: 0,
            }}
          />
          <Typography id="parsedText">{parse(claimNotesDisplay)}</Typography>
        </Grid>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          onClose={() => setOpen(false)}
          autoHideDuration={2000}
          message="Copied to clipboard"
        />
      </Grid>
    </>
  );
};

export default PriceMatchCalculator;
