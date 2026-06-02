function verificador() {
    // Jogadores
    const j1 = document.querySelector('input#j1').value
    const j2 = document.querySelector('input#j2').value
    console.log(`Os jogadores são: ${j1} e ${j2}`)
    
    // Melhor de
    const melhorDe = document.querySelector('input[name="melhorde"]:checked').value
    console.log(melhorDe + " foi selecionado")
}