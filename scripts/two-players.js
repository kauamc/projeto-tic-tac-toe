// Preparando dados

let partida = [null, null, null, null, null, null, null, null, null]

for(let c = 1; c <= 9; c++) {
    document.getElementById(`a${c}`).innerHTML = partida[c-1]
}

let j1 = sessionStorage.getItem("jogador1")
let j2 = sessionStorage.getItem("jogador2")
if (j1 == "") { j1 = 'Jogador 1' }
if (j2 == "") { j2 = 'Jogador 2' }

if (j1) { document.getElementById('dados-j1-nome').innerHTML = j1 }
if (j2) { document.getElementById('dados-j2-nome').innerHTML = j2 }

const melhorDe = sessionStorage.getItem("melhorDe")

const modalVelha = document.querySelector('#empate-fade')
const modalVitoria = document.querySelector('#vitoria-fade')

// Partida

let vez = 'j1'
let dadosVezJ1 = document.getElementById('dados-j1-vez')
let dadosVezJ2 = document.getElementById('dados-j2-vez')

let ptsJ1 = 0
let ptsJ2 = 0
let dadosPtsJ1 = document.getElementById('dados-j1-pts')
let dadosPtsJ2 = document.getElementById('dados-j2-pts')

let qtdJogadas = 0

const areas = document.querySelectorAll('.partida-area')
areas.forEach(area => {
    area.addEventListener('click', () => jogada(area))
})

function jogada(area) {
    if (area.innerHTML == '') {
        if (vez == 'j1') {
            area.innerHTML = 'X'
            partida[area.id.slice(-1)-1] = 'X'
        } else {
            area.innerHTML = 'O'
            partida[area.id.slice(-1)-1] = 'O'
        }
        qtdJogadas++
        atualizarVez()
        haVencedor()
    } else {
        // Jogada inválida !!!
    }
}

function haVencedor() {
    // Para jogador 1 (X)
    if (
        (partida[0] == 'X' && partida[1] == 'X' && partida[2] == 'X') || 
        (partida[3] == 'X' && partida[4] == 'X' && partida[5] == 'X') || 
        (partida[6] == 'X' && partida[7] == 'X' && partida[8] == 'X') || 
        (partida[0] == 'X' && partida[3] == 'X' && partida[6] == 'X') || 
        (partida[1] == 'X' && partida[4] == 'X' && partida[7] == 'X') || 
        (partida[2] == 'X' && partida[5] == 'X' && partida[8] == 'X') || 
        (partida[0] == 'X' && partida[4] == 'X' && partida[8] == 'X') || 
        (partida[2] == 'X' && partida[4] == 'X' && partida[6] == 'X')
    ) 
    {
        ptsJ1++
        dadosPtsJ1.innerHTML = ptsJ1
        if (ptsJ1 == melhorDe) {
            abrirModalVitoria(j1)
        } else {
            novaRodada()
        }
    // Para jogador 2 (O)
    } else if (
        (partida[0] == 'O' && partida[1] == 'O' && partida[2] == 'O') || 
        (partida[3] == 'O' && partida[4] == 'O' && partida[5] == 'O') || 
        (partida[6] == 'O' && partida[7] == 'O' && partida[8] == 'O') || 
        (partida[0] == 'O' && partida[3] == 'O' && partida[6] == 'O') || 
        (partida[1] == 'O' && partida[4] == 'O' && partida[7] == 'O') || 
        (partida[2] == 'O' && partida[5] == 'O' && partida[8] == 'O') || 
        (partida[0] == 'O' && partida[4] == 'O' && partida[8] == 'O') || 
        (partida[2] == 'O' && partida[4] == 'O' && partida[6] == 'O')
    )
    {
        ptsJ2++
        dadosPtsJ2.innerHTML = ptsJ2
        if (ptsJ2 == melhorDe) {
            abrirModalVitoria(j2)
        } else {
            novaRodada()
        }
    // Em caso de velha
    } else if (qtdJogadas == 9) {
        abrirModalVelha()
    }
}

function abrirModalVelha() {
    modalVelha.classList.remove('oculto')
}

function fecharModalVelha() {
    modalVelha.classList.add('oculto')
    novaRodada()
}

function abrirModalVitoria(jogador) {
    let mensagem = document.querySelector('#vitoria-modal-p')
    mensagem.innerHTML = `${jogador} venceu a melhor de ${melhorDe}`
    modalVitoria.classList.remove('oculto')
}

function fecharModalVitoria() {
    modalVitoria.classList.add('oculto')
}

function atualizarVez() {
    dadosVezJ1.classList.toggle('opacity-oculto')
    dadosVezJ2.classList.toggle('opacity-oculto')
    if (vez == 'j1') {
        vez = 'j2'
    } else {
        vez = 'j1'
    }
}

function novaRodada() {
    partida = [null, null, null, null, null, null, null, null, null]
    for(let c = 1; c <= 9; c++) {
        document.getElementById(`a${c}`).innerHTML = partida[c-1]
    }
    qtdJogadas = 0
}

function novaPartida() {
    ptsJ1 = 0
    dadosPtsJ1.innerHTML = ptsJ1
    ptsJ2 = 0
    dadosPtsJ2.innerHTML = ptsJ2
    novaRodada()
    fecharModalVitoria()
}

function verPartida() {
    let caixa = document.querySelector('#vitoria-modal')
    let p = document.querySelector('#vitoria-modal-p')
    caixa.classList.toggle('ver-partida')
    p.classList.toggle('ver-partida-p')
}