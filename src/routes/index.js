const express = require("express");

const {
  createClient,
  kpideClient,
  listClients,
} = require("../controllers/clientController");

const router = express.Router();

module.exports = function () {
  /**
   * @swagger
   * components:
   *  schemas:
   *    Client:
   *      type: object
   *      properties:
   *        name:
   *          type: string
   *        lastname:
   *          type: string
   *        age:
   *          type: integer
   *        date:
   *          type: string
   *        deathDate:
   *          type: string
   *      required:
   *        - name
   *        - lastname
   *        - age
   *        - date
   *        - deathDate
   *      example:
   *        name: David
   *        lastname: Cicconi
   *        age: 28
   *        date: '1994-08-13'
   *        deathDate: 2024-08-13'
   */

  /**
   * @swagger
   * /creacliente:
   *  post:
   *    summary: CREATE a new Client
   *    tags: [Client]
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            $ref: '#/components/schemas/Client'
   *    responses:
   *      200:
   *        description: Client was added succesfully!
   */
  router.route("/creacliente").post(createClient);

  /**
   * @swagger
   * components:
   *  schemas:
   *    Age:
   *      type: object
   *      properties:
   *        prom:
   *          type: integer
   *        desv:
   *          type: integer
   *      required:
   *        - prom
   *        - desv
   *      example:
   *        prom: 25
   *        desv: 3
   */

  /**
   * @swagger
   * /kpideclient:
   *  get:
   *    summary: GET age's average and standard deviation
   *    tags: [Age]
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            $ref: '#/components/schemas/Age'
   *    responses:
   *      200:
   *        description: information successfully obtained!
   */
  router.route("/kpideclient").get(kpideClient);

  /**
   * @swagger
   * /listclientes:
   *  get:
   *    summary: GET all clients
   *    tags: [List of clients]
   *    responses:
   *      200:
   *        description: all clients successfully obtained!
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/Client'
   */
  router.route("/listclientes").get(listClients);

  return router;
};
