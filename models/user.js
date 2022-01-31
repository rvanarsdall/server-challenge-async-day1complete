const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
});

module.exports = User;
