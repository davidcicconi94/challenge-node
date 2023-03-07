const mongoose = require("mongoose");
const env = require("../config/index");

const connectDatabase = () => {
  mongoose
    .connect(`mongodb://localhost/${env.DB}`, {
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { connectDatabase };
