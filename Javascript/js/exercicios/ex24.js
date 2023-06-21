//// Crie uma função que receba um array de números como parâmetro e retorne um novo array com apenas os números pares.

//Por exemplo, se o array fornecido for [1, 2, 3, 4, 5, 6], a função deve retornar [2, 4, 6], que são os números pares presentes no array original.

const arrayPares = (array) =>{
    let arrayP = []
    for(c = 0 ; c<array.length ; c++){
        if(array[c] % 2 == 0){
            arrayP.push(array[c])
        } 
    }

    return arrayP
}
let numeros = [2,4,6,31,33,37]
console.log('Números pares do array :')
let numerosPares = arrayPares(numeros)
for(c = 0 ;c<numerosPares.length ; c++){
    console.log(numerosPares[c])
}