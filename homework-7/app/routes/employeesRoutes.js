const express = require("express");
const employeesController = require("../controlers/employeesController");

const employeesRouter = express.Router();
employeesRouter.route("/employees/:employeeId").patch(employeesController.sendPatchResponce);

module.exports = employeesRouter;
