// Preparando dados

let partida = [null, null, null, null, null, null, null, null, null]

for(let c = 1; c <= 9; c++) {
    document.getElementById(`a${c}`).innerHTML = partida[c-1]
}

const j1 = sessionStorage.getItem("jogador1")
const j2 = sessionStorage.getItem("jogador2")
if (j1) { document.getElementById('dados-j1-nome').innerHTML = j1 }
if (j2) { document.getElementById('dados-j2-nome').innerHTML = j2 }

// Partida

/* 
    1. Fazer jogada
    2. Verificar se a jogada é válida
    2.1. Se não, mostrar mensagem de erro
    2.2. Se sim, seguir com próxima verificação
    3. Verificar se há vencedor
    3.1. Se sim, fim de jogo
    3.2. Se não, passar vez
*/

let vez = 'j1'
let dadosVezJ1 = document.getElementById('dados-j1-vez')
let dadosVezJ2 = document.getElementById('dados-j2-vez')

let ptsJ1 = document.getElementById('dados-j1-pts')
let ptsJ2 = document.getElementById('dados-j2-pts')

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
        haVencedor()
        atualizarVez()
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
        alert(`${j1} foi o vencedor`)
    }
    else if (
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
        alert(`${j2} foi o vencedor`)
    }
}

function atualizarVez() {
    dadosVezJ1.classList.toggle('oculto')
    dadosVezJ2.classList.toggle('oculto')
    if (vez == 'j1') {
        vez = 'j2'
    } else {
        vez = 'j1'
    }
}