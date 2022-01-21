// DOM
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");
let edadU = document.getElementById("edadU");
let direccionU = document.getElementById("direccionU");
let telefonoU = document.getElementById("telefonoU");
let ccU = document.getElementById("ccU");

const cambiarDatos = () => {
  let nombre = prompt("ingrese su nombre");
  let edad = prompt("ingrese su edad");
  let direccion = prompt("ingrese su direccion");
  let telefono = prompt("ingrese su telefono");
  let cc = prompt("ingrese su numero de documento");

  nombreUsuario.innerHTML = "Bienvenido:" + nombre;
  edadU.innerHTML = "Edad:" + edad;
  direccionU.innerHTML = "Dirección:" + direccion;
  telefonoU.innerHTML = "Teléfono:" + telefono;
  ccU.innerHTML = "Numero de Documento:" + cc;

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("edad", edad);
  localStorage.setItem("direccion", direccion);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("cc", cc);
};

if (localStorage.getItem("nombre")) {
  nombreUsuario.innerHTML = "Bienvenido: " + localStorage.getItem("nombre");
}

if (localStorage.getItem("edad")) {
  edadU.innerHTML = "Edad: " + localStorage.getItem("edad");
}
if (localStorage.getItem("direccion")) {
  direccionU.innerHTML = "Dirección: " + localStorage.getItem("direccion");
}
if (localStorage.getItem("telefono")) {
  telefonoU.innerHTML = "Teléfono: " + localStorage.getItem("telefono");
}
if (localStorage.getItem("cc")) {
  ccU.innerHTML = "Numero de Documento: " + localStorage.getItem("cc");
}

ejecutar.onclick = () => {
  cambiarDatos();
};
