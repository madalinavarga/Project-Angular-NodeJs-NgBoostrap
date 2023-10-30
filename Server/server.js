const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/v1/example", require("./entityexample/routes"));
app.use("/v1/recipes", require("./recipes/routes"));
app.use("/v1/favorites", require("./favorites/routes"));

app.listen(3000, () => console.log("Server started on http://localhost:3000/"));