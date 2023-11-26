const productsService = require("../services/productsService");

const productsController = {
    sendPostResponce: async function (req, res) {
        if (!(await productsService.fieldsValidate(Object.keys(req.body)))) {
            res.status(422).send("Invalid field names");
            return;
        }

        if (!(await productsService.fieldValidate(req.body.category))) {
            res.status(403).send("Invalid product category");
            return;
        }

        res.status(201).json(await productsService.createPostResponce(req.body))
    }
}

module.exports = productsController;
