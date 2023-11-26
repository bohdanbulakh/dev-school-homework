const p = require("@prisma/client").Prisma;
const Prisma = require("@prisma/client").PrismaClient;
const prisma = new Prisma();

const productsRepository = {
    count: async function (where = undefined) {
        if (where) {
            return prisma.products.count({where});
        }
        return prisma.products.count();
    },

    findMany: async function (where) {
        return prisma.products.findMany({where})
    },

    find: async function (where) {
        return prisma.products.findFirst({where});
    },

    fields: async function () {
        return p.dmmf.datamodel.models.find(model => model.name === 'products').fields.map(field => field.name);
    },

    enums: async function (name){
        return p.dmmf.datamodel.enums.find(enm => enm.name === name).values.map(value => value.name);
    },

    create: async function (data) {
        await prisma.products.create({data});
    }
}

module.exports = productsRepository;
