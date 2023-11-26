const express = require("express");
const productsController = require("../controlers/productsController");

const productsRouter = express.Router();
productsRouter.route('/products').post(productsController.sendPostResponce);

module.exports = productsRouter;
