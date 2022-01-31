const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "postgres://postgres:password@localhost:5432/server-challenge-day1"
);

module.exports = db;
