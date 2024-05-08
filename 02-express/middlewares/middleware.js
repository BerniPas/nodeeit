


//middlewares
const miMiddlewares = (req, res, next) =>{
    console.log('======================================');
    console.log('Estoy en el middleware');
    console.log('======================================');

    //cierra la ejecución del middleware y pasa a las rutas de la app
    next();

};

const otroMiddlewares = (req, res, next) =>{
    console.log('======================================');
    console.log('Estoy en el middleware');
    console.log('======================================');

    //cierra la ejecución del middleware y pasa a las rutas de la app
    next();

};

const Tresmiddlewares = (req, res, next) =>{
    console.log('======================================');
    console.log('Estoy en el middleware');
    console.log('======================================');

    //cierra la ejecución del middleware y pasa a las rutas de la app
    next();

};

//export ES5
module.exports = {
    miMiddlewares, 
    otroMiddlewares,
    Tresmiddlewares
};


