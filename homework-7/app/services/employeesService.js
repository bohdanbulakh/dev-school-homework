const employeesRepository = require("../repositories/employeesRepository");

const employeesService = {
    idExistsCheck: async function (employeeId) {
        if (await employeesRepository.count({id: employeeId}) === 0) {
            return false;
        }
        return true;
    },

    fieldsValidate: async function (fields) {
        const tableFields = await employeesRepository.fields();
        for (const field in fields) {
            if (!(await tableFields.includes(field) || field === 'id')) {
                return false;
            }
        }
        return true;
    },

    createPatchResponce: async function (id, data) {
        await employeesRepository.update({id}, data);
        return employeesRepository.find({id});
    }
}

module.exports = employeesService;
