const ganhar = new Audio('/songs/winner.mp3')
const efeito = new Audio('/songs/snd_power.wav')

function verificaSeOChutePossuiUmValorValido() {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        efeito.play()
        elementoChute.innerHTML += '<div>São números, e não palavras! (ou tente melhorar um pouco sua voz)</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        efeito.play()
        elementoChute.innerHTML += `<div>O número secreto precisa estar 
        entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        ganhar.play()
        document.body.innerHTML = `
        <img class="guizinha" src="/img/guizinha.png" alt="Black Swan - Honkai: Star Rail">
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}!<h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`

    } else if (numero > numeroSecreto) {
        efeito.play()
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`
    } else {
        efeito.play()
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number, isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})