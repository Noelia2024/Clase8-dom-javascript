//1- Hacer un prompt por una temperatura
const temperatura = prompt("Indique temperatura en °")
const $h1 = document.querySelector("#titulo")
if(temperatura < 0){
    $h1.style.color = "blue"
}else if(temperatura >= 0 && temperatura < 15){
    $h1.style.color = "aqua" 
}else if(temperatura >= 15 && temperatura < 25){
    $h1.style.color = "green"
}else if(temperatura >= 25 && temperatura < 30){
    $h1.style.color = "yellow"
}else if(temperatura >= 30 && temperatura < 35){
    $h1.style.color = "coral"
}else if(temperatura > 35){
    $h1.style.color = "red"
}else{(temperatura > 45)
    alert("La temperatura indicada no es valida")
}
//funciono!!

