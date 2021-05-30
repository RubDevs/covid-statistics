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

async function list(model) {
  try {
    const lastDate = await model.max("CreationDate");
    const data = await model.findAll({
      where: {
        CreationDate: lastDate,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}

async function save(model, data) {
  try {
    const entity = await model.create(data);
    return entity.dataValues;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function get(model, field, data) {
  try {
    const entity = await model.findOne({
      where: {
        email: data,
      },
    });
    if (entity) {
      return entity.dataValues;
    }
    return Promise.reject("Validation error");
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  sequelize,
  list,
  save,
  get,
};
