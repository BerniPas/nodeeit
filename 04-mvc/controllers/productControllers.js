const { request, response } = require('express')


const formProductos =  (req = request, res = response) => {
    res.render('formProductos')
}
const registerProductos =  (req = request, res = response) => {
    res.render('formProductos')
}
const cardProductos =  (req = request, res = response) => {
    res.render('formProductos')
}

module.exports = {
    formProductos,
    registerProductos,
    cardProductos
}