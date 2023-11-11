import React from "react";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";

const QuickTemplateSection = ({ children, backgroundColor, title }) => {
  const [open, setOpen] = useState(false);
  const copyToClipboard = (e) => {
    setOpen(true);
    navigator.clipboard.writeText(e.toString());
  };
  return (
    <Grid item xs={12} sx={{ backgroundColor: backgroundColor, borderRadius: "30px", padding: "10px", border:"1px solid grey" }} marginBottom>
      <Typography variant="h4" sx={{ textAlign: "center" }} marginBottom>
        {title}
      </Typography>
      {children}
    </Grid>
  );
};

export default QuickTemplateSection;
