import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ErrorMessage = ({ message }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ margin: "30px" }}>
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
