const jwt = require("jsonwebtoken");
const config = require("../config");
const boom = require("@hapi/boom");

/**
 * Verifies if a token is valid
 */
function middleware(req, res, next) {
  const bearerToken = req.headers["authorization"];
  if (!bearerToken) {
    return next(boom.unauthorized("Token required"));
  }
  const [bearer, token] = bearerToken.split(" ");
  if (bearer !== "Bearer") {
    return next(boom.unauthorized("Invalid token format"));
  }

  jwt.verify(token, config.jwt.secret, (error, decoded) => {
    if (!error) {
      next();
    } else {
      next(boom.unauthorized("Invalid token"));
    }
  });
}
module.exports = middleware;
