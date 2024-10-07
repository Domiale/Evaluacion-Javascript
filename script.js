/*
Instrucciones
  1.1 Crear una variable "nombre" y asignarle un valor de tipo cadena de texto.
  1.2 Crear una variable "edad" y asignarle un valor de tipo númerico.
  1.3 Crear una variable "estudiaste" y asignarle un valor tipo booleano.

  2. Concatenacion
    2.1 CONCATENANDO los valores de las variables, mostrar por consola el siguiente mensaje: "Hola! soy Alejandra y tengo 20 años"

  3. Condicionales
    3.1 Con los bloques If y Else, evaluar si la variable "estudiaste" es true
    3.2 Si es "true" mostrar por la consola el siguiente mensaje: "Alejandra, si estudiaste! Pasarás la materia"
    3.3 Si es "false" mostrar consola el siguente mensaje: "Alejandra, no estudiaste! Reprobarás la materia"
  Nota: Concatenar el valor de la variable "nombre" en el mensaje

  4. Prompts
    Hacer que los datos de las variables 'nombre' y 'edad' sean ingresados por el usuario.
*/

// Cadena de texto
let nombre ="Alejandra";
console.log(nombre);

// Numerico
let edad = "20";
console.log(edad);

// Boolean
let verdad = true
console.log(verdad);

// CATENANDO

let saludo = `Hola! soy ${nombre} y tengo ${edad} años!`;
console.log(saludo);

//Condicionales

let estudiaste = true;
console.log(estudiaste)


if (estudiaste == true) {
  let aprobe = `${nombre} si estudiaste! Pasarás la materia`
  console.log(aprobe)
} else {
  let reprobe = `${nombre} no estudiaste! Reprobarás la materia`
  console.log(reprobe)
 }

// Prompts

let tuNombre = prompt ("¿Cómo te llamas?");
let tuEdad = prompt ("¿Qué edad tienes?");

console.log(tuNombre);
console.log(tuEdad);