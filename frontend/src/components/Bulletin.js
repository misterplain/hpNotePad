import React from "react";
import { Box, Paper, Grid, Typography } from "@mui/material";

const Bulletin = () => {
  return (
    <Grid container justifyContent="center">
      <Grid xs={12} sm={10} md={8} marginBottom>
        {" "}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid red",
            borderRadius: "10px",
          }}
        >
          <Typography variant='h6' padding>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} sm={10} md={8} gutterBottom>
        {" "}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid blue",
            borderRadius: "10px",
          }}
        >
          <Typography variant='h6' padding>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Bulletin;
