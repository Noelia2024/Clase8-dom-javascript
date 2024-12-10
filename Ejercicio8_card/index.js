// 1-Hacer tres prompt que pregunten por:
//------un titulo
//------una url de una imagen
//-----una url a un articulo
//2- usar esos datos para completar en el html
//una card que tenga
//--la imagen con la url ingresada
//--titulo con el texto del titulo ingresado
//--un link que diga leer mas con la url al art ingresado
const titulo = prompt("Ingrese el titulo para la tarjeta:");
const urlImagen = prompt("Ingrese la url de la imagen:");
const urlArticulo = prompt("Ingrese la url del articulo:");

const card = document.querySelector("#card")
//card.innerHTML= `<img src= "${urlImagen}" alt="Imagen de la tarjeta>`
//card.innerHTML= `<h1>${titulo}</h1>`
//card.innerHTML= `<a href="${urlArticulo}" target="_blank>Leer más</a>`
card.innerHTML = `
<img src="${urlImagen}" alt="Imagen de la tarjeta">
<h1>${titulo}</h1>
<a href="${urlArticulo}" target="_blank">Leer más</a>
`;
//PORQUE NO FUNCIONA