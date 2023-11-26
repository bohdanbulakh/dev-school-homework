const express = require("express");
const customersController = require("../controlers/customersController");

const customersRouter = express.Router();
customersRouter.route("/customers/:customerId/orders").get(customersController.sendGetResponce);

module.exports = customersRouter;
