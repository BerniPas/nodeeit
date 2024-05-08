
//Ejemplo 1 de export en ES6


export const miMiddlewares = (req, res, next) =>{
    console.log('======================================');
    console.log('Estoy en el middleware');
    console.log('======================================');

    //cierra la ejecución del middleware y pasa a las rutas de la app
    next();

};

export const otroMiddlewares = (req, res, next) =>{
    console.log('======================================');
    console.log('Estoy en el middleware');
    console.log('======================================');

    //cierra la ejecución del middleware y pasa a las rutas de la app
    next();

};

export const Tresmiddlewares = (req, res, next) =>{
    console.log('======================================');
    console.log('Estoy en el middleware');
    console.log('======================================');

    //cierra la ejecución del middleware y pasa a las rutas de la app
    next();

};

//export ES6
/* module.exports = {
    miMiddlewares, 
    otroMiddlewares,
    Tresmiddlewares
}; */