const express = require("express");
const app = express();
const db = require("./src/config/db");
const PORT = 5000;
const multer = require("multer");
const upload = multer();
app.use(upload.any());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", require("./src/routes/userRoute.js"));
app.use("/user", require("./src/routes/addnotes.js"));
app.use("/user", require("./src/routes/getnotes.js"));
app.use("/user", require("./src/routes/category.js"));
app.use("/user", require("./src/routes/dnotes.js"));
app.use("/user", require("./src/routes/update.js"));
app.listen(PORT, () => {
  console.log("server started PORT:", PORT);
});
