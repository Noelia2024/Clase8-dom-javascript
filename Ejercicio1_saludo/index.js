/*Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, 
y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y 
tener un tamaño de letra y una tipografía distinta de la que viene por defecto.*/

/*tengo que hacer un prompt que permita ingresar un nombre*/
//Despues:
//Muestre un saludo con el nombre ingresado en un H1.
//H1 centrado, con tamaño de letra y una tripografia.

//prompt("Ingrese un nombre")
// Separado por un ENTER
//h1.tex = lo escrito en el prompt
// h1.estilos= centrado, tamaño de letra y una tipografia//

const nombre = prompt("Ingrese su nombre")
const h1 = document.querySelector("#saludo")
h1.innerText =  `Hola ${nombre} como va?` /*tengo que plantear el saludo*/ 
h1.style.textAlign = "center"
h1.style.fontSize = "16px"   /*tamaño de letra*/
h1.style.fontFamily = "Verdana"   /*tipografia*/
//Para los estilos, puedo guiarme con el css y despues lo borro





