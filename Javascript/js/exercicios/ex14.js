//Crie uma função que receba um array de strings como parâmetro e retorne a string mais longa desse array

const maiorString = (array) =>{
    let maior = 0
    let maiorS = 0
    for (c = 0 ; c<array.length ; c++){
        if(array[c].length > maior ){
            maior = array[c].length
            maiorS = array[c]
        }
    }

    return maiorS
}

let arraystring = ['arara' , 'javascript' , 'paralelepipedo' , 'torpedo' , 'mensagem' , 'Esta é a maior string do vetor, confia :)']

console.log(maiorString(arraystring))