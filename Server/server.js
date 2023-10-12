const express = require("express");
// const db = require("./db");
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => console.log("Server started on http://localhost:3000/"));