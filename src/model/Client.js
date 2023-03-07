const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientsSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
  },
  date: {
    type: Date,
  },
  deathDate: {
    type: String,
  },
});

module.exports = mongoose.model("Clients", clientsSchema);
