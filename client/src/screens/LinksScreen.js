import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Grid,
  Checkbox,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import { BiCopy } from "react-icons/bi";
import PriceMatchCalculator from "../components/PriceMatchCalculator/PriceMatchCalculator";

// import TemplateText from "../assets/templates4";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const links = [
  {
    name: "Printer/Ink Compatibility",
    url: "https://www.hp.com/gb-en/shop/ink-toner-paper.aspx",
  },
  {
    name: "Privacy Team",
    url: "https://www.hp.com/uk-en/privacy/privacy-feedback.html",
  },
  {
    name: "VAT Calculator",
    url: "http://www.vatcalculator.co.uk/",
  },
  {
    name: "Parcel Force Tracking",
    url: "https://www.parcelforce.com/track-trace",
  },
];

const LinksScreen = () => {
  const sortedLinks = links.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // height: "60vh",
      }}
    >
      {sortedLinks.map((link) => (
        <Grid item xs={2} sx={{ textAlign: "left", margin: "10px" }}>
          <a target="_blank" href={link.url} style={{ textDecoration: "none" }}>
            {" "}
            <Button
              variant="contained"
              color="primary"
              style={{
                marginBottom: "20px",
                width: "100%",
                height: "100%",
                padding: "10px",
              }}
            >
              {link.name}
            </Button>
          </a>{" "}
        </Grid>
      ))}
      <Grid item xs={12} display="flex" justifyContent="center">
        <PriceMatchCalculator />
      </Grid>
    </Grid>
  );
};

export default LinksScreen;
