const express = require("express");
const { getAll, create, update } = require("./controller");
const router = express.Router();

router.get("/", getAll);
router.post("/", create);
router.put("/:id", update);

module.exports = router;