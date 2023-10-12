require("dotenv").config();
const mongoose = require("mongoose");

const mongoDB = process.env.MongoUrl;
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


module.exports = db;