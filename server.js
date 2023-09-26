const express = require('express')

const app = express()

app.use(express.json())

require('./connectDB')

const router = require('./src/routes/taskRoutes.js')

app.use('/api/tasks', router)

// handle error
app.use((error, req, res, next) => {
    console.log(error)
    const status = error?.status || 500
    return res.status(status).json({success: false, message: error?.message || 'Internal Server Error'})
})

app.listen(5000, () => console.log("Server is running on port 5000"))