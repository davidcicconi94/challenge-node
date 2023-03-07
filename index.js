const express = require("express");
const app = express();

const path = require("path");

const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Challeng Node",
      version: "1.0.0",
      description: "Documentation API",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./src/routes/index.js")}`],
};

const env = require("./src/config/index");

const { connectDatabase } = require("./src/database/index");

const bodyParser = require("body-parser");

const routes = require("./src/routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)));

connectDatabase();

app.listen(env.PORT, () => {
  console.log("server listening on port", env.PORT);
});
