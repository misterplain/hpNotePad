import React from "react";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";

const QuickTemplateItem = ({ template }) => {
  const [open, setOpen] = useState(false);
  const copyToClipboard = (e) => {
    setOpen(true);
    navigator.clipboard.writeText(e.toString());
  };
  return (
    <Grid key={template.id}>
      <Grid item xs={12} sx={{ display: "flex" }} marginBottom>
        <BiCopy
          onClick={() => copyToClipboard(template.text)}
          style={{
            cursor: "pointer",
            marginLeft: "10px",
            marginRight: "10px",
            color: "green",
            display: "inline-block",
            flexBasis: "2%",
          }}
        />
        <Typography
          variant="body1"
          style={{
            whiteSpace: "pre-wrap",
            display: "inline-block",
            flexBasis: "98%",
            borderBottom: "1px solid lightgray",
          }}
        >
          {template.text}
        </Typography>
      </Grid>
      <Grid item xs={12}></Grid>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
    </Grid>
  );
};

export default QuickTemplateItem;
