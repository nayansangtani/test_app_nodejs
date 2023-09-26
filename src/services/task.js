const { Op } = require('sequelize')

const { Task } = require('../models/index')

const NotFoundException = require('../exception/NotFoundException')

const taskService = {
    findAll: ({page, limit}) => new Promise(async (resolve, reject) => {
        try {

            const query = {}

            const queries = {
                offset: (page - 1) * limit,
                limit
            }       

            console.log(queries);
            const data = await Task.findAndCountAll({
                where: query,
                ...queries
            })

            const res = {
                totalPages: Math.ceil(data?.count / limit),
                totalItems: data?.count,
                data: data?.rows
            }

            resolve(res)

        } catch (error) {
            reject(error)
        }
    }),
    create: ({name, status}) => new Promise(async (resolve, reject) => {
        try {            
            const data = await Task.create({
                name, status
            })

            resolve(data)

        } catch (error) {
            reject(error)
        }
    }),
    updateById: (id, {name, status}) => new Promise(async (resolve, reject) => {
        try {
            
            const customer = await Task.findByPk(id)
            if (!customer) throw new NotFoundException('Not found customer!')

            const data = await Task.update({ name, status }, {
                where: {
                  id
                }
            });

            resolve(data)

        } catch (error) {
            reject(error)
        }
    }),
}

module.exports = taskService