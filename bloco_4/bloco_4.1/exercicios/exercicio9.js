/*
Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

let n1 = 7;
let n2 = 8;
let n3 = 14;

if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}