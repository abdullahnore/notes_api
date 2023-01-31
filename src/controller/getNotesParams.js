const { getNotes } = require("../model/notessql");
function Gparams(query) {
  let cid = query.id;
  let uid = query.uid;
  let status = query.status;
  let str = getNotes(cid, status, uid);
  return new Promise((resolve, reject) => {
    resolve(str);
  });
}
module.exports = { Gparams };
// update(val, nid, uid);
