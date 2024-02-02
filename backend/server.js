const asyncHandler =require('express-async-handler')


const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddelware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false}))

app.use('/api/tareas', require('./routes/tareasRoutes'))


app.listen(port,() => console.log(`Servidor iniciado en el puerto ${port}`))



