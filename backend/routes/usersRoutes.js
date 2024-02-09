const express = require('express')
const router = express.Router()
const { crearUser, loginUser, datosUser} = require('../Controllers/usersControllers')
const { protect } = require ('../middleware/authMiddelware')

router.post('/', crearUser)
router.post('/login', loginUser)
router.get('/datos', protect, datosUser )


module.exports = router