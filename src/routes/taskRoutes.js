const taskController = require('../controllers/taskController.js')


// router
const router = require('express').Router()


router.post('/', taskController.addTask)

router.put('/:id', taskController.updateTask)

router.get('/', taskController.getAllTasks)

module.exports = router