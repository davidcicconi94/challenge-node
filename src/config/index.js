const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3001,
  DB: process.env.DB,
  HOST: process.env.HOST || "localhost",
  DB_NAME: process.env.DB_NAME,
  DB_PASS: process.env.DB_PASS,
};
