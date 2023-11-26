const express = require("express");
const ordersController = require("../controlers/ordersController")

const ordersRouter = express.Router();
ordersRouter.route("/orders/:orderId/").delete(ordersController.sendDeleteResponce);

module.exports = ordersRouter;
