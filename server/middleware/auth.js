const jwt = require("jsonwebtoken");
const config = require("../config");
const boom = require("@hapi/boom");
const validateFacebookToken = require("../utils/validateFacebookToken");
const validateGoogle = require("../utils/validateGoogleToken");

/**
 * Verifies if a token is valid
 */
async function middleware(req, res, next) {
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
      return next();
    }
  });

  //verify if is google oauth token
  const isGoogleToken = await validateGoogle(token);
  if (isGoogleToken) {
    return next();
  }

  //verify if is facebook oauth token
  const isFacebookToken = validateFacebookToken(token);
  if (isFacebookToken) {
    return next();
  }
  //is not valid
  next(boom.unauthorized("Invalid token"));
}

module.exports = middleware;
