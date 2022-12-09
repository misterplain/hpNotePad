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

// import TemplateText from "../assets/templates4";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Tools = () => {
    const [radio, setRadio] = useState("exclude");
  const [exclude, setExclude] = useState(true);
  const [add, setAdd] = useState(false);
  const [vat, setVat] = useState(0);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setRadio(e.target.value);
  }

  const submitVatCalc = (e) => {
    setResult("action");
    e.preventDefault();
    if (radio === "exclude") {
      let vatCalc = vat / 1.2;
      setResult(`£${vat} with VAT, £${vatCalc.toFixed(2)} without VAT`);
    } else {
      let vatCalc = vat * 1.2;
      setResult(`£${vatCalc.toFixed(2)} with VAT, £${vat} without VAT`);
    }
    setVat(0)
  };
  return (
    <Grid container>
      <Grid item xs={12} sx={{ border: "1px red solid" }}>
        <Grid item xs={12} sx={{ border: "1px red solid", display: "flex" }}>
          {" "}
          <Typography variant='h5' gutterBottom sx={{ marginRight: "20px" }}>
            VAT Calculator
          </Typography>
          <a
            href='http://www.vatcalculator.co.uk/'
            target='_blank'
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button
              type='submit'
              variant='outlined'
              color='secondary'
              style={{ marginBottom: "20px" }}
            >
              Online VAT Calculator
            </Button>{" "}
          </a>
        </Grid>

        <form onSubmit={submitVatCalc} style={{ display: "flex" }}>
          <FormControl sx={{ display: "flex" }}>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='exclude'
              name='radio-buttons-group'
              row
            >
              <FormControlLabel
                value='exclude'
                control={<Radio value={exclude}/>}
                label='Exclude VAT'
              />
              <FormControlLabel
                value='add'
                control={<Radio />}
                label='Add VAT'
              />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={
              <TextField
                id='vat'
                // type='number'
                data-type="currency"
                fullWidth
                value={vat}
                onChange={(e) => setVat(e.target.value)}
                defaultValue={vat}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            }
          />

          <Button
            type='submit'
            variant='outlined'
            color='secondary'
            style={{ marginBottom: "20px" }}
          >
            Calculate
          </Button>
          <Typography>{result}</Typography>
        </form>
      </Grid>
      <Grid item xs={12} sx={{ border: "1px solid blue" }}>
        <Typography variant='h5' gutterBottom>Parcel Force Tracker</Typography>
      </Grid>
    </Grid>
  );
};

export default Tools;
