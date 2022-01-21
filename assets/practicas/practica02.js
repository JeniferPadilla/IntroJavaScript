let departamento = prompt(
  "Ingrese uno de los siguientes departamentos: \n1.Valle del Cauca \n2.Choco \n3.Nariño \n4.Bolivar \n5.Atlantico"
);
if (departamento != "Valle del Cauca" || departamento != "Choco" || departamento != "Nariño" || departamento != "Bolivar" || departamento != "Atlantico" ) {
  alert("Ese departamento no esta en la lista, por favor ingrese uno de la lista");
}

if (departamento === "Valle del Cauca") {
  let ciudad = prompt(
    "Ingrese una de las siguientes Ciudades de este Departamento: \n1.buenaventura \n2.cali \n3. buga \n4.zarzal \n5.cartago"
  );

  if (ciudad === "buenaventura") {
    alert("Bello Puerto del mar mi Buenaventura");
  } else if (ciudad === "cali") {
    alert("Cali la sucursal del cielo");
  } else if (ciudad === "buga") {
    alert("El milagroso de Buga");
  } else if (ciudad === "zarzal") {
    alert("Tierra dulce de Colombia Zarzal");
  } else if (ciudad === "cartago") {
    alert("Clima cálido con una temperatura media de 25 grados en Cartago");
  } else {
    alert(
      "Esa Ciudad no esta en el listado, solo ingrese las que aparecen en la lista."
    );
  }
} else if (departamento === "Choco") {
  let ciudadC = prompt(
    "Ingrese una de las siguientes Ciudades de este Departamento: \n1.bahía solano \n2.acandí \n3. bojaya \n4.bagadó \n5.condoto"
  );

  if (ciudadC === "bahía solano") {
    alert(
      "Su cabecera municipal lleva por nombre Ciudad Mutis, pertinente del choco"
    );
  }
  if (ciudadC === "acandí") {
    alert(
      " Esta al extremo del norte de Chocó, al noroccidente de Colombia, a orillas del mar Caribe"
    );
  }
  if (ciudadC === "bojaya") {
    alert("El milagroso de Buga");
  }
  if (ciudadC === "bagadó") {
    alert("Fue segregado del municipio de Quibdó");
  }
  if (ciudadC === "condoto") {
    alert("provincia de San Juan");
  } else {
    alert(
      "Esa Ciudad no esta en el listado, solo ingrese las que aparecen en la lista."
    );
  }
} else if (departamento === "Nariño") {
  let ciudadC = prompt(
    "Ingrese una de las siguientes Ciudades de este Departamento: \n1.barbacoas \n2.el charco \n3. la tola \n4.mosquera \n5.tumaco"
  );

  if (ciudadC === "barbacoas") {
    alert("tiene 1600 años de fundación");
  }
  if (ciudadC === "el charco") {
    alert(" Tumaco-Barbacoas");
  }
  if (ciudadC === "la tola") {
    alert("Barbacoas");
  }
  if (ciudadC === "mosquera") {
    alert("Playas Hermosas");
  }
  if (ciudadC === "tumaco") {
    alert("San Andrés de Tumaco");
  } else {
    alert(
      "Esa Ciudad no esta en el listado, solo ingrese las que aparecen en la lista."
    );
  }
} else if (departamento === "Bolivar") {
  let ciudadB = prompt(
    "Ingrese una de las siguientes Ciudades de este Departamento: \n1.achí solano \n2.altos del rosario \n3. arenal \n4.arjona \n5.arroyohondo"
  );

  if (ciudadB === "achí") {
    alert("Mojana bolivarense");
  }
  if (ciudadB === "altos del rosario") {
    alert("Loba");
  }
  if (ciudadB === "arenal") {
    alert("Magdalena Medio");
  }
  if (ciudadB === "arjona") {
    alert("Dique bolivarense");
  }
  if (ciudadB === "arroyohondo") {
    alert("Dique bolivarense");
  } else {
    alert(
      "Esa Ciudad no esta en el listado, solo ingrese las que aparecen en la lista."
    );
  }
} else if (departamento === "Atlantico") {
  let ciudadA = prompt(
    "Ingrese una de las siguientes Ciudades de este Departamento: \n1.barranquilla \n2.polonuevo \n3. candelaria \n4.malambo \n5.juan de acosta"
  );

  if (ciudadA === "barranquilla") {
    alert("Subregion Norte");
  }
  if (ciudadA === "polonuevo") {
    alert("Subregion Centro-Oriente");
  }
  if (ciudadA === "candelaria") {
    alert("Subregion Sur");
  }
  if (ciudadA === "malambo") {
    alert("Subregion Norte");
  }
  if (ciudadA === "juan de acosta") {
    alert("Subregion Occidente");
  } else {
    alert(
      "Esa Ciudad no esta en el listado, solo ingrese las que aparecen en la lista."
    );
  }
}
