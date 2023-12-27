import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet, Link } from "react-router-dom";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import styles from "./styles";

const ProductivityTracker = () => {
  const [productivity, setProductivity] = useState(0);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.shiftKey === true) {
        if (event.key === "ArrowUp") {
          setProductivity(productivity + 1);
        } else if (event.key === "ArrowDown") {
          setProductivity(productivity - 1);
        } else if (event.key === "Backspace") {
          setProductivity(0);
        }
      } else {
        console.log("shift key not pressed");
      }
    },
    [productivity]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Toolbar
      variant="dense"
      style={{
        backgroundColor: "#3d5a80",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <BiDownArrowAlt
        onClick={() => setProductivity(productivity - 1)}
        style={{ fontSize: "2rem", color: "white", margin: "10px" }}
      />
      <Typography variant="h4" color="white">
        {productivity}
      </Typography>
      <BiUpArrowAlt
        onClick={() => setProductivity(productivity + 1)}
        style={{ fontSize: "2rem", color: "white", margin: "10px" }}
      />
    </Toolbar>
  );
};

export default ProductivityTracker;
