const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "notesapi",
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("sql connected");
});

module.exports = db;
