const express = require("express");

const {
  createClient,
  kpideClient,
  listClients,
} = require("../controllers/clientController");

const router = express.Router();

module.exports = function () {
  router.route("/creacliente").post(createClient);
  router.route("/kpideclient").get(kpideClient);
  router.route("/listclientes").get(listClients);

  return router;
};
