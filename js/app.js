// Esto es un comentario de linea

/* 
Esto es un comentario de bloque
*/


function cuentaClicks(event) {
    let input = document.querySelector("#entrada").value
    alert(input)
    // TODO: Crear un parrafo debajo del boton con el texto de input
}

window.onload = function() {
    let elboton = document.querySelector("#crear")
    elboton.addEventListener("click", cuentaClicks)
}