const Prisma = require("@prisma/client").PrismaClient;
const prisma = new Prisma();

const customersRepository = {

    count: async function (where = undefined) {
        if (where) {
            return prisma.customers.count({where});
        }
        return prisma.customers.count();
    }
}

module.exports = customersRepository;
