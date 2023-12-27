import React from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Typography,
} from "@mui/material";
import { FaArrowRight } from "react-icons/fa";

const Joke = () => {

    const dashboardState = useSelector((state) => state.dashboard);
    const { dashboardData, loading, error } = dashboardState;


  return (
    <Grid
      item
      xs={12}
      sm={10}
      sx={{
        display: "flex",
        marginBottom: "40px",
        justifyContent: "space-around",
      }}
    >
      <Grid
        item
        xs={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: " center",

          textAlign: "center",
        }}
      >
        <Typography sx={{ padding: "10px", color: "#33118F", fontSize: "15px" }}>
         {dashboardData.joke.data.setup}
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: " center",
          color: "#68AC3C",
          fontSize: "40px",
        }}
      >
        <FaArrowRight/>
      </Grid>

      <Grid
        item
        xs={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: " center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            padding: "10px",
            color: "#33118F",
            fontSize: "15px",
          }}
        >
          {dashboardData.joke.data.punchline}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Joke;
