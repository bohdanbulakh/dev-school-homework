const Prisma = require("@prisma/client").PrismaClient;
const prisma = new Prisma();

const orderedProductsRepository = {

    findMany: async function (where) {
        return prisma.orderedProduct.findMany({where})
    }
}

module.exports = orderedProductsRepository;
