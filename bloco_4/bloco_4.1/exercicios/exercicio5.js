/*
Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.
*/

let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let somaAngulos = anguloA + anguloB + anguloC;

let todosOsAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (todosOsAngulosPositivos) {
    if (somaAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: ângulo inválido');
}
