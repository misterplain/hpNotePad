import axios from "axios";

export default axios.create({
  baseURL: "https://cute-gray-pelican-tux.cyclic.app/notepad",
  // baseURL: "http://localhost:5000/notepad",
});

// export default axios.create({
//   baseURL: "https://activeserver.onrender.com/notepad",
// });

// baseURL: "https://activeserver.onrender.com/notepad",
// baseURL: "http://localhost:5000/notepad",


