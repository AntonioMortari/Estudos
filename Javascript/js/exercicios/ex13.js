//Crie uma função que receba um número como parâmetro e retorne a soma de todos os seus dígitos. Por exemplo, se o número fornecido for 12345, a função deve retornar 15 (1 + 2 + 3 + 4 + 5)

const somaDigitos = (num) =>{
    let soma = 0
    let arrayN = []
    let str = num.toString()
    let arrayS = str.split('')
    for (c = 0 ; c<arrayS.length ; c++){
        arrayN.push(Number(arrayS[c]))
    }

    for(c = 0; c<arrayN.length; c++){
        soma = arrayN[c] + soma
    }
    return soma
}

let n = 15

let somaD = somaDigitos(n)

console.log(somaD)