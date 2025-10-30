import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import MobileStepper from "@mui/material/MobileStepper";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const News = () => {
  const theme = useTheme();
  const dashboardState = useSelector((state) => state.dashboard);
  const { dashboardData } = dashboardState;

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={11}
      lg={10}
      sx={{
        margin: "auto",
        marginTop: "50px",
        marginBottom: "50px",
        border: "1px solid #ABAC3C",
        borderRadius: "10px",
        boxShadow: " 8px 5px 8px -1px #8888D2;",
        overflow: "hidden",
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "transparent",
        }}
      >
        <Typography variant="h5" component="h2" sx={{ color: "#33118F" }}>
          {dashboardData?.news?.data[activeStep]?.title}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={15000}
      >
        {dashboardData?.news?.data?.map((step, index) => (
          <div key={step._id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  boxShadow: "none",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: { xs: 233, md: 350 },
                    display: "block",
                    overflow: "hidden",
                    width: { xs: "100%", md: "50%" },
                  }}
                  src={step.image}
                  alt={step.title}
                />
                <CardContent sx={{ flex: 1, backgroundColor: "white" }}>
                  <Typography
                    component="h5"
                    variant="h5"
                    sx={{ color: "#33118F" }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {step.source}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {step.description}
                  </Typography>
                  <CardActions>
                    <Button
                      size="small"
                      href={step.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      sx={{
                        backgroundColor: "#33118F",
                        "&:hover": {
                          backgroundColor: "#4722b3",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {dashboardData?.news?.data && (
        <MobileStepper
          steps={dashboardData.news.data.length}
          position="static"
          activeStep={activeStep}
          sx={{ bgcolor: "transparent" }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === dashboardData.news.data.length - 1}
              sx={{ color: "#33118F" }}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: "#33118F" }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      )}
    </Grid>
  );
};

export default News;
