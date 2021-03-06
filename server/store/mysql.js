const { Sequelize } = require("sequelize");

const config = require("../config");
const { db, user, password, host } = config.mysql;

const sequelize = new Sequelize(db, user, password, {
  host,
  dialect: "mysql",
  logging: false,
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
    return Promise.reject("Incorrect Username or password");
  } catch (error) {
    return Promise.reject(error);
  }
}

async function ratios() {
  try {
    const [results, metadata] = await sequelize.query(`SELECT 
      c.CreationDate,
      c.CountryCodeId "Code",
      cn.Name,
      c.Deaths,
      p.TotalPopulation, 
      c.Deaths /100000 'Ratio_per_100_000',
      ROUND((c.Deaths / p.TotalPopulation) * 100, 5) 'Total_Ratio'
      from covid c JOIN countriesnames cn on c.CountryCodeId = cn.CountryCodeId
      JOIN population p on c.CountryCodeId = p.CountryCodeId
      where (c.CountryCodeId, c.CreationDate) in (select CountryCodeId , max(CreationDate) from covid group by CountryCodeId)`);
    return results;
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  sequelize,
  list,
  save,
  get,
  ratios,
};
