// Esto es un comentario de linea

/* 
Esto es un comentario de bloque
*/


function addRow(event) {
    const texto = document.querySelector("#entrada").value
    const tabla = document.querySelector("#la_tabla")
    // TODO: Crear una fila a la tabla la_tabla debajo del boton con el texto de input
    const fila = document.createElement("tr")
    const celda = document.createElement("td")
    celda.innerHTML = texto

    fila.appendChild(celda)
    tabla.appendChild(fila)

}


window.onload = function() {
    let elboton = document.querySelector("#crear")
    elboton.addEventListener("click", addRow)

    let formboto = document.querySelector("#boton_alta")
    formboto.addEventListener("click", validaForm)
}