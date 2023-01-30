const express = require("express");
const { addNotesparams } = require("../controller/addParams");

const router = express.Router();
router.get("/addnotes/:val/:id/:uid", (req, res) => {
  //http://localhost:5000/user/addnotes/this is a finance note/2/9803d2e0-a062-11ed-a528-71c8587261c0
  addNotesparams(req.params);
  res.json("note Added");
});
module.exports = router;
