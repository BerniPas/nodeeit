
// importamos la librería de express
import express from 'express';

//creamos una instancia de express
const server = express();

//ejecutamos la configuración de dotenv
import dotenv from 'dotenv';
dotenv.config();

//require('dotenv').config();

//Importamos el middleware - ES5 - commonjs
import { 
    miMiddlewares, 
    otroMiddlewares,
    Tresmiddlewares
} from './middlewares/middleware.js';

import { 
    miData, 
    persona,
    otraData
} from './middlewares/otraExport.js';

import miDatas from './middlewares/exportDefault.js'; 


//creamos un puerto para el servidor
const PORT = process.env.PORT || 9000;

//middlewares
//middlewares
/* const middlewares = (req, res, next) =>{
    console.log('======================================');
    console.log('Estoy en el middleware');
    console.log('======================================');

    //cierra la ejecución del middleware y pasa a las rutas de la app
    next();

}; */


//global
//server.use(middlewares);
server.use(miMiddlewares);

//express meddlewares
server.use(express.json());
server.use(express.urlencoded({extended: true}));

//creamos las rutas para la aplicación
server.get('/', (req, res) => {
    //envio de datos al cliente, html, json, texto plano, etc.
    res.send('Bienvenido a nuestra APP!')
})

server.get('/json', (req, res) => {
    //envio de datos al cliente, desde una database.
    try {
        return res.status(200).json({
            respuesta: "Soy la respuesta de tipo de dato JSON"
        });
        
    } catch (error) {
        return res.status(404).json({
            respuesta: "Error de dato JSON"
        });
    }
});

server.get('/html', (req, res) => {
    //envio de datos al cliente, html, json, texto plano, etc.
    res.status(200).end(`
        <h1 style="color: blue">Bienvenido a nuestra APP!</h1>
        <hr>
        <p>Esto es un párrafo de ejemplo</p>    
    `)
})

/* server.get('/file', (req, res) => {
    //envio de datos al cliente, html, json, texto plano, etc.
    res.status(200).json({
        respuesta: "Soy la respuesta de tipo de dato JSON"
    });
}) */

server.get('/file', (req, res) => {
    //envio de datos al cliente, html, json, texto plano, etc.
    console.log(__dirname);
    res.status(200).sendFile(__dirname + '/index.html');
})

server.get('/donwload', (req, res) => {
    //envio de datos al cliente, html, json, texto plano, etc.
    
    res.status(200).download(__dirname + '/factura.txt');
})

server.get('/sin', (req, res) => {
    //envio de datos al cliente, html, json, texto plano, etc.
    
    //res.render()
    console.log(__dirname);
    console.log(__filename);


    res.send('No tenemos seteados los status');


})

server.get('/tellevo', (req, res) => {
    //envio de datos al cliente, html, json, texto plano, etc
    res.redirect('https://www.google.com');
    //res.redirect(__dirname + '/otro.html');
});


server.post('/file', (req, res) => {

    console.log(req.method);

    console.log(req.body);//undefined

    res.send('Tus datos han sido recibidos correctamente');

});


//ES5
server.delete('/delete/:id', function(req, res){

    console.log(req.body);


    res.send('Tus datos han sido eliminados correctamente');
});


//ES6
server.put('/update/:id', (req, res)=>{

    console.log(req.body);


    res.send('Tus datos han sido actualizados correctamente');
});


server.patch('/actualizar/:id', (req, res)=>{

    console.log(req.body);


    res.send('Tus datos han sido actualizados correctamente');
});


//iniciamos el servidor en el puerto 8080


server.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
})