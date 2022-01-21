
let nombre="pepe";
//declaracion de variable de tipo constante, es espe proceso asigna la variable pero contiene una funcion y se recomienda que se creen asi las funciones para mayor seguridad una funcion flecha .

const nombreUsuario = () => {
    let nombre = prompt("ingrese un nombre");
    alert("Tu nombre es: "+ nombre);
    console.log("tu nombre es: "+ nombre);
}
console.log(nombre);