const jwt = require ('jsonwebtoken')
const asyncHandler = require ('express-async-handler')
const User = require ('../models/usersModel')
const { models } = require('mongoose')

const protect = asyncHandler( async (req, res, next) => {
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        try {
            //Obtenemos el token
            token = req.headers.authorization.split(' ')[1]

            //verificamos el token atravez de su firma
            const  decoded = jwt.verify(token,  process.env.JWT_SECRET)

            //obtener los datos del usuario del token que pasen atravez del payload
            req.user = await User.findById(decoded.id_usuario).select('-password')

            next ()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error ('Acceso no Autorizado')
        }
    }

    if (!token){
        res.status(401)
        throw new Error ('Acceso no Autorizado, no se proporciono token')
    }

})


module.exports = { protect }