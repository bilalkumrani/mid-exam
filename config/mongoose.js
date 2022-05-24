const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mid-app");

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("***error while conneting to database");
});

db.once("open", () => {
  console.log("***connected to database");
});
