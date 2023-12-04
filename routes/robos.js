const {Router} = require('express')

//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {roboGet, roboPost, roboPut, roboDelete} = require('../controllers/robos')

route.get('/', roboGet) //Listar los datos

route.post('/', roboPost) //Insertar Datos

route.put('/', roboPut) //Modificar los datos

route.delete('/', roboDelete) //Eliminar los datos

module.exports = route