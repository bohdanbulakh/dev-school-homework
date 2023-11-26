const ordersService = require("../services/ordersService");

const ordersController = {
    sendDeleteResponce: async function (req, res) {
        if (!(await ordersService.idExistsCheck(+req.params.orderId))) {
            res.status(404).send("Order with such id not found");
            return;
        }

        res.status(200).json(await ordersService.createDeleteResponce(+req.params.orderId));
    }
}

module.exports = ordersController;
