//Crie uma função que receba um número como parâmetro e retorne a soma de todos os números inteiros de 1 até esse número.

const somaInt = (num) =>{
    s = 0
    for(c = 1 ; c<=num ; c++){
        s = s+c
    }

    return s
}

let soma = somaInt(10)

console.log(soma)