import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ErrorMessage = ({ message }) => {
  return (
    <Box>
      {" "}
      <Typography variant="h6" sx={{ margin: "30px" }}>
        Error fetching data for this date
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
