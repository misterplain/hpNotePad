import React,{useState,useEffect} from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Outlet, HashRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function App() {
  const theme = useTheme();
  const [viewport, setViewport] = useState("");

  useEffect(() => {
    function handleResize() {
      const keys = Object.keys(theme.breakpoints.values);
      let currentViewport = "";
      for (let i = keys.length - 1; i >= 0; i--) {
        const breakpoint = theme.breakpoints.values[keys[i]];
        if (window.innerWidth >= breakpoint) {
          currentViewport = keys[i];
          break;
        }
      }
      setViewport(currentViewport);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.breakpoints]);

  return (
    <HashRouter>
      <Layout>
        <AppRoutes />
      </Layout>
      <Box
          position="fixed"
          bottom={0}
          left={0}
          bgcolor="rgba(255, 255, 255, 0.5)"
          padding={1}
          borderRadius={5}
        >
          <Typography>{viewport}</Typography>
        </Box>
      <section>
        <Outlet></Outlet>
      </section>
    </HashRouter>
  );
}

export default App;
