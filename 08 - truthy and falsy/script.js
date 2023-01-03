// String vazia - 0 (zero) - null e undefined
// Seu valor booleano é false
// ------------------------------------------------------

// Truthy & Falsy

const x = "";
console.log(!!x);
if (x) {
  console.log(x);
  // console: false
}

const y = 0;
console.log(!!y);
// console: false

const a = null;
console.log(!!a);
// console: false

const b = undefined;
console.log(!!b);
// console: false

// ------------------------------------------------------

// Listas e Objetos é true
const list = [];
// Checar se a lista tem algum valor
if (list.length > 0) {
  console.log(!!list);
  // console: true

}
console.log(!!list);
// console: true

// ------------------------------------------------------

const object = {};
console.log(!!object);
// console: true

// Somente uma exclamação inverte o booleano atual;
// !true = false
// !false = true
console.log(!false);
// console: true
