import Box from "@mui/material/Box";
import Header from "../Header/Header";

const styles = {
  wrapper: () => ({
    display: "flex",
    flexDirection: "column",
    padding: "20px"
  }),
};

const Layout = ({ children }) => {
  return (
      <Box sx={styles.wrapper}>
        <Header />
        <Box sx={{ minHeight: "100vh", marginTop: "30px" }}>{children}</Box>
      </Box>

  );
};

export default Layout;