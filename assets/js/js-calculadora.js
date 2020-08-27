//Promedio
const promedio = document.getElementById("promedio");
// Suma
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");
/* Llamamos el botón 
 */
promedio.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value); /* Me trae y almacena el valor*/
    let num2 = parseFloat(document.getElementById("num2").value); /* Me trae y almacena el valor */
    let promedio = (num1 + num2) / 2;
    // console.log(promedio);
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = promedio;
})
suma.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value); /* Me trae y almacena el valor*/
    let num2 = parseFloat(document.getElementById("num2").value); /* Me trae y almacena el valor */
    let promedio = (num1 + num2);
    // console.log(promedio);
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = promedio;
})
resta.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value); /* Me trae y almacena el valor*/
    let num2 = parseFloat(document.getElementById("num2").value); /* Me trae y almacena el valor */
    let promedio = (num1 - num2);
    // console.log(promedio);
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = promedio;
})
multiplicacion.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value); /* Me trae y almacena el valor*/
    let num2 = parseFloat(document.getElementById("num2").value); /* Me trae y almacena el valor */
    let promedio = (num1 * num2);
    // console.log(promedio);
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = promedio;
})
division.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value); /* Me trae y almacena el valor*/
    let num2 = parseFloat(document.getElementById("num2").value); /* Me trae y almacena el valor */
    if (num2 == 0) {
        swal("Estás dividiendo por cero!", "¡Eres consciente de las consecuencias!");

    }
    let promedio = (num1 / num2);
    // console.log(promedio);
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = promedio;
})