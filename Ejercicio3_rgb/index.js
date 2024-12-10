/*Hacer un programa que al iniciarse pida mediante tres prompts 
ingresar los valores correspondientes a un color en sistema rgb,
y una vez ingresado ponga el color de fondo del body con dicho color.
Los valores van del 0 al 255 y corresponden a rojo, verde y azul.*/

//Tres prompts
// 1. red
// 2. green
// 3.blue
//0 al 255





//Atrapo el body en una variable
//Cuando yo cree una variable para guardar una etiqueta de Html, lo pongo 
//con el simbolo $ , esto se debe a un tema de estuctura.
// Entones cuando veamos una variable con el signo $ nos vamos a dar cuanta que dentro hay un elemento HTML.
const rojo = prompt("Ingrese un color del 0 al 255, RGB ROJO")
if(Number(rojo) > 255 || Number(rojo < 0)) { //false
    alert("El numero ingresado en rojo no es un rango permitido")
}
const verde = prompt("Ingrese un color del 0 al 255, RGB VERDE")
if(Number(verde) > 255 || Number(verde < 0)) { //false
    alert("El numero ingresado en verde no es un rango permitido")
}
const azul = prompt("Ingrese un color del 0 al 255, RGB AZUL")
if(Number(azul) > 255 || Number(azul < 0)) { //false
    alert("El numero ingresado en azul no es un rango permitido")
}

const $body = document.querySelector("body")
$body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`   //"rgb(como ya atrape los prompt dentro de variables ahora aqui coloco un template string)
