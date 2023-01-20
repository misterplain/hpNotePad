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
import { useEffect, useState } from "react";
import axios from "./api/axios";

//hash router is not for the browser it's for the server

const date = new Date();
const time = date.toLocaleTimeString();
console.log(time);

// const test1 = async () => {
//   try {
//     let data = {
//       name: "name test1 07:20:00 PM",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const test2 = async () => {
//   try {
//     let data = {
//       name: "name test2 7:20:00 PM",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const test3 = async () => {
//   try {
//     let data = {
//       name: "name test3 07:20:00 PM or 19:00:00",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const test4 = async () => {
//   try {
//     let data = {
//       name: "name test4 '7:20:00 PM or 19:00:00",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const test5 = async () => {
//   try {
//     let data = {
//       name: "name test5 ' 19:00:00",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const test6 = async () => {
//   try {
//     let data = {
//       name: "name test6 every minute",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// if (time === '6:47:00 PM' || "18:47:00") {
//   console.log('activated')
//   test1();
// }

// if (time === "07:35:00 PM") {
//   console.log("activated");
//   test1();
// }

// if (time === "7:35:00 PM") {
//   console.log("activated");
//   test2();


// if (time === "07:35:00 PM" || "19:35:00") {
//   console.log("activated");
//   test3();
// }

// if (time === "7:35:00 PM" || "19:35:00") {
//   console.log("activated");
//   test4();
// }

// if (time === "19:35:00") {
//   console.log("activated");
//   test5();
// }

// if (time === '18:37:00') {
//   console.log('activated')
//   test();
// }

function App() {
  // const [timer, setTimer] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     test6();
  //     setTimer((timer) => timer + 1);
  //   }, 10000000);
  //   return () => clearInterval(interval);

  // }, []);
  return (
    <>
      <HashRouter>
        {" "}
        <Header />
        {/* {timer} */}
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
