
// servidor http simple con node.js y sus módulos nativos
import { createServer } from 'node:http';

const server = createServer( (peticion, respuesta) => {
    respuesta.writeHead(200, { 'Content-Type': 'text/plain' });

    //respuesta.end('Hello World!\n');

    const url = peticion.url

    console.log(peticion.url);
    console.log(peticion.method);
    console.log(peticion.headers);

    switch (url) {
        case'/':
            return respuesta.end('Hello World!\n');
            break;
        case'/productos':
            return respuesta.end('Los productos son: Pepas, Facturitas!\n');
            break;
    
        default:
            respuesta.end('Error 404!\n');
    }

});

// starts a simple http server locally on port 3000
server.listen(8080, '127.0.0.1', () => {
    console.log('Listening on http://localhost:8080/');
});

// run with `node server.mjs`






