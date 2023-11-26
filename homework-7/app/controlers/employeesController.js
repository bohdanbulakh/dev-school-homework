const employeesService = require("../services/employeesService");

const employeesController = {
    sendPatchResponce: async function (req, res) {
        if (!(await employeesService.idExistsCheck(+req.params.employeeId))) {
            res.status(404).send("Employee with such id not found");
            return;
        }

        if (!(await employeesService.fieldsValidate(req.body))) {
            res.status(422).send("Invalid field names");
            return;
        }

        res.status(200).json(await employeesService.createPatchResponce(+req.params.employeeId, req.body));
    }
}

module.exports = employeesController;
