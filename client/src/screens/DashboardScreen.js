import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import MobileStepper from "@mui/material/MobileStepper";
// import LoadingIcon from "./LoadingIcon";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
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
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { fetchData } from "../actions/dashboardActions";
import {
  TbZodiacAries,
  TbZodiacTaurus,
  TbZodiacGemini,
  TbZodiacCancer,
  TbZodiacLeo,
  TbZodiacVirgo,
  TbZodiacLibra,
  TbZodiacScorpio,
  TbZodiacSagittarius,
  TbZodiacCapricorn,
  TbZodiacAquarius,
  TbZodiacPisces,
} from "react-icons/tb";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
//components
import DateToggle from "../components/Dashboard/DateToggle";
import LoadingIcon from "../components/Loading/Loading";
import ErrorMessage from "../components/Error/Error";
import Forecast from "../components/Dashboard/Forecast";
import Horoscope from "../components/Dashboard/Horoscope";
import Joke from "../components/Dashboard/Joke";
import News from "../components/Dashboard/News";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const DashboardScreen = () => {
  const dashboardState = useSelector((state) => state.dashboard);
  const { dashboardData, loading, error } = dashboardState;

  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <a
          href="https://docs.google.com/spreadsheets/d/18jm6P70TQOF6WZvY_TfGw3a0CKxvfZigiV73o9GPlKs/edit?usp=sharing"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ textDecoration: "none" }}
          >
            DOA/COM Extension Timeline 2024
          </Button>
        </a>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center", margin: "20px 0px 10px" }}>
        <Typography variant="h3" sx={{ color: "#9797D8" }}>
          daily dashboard
        </Typography>
      </Grid>{" "}
      <DateToggle />
      {loading && <LoadingIcon />}
      {error && <ErrorMessage message={error} />}
      {dashboardData?.forecast?.response.success === true && <Forecast />}
      {dashboardData?.horoscope?.response.success === true && <Horoscope />}
      {dashboardData?.joke?.response.success === true && <Joke />}
      {dashboardData?.news?.response.success === true && <News />}
    </Grid>
  );
};

export default DashboardScreen;
