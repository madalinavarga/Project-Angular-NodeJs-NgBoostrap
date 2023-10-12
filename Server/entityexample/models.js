const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableexample = mongoose.model(
  "tablename",
  Schema({
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  })
);

module.exports = tableexample;