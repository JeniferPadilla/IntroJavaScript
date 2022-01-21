// para convertir lo que se digite en minuscula se usa el toLowerCase();

let dia = prompt("ingrese un dia a la semana").toLowerCase();

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert("entre semana");
} else {
  if (dia === "sabado" || dia === "domingo") {
    alert("fin semana");
  } else {
    alert("favor ingrese solo dias de semana");
  }
};
