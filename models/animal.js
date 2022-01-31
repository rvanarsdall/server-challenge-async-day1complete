const { DataTypes } = require("sequelize");
const db = require("../db");

const Animal = db.define("user", {
  legNumber: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  preditor: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
});

module.exports = Animal;
