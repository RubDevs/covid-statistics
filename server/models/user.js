const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../store/mysql");

const User = sequelize.define("User", {
  //Atributes
  Id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
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
