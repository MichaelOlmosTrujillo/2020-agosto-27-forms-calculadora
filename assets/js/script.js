// swal("Hello world!");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById('apellido');
const mensajeAlerta = document.getElementById('mensajeAlerta');
const mensajeAlerta2 = document.getElementById('mensajeAlerta2');
const email = document.getElementById('email');
const mensajeAlertaEmail = document.getElementById('mensajeAlertaEmail');
const ciudad = document.getElementById('ciudad');
const mensajeAlertaCiudad = document.getElementById('mensajeAlertaCiudad');
const genero = document.getElementById('genero');
const mensajeAlertaGenero = document.getElementById('mensajeAlertaGenero');

function validarForm(event) {
    // var validar = false
    //Validando el nombre
    event.preventDefault();
    let validar = true;

    if (nombre.value == "") {
        nombre.classList.add('alert');
        mensajeAlerta.innerText = 'El nombre está vacío';
        mensajeAlerta.classList.add('mensajeAlerta');
        validar = false;
    }
    if (apellido.value == "") {
        apellido.classList.add('alert');
        mensajeAlerta2.innerText = 'El apellido está vacío';
        mensajeAlerta2.classList.add('mensajeAlerta');
        validar = false;
    }
    if (email.value == "") {
        email.classList.add('alert');
        mensajeAlertaEmail.innerText = 'El email está vacío';
        mensajeAlertaEmail.classList.add('mensajeAlerta');
        validar = false;
    }
    // if (ciudad.options[0].selected == false && ciudad.options[1].selected == false && ciudad.options[2].selected == false && ciudad.options[3].selected == false && ciudad.options[4].selected == false && ciudad.options[5].selected == false) {
    //     console.log(ciudad.selectedIndex);
    //     ciudad.classList.add('alert');
    //     mensajeAlertaCiudad.innerText = 'No ha seleccionado una ciudad';
    //     mensajeAlertaCiudad.classList.add('mensajeAlerta');
    // }
    if (genero.options[0].selected == false && genero.options[1].selected == false && genero.options[2].selected == false) {
        console.log(genero.selectedIndex);
        genero.classList.add('alert');
        mensajeAlertaGenero.innerText = 'No ha seleccionado un genero';
        mensajeAlertaGenero.classList.add('mensajeAlerta');
        validar = false;
    }

    if (validar) {
        swal("¡Validaste el formulario!", "¡click en el botón para salir!", "Exitos");
        setTimeout(function () {
            window.location = './assets/pages/calculadora.html';
        }, 5000);
    } else {
        swal("¡No has validado el formulario y no puedes enviarlo ni pasar a usar la CALCULADORA!");

    }

    // return validar;
}

/*Eventos*/

// nombre.addEventListener("")