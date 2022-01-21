// condicionales
// = es asignacion
// == es igualacion
// === compara valor y tipo de dato

let ciudad = prompt("ingrese su edad");

switch (ciudad) {
  case "bogota":
    alert("el clima frio");
    break;

  case "pasto":
    alert("el clima frio");
    break;

  case "armenia":
    alert("el clima templado");
    break;
  default:
    alert("la ciudad no es valida");
    break;
   
}

if (ciudad == "bogota" || ciudad == "pasto") {
  alert("el clima frio");
} else {
  if (ciudad == "armenia" || ciudad == "medellin") {
    alert("el clima templado");
  } else {
    alert("la ciudad no es valida");
  }
}
