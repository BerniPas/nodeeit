const express = require('express');
const router = express.Router();

/* 
    esta ruta respondea /user
 */

//crear un array de users
let users = { id: 1, name: 'Jhon', email: 'jhon@gmail.com' }

router.get('/', (req, res) => {
    res.send('Hello desde userRouter')
});

router.get('/all', (req, res) => {
    res.json({ 
        users
    })
});

router.get('/', (req, res) => {
    res.send('Hello desde userRouter')
});

router.get('/', (req, res) => {
    res.send('Hello desde userRouter')
});

router.get('/', (req, res) => {
    res.send('Hello desde userRo uter')
});


module.exports = router;