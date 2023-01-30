const db = require("../config/db");

//create notess
function addNotes(val, id, uid) {
  let sql = `INSERT INTO notes (c_id,notesStr,u_id) VALUES('${id}','${val}','${uid}')`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
}
//update notess
function update(val, nid, uid) {
  let sql = ` UPDATE notes  SET notesStr='${val}' WHERE u_id='${uid}' AND notesId='${nid}'`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
}
//delete notess
function deleteNotes(nid, uid) {
  if (nid == undefined) {
    {
      let sql = `DELETE FROM notes WHERE u_id=${uid}  `;
      db.query(sql, (err, result) => {
        if (err) {
          throw err;
        }
        result = JSON.parse(JSON.stringify(result));
        console.log(result);
      });
    }
  } else {
    {
      let sql = `DELETE FROM notes WHERE notesId= '${nid}' AND u_id='${uid}' `;
      db.query(sql, (err, result) => {
        if (err) {
          throw err;
        }
        result = JSON.parse(JSON.stringify(result));
        console.log(result);
      });
    }
  }
}

//get all notes or through category from sql
function getNotes(cid, uid) {
  if (cid == undefined) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT  notesId ,u_id  AS 'user', notesCategory AS 'Category',notesStr AS 'note' FROM notes INNER JOIN category ON category.cid = notes.c_id where  u_id='${uid}' `;
      db.query(sql, (err, result) => {
        if (err) {
          throw err;
        }
        result = JSON.parse(JSON.stringify(result));
        //console.log(result);
        resolve(result);
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      let sql = `SELECT  notesId ,u_id  AS 'user', notesCategory AS 'Category',notesStr AS 'note' FROM notes INNER JOIN category ON category.cid = notes.c_id where cid= ${cid} AND u_id='${uid}' `;
      db.query(sql, (err, result) => {
        if (err) {
          throw err;
        }
        result = JSON.parse(JSON.stringify(result));
        //console.log(result);
        resolve(result);
      });
    });
  }
}
//get all category
function category() {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM category`;
    db.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      result = JSON.parse(JSON.stringify(result));
      resolve(result);
    });
  });
}
module.exports = { getNotes, addNotes, category, deleteNotes, update };
