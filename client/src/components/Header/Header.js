import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// import { makeStyles } from '@material-ui/core/styles';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

//components
import AppBar from "../AppBar/AppBar";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000080",
      // main: "#black",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 40,
          minHeight: 35,
        },
      },
    },
  },
});

const drawerWidth = 240;
const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Holidays",
    path: "/holidays",
  },
  {
    name: "Links",
    path: "/links",
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
  // {
  //   name: "Add/Edit",
  //   path: "/contact",
  // },
];

// const useStyles = makeStyles((theme) => ({
//   slideTransition: {
//     transition: `transform 0.3s ease-in-out`, // Adjust the duration and easing function as needed
//   },
// }));

//hide on scroll
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
      easing={{
        enter: "cubic-bezier(0, 1.5, .8, 1)",
        exit: "cubic-bezier(0, 1.5, .8, 1)",
      }}
    >
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
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", textDecoration: "none", color: "inherit" }}
    >
      <Typography variant="h4" sx={{ my: 2 }}>
        HP Notepad
      </Typography>
      <Divider />
      <Box
        sx={{
          margin: "30px 10px 30px 5px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        {navItems.map((item) => (
          <Link to={item.path} key={item.name}>
            <Button
              key={item.name}
              sx={{
                textDecoration: "none",
                color: "black",
                width: "100%",
                padding: "20px",
              }}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <HideOnScroll {...props}>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
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
            </Drawer>{" "}
            <AppBar
              navItems={navItems}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Box>
        </HideOnScroll>
      </ThemeProvider>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default Header;
