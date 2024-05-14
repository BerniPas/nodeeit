const { request, response } = require('express');

const dameUsuarios =  (req = request, res = response) => {
    res.send(`<h1>Users:</h1><br></br>
        <p>Envío la lista de usuarios desde el controlador</p>`
    )
}

const crearUsuarios = (req = request, res = response) => {

    const usuario = req.body

    res.json({ 
        users: usuario
    })
}

const actualizarUsuarios = (req, res) => {
    res.json({
        actualizado: 'Datos Actualizdos'
    })
}

const eliminarUsuarios = (req, res) => {
    res.json({
        eliminado: 'Datos Eliminados'
    })
}

module.exports = {
    dameUsuarios,
    crearUsuarios,
    actualizarUsuarios,
    eliminarUsuarios
};