const taskService = require('../services/task')

const taskController = {
    addTask: async (req, res, next) => {
        try {
            const { name, status = [] } = req.body
            const data = await taskService.create({name, status})
            return res.json({success: true, data})
        } catch (error) {
            next(error)
        }
    },
    updateTask: async (req, res, next) => {
        try {
            const { id } = req.params
            const { name, status } = req.body
            const data = await taskService.updateById(id, {name, status})
            return res.json({success: true, data})
        } catch (error) {
            next(error)
        }
    },
    getAllTasks: async (req, res, next) => {
        try {
            const { page = 1, limit = 3 } = req.query

            const data = await taskService.findAll({
                page: +page ? +page : 1,
                limit: +limit ? +limit : 3,
            })
            return res.json({success: true, data})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = taskController