const { update } = require("../model/notessql");
function uparams(params) {
  let val = params.val;
  let nid = params.id;
  let uid = params.uid;
  update(val, nid, uid);
}
module.exports = { uparams };
// update(val, nid, uid);
