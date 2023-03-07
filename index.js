const express = require("express");
const app = express();

const env = require("./src/config/index");

const { connectDatabase } = require("./src/database/index");

const bodyParser = require("body-parser");

const routes = require("./src/routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());

connectDatabase();

app.listen(env.PORT, () => {
  console.log("server listening on port", env.PORT);
});
