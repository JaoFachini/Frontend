// Função para adicionar um esporte digitado pelo usuário
document.getElementById("adicionar-esporte").addEventListener("click", function() {
    let inputEsporte = document.getElementById("novo-esporte");
    let nomeEsporte = inputEsporte.value.trim(); // Remove espaços extras

    if (nomeEsporte !== "") {
        let novoEsporte = document.createElement("li");
        novoEsporte.className = "esporte";
        novoEsporte.textContent = nomeEsporte;

        // Mantendo o mesmo estilo dos esportes já existentes
        novoEsporte.style.padding = "10px";
        novoEsporte.style.margin = "5px 0";
        novoEsporte.style.borderRadius = "5px";
        novoEsporte.style.background = "#f4f4f4"; // Mesma cor neutra dos outros
        novoEsporte.style.fontSize = "18px";

        document.getElementById("lista-esportes").appendChild(novoEsporte);
        console.log("Novo esporte adicionado:", nomeEsporte);

        inputEsporte.value = ""; // Limpa o campo de entrada
    } else {
        alert("Digite um esporte antes de adicionar!");
    }
});

// Alterando o título e a cor do título
document.getElementById("titulo").textContent = "Meus Esportes Favoritos";
document.getElementById("titulo").style.color = "blue";

// Adicionando dois novos esportes à lista
let lista = document.getElementById("lista-esportes");

let novoEsporte1 = document.createElement("li");
novoEsporte1.className = "esporte";
novoEsporte1.textContent = "🏸 Badminton";
lista.appendChild(novoEsporte1);

let novoEsporte2 = document.createElement("li");
novoEsporte2.className = "esporte";
novoEsporte2.textContent = "🤾‍♂️ Handebol";
lista.appendChild(novoEsporte2);
