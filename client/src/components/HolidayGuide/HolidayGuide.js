import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const HolidayGuide = () => {
  return (
    <Grid
      item
      xs={12}
      sm={10}
      md={10}
      lg={9}
      sx={{
        margin: "10px 0px",
        border: "3px solid #000080",
        padding: "30px",
        borderRadius: "50px",
      }}
    >
      <Typography sx={{ color: "green", marginBottom: "10px" }}>
        UK BH Yes, Spanish BH No - we don´t work as it´s a UK bank holiday, but
        to not work it you must use a comp day. You can choose to work if we
        have backlog, so as not to use the comp day.
      </Typography>
      <Typography sx={{ color: "blue", marginBottom: "10px" }}>
      UK BH No, Spain BH Yes - work as normal, get a comp day in lieu and 1.5
        pay to be paid a month in arrears. To take it off requires a request
        confirmed in meta4. No holiday or comp day will be used for Spanish bank
        holiday that is requested as off.
      </Typography>
      <Typography sx={{ color: "purple" }}>
        UK BH Yes, Spanish BH Yes - no work, no need to request off or use comp
        day. Team will be off automatically.
      </Typography>
    </Grid>
  );
};

export default HolidayGuide;
