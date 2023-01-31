const cron = require("node-cron");
const { notesEvent } = require("../model/usersql");
function runEvery60sec() {
  cron.schedule("*/60 * * * * *", async () => {
    let data = await notesEvent();
    console.log(data);
  });
}
module.exports = { runEvery60sec };
