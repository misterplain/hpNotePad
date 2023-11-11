import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Button, Box } from "@mui/material";
import { fetchData } from "../../actions/dashboardActions";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const DateToggle = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  function formatDate(dateTest) {
    const year = dateTest.getFullYear();
    const month = String(dateTest.getMonth() + 1).padStart(2, "0");
    const day = String(dateTest.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  const today = new Date();

  const [displayedDate, setDisplayedDate] = useState(formatDate(today));

  function getPrevDate(displayedDate) {
    const prevDate = new Date(displayedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setDisplayedDate(formatDate(prevDate));
    dispatch(fetchData(formatDate(prevDate)));
  }

  function getNextDate(displayedDate) {
    const nextDate = new Date(displayedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setDisplayedDate(formatDate(nextDate));
    dispatch(fetchData(formatDate(nextDate)));
  }

  function parseDateFormat(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
  const dashboardState = useSelector((state) => state.dashboard);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const today = new Date();
    const currentHour = today.getHours();
    const currentMinutes = today.getMinutes();

    if (
      dashboardState.date !== formatDate(today) &&
      !dashboardState.loading &&
      currentHour >= 8 &&
      currentMinutes >= 0
    ) {
      dispatch(fetchData(formatDate(today)));
    } else if (Object.keys(dashboardState).length === 0) {
      dispatch(fetchData(formatDate(today)));
    } else if (dashboardState.date && dashboardState.date !== displayedDate) {
      dispatch(fetchData(displayedDate));
    }

    setIsLoading(false);
  }, [dispatch, displayedDate]);
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px 0px 40px 0px",
        }}
      >
        <Button
          onClick={() => getPrevDate(displayedDate)}
          sx={{
            borderRadius: "50px",
            padding: "0px",
            margin: "0px",
            fontSize: "25px",
            color: "#ABAC3C",
          }}
        >
          <FaArrowLeft />
        </Button>
        <Typography variant="h5" sx={{ color: "#3C3CAC" }}>
          {parseDateFormat(displayedDate)}
        </Typography>

        {displayedDate === formatDate(new Date()) ? null : (
          <Button
            onClick={() => getNextDate(displayedDate)}
            sx={{
              borderRadius: "50px",
              padding: "0px",
              margin: "0px",
              fontSize: "25px",
              color: "#ABAC3C",
            }}
          >
            <FaArrowRight />
          </Button>
        )}
      </Box>
    </Grid>
  );
};

export default DateToggle;
