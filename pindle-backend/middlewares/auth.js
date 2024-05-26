const user = require("../models/user");
const jwt = require("jsonwebtoken");

async function checkAuth(req, res, next) {
  let { Authorization } = req.headers;
  if (!Authorization) {
    Authorization = req.headers.authorization;
  }
  if (!Authorization || !Authorization.startsWith("Bearer ")) {
    res.status(401).send({ message: "Необходима авторизация" });
    return;
  }
  try {
    const token = Authorization.replace("Bearer ", "");
    const operatorId = jwt.verify(token, "some-secret-key")["_id"];
    req.operator = await user.findById(operatorId);
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "Необходима авторизация" });
    return;
  }
  next();
}

const checkCookiesJWT = (req, res, next) => {
  if (!req.cookies.jwt) {
    return res.redirect("/");
  }
  req.headers.authorization = `Bearer ${req.cookies.jwt}`;
  next();
};

module.exports = { checkAuth, checkCookiesJWT };
