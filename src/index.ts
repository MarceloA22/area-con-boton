let btnCalcular = document.getElementById("enviarArea");
btnCalcular.addEventListener("click", () => {
  let base: number = Number(dato1.value);
  let altura: number = Number(dato2.value);
  let area: number = Number(base * altura);
  console.log("La base mide", base);
  console.log("la altura mide", altura);
  console.log(" EL AREA DEL RECTANGULO ES: ", area);
});
