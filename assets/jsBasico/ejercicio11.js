// DOM
// para js utilizar id para identificar una funcion
// y en css utilizar el class
// usar document para hacer referencia donde quiere realizar la accion
let ejecutar = document.getElementById("btnEjecutar");

const cambiarNombre = () => {
    let nombre = prompt("ingrese un nombre");
    alert("Tu nombre es: "+ nombre);
};
//  Eventos
// no se recomienda dentro del onclick meter las funciones que queremos que haga el boton, si no que se debe llamar el nombre de la funcion ya creada
//  function primera estructura para crear funciones pero lo mejoraron a esta estructura =()=> y sirve para hacer las funciones mas fuertes

// ejecutar.onclick = function () {
//     cambiarNombre();
// }

ejecutar.onclick = () => {
    cambiarNombre();
};