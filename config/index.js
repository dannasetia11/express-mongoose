const { PORT, DATABASE_HOST, DATABASE_NAME } = require("./environtment");
const db = require("./connections");

module.exports = {
  PORT: PORT,
  DATABASE_HOST: DATABASE_HOST,
  DATABASE_NAME: DATABASE_NAME,
  db: db
};
