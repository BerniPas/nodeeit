import express, { type Router, type Express} from 'express';

//interfaces: modelo de datos/objetos/info que necesito para trabajar
interface servidor{
    port: number;
    router: Router
}


//creamos una clase para el servidor
export class Server {

    //atributos
    public app: Express;
    //atributo privado y no se puede acceder desde fuera de la clase
    //private port: number;
    public port: number;

    //constructor
    constructor(dato: servidor) {

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


