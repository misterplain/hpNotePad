import React from "react";
import { Grid, Typography } from "@mui/material";

const Holidays = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid
        xs={8}
        sx={{
          marginBottom: "10px",
          border: "5px solid purple",
          padding: "20px",
          borderRadius: "50px",
        }}
      >
        <Typography sx={{ color: "red", marginBottom: "10px" }}>
          UK BH Yes, Spanish BH No - we don´t work as it´s a UK bank holiday,
          but to not work it you must use a comp day. You can choose to work if
          we have backlog, so as not to use the comp day.
        </Typography>
        <Typography sx={{ color: "blue", marginBottom: "10px" }}>
          Spain BH YES, UK BH No - work as normal, get a comp day in lieu and
          1.5 pay to be paid a month in arrears. To take it off requires a
          request confirmed in meta4. No holiday or comp day will be used for
          Spanish bank holiday that is requested as off.
        </Typography>
        <Typography sx={{ color: "purple" }}>
          UK BH Yes, Spanish BH Yes - no work, no need to request off or use
          comp day. Team will be off automatically.
        </Typography>
      </Grid>
      <Grid xs={8} sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "blue" }}>
          December 6th - Spain Yes, UK no
        </Typography>
        <Typography sx={{ color: "blue" }}>
          December 8th - Spain Yes, UK no
        </Typography>
        <Typography sx={{ color: "blue" }}>
          December 25th - Spain Yes, UK no
        </Typography>
        <Typography sx={{ color: "purple" }}>
          December 26th - Spain Yes, UK Yes
        </Typography>
        <Typography sx={{ color: "red" }}>
          December 27th - Spain No, UK Yes
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Holidays;
