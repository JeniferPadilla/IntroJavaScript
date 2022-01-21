
const nombreUsuario = () => {
    let nombre = prompt("Ingrese Su Nombre");
    let edad = prompt("Ingrese Su Edad");
    let direccion = prompt("Ingrese Su Direccion");
    let cc = prompt("Ingrese El Numero De Su Documento");
    let telefono = prompt("Ingrese El Numero De Su Celular");

    alert("Hola " + nombre + " \nTienes " +edad+ "\nLa direccion de su casa es: " +direccion+ "\nEl numero de su documento es: "+cc+ "\nEl numero de telefono es: " + telefono);

    console.log("Hola " + nombre + " Tienes  " + edad + " años, La direccion de su casa es " + direccion + ", el numero de documento es " + cc + " y el numero de telefono es " + telefono);
}