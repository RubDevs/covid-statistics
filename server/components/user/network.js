const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");

const config = require("../../config");
const Controller = require("./index");
const validation = require("../../middleware/validationHandler");
const { userSchema } = require("../../schema/user");

function ApiUsers(app) {
  const router = express.Router();

  app.use("/user", router);

  router.post("/register", validation(userSchema), saveUser);
  router.post("/login", validation(userSchema), login);

  //Internal middleware
  async function saveUser(req, res, next) {
    const user = {
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    };
    try {
      const savedUser = Controller.save(user);
      const { Id, email } = savedUser;
      const token = jwt.sign({ Id, email }, config.jwt.secret);
      res.status(201).send({
        token,
      });
    } catch (error) {
      next(boom.internal(error.errors[0].message));
    }
  }

  async function login(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await Controller.getUser(email);
      if (!user) {
        next(boom.badData("Invalid Username or password"));
      }
      const areEqual = await bcrypt.compare(password, user.password);
      if (areEqual === true) {
        const { Id, email } = user;
        const token = jwt.sign({ Id, email }, config.jwt.secret);
        res.status(200).send({
          token,
        });
      } else {
        next(boom.badData("Invalid Username or password"));
      }
    } catch (error) {
      next(boom.internal(error.errors[0].message));
    }
  }
}

module.exports = ApiUsers;
