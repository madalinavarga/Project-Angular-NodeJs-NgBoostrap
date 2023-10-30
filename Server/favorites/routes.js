const express = require("express");
const { getAll, add, remove, getIsFavoriteById } = require("./controller");
const router = express.Router();

router.get("/", getAll);
router.get("/:id",getIsFavoriteById)
router.post("/", add);
router.delete("/",remove);

module.exports = router;