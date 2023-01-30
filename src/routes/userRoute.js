const express = require("express");
const { userParams } = require("../controller/userParams");

const router = express.Router();
router.post("/create", (req, res) => {
  //http://localhost:5000/user/create

  userParams(req.body);
  res.json("creating users");
});

module.exports = router;
