//Escreva uma função que receba um array de strings como parâmetro e retorne um novo array contendo somente as strings com mais de 5 caracteres.

const maior5 = (vetor) =>{
    let vetor5 = []
    for (c = 0 ; c<vetor.length; c++){
        if(vetor[c].length > 5){
            vetor5.push(vetor[c])
        }
    }

    return vetor5
}

let array  = ['javascript' , 'nome' , 'html5' , 'cinco' , 'caractere', 'desenvolvimento' , 'web' , 'programação']

let array5 = maior5(array)

console.log('Maior que 5 caracteres:')
for (c = 0 ; c<array5.length ; c++){
    console.log(array5[c])
}