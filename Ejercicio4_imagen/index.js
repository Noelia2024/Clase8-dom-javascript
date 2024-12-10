//Hacer un prompt en donde el usuario tenga que ingresar un tamaño de imagen con las opciones chica, mediana,grande.
//segun el tamaño que elija el usuario se modifique el tamaño de la imagen.

const imagen = prompt("Indique el tamaño de imagen: chica, mediana, grande")
const $img = document.querySelector("img")
//img chica 200px
//img mediana 500px
//imag grande 800px
if(imagen === "chica"){
    $img.style.width = "200px"
    $img.style.height = "200px"
}else if(imagen === "mediana"){
    $img.style.width = "500px"
    $img.style.height = "500px"
}else if(imagen === "grande"){
    $img.style.width = "800px"
    $img.style.height = "800px"
}else{
    alert("La opcion ingresada no es valida. Intente con chica, mediana, grande.")
}

