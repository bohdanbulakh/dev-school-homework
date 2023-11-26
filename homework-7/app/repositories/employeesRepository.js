const p = require("@prisma/client").Prisma;

const Prisma = require("@prisma/client").PrismaClient;
const prisma = new Prisma();

const employeesRepository = {
    count: async function (where = undefined){
        if(where){
            return prisma.employees.count({where});
        }
        return prisma.employees.count();
    },

    fields: async function (){
        return p.dmmf.datamodel.models.find(model => model.name === 'employees').fields.map(field => field.name);
    },

    find: async function (where){
        return prisma.employees.findFirst({where});
    },

    update: async function (where, data){
        await prisma.employees.update({where, data});
    },
}

module.exports = employeesRepository;
