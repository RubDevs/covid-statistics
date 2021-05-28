const { Sequelize } = require("sequelize");

const config = require("../config");
const { db, user, password, host } = config.mysql;

const sequelize = new Sequelize(db, user, password, {
  host,
  dialect: "mysql",
});

async function handleConnection() {
  try {
    await sequelize.authenticate();
    console.log("DB connected");
  } catch (error) {
    console.error("Unable to connect to DB", error);
  }
}

handleConnection();

module.exports = {
  sequelize,
};
