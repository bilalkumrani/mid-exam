const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

app.listen(PORT, (err) => {
  if (err) {
    console.log("***error in port");
  } else {
    console.log("app is up on port: ", PORT);
  }
});
