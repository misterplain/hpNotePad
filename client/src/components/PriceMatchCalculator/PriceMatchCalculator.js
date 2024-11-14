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

const PriceMatchCalculator = () => {
  const [pricePaid, setPricePaid] = useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [refundWithVAT, setRefundWithVAT] = useState(0);
  const [refundWithoutVAT, setRefundWithoutVAT] = useState(0);
  const [claimNotes, setClaimNotes] = useState(`Price Match Refund, Price Paid:
     ${pricePaid}, New Price: ${newPrice}, Refund With VAT: ${refundWithVAT}, Refund Without VAT: ${refundWithoutVAT}`);

  useEffect(() => {
    const updatedClaimNotes = `Price Match Refund\nPrice Paid: ${pricePaid} GBP\nNew Price: ${newPrice} GBP\nRefund With VAT: ${refundWithVAT} GBP\nRefund Without VAT: ${refundWithoutVAT} GBP`;
    setClaimNotes(updatedClaimNotes);
  }, [pricePaid, newPrice, refundWithVAT, refundWithoutVAT]);

  // //copy to clipboard
  // const copyToClipboard = async () => {
  //   try {
  //     const content = document.getElementById("parsedText").innerHTML;
  //     const blobInput = new Blob([content], { type: "text/html" });
  //     const clipboardItemInput = new ClipboardItem({ "text/html": blobInput });
  //     navigator.clipboard.write([clipboardItemInput]);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   setOpen(true);
  // };

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
      <Grid container display="flex" flexDirection="column" alignItems="center">
        <Grid item>
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
          <FormGroup>
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
        {/* <p>{pricePaid} - pricePaid</p>
        <p>{newPrice} - newPrice</p>
        <p>{refundWithVAT} - refundWithVAT</p>
        <p>{refundWithoutVAT} - refundWithoutVAT</p> */}
        <BiCopy
          onClick={() => {
            navigator.clipboard.writeText(claimNotes);
          }}
          style={{
            cursor: "pointer",
            margin: "5 5 0 10",
            color: "green",
            fontSize: "20px",
            flexShrink: 0,
          }}
        />
        <p id="parsedText">{parse(claimNotes)} - claim notes</p>
      </Grid>
    </>
  );
};

export default PriceMatchCalculator;
