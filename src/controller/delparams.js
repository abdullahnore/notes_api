const { deleteNotes } = require("../model/notessql");
function delparams(params) {
  let nid = params.id;
  let uid = params.uid;
  deleteNotes(nid, uid);
}
module.exports = { delparams };
