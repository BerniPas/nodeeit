const express = require('express');
const router = express.Router();

const {
    formProductos,
    registerProductos,
    cardProductos
} = require('../controllers/productControllers');

/* 
    responde a la ruta /product
 */

router.get('/', formProductos);
router.post('/', registerProductos);
router.get('/', cardProductos);

module.exports = router;