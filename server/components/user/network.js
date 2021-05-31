const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  async function saveUser(req, res) {
    const user = {
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    };
    Controller.save(user)
      .then((user) => {
        const { Id, email } = user;
        const token = jwt.sign({ Id, email }, config.jwt.secret);
        res.status(201).send({
          token,
        });
      })
      .catch((error) => {
        res.status(400).send({ error: error.message });
      });
  }

  async function login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await Controller.getUser(email);
      if (!user) {
        return res.status(400).send({
          error: "Invalid info",
        });
      }
      const areEqual = await bcrypt.compare(password, user.password);
      if (areEqual === true) {
        const { Id, email } = user;
        const token = jwt.sign({ Id, email }, config.jwt.secret);
        res.status(200).send({
          token,
        });
      }
    } catch (error) {
      return res.status(400).send({
        error,
      });
    }
  }
}

module.exports = ApiUsers;
