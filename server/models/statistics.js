const { DataTypes } = require("sequelize");
const { sequelize } = require("../store/mysql");

const Statistics = sequelize.define(
  "Statistic",
  {
    //Atributes
    CountryCodeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Confirmed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Deaths: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CreationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { tableName: "covid", timestamps: false }
);
(async () => {
  await Statistics.sync();
})();

module.exports = Statistics;
