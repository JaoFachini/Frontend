//Buscando elementos por ID
let titulo = document.getElementById("titulo");
console.log(titulo);

// Buscando elementos por classe
let descriçao = document.getElementsByClassName("descriçao")
console.log(descriçao[0]);

//Selecionando pelo nome da TAG
let paragrafo = document.getElementsByTagName("p")
console.log(paragrafo[0]);

//Selecionando pelo Qery Selector
// "#" Significa ID -> O nome ID é titulo
//"." significa classe -> O nome da classe é Descrição 
let tituloQS = document.querySelector("#titulo");
let paragrafoQS = document.querySelector(".descrição");
console.log("Exibindo com Query Selector" + tituloQS.textContent);
console.log("Exibindo com QS o paragrafo" + paragrafoQS[0].textContent);
