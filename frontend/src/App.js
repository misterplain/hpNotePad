import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Bulletin from "./components/Bulletin";
import Holidays from "./components/Holidays";
// import Ebay from "./components/Ebay";
import Templates from "./components/Templates";
import Contact from "./components/Contact";
import Container from "@mui/material/Container";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {" "}
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Navigate to='/bulletin' />} />
            <Route path='/bulletin' element={<Bulletin />} />
            <Route path='/holidays' element={<Holidays />} />
            {/* <Route path='/ebay' element={<Ebay />} /> */}
            <Route path='/templates' element={<Templates />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Navigate to='/bulletin' />} />
          </Routes>
        </Container>
        <section>
          <Outlet></Outlet>
        </section>{" "}
      </Router>
    </>
  );
}

export default App;
