import React, {useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector} from "react-redux";
import MobileStepper from "@mui/material/MobileStepper";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const News = () => {
  const theme = useTheme();
  const dashboardState = useSelector((state) => state.dashboard);
  const { dashboardData, loading, error } = dashboardState;

  //swipable
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
    <>
      {" "}
      <Grid
        item
        xs={12}
        sm={10}
        md={10}
        sx={{
          boxShadow: "13px 13px 45px #adacac, -13px -13px 45px #ABAC3C",

          backgroundColor: "white",
          borderRadius: "20px",
          overflow: "hidden",
          border: "none",
          margin: "50px",
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={8000}
          sx={{ boxShadow: "none" }}
        >
          {dashboardData?.news &&
            dashboardData?.news?.data?.map((step, index) => (
              <Grid
                container
                item
                xs={12}
                key={step._id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: { xs: "column", md: "row" },
                  border: "none",
                  borderRadius: "15px",
                  width: "100%",
                }}
              >
                {Math.abs(activeStep - index) <= 1 ? (
                  <>
                    <Grid
                      item
                      xs={12}
                      md={8}
                      sx={{
                        marginBottom: "10px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {" "}
                      <Box
                        component="img"
                        sx={{
                          width: "100%",
                          maxHeight: "400px",
                          boxShadow: "none",
                          marginTop: { xs: "none", md: "15px" },
                          padding: "none",
                          marginLeft: { xs: "none", md: "30px" },
                          borderRadius: "20px",
                        }}
                        src={step.image}
                        alt={step.body}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      {" "}
                      <Card
                        sx={{
                          boxShadow: {
                            xs: "none",
                            md: "20px 20px 25px #adacac, -20px -20px 25px #738AC8",
                          },
                          borderRadius: "20px",
                          marginRight: { xs: "none", md: "30px" },
                          width: "100%",
                          margin: "-10px",
                          padding: "none",
                        }}
                      >
                        <CardContent>
                          <Typography variant="h5" color="purple">
                            {step.title}
                          </Typography>
                          <Typography
                            variant="body"
                            component="div"
                            sx={{
                              visibility: { xs: "hidden", md: "visible" },
                            }}
                          >
                            {step.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <a
                            href={step.url}
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            {" "}
                            <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                              style={{}}
                            >
                              Learn More
                            </Button>{" "}
                          </a>
                        </CardActions>
                      </Card>
                    </Grid>
                  </>
                ) : null}
              </Grid>
            ))}
        </AutoPlaySwipeableViews>
        {dashboardData.news.data && dashboardData.news.data.length !== 0 && (
          <Grid item xs={12}>
            {" "}
            <MobileStepper
              steps={dashboardData.news.length}
              position="static"
              activeStep={activeStep}
              sx={{ width: "80%", margin: "0 auto" }}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === dashboardData.news.length - 1}
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
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default News;
