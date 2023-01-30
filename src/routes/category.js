const express = require("express");
// const dbconnect = require("../config/db");
const { category } = require("../model/notessql");
const router = express.Router();

router.get("/category", async (req, res) => {
  res.json(await category());
});
module.exports = router;
