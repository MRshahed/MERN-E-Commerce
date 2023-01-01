const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
      if (err) {
        return res.status(403).json("Token invalid");
      } else {
        req.data = data;
        next();
      }
    });
  } else {
    return res.status(401).json("Unauthorized");
  }
};

const verifyTokenAuth = (req, res, next) => {
  VerifyToken(req, res, () => {
    if (req.data.id === req.params.id || req.data.isAdmin) {
      next();
    } else {
      res.status(403).json("Unauthorized");
    }
  });
};
const verifyTokenAdmin = (req, res, next) => {
  VerifyToken(req, res, () => {
    if (req.data.isAdmin) {
      next();
    } else {
      res.status(403).json("Unauthorized");
    }
  });
};
module.exports = { VerifyToken, verifyTokenAuth, verifyTokenAdmin };
