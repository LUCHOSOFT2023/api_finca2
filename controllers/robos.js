const {response} = require('express')


//Importación de los modelos
const Robo = require('../models/robos')

//Método GET de la API
const roboGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración
    const {_id} = req.body;
    //Consultar todos los usuarios
    try {
        let robo;

        if (_id) {
            // Si se proporciona un id, realizar una búsqueda por nombre
            robo = await Robo.find({ _id: _id });
        } else {
            robo = await Robo.find();
        }

        res.json({ robo });
    } catch (error) {
        console.error('Error al buscar robos:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

const roboPost = async(req, res) => {
    let mensaje = "Inserción exitosa"
    const body = req.body
    try {
        const robo= new Robo(body)
        await robo.save() //Inserta en la colección
    }catch (error) {
        mensaje = "Se presentaron problemas en la inserción"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const roboPut = async(req, res) => {

    const {_id, fecha_robo, nombre_afectado, descripcion_robo} = req.body

    let mensaje = "Modificación exitosa"

    try {
        await Robo.updateMany({_id: _id}, {$set: {
            fecha_robo: fecha_robo,
            nombre_afectado: nombre_afectado,
            descripcion_robo: descripcion_robo
        }});

    }catch (error) {
        mensaje = "Se presentaron problemas en la modificación."
    }
    res.json({
        msg: mensaje
    })
}

const roboDelete = async (req, res) => {
    const {_id} = req.body
    let mensaje = ''

    try{
        const robo = await Robo.deleteOne({_id: _id})
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
    roboGet,
    roboPost,
    roboPut,
    roboDelete
}