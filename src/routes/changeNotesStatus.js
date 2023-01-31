// change the status of pending notes to done

const express = require("express");
const {
  ParamsChangeNotesStatus,
} = require("../controller/paramsChangeNotesStatus");
const router = express.Router();

router.put("/changeNotesStatus/:nid", (req, res) => {
  ParamsChangeNotesStatus(req.params);
  res.json("notes marked as done");
});
module.exports = router;
