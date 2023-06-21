//// Crie uma função que receba uma frase como parâmetro e retorne a mesma frase, mas com todas as palavras em ordem inversa.

const fraseReversa = (frase) =>{
    fraseInvertida = frase.split(' ').reverse().join(' ')
    return fraseInvertida
} 

console.log(fraseReversa('Eu gosto de programação'))