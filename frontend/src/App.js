import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Bulletin from "./components/Bulletin";
import Holidays from "./components/Holidays";
import Ebay from "./components/Ebay";
import Templates from "./components/Templates";
import Contact from "./components/Contact";
import Container from "@mui/material/Container";
import Tools from "./components/Tools";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  HashRouter,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "./api/axios";

//hash router is not for the browser it's for the server

const date = new Date();
const time = date.toLocaleTimeString();
console.log(time);

if (time === "6:10:00 PM") {
  const test = async () => {
    try {
      let data = {
        name: "name test",
        message: "message test"
      };
      // setBool(true);
      const res = await axios.post("/contact", data);
      if (data.message.length === 0) {
        console.log(res.data.message);
        // setBool(false);
      } else if (res.status === 200) {
        console.log(res.data.message);
        // setBool(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
}

function App() {
  return (
    <>
      <HashRouter>
        {" "}
        <Header />
        <Container>
          <Routes>
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/' element={<Bulletin />} />
            <Route path='/holidays' element={<Holidays />} />
            <Route path='/tools' element={<Tools />} />
            <Route path='/ebay' element={<Ebay />} />
            <Route path='/templates' element={<Templates />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Container>
        <section>
          <Outlet></Outlet>
        </section>{" "}
      </HashRouter>
    </>
  );
}

export default App;
