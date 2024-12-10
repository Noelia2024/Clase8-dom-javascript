//crear dos div anidados: <div>
//                         <div></div>
//                        </dv>
//Hacer un prompt que indique porcentaje de progreso
const porcentaje = prompt("Escriba un porcentaje")
const $divContenedorProgreso = document.querySelector("#contenedor-progreso")// creo una const para el primer div
const $divProgreso = document.querySelector("#progreso")//creo una const para el siguiente div

//Creo los estilos de las cajas sin hacer un css:
$divContenedorProgreso.style.height = "100px"
$divContenedorProgreso.style.width = "100 wv"
$divContenedorProgreso.style.border = "3px solid red"
$divContenedorProgreso.style.borderRadius = "10px"

$divProgreso.style.height = "70px"
$divProgreso.style.margin = "15px 0px"
$divProgreso.style.border = "2px solid black"
$divProgreso.style.borderRadius = "10px"
$divProgreso.style.backgroundColor = "red"

$divProgreso.style.width = `${porcentaje}%` //aqui le damos un ancho para que ocupe el porcentaje que le de el usuario