const signupPage = (req, res) => {
  return res.render("signup");
};

const register = (req, res) => {
  console.log("body: ", req.body);
  console.log("files: ", req.files);
};

module.exports.signupPage = signupPage;
module.exports.register = register;
