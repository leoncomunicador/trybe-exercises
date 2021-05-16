let taskList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(taskList.length);
// 3;

let searchFirstTask = taskList[0];

console.log(searchFirstTask);
// Tomar café

let searchLastTask = taskList[taskList.length-1];

console.log(searchLastTask);
// Brincar com o cachorro

taskList.push('Fazer exercícios da Trybe'); // adiciona mais uma tarefa
console.log(taskList);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']


taskList.unshift('Tomar banho');
console.log(taskList);
// Se precisarmos adicionar no início, podemos usar o .unshift() . Teste em seu console e veja o resultado.

/*O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift() . Faça em seu console e veja o resultado.

taskList.pop();
console.log(taskList);
*/

// Outra importante ferramenta é o indexOf() , usado para procurar o índice de um item no Array . Veja o exemplo:

let taskList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = taskList.indexOf('Reunião');
console.log(indexOfTask);

// 1