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
import Snackbar from "@mui/material/Snackbar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import { BiCopy } from "react-icons/bi";
import { Link } from "react-scroll";
import getTemplates from "./TemplatesText";
import { doaLinks } from "./TemplatesLinks";
import CustomGridBlock from "./TemplatesGridBlock";

const Templates = () => {
  //dynamic template values
  const [date, setDate] = useState("XXX");
  const [name, setName] = useState("Customer");
  const [orderNumber, setOrderNumber] = useState("in format SCEO********");
  const [apology, setApology] = useState(false);

  //snackbar
  const [open, setOpen] = useState(false);

  //set text editor value
  const [text, setText] = useState("");
  const [templateTitle, setTemplateTitle] = useState("Template / Text Editor");

  //convert date
  const convertDate = (date) => {
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    return `${day}/${month}`;
  };

  let time = new Date();
  let hour = time.getHours()

  //copy to clipboard
  const copyToClipboard = async () => {
    try {
      const content = document.getElementById("parsedText").innerHTML;
      const blobInput = new Blob([content], { type: "text/html" });
      const clipboardItemInput = new ClipboardItem({ "text/html": blobInput });
      navigator.clipboard.write([clipboardItemInput]);
    } catch (e) {
      console.log(e);
    }
    setOpen(true);
  };

  //change handler for apology checkbox
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setApology(!apology);
  };

  //function to set text within editor to template
//   const setTemplate = (id) => {
//     const template = getTemplates(name, orderNumber, apology, date, hour, id);
//     setText(template.text);
//     setTemplateTitle(template.title);
//   };
  //function to set text within editor to template
  const setTemplate = (id, type) => {
    const template = `get${type}Templates`(name, orderNumber, apology, date, hour, id);
    setText(template.text);
    setTemplateTitle(template.title);
  };

  return (
    <>
      <Grid container sx={{ marginTop: "35px" }}>
        <Grid item xs={12}>
          <form id='back-to-top-anchor'>
            <Grid
              container
              sx={{
                display: "flex",
              }}
            >
              <Grid item xs={12} sm={6} md={3} lg={3} marginTop>
                {" "}
                <FormGroup>
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
              </Grid>
              <Grid item xs={12} sm={6} md={3} marginTop>
                {" "}
                <FormGroup>
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
              </Grid>
              <Grid item xs={12} sm={6} md={3} marginTop>
                <FormGroup>
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
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: "flex", justifyContent: "space-around" }}
                marginTop
              >
                {" "}
                <Button
                  onClick={() => {
                    setName("");
                    setOrderNumber("");
                    setDate("");
                    setApology(false);
                  }}
                  sx={{ marginRight: ".5rem" }}
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
                  variant='outlined'
                  color='secondary'
                >
                  Safe Values
                </Button>
              </Grid>
            </Grid>
            <div style={{ width: "100%" }}>
              {" "}
              <FormControl
                sx={{ m: 3 }}
                component='fieldset'
                variant='standard'
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={apology}
                        onChange={handleChange}
                        name='apologyButton'
                      />
                    }
                    label='Add "Apologies for the delay in our reply.."'
                  />
                </FormGroup>
              </FormControl>
            </div>
          </form>
        </Grid>
        {/* DOA BUTTONS */}
        {/* <Grid item xs={6} sm={3} md={2} lg={2}>
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
            {doaLinks.map((link) => {
              return (
                <Link to='editor' spy={true} smooth={true} duration={500}>
                  <Button fullWidth onClick={() => setTemplate(link.id)}>
                    {link.title}
                  </Button>
                </Link>
              );
            })}
          </ButtonGroup>
        </Grid> */}
        <CustomGridBlock name='DOA'>
          {doaLinks.map((link) => {
            return (
              <Link to='editor' spy={true} smooth={true} duration={500}>
                <Button fullWidth onClick={() => setTemplate(link.id)}>
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </CustomGridBlock>

        <Grid item xs={11} marginTop id='editor' sx={{ marginBottom: "80px" }}>
          <Typography
            variant='h6'
            sx={{
              display: "inline-block",
              borderBottom: "1px solid green",
              marginBottom: "10px",
            }}
          >
            {templateTitle}
          </Typography>
          <BiCopy
            onClick={() => {
              copyToClipboard();
            }}
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              color: "green",
            }}
          />
          <CKEditor
            id='editor'
            editor={ClassicEditor}
            data={text}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              // console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              // console.log({ event, editor, data });
              setText(data);
            }}
            onBlur={(event, editor) => {
              // console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              // console.log("Focus.", editor);
            }}
          />
          <div id='parsedText' style={{ display: "none" }}>
            {parse(text)}
          </div>

          <Snackbar
            open={open}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            onClose={() => setOpen(false)}
            autoHideDuration={2000}
            message='Copied to clipboard'
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Templates;
