const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../store/mysql");

const User = sequelize.define("User", {
  //Atributes
  Id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await User.sync();
})();

module.exports = User;
