const {Schema, model } = require('mongoose')

const VentaSchema = ({
    nombreCliente: {
        type: String,
        unique: true,
        required: [true, 'El nombre de usuario es requirido']
    },

    documento: {
        type: String,
        required: [true, 'El password es requeridod'],
        min: [4, 'El password debe contener mínimo 4 caracteres'],
        max: [10, 'El password debe contener máximo 10 caracteres']
    },


    correo: {
        type: String,
        required: [true, 'El password es requeridod'],
    },

    telefono: {
        type: String,
        required: [true, 'El password es requeridod'],
    },

    producto: {
        type: String,
        required: [true, 'El rol es requerido'],
        enum: ['cuerdas', 'proteina', 'mancuernas'],
    },

    estado: {
        type: Boolean,
        default: true
    }
})

module.exports = model('ventas', VentaSchema )



