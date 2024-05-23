const { request, response } = require('express');
const User = require('../models/userModel'); 



const dameUsuarios =  (req = request, res = response) => {
    res.send(`<h1>Users:</h1><br></br>
        <p>Envío la lista de usuarios desde el controlador</p>`
    )
}

const dameFormulario = (req = request, res = response) => {
    res.render('formulario');
}   

const dameLogin = (req = request, res = response) => {
    res.render('login');
}   

const crearUsuarios = async (req = request, res = response) => {
    
    
    //const { nombre, email, password } = req.body;

    const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;

    const usuario = req.body

    const persona = {
        nombre: nombre,
        email: email,
        password: password
    }
    
    console.log(usuario);
    console.log(email, password);

    //instanciamos un objeto para utilizar el esquema de datos de users
    //const user = new User(nombre, email, password);
    //const user = new User(persona);
    //const user = new User(req.body);
    const user = new User(usuario);
/* 
    const datoGuardado = await user.save();

    console.log(datoGuardado);

    if(datoGuardado){
        return res.render('resForm', {
            email: email,
            password: password
        })
    }else{
        const err = 'Tenemos un error en la creación de usuarios'
        console.log(error);
        return res.render('error', {
            error: err
        })
    } */

    try {
        
        await user.save();
        
        return res.render('login')

    } catch (error) {

        const err = 'Tenemos un error en la creación de usuarios'
        console.log(error);
        return res.render('error', {
            error: err
        })

    } 



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
    dameFormulario,
    dameLogin,
    crearUsuarios,
    actualizarUsuarios,
    eliminarUsuarios,
    dameUsuarios,
};