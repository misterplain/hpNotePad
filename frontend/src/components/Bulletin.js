import React from "react";
import { Box, Paper, Grid, Typography, Button } from "@mui/material";

const Bulletin = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid xs={12} sm={10} md={8} marginBottom>
        {" "}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          {/* <Typography variant='h6' padding>
           Change of Mind / DOA Holiday returns extension: 
           <ul>
            <li>Invoiced Nov 25, return end date Jan 31 - returns window 67 days</li>
            <li>Invoiced Nov 26, return end date Jan 31 - returns window 66 days</li>
            <li>....and so on...</li>
            <li>Invoiced Dec 31, return end date Jan 31 - returns window 31 days</li>
           </ul>
          </Typography> */}
          <a
            href='https://docs.google.com/spreadsheets/d/18jm6P70TQOF6WZvY_TfGw3a0CKxvfZigiV73o9GPlKs/edit?usp=sharing'
            target='__blank'
            style={{ textDecoration: "none" }}
          >
            <Button
              variant='contained'
              color='secondary'
              sx={{ textDecoration: "none" }}
            >
              DOA/Change of Mind Extension Timeline
            </Button>
          </a>
        </Box>
      </Grid>
      {/* <Grid xs={12} sm={10} md={8} gutterBottom>
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
            Official Parcel Force strike days (no collections on these days): 
          </Typography>
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default Bulletin;
