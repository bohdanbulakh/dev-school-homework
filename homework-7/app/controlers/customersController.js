const customersService = require("../services/customersService");

const customersController = {
    sendGetResponce: async function (req, res) {
        if (!(await customersService.idExistsCheck(+req.params.customerId))) {
            res.status(404).send("Customer with such id not found");
            return;
        }

        res.status(200).json(await customersService.createGetResponce(+req.params.customerId));
    }
}

module.exports = customersController;
