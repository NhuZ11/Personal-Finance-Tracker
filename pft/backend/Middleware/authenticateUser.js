const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.SECRET;

const authenticateUser = (req, res, next) => {
  const token = req.header("auth-token");
  //checking if token exists or not.
  if (!token) {
    res.status(401).send({ error: "please authenticate using valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET); // decoding the user data by verifying with the token and jwt secret key.
    req.user = data.user; //After successfully verifying the token, the decoded data (here assumed to contain user info) is attached to the req.user object. This allows the user information to be accessed in subsequent middleware or route handlers.
    next();     //pass control to the next middleware or route handler.
  } catch (error) {
    res.status(401).send({ error: "please authenticate using valid token" });
  }
};

module.exports = authenticateUser;
