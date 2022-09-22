//declaracion de variables
let edad;
let direccion;
//inicializacion de variables
edad = 54; //tipo numerico
direccion = "9 de Julio 344" //tipo cadena de caracteres

//declaracion e inicializacion
let equipo = "River";
let anioNacimientoUsuario

//reasigno un valor 
equipo = "Boca";
equipo = "Racing";

//constantes
const PI = 3.14;


//operaciones matematicas basicas
let num1 = 7;
let num2 = 3;
let suma = num1 + num2; //10
let resta = num1 - num2; //4
let multip = num1 * num2; //21
let division = num1 / num2; //2.3333333

//concatenacion
const ESPACIO=" ";
let dosCadenas = equipo +ESPACIO+ direccion; //Racing 9 de Julio 344
let cadenaYNum = equipo +" "+ edad;//Racing 54

//consola
console.log("Bienvenidos a la consola")
console.log("El resultado de la suma es: " +suma)
console.log("El resultado de la resta es: " +resta)
console.log("El resultado de la multiplicacion es: " +multip)
console.log("El resultado de la division es: " +division)
console.log("El resultado de la concatenacion es: " +dosCadenas)
console.log("El resultado de la concatenacion (cadena-numero) es: " +cadenaYNum)

//prompt - ingreso de datos
let usuario = prompt("Ingresa tu nombre de usuario");
console.log("Buenos dias "+usuario);

//alert - salida de datos
alert("Buenos dias "+usuario);

//algoritmo de suma con prompt y alert
let primerNum = parseInt(prompt("Ingresa el primer numero para sumar"));
let segundoNum = parseInt(prompt("Ingresa el segundo numero"));
//ambos numeros ya estan en formato numerico
let resultadoSuma = primerNum + segundoNum;
alert("El resultado de la suma es: "+resultadoSuma);

//parseFloat para convertir a numeros con decimales x ej precios.

//TAREA sugerencias
// pedir un precio, y calcular y mostrar el mismo con iva incluido
let precio = parseInt(prompt("Precio sin IVA"));
const IVA = 1.21
let resultadoIva = precio * IVA;
alert("Precio con IVA: "+resultadoIva);
// pedir el año de nacimiento del usuario y luego decirle cuantos años tiene.
let nacimiento = parseInt(prompt("Año de nacimiento?"));
let anioActual = parseInt(prompt("En que año estamos?"))
let resultadoEdad = anioActual - nacimiento;
alert("Tu edad es: " +resultadoEdad);