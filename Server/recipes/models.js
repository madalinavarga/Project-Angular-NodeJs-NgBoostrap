const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipes = mongoose.model(
  "recipes",
  Schema({
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    duration: {
      type: String,
    },
    ingredients: {
      type: [String],
    },
    preparation: {
      type: String,
    },
  })
);

module.exports = recipes;
