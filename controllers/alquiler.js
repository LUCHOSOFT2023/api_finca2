const {response} = require('express')


//Importación de los modelos
const Alquiler = require('../models/alquiler')

//Método GET de la API
const alquilerGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración
    const {cantidad_dias} = req.query;
    //Consultar todos los usuarios
    try {
        let alquiler;

        if (cantidad_dias) {
            // Si se proporciona un id, realizar una búsqueda por nombre
            alquiler = await Alquiler.find({cantidad_dias: cantidad_dias});
        } else {
            alquiler = await Alquiler.find();
        }

        res.json({ alquiler });
    } catch (error) {
        console.error('Error al buscar los medicamentos:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

const alquilerPost = async(req, res) => {
    let mensaje = "Inserción exitosa"
    const body = req.body
    try {
        const alquiler= new Alquiler(body)
        await alquiler.save() //Inserta en la colección
    }catch (error) {
        mensaje = "Se presentaron problemas en la inserción"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const alquilerPut = async(req, res) => {

    const {numero, nombre_finca, direccion, valor_alquiler, cantidad_dias, dollar} = req.body

    let mensaje = "Modificación exitosa"

    try {
        await Alquiler.updateMany({numero: numero}, {$set: {
            nombre_finca: nombre_finca,
            direccion: direccion,
            valor_alquiler:valor_alquiler,
            cantidad_dias:cantidad_dias,
            dollar:dollar
        }});

    }catch (error) {
        mensaje = "Se presentaron problemas en la modificación."
    }
    res.json({
        msg: mensaje
    })
}

const alquilerDelete = async (req, res) => {
    const {numero} = req.query
    let mensaje = ''

    try{
        const alquiler = await Alquiler.deleteOne({numero: numero})
        mensaje = 'La eliminación se efectuó exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    alquilerGet,
    alquilerPost,
    alquilerPut,
    alquilerDelete
}