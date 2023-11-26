const customersRepository = require("../repositories/customersRepository");
const productsRepository = require("../repositories/productsRepository");
const orderedProductsRepository = require("../repositories/orderedProductsRepository");
const ordersRepository = require("../repositories/ordersRepository");

const customersService = {
    async idExistsCheck(customerId) {
        if (await customersRepository.count({id: customerId}) === 0) {
            return false;
        }
        return true;
    },

    async createGetResponce(customerId) {
        const orders = await ordersRepository.findMany({customerId});
        const data = {orders};
        data.totalCost = 0;

        for (const order of orders) {
            const orderedProducts = await orderedProductsRepository.findMany({orderId: order.id});
            order.totalCost = 0;

            for (const orderedProduct of orderedProducts) {
                const product = await productsRepository.find({id: orderedProduct.productId});

                order.totalCost += (product.price * orderedProduct.amount);
            }
            data.totalCost += order.totalCost;
        }
        return data
    },
}

module.exports = customersService;
