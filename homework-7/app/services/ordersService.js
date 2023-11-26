const ordersRepository = require("../repositories/ordersRepository");

const ordersService = {
    idExistsCheck: async function (orderId) {
        if (await ordersRepository.count({id: orderId}) === 0) {
            return false;
        }
        return true;
    },

    createDeleteResponce: async function (orderId) {
        const order = await ordersRepository.find({id: orderId});
        await ordersRepository.delete({id: orderId});
        return order;
    }
}

module.exports = ordersService;
