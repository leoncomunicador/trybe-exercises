/*
Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
*/

let n1 = 20;
let n2 = 30;
let n3 = 40;

if (n1 > n2 && n1 > n3) {
    console.log(`o maior número é ${n1}`);
} else if (n2 > n3 && n2 > n1) {
    console.log(`o maior número é ${n2}`);
} else {
    console.log(`o maior número é ${n3}`);
}