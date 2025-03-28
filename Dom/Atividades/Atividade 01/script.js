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
