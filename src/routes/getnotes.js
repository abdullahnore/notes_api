const express = require("express");

const { Gparams } = require("../controller/getNotesParams");
const router = express.Router();

router.get("/getnotes", async (req, res) => {
  // http://localhost:5000/user/getnotes?id=2&uid=9803d2e0-a062-11ed-a528-71c8587261c0
  res.json(await Gparams(req.query));
});
module.exports = router;
