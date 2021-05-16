let numeros = [1, 2, 3, 4, 5];

for (numero of numeros) {
    console.log(numero);
};

// resultado: 
//1
//2
//3
//4
//5

let word = 'Hello';
for (let letter of word) {
    console.log(letter);
}

// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

// Por fim, com o for/of , nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
    sum += 1;
    console.log(sum);
}

// 11
// 21
// 31

console.log(arrOfNumbers);
// Resultado: [10, 20, 30]