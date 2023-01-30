const express = require("express");
const { delparams } = require("../controller/delparams");
const router = express.Router();
router.delete("/dnotes/:id/:uid", async (req, res) => {
  //http://localhost:5000/user/dnotes/notesid/9803d2e0-a062-11ed-a528-71c8587261c0
  delparams(req.params);
  res.sendStatus(202);
});
module.exports = router;
