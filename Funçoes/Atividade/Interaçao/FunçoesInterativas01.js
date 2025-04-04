
//Exercio Interativo
function alterarTexto() {
    document.getElementById("paragrafo").innerText = "O texto foi alterado!";
}

function alterarFonte() {
    document.getElementById("paragrafo").style.fontSize = "24px";
    document.getElementById("paragrafo").style.fontFamily = "Courier New";
}

function mudarCorFundo() {
    document.body.style.backgroundColor = "#FFD700"; // amarelo
}

function mostrarAlerta() {
    alert("Você clicou no botão de alerta!");
}

function restaurar() {
    document.getElementById("paragrafo").innerText = "Texto original do parágrafo.";
    document.getElementById("paragrafo").style.fontSize = "16px";
    document.getElementById("paragrafo").style.fontFamily = "Arial";
    document.body.style.backgroundColor = "white";
}
