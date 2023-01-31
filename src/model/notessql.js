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
function getNotes(cid, status, uid) {
  if (cid == undefined || status == undefined) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT  notesId ,u_id  AS 'user', notesCategory AS 'Category',notesStr AS 'note'  ,status FROM notes INNER JOIN category ON category.cid = notes.c_id where  u_id='${uid}' `;
      db.query(sql, (err, result) => {
        if (err) {
          throw err;
        }
        result = JSON.parse(JSON.stringify(result));
        //console.log(result);
        resolve(result);
      });
    });
  } else if (cid == undefined) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT  notesId ,u_id  AS 'user', notesCategory AS 'Category',notesStr AS 'note' ,status FROM notes INNER JOIN category ON category.cid = notes.c_id WHERE  u_id='${uid}' AND status ='${status}' `;
      db.query(sql, (err, result) => {
        if (err) {
          throw new Error(err);
        }
        result = JSON.parse(JSON.stringify(result));
        //console.log(result);
        resolve(result);
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      let sql = `SELECT  notesId ,u_id  AS 'user', notesCategory AS 'Category',notesStr AS 'note' ,status FROM notes INNER JOIN category ON category.cid = notes.c_id WHERE cid= ${cid} AND u_id='${uid}' AND status ='${status}' `;
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
    let sql = `CALL fetchCategory()`;
    db.query(sql, (err, result) => {
      if (err) {
        throw new Error(err);
      }
      result = JSON.parse(JSON.stringify(result));
      resolve(result);
    });
  });
}

// changeNotesStatus
function changeNotesStatus(nid) {
  let sql = `UPDATE notes SET status='done' WHERE notesId=${nid}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
}
module.exports = {
  getNotes,
  addNotes,
  category,
  deleteNotes,
  update,
  changeNotesStatus,
};
