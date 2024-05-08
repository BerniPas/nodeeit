

// Ejemplo II de export en ES6
const miData = (req, res, next) =>{
    console.log('======================================');
    console.log('Estoy en el middleware');
    console.log('======================================');

    //cierra la ejecución del middleware y pasa a las rutas de la app
    next();

};

const persona = (req, res, next) =>{
    console.log('======================================');
    console.log('Estoy en el middleware');
    console.log('======================================');

    //cierra la ejecución del middleware y pasa a las rutas de la app
    next();

};

const otraData = (req, res, next) =>{
    console.log('======================================');
    console.log('Estoy en el middleware');
    console.log('======================================');

    //cierra la ejecución del middleware y pasa a las rutas de la app
    next();

};

//export ES6

export {
    miData, 
    persona, 
    otraData
};

