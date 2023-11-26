const productsRepository = require("../repositories/productsRepository");

const productsService = {
    fieldsValidate: async function (fields) {
        let tableFields = await productsRepository.fields();
        tableFields = tableFields.filter(field => !['id', 'productsOrdered'].includes(field));
        return fields.sort().toString() === tableFields.sort().toString();
    },

    fieldValidate: async function (name) {
        const values = await productsRepository.enums('category');
        return values.includes(name);
    },

    createPostResponce: async function (data) {
        await productsRepository.create(data);
        const products = await productsRepository.findMany(data);
        return products.at(-1);
    }
}

module.exports = productsService;
