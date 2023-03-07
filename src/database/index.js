const mongoose = require("mongoose");
const env = require("../config/index");

const connectDatabase = () => {
  mongoose
    .connect(
      `mongodb+srv://${env.DB_NAME}:${env.DB_PASS}@cluster0.iubcwn5.mongodb.net/?retryWrites=true&w=majority`
    )
    .then((data) => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { connectDatabase };
