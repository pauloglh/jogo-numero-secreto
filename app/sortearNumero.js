const menorValor = 1
const maiorValor = 1000

const numeroAleatorio =  gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número aleatório: ', numeroAleatorio)

const elementoMenorValor = document.querySelector('#numero-menor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector('#numero-maior')
elementoMaiorValor.innerHTML = maiorValor