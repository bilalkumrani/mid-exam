const express = require("express");
const route = express.Router();

const { signupPage, register } = require("../controllers/userControllers");

route.get("/signup", signupPage);
route.post("/register", register);
module.exports = route;
