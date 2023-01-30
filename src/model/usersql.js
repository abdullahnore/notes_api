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
module.exports = { createUser };
