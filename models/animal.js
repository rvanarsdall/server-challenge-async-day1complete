const { DataTypes } = require("sequelize");
const db = require("../db");

const Animal = db.define("animal", {
  legNumber: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  predator: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Animal;
