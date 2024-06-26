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
import { getDOATemplates, doaLinks } from "../data/templateText/doaTemplates";
import {
  getCOMTemplates,
  changeOfMindLinks,
} from "../data/templateText/changeMindTemplates";
import {
  getDamageTemplates,
  damageLinks,
} from "../data/templateText/damageTemplates";
import {
  getMissingTemplates,
  missingLinks,
} from "../data/templateText/missingTemplates";
import {
  getWrongProductTemplates,
  wrongProductLinks,
} from "../data/templateText/wrongProdTemplates";
import {
  getMisroutedTemplates,
  misroutedLinks,
} from "../data/templateText/misroutedTemplates";
import {
  getOrderStatusTemplates,
  orderStatusLinks,
} from "../data/templateText/orderStatusTemplates";
import {
  getOrderStatus2Templates,
  orderStatus2Links,
} from "../data/templateText/orderStatus2Templates";
import {
  getReturnChaserTemplates,
  returnChaserLinks,
} from "../data/templateText/returnChaserTemplates";
import {
  getMiscTemplates,
  miscLinks,
} from "../data/templateText/miscTemplates";
import {
  getMisc2Templates,
  misc2Links,
} from "../data/templateText/misc2Templates";
import {
  getCarePackTemplates,
  carePackLinks,
} from "../data/templateText/carePackTemplates";
import {
  getEmptyBoxTemplates,
  emptyBoxLinks,
} from "../data/templateText/emptyBoxTemplates";
import { babyTemps } from "../data/babyTemps/templatesPage";
import TypeWrapper from "../components/Templates/TypeWrapper";

const TemplatesScreen = () => {
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
  let hour = time.getHours();

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

  const templateFunctions = {
    DOA: getDOATemplates,
    ChangeOfMind: getCOMTemplates,
    Damage: getDamageTemplates,
    Missing: getMissingTemplates,
    WrongProduct: getWrongProductTemplates,
    Misrouted: getMisroutedTemplates,
    OrderStatus: getOrderStatusTemplates,
    OrderStatus2: getOrderStatus2Templates,
    ReturnChaser: getReturnChaserTemplates,
    Misc: getMiscTemplates,
    Misc2: getMisc2Templates,
    CarePack: getCarePackTemplates,
    EmptyBox: getEmptyBoxTemplates,
  };
  //function to set text within editor to template
  const setTemplate = (id, type) => {
    // const template = `get${type}Templates`(name, orderNumber, apology, date, hour, id);

    const templateFunction = templateFunctions[type];
    const template = templateFunction(
      name,
      orderNumber,
      apology,
      date,
      hour,
      id
    );

    setText(template.text);
    setTemplateTitle(template.title);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <form id="back-to-top-anchor">
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
                        id="date"
                        label="Choose Collection Date"
                        type="date"
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
              <Grid item xs={12} sm={6} md={3} lg={3} marginTop>
                {" "}
                <FormGroup>
                  <FormControlLabel
                    control={
                      <TextField
                        id="name"
                        label="Customers Name"
                        type="text"
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
                        id="orderNumber"
                        label="SCEO Number"
                        type="text"
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
                  variant="outlined"
                  color="primary"
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
                  variant="outlined"
                  color="secondary"
                >
                  Safe Values
                </Button>
              </Grid>
            </Grid>
            <div style={{ width: "100%" }}>
              {" "}
              <FormControl
                sx={{ m: 3 }}
                component="fieldset"
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={apology}
                        onChange={handleChange}
                        name="apologyButton"
                      />
                    }
                    label='Add "Apologies for the delay in our reply.."'
                  />
                </FormGroup>
              </FormControl>
            </div>
          </form>
        </Grid>

        <TypeWrapper name="DOA">
          {doaLinks.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "DOA")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Change Of Mind">
          {changeOfMindLinks.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "ChangeOfMind")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Damage">
          {damageLinks.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "Damage")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Missing">
          {missingLinks.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "Missing")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Wrong Product">
          {wrongProductLinks.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "WrongProduct")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Misrouted">
          {misroutedLinks.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "Misrouted")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Order Status">
          {orderStatusLinks.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "OrderStatus")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Order Status # 2">
          {orderStatus2Links.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "OrderStatus2")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Return Chaser">
          {returnChaserLinks.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "ReturnChaser")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Misc">
          {miscLinks.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "Misc")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Misc # 2">
          {misc2Links.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "Misc2")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Care Pack">
          {carePackLinks.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "CarePack")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <TypeWrapper name="Empty Box">
          {emptyBoxLinks.map((link) => {
            return (
              <Link to="editor" spy={true} smooth={true} duration={500}>
                <Button
                  fullWidth
                  color={link.important ? "secondary" : "primary"}
                  onClick={() => setTemplate(link.id, "EmptyBox")}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </TypeWrapper>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              color: "#000080",
              borderBottom: "1px solid grey",
              margin: "20px",
            }}
          >
            Baby Temps
          </Typography>
          {babyTemps.map((template) => {
            return (
              <div
                style={{ display: "flex", marginBottom: "5px" }}
                key={template.id}
              >
                <BiCopy
                  onClick={() => {
                    navigator.clipboard.writeText(template.text);
                    setOpen(true);
                  }}
                  style={{
                    cursor: "pointer",
                    margin: "5 5 0 10",
                    color: "green",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                />
                <Typography>{template.text}</Typography>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={12} sx={{border: "1px solid red", borderRadius:"50px"}} >
          <Typography variant="h5" color="error" sx={{textAlign: "center", padding: "10px"}}>DOUBLE CHECK YOUR TEMPLATES BEFORE SENDING / INCLUDE INFO ABOUT INBOX NOT RECEIVING REPLIES</Typography>
        </Grid>

        <Grid item xs={12} id="editor" sx={{ marginBottom: "80px" }}>
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              color: "#000080",
              borderBottom: "1px solid grey",
              margin: "20px 5px 20px 20px",
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
              fontSize: "20px",
            }}
          />
      
          <CKEditor
            id="editor"
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
          <div id="parsedText" style={{ display: "none" }}>
            {parse(text)}
          </div>

          <Snackbar
            open={open}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            onClose={() => setOpen(false)}
            autoHideDuration={2000}
            message="Copied to clipboard"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatesScreen;
