import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Forecast = () => {
  const dashboardState = useSelector((state) => state.dashboard);
  const { dashboardData, loading, error } = dashboardState;

  // forecast data
  const dataForecast = dashboardState?.dashboardData?.forecast?.data?.map(
    (item, index) => ({
      keyItem: index,
      date: item.date,
      max: item.max,
      min: item.min,
    })
  );

  return (
    <>
      <Grid
        item
        xs={12}
        sm={10}
        md={5}
        style={{
          height: { xs: "500px", sm: "300px" },
          width: "100%",

          marginBottom: "20px",
        }}
      >
        {dashboardData?.moonPhase?.data && (
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "15px",
              marginLeft: "70px",
            }}
          >
            <Box
              sx={{
                color: "#3C3CAC",
                borderBottom: "1px solid #AC683C",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {dashboardData?.moonPhase?.data?.mainText && (
                <Typography>
                  Tonights moon: {dashboardData.moonPhase.data.mainText}
                </Typography>
              )}
              {dashboardData.moonPhase?.fullMoon && (
                <Typography>
                  Next full moon: {dashboardData.moonPhase.data.fullMoon} days
                </Typography>
              )}
            </Box>
          </Grid>
        )}

        <Grid
          item
          xs={12}
          sm={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <LineChart
            width={350}
            height={275}
            data={dataForecast}
            style={{ padding: "0px" }}
          >
            <XAxis
              dataKey="date"
              label={{ value: "day" }}
              interval={0}
              tick={false}
            ></XAxis>
            <YAxis
              dataKey="max"
              label={{
                value: "Temperature",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="max" stroke="#8884d8" />
            <Line type="monotone" dataKey="min" stroke="#82ca9d" />
          </LineChart>
        </Grid>
      </Grid>
    </>
  );
};

export default Forecast;
