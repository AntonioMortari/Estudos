//Implemente uma função que receba um array de números como parâmetro e retorne a média aritmética dos elementos desse array.

const media = (array) =>{
    let soma = 0

    for (c = 0 ; c<array.length ; c++){
        soma = soma+array[c]
    }

    let media = soma / array.length
    
    return media
}

let numeros = [10,10,10]

console.log(media(numeros))