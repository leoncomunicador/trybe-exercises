// Parte I

// 1. Acesse o elemento elementoOndeVoceEsta .

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';


// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

// 4. Acesse o primeiroFilho a partir de pai.

const primeiroFilho = pai.firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

const textElement = elementoOndeVoceEsta.nextSibling;


//  7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai .

const terceiroFilho = pai.lastElementChild.previousElementSibling;

// Parte II

/*
Crie um irmão para elementoOndeVoceEsta .
Crie um filho para elementoOndeVoceEsta .
Crie um filho para primeiroFilhoDoFilho .
A partir desse filho criado, acesse terceiroFilho .
*/

// 1. Crie um irmão para `elementoOndeVoceEsta`.

const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('div');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

// 2. Crie um filho para `elementoOndeVoceEsta`.

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('div');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);


// 3. Crie um filho para `primeiroFilhoDoFilho`.

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
const filhoPrimeiroFilhoDoFilho = document.createElement('div');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);


// 4. A partir desse filho criado, acesse `terceiroFilho`.

const terceiroFilho = filhoPrimeiroFilhoDoFilho
    .parentElement // primeiroFilhoDoFilho
    .parentElement // elementoOndeVoceEsta
    .nextElementSibling; // terceiroFilho
console.log(terceiroFilho);


// Parte III

/*
Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
*/

const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = pai.childNodes[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
    }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();
