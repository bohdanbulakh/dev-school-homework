const Prisma = require("@prisma/client").PrismaClient;
const prisma = new Prisma();

const ordersRepository = {
    count: async function (where = undefined) {
        if (where) {
            return prisma.orders.count({where});
        }
        return prisma.orders.count();
    },

    find: async function (where) {
        return prisma.orders.findFirst({where});
    },

    findMany: async function (where) {
        return prisma.orders.findMany({where});
    },

    delete: async function (where) {
        await prisma.orders.delete({where});
    },
}

module.exports = ordersRepository;
