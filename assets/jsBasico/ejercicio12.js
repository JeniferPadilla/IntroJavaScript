// DOM
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
    let nombre = prompt("ingrese un nombre");
  //  alert("Tu nombre es: "+ nombre);
  nombreUsuario.innerHTML="Bienvenido:" + nombre; //aqui con el innerHTML esta cambiando lo que tiene en el html  por lo que le indicamos
// abreviado: nombreUsuario.innerHTML+= nombre;
}


ejecutar.onclick = () => {
    cambiarNombre();
}