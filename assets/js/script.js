// swal("Hello world!");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById('apellido');
const mensajeAlerta = document.getElementById('mensajeAlerta');
const mensajeAlerta2 = document.getElementById('mensajeAlerta2');
// console.log(nombre);
// function validarNombre() {
//     let validarNombre = false;
//     else if (nombre.value != "") {
//         validarNombre = true;
//     }
//     return validarNombre;
// }

// function validarApellido() {
//     let validarApellido = false
//     if (apellido.value != "") {
//         validarApellido = true;
//     }
//     return validarApellido;
// }

function validarForm(event) {
    // var validar = false
    //Validando el nombre
    event.preventDefault();

    if (nombre.value == "") {
        nombre.classList.add('alert');
        mensajeAlerta.innerText = 'El nombre está vacío';
        mensajeAlerta.classList.add('mensajeAlerta');
    }
    if (apellido.value == "") {
        apellido.classList.add('alert');
        mensajeAlerta2.innerText = 'El apellido está vacío';
        mensajeAlerta2.classList.add('mensajeAlerta');
    }

    // window.location = 'calculadora.html';
    // return validar;
}

/*Eventos*/

// nombre.addEventListener("")