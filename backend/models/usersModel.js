const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"Porfavor teclea tu nombre"]
    },
    email: {
        type: String,
        required: [true,"Porfavor teclea tu email"],
        unique: true
    },
    password: {
        type: String,
        required: [true,"Porfavor teclea tu password"]
    },
    esAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})


module.exports = mongoose.model('User',userSchema)