
import { Server } from './index';
import { AppRouter } from './router/routes';


//creamos una instancia de la clase Server
//const server = new Server({port: 8080, router: AppRouter.routes});

console.log(server.app);
//se accede sólo cuando el atributo es público
console.log(server.port);


//iniciamos el servidor
server.start();

