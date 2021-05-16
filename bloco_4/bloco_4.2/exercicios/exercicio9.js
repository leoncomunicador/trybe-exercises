// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let arrayNumber = [];

for (let index = 1; index <= 25; index += 1) {
    arrayNumber.push(index);
}

for (let index = 0; index < arrayNumber.length; index += 1) {
    console.log(arrayNumber[index] / 2);
}
