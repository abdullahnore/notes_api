const uuid = require("uuid");
const { createUser } = require("../model/usersql");
function userParams(body) {
  let obj = JSON.parse(JSON.stringify(body));
  let user = {
    id: uuid.v1(),
    name: obj.name,
    email: obj.email,
    password: obj.password,
  };
  createUser(user);
}
module.exports = { userParams };
