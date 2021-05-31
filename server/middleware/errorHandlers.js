const boom = require("@hapi/boom");
const debug = require("debug")("app:errorHandler");

const config = require("../config");

function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }
}

function logErrors(err, req, res, next) {
  debug(err.stack);
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err;

  res.status(statusCode);
  res.send({ error: withErrorStack(payload, err.stack) || err.message });
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler,
};
