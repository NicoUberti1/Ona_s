
//CLASE 1

// Palabras reservadas - Sintaxis
// var - const - break - instanceof - typeof - if

// variables y valores - caja - tipos de datos (string)
// var nombre      = 'Nicolás'
// let apellido    = 'Uberti'
// const CURSO     = "Javascript"
// const curso     = 'No es java'

// Declaración
//let apellido
//var nombre 
// const curso

//var nombre_apellido
//var nombreApellidoAnio // camel case
//var NombreApellidoAnio // pascal case

// Asignación
// Inicializando variables 
//const edad = 30

// Reasignar - (al reasignar una variable no hace falta poner los nombres de las etiquetas porque eso es para crearlas nomás. Sólo con el nombre. Sólo se puede modificar la variable let. las que son creadas con const NO.)


//let numero = 1
//let numero2 = 2
//const NUMERO3 = 3

//let resultado = numero + numero2 // es 1+2
//let resultadoResta = numero - numero2 // 1-2
//let multiplicacion = numero * NUMERO3

// Operaciones básicas con string
//let     texto1 ='Nico'
//let     texto2 = 'Uberti'
//const   texto3 = ' '

//let resultadoSuma = texto1 + texto2
//let resultadoSuma1 = texto1 + 1
//let resultadoSuma2 = texto1+texto3+texto2


// prompt
//let nombreIngresadoPrompt = prompt('Ingresar nombre')
//console.log(resultadoSuma)

// alert
// alert('Bienvenido a este sitio')

//ejemploi
//let entrada = prompt('Ingrese una letra: ')
//let salida = entrada + ' ' + 'ingresada'
//alert(salida)

/// El tipo de dato número no hace falta ponerle comillas ' ', pero el tipo de dato string, para que la variable entienda que es un strin si hace falta ponerlo entre comillas.

//CLASE 2 - CONDICIONALES

//let numero = 3

//console.log('Hola Comisión 54890 1')
//console.log('Hola Comisión 54890 2')

//if(numero ==  4) {
    //console.log('Hola Comisión 54890 3')
    //console.log('Hola Comisión 54890 4')


// Operadores lógicos
// == , === , =!= , 

//let unColor = 'Verde'

//if (unColor === 'Rojo') {
    //console.log('El color es rojo')
//} else {
    //console.log('El color no es Rojo')
//}

//let nombreUsuario = prompt('Ingrese nombre de usuario')

//if (nombreUsuario === "") {
    //alert("No ingresaste el nombre")
//} else {
    //alert("El nombre que ingresaste es: "+nombreUsuario)
//}

//let edad = 20
//let condition = edad < 18

//if (condition) {
   // alert("Es menor de edad")
//} else {
   // alert("Es mayor de edad")
//}

 // =9, < 10, <= 9

//for(let contador = 0 ; contador < 10; contador++ ) { // contador++, contador+=1 "equivale" contador = contador+1
   // alert(contador)
//}

// WHILE - MIENTRAS SE CUMLE UNA CONDICIÓN

//let repetir = false
//while (repetir) {
    //console.log('Al infinito y más allá')
//}

//let entrada = prompt('Ingresar algún dato')
//while (entrada !== 'ESC') {
    //alert('El usuario ingresó: '+ entrada)
    //entrada = prompt('ingresar otro dato')
//}

// DO WHILE

//let repetir = false
//do {
//    console.log('Solo una vez!!')
//} while (repetir)

//let nombreIngresado = prompt('Ingresar nombre: ')
//let apellidoIngresado = prompt('Ingresar apellido: ')

//function saludar(nombre, apellido) {
//    console.log('Bienvenido sr/a: ' + nombre + ' ' + apellido)
//}

//function calculadora(numero1, numero2, operacion){
//    switch (operacion) {
//        case '+':
//            return numero1 + numero2
//            break
//        case '-':
//           return numero1 - numero2
//            break
//       case '*':
//            return numero1 * numero2
//            break
//        case '/':
//            return numero1 / numero2
//            break
//        default:
//            return 0
//            break
//    }
//}

//console.log(calculadora(10, 3, '+'))

//ENTREGA 1
const empanadas = 300
const sanguches = 2000
const pizzas = 1900
let delivery = 300

let pedido1 = empanadas + sanguches
let envio1 = true

if (envio1) {
    pedido1 += delivery
}

console.log('El total a abonar es $' + pedido1)

let pedido2 = empanadas + pizzas + sanguches
let envio2 = false

if (envio2) {
    pedido2 += delivery
}

console.log('El total a abonar es $' + pedido2)

function sumar(pedido1, pedido2, operacion){
switch (operacion) {
    case '+':
    return pedido1 + pedido2
    break
    default: 0
    }
}

console.log(sumar(pedido1, pedido2, '+') )

