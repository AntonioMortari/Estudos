// Escreva uma função que receba uma string como parâmetro e retorne a string invertida. (...)

// Implemente uma função que verifique se um número é par ou ímpar e retorne "par" ou "ímpar", respectivamente

const parOuimpar = (numero) =>{
    if(numero %2 ==0){
        return 'par'
    }else{
        return 'impar'
    }
}

const num = parOuimpar(123)

console.log(num)