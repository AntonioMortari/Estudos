// Escreva uma função que receba um array de números como parâmetro e retorne a soma de todos os elementos do array.


const somaArray = (vetor) =>{
    let soma = 0
    for (let c = 0 ; c<vetor.length ; c++){
        soma = soma+vetor[c]
    }

    return soma
}

let array = [10,20,30,40,100]

let somaA = somaArray(array)

console.log(somaA)