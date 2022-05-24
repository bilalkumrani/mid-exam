const express = require("express");
const route = express.Router();

const {
  signupPage,
  register,
  allUsers,
} = require("../controllers/userControllers");

route.get("/signup", signupPage);
route.post("/register", register);
route.get("/users", allUsers);
module.exports = route;
