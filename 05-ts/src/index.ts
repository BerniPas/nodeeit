
import { hola }  from './data/data';

console.log(hola);


const DNI: number = 123456789;

//Creamos un modelo: Clase POO
class Persona {

    //atributos
    nombre: string 
    edad: number;

    //constructor: crea el objeto
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }


    //metodos: cosas que puede hacer el objeto
    saludar() {
        console.log(`Hola, soy ${this.nombre} y mi edad es ${this.edad}`);
    }


}

//instancia de la clase: objeto
const Pepe = new Persona('Pepe', '23');
const Pepe1 = new Persona('Pepe@gmail.com', 2500);
const correcto = new Persona('Mario', 20);


Pepe.saludar();
Pepe1.saludar();
correcto.saludar();









