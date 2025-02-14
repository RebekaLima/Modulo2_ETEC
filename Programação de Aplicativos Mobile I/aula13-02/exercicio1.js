//Objetivo: trocar o valor de x e y sem utilizar variáveis auxiliares

let x = 1;
let y = 5;

console.log("O valor inicial de x é: " + x);
console.log("O valor inicial de y é: " + y);

    x = x + y;
    y = x - y;
    x = x - y;

console.log("O valor de x é: " + x);
console.log("O valor de y é: " + y);