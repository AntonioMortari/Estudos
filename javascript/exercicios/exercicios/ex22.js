//Crie uma função que receba um array de números e retorne a soma de todos os números pares encontrados.

const somaPares = (array) =>{
    let soma = 0
    for (c = 0 ; c<array.length ; c++){
        if(array[c]%2 == 0){
            soma = soma+array[c]
        }
    }

    return soma
} 

let numeros = [2,4,4,3,1,5,61]

let somaDosPares = somaPares(numeros)

console.log(somaDosPares)