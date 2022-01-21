// Local Storage: es una pequeña memoria de almacenamiento para los navegadores
// setItem para insertar intem

let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
    let nombre = prompt("ingrese un nombre");
  nombreUsuario.innerHTML="Bienvenido:" + nombre;
  localStorage.setItem("nombre", nombre);
};

if (localStorage.getItem("nombre")) {
nombreUsuario.innerHTML= "Bienvenido: " + localStorage.getItem("nombre")
}

// Eventos
ejecutar.onclick = () => {
    cambiarNombre();
};