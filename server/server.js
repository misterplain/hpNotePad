require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();
const cors = require("cors");
const path = require("path");
const { logger } = require("./middleware/logger");
const { logEvents } = require("./middleware/logger");
//config
const connectDB = require("./config/connectDB");
const session = require("express-session");
//notepad routes
const contactRoute = require("./routes/contactRoute");
const dataRoute = require("./routes/dataRoute");
const nodeCronRoute = require("./routes/nodeCronRoute");

//Connect to Mongo DB
connectDB();

app.use(
  session({
    secret: "privateKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//custom middleware logger
app.use(logger);
mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});

// console.log(typeof process.env.RAPID_API_KEY)
app.use("/", express.static(path.resolve(path.join(__dirname, "./build"))));

app.use(express.json());
const whitelist = [
  "http://localhost:3000",
  "http://localhost:5000",
  "https://hpnotepad.onrender.com",
  "https://fantasticfy.onrender.com",
  "https://patrickobrien.onrender.com",
  "https://e-commerce-mern-eryu.onrender.com"
];
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Origin: ", origin); 
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

//notepad
app.use("/contact", contactRoute);
app.use("/data", dataRoute);
app.use("/nodeCron", nodeCronRoute);

// //portfolio
// app.use("/portfolio/contact", contactPortfolioRoute);

// //fantasticfy
// app.use("/fantasticfy/data", fetchDataRoute);

// //boilerPlate
// app.use("/auth", authRoutesBoilerPlate);

//keepActive
// keepServerActive()
// app.use("/keepActive", keepActiveRoutes);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server listing to port 5000 only`));
