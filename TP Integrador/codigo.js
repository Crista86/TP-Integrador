/*
Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”,
deberá mostrar en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de
tickets a comprar con el descuento correspondiente dependiendo la categoría seleccionada, 
existen 3 categorías, Estudiante, Trainee, Junior
*/
btnResumen.addEventListener("click", function (event) {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let cantidad = document.getElementById("Cantidad").value;
  let categoria = document.getElementById("Categoria").value;

  let descuento = "";
  let total = "";

  switch (categoria) {
    case "Trainee":
      descuento = 0.5;
      break;
    case "Estudiante":
      descuento = 0.2;
      break;
    case "Junior":
      descuento = 0.85;
      break;
    default:
      descuento = 0;
      break;
  }
  console.log(descuento);
  total = cantidad * 200 * descuento;
  console.log(total);
  document.getElementById("total").innerHTML = "Total a Pagar: " + total + "$";
});

btnBorrar.addEventListener("click", function (event) {
  document.getElementById("formulario").reset();
  document.getElementById("total").innerHTML = "Total a Pagar: $";
});
