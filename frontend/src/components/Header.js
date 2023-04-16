import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet, Link } from "react-router-dom";
import {
  BiRightArrowAlt,
  BiLeftArrowAlt,
  BiUpArrowAlt,
  BiDownArrowAlt,
} from "react-icons/bi";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 40,
          minHeight: 40,
        },
      },
    },
  },
});

const drawerWidth = 240;
const navItems = [
  {
    name: "Bulletin Board",
    path: "/bulletin",
  },
  {
    name: "Holidays",
    path: "/holidays",
  },
  {
    name: "Tools/Links",
    path: "/tools",
  },
  {
    name: "Ebay",
    path: "/ebay",
  },
  {
    name: "Chat",
    path: "/chat",
  },
  {
    name: "Templates",
    path: "/templates",
  },
  {
    name: "Add/Edit",
    path: "/contact",
  },
];

//hide on scroll
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

//Scroll to top
function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function Header(props) {
  const { window } = props;
  const [productivity, setProductivity] = useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant='h4' sx={{ my: 2 }}>
        HP Notepad
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item.path} style={{ marginLeft: "0px", padding: "0px" }}>
            {" "}
            <ListItem
              key={item.name}
              sx={{
                textDecoration: "none",
                margin: "15px 0px",
                padding: "0px 0px",
              }}
            >
              <ListItemButton
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  margin: "0px 0px",
                  padding: "0px 0px",
                }}
              >
                <ListItemText
                  primary={item.name}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    margin: "0px 0px",
                    padding: "0px 0px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar variant='dense'>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant='h6'
                component='div'
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
            <AppBar />
            <Box component='nav'>
              <Drawer
                container={container}
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>

            <Toolbar
              variant='dense'
              style={{
                backgroundColor: "lightblue",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <BiDownArrowAlt
                onClick={() => setProductivity(productivity - 1)}
                style={{ fontSize: "2rem", color: "darkblue", margin: "10px" }}
              />
              <Typography variant='h4' color='primary'>
                {productivity}
              </Typography>
              <BiUpArrowAlt
                onClick={() => setProductivity(productivity + 1)}
                style={{ fontSize: "2rem", color: "darkblue", margin: "10px" }}
              />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </ThemeProvider>
      <Toolbar />

      <ScrollTop {...props}>
        <Fab size='large' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
