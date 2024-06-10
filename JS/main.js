
// Para con una tienda de productos con JS

const carritoDeCompras = [];

const responses = {
  "1": "Ha elegido las zapatillas para correr!",
  "2": "Ha elegido las zapatillas para jugar baloncesto!",
  "3": "Ha elegido las zapatillas para jugar tenis!",
  "4": "Ha elegido las zapatillas para jugar fútbol!",
  "5": "Ha elegido las zapatillas para jugar béisbol!"
};

let alertResponse = "";

(function elegirProducto() {
  const producto = prompt("¿Qué código de producto desea elegir?");
  if (responses[producto]) {
    alertResponse = responses[producto];
    carritoDeCompras.push({ [producto]: responses[producto] });
  } else {
    alertResponse = "Por favor, eliga uno de los códigos disponibles";
  }
  alert(alertResponse);
})();



// Piramide  elaborada con JS con Js
/*Este código no esta directamente relacionado con la tienda que realizaré
para el proyecto final pero me ha permitido aplicar los conceptos aprendidos durante
las clases y, por eso, realizo la entrega

Nota importante: Revisar la consola de Google
*/

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i++) {
  rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);