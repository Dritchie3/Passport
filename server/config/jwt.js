const jwt = require("jsonwebtoken");
// const { SECRET } = process.env;
const ONE_DAY = "1d";
const SECRET = "silverfoxes";
module.exports = {
  secret: SECRET,
  sign: payload => jwt.sign(payload, SECRET, { expiresIn: ONE_DAY })
};
