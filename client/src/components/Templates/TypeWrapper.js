import React from "react";
import { ButtonGroup, Typography, Grid } from "@mui/material";

const CustomGridBlock = ({ children, name }) => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2} sx={{padding: "10px", border: "1px solid grey", borderRadius: "30px"}}>
      <Typography variant='h5' style={{ textAlign: "center", color: "#000080" }}>
        {name}
      </Typography>
      <ButtonGroup
        variant='outlined'
        size='small'
        aria-label='outlined button group'
        style={{ display: "inline", width: "90%" }}
      >
        {children}
      </ButtonGroup>
    </Grid>
  );
};

export default CustomGridBlock;