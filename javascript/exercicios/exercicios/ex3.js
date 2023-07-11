// Crie uma função que receba um array de números como parâmetro e retorne o maior número do array.

const maiorNumero = (numeros) =>{
    let maior = 0
    for (c = 0; c<=numeros.length; c++){
        if(numeros[c] > maior){
            maior = numeros[c]
        }
    }

    return maior
} 

const num = [1,2,3,4,10,30,200]

const maiorN = maiorNumero(num)

console.log(maiorN)