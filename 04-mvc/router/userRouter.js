const express = require('express');
const router = express.Router();

const { 
    dameUsuarios,
    crearUsuarios,
    actualizarUsuarios,
    eliminarUsuarios,
    dameFormulario
} = require('../controllers/userControllers');

/* 
    esta ruta respondea /user
 */

//crear un array de users
//let users = { id: 1, name: 'Jhon', email: 'jhon@gmail.com' }

//R: leer los datos
router.get('/', dameUsuarios);

router.get('/form', dameFormulario);

//C: crear un nuevo usuario
router.post('/form', crearUsuarios);


//U: actualizar un usuario
router.put('/', actualizarUsuarios);


//D: eliminar un usuario
router.delete('/', eliminarUsuarios);


module.exports = router;