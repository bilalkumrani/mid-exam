const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");
const db = require("./config/mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

//routes
const homeRouter = require("./routes/homeRoute");
const userRouter = require("./routes/userRoutes");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, "assets")));
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(homeRouter);
app.use(userRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log("***error in port");
  } else {
    console.log("app is up on port: ", PORT);
  }
});
