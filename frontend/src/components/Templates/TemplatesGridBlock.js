import React from "react";
import { ButtonGroup, Typography, Grid } from "@mui/material";

const CustomGridBlock = ({ children, name }) => {
  return (
    <Grid item xs={6} sm={3} md={2} lg={2}>
      <Typography variant='h6' component='h2' style={{ textAlign: "center" }}>
        {name}
      </Typography>
      <ButtonGroup
        variant='outlined'
        size='small'
        aria-label='outlined button group'
        style={{ display: "inline" }}
      >
        {children}
      </ButtonGroup>
    </Grid>
  );
};

export default CustomGridBlock;
