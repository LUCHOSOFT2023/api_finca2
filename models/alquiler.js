const {Schema, model} = require('mongoose')

const AlquilerSchema = Schema({

    numero: {
        type: Number,
        unique: true,
        required: [true, 'el número es obligatorio']
    },

    nombre_finca: {
        type: String,
        required: [true, 'El nombre de la finca es obligatorio']
    },

    direccion: {
        type: String,
        required: [true, 'La dirección de la finca es obligatorio']
    },

    valor_alquiler: {
        type: Number,
        required: [true, 'El precio del alquiler es obligatorio']
    },

    cantidad_dias:{
        type: Number,
        required:[true, 'La cantidad de días es requerido']
    },
    
    dollar:{
        type: Number,
        required:[true, 'El dollar es requerido']
    }

})

//Exportar la función UsuarioSchema
module.exports = model('Alquiler',AlquilerSchema)