import express from 'express';
//creamos una clase para el servidor
export class Server {
    //constructor
    constructor(dato) {
        const { port, router } = dato;
        this.app = express();
        this.port = port;
        this.app.use(router);
    }
    //metodos
    start() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
/*
console.log('Hello, World!');




function suma(num, hola) {
    return a + hola;
} */
