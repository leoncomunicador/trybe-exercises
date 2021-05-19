document.querySelector(".pilotos-sem-titulo p");
// <p class=​"piloto-f1-atual">​Lando Norris​</p>​
document.querySelector(".piloto-f1-atual");
// <p class=​"piloto-f1-atual">​Lewis Hamilton​</p>​
document.querySelector(".pilotos-sem-titulo .piloto-f1-atual");
// <div class=​"piloto-f1-atual">​George Russel​</div>



document.querySelectorAll('div');
// NodeList(4) [div.pilotos-com-titulo, div.pilotos-sem-titulo, div.piloto-f1-atual, div.piloto-f1-atual]
document.querySelectorAll('p');
// NodeList(5) [p.lenda, p.piloto-f1-atual, p.piloto-f1-atual, p.piloto-f1-atual, p#Dona]
document.querySelectorAll('p')[0].innerText = "Lenda";
// "Lenda"
document.querySelectorAll(".piloto-f1-atual");
// NodeList(6) [p.piloto-f1-atual, p.piloto-f1-atual, div.piloto-f1-atual, div.piloto-f1-atual, span.piloto-f1-atual, p.piloto-f1-atual]
document.querySelectorAll(".piloto-f1-atual").length;
// 6
document.querySelectorAll(".pilotos-sem-titulo .piloto-f1-atual");
// NodeList(4) [div.piloto-f1-atual, div.piloto-f1-atual, span.piloto-f1-atual, p.piloto-f1-atual]


