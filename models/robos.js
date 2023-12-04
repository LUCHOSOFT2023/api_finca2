const {Schema, model} = require('mongoose')

const RoboSchema = Schema({

    fecha_robo: {
        type: String,
        required: [true, 'La fecha del robo es obligatoria']
    },

    nombre_afectado: {
        type: String,
        required: [true, 'El nombre del afectado es obligatorio']
    },

    descripcion_robo: {
        type: String,
        required: [true, 'La descripcion del robo es obligatoria']
    }

})

//Exportar la función UsuarioSchema
module.exports = model('robos',RoboSchema)