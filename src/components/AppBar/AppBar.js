import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import {  Link } from "react-router-dom";
import ProductivityTracker from "../ProductivityTracker/ProductivityTracker";

const AppBarComponent = ({navItems, handleDrawerToggle}) => {
  return (
    <>
      {" "}
      <AppBar>
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", color: "lightblue" },
            }}
          >
            HP Notepad
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.path}
                sx={{
                  textDecoration: "none",
                  padding: "0px 0px",
                  margin: "0px 0px",
                  border: "1px solid red",
                }}
              >
                <Button
                  key={item.name}
                  sx={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "0px 8px",
                    margin: "0px 5px",
                    border: "1px solid lightblue",
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
        <ProductivityTracker/>
      </AppBar>
    </>
  );
};

export default AppBarComponent;
