const express = require("express");
const { uparams } = require("../controller/upateParams");
const router = express.Router();
router.put("/update/:val/:id/:uid", (req, res) => {
  //http://localhost:5000/user/update/this is a finance note/2/9803d2e0-a062-11ed-a528-71c8587261c0
  uparams(req.params);
  res.sendStatus(202, "note  UPDATED");
});
module.exports = router;
