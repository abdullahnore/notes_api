const { changeNotesStatus } = require("../model/notessql");
function ParamsChangeNotesStatus(params) {
  let nid = params.nid;
  changeNotesStatus(nid);
}
module.exports = { ParamsChangeNotesStatus };
