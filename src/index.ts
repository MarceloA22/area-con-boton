let btnCalcular = document.getElementById("enviarArea");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
//let base: number = Number(dato1.value);
//let altura: number = Number(dato2.value);
//let area: number = Number(dato1.value*dato2.value);
btnCalcular.addEventListener("click", () => {
  console.log("La base mide", dato1.value);
  console.log("la altura mide", dato2.value);
  console.log(" EL AREA DEL RECTANGULO ES: ", dato1.value * dato2.value);
});
