const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favorites = mongoose.model(
    "favorites",
    Schema({
        recipeId:{
            type: Schema.Types.ObjectId,
            ref: 'recipes'
        },
    })
);

module.exports = favorites;