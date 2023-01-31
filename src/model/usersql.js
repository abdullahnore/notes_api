const db = require("../config/db");

function createUser(user) {
  let sql = "INSERT INTO user SET ?;";
  db.query(sql, user, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
}
function notesEvent() {
  return new Promise((resolve, reject) => {
    let sql = `SELECT  notesId ,u_id  AS 'user', notesCategory AS 'Category',notesStr AS 'note' FROM notes INNER JOIN category ON category.cid = notes.c_id where cid='4' AND u_id='1fc82ba0-a085-11ed-bfe4-d30526453904' `;
    db.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      result = JSON.parse(JSON.stringify(result));
      resolve(result);
    });
  });
}
module.exports = { createUser, notesEvent };
