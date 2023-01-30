const { getNotes } = require("../model/notessql");
function Gparams(query) {
  let cid = query.id;
  let uid = query.uid;
  let str = getNotes(cid, uid);
  return new Promise((resolve, reject) => {
    resolve(str);
  });
}
module.exports = { Gparams };
// update(val, nid, uid);
