function animarIcone() {
    setTimeout(function(){
        const iconeLinhas = document.querySelectorAll('.icone-linha')
        iconeLinhas.forEach(function(linha, i) {
            setTimeout(function(){
                linha.classList.add('icone-jogo-linhas-animacao')
            }, 350 * i)
        })
    }, 500)
}

function verificador() {
    // Jogadores
    const j1 = document.querySelector('input#j1').value
    const j2 = document.querySelector('input#j2').value
    console.log(`Os jogadores são: ${j1} e ${j2}`)
    sessionStorage.setItem("jogador1", j1)
    sessionStorage.setItem("jogador2", j2)
    
    // Melhor de
    const melhorDe = document.querySelector('input[name="melhorde"]:checked').value
    console.log(melhorDe + " foi selecionado")
    sessionStorage.setItem("melhorDe", melhorDe)
}

function selecaoModo(id) {
    let umJogador = document.getElementById('um-jogador')
    let divUmJogador = document.getElementById('opcoes-um-jogador')
    let doisJogadores = document.getElementById('dois-jogadores')
    let divDoisJogadores = document.getElementById('opcoes-dois-jogadores')
    let botaoJogar = document.getElementById('botao-jogar')

    if (id == 'um-jogador') {
        umJogador.classList.add('modo-selecionado')
        doisJogadores.classList.remove('modo-selecionado')

        divUmJogador.classList.remove('oculto')
        divDoisJogadores.classList.add('oculto')
        botaoJogar.classList.add('oculto')
    } else {
        umJogador.classList.remove('modo-selecionado')
        doisJogadores.classList.add('modo-selecionado')

        divUmJogador.classList.add('oculto')
        divDoisJogadores.classList.remove('oculto')
        botaoJogar.classList.remove('oculto')
    }
}

function abrirFecharModal(modal) {
    document.querySelectorAll('.fade')[modal].classList.toggle('oculto')
}