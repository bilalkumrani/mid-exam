const path = require("path");
const User = require("../models/userModel");
const signupPage = (req, res) => {
  return res.render("signup");
};

const register = (req, res) => {
  //console.log("body: ", req.body);
  //console.log("files: ", req.files);
  const img = req.files.img;
  img.mv(path.resolve(__dirname, "../assets/images", img.name), (err) => {
    if (err) {
      console.log("there is an error");
    }
    const imgUrl = `/images/${img.name}`;
    const { name, email, phone, state, address, country, city, zip } = req.body;
    User.create(
      { name, email, phone, state, address, country, city, zip, img: imgUrl },
      (err) => {
        if (err) {
          console.log("error in creating");
        }
      }
    );
    return res.redirect("/");
  });
};

const allUsers = (req, res) => {
  User.find({}, (err, data) => {
    console.log(data);
    if (err) {
      console.log("error in fetching");
      return res.redirect("/");
    }
    return res.render("users", { data });
  });
};

module.exports.signupPage = signupPage;
module.exports.register = register;
module.exports.allUsers = allUsers;
