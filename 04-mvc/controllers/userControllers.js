const { request, response } = require('express');





const dameUsuarios =  (req = request, res = response) => {
    res.send(`<h1>Users:</h1><br></br>
        <p>Envío la lista de usuarios desde el controlador</p>`
    )
}

const dameFormulario = (req = request, res = response) => {
    res.render('formulario');
}   

const crearUsuarios = (req = request, res = response) => {

    const usuario = req.body

    //const { email, password } = req.body;

    const email = req.body.email;
    const password = req.body.password;

    console.log(usuario);
    console.log(email, password);

    res.render('resForm', {
        email: email,
        password: password
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
    eliminarUsuarios,
    dameFormulario
};