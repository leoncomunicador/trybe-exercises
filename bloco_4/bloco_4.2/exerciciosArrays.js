/*
Exercício 1
Obtenha o valor "Serviços" do array menu :
*/

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);
// Serviços

/*
Exercício 2
Procure o índice do valor "Portfólio" do array menu :
*/

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexPortfolio = menu.indexOf('Portfólio');

console.log(indexPortfolio);
// 2

/*
Exercício 3
Adicione o valor "Contato" no final do array menu :
*/

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);
// [ 'Home', 'Serviços', 'Portfólio', 'Links', 'Contato' ]
