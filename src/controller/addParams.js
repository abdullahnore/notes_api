const { addNotes } = require("../model/notessql");
function addNotesparams(params) {
  let val = params.val;
  let id = params.id;
  let uid = params.uid;
  addNotes(val, id, uid);
}
module.exports = { addNotesparams };
// update(val, nid, uid);
