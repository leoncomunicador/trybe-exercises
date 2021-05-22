/*

Parte I

Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
Adicione a tag div com a classe main-content como filho da tag body ;
Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

*/

// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

const elementH1 = document.createElement('h1');
elementH1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);


// 2. Adicione a tag div com a classe main-content como filho da tag body ;

const elementDivMain = document.createElement('div');
elementDivMain.className = 'main-content';
document.body.appendChild(elementDivMain);

// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

const elemenDivCenter = document.createElement('div');
elemenDivCenter.className = 'center-content';
elementDivMain.appendChild(elemenDivCenter);

// 4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

const paragraph = document.createElement('p');
paragraph.innerHTML = 'Texto Show';
elemenDivCenter.appendChild(paragraph);

// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

const elementDivLeft = document.createElement('div');
elementDivLeft.className = 'left-content';
elementDivMain.appendChild(elementDivLeft);

// 6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

const elementDivRight = document.createElement('div');
elementDivRight.className = 'right-content';
elementDivMain.appendChild(elementDivRight);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

const elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = 'https://picsum.photos/200';
elementDivLeft.appendChild(elementImg);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

const elementUl = document.createElement('ul');
elementDivRight.appendChild(elementUl);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
    'Sete', 'Oito', 'Nove', 'Dez']
for (let num in arrayNumbers) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = arrayNumbers[num];
    elementUl.appendChild(elementLi);
};

// 9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

for (let index = 1; index <= 3; index += 1) {
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = 'Show' + indexedDB;
    elementDivMain.appendChild(elementH3);
}

/*
Parte II

Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

Adicione a classe title na tag h1 criada;
Adicione a classe description nas 3 tags h3 criadas;
Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
*/

// 1. Adicione a classe title na tag h1 criada;

const title = document.getElementsByTagName('h1')[0];
title.className = 'title';

// 2. Adicione a classe description nas 3 tags h3 criadas;

const elementsH3 = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
    elementsH3[index].className = 'description;'
}

// 3. Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

const divLeftContent = document.getElementsByClassName('left-content')[0];
elementDivMain.removeChild(divLeftContent);

// 4. Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;

const divRightContent = document.getElementsByClassName('right-content')[0];
divRightContent.style.marginRight = 'auto';

// 5. Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

const divCenterContent = document.getElementsByClassName('center-content')[0];
divCenterContent.parentNode.style.backgroundColor = 'green';

// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

elementUl.lastChild.remove();
elementUl.lastChild.remove();
