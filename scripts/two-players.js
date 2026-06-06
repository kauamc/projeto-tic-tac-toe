// Preparando dados
const j1 = sessionStorage.getItem("jogador1")
const j2 = sessionStorage.getItem("jogador2")
if (j1) {
    document.getElementById('dados-j1-nome').innerHTML = j1
}
if (j2) {
    document.getElementById('dados-j2-nome').innerHTML = j2
}