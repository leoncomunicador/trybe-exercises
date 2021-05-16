let numero = 7;

for (let contador = 1; contador <= 10; contador += 1) {
    console.log('*');
    console.log(`${numero} x ${contador} = ${numero * contador}`);
};

let listaDeNomes = ['Joana', 'Maria', 'Lucas'];
listaDeNomes.push('Mateus', 'Paula', 'José', 'Isabela', 'Luis', 'Davi', 'Camila');

// for (let indice = 0; indice < listaDeNomes.length; indice += 1) {
//     console.log(`Boas vindas, ${listaDeNomes[indice]}!`);
// }


for (lista of listaDeNomes) {   
    console.log(`Boas vindas, ${lista}!`);
}