import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet, Link } from "react-router-dom";

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
                minHeight: 40
            }
        }
    }
},
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar variant='dense'>
              <Typography
                component='div'
                style={{ color: "lightblue" }}
              >
                HP Store Notepad
              </Typography>
              <List
                sx={{
                  display: "flex",
                  margin: "0px",
                  padding: "0px",
                  justifyContent: "center",
                  width: "80%",
                }}
              >
                <Link
                  to='bulletin'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemText
                        primary={"Bulletin Board"}
                        style={{ textAlign: "center" }}
                      />
                    </ListItemButton>
                  </ListItem>{" "}
                </Link>

                <Link
                  to='/holidays'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemText
                        primary={"Holidays"}
                        style={{ textAlign: "center" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link
                  to='/ebay'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemText
                        primary={"Ebay"}
                        style={{ textAlign: "center" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link
                  to='templates'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemText
                        primary={"Templates"}
                        style={{ textAlign: "center" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link
                  to='contact'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem>
                    <ListItemButton>

                      <ListItemText
                        primary={"Add/Edit"}
                        style={{ textAlign: "center" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </List>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </ThemeProvider>
      <Toolbar />
      <Container>
        {/* <Box sx={{ my: 2 }}>
          <Typography id='back-to-top-anchor'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box> */}
      </Container>
      <ScrollTop {...props}>
        <Fab size='large' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
