const jwt = require("jsonwebtoken");

const jwt = require("jsonwebtoken");

function signToken(user) {
  return jwt.sign(
    { id: user.id || user._id, role: user.role },
    process.env.JWT_SECRET || "super-secret",
    { expiresIn: "2s" }
  );
}

module.exports = {
  signToken
};

module.exports = {
  signToken
};
