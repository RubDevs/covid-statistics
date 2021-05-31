const Joi = require("@hapi/joi");

const userSchema = {
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
};

module.exports = {
  userSchema,
};
