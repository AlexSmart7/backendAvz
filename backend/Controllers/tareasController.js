const asyncHandler = require('express-async-handler')       //instalar npm i express-async-handler@1.1.4

const getTareas  = asyncHandler(async (req,res) => {
    res.status(200).json({mensaje: 'Get Tareas' })
})

const createTareas = asyncHandler(async (req,res) => {
    
    if(!req.body.descripcion) {
        res.status(400)
        throw new Error('Por favor teclea una descripcion')
    }

    res.status(201).json({mensaje: 'Create Tareas' })
})

const updateTareas = asyncHandler(async (req,res) => {
    res.status(200).json({mensaje: ` Modificar la tarea con id ${req.params.id} ` })
})

const deleteTareas = asyncHandler(async (req,res) => {
    res.status(200).json({ id: req.params.id  })
})


module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}